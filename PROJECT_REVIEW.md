# Project Review & Portfolio Analysis

**Date:** 2026-05-18
**Purpose:** Review of the four projects to feature on the portfolio site

---

## Featured Projects

The portfolio showcases four production projects:

1. **CFB Fantasy** — Full-stack fantasy football platform
2. **Third Eye Capital** — Financial research & pattern-detection platform
3. **Bisect** — Visual bridge between Blender and ComfyUI
4. **Nightkey** — Nightlife booking marketplace (club dashboard + mobile)

---

## 1. CFB Fantasy App

**Type:** Full-Stack Web Application
**Tech Stack:** Next.js 15, React 19, TypeScript, Appwrite, THREE.js, React Three Fiber, Spline
**Status:** Production — [cfbfantasy.app](https://cfbfantasy.app)
**Complexity:** Very High

**What It Does:**
- Fantasy football platform for Power 4 conferences
- Real-time draft system with live state sync
- 3D helmet customization and stadium visualizations
- Player projections, depth charts, team efficiency models
- League management, scoring engine, draft history

**Highlights:**
- **Production app** — Live with real users
- **Complex domain logic** — Drafting, scoring, lineups, waivers, leagues
- **3D integration** — Helmet customizer and stadium visuals using R3F
- **Data pipeline** — ETL for rosters, depth charts, projections
- **Real-time systems** — Live draft sync via Appwrite
- **Testing** — Playwright E2E + Jest unit tests

**Portfolio Angle:**
- End-to-end product ownership: pipeline → backend → real-time UI → 3D
- Shipping a multi-tenant real-time app with complex domain logic
- 3D in production, not as a tech demo

---

## 2. Third Eye Capital

**Type:** Financial Research & Analysis Platform
**Tech Stack:** React 18 + Vite + TypeScript, Tailwind, shadcn/ui, Recharts, R3F, FastAPI (Python), Supabase, Pinecone, Playwright
**Status:** Production — [thirdeyecapital.ai](https://thirdeyecapital.ai)
**Complexity:** Very High

**What It Does:**
- **Stock Research Terminal** — Equity research surface for ~290 symbols (targeting 2,500+ US stocks >$1B market cap), with 15 data tabs per symbol: fundamentals, valuation, financials (10-year), ratios, estimates, dividends, momentum, ownership.
- **Wick-Wick Pattern Detection** — Proprietary candlestick pattern model identifying high-probability monthly/quarterly liquidity-purge setups; ~76.5% backtested hit rate on `target_100`.
- **Newsletter, portfolio tracking, play tracking, learning zone, admin CRM.**

**Highlights:**
- **Data ingestion at scale** — Playwright + SA API scraper, fallback chain (SA cache → RapidAPI → yfinance), Supabase-cached
- **Quant model in production** — Pattern detection enriched with fundamental quality filters
- **RAG knowledge base** — Pinecone-backed retrieval over chunked research content
- **Tiered subscriber product** — Basic / premium / professional access
- **Two-tier deploy** — Vercel frontend, Render backend

**Portfolio Angle:**
- Quantitative + product engineering: a real model shipped behind a real product
- Heavy-data web app: ingestion, caching, RAG, and a research UI on top
- Demonstrates ability to own the whole stack including data pipeline + analysis engine

---

## 3. Bisect

**Type:** Creative Tooling Platform (Web + CLI + MCP Server)
**Tech Stack:** Next.js, TypeScript, Tailwind, Supabase, Blender (MCP), ComfyUI, React Three Fiber, Tauri
**Status:** Beta v0.2.0 — [bisect.app](https://bisect.app)
**Complexity:** High

**What It Does:**
The glue between Blender and ComfyUI — a visual interface that brings pro-level 3D and GenAI pipelines to creators who don't want to manage nodes or scripts.

**Studios:**
| Studio | Purpose | Status |
|--------|---------|--------|
| Vector Studio | SVG/logo creation, AI vectorization | 95% |
| Texture Studio | MatCap/PBR generation via Gemini | 90% |
| 3D Studio | Scene editing, materials, events, cloner | 85% |
| Audio Hub | Music/SFX library, AI generation | 15% |
| Video Studio | AI video, ComfyUI workflows | 10% |

**Highlights:**
- **Bridge architecture** — Blender (via MCP) ↔ ComfyUI workflows ↔ Bisect UI
- **Developer toolkit** — CLI, MCP server, REST APIs
- **600+ material presets** + AI agents for scene editing
- **Cloud GPU integration** — RunPod, Vast.ai for ComfyUI workflows
- **Code export** — React / Three.js scene export

**Portfolio Angle:**
- Tooling thinking: builds *on* existing pro tools rather than reinventing them
- Multi-surface product: web app, CLI, MCP server — same core, three interfaces
- AI + 3D integration with a real product wrapper (not a demo)

---

## 4. Nightkey

**Type:** Multi-Sided Nightlife Marketplace
**Tech Stack:** Next.js (App Router), TypeScript, Tailwind, Supabase (Postgres + RLS + Realtime), Expo/React Native (mobile), QorCommerce, Twilio, AWS Rekognition + GCP Vision
**Status:** Pre-launch — [nightkey.io](https://nightkey.io) (Club Dashboard) + iOS/Android (Client + Promoter)
**Complexity:** Very High

**What It Does:**
A nightlife booking platform connecting four sides: **Clients, Promoters, Nightclubs, and Bottle Servers.** Two repos share one Supabase backend.

- **Club Dashboard (this repo)** — iPad-optimized web app for venue operators: floor plans, table management, tonight view, bookings, analytics, staff, menu, onboarding wizard
- **Mobile App** — Expo/React Native for clients (booking) and promoters (commission tracking)

**Highlights:**
- **Multi-tenant, multi-role** — RLS-enforced separation across clubs and roles
- **Realtime state** — Live booking + table status across dashboard + mobile
- **Payments** — QorCommerce Channels (PFaaS) merchant-of-record flow
- **ID verification** — AWS Rekognition + Google Cloud Vision pipeline
- **iPad-first UI** — 44px+ touch targets, generous spacing, premium-feel design (Amex Centurion / Airbnb references)
- **Floor plan editor** — Konva-based table layout with auto-layout templates
- **Push + SMS** — Expo Push API + Twilio

**Portfolio Angle:**
- Real client work shipped to production with a retainer relationship
- Multi-app, multi-role architecture sharing a single Supabase backend
- Premium consumer-grade UI quality, not just functional admin panel

---

## Technical Skills Demonstrated Across These Four

### Full-Stack
- Next.js 15 / App Router, React 19
- TypeScript end-to-end
- Vite + React 18 (TEC)
- Python (FastAPI, async, Pydantic, Playwright)
- Expo / React Native (Nightkey mobile)

### Backends & Data
- Supabase (Postgres + RLS + Realtime + Auth) — TEC, Nightkey, Bisect
- Appwrite (CFB Fantasy)
- Pinecone (RAG over research content)
- ETL / data ingestion at scale (TEC scraper, CFB projections)

### Real-Time & Multi-User
- Live draft sync (CFB Fantasy)
- Realtime bookings + table state (Nightkey)
- Multi-role permissions and RLS-enforced separation

### 3D & Creative Tooling
- React Three Fiber, THREE.js, Spline runtime
- Blender automation + MCP integration (Bisect)
- ComfyUI workflow integration (Bisect)

### AI Integration
- Pattern detection model in production (TEC)
- RAG / vector search (TEC, Pinecone)
- Gemini for vectorization and texture generation (Bisect)
- ComfyUI workflows for image/video (Bisect)

### Payments, Identity, Comms
- QorCommerce, Stripe, Twilio
- AWS Rekognition + GCP Vision (ID verification)
- Expo Push, OAuth flows

### Deployment & Ops
- Vercel (frontends)
- Render (Python backends)
- RunPod / Vast.ai (cloud GPU)
- Playwright E2E, Jest, Vitest

---

## Portfolio Site Recommendations

### Featured Project Cards Should Include
- Hero shot / GIF / short video clip
- One-line tagline
- 3–5 bullet highlights (the *interesting* technical pieces, not a feature list)
- Tech stack badges (kept tight — not every dependency)
- Live link + repo link (where applicable)
- Optional: architecture sketch for the more interesting ones (TEC pipeline, Bisect bridge, Nightkey multi-app)

### Order on the Site

A reasonable opening order:

1. **CFB Fantasy** — most visually striking, easiest to grasp in 5 seconds
2. **Third Eye Capital** — heaviest engineering story, signals depth
3. **Bisect** — tooling/AI angle, demonstrates range
4. **Nightkey** — real client work, demonstrates ability to ship for a paying customer

### What Each Project Signals

| Project | Primary Signal |
|---------|----------------|
| CFB Fantasy | Owns a complex domain end-to-end, ships real-time + 3D in production |
| Third Eye Capital | Builds research/data products with a real model behind them |
| Bisect | Designs tooling; thinks in systems and interfaces |
| Nightkey | Ships premium client work across web + mobile + payments |

---

## Next Steps

1. **Capture assets** for each project: hero image/video, 1–2 in-product screenshots, optional short clip
2. **Lock copy** — one tagline + 3–5 bullets per project (drafts above are starting points, not final voice)
3. **Decide on architecture diagrams** — at minimum for TEC (data pipeline) and Bisect (bridge); optional for Nightkey (multi-app + Supabase)
4. **Wire live links** — cfbfantasy.app, thirdeyecapital.ai, bisect.app, nightkey.io
5. **Confirm what to leave out** — older projects (EZWORKS, Helmet Customizer R3F, Prism, VectorCraft AI) are intentionally not surfaced
