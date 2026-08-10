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

// Every page with a hero, not just the ones we happened to think of. /about
// shipped its h1 at opacity 0 for an entire branch precisely because this loop
// only covered two pages.
for (const path of ['/projects/cfb-fantasy', '/projects/nightkey', '/about']) {
  test(`${path} hero never starts transparent`, async ({ page }) => {
    await page.goto(path);
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible({ timeout: 500 });
    const opacity = await h1.evaluate((el) => getComputedStyle(el).opacity);
    expect(
      Number(opacity),
      `${path} hero is animating opacity from 0 — content must not depend on JS to be readable`
    ).toBe(1);
  });

  test(`${path} headline text is in the server HTML`, async ({ page }) => {
    const res = await page.goto(path);
    const html = await res!.text();
    const heading = (await page.locator('h1').first().innerText()).trim();
    expect(heading.length, 'page has no h1 text').toBeGreaterThan(0);
    // The words must exist without JavaScript. This is deliberately about the
    // text, not about opacity: below-fold whileInView blocks legitimately ship
    // hidden, and that is a separate, tracked concern.
    const firstWords = heading.split(/\s+/).slice(0, 4).join(' ');
    expect(html, `"${firstWords}" missing from server-rendered HTML`).toContain(firstWords);
  });
}

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
