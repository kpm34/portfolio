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
  image: string;
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
    image: '/projects/ezworks.png',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'helmet-customizer',
    slug: 'helmet-customizer',
    title: 'Helmet Customizer',
    description: '3D helmet customization with Blender automation pipeline',
    longDescription: '3D helmet customization system using React Three Fiber with zone-based customization (5-zone vertex color system). Features automated Blender Python scripts for helmet generation, material finish selection, and GLB export pipeline.',
    featured: true,
    category: 'automation',
    techStack: ['Next.js 14', 'React Three Fiber', 'THREE.js', 'Python', 'Blender'],
    aiHighlights: [
      'Blender Python automation scripts',
      'Automated GLB export pipeline',
      '5-zone vertex color system',
      'Foundation for AI-powered 3D generation'
    ],
    liveUrl: 'https://helmet-customizer.vercel.app',
    githubUrl: 'https://github.com/kpm34/helmet-customizer',
    image: '/projects/helmet.png',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'prism',
    slug: 'prism',
    title: 'Prism',
    description: 'AI-powered 3D scene editor with natural language commands',
    longDescription: 'AI-powered 3D scene editor for exported Spline scenes. Uses GPT-4o for natural language commands to edit 3D scenes, with a material library browser featuring 600+ presets. Works offline on uploaded files.',
    featured: true,
    category: 'ai-integration',
    techStack: ['Next.js 15', 'React 19', 'GPT-4o', 'Spline Runtime', 'THREE.js'],
    aiHighlights: [
      'AI command processing with GPT-4o',
      'Natural language → 3D scene manipulation',
      'AI scene understanding and analysis',
      'Real-time AI-powered editing'
    ],
    liveUrl: 'https://prism.vercel.app',
    githubUrl: 'https://github.com/kpm34/prism',
    image: '/projects/prism.png',
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
    techStack: ['Next.js 15', 'React 19', 'Appwrite', 'THREE.js', 'Spline'],
    aiHighlights: [
      'ETL pipelines for data processing',
      'Real-time draft system architecture',
      'Data pipeline expertise (foundation for AI/ML)',
      'Production experience with real users'
    ],
    liveUrl: 'https://cfbfantasy.app',
    githubUrl: 'https://github.com/kpm34/cfb-fantasy',
    image: '/projects/cfb.png',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 'vectorcraft',
    slug: 'vectorcraft',
    title: 'VectorCraft AI',
    description: 'AI-powered SVG editor with Gemini 2.0 vectorization',
    longDescription: 'SVG editor for logos, decals, and UI overlays. Features AI-powered vectorization using Google Gemini 2.0 (PNG/JPG → SVG), 3D-ready exports (decal packs, sticker borders, Blender curves), and multi-format support (web app, CLI, REST API).',
    featured: true,
    category: 'ai-integration',
    techStack: ['React 19', 'Vite', 'Gemini 2.0', 'THREE.js', 'TypeScript'],
    aiHighlights: [
      'AI vectorization with Gemini 2.0',
      'Image-to-vector AI conversion',
      'Multi-format architecture (Web, CLI, API)',
      '3D pipeline integration'
    ],
    liveUrl: 'https://vectorcraft.vercel.app',
    githubUrl: 'https://github.com/kpm34/vectorcraft',
    image: '/projects/vectorcraft.png',
    gradient: 'from-violet-500 to-purple-500'
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
