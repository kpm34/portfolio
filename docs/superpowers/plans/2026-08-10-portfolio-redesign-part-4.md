# Portfolio Redesign — Plan Part 4 (Task 11: refinement pass)

> Continues parts 1–3. Same Global Constraints apply.
> Added 2026-08-10 after running the interfacecraft-library critique checklist and
> motion principles against the rebuilt home page. The mechanical work (Tasks 1–10)
> gets the site to "styled". This task is what the library calls the upper half of
> the refinement ladder — the part that reads as care.

## Findings this task closes

| Source | Finding |
|---|---|
| Checklist #9 | Excess padding, mathematical spacing (`mt-24`/`mt-32`/`mt-16`, 88px gap under the hero, 619px media block). The library names this the "reads AI generated" tell. |
| Motion #2, #6 | No motion at all. framer-motion was stripped to fix the black-hero bug and replaced with nothing. The page sits at ladder level 2 and stopped. |
| Checklist #11 | One lone `border-t` above Currently; the rule is everywhere or nowhere. |
| — | The Ballknowers media is a black title card with a play button: the lead product shows no product. |

---

### Task 11: Refinement pass

**Files:**
- Modify: `app/page.tsx`, `components/ProductEntry.tsx`, `components/ProductMedia.tsx`, `app/globals.css`
- Create: `components/DialPanel.tsx` (dev-only tuning panel, must not ship to production)
- Create: `public/projects/cfb-poster.jpg`
- Create: `e2e/motion.spec.ts`

**Interfaces:**
- Consumes: everything from Tasks 3–5.
- Produces: no new public component API. `ProductMedia` gains no new required props.

- [ ] **Step 1: Extract a real poster frame for Ballknowers**

The current poster (`/projects/cfb-demo-thumb.png`) is the video's title card. Find a
frame that shows the actual application. Probe several timestamps rather than guessing:

```bash
for t in 8 14 21 28 35 42; do
  ffmpeg -y -loglevel error -ss $t -i public/projects/cfb-demo.mp4 \
    -frames:v 1 -q:v 3 "/tmp/cfb-probe-$t.jpg"
done
```

Open all six. Pick the one that most clearly shows the product in use — a draft board,
a live scoreboard, the helmet editor — not a logo, not a transition, not a mostly-empty
screen. Then write it at the display size:

```bash
ffmpeg -y -loglevel error -ss <CHOSEN> -i public/projects/cfb-demo.mp4 \
  -frames:v 1 -vf scale=1600:-2 -q:v 4 public/projects/cfb-poster.jpg
```

Point `lib/projects.ts` `cfb-fantasy.image` at `/projects/cfb-poster.jpg`.

This is an interim measure. A purpose-shot capture of the running app is separate work
owned by the site owner; do not attempt to drive or record the live app here.

- [ ] **Step 2: Build the tuning panel before tuning anything**

Motion principle #3 is explicit: never hand-tune motion by edit-refresh. Build the
controls first, then explore with them.

`components/DialPanel.tsx` renders a fixed-position panel of range inputs writing to CSS
custom properties on `document.documentElement`. It must render only when
`process.env.NODE_ENV === 'development'`, so it cannot reach production.

Expose, at minimum: section rhythm (`--space-section`), hero-to-media gap
(`--space-hero-gap`), media max-height, hover lift distance, hover spring duration,
hover spring bounce.

- [ ] **Step 3: Tune spacing optically, then freeze the values**

With the panel open on `/` at 1440px, adjust until the rhythm reads balanced rather than
measured. Rules to satisfy:
- The gap under the hero paragraph and the gap between product entries must be visibly
  related, not arbitrary.
- The media block must not consume a full viewport at 1440×900 — cap its height so the
  product name is visible with it.
- Sibling groups get equal gaps (checklist #8); the hero-to-first-product gap may differ
  deliberately.

Write the chosen values into `app/globals.css` as tokens (`--space-section`, etc.) and
replace the `mt-24` / `mt-32` / `mt-16` literals in `app/page.tsx` and
`components/ProductEntry.tsx` with them. Record the final numbers in your report.

- [ ] **Step 4: Divider consistency**

Pick one and apply uniformly (checklist #11, #16 — flipping the decision is fine, mixed
treatment is not). Recommended: a `border-rule` hairline above every section including
each product entry, or none at all with rhythm carrying the separation. Do not leave a
single divider above Currently only.

- [ ] **Step 5: Add motion that cannot gate first paint**

Non-negotiable: nothing here may delay or hide server-rendered content. The black-hero
bug was exactly that failure. Content is visible at first paint; motion only enhances
interaction and entrance.

- Product entry hover: media lifts and its shadow grows, as one group from a shared
  origin (motion #1 — do not animate the media and the shadow from different origins).
  Reference spring from the library: `{ type: "spring", visualDuration: 0.50, bounce: 0.04 }`.
  Start there; overshoot is seasoning, not sauce.
- Title link: the accent underline draws in rather than appearing.
- Entrance: if used at all, it must be additive — element starts *visible* and animates
  a small transform only. Never `initial={{ opacity: 0 }}` on server-rendered text.
- Every transition interruptible (motion #14).
- All of it behind `prefers-reduced-motion: reduce`.

- [ ] **Step 6: Write the guard test**

```ts
// e2e/motion.spec.ts
import { test, expect } from '@playwright/test';

test('server-rendered text is visible at first paint, unanimated', async ({ page }) => {
  await page.goto('/');
  // no waiting, no settling — it must already be there
  await expect(page.locator('h1')).toBeVisible({ timeout: 500 });
  const opacity = await page.locator('h1').evaluate((el) => getComputedStyle(el).opacity);
  expect(Number(opacity)).toBe(1);
});

test('reduced motion disables transitions on product entries', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  const dur = await page.getByTestId('media-cfb-fantasy').evaluate(
    (el) => getComputedStyle(el).transitionDuration
  );
  expect(['0s', '0ms']).toContain(dur);
});

test('the dev tuning panel never renders in a production build', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByTestId('dial-panel')).toHaveCount(0);
});
```

- [ ] **Step 7: Verify**

Run: `pnpm build && npx playwright test`
Expected: full suite green, including the contrast audit on all four pages and the three
new motion tests. The production build must not contain `DialPanel`.

- [ ] **Step 8: Re-run the critique checklist**

Screenshot `/` at 1440 and walk the checklist again. Items #8, #9, #11 must now pass.
Record pass/fix/n-a per item in your report — this is the deliverable, not an
afterthought.

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "refine: optical spacing, interruptible motion, consistent dividers

Closes the interfacecraft critique findings on the rebuilt home page:
mathematical spacing (#9), absent motion (motion #2/#6), and a lone
divider (#11). Motion is additive only — server-rendered text is never
gated behind an animation."
```
