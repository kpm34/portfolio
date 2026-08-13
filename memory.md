# Project Memory

## Context
Personal portfolio website. Goal: a sharp, opinionated showcase of four production projects.

## Current State
- **Stack**: Next.js 16, React 19, TypeScript, Tailwind, Framer Motion, React Three Fiber
- **Featured Projects (in display order)**:
  1. CFB Fantasy — fantasy football platform with live drafts, 3D helmet editor, ML projections
  2. Third Eye Capital — stock research & pattern-detection platform (thirdeyecapital.ai)
  3. Bisect — Blender ↔ ComfyUI bridge (bisect.app); 5 studios + CLI + MCP server
  4. Nightkey — four-sided nightlife marketplace (nightkey.io); iPad club dashboard + Expo mobile
- **Design**:
  - Dark theme `#1C1C1C` background with cream `#F5F5DC` text
  - Subtle radial-gradient backdrop, monospace accents
  - Compact hero, four-column featured grid on desktop
- **Deployment**: Vercel

## Removed / Deprecated
- EZWORKS, Helmet Customizer (standalone), Prism, VectorCraft AI — intentionally **not** surfaced
- The R3F helmet editor is still referenced as a CFB Fantasy sub-feature (3D Helmet Studio), not a standalone project

## User Preferences
- Aesthetic: warm dark theme, generous spacing, intentional typography (not template-y)
- Voice: terse, specific, concrete; avoid generic "AI Systems Architect" framing

## CV / Resume
- **Canonical static files** (repo root, last synced Aug 9 2026):
  - `Kashyap_Maheshwari_Resume.pdf` — shareable PDF
  - `Kashyap_Maheshwari_Resume_Engineer.html` — primary editable source (Nightkey, Ballknowers, Third Eye)
  - `Kashyap_Maheshwari_Resume_Tech.html` — alternate variant
- **Resume builder**: `/dashboard/resume` — bullet source in `lib/dashboard/bullets-data.ts`; variants in browser localStorage
- **Gap**: `PROJECT_REVIEW.md` notes Third Eye options-surface work not yet reflected in resume files

## Nightkey demo
- Clip: `public/projects/nightkey-demo.mp4` (33s screen recording)
- Poster: `public/projects/nightkey-poster.jpg` (frame extracted from demo)
- Wired via `clip` + `demoVideo` in `lib/projects.ts`; `/projects/nightkey` hero uses `ProductMedia`

## Project pages
- Removed Key Features carousel, Tech Stack graph, and Architecture Diagrams from `ProjectPage.tsx`
- Pages now: hero media, overview, optional skills prose, live CTA
