# Portfolio Redesign — Plan Part 2 (Tasks 4–5)

> Continues `2026-08-10-portfolio-redesign.md`. Same Global Constraints apply.
> REQUIRED SUB-SKILL: superpowers:subagent-driven-development or superpowers:executing-plans.

---

### Task 4: `ProductMedia` component

The component that lets the site ship complete before the clips exist. Given a
clip it plays a muted loop; given none it renders the poster still in an
identical box. Pages never branch on which state they're in.

**Files:**
- Create: `components/ProductMedia.tsx`
- Create: `hooks/useInViewVideo.ts`
- Create: `e2e/product-media.spec.ts`

**Interfaces:**
- Consumes: tokens `bg-paper`, `.media-lift` from Task 3.
- Produces:

```ts
interface ProductMediaProps {
  poster: string;        // always required — the still that ships today
  clip?: string;         // optional .mp4; when absent renders poster only
  alt: string;
  priority?: boolean;    // true for the first product only (LCP candidate)
}
export function ProductMedia(props: ProductMediaProps): JSX.Element
```

Task 5 renders exactly four of these.

- [ ] **Step 1: Write the failing test**

```ts
// e2e/product-media.spec.ts
import { test, expect } from '@playwright/test';

test('renders an image and no video when no clip is supplied', async ({ page }) => {
  await page.goto('/');
  // Nightkey ships without a clip
  const fig = page.getByTestId('media-nightkey');
  await expect(fig.locator('img')).toBeVisible();
  await expect(fig.locator('video')).toHaveCount(0);
});

test('video is muted, looping, inline and not preloaded', async ({ page }) => {
  await page.goto('/');
  const v = page.getByTestId('media-cfb-fantasy').locator('video');
  await expect(v).toHaveAttribute('muted', '');
  await expect(v).toHaveAttribute('loop', '');
  await expect(v).toHaveAttribute('playsinline', '');
  await expect(v).toHaveAttribute('preload', 'none');
});

test('only one video plays at a time', async ({ page }) => {
  await page.goto('/');
  await page.waitForTimeout(1500);
  const playing = await page.evaluate(() =>
    Array.from(document.querySelectorAll('video')).filter((v) => !v.paused).length
  );
  expect(playing).toBeLessThanOrEqual(1);
});

test('reduced motion never autoplays', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await page.waitForTimeout(1500);
  const playing = await page.evaluate(() =>
    Array.from(document.querySelectorAll('video')).filter((v) => !v.paused).length
  );
  expect(playing).toBe(0);
});
```

- [ ] **Step 2: Run to verify it fails**

Run: `npx playwright test e2e/product-media.spec.ts`
Expected: FAIL — `media-nightkey` testid does not exist.

- [ ] **Step 3: Implement `hooks/useInViewVideo.ts`**

A module-level registry enforces the single-playing-video rule across
instances, which per-component state cannot do.

```ts
"use client";

import { useEffect, useRef } from "react";

const registry = new Set<HTMLVideoElement>();

function playExclusively(target: HTMLVideoElement) {
  for (const v of registry) {
    if (v !== target && !v.paused) v.pause();
  }
  void target.play().catch(() => {
    /* autoplay refused — poster remains, which is an acceptable resting state */
  });
}

/** Plays the video only while >50% visible, and only one across the page. */
export function useInViewVideo(enabled: boolean) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;

    registry.add(el);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) playExclusively(el);
        else el.pause();
      },
      { threshold: 0.5 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      registry.delete(el);
    };
  }, [enabled]);

  return ref;
}
```

- [ ] **Step 4: Implement `components/ProductMedia.tsx`**

```tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useInViewVideo } from "@/hooks/useInViewVideo";

interface ProductMediaProps {
  poster: string;
  clip?: string;
  alt: string;
  priority?: boolean;
  testId: string;
}

export function ProductMedia({ poster, clip, alt, priority = false, testId }: ProductMediaProps) {
  const [allowMotion, setAllowMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setAllowMotion(!mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const videoRef = useInViewVideo(Boolean(clip) && allowMotion);

  return (
    <figure
      data-testid={`media-${testId}`}
      className="relative w-full aspect-video overflow-hidden rounded-[2px] bg-paper media-lift"
    >
      {clip && allowMotion ? (
        <video
          ref={videoRef}
          poster={poster}
          muted
          loop
          playsInline
          preload="none"
          aria-label={alt}
          className="h-full w-full object-cover"
        >
          <source src={clip} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={poster}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 1100px"
          priority={priority}
          className="object-cover"
        />
      )}
    </figure>
  );
}
```

Note: `allowMotion` starts `false`, so the server render and first paint are
always the poster. The video only mounts after the media query is read, which
also keeps the LCP element a static image.

- [ ] **Step 5: Run the tests**

Run: `npx playwright test e2e/product-media.spec.ts`
Expected: still FAIL until Task 5 renders them on `/`. This is the one task
whose tests go green in its successor; do not weaken them to pass early.

- [ ] **Step 6: Commit**

```bash
git add components/ProductMedia.tsx hooks/useInViewVideo.ts e2e/product-media.spec.ts
git commit -m "feat: ProductMedia — video or poster in an identical box

Module-level registry enforces one playing video across instances.
Poster is the server render, so LCP is never a video."
```

---

### Task 5: Home page rebuild

**Files:**
- Rewrite: `app/page.tsx` (64 lines → new)
- Create: `components/ProductEntry.tsx`
- Delete: `components/Hero.tsx` (149 lines), `components/ProjectCard.tsx` (73 lines)
- Modify: `lib/projects.ts` — add `clip?: string` and `chips: string[]` to the `Project` interface
- Modify: `e2e/contrast.spec.ts` — remove `.fixme` from the `/` case
- Modify: `e2e/tokens.spec.ts` — the 44px test now passes

**Interfaces:**
- Consumes: `ProductMedia` from Task 4; tokens from Task 3.
- Produces: `ProductEntry({ project }: { project: Project })`.

- [ ] **Step 1: Extend the Project type**

In `lib/projects.ts`, add to the `Project` interface:

```ts
  /** Optional looping clip. Absent until rendered — ProductMedia falls back to `image`. */
  clip?: string;
  /** Exactly three short metadata chips, rendered as tracked caps. */
  chips: string[];
```

Then add `chips` to the four featured projects:

```ts
// cfb-fantasy
chips: ['iOS · Android · Web', '50+ tables', '6 agents'],
clip: '/projects/cfb-demo.mp4',
// thirdeye
chips: ['130 endpoints', '786 patterns backtested', '~290 symbols'],
// bisect
chips: ['3 studios', 'CLI + MCP server', '600+ materials'],
// nightkey
chips: ['4 surfaces', '121 migrations', 'PayFac payouts'],
```

- [ ] **Step 2: Write `components/ProductEntry.tsx`**

```tsx
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { ProductMedia } from "./ProductMedia";

export function ProductEntry({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <article className="mt-24 first:mt-16">
      <ProductMedia
        testId={project.slug}
        poster={project.image}
        clip={project.clip}
        alt={`${project.title} interface`}
        priority={priority}
      />

      <div className="mx-auto mt-6 max-w-[720px]">
        <h2 className="text-[20px] font-medium tracking-tight">
          <Link
            href={`/projects/${project.slug}`}
            className="group inline-flex items-center gap-1 text-accent decoration-accent/30 underline-offset-4 hover:underline"
          >
            {project.title}
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-px group-hover:-translate-y-px" />
          </Link>
        </h2>

        <p className="mt-2 max-w-[62ch] text-[16px] leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          {project.chips.map((c) => (
            <li key={c} className="label">{c}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
```

- [ ] **Step 3: Rewrite `app/page.tsx`**

No `"use client"`, no framer-motion, no entrance animation — the black-hero bug
is fixed by this file being a server component.

```tsx
import { projects } from "@/lib/projects";
import { ProductEntry } from "@/components/ProductEntry";

const FEATURED = ["cfb-fantasy", "thirdeye", "nightkey", "bisect"] as const;

export default function Home() {
  const featured = FEATURED
    .map((id) => projects.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <main className="mx-auto w-full max-w-[1100px] px-6 pb-40">
      <header className="mx-auto flex max-w-[720px] items-center justify-between pt-10">
        <span className="label">Kashyap Maheshwari</span>
        <span className="label flex items-center gap-2">
          <span aria-hidden className="inline-block h-[6px] w-[6px] rounded-full bg-accent" />
          Available
        </span>
      </header>

      <section className="mx-auto mt-24 max-w-[720px]">
        <h1 className="font-display text-[44px] italic leading-[1.1] tracking-[-0.01em]">
          I build AI systems that operate real businesses.
        </h1>
        <p className="mt-6 max-w-[62ch] text-[16px] leading-relaxed text-muted">
          My consumer app — live on the App Store and Google Play — is run by an
          agent workforce I built: agents that write its articles, produce its
          video, and report to me through a voice assistant. Every publish path
          has a human approval gate.
        </p>
      </section>

      {featured.map((p, i) => (
        <ProductEntry key={p.id} project={p} priority={i === 0} />
      ))}

      <section className="mx-auto mt-32 max-w-[720px] border-t border-rule pt-10">
        <h2 className="label">Currently</h2>
        <p className="mt-4 max-w-[62ch] text-[16px] leading-relaxed text-muted">
          Open to select freelance work and full-time roles.{" "}
          <a href="mailto:kashpm2002@gmail.com" className="text-accent underline decoration-accent/30 underline-offset-4">
            kashpm2002@gmail.com
          </a>
        </p>
      </section>
    </main>
  );
}
```

- [ ] **Step 4: Delete the replaced components**

```bash
git rm components/Hero.tsx components/ProjectCard.tsx
```

If `ContactForm` is now unreferenced, leave it in place — Task 10 audits dead
code. Do not delete files this task does not replace.

- [ ] **Step 5: Un-fixme the home contrast test**

In `e2e/contrast.spec.ts`, change the loop so `/` uses `test` rather than
`test.fixme` (leave the other three as `fixme` until Tasks 6–7):

```ts
for (const path of PAGES) {
  const runner = path === '/' ? test : test.fixme;
  runner(`${path} has no WCAG AA contrast failures`, async ({ page }) => {
```

- [ ] **Step 6: Run the full suite**

Run: `npx playwright test`
Expected: PASS — `e2e/tokens.spec.ts` all three, `e2e/product-media.spec.ts` all four, `e2e/contrast.spec.ts` `/` green with the rest skipped.

- [ ] **Step 7: Verify the black-hero bug is gone**

```bash
npm run build && npm run start
```

Then: `npx playwright test e2e/lcp.spec.ts` after creating it:

```ts
// e2e/lcp.spec.ts
import { test, expect } from '@playwright/test';

test('h1 is present in the server HTML and visible immediately', async ({ page }) => {
  const res = await page.goto('/');
  const html = await res!.text();
  expect(html).toContain('I build AI systems that operate real businesses.');
  await expect(page.locator('h1')).toBeVisible({ timeout: 1000 });
});
```

- [ ] **Step 8: Commit**

```bash
git add -A app components lib e2e
git commit -m "feat: product-forward home page on warm paper

Server-rendered hero with a real value proposition, four products as
wide motion slots over a 720px text measure. Removes Hero and
ProjectCard, and with them the animation that left the page black
for seconds on load."
```

---

Tasks 6–10 continue in `2026-08-10-portfolio-redesign-part-3.md`.
