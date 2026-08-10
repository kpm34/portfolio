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
