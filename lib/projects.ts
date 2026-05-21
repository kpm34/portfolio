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
  demoVideo?: string;
  images?: string[];
  gradient: string;
  // New comprehensive fields
  problemStatement?: string;
  metrics?: Metric[];
  technicalHighlights?: TechnicalHighlight[];
  outcome?: string; // Brief outcome/result shown on project cards
  skills?: { title: string; description: string }[];
}

export const projects: Project[] = [
  {
    id: 'cfb-fantasy',
    slug: 'cfb-fantasy',
    title: 'CFB Fantasy App',
    description: 'Season-long college football fantasy with live drafts, 3D helmet editor, player analytics, and AI chat assistant',
    longDescription: 'The first fantasy platform built exclusively for college football. Create or join leagues, draft real Power 4 and Notre Dame players through live snake or auction drafts, set weekly lineups, manage your roster through trades and waivers, and compete head-to-head all season — with playoffs, standings, and draft grades. Includes a Fantasy Lab for advanced analytics and an AI chat assistant that knows your league.',
    featured: true,
    category: 'fullstack',
    techStack: ['Next.js 15', 'React 19', 'Supabase', 'THREE.js', 'Claude', 'Pinecone'],
    techStackDetailed: {
      frontend: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind v4'],
      '3d': ['React Three Fiber', 'Three.js', 'Drei'],
      backend: ['Supabase', 'PostgreSQL', 'Vercel Cron', 'Stripe'],
      ai: ['Claude API', 'Gemini API', 'Pinecone'],
      infra: ['Vercel', 'Upstash Redis', 'Resend', 'Expo']
    },
    aiHighlights: [
      'Dual AI system (Claude + Gemini) with RAG memory',
      'Real-time draft with 6ms latency',
      '15+ background cron jobs',
      'Multi-tenant RLS architecture'
    ],
    liveUrl: 'https://cfbfantasy.app',
    githubUrl: 'https://github.com/kpm34/cfb-fantasy',
    diagramUrl: '/diagrams/cfb-fantasy-architecture',
    diagrams: [
      { slug: 'cfb-auth', title: 'Authentication' },
      { slug: 'cfb-projections', title: 'Projections Pipeline' },
      { slug: 'cfb-scoring', title: 'Scoring System' },
      { slug: 'helmet-editor-architecture', title: 'Helmet Editor' }
    ],
    image: '/projects/cfb-demo-thumb.png',
    demoVideo: '/projects/cfb-demo.mp4',
    images: ['/projects/cfb-new.png', '/projects/cfb.png', '/projects/helmet.png'],
    gradient: 'from-orange-500 to-red-500',
    // New comprehensive fields
    problemStatement: 'College football has 75 million fans but no dedicated fantasy platform. ESPN and Yahoo treat CFB as an afterthought. We built the app those fans deserve.',
    metrics: [
      { label: 'Players', value: '2,500+', detail: 'Power 4 + Notre Dame' },
      { label: 'Scoring Types', value: '3', detail: 'PPR, Half-PPR, Standard' },
      { label: 'Features', value: '100+', detail: 'Fantasy, social, content, analytics' },
      { label: 'Built Solo', value: '4 mo', detail: 'Design to deploy' }
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
        description: 'XGBoost + Ridge Regression ensemble combining Vegas lines, injury adjustments, defensive matchups, and trailing usage shares. Weekly backtesting, boom/bust projections, and confidence scoring.'
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
        title: 'Video Production',
        description: 'Remotion framework for programmatic video rendering — 1,696-frame investor demo with 6 animated sequences, custom SVG chart animations with strokeDasharray draw effects, and mobile device frame mockups.'
      },
      {
        title: 'DevOps & CI/CD',
        description: 'Docker containers for Remotion renderer and FastAPI ML service. GitHub Actions CI/CD workflows with draft E2E tests. Jest test suite for snake draft calculations and scheduling. Redis caching with in-memory fallback. PWA manifest with maskable icons.'
      }
    ]
  },
  {
    id: 'thirdeye',
    slug: 'thirdeye',
    title: 'Third Eye Capital',
    description: 'Stock newsletter and analysis platform with proprietary financial models, 3D concept visualizations, and investor tools',
    longDescription: 'Investment analysis platform for active investors—like Seeking Alpha with a proprietary edge. Features an immersive 3D scroll journey through financial concepts (Valuation, Technical Analysis, Quantitative Methods), stock analysis with custom financial models, Monte Carlo forecasting tools, and GoHighLevel CRM integration for subscriber management.',
    featured: true,
    category: 'finance',
    techStack: ['Next.js', 'TypeScript', 'Three.js', 'GSAP', 'Recharts', 'Appwrite'],
    techStackDetailed: {
      frontend: ['Next.js', 'React', 'TypeScript', 'Recharts'],
      '3d': ['Three.js', 'React Three Fiber', 'GSAP', 'Anime.js'],
      backend: ['Appwrite', 'GoHighLevel CRM'],
      education: ['CFA Curriculum', 'Practice Exams', 'Flashcards']
    },
    aiHighlights: [
      'Immersive 3D financial concept journey',
      '60+ nodes across 3 disciplines',
      'CFA study platform with practice exams',
      'GoHighLevel CRM subscriber management'
    ],
    liveUrl: 'https://thirdeyecapital.ai',
    diagramUrl: '/diagrams/thirdeye-architecture',
    diagrams: [
      { slug: 'thirdeye-architecture', title: 'System Overview' },
      { slug: 'thirdeye-3d-journey', title: '3D Financial Journey' },
      { slug: 'thirdeye-cfa-platform', title: 'CFA Learning Platform' }
    ],
    image: '/projects/thirdeye-v2.png',
    images: ['/projects/thirdeye-v2.png'],
    gradient: 'from-slate-500 to-gray-500',
    // New comprehensive fields
    problemStatement: 'Active investors need actionable analysis, not just news. Third Eye combines proprietary financial models with immersive content delivery and practical analysis tools.',
    metrics: [
      { label: 'Study Views', value: '9', detail: 'CFA curriculum sections' },
      { label: '3D Nodes', value: '60+', detail: 'Financial concept visualization' },
      { label: 'Disciplines', value: '3', detail: 'Valuation, Technical, Quant' },
      { label: 'CFA Platform', value: '6K+', detail: 'Lines of curriculum UI' }
    ],
    technicalHighlights: [
      {
        title: '3D Financial Journey',
        description: '60+ financial nodes distributed across Valuation, Technical Analysis, and Quantitative Methods. Scroll-driven camera with fog reveal effect inspired by mont-fort.com.',
        tags: ['Three.js', 'GSAP', '3D']
      },
      {
        title: 'CFA Study Platform',
        description: 'Multi-view state management across 9 views with hierarchical curriculum navigation, flashcards, practice exams, and progress tracking.',
        tags: ['Education', 'CFA', 'React']
      },
      {
        title: 'Monte Carlo Forecasting',
        description: 'Probabilistic projections based on historical performance. Parametric inputs for capital, contributions, and strategy selection help subscribers plan.',
        tags: ['Statistics', 'Forecasting', 'Tools']
      },
      {
        title: 'CRM Integration',
        description: 'GoHighLevel integration for subscriber management with tiered access levels (basic, premium, professional) and application workflow.',
        tags: ['GoHighLevel', 'CRM', 'Subscriptions']
      }
    ],
    skills: [
      {
        title: 'Financial Modeling',
        description: 'Portfolio forecasting with probability-weighted scenarios, exit strategy modeling, Black-Scholes options pricing, and risk assessment with 95% confidence intervals.'
      },
      {
        title: 'Scroll-driven 3D',
        description: 'Camera interpolation keyed to scroll progress, 60 financial concept nodes with Bezier curve connections, exponential fog density progression, and video overlay blending.'
      },
      {
        title: 'Educational Platform',
        description: 'Hierarchical content system with 40+ routes, two navigation modes (Browse vs. Sequential Study), progress tracking, and interactive simulators and trainers.'
      },
      {
        title: 'CRM Integration',
        description: 'GoHighLevel bidirectional sync via webhooks, tier mapping logic, embedded form automation, and subscriber lifecycle management.'
      }
    ]
  },
  {
    id: 'bisect',
    slug: 'bisect',
    title: 'Bisect',
    description: 'Creative platform bridging Blender and AI - 5 studios for vectors, textures, 3D scenes, audio, and video',
    longDescription: 'Bisect bridges professional tools (Blender + ComfyUI) for creators who want results without pipeline complexity. Features 5 studios (Vector, Texture, 3D, Audio, Video), a CLI with 30+ commands, MCP server with 20+ AI tools, 600+ PBR materials, and e-commerce adapters for Shopify/WooCommerce. Export to React components or vanilla Three.js.',
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
      '5 creative studios with cross-asset workflows',
      'CLI + MCP server for AI-powered automation',
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
    demoVideo: '/projects/Demo.mov',
    images: ['/projects/prism.png'],
    gradient: 'from-emerald-500 to-teal-500',
    // New comprehensive fields
    outcome: 'Multi-LLM creative pipeline with CLI + MCP integration',
    problemStatement: 'Blender and ComfyUI are powerful but have steep learning curves. Creators need a bridge that connects these tools through a visual interface without node complexity.',
    metrics: [
      { label: 'Studios', value: '5', detail: 'Vector, Texture, 3D, Audio, Video' },
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
        title: '5-Studio Architecture',
        description: 'Vector (SVG/AI vectorization), Texture (MatCap/PBR), 3D (scene editing), Audio (SFX), and Video (AI generation) studios with unified Zustand state.',
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
      backend: ['Supabase Postgres', '73 Migrations', 'Row-Level Security', '24 Edge Functions (Deno)', 'Supabase Realtime', 'Supabase Storage'],
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
    image: '/projects/nightkey.png',
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
        description: '73 versioned migrations across clubs, promoters, guests, staff, bookings, payments, and underwriting. Row-Level Security on every table with role-aware helpers (is_active for staff, promoter_profiles join for affiliations). Indexes tuned for live floor queries during peak hours.'
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

