export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  featured: boolean;
  category: 'ai-systems' | 'automation' | 'ai-integration' | 'fullstack' | '3d' | 'finance';
  techStack: string[];
  aiHighlights: string[];
  liveUrl?: string;
  githubUrl?: string;
  diagramUrl?: string;
  image: string;
  images?: string[]; // Gallery images
  gradient: string; // Tailwind gradient for card
}

export const projects: Project[] = [
  {
    id: 'ezworks',
    slug: 'ezworks',
    title: 'EZWORKS',
    description: 'Production AI SaaS platform for image generation with scalable architecture',
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
    diagramUrl: '/ezworks_architecture_flow.png',
    image: '/projects/ezworks.png',
    images: ['/projects/ezworks.png'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'prism',
    slug: 'prism',
    title: 'Unified 3D Creator',
    description: 'Three-studio creative platform with AI orchestration for vectors, textures, and 3D scenes',
    longDescription: 'No-code 3D creation platform merging VectorCraft AI (2D vector engine) with Prism (3D scene editor). Features three interconnected studios: Vector Studio (15+ tools, AI vectorization), Texture Studio (MatCap/PBR generation), and 3D Studio (600+ materials, natural language commands). Multi-agent AI orchestrator routes tasks to GPT-4o, Gemini, or Claude based on cost and capability.',
    featured: true,
    category: 'ai-integration',
    techStack: ['Next.js 14', 'React 19', 'GPT-4o', 'Gemini 2.5', 'Claude', 'Spline Runtime', 'THREE.js', 'Zustand'],
    aiHighlights: [
      'Multi-agent AI orchestrator (4 providers with smart routing)',
      'Three-studio model with drag-drop asset bridge',
      '600+ PBR materials with semantic search',
      'Natural language 3D scene manipulation'
    ],
    liveUrl: 'https://prism.vercel.app',
    githubUrl: 'https://github.com/kpm34/prism',
    diagramUrl: '/diagrams/unified-3d-creator-architecture.svg',
    image: '/projects/prism.png',
    images: ['/projects/prism.png', '/projects/vectorcraft.png'],
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    id: 'cfb-fantasy',
    slug: 'cfb-fantasy',
    title: 'CFB Fantasy App',
    description: 'Full-stack fantasy football platform with 3D visualizations',
    longDescription: 'Fantasy football platform for Power 4 conferences. Features real-time draft system, 3D stadium visualizations, player projections, depth charts, and team efficiency metrics. Built with complex domain logic for drafting, scoring, and league management.',
    featured: true,
    category: 'fullstack',
    techStack: ['Next.js 15', 'React 19', 'Supabase', 'THREE.js', 'Spline'],
    aiHighlights: [
      'ETL pipelines for data processing',
      'Real-time draft system architecture',
      'Data pipeline expertise (foundation for AI/ML)',
      'Production experience with real users'
    ],
    liveUrl: 'https://cfbfantasy.app',
    githubUrl: 'https://github.com/kpm34/cfb-fantasy',
    diagramUrl: '/diagrams/cfb-fantasy-architecture.svg',
    image: '/projects/cfb.png',
    images: ['/projects/cfb.png', '/projects/helmet.png'], // Added helmet image to gallery
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 'helmet-customizer',
    slug: 'helmet-customizer',
    title: 'Helmet Editor (R3F)',
    description: 'Real-time 3D helmet customizer with zone-based colors and Bezier curve stripe patterns',
    longDescription: 'Interactive 3D helmet customization system built with React Three Fiber. Features zone-based color customization (shell, facemask, chinstrap, padding), 4 material finishes (glossy, matte, chrome, brushed), and stripe patterns rendered as 3D Bezier curve tubes. Integrates with CFB Fantasy V2 for team branding.',
    featured: true,
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
    diagramUrl: '/diagrams/helmet-editor-architecture.svg',
    image: '/projects/helmet.png',
    images: ['/projects/helmet.png'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'thirdeye',
    slug: 'thirdeye',
    title: 'Third Eye Capital',
    description: 'Financial analytics dashboard for investment tracking',
    longDescription: 'Comprehensive financial dashboard for tracking investments, visualizing market trends, and analyzing portfolio performance. Built with Next.js and modern charting libraries for real-time data visualization.',
    featured: false,
    category: 'finance',
    techStack: ['Next.js', 'TypeScript', 'Recharts', 'Tailwind CSS'],
    aiHighlights: [
      'Predictive analytics visualization',
      'Real-time data processing',
      'Pattern recognition algorithms'
    ],
    image: '/projects/thirdeye.png', // Placeholder
    images: ['/projects/thirdeye.png'],
    gradient: 'from-slate-500 to-gray-500'
  }
];

export const skills = {
  'AI Systems Architecture': [
    'Workflow Engines (ComfyUI)',
    'Job Queue Systems (Redis)',
    'RAG Systems (ChromaDB)',
    'Real-time AI Processing (WebSocket)',
    'Procedural Generation'
  ],
  'AI Integration': [
    'ComfyUI & Stable Diffusion',
    'OpenAI GPT-4o',
    'Google Gemini 2.0',
    'Natural Language Processing',
    'AI Vectorization'
  ],
  'Automation': [
    'Blender Python Automation',
    'ETL Data Pipelines',
    'Workflow Automation',
    'Asset Pipeline Automation',
    'CI/CD Systems'
  ],
  'Full-Stack Development': [
    'Next.js 14/15/16 (App Router)',
    'React 19 (Server Components)',
    'FastAPI (Python)',
    'TypeScript',
    'Python'
  ],
  'Infrastructure': [
    'Redis (Job Queues)',
    'WebSocket (Real-time)',
    'Stripe (Payments)',
    'Vercel/Render (Deploy)',
    'GPU Infrastructure (RunPod)'
  ]
};
