/**
 * Captures a silent loop of the Ballknowers content-studio HUD.
 *
 * Re-runnable: point it at a running studio and it regenerates the clip, so the
 * portfolio media does not go stale when the studio UI changes.
 *
 *   node scripts/capture-hud.mjs [url] [seconds]
 */
import { chromium } from '@playwright/test';
import { mkdtempSync, renameSync, readdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const URL = process.argv[2] ?? 'http://localhost:3030/hud';
const SECONDS = Number(process.argv[3] ?? 9);
const OUT_DIR = mkdtempSync(join(tmpdir(), 'hud-capture-'));

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1920, height: 1080 },
  deviceScaleFactor: 1,
  recordVideo: { dir: OUT_DIR, size: { width: 1920, height: 1080 } },
  // The HUD animates continuously; we want it captured as it really runs.
  reducedMotion: 'no-preference',
});

// The studio gates its agent API behind an admin token the client reads from
// localStorage. Seed it from the environment so the capture shows live agent
// state instead of a 401 banner. The value is never read or logged here — it
// comes from the studio's own .env at run time.
if (process.env.ADMIN_SECRET) {
  await context.addInitScript(
    ([key, token]) => {
      window.localStorage.setItem(key, token);
      window.sessionStorage.setItem(key, token);
    },
    ['cfb_admin_token', process.env.ADMIN_SECRET]
  );
} else {
  console.warn('ADMIN_SECRET not set — the HUD will render its unauthorized state.');
}

const page = await context.newPage();
await page.goto(URL, { waitUntil: 'domcontentloaded' });

// Let the orbit spin up and the sys-log populate before the clip starts.
await page.waitForTimeout(3500);
await page.waitForTimeout(SECONDS * 1000);

await context.close();
await browser.close();

const file = readdirSync(OUT_DIR).find((f) => f.endsWith('.webm'));
if (!file) {
  console.error('No video produced — is the studio running at', URL, '?');
  process.exit(1);
}
const final = join(OUT_DIR, 'hud.webm');
renameSync(join(OUT_DIR, file), final);
console.log(final);
