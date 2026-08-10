import { test, expect } from '@playwright/test';
import { statSync, existsSync } from 'node:fs';
import { projects } from '../lib/projects';

const MAX_CLIP_BYTES = 1.5 * 1024 * 1024;
const MAX_POSTER_BYTES = 400 * 1024;

/**
 * Every clip referenced by lib/projects.ts must exist and stay inside the
 * budget. Reading the paths from the data rather than hardcoding them means a
 * clip added later cannot skip this gate.
 */
const clips = projects.filter((p) => p.clip).map((p) => ({ slug: p.slug, path: `public${p.clip}` }));
const posters = projects.map((p) => ({ slug: p.slug, path: `public${p.image}` }));

test('at least one product ships a motion clip', () => {
  expect(clips.length).toBeGreaterThan(0);
});

for (const { slug, path } of clips) {
  test(`clip for ${slug} exists and is under 1.5 MB`, () => {
    expect(existsSync(path), `${path} is referenced by lib/projects.ts but missing`).toBe(true);
    expect(statSync(path).size).toBeLessThan(MAX_CLIP_BYTES);
  });
}

for (const { slug, path } of posters) {
  test(`poster for ${slug} exists and is under 400 KB`, () => {
    expect(existsSync(path), `${path} is referenced by lib/projects.ts but missing`).toBe(true);
    expect(statSync(path).size).toBeLessThan(MAX_POSTER_BYTES);
  });
}
