import { test, expect } from '@playwright/test';

// un-fixme in Task 5 — ProductMedia is not mounted on / until the home page is rebuilt
test.fixme('renders an image and no video when no clip is supplied', async ({ page }) => {
  await page.goto('/');
  // Nightkey ships without a clip
  const fig = page.getByTestId('media-nightkey');
  await expect(fig.locator('img')).toBeVisible();
  await expect(fig.locator('video')).toHaveCount(0);
});

// un-fixme in Task 5 — ProductMedia is not mounted on / until the home page is rebuilt
test.fixme('video is muted, looping, inline and not preloaded', async ({ page }) => {
  await page.goto('/');
  const v = page.getByTestId('media-cfb-fantasy').locator('video');
  await expect(v).toHaveAttribute('muted', '');
  await expect(v).toHaveAttribute('loop', '');
  await expect(v).toHaveAttribute('playsinline', '');
  await expect(v).toHaveAttribute('preload', 'none');
});

// un-fixme in Task 5 — ProductMedia is not mounted on / until the home page is rebuilt
test.fixme('only one video plays at a time', async ({ page }) => {
  await page.goto('/');
  await page.waitForTimeout(1500);
  const playing = await page.evaluate(() =>
    Array.from(document.querySelectorAll('video')).filter((v) => !v.paused).length
  );
  expect(playing).toBeLessThanOrEqual(1);
});

// un-fixme in Task 5 — ProductMedia is not mounted on / until the home page is rebuilt
test.fixme('reduced motion never autoplays', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await page.waitForTimeout(1500);
  const playing = await page.evaluate(() =>
    Array.from(document.querySelectorAll('video')).filter((v) => !v.paused).length
  );
  expect(playing).toBe(0);
});
