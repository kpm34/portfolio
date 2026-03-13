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
      description: "Built CFB Fantasy from scratch with Next.js, React, TypeScript, and Tailwind. Multi-tenant PostgreSQL with Row Level Security, Supabase Broadcast for real-time draft orchestration, Pinecone for semantic search, and Redis caching. Stripe subscriptions, OAuth (Google/Apple), Twilio phone verification, and JWT mobile auth. Internal CRM with lead scoring and pipeline stages. Companion Expo mobile app with over-the-air updates. Deployed across Vercel, AWS, and Google Cloud."
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
      description: "Remotion framework for programmatic video generation. Investor demo: 6-sequence orchestrated pitch video (1,696 frames) with SVG line chart animations using strokeDasharray draw effects, mobile device frame mockups with screen recordings, and automated MP4 rendering pipeline."
    },
    {
      category: "DevOps & Infrastructure",
      description: "Vercel deployment with 16 scheduled cron jobs. Docker containerization for Remotion video renderer and FastAPI ML microservice. GitHub Actions CI/CD with draft E2E tests and cron verification. Jest test suite for snake draft calculations and round-robin scheduling. Redis caching via Upstash with in-memory fallback. Domain management with SPF/DKIM email authentication."
    },
  ],
  "AI & Data": [
    {
      category: "LLM Integration",
      description: "Dual AI system in CFB Fantasy: Claude for vision analysis and structured output schemas, Gemini for web search and content generation. RAG pipeline with Pinecone vector store indexing conversation context, player stats, and league data for retrieval-augmented responses. Automated weekly preview and recap articles generated via scheduled cron jobs."
    },
    {
      category: "ML Projections Pipeline",
      description: "XGBoost + Ridge Regression ensemble combining Vegas betting lines, injury adjustments, defensive matchups, and trailing usage shares with configurable weights that evolve through the season. Weekly backtesting against actual outcomes with boom/bust rate calculation from historical game data. ATS prediction model with confidence scoring. Full ML feedback loop: predictions stored, outcomes tracked, accuracy measured per model version."
    },
    {
      category: "Multi-Agent Systems",
      description: "Bisect's AI agent architecture: Gemini Spatial Agent for scene arrangements, Material Agent with RAG from PBR preset library, Claude Blender Agent for complex mesh operations, and Agent Debate for consensus-based decisions. Multi-LLM routing (GPT-4o, Claude, Gemini) based on task requirements."
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
    <main className="min-h-screen relative overflow-hidden bg-[#1C1C1C]">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(128,0,32,0.03),transparent_50%)]" />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="fixed top-0 left-0 w-full py-8 z-50 bg-[#1C1C1C]/80 backdrop-blur-sm px-6"
      >
        <div className="w-full flex justify-between items-center">
          <h2 className="text-sm font-light text-[#F5F5DC]/60 tracking-wide">
            Systems that ship.
          </h2>
          <Link
            href="/"
            className="flex items-center gap-2 text-[#F5F5DC]/60 hover:text-[#800020] transition-colors duration-300 absolute left-1/2 -translate-x-1/2"
          >
            <ArrowLeft size={20} />
            <span className="font-mono text-sm tracking-widest">BACK</span>
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
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-[#F5F5DC] mb-8">
                About
              </h1>
              <p className="text-xl text-[#F5F5DC]/70 leading-relaxed mb-6">
                I&apos;m Kashyap Maheshwari—a full-stack engineer who builds production applications, real-time systems, and AI integrations.
              </p>
              <p className="text-lg text-[#F5F5DC]/60 leading-relaxed mb-4">
                My path started in the lab. With degrees in <span className="text-[#F5F5DC]">Biological Sciences</span> from Pitt and
                <span className="text-[#F5F5DC]"> Human Physiology</span> from Louisville.
              </p>
              <p className="text-lg text-[#F5F5DC]/60 leading-relaxed mb-4">
                That transition led me to build <span className="text-[#F5F5DC]">CFB Fantasy</span>, a full-stack fantasy sports platform with real-time draft rooms,
                automated scoring pipelines, and a companion mobile app. I&apos;ve also built <span className="text-[#F5F5DC]">Bisect</span>,
                a creative platform bridging Blender and AI with a CLI, MCP server, and multi-agent system, and <span className="text-[#F5F5DC]">Third Eye Capital</span>,
                a stock newsletter and analysis platform with proprietary financial models, 3D concept visualizations, and investor learning tools.
              </p>
              <p className="text-lg text-[#F5F5DC]/60 leading-relaxed">
                I work across the stack: Next.js and React on the frontend, PostgreSQL and Supabase for data, Three.js for 3D,
                and Claude/Gemini for AI integrations. I care about systems that are reliable under pressure, because I learned in the lab
                that the details you overlook will find you.
              </p>

              {/* Education Cards */}
              <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-2xl mx-auto">
                <div className="p-6 bg-[#F5F5DC]/[0.02] border border-[#F5F5DC]/5 rounded-lg text-left">
                  <p className="text-sm font-mono text-[#800020] mb-2">M.S. Human Physiology</p>
                  <p className="text-[#F5F5DC]/80">University of Louisville</p>
                  <p className="text-[#F5F5DC]/50 text-sm mt-1">GPA: 3.93 · 2022-2024</p>
                </div>
                <div className="p-6 bg-[#F5F5DC]/[0.02] border border-[#F5F5DC]/5 rounded-lg text-left">
                  <p className="text-sm font-mono text-[#800020] mb-2">B.S. Biological Sciences</p>
                  <p className="text-[#F5F5DC]/80">University of Pittsburgh</p>
                  <p className="text-[#F5F5DC]/50 text-sm mt-1">Minor: Chemistry · 2016-2019</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Divider */}
          <div className="w-full h-px bg-[#F5F5DC]/5 mb-24" />

          {/* ============ SECTION 2: SKILLS (Sidebar + Content) ============ */}
          <motion.section variants={itemVariants} className="px-6 md:px-12 lg:px-20">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px w-12 bg-[#800020]" />
              <h2 className="text-xl font-mono text-[#F5F5DC]/40 uppercase tracking-widest">Skills</h2>
              <div className="h-px flex-1 bg-[#F5F5DC]/5" />
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
                          ? 'text-[#800020]'
                          : 'text-[#F5F5DC]/40 hover:text-[#F5F5DC]/70'
                      }`}
                    >
                      <span className="text-lg font-semibold">{section}</span>
                      <div className="mt-2 space-y-1">
                        {categories.map((cat) => (
                          <p key={cat.category} className={`text-xs font-mono pl-3 border-l ${
                            activeSection === section ? 'border-[#800020]/50' : 'border-[#F5F5DC]/10'
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
              <div className="flex-1 space-y-24">
                {Object.entries(skillSections).map(([sectionName, categories]) => (
                  <div key={sectionName} id={sectionName} className="scroll-mt-32">
                    <h3 className="text-3xl font-bold text-[#F5F5DC] mb-10 pb-4 border-b border-[#F5F5DC]/10">
                      {sectionName}
                    </h3>
                    <div className="space-y-12">
                      {categories.map((cat) => (
                        <div key={cat.category}>
                          <h4 className="text-sm font-mono text-[#800020] uppercase tracking-wider mb-4">{cat.category}</h4>
                          <p className="text-[#F5F5DC]/70 leading-relaxed">{cat.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Divider */}
          <div className="w-full h-px bg-[#F5F5DC]/5 my-24" />

          {/* ============ SECTION 3: CONTACT ============ */}
          <motion.section variants={itemVariants} className="px-6 md:px-12 lg:px-20">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div>
                <h2 className="text-3xl font-bold text-[#F5F5DC] mb-2">Get in Touch</h2>
                <p className="text-[#F5F5DC]/60">Interested in working together? Let&apos;s talk.</p>
              </div>
              <div className="flex gap-4">
                <a
                  href="mailto:kashpm2002@gmail.com"
                  className="px-6 py-3 bg-[#800020] text-[#F5F5DC] font-mono text-sm rounded hover:bg-[#800020]/80 transition-colors"
                >
                  Send Email
                </a>
                <a
                  href="https://linkedin.com/in/kashyapmaheshwari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-[#F5F5DC]/20 text-[#F5F5DC]/70 font-mono text-sm rounded hover:border-[#F5F5DC]/40 hover:text-[#F5F5DC] transition-colors"
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
          className="mt-24 pt-12 border-t border-[#F5F5DC]/5 text-center text-sm text-[#F5F5DC]/40 px-6"
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
      className="group flex items-center gap-2 text-[#F5F5DC]/60 hover:text-[#800020] transition-colors duration-300"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
