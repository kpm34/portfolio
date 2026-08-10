# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Invert kashcreates.app to a warm-paper, product-forward site whose home page sells the finished products and whose technical depth lives one click down.

**Architecture:** Tokens in `app/globals.css` drive every surface, so the inversion lands first and its blast radius (about page, 21 diagram components, private dashboard) is handled before any page redesign. A single `ProductMedia` component renders either a looping video or a poster still with identical layout, so clips can be added later without touching pages. A Playwright contrast assertion is built first and stays green from Task 4 onward.

**Tech Stack:** Next.js 15 App Router, React 19, Tailwind CSS v4 (`@import "tailwindcss"`, `@theme inline`), framer-motion, next/font/google, Remotion 4, Playwright (new).

## Global Constraints

- Ground `#FAF9F6`; ink `#16150F`; muted `#5A5750`; accent `#800020`; rule `#16150F` at 12%.
- **No text anywhere on the site above 44px.**
- Body/UI type ≤16px. Labels 12px JetBrains Mono, tracked caps. Display is Instrument Serif italic, one line per page.
- Marcellus must be removed from the font imports entirely.
- `.glass-panel`, `.text-gradient`, `.text-accent-gradient`, the radial mesh background, and all shadows except one tight lift under media must be deleted.
- Hero text is server-rendered with **no entrance animation**. No `whileInView`, no `initial={{opacity:0}}` gating first paint.
- Every clip ≤1.5 MB. LCP < 2.5s, CLS < 0.1, TBT < 200ms.
- `prefers-reduced-motion` never autoplays video.
- Only one video plays at a time.
- No changes to any file outside this repo.

---

### Task 1: Contrast measurement harness

The guardrail everything else is checked against. Built first so it can never be skipped later. Note the two traps this must handle: Tailwind v4 emits `lab()` computed colours (a naive RGB regex silently returns wrong ratios), and text can be hidden by an inherited ancestor `opacity`.

**Files:**
- Create: `e2e/lib/contrast.ts`
- Create: `e2e/lib/contrast.spec.ts`
- Create: `playwright.config.ts`
- Modify: `package.json` (scripts, devDependencies)

**Interfaces:**
- Produces: `auditContrast(page: Page): Promise<ContrastFailure[]>` where `ContrastFailure = { text: string; px: number; ratio: number; required: number; selector: string }`. Tasks 4–7 call this and assert the array is empty.

- [ ] **Step 1: Install Playwright**

```bash
npm i -D @playwright/test
npx playwright install chromium
```

- [ ] **Step 2: Create `playwright.config.ts`**

```ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  reporter: 'list',
  use: { baseURL: 'http://localhost:3000' },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: 'npm run build && npm run start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
});
```

- [ ] **Step 3: Write the failing test for the helper**

```ts
// e2e/lib/contrast.spec.ts
import { test, expect } from '@playwright/test';
import { auditContrast, ratioForTest } from './contrast';

test('ratio math matches known WCAG pairs', async ({ page }) => {
  await page.goto('about:blank');
  // burgundy on the old charcoal — the documented 1.57:1 failure
  expect(await ratioForTest(page, '#800020', '#1C1C1C')).toBeCloseTo(1.57, 1);
  // burgundy on warm paper — the fix
  expect(await ratioForTest(page, '#800020', '#FAF9F6')).toBeCloseTo(10.29, 1);
  // ink on paper
  expect(await ratioForTest(page, '#16150F', '#FAF9F6')).toBeCloseTo(17.37, 1);
});

test('lab() colours are resolved, not regex-parsed', async ({ page }) => {
  await page.goto('about:blank');
  // lab() for pure white must read as ~21:1 on black, not garbage
  expect(await ratioForTest(page, 'lab(100 0 0)', '#000000')).toBeGreaterThan(20);
});
```

- [ ] **Step 4: Run it to verify it fails**

Run: `npx playwright test e2e/lib/contrast.spec.ts`
Expected: FAIL — `Cannot find module './contrast'`

- [ ] **Step 5: Implement the helper**

```ts
// e2e/lib/contrast.ts
import type { Page } from '@playwright/test';

export interface ContrastFailure {
  text: string;
  px: number;
  ratio: number;
  required: number;
  selector: string;
}

/**
 * Resolves any CSS colour (including lab()/oklch()) to RGBA by round-tripping
 * it through a canvas, then composites it over `bg` and returns the WCAG ratio.
 * Exported for the helper's own unit test.
 */
export async function ratioForTest(page: Page, fg: string, bg: string): Promise<number> {
  return page.evaluate(([fg, bg]) => {
    const cv = document.createElement('canvas');
    cv.width = cv.height = 1;
    const ctx = cv.getContext('2d', { willReadFrequently: true })!;
    const toRGBA = (c: string): [number, number, number, number] => {
      ctx.clearRect(0, 0, 1, 1);
      ctx.fillStyle = '#000';
      ctx.fillStyle = c;
      ctx.fillRect(0, 0, 1, 1);
      const d = ctx.getImageData(0, 0, 1, 1).data;
      return [d[0], d[1], d[2], d[3] / 255];
    };
    const lin = (v: number) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    };
    const lum = (r: number, g: number, b: number) =>
      0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
    const [br, bgn, bb] = toRGBA(bg);
    const [fr, fg2, fb, fa] = toRGBA(fg);
    const R = fr * fa + br * (1 - fa);
    const G = fg2 * fa + bgn * (1 - fa);
    const B = fb * fa + bb * (1 - fa);
    const L1 = lum(R, G, B) + 0.05;
    const L2 = lum(br, bgn, bb) + 0.05;
    return Math.max(L1, L2) / Math.min(L1, L2);
  }, [fg, bg] as [string, string]);
}

/** Audits every rendered text leaf on the current page against WCAG AA. */
export async function auditContrast(page: Page): Promise<ContrastFailure[]> {
  return page.evaluate(() => {
    const cv = document.createElement('canvas');
    cv.width = cv.height = 1;
    const ctx = cv.getContext('2d', { willReadFrequently: true })!;
    const toRGBA = (c: string): [number, number, number, number] => {
      ctx.clearRect(0, 0, 1, 1);
      ctx.fillStyle = '#000';
      ctx.fillStyle = c;
      ctx.fillRect(0, 0, 1, 1);
      const d = ctx.getImageData(0, 0, 1, 1).data;
      return [d[0], d[1], d[2], d[3] / 255];
    };
    const lin = (v: number) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    };
    const lum = (r: number, g: number, b: number) =>
      0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);

    /** Walks up for the nearest non-transparent background. */
    const bgOf = (el: Element): [number, number, number] => {
      let n: Element | null = el;
      while (n) {
        const [r, g, b, a] = toRGBA(getComputedStyle(n).backgroundColor);
        if (a > 0.9) return [r, g, b];
        n = n.parentElement;
      }
      return [255, 255, 255];
    };

    const sel = (el: Element) => {
      const id = el.id ? `#${el.id}` : '';
      const cls = el.className && typeof el.className === 'string'
        ? '.' + el.className.trim().split(/\s+/).slice(0, 2).join('.')
        : '';
      return `${el.tagName.toLowerCase()}${id}${cls}`;
    };

    const out: any[] = [];
    for (const el of Array.from(document.querySelectorAll('*'))) {
      if (el.children.length) continue;                 // leaves only
      if (!el.textContent?.trim()) continue;
      if (!(el as HTMLElement).offsetParent && getComputedStyle(el).position !== 'fixed') continue;

      // inherited opacity chain
      let op = 1;
      let n: Element | null = el;
      while (n && n !== document.body) {
        op *= parseFloat(getComputedStyle(n).opacity);
        n = n.parentElement;
      }
      if (op === 0) continue;                            // invisible, not a contrast bug

      const s = getComputedStyle(el);
      const px = parseFloat(s.fontSize);
      const bold = parseInt(s.fontWeight, 10) >= 700;
      const large = px >= 24 || (px >= 18.66 && bold);
      const required = large ? 3 : 4.5;

      const [br, bgn, bb] = bgOf(el);
      const [fr, fg, fb, fa0] = toRGBA(s.color);
      const fa = fa0 * op;
      const R = fr * fa + br * (1 - fa);
      const G = fg * fa + bgn * (1 - fa);
      const B = fb * fa + bb * (1 - fa);
      const L1 = lum(R, G, B) + 0.05;
      const L2 = lum(br, bgn, bb) + 0.05;
      const ratio = +(Math.max(L1, L2) / Math.min(L1, L2)).toFixed(2);

      if (ratio < required) {
        out.push({ text: el.textContent.trim().slice(0, 40), px: Math.round(px), ratio, required, selector: sel(el) });
      }
    }
    return out;
  });
}
```

- [ ] **Step 6: Run the test to verify it passes**

Run: `npx playwright test e2e/lib/contrast.spec.ts`
Expected: PASS (2 tests)

- [ ] **Step 7: Add scripts to `package.json`**

Add to `"scripts"`: `"test:e2e": "playwright test"`, `"test:contrast": "playwright test e2e/contrast"`.

- [ ] **Step 8: Commit**

```bash
git add playwright.config.ts e2e package.json package-lock.json
git commit -m "test: add WCAG contrast audit harness

Resolves lab()/oklch() via canvas and composites inherited opacity —
a naive RGB regex silently returns wrong ratios on Tailwind v4."
```

---

### Task 2: Record the current failures as a baseline

Proves the harness catches the real bug before anything is changed. This test is expected to FAIL until Task 4; it is committed with `.fixme()` so the suite stays green, and un-fixmed in Task 4.

**Files:**
- Create: `e2e/contrast.spec.ts`

**Interfaces:**
- Consumes: `auditContrast` from `e2e/lib/contrast.ts`.

- [ ] **Step 1: Write the page-level audit**

```ts
// e2e/contrast.spec.ts
import { test, expect } from '@playwright/test';
import { auditContrast } from './lib/contrast';

const PAGES = ['/', '/about', '/projects/cfb-fantasy', '/projects/nightkey'];

for (const path of PAGES) {
  test.fixme(`${path} has no WCAG AA contrast failures`, async ({ page }) => {
    await page.goto(path);
    await page.waitForLoadState('networkidle');
    const failures = await auditContrast(page);
    expect(failures, JSON.stringify(failures, null, 2)).toEqual([]);
  });
}
```

- [ ] **Step 2: Confirm the failure is real by running one un-fixmed**

Temporarily change the first `test.fixme` to `test`, then run:
`npx playwright test e2e/contrast.spec.ts -g "^/ has"`
Expected: FAIL listing ~15 failures including `Ballknowers — CFB Fantasy` at ratio 1.57. Restore `test.fixme` afterward.

- [ ] **Step 3: Commit**

```bash
git add e2e/contrast.spec.ts
git commit -m "test: page-level contrast audit (fixme until inversion lands)"
```

---

### Task 3: Token inversion and typography foundation

**Files:**
- Modify: `app/globals.css` (full rewrite, 36 lines)
- Modify: `app/layout.tsx:2`, `:16-22`, `:37`
- Create: `e2e/tokens.spec.ts`

**Interfaces:**
- Produces: CSS custom properties `--paper`, `--ink`, `--muted`, `--accent`, `--rule`; Tailwind theme colours `bg-paper`, `text-ink`, `text-muted`, `text-accent`, `border-rule`; font variables `--font-inter`, `--font-jetbrains-mono`, `--font-instrument-serif`. Every later task uses these names.

- [ ] **Step 1: Write the failing test**

```ts
// e2e/tokens.spec.ts
import { test, expect } from '@playwright/test';

test('ground is warm paper and body text is ink', async ({ page }) => {
  await page.goto('/');
  const bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
  const [r, g, b] = bg.match(/\d+/g)!.map(Number);
  expect([r, g, b]).toEqual([250, 249, 246]);
});

test('Marcellus is gone and Instrument Serif is loaded', async ({ page }) => {
  await page.goto('/');
  const fonts = await page.evaluate(() =>
    Array.from(document.fonts).map((f) => f.family)
  );
  expect(fonts.join(' ')).not.toContain('Marcellus');
  expect(fonts.join(' ')).toContain('Instrument Serif');
});

test('no text exceeds 44px anywhere', async ({ page }) => {
  await page.goto('/');
  const oversized = await page.evaluate(() =>
    Array.from(document.querySelectorAll('*'))
      .filter((el) => !el.children.length && el.textContent?.trim())
      .map((el) => ({ t: el.textContent!.trim().slice(0, 30), px: parseFloat(getComputedStyle(el).fontSize) }))
      .filter((x) => x.px > 44)
  );
  expect(oversized).toEqual([]);
});
```

- [ ] **Step 2: Run to verify it fails**

Run: `npx playwright test e2e/tokens.spec.ts`
Expected: all three FAIL — body is `rgb(3, 3, 3)`, Marcellus present, hero name is 72px+.

- [ ] **Step 3: Rewrite `app/globals.css`**

```css
@import "tailwindcss";

:root {
  --paper:  #FAF9F6;
  --ink:    #16150F;
  --muted:  #5A5750;
  --accent: #800020;
  --rule:   rgb(22 21 15 / 0.12);
}

@theme inline {
  --color-paper:  var(--paper);
  --color-ink:    var(--ink);
  --color-muted:  var(--muted);
  --color-accent: var(--accent);
  --color-rule:   var(--rule);

  --font-sans:    var(--font-inter);
  --font-mono:    var(--font-jetbrains-mono);
  --font-display: var(--font-instrument-serif);
}

@layer utilities {
  /* 12px tracked caps used for every label and metadata chip */
  .label {
    @apply font-mono text-[12px] uppercase tracking-[0.12em] text-muted;
  }
  /* the single deliberate lift under media — the only shadow on the site */
  .media-lift {
    box-shadow: 0 1px 2px rgb(22 21 15 / 0.06), 0 8px 24px rgb(22 21 15 / 0.05);
  }
}

body {
  background: var(--paper);
  color: var(--ink);
}

::selection {
  background: var(--accent);
  color: var(--paper);
}
```

Deleted with this rewrite: `.glass-panel`, `.text-gradient`, `.text-accent-gradient`, and the old `--background`/`--foreground`/`--card-bg`/`--card-border` tokens.

- [ ] **Step 4: Update `app/layout.tsx`**

Replace the Marcellus import and the hardcoded body classes:

```tsx
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});
```

and the `<body>` className becomes:

```tsx
className={`${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} font-sans antialiased bg-paper text-ink`}
```

Remove the `marcellus` const and its entry in the className.

- [ ] **Step 5: Run the token tests**

Run: `npx playwright test e2e/tokens.spec.ts`
Expected: first two PASS. The 44px test may still FAIL — that is Task 4's job; leave it failing and do not weaken the assertion.

- [ ] **Step 6: Commit**

```bash
git add app/globals.css app/layout.tsx e2e/tokens.spec.ts
git commit -m "feat: invert to warm paper ground, swap Marcellus for Instrument Serif

Burgundy #800020 goes from 1.57:1 on charcoal to 10.29:1 on paper.
Drops glass-panel, text-gradient, and the unused Marcellus payload."
```

---

Remaining tasks are specified in the companion file
`2026-08-10-portfolio-redesign-part-2.md`: ProductMedia (4), home page (5),
project pages and diagrams (6), about page (7), dashboard dark island (8),
Remotion renders (9), responsive and Lighthouse verification (10).
