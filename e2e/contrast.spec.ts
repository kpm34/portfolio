import { test, expect } from '@playwright/test';
import { auditContrast, settlePage } from './lib/contrast';

const PAGES = ['/', '/about', '/projects/cfb-fantasy', '/projects/nightkey'];
const READY = ['/', '/projects/cfb-fantasy', '/projects/nightkey'];

for (const path of PAGES) {
  const runner = READY.includes(path) ? test : test.fixme;
  runner(`${path} has no WCAG AA contrast failures`, async ({ page }) => {
    await page.goto(path);
    await settlePage(page);
    const failures = await auditContrast(page);
    expect(failures, JSON.stringify(failures, null, 2)).toEqual([]);
  });
}
