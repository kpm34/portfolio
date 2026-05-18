# Portfolio Website

**Stack:** Next.js 16, React 19, TypeScript, Tailwind, Framer Motion, React Three Fiber
**Deployment:** Vercel

---

## Featured Projects (in display order)

1. **CFB Fantasy** — `cfb-fantasy` — [cfbfantasy.app](https://cfbfantasy.app)
2. **Third Eye Capital** — `thirdeye` — [thirdeyecapital.ai](https://thirdeyecapital.ai)
3. **Bisect** — `bisect` — [bisect.app](https://bisect.app)
4. **Nightkey** — `nightkey` — [nightkey.io](https://nightkey.io)

The order is set explicitly in `app/page.tsx`:

```ts
const featuredProjectIds = ['cfb-fantasy', 'thirdeye', 'bisect', 'nightkey'];
```

---

## Site Structure

```
app/
├── layout.tsx           Root layout (fonts, metadata)
├── page.tsx             Home — hero + 4-column featured grid + contact
├── about/page.tsx       About page
├── projects/[slug]/     Per-project detail page
├── diagrams/[slug]/     Architecture diagram viewer
└── dashboard/           Internal resume builder (not part of public portfolio)

components/
├── Hero.tsx
├── ProjectCard.tsx      Featured-grid card
├── ProjectPage.tsx      Per-project layout
├── ContactForm.tsx
├── <Project>*Diagram.tsx  ReactFlow / SVG architecture diagrams
└── dashboard/           Resume builder UI (separate surface)

lib/
├── projects.ts          Single source of truth for project data
├── dashboard/           Resume builder data + store
└── utils.ts

public/
└── projects/, diagrams/  Hero images, demo videos, SVG diagrams
```

---

## Project Data Model

Defined in `lib/projects.ts`:

- `id`, `slug`, `title`, `description`, `longDescription`
- `featured` (all four are `true`)
- `category` — one of `fullstack | finance | ai-integration | ai-systems | automation | 3d`
- `techStack` (chips on the card) + `techStackDetailed` (grouped sections on the detail page)
- `aiHighlights` — short bullets on the card
- `problemStatement`, `metrics`, `technicalHighlights`, `skills`
- `image`, `images[]`, `demoVideo`, `gradient`
- `liveUrl`, `githubUrl` (optional), `diagramUrl`, `diagrams[]`

To add or update a project, edit `lib/projects.ts`. To change display order, edit the `featuredProjectIds` array in `app/page.tsx`.

---

## Architecture Diagrams

Each project links to one or more diagrams under `app/diagrams/[slug]`. There are two render paths:

1. **ReactFlow-based** components in `components/<Project>*Diagram.tsx` (rendered for specific slugs)
2. **SVG fallback** at `public/diagrams/<slug>.svg` (default for any other slug)

Slug → component mapping lives in `app/diagrams/[slug]/page.tsx`.

---

## Design Direction

- **Background**: `#1C1C1C` with a soft radial-gradient backdrop
- **Text**: cream `#F5F5DC` at varied opacities for hierarchy
- **Typography**: sans for body, monospace for labels and accents
- **Motion**: Framer Motion for reveals and contact-section transitions
- **Layout**: tight hero so all four projects are visible on first load (desktop), responsive collapse to two and one columns

The site should read as designed and intentional, not as a stock template. Avoid:
- Generic gradient hero blobs
- Uniform card grids without hierarchy
- Stock dark-mode admin aesthetic

---

## Deployment

- **Frontend**: Vercel
- **Custom domain**: pending
- **Analytics**: Vercel Analytics

---

## Open / Next

- Lock final taglines + bullet copy per project
- Confirm hero shot for each project (still images and short video clips)
- Decide whether `/about` and `/dashboard` belong on public nav or stay unlinked
- Optional: a per-project architecture diagram page for Nightkey (already wired into `diagrams[]`)
