import { test, expect } from '@playwright/test';

test('h1 is present in the server HTML and visible immediately', async ({ page }) => {
  const res = await page.goto('/');
  const html = await res!.text();
  expect(html).toContain('I build AI systems that operate real businesses.');
  await expect(page.locator('h1')).toBeVisible({ timeout: 1000 });
});
