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
