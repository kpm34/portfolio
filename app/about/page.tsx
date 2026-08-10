"use client";

import { motion, Variants } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "circOut"
    }
  }
};

const skillSections = {
  "Engineering": [
    {
      category: "Full-Stack Development",
      description: "Built CFB Fantasy from scratch with Next.js, React, TypeScript, and Tailwind. Multi-tenant PostgreSQL with Row Level Security, Supabase Broadcast for real-time draft orchestration, Pinecone for semantic search, and an in-memory caching layer. Stripe subscriptions, OAuth (Google/Apple), Twilio phone verification, and JWT mobile auth. Internal CRM with lead scoring and pipeline stages. Companion Expo mobile app with over-the-air updates. Deployed across Vercel, AWS, and Google Cloud."
    },
    {
      category: "3D & Interactive Graphics",
      description: "React Three Fiber helmet customizer with zone-based color selection, PBR material finishes, and Bezier curve stripe patterns. Third Eye Capital's 3D financial journey with scroll-driven camera and fog reveal effects. Bisect's multi-studio architecture for vector, texture, 3D scene, audio, and video workflows. ReactFlow diagramming system for database schemas and architecture visualization with Dagre auto-layout."
    },
    {
      category: "Automation & DevTools",
      description: "16 Vercel cron jobs for draft timers, live scoring, waiver processing, injury syncs, projection generation, and AI article creation. QStash job queues for draft auto-picks with deduplication. Email infrastructure with Resend and Gmail API, open/click analytics via webhooks, and Hunter.io integration for email verification and domain search. hCaptcha and honeypot bot mitigation with threat detection scoring. RBAC with audit logging. Bisect CLI for Blender scene manipulation. MCP server for Claude Code integration."
    },
    {
      category: "Database Design & SQL",
      description: "50+ PostgreSQL tables across 24 versioned migrations with 30+ stored procedures and functions. Row-Level Security policies on every table. Atomic draft pick insertion to prevent race conditions, waiver priority ordering, trade conflict detection, and playoff seeding — all in SQL. Complex relational schema: leagues → teams → rosters → players → stats with historical snapshots and rivalry aggregations."
    },
    {
      category: "Data Visualization & Dashboards",
      description: "Recharts-powered Fantasy Lab with area charts, bar charts, radar comparisons, and gradient fills. Boom/bust volatility analyzer, projection range charts, and ML feature importance visualizations. Admin dashboards for revenue timeseries, customer cohorts, and email analytics funnels. 40+ ReactFlow architecture diagrams with Dagre auto-layout."
    },
    {
      category: "Video Production",
      description: "Remotion framework for programmatic video generation. Investor demo: 6-sequence orchestrated pitch video (1,696 frames) with SVG line chart animations, mobile device frame mockups, and automated MP4 rendering. Internal content studio with a shared remotion-engine package rendering highlight mixes and social carousels, plus ComfyUI and Blender generation workflows feeding the assembly pipeline."
    },
    {
      category: "DevOps & Infrastructure",
      description: "Vercel deployment with 16 scheduled cron jobs. Docker containerization for Remotion video renderer and FastAPI ML microservice. GitHub Actions CI/CD with draft E2E tests and cron verification. Jest test suite for snake draft calculations and round-robin scheduling. Domain management with SPF/DKIM email authentication."
    },
  ],
  "AI & Data": [
    {
      category: "LLM Integration",
      description: "Dual AI system in CFB Fantasy: Claude for vision analysis and structured output schemas, Gemini for web search and content generation. RAG pipeline with Pinecone vector store indexing conversation context, player stats, and league data for retrieval-augmented responses. Automated weekly preview and recap articles generated via scheduled cron jobs."
    },
    {
      category: "ML Projections Pipeline",
      description: "Calibrated Ridge and Logistic Regression models with TimeSeriesSplit validation in Ballknowers, combining Vegas betting lines, injury adjustments, defensive matchups, and trailing usage shares. Walk-forward XGBoost pattern screen in Third Eye Capital. Weekly backtesting against actual outcomes with boom/bust rate calculation. Full ML feedback loop: predictions stored, outcomes tracked, accuracy measured per model version."
    },
    {
      category: "Multi-Agent Systems",
      description: "Ballknowers' internal content studio: an AI workforce of article, social, scout, mixer, analyst, and strategist agents polling a Supabase task queue with human approval on every publish path, feeding the app through a one-way factory/storefront publish flow. Bisect's agent architecture: Gemini Spatial Agent, Material Agent with RAG, Claude Blender Agent, and Agent Debate for consensus-based decisions. Multi-LLM routing (GPT-4o, Claude, Gemini) based on task requirements. Custom MCP servers for Blender scene manipulation and article CRUD. Voice interface with Porcupine wake-word detection, local Whisper transcription, and ElevenLabs TTS driving the studio hands-free."
    },
    {
      category: "Data Pipelines",
      description: "ETL system processing college football players from CFBD, ESPN, and betting APIs into normalized tables. Trailing share calculations tracking each player's percentage of team production. Automated game analytics refresh and depth chart updates based on recent performance."
    },
  ],
  "Science": [
    {
      category: "Molecular Biology",
      description: "RT-PCR gene expression analysis on cardiovascular tissue during UPMC research internship, studying arterial function and stroke volume in animal models. TMA-based nucleic acid amplification for high-throughput COVID-19 testing at Allegheny County Health Department."
    },
    {
      category: "Diagnostics",
      description: "Operated Hologic Panther platform processing specimens daily during pandemic response. Qiagen instrumentation for sample preparation and nucleic acid extraction. Built Excel reporting systems for specimen tracking that improved lab efficiency."
    },
    {
      category: "Compliance & Training",
      description: "GLP, BSL-2, and HIPAA compliance across all laboratory work. Trained staff on testing protocols and quality control procedures. Experience bridging technical systems with regulatory requirements—a skill that translates to building compliant software systems."
    },
  ]
};

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState("Engineering");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-paper text-ink">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(128,0,32,0.03),transparent_50%)]" />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="fixed top-0 left-0 w-full py-8 z-50 bg-paper/80 backdrop-blur-sm px-6"
      >
        <div className="w-full flex justify-between items-center">
          <h2 className="label">
            Systems that ship.
          </h2>
          <Link
            href="/"
            className="flex items-center gap-2 text-muted hover:text-accent transition-colors duration-300 absolute left-1/2 -translate-x-1/2"
          >
            <ArrowLeft size={20} />
            <span className="label">BACK</span>
          </Link>
          <div className="flex gap-6 items-center">
            <SocialLink href="https://github.com/kpm34" icon={<Github size={20} />} label="GitHub" />
            <SocialLink href="https://linkedin.com/in/kashyapmaheshwari" icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialLink href="mailto:kashpm2002@gmail.com" icon={<Mail size={20} />} label="Email" />
          </div>
        </div>
      </motion.nav>

      {/* Content */}
      <div className="w-full pt-32 pb-24 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* ============ SECTION 1: BIOGRAPHY (Centered) ============ */}
          <motion.section variants={itemVariants} className="px-6 md:px-12 lg:px-20 mb-32">
            <div className="max-w-[720px] mx-auto text-center">
              <h1 className="font-display italic text-[44px] leading-[1.1] tracking-[-0.01em] mb-8">
                About
              </h1>
              <p className="text-[16px] leading-relaxed text-ink mb-6">
                I&apos;m Kashyap Maheshwari—a full-stack engineer who builds production applications, real-time systems, and AI integrations.
              </p>
              <p className="text-[16px] leading-relaxed text-muted mb-4">
                My path started in the lab. With degrees in <span className="text-ink">Biological Sciences</span> from Pitt and
                <span className="text-ink"> Human Physiology</span> from Louisville.
              </p>
              <p className="text-[16px] leading-relaxed text-muted mb-4">
                That transition led me to build <span className="text-ink">CFB Fantasy</span>, a full-stack fantasy sports platform with real-time draft rooms,
                automated scoring pipelines, and a companion mobile app. I&apos;ve also built <span className="text-ink">Bisect</span>,
                a creative platform bridging Blender and AI with a CLI, MCP server, and multi-agent system, and <span className="text-ink">Third Eye Capital</span>,
                a stock newsletter and analysis platform with proprietary financial models, 3D concept visualizations, and investor learning tools.
              </p>
              <p className="text-[16px] leading-relaxed text-muted">
                I work across the stack: Next.js and React on the frontend, PostgreSQL and Supabase for data, Three.js for 3D,
                and Claude/Gemini for AI integrations. I care about systems that are reliable under pressure, because I learned in the lab
                that the details you overlook will find you.
              </p>

              {/* Education Cards */}
              <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-2xl mx-auto">
                <div className="p-6 bg-ink/[0.02] border border-rule rounded-[2px] text-left">
                  <p className="label mb-2">M.S. Human Physiology</p>
                  <p className="text-ink">University of Louisville</p>
                  <p className="text-muted text-sm mt-1">GPA: 3.93 · 2022-2024</p>
                </div>
                <div className="p-6 bg-ink/[0.02] border border-rule rounded-[2px] text-left">
                  <p className="label mb-2">B.S. Biological Sciences</p>
                  <p className="text-ink">University of Pittsburgh</p>
                  <p className="text-muted text-sm mt-1">Minor: Chemistry · 2016-2019</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Divider */}
          <div className="w-full h-px bg-rule mb-24" />

          {/* ============ SECTION 2: SKILLS (Sidebar + Content) ============ */}
          <motion.section variants={itemVariants} className="px-6 md:px-12 lg:px-20">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px w-12 bg-accent" />
              <h2 className="label">Skills</h2>
              <div className="h-px flex-1 bg-rule" />
            </div>

            <div className="flex gap-16">
              {/* Sidebar - Table of Contents */}
              <div className="hidden lg:block w-56 shrink-0">
                <div className="sticky top-32 space-y-6">
                  {Object.entries(skillSections).map(([section, categories]) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className={`block text-left w-full transition-colors duration-300 ${
                        activeSection === section
                          ? 'text-accent'
                          : 'text-muted hover:text-ink'
                      }`}
                    >
                      <span className="text-[16px] font-medium">{section}</span>
                      <div className="mt-2 space-y-1">
                        {categories.map((cat) => (
                          <p key={cat.category} className={`text-xs font-mono pl-3 border-l ${
                            activeSection === section ? 'border-accent/50' : 'border-rule'
                          }`}>
                            {cat.category}
                          </p>
                        ))}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Skills Content */}
              <div className="flex-1 space-y-24 max-w-[720px]">
                {Object.entries(skillSections).map(([sectionName, categories]) => (
                  <div key={sectionName} id={sectionName} className="scroll-mt-32">
                    <h3 className="text-[20px] font-medium text-ink mb-10 pb-4 border-b border-rule">
                      {sectionName}
                    </h3>
                    <div className="space-y-12">
                      {categories.map((cat) => (
                        <div key={cat.category}>
                          <h4 className="label mb-4">{cat.category}</h4>
                          <p className="text-[16px] leading-relaxed text-muted">{cat.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Divider */}
          <div className="w-full h-px bg-rule my-24" />

          {/* ============ SECTION 3: CONTACT ============ */}
          <motion.section variants={itemVariants} className="px-6 md:px-12 lg:px-20">
            <div className="max-w-[720px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div>
                <h2 className="text-[20px] font-medium text-ink mb-2">Get in Touch</h2>
                <p className="text-muted">Interested in working together? Let&apos;s talk.</p>
              </div>
              <div className="flex gap-4">
                <a
                  href="mailto:kashpm2002@gmail.com"
                  className="px-6 py-3 bg-accent text-paper font-mono text-sm rounded hover:bg-ink transition-colors"
                >
                  Send Email
                </a>
                <a
                  href="https://linkedin.com/in/kashyapmaheshwari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-rule text-muted font-mono text-sm rounded hover:border-ink/40 hover:text-ink transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.section>

        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-24 pt-12 border-t border-rule text-center text-sm text-muted px-6"
        >
          <p>&copy; {new Date().getFullYear()} Kashyap Maheshwari</p>
        </motion.div>
      </div>
    </main>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 text-muted hover:text-accent transition-colors duration-300"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
