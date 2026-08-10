import { test, expect } from '@playwright/test';

/**
 * These are regression guards for the defect this redesign exists to remove:
 * text that is invisible until JavaScript runs. They deliberately do NOT wait
 * for load states — the assertion is that content is there immediately.
 */

test('home headline is in the server HTML and fully opaque', async ({ page }) => {
  const res = await page.goto('/');
  const html = await res!.text();
  expect(html, 'headline missing from server-rendered HTML').toContain(
    'operate real businesses'
  );
  const h1 = page.locator('h1');
  await expect(h1).toBeVisible({ timeout: 500 });
  const opacity = await h1.evaluate((el) => getComputedStyle(el).opacity);
  expect(Number(opacity)).toBe(1);
});

test('project page hero never starts transparent', async ({ page }) => {
  await page.goto('/projects/cfb-fantasy');
  const h1 = page.locator('h1').first();
  await expect(h1).toBeVisible({ timeout: 500 });
  const opacity = await h1.evaluate((el) => getComputedStyle(el).opacity);
  expect(
    Number(opacity),
    'project hero is animating opacity from 0 — content must not depend on JS to be readable'
  ).toBe(1);
});

test('reduced motion zeroes transitions on product media', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  const dur = await page
    .getByTestId('media-cfb-fantasy')
    .evaluate((el) => getComputedStyle(el).transitionDuration);
  expect(['0s', '0ms']).toContain(dur);
});

test('product media carries a hover transition when motion is allowed', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('/');
  const dur = await page
    .getByTestId('media-cfb-fantasy')
    .evaluate((el) => getComputedStyle(el).transitionDuration);
  expect(dur).not.toBe('0s');
});
