// e2e/lib/contrast.spec.ts
import { test, expect } from '@playwright/test';
import { auditContrast, ratioForTest, settlePage } from './contrast';

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

test('settlePage triggers scroll-in animations without unhiding permanently-hidden text', async ({ page }) => {
  // Two failing-contrast elements on a burgundy-on-charcoal page (1.57:1, well under AA):
  //  - #hidden-forever: display none by design, opacity 0, never becomes visible. Must stay excluded.
  //  - #scroll-in: starts at opacity 0 (framer-motion `initial` style) and is
  //    driven to opacity 1 by an IntersectionObserver once scrolled into view,
  //    exactly like ProjectCard's whileInView pattern. Must be caught once settled.
  await page.setContent(`
    <html>
      <body style="margin:0;background:#1C1C1C;">
        <div style="height:2000px;">spacer</div>
        <p id="scroll-in" style="opacity:0;color:#800020;font-size:16px;transition:opacity .2s;">
          Scrolled-in low-contrast text
        </p>
        <div style="height:2000px;">spacer</div>
        <p id="hidden-forever" style="opacity:0;color:#800020;font-size:16px;">
          Permanently hidden low-contrast text
        </p>
        <script>
          const el = document.getElementById('scroll-in');
          new IntersectionObserver((entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting) el.style.opacity = '1';
            }
          }).observe(el);
        </script>
      </body>
    </html>
  `);

  await settlePage(page);
  const failures = await auditContrast(page);
  const texts = failures.map((f) => f.text);

  expect(texts.some((t) => t.includes('Scrolled-in low-contrast text'))).toBe(true);
  expect(texts.some((t) => t.includes('Permanently hidden low-contrast text'))).toBe(false);
});
