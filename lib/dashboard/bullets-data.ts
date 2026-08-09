import { ResumeBulletPoint } from './types';

// ===== INTELIVANCE BULLETS (project work framed as professional deliverables) =====

export const intelivanceBullets: ResumeBulletPoint[] = [
  // --- CFB Fantasy Platform ---
  {
    id: 'cfb-fullstack',
    projectId: 'cfb-fantasy',
    text: 'Architected and shipped a full-stack SaaS platform with Next.js, TypeScript, and PostgreSQL — solo-developed from database to deployment',
    skills: ['nextjs', 'typescript', 'react', 'postgresql'],
  },
  {
    id: 'cfb-database',
    projectId: 'cfb-fantasy',
    text: 'Designed relational database schema with versioned migrations, stored procedures, and Row-Level Security across all tables',
    skills: ['postgresql', 'supabase'],
  },
  {
    id: 'cfb-realtime',
    projectId: 'cfb-fantasy',
    text: 'Built real-time draft system with WebSocket broadcasts, presence tracking, and background job queues for scheduled operations',
    skills: ['websockets', 'nodejs', 'supabase'],
  },
  {
    id: 'cfb-ai-rag',
    projectId: 'cfb-fantasy',
    text: 'Integrated dual LLM system (Claude + Gemini) with a Pinecone RAG pipeline for context-aware, retrieval-augmented AI responses',
    skills: ['llm-integration', 'claude', 'gemini', 'rag', 'pinecone'],
  },
  {
    id: 'cfb-ml',
    projectId: 'cfb-fantasy',
    text: 'Built ML prediction engine using ensemble models with automated weekly backtesting against real outcomes',
    skills: ['xgboost', 'scikit-learn', 'ml-pipelines', 'statistical-analysis', 'python'],
  },
  {
    id: 'cfb-projections',
    projectId: 'cfb-fantasy',
    text: 'Developed player projection algorithm with matchup adjustments, momentum tracking, and historical trend analysis',
    skills: ['ml-pipelines', 'statistical-analysis', 'data-visualization'],
  },
  {
    id: 'cfb-etl',
    projectId: 'cfb-fantasy',
    text: 'Automated cron jobs for live scoring, waiver processing, ETL from external APIs, and scheduled content generation',
    skills: ['etl', 'cron-jobs', 'nodejs', 'python'],
  },
  {
    id: 'cfb-stripe',
    projectId: 'cfb-fantasy',
    text: 'Implemented Stripe billing with tiered subscriptions, free trials, and feature gating with revenue analytics',
    skills: ['stripe', 'rest-apis', 'nextjs'],
  },
  {
    id: 'cfb-3d',
    projectId: 'cfb-fantasy',
    text: 'Built interactive 3D helmet editor with React Three Fiber, multiple material systems, and zone-based customization',
    skills: ['react-three-fiber', 'threejs'],
  },
  {
    id: 'cfb-dataviz',
    projectId: 'cfb-fantasy',
    text: 'Created analytics dashboard with interactive charts, radar comparisons, and ML feature importance visualizations',
    skills: ['recharts', 'data-visualization', 'react'],
  },
  {
    id: 'cfb-auth',
    projectId: 'cfb-fantasy',
    text: 'Engineered authentication with OAuth providers, JWT-based mobile auth, role-based access control, and bot mitigation',
    skills: ['oauth', 'supabase', 'nodejs'],
  },
  {
    id: 'cfb-mobile',
    projectId: 'cfb-fantasy',
    text: 'Shipped companion Expo mobile app for iOS and Android with full feature parity and over-the-air updates',
    skills: ['expo', 'react', 'typescript'],
  },
  {
    id: 'cfb-email',
    projectId: 'cfb-fantasy',
    text: 'Built transactional email system with open/click analytics, contact enrichment, and proper deliverability configuration',
    skills: ['email-infra', 'rest-apis', 'nodejs'],
  },
  {
    id: 'cfb-devops',
    projectId: 'cfb-fantasy',
    text: 'Deployed across Vercel, AWS, and Google Cloud with Docker containers, CI/CD pipelines, and Redis caching',
    skills: ['vercel', 'docker', 'github-actions', 'cloud-platforms', 'redis', 'git'],
  },
  {
    id: 'cfb-video',
    projectId: 'cfb-fantasy',
    text: 'Produced programmatic demo video using Remotion with animated data visualizations and automated rendering',
    skills: ['remotion', 'react'],
  },
  {
    id: 'cfb-content-studio',
    projectId: 'cfb-fantasy',
    text: 'Built an internal AI content factory with specialized agents (article, social, scout, analyst, strategist) polling a Supabase task queue, human approval gates, and one-way publish promotion into the production app',
    skills: ['multi-agent', 'llm-integration', 'supabase', 'python', 'mcp-servers'],
  },
  {
    id: 'cfb-voice-agent',
    projectId: 'cfb-fantasy',
    text: 'Built a hands-free voice assistant for the content studio with wake-word detection (Porcupine), local Whisper speech-to-text, and ElevenLabs TTS, controlling a multi-screen operator HUD through natural language',
    skills: ['voice-ai', 'python', 'llm-integration'],
  },

  // --- Third Eye Capital ---
  {
    id: 'te-backend',
    projectId: 'thirdeye',
    text: 'Built FastAPI backend powering an equity research terminal with tiered access control and admin tooling',
    skills: ['fastapi', 'python', 'rest-apis', 'oauth'],
  },
  {
    id: 'te-pipeline',
    projectId: 'thirdeye',
    text: 'Engineered automated data pipeline with caching, multi-source fallback, and browser automation for data collection',
    skills: ['etl', 'supabase', 'playwright', 'python'],
  },
  {
    id: 'te-algorithm',
    projectId: 'thirdeye',
    text: 'Developed proprietary financial analysis algorithm factoring price action, fundamentals, and configurable filtering logic',
    skills: ['financial-modeling', 'statistical-analysis', 'python'],
  },
  {
    id: 'te-backtesting',
    projectId: 'thirdeye',
    text: 'Built backtesting engine with target screening, statistical validation, and correlation analysis on historical data',
    skills: ['statistical-analysis', 'pandas', 'python', 'financial-modeling'],
  },
  {
    id: 'te-admin',
    projectId: 'thirdeye',
    text: 'Built admin dashboard with pattern review system, grading workflow, user management, and performance analytics',
    skills: ['react', 'typescript', 'data-visualization', 'recharts'],
  },
  {
    id: 'te-frontend',
    projectId: 'thirdeye',
    text: 'Developed React research terminal with real-time charting, server state management, and role-based access control',
    skills: ['react', 'typescript', 'recharts', 'tanstack-query', 'supabase'],
  },
  {
    id: 'te-montecarlo',
    projectId: 'thirdeye',
    text: 'Built a backtesting engine over 786 enriched pattern setups (2020–2025), reporting hit rates per price target and time horizon',
    skills: ['financial-modeling', 'statistical-analysis', 'python'],
  },
  {
    id: 'te-3d',
    projectId: 'thirdeye',
    text: 'Built immersive 3D scroll-driven experience with fog reveals, camera animations, and video overlays using Three.js and GSAP',
    skills: ['react-three-fiber', 'threejs'],
  },
  {
    id: 'te-cfa',
    projectId: 'thirdeye',
    text: 'Developed educational study platform with curriculum navigation, flashcards, practice exams, and progress tracking',
    skills: ['react', 'typescript', 'nextjs'],
  },

  // --- Bisect ---
  {
    id: 'bi-platform',
    projectId: 'bisect',
    text: 'Architected creative platform bridging Blender and AI across multiple content studios with unified state management',
    skills: ['nextjs', 'react', 'typescript', 'threejs'],
  },
  {
    id: 'bi-agents',
    projectId: 'bisect',
    text: 'Built multi-agent AI system with specialized agents for spatial reasoning, materials, and scene manipulation using consensus-based decisions',
    skills: ['multi-agent', 'llm-integration', 'claude', 'gemini', 'gpt4', 'rag'],
  },
  {
    id: 'bi-cli',
    projectId: 'bisect',
    text: 'Developed CLI and MCP server for Blender scene manipulation and AI code assistant integration',
    skills: ['nodejs', 'typescript', 'blender'],
  },
  {
    id: 'bi-materials',
    projectId: 'bisect',
    text: 'Built PBR material system with hundreds of presets, procedural cloner tools, and physics-based effectors',
    skills: ['threejs', 'react-three-fiber', 'blender'],
  },
  {
    id: 'bi-ecommerce',
    projectId: 'bisect',
    text: 'Integrated 3D product configurator with e-commerce platforms and interactive hotspot annotation system',
    skills: ['react', 'typescript', 'rest-apis'],
  },
  {
    id: 'bi-export',
    projectId: 'bisect',
    text: 'Implemented code export pipeline generating React and vanilla Three.js components from 3D scenes',
    skills: ['react', 'threejs', 'typescript'],
  },

  // --- Nightkey ---
  {
    id: 'nk-marketplace',
    projectId: 'nightkey',
    text: 'Architected a four-sided marketplace (clubs, promoters, guests, bottle servers) on a single Supabase Postgres with 121 versioned migrations and role-aware RLS on every table',
    skills: ['multi-tenant', 'postgresql', 'supabase', 'nextjs', 'typescript'],
  },
  {
    id: 'nk-payfac',
    projectId: 'nightkey',
    text: 'Integrated a Payment Facilitator (QorCommerce) for sub-merchant boarding, KYB/KYC documents, hosted card capture, and split nightly payouts to club and promoter sub-merchants',
    skills: ['payfac', 'qorcommerce', 'pci-compliance', 'hmac-signing', 'rest-apis'],
  },
  {
    id: 'nk-edge-functions',
    projectId: 'nightkey',
    text: 'Built 24 Deno-based Supabase Edge Functions covering boarding, payouts, webhooks, ID verification, PDF generation, and step-up auth — with TDD test suites on every money-handling path',
    skills: ['deno-edge', 'supabase', 'state-machines', 'rest-apis'],
  },
  {
    id: 'nk-id-verify',
    projectId: 'nightkey',
    text: 'Built an ID-verification pipeline composing AWS Rekognition face match, Google Cloud Vision OCR, and AAMVA state-by-state driver-license barcode validation in a single edge function',
    skills: ['aws-rekognition', 'google-vision', 'cloud-platforms', 'deno-edge'],
  },
  {
    id: 'nk-konva',
    projectId: 'nightkey',
    text: 'Shipped an iPad-first Konva canvas editor for venue floor plans with drag-drop tables, snap-to-grid, zone overlays, and auto-layout templates feeding every downstream booking and door-side surface',
    skills: ['konva', 'ipad-touch-ui', 'react', 'typescript'],
  },
  {
    id: 'nk-mobile-parity',
    projectId: 'nightkey',
    text: 'Shipped Expo mobile apps for guests and promoters against the same Supabase schema as the web dashboard — phone OTP auth, Expo Push notifications, and EAS auto-submit to TestFlight and Play Internal',
    skills: ['expo', 'oauth', 'expo-push', 'supabase', 'typescript'],
  },
];

// ===== WORK EXPERIENCE BULLETS =====

export const workBullets: ResumeBulletPoint[] = [
  {
    id: 'work-micro',
    projectId: 'achd-lab',
    text: 'Ran high-throughput COVID-19 testing on Hologic Panther systems, built Excel reporting for specimen tracking',
    skills: ['lab-diagnostics', 'compliance', 'excel'],
  },
  {
    id: 'work-upmc',
    projectId: 'upmc-research',
    text: 'Assisted with cardiovascular ultrasound research and RT-PCR gene expression analysis on arterial tissue samples',
    skills: ['rt-pcr', 'compliance'],
  },
];

// ===== ROLE-SPECIFIC SUMMARY SUGGESTIONS =====

export const summaryTemplates: Record<string, string> = {
  'ai-solutions-engineer': 'Software engineer focused on AI integration and intelligent automation. Combines hands-on LLM, RAG, and multi-agent development with a quantitative research background (M.S. Human Physiology, 3.93 GPA) to deliver production AI systems that solve real business problems.',
  'fullstack-developer': 'Full-stack software engineer who ships end-to-end — from database design to polished UI. Comfortable owning the entire stack across frontend, backend, real-time systems, and cloud infrastructure. M.S. in Human Physiology with a detail-oriented, research-driven approach to building software.',
  'data-scientist': 'Software engineer with a strong foundation in statistical analysis, predictive modeling, and data-driven decision making. M.S. in Human Physiology (3.93 GPA) with hands-on experience translating complex datasets into actionable insights and production-ready ML pipelines.',
  'ml-engineer': 'Software engineer specializing in production machine learning — model development, automated pipelines, and scalable deployment. Bridges the gap between research and production with a quantitative background (M.S. Human Physiology) and real-world engineering experience.',
  'data-analyst': 'Software engineer with deep analytical skills spanning SQL, statistical methods, and interactive data visualization. M.S. in Human Physiology (3.93 GPA) with a research background that brings rigor and clarity to exploring data and communicating findings.',
};

// ===== ALL BULLETS COMBINED =====

export const allBullets = [...intelivanceBullets, ...workBullets];

export const getBulletsByProject = (projectId: string): ResumeBulletPoint[] =>
  allBullets.filter((b) => b.projectId === projectId);

/**
 * Score a bullet's relevance to a role based on skill overlap with requirements.
 * Returns 0-100.
 */
export function scoreBulletForRole(
  bullet: ResumeBulletPoint,
  roleRequirements: { skillId: string; importance: number }[]
): number {
  const reqMap = new Map(roleRequirements.map((r) => [r.skillId, r.importance]));
  let score = 0;
  let maxPossible = 0;
  for (const skillId of bullet.skills) {
    const importance = reqMap.get(skillId);
    if (importance) {
      score += importance;
    }
  }
  for (const req of roleRequirements) {
    maxPossible += req.importance;
  }
  return maxPossible > 0 ? Math.round((score / maxPossible) * 100) : 0;
}
