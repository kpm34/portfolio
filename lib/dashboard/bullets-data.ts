import { ResumeBulletPoint } from './types';

// ===== INTELIVANCE BULLETS (project work framed as professional deliverables) =====

export const intelivanceBullets: ResumeBulletPoint[] = [
  // --- CFB Fantasy Platform ---
  {
    id: 'cfb-fullstack',
    projectId: 'cfb-fantasy',
    text: 'Architected and shipped a full-stack SaaS platform with Next.js 15, TypeScript, React 19, and PostgreSQL serving 2,500+ player records across 100+ features',
    skills: ['nextjs', 'typescript', 'react', 'postgresql'],
    impact: '100+ features, 4 months',
  },
  {
    id: 'cfb-database',
    projectId: 'cfb-fantasy',
    text: 'Designed PostgreSQL schema with 50+ tables, 24 versioned migrations, 30+ stored procedures, and Row-Level Security policies on every table',
    skills: ['postgresql', 'supabase'],
    impact: '50+ tables with RLS',
  },
  {
    id: 'cfb-realtime',
    projectId: 'cfb-fantasy',
    text: 'Developed real-time draft system with WebSocket broadcasts, presence tracking, and QStash job queues for auto-picks with deduplication',
    skills: ['websockets', 'nodejs', 'supabase'],
  },
  {
    id: 'cfb-ai-rag',
    projectId: 'cfb-fantasy',
    text: 'Integrated dual AI system (Claude + Gemini) with Pinecone RAG pipeline indexing conversation context, player stats, and league data for retrieval-augmented responses',
    skills: ['llm-integration', 'claude', 'gemini', 'rag', 'pinecone'],
  },
  {
    id: 'cfb-ml',
    projectId: 'cfb-fantasy',
    text: 'Built ML prediction engine using XGBoost + Ridge Regression ensemble combining Vegas lines, injury data, defensive matchups, and trailing usage shares with weekly backtesting',
    skills: ['xgboost', 'scikit-learn', 'ml-pipelines', 'statistical-analysis', 'python'],
  },
  {
    id: 'cfb-projections',
    projectId: 'cfb-fantasy',
    text: 'Developed weekly player projection algorithm with matchup adjustments, momentum tracking, and boom/bust rate calculation from historical game data',
    skills: ['ml-pipelines', 'statistical-analysis', 'data-visualization'],
  },
  {
    id: 'cfb-etl',
    projectId: 'cfb-fantasy',
    text: 'Automated 16 cron jobs for live scoring, waiver processing, ETL pipelines from CFBD/ESPN/betting APIs, and AI article generation',
    skills: ['etl', 'cron-jobs', 'nodejs', 'python'],
    impact: '16 automated cron jobs',
  },
  {
    id: 'cfb-stripe',
    projectId: 'cfb-fantasy',
    text: 'Implemented Stripe billing with 3 subscription tiers, 14-day free trials, and feature gating across 12 premium features with MRR analytics',
    skills: ['stripe', 'rest-apis', 'nextjs'],
  },
  {
    id: 'cfb-3d',
    projectId: 'cfb-fantasy',
    text: 'Built React Three Fiber 3D helmet editor with 7 material systems, zone-based color customization, and Bezier curve stripe patterns',
    skills: ['react-three-fiber', 'threejs'],
  },
  {
    id: 'cfb-dataviz',
    projectId: 'cfb-fantasy',
    text: 'Created Recharts-powered analytics dashboard with area charts, radar comparisons, scatter plots, and ML feature importance visualizations',
    skills: ['recharts', 'data-visualization', 'react'],
  },
  {
    id: 'cfb-auth',
    projectId: 'cfb-fantasy',
    text: 'Engineered authentication system with OAuth (Google/Apple), JWT mobile auth, RBAC with audit logging, and hCaptcha bot mitigation',
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
    text: 'Built email infrastructure with Resend and Gmail API, open/click analytics via webhooks, Hunter.io integration, and SPF/DKIM authentication',
    skills: ['email-infra', 'rest-apis', 'nodejs'],
  },
  {
    id: 'cfb-devops',
    projectId: 'cfb-fantasy',
    text: 'Deployed across Vercel, AWS, and Google Cloud with Docker containers, GitHub Actions CI/CD, Jest test suites, and Redis caching',
    skills: ['vercel', 'docker', 'github-actions', 'cloud-platforms', 'redis', 'git'],
  },
  {
    id: 'cfb-video',
    projectId: 'cfb-fantasy',
    text: 'Produced programmatic investor demo video (1,696 frames) using Remotion with SVG chart animations and automated MP4 rendering pipeline',
    skills: ['remotion', 'react'],
  },

  // --- Third Eye Capital ---
  {
    id: 'te-backend',
    projectId: 'thirdeye',
    text: 'Built FastAPI backend with 70+ REST endpoints powering an equity research terminal, admin tools, and tiered access control',
    skills: ['fastapi', 'python', 'rest-apis', 'oauth'],
    impact: '70+ endpoints',
  },
  {
    id: 'te-pipeline',
    projectId: 'thirdeye',
    text: 'Engineered automated data pipeline with Supabase caching, multi-source fallback chain, and Playwright browser automation for data collection',
    skills: ['etl', 'supabase', 'playwright', 'python'],
  },
  {
    id: 'te-algorithm',
    projectId: 'thirdeye',
    text: 'Developed proprietary financial analysis algorithm factoring price action, financials, and underlying strength with configurable range filtering and nesting invalidation',
    skills: ['financial-modeling', 'statistical-analysis', 'python'],
  },
  {
    id: 'te-backtesting',
    projectId: 'thirdeye',
    text: 'Built backtesting engine with target hit screening, Fibonacci extension tracking, and statistical analysis (Pearson correlation, covariance matrices, quartile decomposition)',
    skills: ['statistical-analysis', 'pandas', 'python', 'financial-modeling'],
  },
  {
    id: 'te-admin',
    projectId: 'thirdeye',
    text: 'Built admin dashboard with pattern review system (verdicts, outcomes, A–F grading), visual filter workbench, user CRM, bulk email, and analytics',
    skills: ['react', 'typescript', 'data-visualization', 'recharts'],
  },
  {
    id: 'te-frontend',
    projectId: 'thirdeye',
    text: 'Developed React frontend with 9-tab terminal using Recharts + lightweight-charts, TanStack Query for server state, and Supabase auth with tiered access control',
    skills: ['react', 'typescript', 'recharts', 'tanstack-query', 'supabase'],
  },
  {
    id: 'te-montecarlo',
    projectId: 'thirdeye',
    text: 'Implemented Monte Carlo forecasting with probability-weighted portfolio scenarios, Black-Scholes options pricing, and risk assessment with 95% confidence intervals',
    skills: ['financial-modeling', 'statistical-analysis', 'python'],
  },
  {
    id: 'te-3d',
    projectId: 'thirdeye',
    text: 'Built immersive 3D financial concept journey with 60+ nodes, scroll-driven camera, fog reveal effects, and video overlay blending using Three.js and GSAP',
    skills: ['react-three-fiber', 'threejs'],
  },
  {
    id: 'te-cfa',
    projectId: 'thirdeye',
    text: 'Developed CFA study platform with 9 study views, hierarchical curriculum navigation, flashcards, practice exams, and progress tracking across 6K+ lines of curriculum UI',
    skills: ['react', 'typescript', 'nextjs'],
  },

  // --- Bisect ---
  {
    id: 'bi-platform',
    projectId: 'bisect',
    text: 'Architected creative platform bridging Blender and AI with 5 studios (Vector, Texture, 3D, Audio, Video) and unified Zustand state management',
    skills: ['nextjs', 'react', 'typescript', 'threejs'],
  },
  {
    id: 'bi-agents',
    projectId: 'bisect',
    text: 'Built multi-agent AI system with 11 specialized agents — Gemini Spatial Agent, Material Agent with RAG, Claude Blender Agent, and Agent Debate for consensus decisions',
    skills: ['multi-agent', 'llm-integration', 'claude', 'gemini', 'gpt4', 'rag'],
  },
  {
    id: 'bi-cli',
    projectId: 'bisect',
    text: 'Developed CLI tool (30+ commands) and MCP server (20+ tools) for Blender scene manipulation and Claude Code integration',
    skills: ['nodejs', 'typescript', 'blender'],
    impact: '30+ CLI commands, 20+ MCP tools',
  },
  {
    id: 'bi-materials',
    projectId: 'bisect',
    text: 'Built PBR material system with 600+ presets (6 texture maps each), Cinema 4D-style cloner with 6 modes, and 5 effector types',
    skills: ['threejs', 'react-three-fiber', 'blender'],
    impact: '600+ PBR materials',
  },
  {
    id: 'bi-ecommerce',
    projectId: 'bisect',
    text: 'Integrated 3D product configurator with Shopify, WooCommerce, and BigCommerce adapters and hotspot annotation system',
    skills: ['react', 'typescript', 'rest-apis'],
  },
  {
    id: 'bi-export',
    projectId: 'bisect',
    text: 'Implemented code export pipeline generating React components and vanilla Three.js from 3D scenes with GLB/GLTF output',
    skills: ['react', 'threejs', 'typescript'],
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
    text: 'Performed RT-PCR gene expression analysis on cardiovascular arterial tissue in animal model studies',
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
