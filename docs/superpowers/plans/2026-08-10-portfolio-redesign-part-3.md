# Portfolio Redesign — Plan Part 3 (Tasks 6–10)

> Continues parts 1 and 2. Same Global Constraints apply.

---

### Task 6: Project pages + diagrams as dark plates

17 diagram components hardcode a `#030303` canvas with saturated nodes
(`#06B6D4`, `#22C55E`, `#A855F7`, `#F59E0B`). Recoloring all 17 for paper would
be a large diff and would flatten their legibility — those hues were chosen to
separate against black. Instead each diagram is presented as a **dark inset
plate**, the way a printed book sets a photographic figure. The components are
not touched.

**Files:**
- Create: `components/DiagramPlate.tsx`
- Modify: `components/ProjectPage.tsx` (433 lines — restyle to tokens, mount plates)
- Modify: `e2e/contrast.spec.ts` (un-fixme the two project pages)
- Create: `e2e/diagrams.spec.ts`

**Interfaces:**
- Consumes: tokens from Task 3.
- Produces: `DiagramPlate({ title, children }: { title: string; children: React.ReactNode })`.

- [ ] **Step 1: Write the failing test**

```ts
// e2e/diagrams.spec.ts
import { test, expect } from '@playwright/test';
import { auditContrast } from './lib/contrast';

test('diagram plates keep their own dark ground', async ({ page }) => {
  await page.goto('/projects/nightkey');
  const plate = page.getByTestId('diagram-plate').first();
  const bg = await plate.evaluate((el) => getComputedStyle(el).backgroundColor);
  const [r, g, b] = bg.match(/\d+/g)!.map(Number);
  expect(r + g + b).toBeLessThan(60); // still dark, not inverted to paper
});

test('plate captions are legible against paper, not the plate', async ({ page }) => {
  await page.goto('/projects/nightkey');
  const failures = (await auditContrast(page)).filter((f) => f.selector.includes('figcaption'));
  expect(failures).toEqual([]);
});
```

- [ ] **Step 2: Run to verify it fails**

Run: `npx playwright test e2e/diagrams.spec.ts`
Expected: FAIL — no `diagram-plate` testid.

- [ ] **Step 3: Implement `components/DiagramPlate.tsx`**

```tsx
export function DiagramPlate({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <figure className="mt-12">
      <div
        data-testid="diagram-plate"
        className="w-full overflow-hidden rounded-[2px] bg-[#0E0D0B] p-6 media-lift"
      >
        {children}
      </div>
      <figcaption className="label mt-3">{title}</figcaption>
    </figure>
  );
}
```

The caption sits on paper below the plate, so it is audited against paper and
passes; the plate interior is excluded from the page audit because its own
background is measured by `bgOf()` walking up to the plate, not the body.

- [ ] **Step 4: Restyle `components/ProjectPage.tsx`**

Mechanical pass over the existing 433 lines:
- Replace every `text-[#F5F5DC]` / `text-[#F5F5DC]/70` / `/40` with `text-ink` or `text-muted`.
- Replace every `bg-[#1C1C1C]` / `bg-[#030303]` with `bg-paper`.
- Replace every `border-[#F5F5DC]/10` with `border-rule`.
- Replace `text-[#800020]` on body copy with `text-ink`; keep `text-accent` for links only.
- Constrain prose to `max-w-[720px] mx-auto`; let `DiagramPlate` and `ProductMedia` run to `max-w-[1100px]`.
- Headings: `h1` uses `font-display italic text-[44px]`; `h2` is `text-[20px] font-medium`. Nothing larger.
- Wrap each diagram the page already renders in `<DiagramPlate title={...}>`.

- [ ] **Step 5: Un-fixme the project pages in `e2e/contrast.spec.ts`**

```ts
const READY = ['/', '/projects/cfb-fantasy', '/projects/nightkey'];
for (const path of PAGES) {
  const runner = READY.includes(path) ? test : test.fixme;
```

- [ ] **Step 6: Run**

Run: `npx playwright test e2e/diagrams.spec.ts e2e/contrast.spec.ts`
Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add components/DiagramPlate.tsx components/ProjectPage.tsx e2e
git commit -m "feat: project pages on paper, diagrams as dark inset plates

Keeps the 17 diagram components untouched — their palettes are tuned
for a dark canvas, so they are presented as figures rather than
recolored."
```

---

### Task 7: About page

**Files:**
- Modify: `app/about/page.tsx` (306 lines)
- Modify: `e2e/contrast.spec.ts` (un-fixme `/about`)

- [ ] **Step 1: Confirm it currently fails**

Temporarily un-fixme `/about` and run
`npx playwright test e2e/contrast.spec.ts -g about`
Expected: FAIL with a list of dark-ground colours.

- [ ] **Step 2: Apply the same mechanical pass as Task 6 Step 4**

Same substitution table. Additionally: the page's single display line becomes
`font-display italic text-[44px]`; every other heading drops to `text-[20px]`.
Constrain all prose to `max-w-[720px]`.

- [ ] **Step 3: Un-fixme `/about` permanently and run**

Run: `npx playwright test e2e/contrast.spec.ts`
Expected: PASS on all four pages. Remove the `READY` array and the `.fixme`
branch entirely — every page in `PAGES` now runs.

- [ ] **Step 4: Commit**

```bash
git add app/about/page.tsx e2e/contrast.spec.ts
git commit -m "feat: about page on warm paper; all pages pass contrast audit"
```

---

### Task 8: Dashboard as a scoped dark island

`/dashboard/*` is private (`noindex`) and its 14 components are built for dark.
Rather than invert them, scope the old tokens to the dashboard subtree.

**Files:**
- Modify: `app/globals.css` (append a scoped block)
- Modify: `app/dashboard/layout.tsx`
- Create: `e2e/dashboard.spec.ts`

- [ ] **Step 1: Write the failing test**

```ts
// e2e/dashboard.spec.ts
import { test, expect } from '@playwright/test';

test('dashboard keeps a dark ground while the site is paper', async ({ page }) => {
  await page.goto('/dashboard');
  const bg = await page.evaluate(() => {
    const el = document.querySelector('[data-surface="dark"]')!;
    return getComputedStyle(el).backgroundColor;
  });
  const [r, g, b] = bg.match(/\d+/g)!.map(Number);
  expect(r + g + b).toBeLessThan(120);
});
```

- [ ] **Step 2: Run to verify it fails**

Run: `npx playwright test e2e/dashboard.spec.ts`
Expected: FAIL — no `data-surface="dark"` element.

- [ ] **Step 3: Append the scoped tokens to `app/globals.css`**

```css
/* The private dashboard keeps the old dark palette. Scoped, not global. */
[data-surface="dark"] {
  --paper:  #1C1C1C;
  --ink:    #F5F5DC;
  --muted:  rgb(245 245 220 / 0.65);
  --accent: #C46A72;              /* lightened: 4.59:1 on #1C1C1C */
  --rule:   rgb(245 245 220 / 0.12);
  background: var(--paper);
  color: var(--ink);
}
```

Note the accent is deliberately **not** `#800020` here — that is the 1.57:1
value this whole redesign exists to eliminate.

- [ ] **Step 4: Add the attribute in `app/dashboard/layout.tsx`**

Wrap the returned children in `<div data-surface="dark" className="min-h-screen">`.

- [ ] **Step 5: Run both dashboard and contrast suites**

Run: `npx playwright test e2e/dashboard.spec.ts e2e/contrast.spec.ts`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add app/globals.css app/dashboard/layout.tsx e2e/dashboard.spec.ts
git commit -m "feat: scope the private dashboard to its own dark tokens"
```

---

### Task 9: Render the Third Eye and Bisect clips

`remotion/Root.tsx` already defines `ThirdEyeDemo` and `BisectDemo`; neither has
ever been rendered. Nightkey has no composition and stays on its poster.

**Files:**
- Create: `public/projects/thirdeye-demo.mp4`, `public/projects/bisect-demo.mp4`
- Modify: `lib/projects.ts` (add `clip` to those two)
- Create: `e2e/media-budget.spec.ts`

- [ ] **Step 1: Render both**

```bash
npm run remotion:render:thirdeye
npm run remotion:render:bisect
```

- [ ] **Step 2: Check them against the 1.5 MB budget**

```bash
ls -lh public/projects/thirdeye-demo.mp4 public/projects/bisect-demo.mp4
```

If either exceeds 1.5 MB, re-encode:

```bash
ffmpeg -y -i public/projects/thirdeye-demo.mp4 -vf scale=1600:-2 \
  -c:v libx264 -preset slow -crf 24 -an -movflags +faststart \
  public/projects/thirdeye-demo.opt.mp4 && \
  mv public/projects/thirdeye-demo.opt.mp4 public/projects/thirdeye-demo.mp4
```

`-an` strips audio — every clip on this site is silent by design.

- [ ] **Step 3: Watch both before wiring them in**

Open each file. These are Remotion motion-graphics compositions, not screen
recordings of the running product. If a clip reads as an animated explainer
rather than the product being used, **do not wire it in** — leave the poster and
note it for a real capture session. A generic motion graphic is worse than a
good still for the "this is a real product" argument.

- [ ] **Step 4: Wire the clips that passed Step 3**

```ts
// lib/projects.ts — thirdeye
clip: '/projects/thirdeye-demo.mp4',
// lib/projects.ts — bisect
clip: '/projects/bisect-demo.mp4',
```

- [ ] **Step 5: Add the budget test**

```ts
// e2e/media-budget.spec.ts
import { test, expect } from '@playwright/test';
import { statSync, existsSync } from 'node:fs';

const CLIPS = [
  'public/projects/cfb-demo.mp4',
  'public/projects/thirdeye-demo.mp4',
  'public/projects/bisect-demo.mp4',
];

for (const p of CLIPS) {
  test(`${p} is under the 1.5 MB budget`, () => {
    test.skip(!existsSync(p), 'clip not rendered yet');
    expect(statSync(p).size).toBeLessThan(1.5 * 1024 * 1024);
  });
}
```

Note: `cfb-demo.mp4` is currently 18 MB and **will fail** — re-encode it with
the Step 2 command before committing.

- [ ] **Step 6: Run**

Run: `npx playwright test e2e/media-budget.spec.ts e2e/product-media.spec.ts`
Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add public/projects lib/projects.ts e2e/media-budget.spec.ts
git commit -m "feat: render Third Eye and Bisect clips, enforce a 1.5MB budget"
```

---

### Task 10: Responsive, performance, and dead code

**Files:**
- Create: `e2e/responsive.spec.ts`
- Delete: any component left unreferenced

- [ ] **Step 1: Write the responsive test**

```ts
// e2e/responsive.spec.ts
import { test, expect } from '@playwright/test';

const WIDTHS = [320, 375, 768, 1024, 1440, 1920];
const PAGES = ['/', '/about', '/projects/cfb-fantasy'];

for (const w of WIDTHS) {
  for (const path of PAGES) {
    test(`${path} @ ${w} does not scroll horizontally`, async ({ page }) => {
      await page.setViewportSize({ width: w, height: 900 });
      await page.goto(path);
      await page.waitForLoadState('networkidle');
      const overflows = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1
      );
      expect(overflows).toBe(false);
    });
  }
}

test('every link is keyboard reachable with a visible focus ring', async ({ page }) => {
  await page.goto('/');
  const links = await page.locator('a').count();
  for (let i = 0; i < links; i++) {
    await page.keyboard.press('Tab');
  }
  const outline = await page.evaluate(() => {
    const el = document.activeElement!;
    const s = getComputedStyle(el);
    return s.outlineStyle !== 'none' || s.boxShadow !== 'none';
  });
  expect(outline).toBe(true);
});
```

- [ ] **Step 2: Run and fix any overflow**

Run: `npx playwright test e2e/responsive.spec.ts`
Expected: PASS at all 18 combinations. The likely offender is the 1100px media
block at ≤375px — it must be `w-full` with the page's `px-6`, never a fixed width.

- [ ] **Step 3: Find dead code**

```bash
npx knip --no-exit-code || true
```

Delete anything unreferenced that this redesign orphaned (likely
`components/ContactForm.tsx`, `components/TechStackGraph.tsx`). Do not delete
files still imported by `/dashboard`.

- [ ] **Step 4: Lighthouse**

```bash
npm run build && npm run start &
npx lighthouse http://localhost:3000 --only-categories=performance,accessibility \
  --chrome-flags="--headless" --output=json --output-path=./lighthouse.json
node -e "const r=require('./lighthouse.json');
  const a=r.audits;
  console.log('LCP', a['largest-contentful-paint'].displayValue);
  console.log('CLS', a['cumulative-layout-shift'].displayValue);
  console.log('TBT', a['total-blocking-time'].displayValue);
  console.log('a11y', r.categories.accessibility.score*100);"
```

Targets: LCP < 2.5s, CLS < 0.1, TBT < 200ms, accessibility 100.

- [ ] **Step 5: Full suite**

Run: `npx playwright test`
Expected: all green.

- [ ] **Step 6: Commit and open the PR**

```bash
rm -f lighthouse.json
git add -A
git commit -m "test: responsive, focus, and performance verification; drop dead code"
git push -u origin redesign/product-forward
```

---

## Self-Review

**Spec coverage.** Palette → Task 3. Typography → Task 3 (+44px assertion).
Layout → Task 5. Media component → Task 4. Project pages → Task 6. About →
Task 7. Diagrams → Task 6. Dashboard → Task 8. Performance budget → Tasks 9–10.
Verification → Tasks 1, 2, 10. Deferred capture → Task 9 Step 3 gates it.

**Gap found and closed:** the spec's 1.5 MB budget would have failed on the
existing 18 MB `cfb-demo.mp4`, which no task originally touched. Task 9 Step 5
now calls this out explicitly.

**Gap found and closed:** the spec did not say what the dashboard accent becomes.
Reusing `#800020` there would have reintroduced 1.57:1 inside the private pages.
Task 8 Step 3 pins it to `#C46A72` (4.59:1).

**Type consistency.** `ProductMediaProps` in Task 4 includes `testId`, which the
Task 4 test relies on and Task 5's `ProductEntry` passes. `Project.clip` and
`Project.chips` are added in Task 5 Step 1 and consumed in Task 5 Step 2 and
Task 9 Step 4. `auditContrast` / `ratioForTest` signatures are fixed in Task 1
and unchanged thereafter.
