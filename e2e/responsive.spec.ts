import { test, expect } from '@playwright/test';
import { settlePage } from './lib/contrast';

const WIDTHS = [320, 375, 768, 1024, 1440, 1920];
const PAGES = ['/', '/about', '/projects/cfb-fantasy'];

for (const w of WIDTHS) {
  for (const path of PAGES) {
    test(`${path} @ ${w} does not scroll horizontally`, async ({ page }) => {
      await page.setViewportSize({ width: w, height: 900 });
      await page.goto(path);
      // Content that animates in can change layout, so settle before measuring.
      await settlePage(page);
      const overflow = await page.evaluate(() => {
        const doc = document.documentElement;
        if (doc.scrollWidth <= doc.clientWidth + 1) return null;
        // Name the widest offender so a failure is actionable, not just "something overflows".
        const worst = Array.from(document.querySelectorAll('*'))
          .map((el) => ({ el, r: el.getBoundingClientRect() }))
          .filter((x) => x.r.width > 0)
          .sort((a, b) => b.r.right - a.r.right)[0];
        return {
          scrollWidth: doc.scrollWidth,
          clientWidth: doc.clientWidth,
          culprit: worst ? `${worst.el.tagName.toLowerCase()}.${String(worst.el.className).slice(0, 60)}` : 'unknown',
          right: worst ? Math.round(worst.r.right) : -1,
        };
      });
      expect(overflow, JSON.stringify(overflow)).toBeNull();
    });
  }
}

test('the first link receives a visible focus indicator', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  const indicator = await page.evaluate(() => {
    const el = document.activeElement;
    if (!el || el === document.body) return null;
    const s = getComputedStyle(el);
    return {
      tag: el.tagName.toLowerCase(),
      outlineStyle: s.outlineStyle,
      outlineWidth: s.outlineWidth,
      boxShadow: s.boxShadow,
      textDecoration: s.textDecorationLine,
    };
  });
  expect(indicator, 'nothing received focus on first Tab').not.toBeNull();
  const visible =
    (indicator!.outlineStyle !== 'none' && indicator!.outlineWidth !== '0px') ||
    indicator!.boxShadow !== 'none';
  expect(visible, `focused ${indicator!.tag} has no visible focus ring: ${JSON.stringify(indicator)}`).toBe(true);
});
