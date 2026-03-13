"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { use } from "react";

// Diagram definitions with metadata
const diagrams: Record<string, { title: string; subtitle: string; project: string }> = {
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
    subtitle: "PPR, Half-PPR & Standard Scoring Engine",
    project: "cfb-fantasy"
  },
  "helmet-editor-architecture": {
    title: "Helmet Editor Architecture",
    subtitle: "React Three Fiber + Zone-Based Customization",
    project: "helmet-customizer"
  },
  "thirdeye-architecture": {
    title: "Third Eye Capital Architecture",
    subtitle: "Stock Analysis Platform + 3D Visualization",
    project: "thirdeye"
  },
  "thirdeye-3d-journey": {
    title: "3D Financial Journey",
    subtitle: "60+ Nodes with Scroll-Driven Camera",
    project: "thirdeye"
  },
  "thirdeye-cfa-platform": {
    title: "CFA Learning Platform",
    subtitle: "Multi-View Study System with Progress Tracking",
    project: "thirdeye"
  },
  "bisect-architecture": {
    title: "Bisect Architecture",
    subtitle: "Five-Studio Creative Platform",
    project: "bisect"
  },
  "bisect-universal-editor": {
    title: "Universal Editor",
    subtitle: "Format-Agnostic 3D Editing with Adapter Pattern",
    project: "bisect"
  },
  "bisect-ai-commands": {
    title: "AI Command System",
    subtitle: "Natural Language to 3D Scene Manipulation",
    project: "bisect"
  },
  "bisect-materials": {
    title: "Material System",
    subtitle: "600+ PBR Material Presets",
    project: "bisect"
  },
  "agent-debate-architecture": {
    title: "Agent Debate Architecture",
    subtitle: "Gemini 3.0 vs Claude 4.5 Consensus Protocol",
    project: "bisect"
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
import { CfbAuthDiagram } from "@/components/CfbAuthDiagram";
import { CfbProjectionsDiagram } from "@/components/CfbProjectionsDiagram";
import { CfbScoringDiagram } from "@/components/CfbScoringDiagram";
import { HelmetEditorDiagram } from "@/components/HelmetEditorDiagram";
import { ThirdEyeArchitectureDiagram } from "@/components/ThirdEyeArchitectureDiagram";
import { ThirdEye3DJourneyDiagram } from "@/components/ThirdEye3DJourneyDiagram";
import { ThirdEyeCFAPlatformDiagram } from "@/components/ThirdEyeCFAPlatformDiagram";

export default function DiagramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
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

  // Single Diagram View
  return (
    <main className="min-h-screen bg-[#030303]">
      {/* Header */}
      <div className="border-b border-white/10 bg-[#030303]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href={`/projects/${diagram.project}`}
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <ArrowLeft size={16} />
              Back to Project
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
          ) : slug === "cfb-scoring" ? (
            <div style={{ minWidth: "700px" }}>
              <CfbScoringDiagram />
            </div>
          ) : slug === "thirdeye-architecture" ? (
            <div style={{ minWidth: "700px" }}>
              <ThirdEyeArchitectureDiagram />
            </div>
          ) : slug === "thirdeye-3d-journey" ? (
            <div style={{ minWidth: "900px" }}>
              <ThirdEye3DJourneyDiagram />
            </div>
          ) : slug === "thirdeye-cfa-platform" ? (
            <div style={{ minWidth: "900px" }}>
              <ThirdEyeCFAPlatformDiagram />
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
