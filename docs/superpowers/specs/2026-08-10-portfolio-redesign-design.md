# Portfolio redesign — product-forward, warm paper

**Date:** 2026-08-10
**Scope:** the `portfolio` repo only (kashcreates.app). No changes inside
Ballknowers, Third Eye, Nightkey, or Bisect.

## Problem

The site reads as AI-generated output rather than authored work, which
undermines the exact thing it exists to establish. Three causes, all measured
against the live site on 2026-08-10:

1. **Project titles are unreadable.** Burgundy `#800020` on charcoal `#1C1C1C`
   measures **1.57:1**; WCAG needs 3:1 at that size. 15 elements fail, including
   every project name and tagline — the most important words on the page.
2. **No value proposition.** Above the fold there is a name, "Systems that
   ship." at 14px, and "ABOUT". A cold visitor learns less than the Contra
   one-liner tells them.
3. **Generated-UI vocabulary.** Dark ground + one accent + glass panels +
   gradient mesh + Inter is the default output of every AI site builder.

Plus one bug: the hero renders **black for several seconds** because its text is
gated behind a `framer-motion` entrance animation.

## Approach

Wow with the product; put the depth one click down.

An early draft of this design used a dense text-forward index modelled on
paco.me. That was wrong: Paco's work is invisible (a command-menu library, a
state hook), so he must write. Kash's work is visual — a 3D helmet editor, an
iPad floor-plan builder, a research terminal. The matching reference is
rauno.me's gallery. Visitors want the finished product first and dig deeper only
if they need to.

Consequence: **architecture diagrams do not appear on the home page.** They move
inside project pages as supporting figures.

## Design

### Palette

| Token | Value | Role | Contrast on paper |
|---|---|---|---|
| `--paper` | `#FAF9F6` | ground | — |
| `--ink` | `#16150F` | body, headings | 17.4:1 |
| `--muted` | `#5A5750` | secondary text | 6.9:1 |
| `--accent` | `#800020` | links, marks | 10.3:1 |
| `--rule` | `#16150F` @ 12% | hairlines | — |

The existing burgundy is retained and finally usable: it is unreadable on the
old dark ground and excellent on paper. Inverting the ground is what rescues the
brand colour, not replacing it.

Deleted: `.glass-panel`, `.text-gradient`, `.text-accent-gradient`, the radial
mesh background, and all shadows except one tight lift under media.

### Typography

| Role | Face | Notes |
|---|---|---|
| Display | Instrument Serif, italic | One line per page, max 44px |
| Body / UI | Inter | ≤16px only |
| Labels / metadata | JetBrains Mono | 12px, tracked caps |
| ~~Marcellus~~ | removed | Loaded on every page, rendered nowhere |

Scale tops out at 44px. Hierarchy comes from measure, weight, and position —
not size. No text above 44px anywhere on the site.

### Layout

Single column. Text measure ~720px. Media breaks wider to ~1100px — the one
deliberate grid-break, so products dominate the page.

Home page order:

1. Masthead: name (12px mono) + availability dot. No nav bar.
2. The claim: one 44px display line + two 16px sentences. Server-rendered,
   unanimated.
3. Four products, each: media slot → name + external arrow → two lines of
   substance → three mono metadata chips.
4. Currently / contact. No CTA button.

### Media component

A single `<ProductMedia>` that degrades cleanly:

- Given a clip: `<video muted loop playsinline preload="none" poster>`, played
  via `IntersectionObserver` at >50% visibility. **Only one video plays at a
  time**; others pause when out of view.
- Given no clip: renders the poster still alone, same box, same treatment.
  This is the initial state for Nightkey, Third Eye, and Bisect.
- `prefers-reduced-motion`: never autoplays. Poster plus an explicit play
  affordance.

Layout must be identical in both states so clips can be added later without
touching anything else.

### Project pages

`/projects/[slug]` keeps its long-form writeup and gains the 15 architecture
diagrams as inline figures. Diagrams are reachable only from project pages.

## Non-goals

- No changes to any app's own codebase.
- No blog or writing section (none exists; not blocking on it).
- No live data feeds from the running products.
- No page-transition animations.

## Performance budget

- ≤1.5 MB per clip; posters as AVIF/WebP with explicit dimensions.
- LCP < 2.5s, CLS < 0.1, TBT < 200ms.
- Hero text server-rendered with no entrance animation — this is the fix for the
  black-screen bug, and it is a correctness requirement, not a preference.

## Verification

- Playwright screenshots at 320 / 375 / 768 / 1024 / 1440.
- **Automated contrast assertion in CI** over rendered text, so a regression to
  1.57:1 cannot ship. Must composite alpha and inherited `opacity`, and must
  handle `lab()`/`oklch()` computed colours — a naive RGB regex silently
  produces wrong numbers.
- Lighthouse against the budget above.
- Keyboard traversal of every link; visible focus rings on paper.

## Deferred

Capture of three product clips (Nightkey floor-plan editor, Third Eye scanner,
Bisect texture generation). Ballknowers cuts from the existing
`public/projects/cfb-demo.mp4`. The site ships complete without them.
