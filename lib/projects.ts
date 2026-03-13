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

// ARCHIVED: EZWORKS - kept for reference, not displayed on portfolio
export const archivedProjects: Project[] = [
  {
    id: 'ezworks',
    slug: 'ezworks',
    title: 'EZWORKS',
    description: 'Production AI SaaS for scalable image generation',
    longDescription: 'Cloud-based SaaS platform that simplifies ComfyUI workflows into a user-friendly interface. Features real-time generation progress via WebSocket streaming, subscription management with Stripe, and a Redis job queue system for scalable AI processing.',
    featured: false,
    category: 'ai-systems',
    techStack: ['Next.js 16', 'React 19', 'FastAPI', 'Redis', 'ComfyUI', 'Stable Diffusion', 'Stripe'],
    aiHighlights: [
      'AI workflow engine with ComfyUI integration',
      'Redis job queue for scalable AI processing',
      'Real-time AI progress via WebSocket streaming',
      'Automated workflow generation from user inputs'
    ],
    liveUrl: 'https://ezworks.art',
    githubUrl: 'https://github.com/kpm34/ezworks',
    diagramUrl: '/diagrams/ezworks-architecture',
    image: '/projects/ezworks.png',
    images: ['/projects/ezworks.png'],
    gradient: 'from-purple-500 to-pink-500'
  }
];

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
    githubUrl: 'https://github.com/kpm34/prism',
    diagramUrl: '/diagrams/bisect-architecture',
    diagrams: [
      { slug: 'bisect-architecture', title: 'System Overview' },
      { slug: 'bisect-universal-editor', title: 'Universal Editor' },
      { slug: 'bisect-ai-commands', title: 'AI Commands' },
      { slug: 'bisect-materials', title: 'Material System' }
    ],
    image: '/projects/prism.png',
    demoVideo: '/projects/Demo.mov',
    images: ['/projects/prism.png', '/projects/vectorcraft.png'],
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
    id: 'helmet-customizer',
    slug: 'helmet-customizer',
    title: 'Helmet Editor (R3F)',
    description: 'Real-time 3D helmet customizer with zone-based colors and Bezier curve stripe patterns',
    longDescription: 'Interactive 3D helmet customization system built with React Three Fiber. Features zone-based color customization (shell, facemask, chinstrap, padding), 4 material finishes (glossy, matte, chrome, brushed), and stripe patterns rendered as 3D Bezier curve tubes. Integrates with CFB Fantasy V2 for team branding.',
    featured: false, // Not in top 3
    category: '3d',
    techStack: ['Next.js 14', 'React Three Fiber', 'Three.js', 'Zustand', 'Supabase'],
    aiHighlights: [
      'MeshPhysicalMaterial with clearcoat and sheen',
      'Bezier curve stripe rendering (CubicBezierCurve3)',
      '4 material finishes with PBR properties',
      'Real-time zone color updates at 60fps'
    ],
    liveUrl: 'https://helmet-customizer.vercel.app',
    githubUrl: 'https://github.com/kpm34/helmet-customizer',
    diagramUrl: '/diagrams/helmet-editor-architecture',
    image: '/projects/helmet.png',
    images: ['/projects/helmet.png'],
    gradient: 'from-blue-500 to-cyan-500'
  }
];

