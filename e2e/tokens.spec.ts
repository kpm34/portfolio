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
