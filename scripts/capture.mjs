/**
 * Captures silent product loops for the portfolio.
 *
 *   node scripts/capture.mjs <target>
 *   node scripts/capture.mjs studio-hud
 *   node scripts/capture.mjs thirdeye
 *
 * Each target is re-runnable: when the product UI changes, run it again and the
 * clip regenerates. That is the whole point — a hand-recorded video goes stale
 * the next time you ship, a script does not.
 *
 * Secrets are referenced by env var name only and are never read or logged here.
 * Provide them from the product's own env, e.g.
 *   export ADMIN_SECRET="$(grep -m1 '^ADMIN_SECRET=' /path/.env.local | cut -d= -f2-)"
 */
import { chromium } from '@playwright/test';
import { mkdtempSync, renameSync, readdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const TARGETS = {
  'studio-hud': {
    url: 'http://localhost:3030/hud',
    settleMs: 3500,
    durationMs: 9000,
    // The studio gates its agent API behind a token the client reads from
    // localStorage. Without it the HUD renders a 401 banner and 0/6 agents up.
    seedStorage: () =>
      process.env.ADMIN_SECRET && {
        key: 'cfb_admin_token',
        value: process.env.ADMIN_SECRET,
        requiredMsg: 'ADMIN_SECRET not set — the HUD will render its unauthorized state.',
      },
    async act() {
      /* the HUD animates on its own; no interaction needed */
    },
  },

  thirdeye: {
    url: 'https://thirdeyetrading.io/performance-dashboard',
    // Data load time varies; wait for the rows rather than guessing a duration.
    settleMs: 0,
    durationMs: 9000,
    // Wait for a POSITIVE signal — actual table rows. Waiting for a loader to
    // disappear passes instantly before the loader has even rendered, which is
    // how this first "succeeded" 98ms after navigation on a still-blank page.
    readyWhen: async (page) =>
      page.waitForFunction(
        () => document.querySelectorAll('tbody tr').length >= 8,
        undefined,
        { timeout: 90_000 }
      ),
    // The dashboard looks public in a logged-in browser but redirects to the
    // membership wall without a session. Sign in first, or the capture is a
    // recording of a signup page.
    login: {
      url: 'https://thirdeyetrading.io/auth',
      emailVar: 'THIRDEYE_EMAIL',
      passwordVar: 'THIRDEYE_PASSWORD',
      emailSelector: '#email',
      passwordSelector: '#password',
    },
    async act(page) {
      // Hold on the headline numbers first — the hit rate, settled-play count
      // and median peak are the argument; the table is the evidence. Then a
      // short scroll reveals rows without pushing the KPI row out of frame.
      await page.waitForTimeout(2500);
      for (let i = 0; i < 8; i++) {
        await page.mouse.wheel(0, 32);
        await page.waitForTimeout(260);
      }
    },
  },
};

const name = process.argv[2];
const target = TARGETS[name];
if (!target) {
  console.error(`Unknown target "${name}". Known: ${Object.keys(TARGETS).join(', ')}`);
  process.exit(1);
}

const OUT_DIR = mkdtempSync(join(tmpdir(), `capture-${name}-`));
const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1920, height: 1080 },
  deviceScaleFactor: 1,
  recordVideo: { dir: OUT_DIR, size: { width: 1920, height: 1080 } },
  reducedMotion: 'no-preference',
});

const seed = target.seedStorage?.();
if (seed) {
  await context.addInitScript(
    ([key, value]) => {
      window.localStorage.setItem(key, value);
      window.sessionStorage.setItem(key, value);
    },
    [seed.key, seed.value]
  );
} else if (target.seedStorage) {
  console.warn('Auth env var not set — capture may show an unauthorized state.');
}

const page = await context.newPage();

if (target.login) {
  const { url, emailVar, passwordVar, emailSelector, passwordSelector } = target.login;
  const email = process.env[emailVar];
  const password = process.env[passwordVar];
  if (!email || !password) {
    console.error(
      `${emailVar} and ${passwordVar} must be set to capture "${name}".\n` +
        `Without a session this page redirects to its signup wall, and the clip\n` +
        `would be a recording of a paywall. Add them to .env.local and re-run.`
    );
    process.exit(1);
  }
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  // The auth route lands on the signup view. The credential form only exists
  // after clicking the "Already a member? Sign in" button — matched by role,
  // because a text matcher resolves to a wrapping container instead.
  const emailField = page.locator(emailSelector);
  if (!(await emailField.isVisible().catch(() => false))) {
    await page.getByRole('button', { name: /already a member/i }).click();
  }
  await page.waitForSelector(emailSelector, { timeout: 20_000 });
  await page.fill(emailSelector, email);
  await page.fill(passwordSelector, password);
  await page.getByRole('button', { name: /^sign in$/i }).click();
  // Wait for the app to leave the auth route rather than a fixed sleep.
  await page
    .waitForURL((u) => !u.pathname.startsWith('/auth'), { timeout: 30_000 })
    .catch(() => {
      throw new Error(
        `Still on ${page.url()} after signing in — credentials rejected, or the ` +
          `form needs an explicit submit click. Capture aborted rather than ` +
          `recording a logged-out page.`
      );
    });
}

const navAt = Date.now();
await page.goto(target.url, { waitUntil: 'domcontentloaded' });

// Wait for real content rather than a fixed sleep — load time varies, and a
// guessed timeout is how you end up shipping a clip of a spinner.
if (target.readyWhen) await target.readyWhen(page);
if (target.settleMs) await page.waitForTimeout(target.settleMs);
const readyOffsetMs = Date.now() - navAt;

// Refuse to record a paywall. Cheap guard, and it is exactly the failure that
// silently produced a signup-page "demo" on the first attempt.
if (target.login) {
  const walled = await page
    .getByText(/apply for access|already a member|get started/i)
    .count()
    .catch(() => 0);
  if (walled > 0) {
    console.error('Capture aborted: still seeing the membership wall after login.');
    process.exit(1);
  }
}

const started = Date.now();
await target.act(page);
const remaining = target.durationMs - (Date.now() - started);
if (remaining > 0) await page.waitForTimeout(remaining);

await context.close();
await browser.close();

const file = readdirSync(OUT_DIR).find((f) => f.endsWith('.webm'));
if (!file) {
  console.error('No video produced — is', target.url, 'reachable?');
  process.exit(1);
}
const final = join(OUT_DIR, `${name}.webm`);
renameSync(join(OUT_DIR, file), final);
// Second line is where usable footage begins, so the encode step can trim the
// load/spinner period instead of the caller guessing at it.
console.log(final);
console.log(`READY_AT_MS=${readyOffsetMs}`);
