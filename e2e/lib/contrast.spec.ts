// e2e/lib/contrast.spec.ts
import { test, expect } from '@playwright/test';
import { auditContrast, ratioForTest } from './contrast';

test('ratio math matches known WCAG pairs', async ({ page }) => {
  await page.goto('about:blank');
  // burgundy on the old charcoal — the documented 1.57:1 failure
  expect(await ratioForTest(page, '#800020', '#1C1C1C')).toBeCloseTo(1.57, 1);
  // burgundy on warm paper — the fix
  expect(await ratioForTest(page, '#800020', '#FAF9F6')).toBeCloseTo(10.29, 1);
  // ink on paper
  expect(await ratioForTest(page, '#16150F', '#FAF9F6')).toBeCloseTo(17.37, 1);
});

test('lab() colours are resolved, not regex-parsed', async ({ page }) => {
  await page.goto('about:blank');
  // lab() for pure white must read as ~21:1 on black, not garbage
  expect(await ratioForTest(page, 'lab(100 0 0)', '#000000')).toBeGreaterThan(20);
});
