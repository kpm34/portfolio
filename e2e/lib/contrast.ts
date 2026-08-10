import type { Page } from '@playwright/test';

export interface ContrastFailure {
  text: string;
  px: number;
  ratio: number;
  required: number;
  selector: string;
}

/**
 * Resolves any CSS colour (including lab()/oklch()) to RGBA by round-tripping
 * it through a canvas, then composites it over `bg` and returns the WCAG ratio.
 * Exported for the helper's own unit test.
 */
export async function ratioForTest(page: Page, fg: string, bg: string): Promise<number> {
  return page.evaluate(([fg, bg]) => {
    const cv = document.createElement('canvas');
    cv.width = cv.height = 1;
    const ctx = cv.getContext('2d', { willReadFrequently: true })!;
    const toRGBA = (c: string): [number, number, number, number] => {
      ctx.clearRect(0, 0, 1, 1);
      ctx.fillStyle = '#000';
      ctx.fillStyle = c;
      ctx.fillRect(0, 0, 1, 1);
      const d = ctx.getImageData(0, 0, 1, 1).data;
      return [d[0], d[1], d[2], d[3] / 255];
    };
    const lin = (v: number) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    };
    const lum = (r: number, g: number, b: number) =>
      0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
    const [br, bgn, bb] = toRGBA(bg);
    const [fr, fg2, fb, fa] = toRGBA(fg);
    const R = fr * fa + br * (1 - fa);
    const G = fg2 * fa + bgn * (1 - fa);
    const B = fb * fa + bb * (1 - fa);
    const L1 = lum(R, G, B) + 0.05;
    const L2 = lum(br, bgn, bb) + 0.05;
    return Math.max(L1, L2) / Math.min(L1, L2);
  }, [fg, bg] as [string, string]);
}

/** Audits every rendered text leaf on the current page against WCAG AA. */
export async function auditContrast(page: Page): Promise<ContrastFailure[]> {
  return page.evaluate(() => {
    const cv = document.createElement('canvas');
    cv.width = cv.height = 1;
    const ctx = cv.getContext('2d', { willReadFrequently: true })!;
    const toRGBA = (c: string): [number, number, number, number] => {
      ctx.clearRect(0, 0, 1, 1);
      ctx.fillStyle = '#000';
      ctx.fillStyle = c;
      ctx.fillRect(0, 0, 1, 1);
      const d = ctx.getImageData(0, 0, 1, 1).data;
      return [d[0], d[1], d[2], d[3] / 255];
    };
    const lin = (v: number) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    };
    const lum = (r: number, g: number, b: number) =>
      0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);

    /** Walks up for the nearest non-transparent background. */
    const bgOf = (el: Element): [number, number, number] => {
      let n: Element | null = el;
      while (n) {
        const [r, g, b, a] = toRGBA(getComputedStyle(n).backgroundColor);
        if (a > 0.9) return [r, g, b];
        n = n.parentElement;
      }
      return [255, 255, 255];
    };

    const sel = (el: Element) => {
      const id = el.id ? `#${el.id}` : '';
      const cls = el.className && typeof el.className === 'string'
        ? '.' + el.className.trim().split(/\s+/).slice(0, 2).join('.')
        : '';
      return `${el.tagName.toLowerCase()}${id}${cls}`;
    };

    const out: any[] = [];
    for (const el of Array.from(document.querySelectorAll('*'))) {
      if (el.children.length) continue;                 // leaves only
      if (!el.textContent?.trim()) continue;
      if (!(el as HTMLElement).offsetParent && getComputedStyle(el).position !== 'fixed') continue;

      // inherited opacity chain
      let op = 1;
      let n: Element | null = el;
      while (n && n !== document.body) {
        op *= parseFloat(getComputedStyle(n).opacity);
        n = n.parentElement;
      }
      if (op === 0) continue;                            // invisible, not a contrast bug

      const s = getComputedStyle(el);
      const px = parseFloat(s.fontSize);
      const bold = parseInt(s.fontWeight, 10) >= 700;
      const large = px >= 24 || (px >= 18.66 && bold);
      const required = large ? 3 : 4.5;

      const [br, bgn, bb] = bgOf(el);
      const [fr, fg, fb, fa0] = toRGBA(s.color);
      const fa = fa0 * op;
      const R = fr * fa + br * (1 - fa);
      const G = fg * fa + bgn * (1 - fa);
      const B = fb * fa + bb * (1 - fa);
      const L1 = lum(R, G, B) + 0.05;
      const L2 = lum(br, bgn, bb) + 0.05;
      const ratio = +(Math.max(L1, L2) / Math.min(L1, L2)).toFixed(2);

      if (ratio < required) {
        out.push({ text: el.textContent.trim().slice(0, 40), px: Math.round(px), ratio, required, selector: sel(el) });
      }
    }
    return out;
  });
}
