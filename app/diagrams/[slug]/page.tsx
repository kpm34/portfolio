import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Diagram definitions with metadata
const diagrams: Record<string, { title: string; subtitle: string; project: string }> = {
  "cfb-fantasy-architecture": {
    title: "CFB Fantasy V2 Architecture",
    subtitle: "System Overview",
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
  "cfb-scoring": {
    title: "Scoring System",
    subtitle: "League Settings & Point Calculations",
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
  }
};

import { BisectArchitectureDiagram } from "@/components/BisectArchitectureDiagram";
import { BisectAICommandDiagram } from "@/components/BisectAICommandDiagram";
import { AgentDebateDiagram } from "@/components/AgentDebateDiagram";

export default async function DiagramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const diagram = diagrams[slug];

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
