export interface DiagramInfo {
  slug: string;
  title: string;
}

export interface Metric {
  label: string;
  value: string;
  detail?: string;
}

export interface TechnicalHighlight {
  title: string;
  description: string;
  tags: string[];
}

export interface TechStackCategory {
  [category: string]: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  featured: boolean;
  category: 'ai-systems' | 'automation' | 'ai-integration' | 'fullstack' | '3d' | 'finance';
  techStack: string[];
  techStackDetailed?: TechStackCategory;
  aiHighlights: string[];
  liveUrl?: string;
  githubUrl?: string;
  diagramUrl?: string;
  diagrams?: DiagramInfo[];
  image: string;
  /** Optional looping clip. Absent until rendered — ProductMedia falls back to `image`. */
  clip?: string;
  demoVideo?: string;
  images?: string[];
  gradient: string;
  /** Exactly three short metadata chips, rendered as tracked caps. */
  chips: string[];
  // New comprehensive fields
  problemStatement?: string;
  metrics?: Metric[];
  technicalHighlights?: TechnicalHighlight[];
  outcome?: string; // Brief outcome/result shown on project cards
  skills?: { title: string; description: string }[];
}

export const projects: Project[] = [
  {
    id: 'content-studio',
    slug: 'content-studio',
    title: 'AI Content Studio',
    description: 'The agent workforce that runs Ballknowers — six specialised agents on a task queue, every publish path gated by human approval',
    longDescription: 'A separate system that operates a live consumer app. Specialised agents — writer, analyst, artist, editor, publisher, support — poll a Supabase task queue, draft articles, social posts and video, and route everything through a human approval gate before a one-way publish into the product. A two-database factory/storefront split keeps drafting isolated from what users see. Operated through a HUD showing every agent\'s live status, a Content Hub and Writing Room for review, a Remotion render engine for video, a custom MCP server for article CRUD, and a voice interface — wake-word detection, local Whisper transcription, ElevenLabs speech — so the studio can be driven hands-free.',
    featured: true,
    category: 'ai-systems',
    techStack: ['Python', 'Supabase', 'Claude', 'Gemini', 'Remotion', 'Whisper', 'ElevenLabs'],
    techStackDetailed: {
      agents: ['Writer', 'Analyst', 'Artist', 'Editor', 'Publisher', 'Support'],
      orchestration: ['Supabase task queue', 'Python worker', 'Human approval gates', 'One-way publish'],
      voice: ['Porcupine wake word', 'Local Whisper STT', 'ElevenLabs TTS'],
      media: ['Remotion render engine', 'ComfyUI', 'Blender'],
      devtools: ['cfb-articles-mcp (custom MCP server)'],
      frontend: ['Next.js', 'Vite', 'Operator HUD']
    },
    aiHighlights: [
      'Six specialised agents against one Supabase task queue',
      'Human approval gate on every publish path — no autonomous posting',
      'Two-database factory/storefront split isolates drafting from production',
      'Voice-operated: wake word, local Whisper, ElevenLabs'
    ],
    diagramUrl: '/diagrams/cfb-projections',
    image: '/projects/studio-hud.jpg',
    clip: '/projects/studio-hud.mp4',
    chips: ['6 agents', 'human approval gate', 'voice-operated'],
    images: ['/projects/studio-hud.jpg'],
    gradient: 'from-amber-500 to-yellow-600',
    outcome: 'Runs the content operation of a live App Store product',
    problemStatement: 'A consumer app needs constant content to stay alive, and one person cannot write, illustrate, edit and publish it daily. The studio is the workforce that does it — but nothing reaches users without me approving it first.',
    skills: [
      {
        title: 'Agent Orchestration',
        description: 'Six specialised agents poll a Supabase task queue through a Python worker. Drafts move through quality review and a human approval gate, then publish one-way into the consumer app across a two-database factory/storefront boundary.'
      },
      {
        title: 'Voice Interface',
        description: 'Porcupine wake-word detection, local Whisper speech-to-text, and ElevenLabs speech, driving the operator HUD by natural language so the studio can be run without touching a keyboard.'
      },
      {
        title: 'Programmatic Media',
        description: 'A Remotion render engine produces social video and carousels from structured data, with ComfyUI and Blender workflows feeding the assembly line.'
      }
    ]
  },
  {
    id: 'cfb-fantasy',
    slug: 'cfb-fantasy',
    title: 'Ballknowers — CFB Fantasy',
    description: 'Season-long college football fantasy — live on the App Store, Google Play, and web. Real-time drafts, 3D helmet editor, player analytics, and AI chat assistant',
    longDescription: 'A fantasy platform dedicated exclusively to college football. Create or join leagues, draft real Power 4 and Notre Dame players through live snake or auction drafts, set weekly lineups, manage your roster through trades and waivers, and compete head-to-head all season — with playoffs, standings, and draft grades. Includes a Fantasy Lab for advanced analytics and an AI chat assistant that knows your league.',
    featured: true,
    category: 'fullstack',
    techStack: ['Next.js 15', 'React 19', 'Supabase', 'THREE.js', 'Claude', 'Pinecone'],
    techStackDetailed: {
      frontend: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind v4'],
      '3d': ['React Three Fiber', 'Three.js', 'Drei'],
      backend: ['Supabase', 'PostgreSQL', 'Vercel Cron', 'Stripe'],
      ai: ['Claude API', 'Gemini API', 'Pinecone'],
      infra: ['Vercel', 'Render', 'Resend', 'Expo']
    },
    aiHighlights: [
      'Dual AI system (Claude + Gemini) with RAG memory',
      'Real-time draft with 6ms latency',
      '15+ background cron jobs',
      'Multi-tenant RLS architecture'
    ],
    liveUrl: 'https://ballknowers.app',
    diagramUrl: '/diagrams/cfb-fantasy-architecture',
    diagrams: [
      { slug: 'cfb-auth', title: 'Authentication' },
      { slug: 'cfb-projections', title: 'Projections Pipeline' },
      { slug: 'cfb-scoring', title: 'Scoring System' },
      { slug: 'helmet-editor-architecture', title: 'Helmet Editor' }
    ],
    image: '/projects/cfb-poster.jpg',
    clip: '/projects/cfb-loop.mp4',
    chips: ['iOS · Android · Web', '50+ tables', '6 agents'],
    demoVideo: '/projects/cfb-demo.mp4',
    images: ['/projects/cfb-new.png', '/projects/cfb.png', '/projects/helmet.png'],
    gradient: 'from-orange-500 to-red-500',
    // New comprehensive fields
    problemStatement: 'College football has 75 million fans, but fantasy has always treated CFB as an afterthought. Ballknowers is a platform dedicated to college fantasy — built to give those fans the app they deserve.',
    metrics: [
      { label: 'Platforms', value: '3', detail: 'Live on iOS, Android, and web' },
      { label: 'Players', value: '2,500+', detail: 'Power 4 + Notre Dame' },
      { label: 'Scoring Types', value: '3', detail: 'PPR, Half-PPR, Standard' },
      { label: 'Built Solo', value: '10 mo', detail: 'Design to app store release' }
    ],
    outcome: 'Fantasy, content, and social platform for college football fans',
    technicalHighlights: [
      {
        title: 'Live Snake & Auction Drafts',
        description: 'Real-time multiplayer drafting with pick timers, autopick, player queue, draft chat, and live pick updates. Choose snake or auction format with FAAB bidding. Post-draft grades and awards for every team.',
        tags: ['Drafting', 'Real-time', 'Multiplayer']
      },
      {
        title: 'Weekly Matchups & Live Scoring',
        description: 'Head-to-head matchups with live fantasy point updates during Saturday games. Full season scoreboard, weekly schedule, and score breakdowns by player.',
        tags: ['Scoring', 'Matchups', 'Saturdays']
      },
      {
        title: 'Trades, Waivers & Lineup Management',
        description: 'Propose trades with league veto system and trade deadline enforcement. FAAB waiver wire with blind bidding. Sleeper-style lineup management — move, swap, drop, and set IR.',
        tags: ['Trades', 'Waivers', 'Roster']
      },
      {
        title: 'Fantasy Lab',
        description: 'Premium analytics hub with five tabs and nested sub-tabs — Player leaderboards with boom/bust and snap-count charts, Team Intel deep dives, comparative Team Analytics with scatter plots and rankings, an Edge Finder powered by a custom ML prediction engine with proprietary composite metrics, and a Projections tab for season-long fantasy forecasts.',
        tags: ['Analytics', 'ML Engine', 'Premium']
      },
      {
        title: 'Playoffs, Standings & League History',
        description: 'Full season lifecycle from draft to champion. Visual playoff brackets, power rankings, draft grades, and a premium League History archive with trophy cases, rivalry networks, all-time records, and season superlatives.',
        tags: ['Playoffs', 'History', 'Championships']
      },
      {
        title: '3D Helmet Studio & Locker',
        description: 'Design custom helmets in a real-time 3D editor — pick colors, finishes (matte, chrome, gloss), stripe patterns, and save designs to your personal Locker. Assign helmets to your fantasy teams.',
        tags: ['3D Editor', 'Customization', 'Locker']
      },
      {
        title: 'Social Feed & Messaging',
        description: 'A community social feed where fans post, like, and repost. Fan chat rooms by team and conference. Direct messages between users. League-specific group chat on every league page.',
        tags: ['Social', 'Chat', 'Community']
      },
      {
        title: 'CFB Central Content Hub',
        description: 'A content feed of CFB articles — previews, recaps, analysis, rankings, and fantasy tips — with a live game score sidebar showing real college football results.',
        tags: ['Content', 'Articles', 'News']
      },
      {
        title: 'AI Content Studio (Internal)',
        description: 'A separate AI-operated content factory that powers CFB Central and social growth. Specialized agents — article writer, social poster, scout, mixer, analyst, strategist — poll a Supabase task queue, draft content, and route everything through human approval before a one-way publish into the app. Includes an operator UI (Content Hub, Writing Room, Studio Conveyor), a Remotion render engine, ComfyUI/Blender generation workflows, a custom MCP server for article CRUD, and a voice assistant ("Lil Pepe") with wake-word detection, local Whisper transcription, and ElevenLabs speech that answers questions and drives the studio HUD hands-free.',
        tags: ['AI Agents', 'Content Factory', 'Voice AI']
      },
      {
        title: '3D Explore Experience',
        description: 'An immersive 3D navigation page where users browse CFB teams by conference. Click any team to see their real roster, schedule, and stats in a side panel.',
        tags: ['3D', 'Explore', 'Teams']
      },
      {
        title: 'Playoff Pick\'em Pools',
        description: 'Create or join bracket pick\'em pools for the College Football Playoff. Fill out your bracket, compete against friends, and track standings on a live leaderboard.',
        tags: ['Pick\'em', 'Brackets', 'Pools']
      },
      {
        title: 'Game Predictions & Achievements',
        description: 'Pick winners of real CFB games each week and compete on a prediction leaderboard. Earn achievement badges for milestones like championships, perfect prediction weeks, and draft streaks.',
        tags: ['Predictions', 'Badges', 'Gamification']
      },
      {
        title: 'Mobile App',
        description: 'Expo-based mobile app for iOS and Android with full feature parity — manage lineups, make draft picks, track live scores, and chat with your league on the go.',
        tags: ['Expo', 'iOS', 'Android']
      },
      {
        title: 'Pro Subscriptions & Billing',
        description: 'Three subscription tiers — Individual Pro, League Pro, and League Bundle — with Stripe checkout, 14-day free trials, and a billing portal. Premium features include Fantasy Lab, League History, and advanced projections.',
        tags: ['Stripe', 'Subscriptions', 'Billing']
      }
    ],
    skills: [
      {
        title: 'Real-time Systems',
        description: 'WebSocket draft rooms with Supabase Broadcast, presence tracking, live scoring with 2–3 minute refresh during Saturday games, and QStash job queues for draft auto-picks with deduplication.'
      },
      {
        title: 'ML Prediction Engine',
        description: 'Calibrated Ridge and Logistic Regression models with TimeSeriesSplit validation, combining Vegas lines, injury adjustments, defensive matchups, and trailing usage shares. Weekly backtesting, boom/bust projections, and confidence scoring.'
      },
      {
        title: 'Security Engineering',
        description: 'hCaptcha and honeypot bot mitigation, threat detection scoring with device fingerprinting, timing-safe authentication, and RBAC with full audit logging.'
      },
      {
        title: 'Email & CRM',
        description: 'Visual drag-and-drop email builder with HTML export, Resend API with delivery/open/click analytics via webhooks, Hunter.io email verification, and a prospect CRM with lead scoring and pipeline stages.'
      },
      {
        title: 'Payments & Subscriptions',
        description: 'Stripe checkout with three tiers ($12.99–$69.99), 14-day free trials, feature gating across 12 premium features, billing portal, and MRR analytics dashboard.'
      },
      {
        title: 'Data Pipelines',
        description: 'ETL system processing players from CFBD, ESPN, and betting APIs into 50+ Supabase tables. Trailing share calculations, automated game analytics refresh, and 16 scheduled cron jobs.'
      },
      {
        title: 'Database Design & SQL',
        description: '50+ PostgreSQL tables across 24 migrations with 30+ stored procedures, Row-Level Security on every table, atomic draft pick functions to prevent race conditions, and complex relational modeling (leagues → teams → rosters → players → stats).'
      },
      {
        title: 'Data Visualization',
        description: 'Recharts-powered Fantasy Lab with area charts, bar charts, radar comparisons, and gradient fills. Admin dashboards for revenue timeseries, customer cohorts, and email funnels. 40+ ReactFlow architecture diagrams with Dagre auto-layout.'
      },
      {
        title: 'Frontend at Scale',
        description: '440+ React components with TypeScript strict mode, shadcn/ui + Radix primitives, dnd-kit drag-and-drop interfaces, Framer Motion animations, and Turbopack for fast builds. Responsive from mobile to desktop.'
      },
      {
        title: 'AI Agent Orchestration',
        description: 'An internal content studio where article, social, scout, mixer, analyst, and strategist agents run against a Supabase task queue with a Python worker — drafts flow through quality review and human approval, then publish one-way into the consumer app via a two-database factory/storefront architecture. Includes a custom MCP server (cfb-articles-mcp) for article CRUD and a voice interface with wake-word detection, local Whisper STT, and ElevenLabs TTS for hands-free studio operation.'
      },
      {
        title: 'Video Production',
        description: 'Remotion framework for programmatic video rendering — 1,696-frame investor demo with 6 animated sequences, custom SVG chart animations, and a shared remotion-engine package rendering highlight mixes and social carousels through a studio conveyor pipeline, with ComfyUI and Blender generation workflows feeding the assembly line.'
      },
      {
        title: 'DevOps & CI/CD',
        description: 'Docker containers for Remotion renderer and FastAPI ML service. GitHub Actions CI/CD workflows with draft E2E tests. Jest test suite for snake draft calculations and scheduling. In-memory caching layer. PWA manifest with maskable icons.'
      }
    ]
  },
  {
    id: 'thirdeye',
    slug: 'thirdeye',
    title: 'Third Eye Trading',
    description: 'Equity research terminal and proprietary pattern-detection engine — 130+ endpoint FastAPI backend, an automated market-data pipeline, and a published track record',
    longDescription: 'A subscriber research product built around a proprietary edge. The terminal covers ~290 symbols with 15 data tabs each — fundamentals, valuation, 10-year financials, ratio trends, estimates, dividends, momentum, and ownership — fed by an automated Seeking Alpha ingestion pipeline with a four-stage fallback chain. On top of it sits the Wick-Wick model, a candlestick pattern detector for monthly and quarterly liquidity-purge setups, backtested across 786 enriched patterns from 2020–2025 and published as an auditable track record. Rounded out with a pattern scanner, screener, backtesting engine, options-surface capture, portfolio and play tracking, a CFA learning hub, and a tiered subscriber funnel with admin CRM.',
    featured: true,
    category: 'finance',
    techStack: ['React 18', 'TypeScript', 'FastAPI', 'Python', 'Supabase', 'Recharts'],
    techStackDetailed: {
      frontend: ['React 18', 'Vite', 'TypeScript', 'Tailwind', 'shadcn/ui', 'TanStack Query', 'React Router'],
      backend: ['FastAPI', 'Python 3', 'Pydantic', 'Supabase (Postgres + Auth + RLS)'],
      data: ['Playwright scraping', 'Seeking Alpha API', 'RapidAPI', 'yfinance', 'ThetaData v3 (options)'],
      charts: ['Recharts', 'lightweight-charts'],
      ai: ['Pinecone (RAG knowledge base)'],
      '3d': ['Three.js', 'React Three Fiber', 'GSAP'],
      infra: ['Vercel (frontend)', 'Render (Python API)', 'GoHighLevel CRM']
    },
    aiHighlights: [
      '130+ REST endpoints across 20 route modules',
      'Proprietary pattern model with a published, auditable track record',
      'Automated ingestion: 15 tabs × ~290 symbols, four-stage fallback chain',
      'Pinecone RAG over a research knowledge base'
    ],
    liveUrl: 'https://thirdeyetrading.io',
    diagramUrl: '/diagrams/thirdeye-architecture',
    diagrams: [
      { slug: 'thirdeye-architecture', title: 'System Overview' },
      { slug: 'thirdeye-3d-journey', title: '3D Financial Journey' },
      { slug: 'thirdeye-cfa-platform', title: 'CFA Learning Platform' }
    ],
    image: '/projects/thirdeye-poster.jpg',
    clip: '/projects/thirdeye-loop.mp4',
    chips: ['130 endpoints', '786 patterns backtested', '~290 symbols'],
    images: ['/projects/thirdeye-v2.png'],
    gradient: 'from-slate-500 to-gray-500',
    // New comprehensive fields
    outcome: 'Subscriber research product with a proprietary model and a published track record',
    problemStatement: 'Retail investors get news and opinion, not an edge with its results shown. Third Eye pairs a research terminal with a proprietary pattern model — and publishes every play, including the ones that did not work.',
    metrics: [
      { label: 'API Endpoints', value: '130+', detail: 'Across 20 FastAPI route modules' },
      { label: 'Symbols', value: '290+', detail: '15 data tabs each, ~2,600 cached entries' },
      { label: 'Patterns', value: '786', detail: 'Enriched setups backtested 2020–2025' },
      { label: 'Frontend Pages', value: '26', detail: 'Terminal, scanner, track record, admin' }
    ],
    technicalHighlights: [
      {
        title: 'Wick-Wick Pattern Engine',
        description: 'Proprietary detector for monthly and quarterly liquidity-purge setups, enriched with fundamental quality filters and validated against ground-truth plays. Backtested across 786 patterns from 2020–2025, with a scanner that runs it across the market and a backtest harness behind an admin surface.',
        tags: ['Quant', 'Backtesting', 'Python']
      },
      {
        title: 'Automated Market-Data Pipeline',
        description: 'Playwright browser automation plus API calls collect 15 tabs per symbol — 10-year financials, factor grades, ownership, seasonality — and cache them to Supabase. Requests resolve through a four-stage fallback chain: in-memory TTL cache, Supabase cache, RapidAPI, then yfinance, so a dead upstream degrades instead of failing.',
        tags: ['ETL', 'Playwright', 'Caching']
      },
      {
        title: 'Published Track Record',
        description: 'An auditable outcome ladder where every row states its own time window and denominator, built so losing plays stay as visible as the winners. Rebuilt deliberately to strip out overstated headline claims and misleading peak-return framing.',
        tags: ['Trust', 'Analytics', 'Product']
      },
      {
        title: 'Options Surface Capture',
        description: 'ThetaData v3 client capturing the full options surface, with a 5-month backtest window chosen as a deliberate buffer against the 4-month price-target horizon.',
        tags: ['Options', 'ThetaData', 'Backtesting']
      },
      {
        title: 'Research Terminal',
        description: 'Per-symbol tabs for fundamentals, valuation, growth, profitability, ratio trends, estimates, dividends, momentum, capital structure, peers, seasonality, and ownership — TanStack Query for server state, Recharts and lightweight-charts for the visuals, tiered access gating throughout.',
        tags: ['React', 'TanStack Query', 'Charts']
      },
      {
        title: 'Subscriber Platform',
        description: 'Application and approval funnel, tiered access (basic, premium, professional), newsletter and published plays, portfolio and play tracking, a CFA learning hub, and an admin CRM with GoHighLevel sync and per-admin workspace isolation.',
        tags: ['Supabase Auth', 'RLS', 'CRM']
      }
    ],
    skills: [
      {
        title: 'Quantitative Modeling',
        description: 'Pattern detection over monthly and quarterly candles with parameterized range thresholds, fundamental quality enrichment, validation against known ground-truth plays, and a backtest harness reporting hit rates per target and horizon.'
      },
      {
        title: 'Resilient Data Ingestion',
        description: 'Authenticated Playwright scraping with cookie persistence on a 24-hour TTL, resumable multi-hour batch runs with a per-symbol audit trail, and a four-source fallback chain so no single upstream outage takes the terminal down.'
      },
      {
        title: 'Python API Design',
        description: 'FastAPI with Pydantic models across 20 route modules covering stock data, scanning, backtesting, portfolio, plays, newsletter, knowledge base, billing, and admin — deployed to Render, with the Vite frontend on Vercel.'
      },
      {
        title: 'Honest Analytics Presentation',
        description: 'Track-record surfaces where every claim carries its own window and denominator, built through repeated passes specifically to remove overstated tiers, redundant metrics, and framing that flattered the results.'
      }
    ]
  },
  {
    id: 'bisect',
    slug: 'bisect',
    title: 'Bisect',
    description: 'Creative tooling that bridges Blender and ComfyUI — three shipped studios for vectors, textures, and 3D scenes, driven by a web UI, a CLI, or an AI agent',
    longDescription: 'Bisect bridges professional tools (Blender + ComfyUI) for creators who want results without pipeline complexity. Three studios shipped — Vector, Texture, and 3D — with Audio and Video scaffolded but unfinished. The same core is reachable three ways: a web editor, a CLI with 30+ commands, and an MCP server exposing 20+ tools so an AI agent can drive it directly. Includes 600+ PBR materials with Blender sync, e-commerce adapters for Shopify and WooCommerce, and export to React components or vanilla Three.js. Built Nov 2025 – May 2026 and currently parked.',
    featured: true,
    category: 'ai-integration',
    techStack: ['Next.js 14', 'React 18', 'GPT-4o', 'Gemini', 'Claude', 'Three.js', 'Blender API', 'ComfyUI'],
    techStackDetailed: {
      frontend: ['Next.js 14', 'React 18', 'TypeScript 5'],
      '3d': ['Three.js', 'React Three Fiber', 'Rapier Physics'],
      ai: ['GPT-4o', 'Gemini', 'Claude', 'Hyper3D'],
      devtools: ['CLI (30+ commands)', 'MCP Server (20+ tools)'],
      integrations: ['Blender Python API', 'ComfyUI', 'Shopify', 'WooCommerce']
    },
    aiHighlights: [
      'Three shipped studios on a shared asset pipeline',
      'One core, three interfaces: web UI, CLI, and MCP server',
      '600+ PBR materials with Blender sync',
      'E-commerce ready (Shopify, WooCommerce)'
    ],
    liveUrl: 'https://bisect.app',
    diagramUrl: '/diagrams/bisect-architecture',
    diagrams: [
      { slug: 'bisect-architecture', title: 'System Overview' },
      { slug: 'bisect-universal-editor', title: 'Universal Editor' },
      { slug: 'bisect-ai-commands', title: 'AI Commands' },
      { slug: 'bisect-materials', title: 'Material System' }
    ],
    image: '/projects/prism.png',
    chips: ['3 studios', 'CLI + MCP server', '600+ materials'],
    demoVideo: '/projects/Demo.mov',
    images: ['/projects/prism.png'],
    gradient: 'from-emerald-500 to-teal-500',
    // New comprehensive fields
    outcome: 'Multi-LLM creative pipeline with CLI + MCP integration',
    problemStatement: 'Blender and ComfyUI are powerful but have steep learning curves. Creators need a bridge that connects these tools through a visual interface without node complexity.',
    metrics: [
      { label: 'Studios', value: '3', detail: 'Vector, Texture, 3D shipped' },
      { label: 'CLI Commands', value: '30+', detail: 'Scene manipulation' },
      { label: 'MCP Tools', value: '20+', detail: 'AI-powered automation' },
      { label: 'Materials', value: '600+', detail: 'PBR presets with Blender sync' }
    ],
    technicalHighlights: [
      {
        title: 'Blender + ComfyUI Bridge',
        description: 'Connects Blender via Python API and ComfyUI via workflow integration. Creators get pro-level results without learning node graphs or scripting.',
        tags: ['Blender', 'ComfyUI', 'Integration']
      },
      {
        title: 'Multi-Studio Architecture',
        description: 'Vector (SVG/AI vectorization), Texture (MatCap/PBR), and 3D (scene editing) studios sharing one asset pipeline and unified Zustand state, with Audio and Video scaffolded on the same foundation.',
        tags: ['Architecture', 'Zustand', 'Multi-Studio']
      },
      {
        title: 'CLI + MCP Server',
        description: 'CLI tool (v2.0) with 30+ commands for scene manipulation. MCP server (v2.1) exposes 20+ AI-powered tools for Claude integration.',
        tags: ['CLI', 'MCP', 'Developer Tools']
      },
      {
        title: 'AI Agent System',
        description: 'Gemini Spatial Agent for arrangements, Material Agent with RAG from 600+ presets, Claude Blender for complex operations, Agent Debate for consensus.',
        tags: ['AI', 'Multi-Agent', 'RAG']
      },
      {
        title: 'E-Commerce Ready',
        description: 'Product configurator with adapters for Shopify, WooCommerce, and BigCommerce. Real-time 3D customization for online stores.',
        tags: ['E-Commerce', 'Shopify', 'Product Config']
      },
      {
        title: 'Code Export',
        description: 'Generate React components or vanilla Three.js code from scenes. Export to GLB, GLTF, or directly to your codebase.',
        tags: ['Export', 'React', 'Three.js']
      }
    ],
    skills: [
      {
        title: 'Multi-Agent AI',
        description: '11 specialized agents — Gemini Spatial for arrangements, Material Agent with RAG from 600+ presets, Claude Blender for mesh operations, and Agent Debate for consensus. Multi-LLM routing based on task type.'
      },
      {
        title: 'Developer Tooling',
        description: 'CLI v2.0 with 30+ commands for scene manipulation, MCP Server v2.1 with 20+ tools for Claude integration, and a WebSocket bridge for live Blender sync.'
      },
      {
        title: 'PBR Material System',
        description: '600+ presets with 6 texture maps each (baseColor, normal, roughness, AO, displacement, metallicRoughness). Cinema 4D-style cloner with 6 modes and 5 effector types.'
      },
      {
        title: 'E-commerce Integration',
        description: '3D product configurator with Shopify, WooCommerce, and BigCommerce adapters. Hotspot annotation system for product info overlays.'
      }
    ]
  },
  {
    id: 'nightkey',
    slug: 'nightkey',
    title: 'Nightkey',
    description: 'Multi-sided nightlife marketplace — iPad club dashboard, mobile apps for guests and promoters, PayFac payments, and live operations from booking to door',
    longDescription: 'Nightkey is a four-sided marketplace for high-end nightlife: an iPad-first club dashboard for venue operators, a guest app for table bookings and bottle service, a promoter app for guest lists and commissions, and a bottle-server experience for in-night service. One Supabase backend powers all four surfaces with row-level security per role, real-time booking state, an embedded payment facilitator pipeline for sub-merchant boarding and split payouts, and a Konva-based floor-plan editor that operators use to lay out their venue and accept reservations.',
    featured: true,
    category: 'fullstack',
    techStack: ['Next.js 15', 'Expo', 'React 19', 'Supabase', 'TypeScript', 'Konva', 'QorCommerce'],
    techStackDetailed: {
      frontend: ['Next.js 15 (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS', 'Konva', 'Framer Motion'],
      mobile: ['Expo SDK', 'React Native', 'EAS Build & Submit', 'Expo Push'],
      backend: ['Supabase Postgres', '121 Migrations', 'Row-Level Security', '33 Edge Functions (Deno)', 'Supabase Realtime', 'Supabase Storage'],
      payments: ['QorCommerce PFaaS', 'Sub-merchant boarding', 'Render (static-IP relay)', 'pdf-lib (NSA generation)'],
      infra: ['Vercel', 'Twilio (SMS)', 'AWS Rekognition (ID)', 'Google Cloud Vision (ID)', 'Resend (email)']
    },
    aiHighlights: [
      'Four user roles across web + mobile on one shared Supabase schema',
      'PayFac sub-merchant boarding with PDF NSA generation and e-sign',
      'Real-time booking state machine with door-side guest check-in',
      'iPad-first Konva floor-plan editor with auto-layout'
    ],
    liveUrl: 'https://nightkey.io',
    diagramUrl: '/diagrams/nightkey-architecture',
    diagrams: [
      { slug: 'nightkey-architecture', title: 'System Architecture' },
      { slug: 'nightkey-payments', title: 'Payments & Payouts' },
      { slug: 'nightkey-onboarding', title: 'Merchant Onboarding' },
      { slug: 'nightkey-floor-plan', title: 'Floor Plan & Bookings' }
    ],
    image: '/projects/nightkey-poster.jpg',
    chips: ['4 surfaces', '121 migrations', 'PayFac payouts'],
    images: ['/projects/nightkey.png', '/projects/nightkey-floor-plan.png', '/projects/nightkey-menu.png'],
    gradient: 'from-amber-500 to-orange-600',
    problemStatement: 'Nightclubs run on spreadsheets, group chats, and improvised cash splits. Guests can\'t reliably book a table, promoters can\'t prove the heads they brought, and operators can\'t see their floor in real time. Nightkey is the operating layer that ties guests, promoters, hosts, and venues together — with payments, bookings, and accountability built in.',
    metrics: [
      { label: 'Surfaces', value: '4', detail: 'Club dashboard, guest app, promoter app, bottle server' },
      { label: 'Edge Functions', value: '24', detail: 'Boarding, payouts, webhooks, ID verify, notifications' },
      { label: 'Migrations', value: '73', detail: 'Versioned Postgres schema with RLS on every table' },
      { label: 'Platforms', value: '3', detail: 'Web (iPad), iOS, Android — one schema' }
    ],
    outcome: 'Production marketplace with payments, bookings, and door operations',
    technicalHighlights: [
      {
        title: 'iPad-First Club Dashboard',
        description: 'Next.js App Router dashboard tuned for landing-on-the-iPad operations: 44px+ touch targets, Tonight cockpit for live floor view, Konva-based floor plan editor, staff management, and a Centurion-Lounge-style premium aesthetic — not a generic admin template.',
        tags: ['Next.js', 'iPad', 'iOS-grade UI']
      },
      {
        title: 'Konva Floor-Plan Editor',
        description: 'Drag-and-drop venue layout editor with auto-layout templates, table sizing, shape primitives, and zone coloring. Operators design their venue once; bookings, server assignments, and door-side check-in all reference the same canonical layout.',
        tags: ['Konva', 'Canvas', 'Editor']
      },
      {
        title: 'Four-Role Marketplace on One Schema',
        description: 'Clubs, promoters, guests, and bottle servers share one Postgres instance with role-aware RLS policies. Promoter affiliations join through promoter_profiles; club staff use is_active. Every table enforces tenancy at the database layer, not the app layer.',
        tags: ['Multi-tenant', 'RLS', 'Postgres']
      },
      {
        title: 'PayFac Sub-Merchant Boarding',
        description: 'Clubs and promoters onboard as sub-merchants under a Payment Facilitator. board-merchant and board-promoter Edge Functions call QorCommerce new_merchant, store provider IDs, and gate live charges on a verified status returned by the payment-webhook.',
        tags: ['PayFac', 'QorCommerce', 'Boarding']
      },
      {
        title: 'Promoter NSA PDF Pipeline',
        description: 'generate-promoter-nsa-pdf stamps a non-solicitation agreement with the promoter\'s name, EIN, signature image, and timestamp using pdf-lib, then writes the signed PDF to Supabase Storage and links it to the promoter profile. Drives the legal handoff for paid promoter status.',
        tags: ['pdf-lib', 'E-sign', 'Compliance']
      },
      {
        title: 'Underwriting Document Relay',
        description: 'Underwriting documents (KYB/KYC) flow from Supabase Storage through a small Node forwarder deployed on Render with a static outbound IP, satisfying the payment processor\'s IP allowlist requirement without rewriting the Supabase egress story.',
        tags: ['Render', 'Static IP', 'Underwriting']
      },
      {
        title: 'Booking State Machine + Door Operations',
        description: 'Bookings flow through pending → confirmed → active → completed | cancelled | no_show. guest-checkin-confirm flips state at the door, settle-booking captures the final charge, and the host-side Tonight view updates in realtime via Supabase Broadcast.',
        tags: ['State machine', 'Realtime', 'Door']
      },
      {
        title: 'Split Payouts',
        description: 'daily-club-payout and disburse-payouts settle nightly: platform commission is deducted from the club share, promoter commissions are routed to the promoter sub-merchant, and the remainder is paid to the club sub-merchant. Configurable per-club schedules.',
        tags: ['Payouts', 'Splits', 'Commissions']
      },
      {
        title: 'ID Verification (Rekognition + Vision)',
        description: 'verify-id Edge Function combines AWS Rekognition face match and Google Cloud Vision OCR for ID document verification — separate from Stripe Identity, so the platform owns the data pipeline and can adjust thresholds, retry behavior, and audit logging.',
        tags: ['AWS', 'GCP', 'KYC']
      },
      {
        title: 'Step-up Auth for Staff',
        description: 'staff-step-up-start and staff-step-up-verify add a second factor for sensitive operator actions (refunds, comps, settlement edits). Time-boxed elevation tokens scoped to the staff session, never to the device.',
        tags: ['Auth', 'Step-up', 'Audit']
      },
      {
        title: 'Cross-Platform Mobile (Expo)',
        description: 'Guest and promoter apps ship from a separate Expo repo against the same Supabase schema. Phone OTP auth for mobile, OAuth/email for the dashboard. EAS Build with auto-submit, TestFlight gated by an Apple-review demo venue that bypasses the payment processor for review screens.',
        tags: ['Expo', 'iOS', 'Android']
      },
      {
        title: 'Webhook-Driven Status Sync',
        description: 'payment-webhook handles merchant.verified, merchant.declined, payment events, and disputes through a single typed dispatcher. updateMerchantBoardingStatus updates either clubs or promoter_payout_profiles depending on the sub-merchant role.',
        tags: ['Webhooks', 'Sync', 'Dispatch']
      }
    ],
    skills: [
      {
        title: 'Multi-Tenant Postgres + RLS',
        description: '121 versioned migrations across clubs, promoters, guests, staff, bookings, payments, and underwriting. Row-Level Security on every table with role-aware helpers (is_active for staff, promoter_profiles join for affiliations). Indexes tuned for live floor queries during peak hours.'
      },
      {
        title: 'Payment Facilitator Integration',
        description: 'Sub-merchant boarding flow against QorCommerce: new_merchant requests, status polling, underwriting doc upload, and a payment-webhook dispatcher that updates internal status. PayFac merchant of record routes funds through the platform before splits.'
      },
      {
        title: 'Edge Function Architecture',
        description: '24 Deno-based Supabase Edge Functions covering boarding, payouts, webhooks, notifications, ID verification, and PDF generation. Shared helpers in _shared/ for state validation, timezone mapping, and QorCommerce request signing. TDD with Deno test suites.'
      },
      {
        title: 'PDF Generation & E-Sign',
        description: 'pdf-lib-based NSA stamping pipeline that overlays promoter signature, name, EIN, and ISO timestamp on a base PDF template. Signed agreements stored in Supabase Storage with row-level access tied to the promoter profile.'
      },
      {
        title: 'Realtime Operations UI',
        description: 'Supabase Broadcast + Realtime for the Tonight cockpit: live booking arrivals, host floor view, server assignments, and booking state transitions. Optimistic UI on the client, RLS-gated subscriptions on the server.'
      },
      {
        title: 'Canvas Editor (Konva)',
        description: 'Floor-plan editor with shape primitives, snap-to-grid, auto-layout templates, zone coloring, and persisted state. Hand-tuned for iPad pencil + touch input. Output drives every downstream surface — bookings, server assignments, door-side check-in.'
      },
      {
        title: 'Cross-Platform Schema Sharing',
        description: 'One Supabase project powers both the Next.js dashboard and an Expo mobile app in a separate repo. Generated TypeScript types from the Postgres schema flow into both clients. Phone OTP for mobile, OAuth/email for web, unified RLS for both.'
      },
      {
        title: 'Compliance & Static IP Networking',
        description: 'Vendor IP-allowlist requirement solved with a thin Node forwarder on Render with a static outbound IP. Supabase Storage signed URLs piped through the relay so client documents never leave the platform without being authenticated.'
      },
      {
        title: 'ID Verification Pipeline',
        description: 'AWS Rekognition face match + Google Cloud Vision OCR composed in a single verify-id Edge Function. Confidence thresholds tuned for nightlife at-the-door scenarios; failed attempts logged for audit with PII redaction.'
      },
      {
        title: 'TDD on Critical Paths',
        description: 'Deno test suites for payment-webhook (30 tests), board-promoter (15 tests), poll-merchant-status, and shared qor-helpers. Each flow developed RED → GREEN before deployment, with tests asserting state transitions, error mapping, and webhook idempotency.'
      },
      {
        title: 'Premium iPad UI',
        description: 'Amex Centurion Lounge and Airbnb references. Phosphor duotone icons (not lucide), generous spacing, photography-forward cards, Framer Motion page and list transitions. Amber accent with warm dark theme; iPad-class touch targets throughout.'
      },
      {
        title: 'Mobile Release Engineering',
        description: 'Expo EAS Build with --auto-submit to TestFlight and Play Internal. Apple-review demo venue isolated from production data via dashboard bypass mode for payments; live venue data never exposed to review accounts.'
      }
    ]
  }
];

