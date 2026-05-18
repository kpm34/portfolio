import { Skill } from './types';

export const skills: Skill[] = [
  // ===== FRONTEND =====
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'frontend',
    proficiency: 5,
    yearsUsed: 3,
    keywords: ['next.js', 'nextjs', 'next', 'app router', 'server components', 'SSR', 'SSG'],
    evidence: [
      { projectId: 'cfb-fantasy', description: 'Built full-stack SaaS platform with Next.js 15 App Router', impact: '100+ features, 4 months solo' },
      { projectId: 'thirdeye', description: 'Stock analysis terminal with Next.js', impact: '9-tab terminal interface' },
      { projectId: 'bisect', description: 'Creative platform with Next.js 14', impact: '5 studios' },
      { projectId: 'nightkey', description: 'iPad-first Next.js 16 dashboard for club operators with Konva floor plan editor and real-time booking state' },
    ],
  },
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    proficiency: 5,
    yearsUsed: 3,
    keywords: ['react', 'react.js', 'reactjs', 'hooks', 'components', 'jsx', 'tsx'],
    evidence: [
      { projectId: 'cfb-fantasy', description: 'Complex state management across 100+ features with React 19' },
      { projectId: 'thirdeye', description: 'React frontend with 9-tab terminal using TanStack Query' },
    ],
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    proficiency: 5,
    yearsUsed: 3,
    keywords: ['typescript', 'ts', 'type safety', 'generics', 'interfaces'],
    evidence: [
      { projectId: 'cfb-fantasy', description: 'Full TypeScript codebase with strict typing across frontend and API' },
      { projectId: 'thirdeye', description: 'TypeScript throughout React + FastAPI integration layer' },
      { projectId: 'bisect', description: 'TypeScript for CLI, MCP server, and web platform' },
    ],
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'frontend',
    proficiency: 5,
    yearsUsed: 3,
    keywords: ['tailwind', 'tailwindcss', 'utility-first css', 'responsive design'],
    evidence: [
      { projectId: 'cfb-fantasy', description: 'Responsive UI with Tailwind across all pages' },
      { projectId: 'portfolio', description: 'Portfolio site with custom Tailwind v4 design system' },
    ],
  },
  {
    id: 'framer-motion',
    name: 'Framer Motion',
    category: 'frontend',
    proficiency: 4,
    yearsUsed: 2,
    keywords: ['framer motion', 'animation', 'transitions', 'variants', 'gestures'],
    evidence: [
      { projectId: 'portfolio', description: 'Staggered animations, scroll-triggered reveals, drag carousels' },
    ],
  },
  {
    id: 'recharts',
    name: 'Recharts',
    category: 'frontend',
    proficiency: 4,
    yearsUsed: 2,
    keywords: ['recharts', 'data visualization', 'charts', 'graphs', 'area chart', 'bar chart', 'radar chart'],
    evidence: [
      { projectId: 'cfb-fantasy', description: 'Fantasy Lab with area charts, bar charts, radar comparisons, gradient fills' },
      { projectId: 'thirdeye', description: 'Equity research terminal charts with Recharts + lightweight-charts' },
    ],
  },
  {
    id: 'tanstack-query',
    name: 'TanStack Query',
    category: 'frontend',
    proficiency: 4,
    yearsUsed: 2,
    keywords: ['tanstack query', 'react query', 'server state', 'caching', 'data fetching'],
    evidence: [
      { projectId: 'thirdeye', description: 'Server state management for 70+ API endpoints' },
    ],
  },

  // ===== BACKEND =====
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    proficiency: 4,
    yearsUsed: 3,
    keywords: ['node', 'nodejs', 'node.js', 'express', 'server-side javascript'],
    evidence: [
      { projectId: 'cfb-fantasy', description: 'API routes, cron jobs, and server-side logic' },
      { projectId: 'bisect', description: 'CLI tool and MCP server built with Node.js' },
    ],
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    category: 'backend',
    proficiency: 4,
    yearsUsed: 2,
    keywords: ['fastapi', 'python api', 'rest api', 'pydantic', 'uvicorn'],
    evidence: [
      { projectId: 'thirdeye', description: 'Built FastAPI backend with 70+ REST endpoints', impact: '70+ endpoints powering equity terminal' },
    ],
  },
  {
    id: 'rest-apis',
    name: 'REST API Design',
    category: 'backend',
    proficiency: 5,
    yearsUsed: 3,
    keywords: ['rest', 'api design', 'endpoints', 'http', 'crud', 'api architecture'],
    evidence: [
      { projectId: 'thirdeye', description: '70+ REST endpoints for equity research terminal and admin tools' },
      { projectId: 'cfb-fantasy', description: 'API routes for draft, scoring, waivers, trades, and more' },
    ],
  },
  {
    id: 'websockets',
    name: 'WebSockets / Real-time',
    category: 'backend',
    proficiency: 4,
    yearsUsed: 2,
    keywords: ['websocket', 'real-time', 'broadcast', 'presence', 'live updates', 'supabase realtime'],
    evidence: [
      { projectId: 'cfb-fantasy', description: 'Real-time draft system with WebSocket broadcasts and presence tracking' },
      { projectId: 'nightkey', description: 'Supabase Realtime + Broadcast powering the Tonight cockpit — live booking arrivals, server assignments, and door-side check-in state' },
    ],
  },
  {
    id: 'stripe',
    name: 'Stripe',
    category: 'backend',
    proficiency: 4,
    yearsUsed: 2,
    keywords: ['stripe', 'payments', 'subscriptions', 'billing', 'saas billing'],
    evidence: [
      { projectId: 'cfb-fantasy', description: 'Stripe billing with 3 tiers, free trials, feature gating across 12 premium features' },
    ],
  },
  {
    id: 'payfac',
    name: 'Payment Facilitator (PayFac)',
    category: 'backend',
    proficiency: 4,
    yearsUsed: 1,
    keywords: ['payfac', 'payment facilitator', 'sub-merchant boarding', 'kyb', 'kyc', 'merchant of record', 'split payouts', 'underwriting'],
    evidence: [
      { projectId: 'nightkey', description: 'Sub-merchant boarding for clubs and promoters, KYB/KYC document flow, split payouts to multiple sub-merchants, merchant-of-record routing' },
    ],
  },
  {
    id: 'qorcommerce',
    name: 'QorCommerce / Card Processing',
    category: 'backend',
    proficiency: 4,
    yearsUsed: 1,
    keywords: ['qorcommerce', 'qorpay', 'card processing', 'card tokenization', 'payframe', 'merchant boarding', 'channels api'],
    evidence: [
      { projectId: 'nightkey', description: 'QorCommerce Channels v3 integration: new_merchant boarding, transaction settlement, refunds, ACH credits, PayFrame card capture' },
    ],
  },
  {
    id: 'hmac-signing',
    name: 'HMAC / Cryptographic Signing',
    category: 'backend',
    proficiency: 4,
    yearsUsed: 2,
    keywords: ['hmac', 'hmac-sha256', 'signing', 'cryptographic signatures', 'jose', 'jwt signing', 'request signing'],
    evidence: [
      { projectId: 'nightkey', description: 'HMAC-SHA256 PayFrame signing server-side so processor keys never reach the client; jose-signed JWTs for wallet pass tokens' },
    ],
  },
  {
    id: 'pdf-generation',
    name: 'PDF Generation & E-Sign',
    category: 'backend',
    proficiency: 3,
    yearsUsed: 1,
    keywords: ['pdf-lib', 'pdf generation', 'e-sign', 'electronic signature', 'document automation', 'pdf stamping'],
    evidence: [
      { projectId: 'nightkey', description: 'pdf-lib pipeline for non-solicitation agreements — overlays promoter signature, EIN, ISO timestamp, then writes signed PDF to Supabase Storage' },
    ],
  },
  {
    id: 'apple-wallet',
    name: 'Apple Wallet / PassKit',
    category: 'backend',
    proficiency: 3,
    yearsUsed: 1,
    keywords: ['apple wallet', 'passkit', 'passkit-generator', 'pkpass', 'wallet pass', 'digital pass'],
    evidence: [
      { projectId: 'nightkey', description: 'Generated signed .pkpass files (passkit-generator + jose) for VIP, event, and voucher cards delivered to Apple Wallet' },
    ],
  },
  {
    id: 'twilio',
    name: 'Twilio (SMS / Verify)',
    category: 'backend',
    proficiency: 3,
    yearsUsed: 1,
    keywords: ['twilio', 'sms', 'twilio verify', 'otp', 'phone verification', 'transactional sms'],
    evidence: [
      { projectId: 'nightkey', description: 'Twilio Verify for step-up auth OTP on sensitive staff actions; transactional SMS for booking confirmations and door-side alerts' },
    ],
  },
  {
    id: 'expo-push',
    name: 'Expo Push Notifications',
    category: 'backend',
    proficiency: 3,
    yearsUsed: 1,
    keywords: ['expo push', 'push notifications', 'expo notifications', 'mobile push'],
    evidence: [
      { projectId: 'nightkey', description: 'Expo Push API for transactional mobile alerts: booking state changes, promoter check-ins, payout confirmations' },
    ],
  },
  {
    id: 'deno-edge',
    name: 'Deno / Supabase Edge Functions',
    category: 'backend',
    proficiency: 4,
    yearsUsed: 1,
    keywords: ['deno', 'supabase edge functions', 'edge functions', 'serverless deno', 'esm.sh'],
    evidence: [
      { projectId: 'nightkey', description: '24 Deno-based Edge Functions covering boarding, payouts, webhooks, ID verification, PDF generation, push, and step-up auth — with TDD on money paths' },
    ],
  },
  {
    id: 'state-machines',
    name: 'State Machine Design',
    category: 'backend',
    proficiency: 4,
    yearsUsed: 2,
    keywords: ['state machine', 'state transitions', 'finite state machine', 'workflow', 'lifecycle modeling', 'idempotency'],
    evidence: [
      { projectId: 'nightkey', description: 'Booking lifecycle (pending → confirmed → active → completed/cancelled/no_show) with idempotent transitions across web, mobile, and webhook surfaces' },
    ],
  },
  {
    id: 'multi-tenant',
    name: 'Multi-Tenant Architecture',
    category: 'backend',
    proficiency: 4,
    yearsUsed: 2,
    keywords: ['multi-tenant', 'tenancy', 'rls', 'row-level security', 'marketplace', 'role-based access'],
    evidence: [
      { projectId: 'nightkey', description: 'Four-role marketplace (clubs, promoters, guests, bottle servers) on one Postgres with role-aware RLS on every table — 73 versioned migrations' },
    ],
  },
  {
    id: 'pci-compliance',
    name: 'PCI / Payment Compliance',
    category: 'backend',
    proficiency: 3,
    yearsUsed: 1,
    keywords: ['pci', 'pci-dss', 'pci compliance', 'card data', 'hosted iframe', 'payframe', 'scope reduction'],
    evidence: [
      { projectId: 'nightkey', description: 'Kept PCI scope out of the app by using QorCommerce hosted PayFrame iframe with server-side HMAC signing; card data never touches the platform' },
    ],
  },
  {
    id: 'aws-rekognition',
    name: 'AWS Rekognition',
    category: 'ai-ml',
    proficiency: 3,
    yearsUsed: 1,
    keywords: ['aws rekognition', 'rekognition', 'face match', 'facial recognition', 'computer vision', 'identity verification'],
    evidence: [
      { projectId: 'nightkey', description: 'CompareFaces selfie ↔ ID-photo verification with tunable confidence thresholds for at-the-door scenarios' },
    ],
  },
  {
    id: 'google-vision',
    name: 'Google Cloud Vision',
    category: 'ai-ml',
    proficiency: 3,
    yearsUsed: 1,
    keywords: ['google vision', 'cloud vision', 'ocr', 'document ai', 'text detection', 'id verification'],
    evidence: [
      { projectId: 'nightkey', description: 'OCR for ID-document text extraction composed with AAMVA state-by-state barcode validation in a single verify-id pipeline' },
    ],
  },
  {
    id: 'konva',
    name: 'Konva / Canvas Editors',
    category: 'frontend',
    proficiency: 4,
    yearsUsed: 1,
    keywords: ['konva', 'react-konva', 'canvas', 'canvas editor', 'drag and drop', 'snap to grid', 'floor plan editor'],
    evidence: [
      { projectId: 'nightkey', description: 'iPad-first floor-plan editor with drag-drop tables, snap-to-grid, zone overlays, and auto-layout templates' },
    ],
  },
  {
    id: 'ipad-touch-ui',
    name: 'iPad / Touch-First UI',
    category: 'frontend',
    proficiency: 4,
    yearsUsed: 1,
    keywords: ['ipad', 'touch ui', 'tablet ui', 'touch targets', 'pen input', 'gesture handling', 'ios-grade'],
    evidence: [
      { projectId: 'nightkey', description: 'iPad-first dashboard with 44px+ touch targets, pen+touch input on the Konva editor, and a premium photography-forward visual language' },
    ],
  },
  {
    id: 'static-ip-networking',
    name: 'Static-IP / Compliance Networking',
    category: 'devops',
    proficiency: 3,
    yearsUsed: 1,
    keywords: ['static ip', 'ip allowlist', 'render forwarder', 'compliance networking', 'egress', 'outbound ip'],
    evidence: [
      { projectId: 'nightkey', description: 'Node forwarder on Render with a static outbound IP to satisfy QorCommerce IP allowlist requirement without losing the Supabase egress story' },
    ],
  },
  {
    id: 'python',
    name: 'Python',
    category: 'backend',
    proficiency: 4,
    yearsUsed: 3,
    keywords: ['python', 'python3', 'scripting', 'automation'],
    evidence: [
      { projectId: 'thirdeye', description: 'FastAPI backend, backtesting engine, statistical analysis' },
      { projectId: 'bisect', description: 'Blender Python scripting for scene manipulation' },
    ],
  },

  // ===== AI & ML =====
  {
    id: 'llm-integration',
    name: 'LLM Integration',
    category: 'ai-ml',
    proficiency: 5,
    yearsUsed: 2,
    keywords: ['llm', 'large language model', 'ai integration', 'prompt engineering', 'structured output'],
    evidence: [
      { projectId: 'cfb-fantasy', description: 'Dual AI system: Claude for vision analysis + structured output, Gemini for web search + content gen' },
      { projectId: 'bisect', description: 'Multi-LLM routing (GPT-4o, Claude, Gemini) based on task requirements' },
    ],
  },
  {
    id: 'claude',
    name: 'Claude / Anthropic API',
    category: 'ai-ml',
    proficiency: 5,
    yearsUsed: 2,
    keywords: ['claude', 'anthropic', 'claude api', 'claude vision', 'tool use'],
    evidence: [
      { projectId: 'cfb-fantasy', description: 'Claude for vision analysis and structured output schemas' },
      { projectId: 'bisect', description: 'Claude Blender Agent for complex mesh operations' },
    ],
  },
  {
    id: 'rag',
    name: 'RAG / Vector Search',
    category: 'ai-ml',
    proficiency: 4,
    yearsUsed: 2,
    keywords: ['rag', 'retrieval augmented generation', 'vector search', 'embeddings', 'semantic search', 'pinecone'],
    evidence: [
      { projectId: 'cfb-fantasy', description: 'Pinecone RAG pipeline indexing conversation context, player stats, and league data' },
      { projectId: 'bisect', description: 'Material Agent with RAG from PBR preset library' },
    ],
  },
  {
    id: 'multi-agent',
    name: 'Multi-Agent Systems',
    category: 'ai-ml',
    proficiency: 4,
    yearsUsed: 2,
    keywords: ['multi-agent', 'agent systems', 'agent orchestration', 'agent debate', 'ai agents'],
    evidence: [
      { projectId: 'bisect', description: 'Gemini Spatial Agent, Material Agent with RAG, Claude Blender Agent, Agent Debate for consensus' },
    ],
  },
  {
    id: 'xgboost',
    name: 'XGBoost',
    category: 'ai-ml',
    proficiency: 3,
    yearsUsed: 1,
    keywords: ['xgboost', 'gradient boosting', 'ensemble', 'tree-based models'],
    evidence: [
      { projectId: 'cfb-fantasy', description: 'XGBoost + Ridge Regression ensemble for player projections' },
    ],
  },
  {
    id: 'ml-pipelines',
    name: 'ML Pipelines',
    category: 'ai-ml',
    proficiency: 3,
    yearsUsed: 2,
    keywords: ['ml pipeline', 'machine learning pipeline', 'model training', 'feature engineering', 'backtesting'],
    evidence: [
      { projectId: 'cfb-fantasy', description: 'Full ML feedback loop: predictions stored, outcomes tracked, accuracy measured per model version' },
      { projectId: 'thirdeye', description: 'Backtesting engine with target hit screening, Fibonacci tracking, statistical analysis' },
    ],
  },
  {
    id: 'gpt4',
    name: 'GPT-4o / OpenAI',
    category: 'ai-ml',
    proficiency: 4,
    yearsUsed: 2,
    keywords: ['gpt-4', 'gpt4o', 'openai', 'chatgpt', 'openai api'],
    evidence: [
      { projectId: 'bisect', description: 'Multi-LLM routing with GPT-4o for specific task types' },
    ],
  },
  {
    id: 'gemini',
    name: 'Gemini / Google AI',
    category: 'ai-ml',
    proficiency: 4,
    yearsUsed: 2,
    keywords: ['gemini', 'google ai', 'google cloud ai', 'gemini api'],
    evidence: [
      { projectId: 'cfb-fantasy', description: 'Gemini for web search and content generation in dual AI system' },
      { projectId: 'bisect', description: 'Gemini Spatial Agent for scene arrangements' },
    ],
  },

  // ===== DATA ENGINEERING =====
  {
    id: 'etl',
    name: 'ETL Pipelines',
    category: 'data-engineering',
    proficiency: 4,
    yearsUsed: 2,
    keywords: ['etl', 'data pipeline', 'data ingestion', 'data processing', 'batch processing'],
    evidence: [
      { projectId: 'cfb-fantasy', description: 'ETL from CFBD, ESPN, and betting APIs into normalized PostgreSQL tables' },
      { projectId: 'thirdeye', description: 'Automated data pipeline with Supabase caching and multi-source fallback chain' },
    ],
  },
  {
    id: 'statistical-analysis',
    name: 'Statistical Analysis',
    category: 'data-engineering',
    proficiency: 4,
    yearsUsed: 2,
    keywords: ['statistics', 'statistical analysis', 'pearson correlation', 'covariance', 'quartile', 'regression', 'monte carlo', 'black-scholes', 'confidence intervals'],
    evidence: [
      { projectId: 'thirdeye', description: 'Monte Carlo forecasting, Black-Scholes options pricing, probability-weighted portfolio scenarios with 95% confidence intervals' },
      { projectId: 'thirdeye', description: 'Backtesting engine with Pearson correlation, covariance matrices, quartile decomposition' },
      { projectId: 'cfb-fantasy', description: 'Boom/bust volatility analysis from historical game data' },
    ],
  },
  {
    id: 'data-visualization',
    name: 'Data Visualization',
    category: 'data-engineering',
    proficiency: 4,
    yearsUsed: 2,
    keywords: ['data viz', 'visualization', 'dashboards', 'charts', 'graphs', 'analytics'],
    evidence: [
      { projectId: 'cfb-fantasy', description: 'Fantasy Lab: area charts, radar comparisons, ML feature importance visualizations' },
      { projectId: 'thirdeye', description: '9-tab terminal with Recharts + lightweight-charts' },
      { projectId: 'portfolio', description: '40+ ReactFlow architecture diagrams with Dagre auto-layout' },
    ],
  },
  {
    id: 'cron-jobs',
    name: 'Cron / Scheduled Jobs',
    category: 'data-engineering',
    proficiency: 4,
    yearsUsed: 2,
    keywords: ['cron', 'scheduled jobs', 'automation', 'vercel cron', 'qstash'],
    evidence: [
      { projectId: 'cfb-fantasy', description: '16 Vercel cron jobs for draft timers, scoring, waivers, projections, articles', impact: '16 automated cron jobs' },
    ],
  },

  // ===== DATABASE =====
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    proficiency: 5,
    yearsUsed: 3,
    keywords: ['postgresql', 'postgres', 'sql', 'relational database', 'rdbms'],
    evidence: [
      { projectId: 'cfb-fantasy', description: '50+ tables, 24 migrations, 30+ stored procedures, RLS policies', impact: '50+ tables with RLS' },
      { projectId: 'nightkey', description: '73 versioned migrations modeling four-role marketplace (clubs, promoters, guests, servers) with RLS on every table' },
    ],
  },
  {
    id: 'supabase',
    name: 'Supabase',
    category: 'database',
    proficiency: 5,
    yearsUsed: 3,
    keywords: ['supabase', 'baas', 'backend as a service', 'supabase auth', 'supabase realtime'],
    evidence: [
      { projectId: 'cfb-fantasy', description: 'Auth, storage, database, realtime broadcast, RLS' },
      { projectId: 'thirdeye', description: 'Supabase caching and auth with tiered access control' },
      { projectId: 'nightkey', description: '24 Deno Edge Functions, Realtime/Broadcast, Storage for signed PDFs, and role-aware RLS across the entire schema' },
    ],
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'database',
    proficiency: 3,
    yearsUsed: 1,
    keywords: ['redis', 'caching', 'upstash', 'in-memory database', 'key-value store'],
    evidence: [
      { projectId: 'cfb-fantasy', description: 'Upstash Redis caching with in-memory fallback' },
    ],
  },
  {
    id: 'pinecone',
    name: 'Pinecone',
    category: 'database',
    proficiency: 4,
    yearsUsed: 1,
    keywords: ['pinecone', 'vector database', 'vector store', 'embeddings store'],
    evidence: [
      { projectId: 'cfb-fantasy', description: 'Pinecone vector store for RAG pipeline' },
    ],
  },

  // ===== 3D GRAPHICS =====
  {
    id: 'react-three-fiber',
    name: 'React Three Fiber',
    category: '3d-graphics',
    proficiency: 4,
    yearsUsed: 2,
    keywords: ['react three fiber', 'r3f', 'three.js react', '3d react', 'webgl react'],
    evidence: [
      { projectId: 'cfb-fantasy', description: '3D helmet editor with 7 material systems' },
      { projectId: 'thirdeye', description: '3D financial journey with scroll-driven camera' },
      { projectId: 'bisect', description: 'Multi-studio 3D architecture with Rapier physics' },
    ],
  },
  {
    id: 'threejs',
    name: 'Three.js',
    category: '3d-graphics',
    proficiency: 4,
    yearsUsed: 2,
    keywords: ['three.js', 'threejs', 'webgl', '3d graphics', '3d rendering', 'shaders'],
    evidence: [
      { projectId: 'cfb-fantasy', description: 'MeshPhysicalMaterial with clearcoat, Bezier curve stripe patterns' },
      { projectId: 'thirdeye', description: '60+ 3D nodes with fog reveal effects' },
    ],
  },
  {
    id: 'blender',
    name: 'Blender / Python API',
    category: '3d-graphics',
    proficiency: 3,
    yearsUsed: 2,
    keywords: ['blender', 'blender python', 'blender api', '3d modeling', 'bpy'],
    evidence: [
      { projectId: 'bisect', description: 'CLI for Blender scene manipulation, MCP server for Claude Code integration' },
    ],
  },

  // ===== DEVOPS =====
  {
    id: 'vercel',
    name: 'Vercel',
    category: 'devops',
    proficiency: 5,
    yearsUsed: 3,
    keywords: ['vercel', 'deployment', 'hosting', 'edge functions', 'serverless'],
    evidence: [
      { projectId: 'cfb-fantasy', description: 'Vercel deployment with 16 scheduled cron jobs' },
      { projectId: 'portfolio', description: 'Portfolio hosted on Vercel' },
    ],
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'devops',
    proficiency: 3,
    yearsUsed: 2,
    keywords: ['docker', 'containerization', 'dockerfile', 'container'],
    evidence: [
      { projectId: 'cfb-fantasy', description: 'Docker containerization for Remotion video renderer and FastAPI ML microservice' },
    ],
  },
  {
    id: 'github-actions',
    name: 'GitHub Actions / CI/CD',
    category: 'devops',
    proficiency: 3,
    yearsUsed: 2,
    keywords: ['github actions', 'ci/cd', 'continuous integration', 'continuous deployment', 'workflows'],
    evidence: [
      { projectId: 'cfb-fantasy', description: 'CI/CD with draft E2E tests and cron verification' },
    ],
  },
  {
    id: 'git',
    name: 'Git',
    category: 'devops',
    proficiency: 5,
    yearsUsed: 4,
    keywords: ['git', 'version control', 'github', 'branching', 'merge'],
    evidence: [
      { projectId: 'cfb-fantasy', description: 'Version control across all projects' },
    ],
  },

  // ===== SCIENCE =====
  {
    id: 'rt-pcr',
    name: 'RT-PCR / Gene Expression',
    category: 'science',
    proficiency: 4,
    yearsUsed: 2,
    keywords: ['rt-pcr', 'pcr', 'gene expression', 'molecular biology', 'nucleic acid'],
    evidence: [
      { projectId: 'upmc-research', description: 'RT-PCR gene expression analysis on cardiovascular tissue' },
      { projectId: 'achd-lab', description: 'TMA-based nucleic acid amplification for COVID-19 testing' },
    ],
  },
  {
    id: 'lab-diagnostics',
    name: 'Lab Diagnostics',
    category: 'science',
    proficiency: 4,
    yearsUsed: 2,
    keywords: ['diagnostics', 'hologic', 'qiagen', 'specimen tracking', 'laboratory'],
    evidence: [
      { projectId: 'achd-lab', description: 'Operated Hologic Panther platform for high-throughput COVID testing' },
    ],
  },
  {
    id: 'compliance',
    name: 'GLP / HIPAA Compliance',
    category: 'science',
    proficiency: 3,
    yearsUsed: 2,
    keywords: ['glp', 'hipaa', 'bsl-2', 'compliance', 'regulatory', 'quality control'],
    evidence: [
      { projectId: 'achd-lab', description: 'GLP, BSL-2, and HIPAA compliance across laboratory work' },
    ],
  },

  // ===== ADDITIONAL FRONTEND/TOOLS =====
  {
    id: 'remotion',
    name: 'Remotion',
    category: 'frontend',
    proficiency: 3,
    yearsUsed: 1,
    keywords: ['remotion', 'programmatic video', 'video generation', 'video rendering'],
    evidence: [
      { projectId: 'cfb-fantasy', description: '6-sequence investor demo video (1,696 frames) with SVG animations' },
    ],
  },
  {
    id: 'reactflow',
    name: 'ReactFlow',
    category: 'frontend',
    proficiency: 4,
    yearsUsed: 2,
    keywords: ['reactflow', 'node diagrams', 'flow diagrams', 'dagre', 'auto-layout'],
    evidence: [
      { projectId: 'portfolio', description: '40+ architecture diagrams with Dagre auto-layout' },
    ],
  },
  {
    id: 'expo',
    name: 'Expo / React Native',
    category: 'frontend',
    proficiency: 3,
    yearsUsed: 1,
    keywords: ['expo', 'react native', 'mobile app', 'cross-platform', 'ota updates'],
    evidence: [
      { projectId: 'cfb-fantasy', description: 'Companion Expo mobile app with over-the-air updates' },
      { projectId: 'nightkey', description: 'Guest and promoter Expo apps sharing the Supabase schema with the dashboard; phone OTP auth, EAS Build with auto-submit to TestFlight and Play Internal' },
    ],
  },
  {
    id: 'oauth',
    name: 'OAuth / Auth Systems',
    category: 'backend',
    proficiency: 4,
    yearsUsed: 2,
    keywords: ['oauth', 'authentication', 'authorization', 'jwt', 'rbac', 'google auth', 'apple auth'],
    evidence: [
      { projectId: 'cfb-fantasy', description: 'OAuth (Google/Apple), JWT mobile auth, RBAC with audit logging' },
      { projectId: 'thirdeye', description: 'Supabase auth with tiered access control' },
      { projectId: 'nightkey', description: 'OAuth/email for the dashboard, phone OTP for mobile, Twilio Verify step-up auth for sensitive staff actions (refunds, comps, settlement edits)' },
    ],
  },
  {
    id: 'email-infra',
    name: 'Email Infrastructure',
    category: 'backend',
    proficiency: 3,
    yearsUsed: 1,
    keywords: ['email', 'resend', 'gmail api', 'email analytics', 'spf', 'dkim'],
    evidence: [
      { projectId: 'cfb-fantasy', description: 'Resend + Gmail API, open/click analytics, Hunter.io integration, SPF/DKIM auth' },
    ],
  },
  {
    id: 'playwright',
    name: 'Playwright',
    category: 'devops',
    proficiency: 3,
    yearsUsed: 1,
    keywords: ['playwright', 'e2e testing', 'browser automation', 'web scraping'],
    evidence: [
      { projectId: 'thirdeye', description: 'Playwright for browser automation in data pipeline' },
      { projectId: 'nightkey', description: 'Playwright E2E suite covering booking lifecycle, staff step-up auth, and Konva floor plan editor interactions' },
    ],
  },

  // ===== DATA SCIENCE TOOLS =====
  {
    id: 'jupyter',
    name: 'Jupyter / Notebooks',
    category: 'data-engineering',
    proficiency: 3,
    yearsUsed: 1,
    keywords: ['jupyter', 'jupyter notebook', 'jupyter lab', 'ipython', 'notebooks', 'watson studio'],
    evidence: [
      { projectId: 'ibm-certification', description: 'IBM Watson Studio certification — cloud-based Jupyter notebooks for data prep, model building, and deployment workflows' },
    ],
  },
  {
    id: 'pandas',
    name: 'Pandas / NumPy',
    category: 'data-engineering',
    proficiency: 3,
    yearsUsed: 2,
    keywords: ['pandas', 'numpy', 'dataframe', 'data manipulation', 'data wrangling', 'numerical computing'],
    evidence: [
      { projectId: 'thirdeye', description: 'Data manipulation for backtesting engine — correlation matrices, quartile decomposition, time series analysis' },
      { projectId: 'cfb-fantasy', description: 'Player stats processing and feature engineering for ML projection pipeline' },
    ],
  },
  {
    id: 'scikit-learn',
    name: 'Scikit-learn',
    category: 'ai-ml',
    proficiency: 3,
    yearsUsed: 1,
    keywords: ['scikit-learn', 'sklearn', 'machine learning', 'ridge regression', 'model selection', 'preprocessing'],
    evidence: [
      { projectId: 'cfb-fantasy', description: 'Ridge Regression in XGBoost + Ridge ensemble for player projections', impact: 'Weekly backtesting against actuals' },
    ],
  },
  {
    id: 'cloud-platforms',
    name: 'Cloud Platforms (AWS/GCP/IBM)',
    category: 'devops',
    proficiency: 3,
    yearsUsed: 2,
    keywords: ['aws', 'gcp', 'google cloud', 'amazon web services', 'cloud', 'cloud infrastructure', 'ibm cloud', 'watson studio'],
    evidence: [
      { projectId: 'cfb-fantasy', description: 'Deployed across Vercel, AWS, and Google Cloud' },
      { projectId: 'cfb-fantasy', description: 'Docker containers for FastAPI ML microservice on cloud infrastructure' },
      { projectId: 'ibm-certification', description: 'IBM Watson Studio certification — cloud ML platform for data prep, model building, and deployment workflows' },
    ],
  },
  {
    id: 'excel',
    name: 'Excel / Spreadsheets',
    category: 'data-engineering',
    proficiency: 3,
    yearsUsed: 3,
    keywords: ['excel', 'spreadsheets', 'google sheets', 'pivot tables', 'data analysis'],
    evidence: [
      { projectId: 'achd-lab', description: 'Built Excel reporting systems for specimen tracking that improved lab efficiency' },
    ],
  },
  {
    id: 'financial-modeling',
    name: 'Financial Modeling',
    category: 'data-engineering',
    proficiency: 4,
    yearsUsed: 2,
    keywords: ['financial modeling', 'monte carlo', 'black-scholes', 'portfolio forecasting', 'options pricing', 'risk assessment'],
    evidence: [
      { projectId: 'thirdeye', description: 'Monte Carlo forecasting with parametric inputs for capital, contributions, and strategy selection' },
      { projectId: 'thirdeye', description: 'Black-Scholes options pricing, probability-weighted portfolio scenarios, exit strategy modeling' },
      { projectId: 'thirdeye', description: 'Proprietary analysis algorithm with price action, financials, configurable range filtering, nesting invalidation' },
    ],
  },
];

export const getSkillById = (id: string): Skill | undefined =>
  skills.find((s) => s.id === id);

export const getSkillsByCategory = (category: Skill['category']): Skill[] =>
  skills.filter((s) => s.category === category);
