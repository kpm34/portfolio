# Portfolio Summary

**Live Site:** https://kashyapmaheshwari.vercel.app

## Featured Projects

### 1. Bisect (formerly Prism + VectorCraft)
**Three-Studio Creative Platform with AI Orchestration**

- **Live:** https://prism.vercel.app
- **Tech:** Next.js 14, React 19, GPT-4o, Spline Runtime, THREE.js, Zustand
- **Key Features:**
  - Universal Editor with format-agnostic adapter pattern (Spline, GLTF, GLB)
  - AI Command System - natural language to 3D manipulation via GPT-4o
  - 600+ PBR Material presets with semantic search
  - Three interconnected studios: Vector, Texture, 3D Scene
- **Architecture Diagrams:**
  - System Overview
  - Universal Editor (Adapter Pattern)
  - AI Commands (GPT-4o Integration)
  - Material System (600+ PBR Presets)
- **Demo Video:** Included on portfolio

### 2. CFB Fantasy App
**Full-Stack Fantasy Football Platform**

- **Live:** https://cfbfantasy.app
- **Tech:** Next.js 15, React 19, Supabase, THREE.js
- **Key Features:**
  - Real-time draft system (Snake & Auction) with Supabase Realtime
  - WebSocket subscriptions for live updates
  - Player projections pipeline with CFBD API integration
  - Fantasy scoring calculator (Standard, PPR, Half-PPR)
  - Draft grade calculation (A-F)
  - 3D Helmet Editor integration
- **Architecture Diagrams:**
  - System Overview
  - Real-Time Draft System
  - Authentication Flow
  - Projections Pipeline
  - Scoring System

### 3. Helmet Editor (R3F)
**Real-Time 3D Helmet Customization**

- **Live:** https://helmet-customizer.vercel.app
- **Tech:** Next.js 14, React Three Fiber, Three.js, Zustand, Supabase
- **Key Features:**
  - Zone-based color customization (shell, facemask, chinstrap, padding)
  - 4 material finishes (glossy, matte, chrome, brushed) via MeshPhysicalMaterial
  - Stripe patterns as 3D Bezier curve tubes (CubicBezierCurve3 + TubeGeometry)
  - Real-time updates at 60fps
  - Integrates with CFB Fantasy for team branding
- **Architecture Diagram:** Helmet Editor Architecture

## Secondary Projects

### 4. EZWORKS
**Production AI SaaS Platform**

- **Live:** https://ezworks.art
- **Tech:** Next.js 16, React 19, FastAPI, Redis, ComfyUI, Stable Diffusion, Stripe
- **Key Features:**
  - AI workflow engine with ComfyUI integration
  - Redis job queue for scalable AI processing
  - Real-time generation progress via WebSocket
  - Subscription management with Stripe

### 5. Third Eye Capital
**Financial Analytics Dashboard**

- **Tech:** Next.js, TypeScript, Recharts, Tailwind CSS
- **Status:** In development

---

## Technical Highlights

### AI Integration
- GPT-4o for natural language 3D commands
- Multi-agent orchestration (provider routing)
- RAG system with ChromaDB (optional)
- ComfyUI + Stable Diffusion workflows

### Real-Time Systems
- Supabase Realtime for WebSocket subscriptions
- Live draft updates across multiple clients
- 60fps 3D rendering with React Three Fiber

### Architecture Patterns
- Format-agnostic adapter pattern (ISceneAdapter)
- Zustand for client-side state management
- Row Level Security (RLS) with Supabase
- Snake draft calculation via PostgreSQL RPC

### 3D Graphics
- React Three Fiber + Three.js
- MeshPhysicalMaterial with clearcoat/sheen
- Bezier curve geometry (CubicBezierCurve3)
- Spline Runtime integration
- 600+ PBR material presets

---

## Architecture Diagrams

The portfolio includes **10 detailed SVG architecture diagrams** rendered as dedicated pages:

**CFB Fantasy (5 diagrams):**
- `/diagrams/cfb-fantasy-architecture` - System Overview
- `/diagrams/cfb-realtime-draft` - Real-Time Draft System
- `/diagrams/cfb-auth` - Authentication Flow
- `/diagrams/cfb-projections` - Projections Pipeline
- `/diagrams/cfb-scoring` - Scoring System

**Bisect (4 diagrams):**
- `/diagrams/bisect-architecture` - System Overview
- `/diagrams/bisect-universal-editor` - Universal Editor
- `/diagrams/bisect-ai-commands` - AI Commands
- `/diagrams/bisect-materials` - Material System

**Helmet Editor (1 diagram):**
- `/diagrams/helmet-editor-architecture` - R3F Architecture

---

## Tech Stack

**Frontend:** Next.js 14/15/16, React 19, TypeScript, Tailwind CSS, Framer Motion
**3D:** React Three Fiber, Three.js, Spline Runtime
**State:** Zustand
**Backend:** Supabase, FastAPI, Redis
**AI:** OpenAI GPT-4o, ComfyUI, Stable Diffusion
**Payments:** Stripe
**Deployment:** Vercel

---

## Contact

- **GitHub:** https://github.com/kpm34
- **LinkedIn:** https://linkedin.com/in/kashyapmaheshwari
- **Email:** kashpm2002@gmail.com
