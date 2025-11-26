"use client";

import Link from "next/link";
import { ArrowLeft, X, Maximize2 } from "lucide-react";
import { useState, use } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Diagram definitions with metadata
const diagrams: Record<string, { title: string; subtitle: string; project: string }> = {
  "cfb-fantasy-architecture": {
    title: "CFB Fantasy Architecture",
    subtitle: "Full-Stack System Overview & Modules",
    project: "cfb-fantasy"
  },
  "cfb-realtime-draft": {
    title: "Real-Time Draft System",
    subtitle: "Snake & Auction Draft Architecture",
    project: "cfb-fantasy"
  },
  "cfb-auth": {
    title: "Authentication Flow",
    subtitle: "Supabase Auth + Middleware Protection",
    project: "cfb-fantasy"
  },
  "cfb-projections": {
    title: "Projections Pipeline",
    subtitle: "Data Ingestion & Fantasy Scoring",
    project: "cfb-fantasy"
  },
  "helmet-editor-architecture": {
    title: "Helmet Editor Architecture",
    subtitle: "React Three Fiber + Zone-Based Customization",
    project: "helmet-customizer"
  },
  "bisect-architecture": {
    title: "Bisect Architecture",
    subtitle: "Three-Studio Creative Platform",
    project: "prism"
  },
  "bisect-universal-editor": {
    title: "Universal Editor",
    subtitle: "Format-Agnostic 3D Editing with Adapter Pattern",
    project: "prism"
  },
  "bisect-ai-commands": {
    title: "AI Command System",
    subtitle: "Natural Language to 3D Scene Manipulation",
    project: "prism"
  },
  "bisect-materials": {
    title: "Material System",
    subtitle: "600+ PBR Material Presets",
    project: "prism"
  },
  "agent-debate-architecture": {
    title: "Agent Debate Architecture",
    subtitle: "Gemini 3.0 vs Claude 4.5 Consensus Protocol",
    project: "prism"
  },
  "ezworks-architecture": {
    title: "EZ Works Architecture",
    subtitle: "Scalable AI Image Generation Pipeline",
    project: "ezworks"
  }
};

import { BisectArchitectureDiagram } from "@/components/BisectArchitectureDiagram";
import { BisectAICommandDiagram } from "@/components/BisectAICommandDiagram";
import { AgentDebateDiagram } from "@/components/AgentDebateDiagram";
import { EzWorksArchitectureDiagram } from "@/components/EzWorksArchitectureDiagram";
import { CfbArchitectureDiagram } from "@/components/CfbArchitectureDiagram";
import { CfbDraftDiagram } from "@/components/CfbDraftDiagram";
import { CfbAuthDiagram } from "@/components/CfbAuthDiagram";
import { CfbProjectionsDiagram } from "@/components/CfbProjectionsDiagram";
import { HelmetEditorDiagram } from "@/components/HelmetEditorDiagram";

export default function DiagramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const diagram = diagrams[slug];
  const [selectedSubDiagram, setSelectedSubDiagram] = useState<string | null>(null);

  if (!diagram) {
    return (
      <main className="min-h-screen bg-[#030303] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Diagram not found</h1>
          <Link href="/" className="text-blue-400 hover:text-blue-300">
            Return home
          </Link>
        </div>
      </main>
    );
  }

  // CFB Fantasy Hub View
  if (slug === "cfb-fantasy-architecture") {
    const cfbSubDiagrams = [
      { id: "overview", title: "System Overview", subtitle: "Full-Stack Architecture", Component: CfbArchitectureDiagram },
      { id: "draft", title: "Real-Time Draft", subtitle: "WebSocket & State Machine", Component: CfbDraftDiagram },
      { id: "auth", title: "Authentication", subtitle: "Supabase Auth & RLS", Component: CfbAuthDiagram },
      { id: "projections", title: "Projections", subtitle: "ETL & Scoring Pipeline", Component: CfbProjectionsDiagram },
      { id: "helmet", title: "Helmet Editor", subtitle: "R3F Scene Graph", Component: HelmetEditorDiagram },
    ];

    return (
      <main className="min-h-screen bg-[#030303]">
        {/* Header */}
        <div className="border-b border-white/10 bg-[#030303]/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <ArrowLeft size={16} />
                Back
              </Link>
              <div className="h-4 w-px bg-white/10" />
              <div>
                <h1 className="text-white font-medium">{diagram.title}</h1>
                <p className="text-gray-500 text-sm">{diagram.subtitle}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Grid of Cards */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cfbSubDiagrams.map((sub) => (
              <motion.div
                key={sub.id}
                whileHover={{ y: -5 }}
                className="bg-[#111] border border-white/10 rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedSubDiagram(sub.id)}
              >
                {/* Preview Area */}
                <div className="aspect-video bg-[#0A0A0A] relative flex items-center justify-center p-4 group-hover:bg-[#151515] transition-colors">
                  <div className="scale-[0.25] origin-center w-[1400px] h-[900px] pointer-events-none select-none">
                    <sub.Component />
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 text-white text-sm font-medium">
                      <Maximize2 size={14} />
                      View Diagram
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 border-t border-white/5">
                  <h3 className="text-lg font-medium text-white mb-1">{sub.title}</h3>
                  <p className="text-sm text-gray-500">{sub.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Overlay Modal */}
        <AnimatePresence>
          {selectedSubDiagram && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
              onClick={() => setSelectedSubDiagram(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-full max-h-full overflow-auto bg-[#030303] border border-white/10 rounded-2xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedSubDiagram(null)}
                  className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
                >
                  <X size={20} />
                </button>

                <div className="p-2 md:p-8 min-w-[300px] md:min-w-[1000px]">
                  {(() => {
                    const SubComp = cfbSubDiagrams.find(s => s.id === selectedSubDiagram)?.Component;
                    return SubComp ? <SubComp /> : null;
                  })()}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    );
  }

  // Default Single Diagram View
  return (
    <main className="min-h-screen bg-[#030303]">
      {/* Header */}
      <div className="border-b border-white/10 bg-[#030303]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <ArrowLeft size={16} />
              Back
            </Link>
            <div className="h-4 w-px bg-white/10" />
            <div>
              <h1 className="text-white font-medium">{diagram.title}</h1>
              <p className="text-gray-500 text-sm">{diagram.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Diagram Container */}
      <div className="p-6 flex items-center justify-center min-h-[calc(100vh-73px)]">
        <div className="max-w-full overflow-auto">
          {slug === "bisect-architecture" ? (
            <div style={{ minWidth: "1200px" }}>
              <BisectArchitectureDiagram />
            </div>
          ) : slug === "bisect-ai-commands" ? (
            <div style={{ minWidth: "1200px" }}>
              <BisectAICommandDiagram />
            </div>
          ) : slug === "agent-debate-architecture" ? (
            <div style={{ minWidth: "1200px" }}>
              <AgentDebateDiagram />
            </div>
          ) : slug === "ezworks-architecture" ? (
            <div style={{ minWidth: "1200px" }}>
              <EzWorksArchitectureDiagram />
            </div>
          ) : (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={`/diagrams/${slug}.svg`}
              alt={diagram.title}
              className="max-w-none"
              style={{ minWidth: "1200px" }}
            />
          )}
        </div>
      </div>
    </main>
  );
}
