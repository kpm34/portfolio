"use client";

import { motion } from "framer-motion";
import { Project } from "@/lib/projects";
import Image from "next/image";
import { ExternalLink, Github, ArrowUpRight, Network } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  // Custom narrative descriptions based on project ID
  const getNarrative = (id: string) => {
    switch (id) {
      case 'cfb-fantasy':
        return (
          <>
            <p className="mb-4">
              A projection engine weighing historical stats, EA ratings, weather, and betting odds across 69 Power 4 teams. 
            </p>
            <p className="mb-4">
              Orchestrates a real-time draft system feeding into a custom 3D helmet editor (formerly Helmet Customizer) that bridges Blender automation, Spline, and React Three Fiber.
            </p>
            <p className="text-gray-500 text-sm mt-4">
              CFBD API → ETL Pipeline → Projection Engine → Real-time Draft → 3D Customizer
            </p>
          </>
        );
      case 'prism':
        return (
          <>
            <p className="mb-4">
              Unified creative platform combining a 2D AI vector engine (VectorCraft) with a 3D semantic scene editor. 
            </p>
            <p className="mb-4">
              Orchestrates multiple AI models: Gemini 2.0 generates clean SVG vectors which are then extruded and manipulated in 3D space using GPT-4o commands. Features a multi-canvas workspace bridging the gap between 2D generative assets and 3D spatial design.
            </p>
            <p className="text-gray-500 text-sm mt-4">
              Gemini 2.0 (Vector Generation) → SVG Engine → 3D Extrusion → GPT-4o (Scene Manipulation)
            </p>
          </>
        );
      default:
        return <p>{project.description}</p>;
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="grid md:grid-cols-[1.2fr,1fr] gap-8 md:gap-16 items-center group"
    >
      {/* Visual */}
      <div className="space-y-4">
        <div className="relative aspect-video rounded-lg overflow-hidden bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
             {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
                title="Live Demo"
              >
                <ArrowUpRight size={20} />
              </a>
             )}
             {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-black text-white border border-white/20 rounded-full hover:scale-110 transition-transform"
                title="Source Code"
              >
                <Github size={20} />
              </a>
             )}
             {project.diagramUrl && (
              <a 
                href={project.diagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 text-white rounded-full hover:scale-110 transition-transform"
                title="System Diagram"
              >
                <Network size={20} />
              </a>
             )}
          </div>
        </div>

        {/* Gallery Preview */}
        {project.images && project.images.length > 1 && (
          <div className="grid grid-cols-3 gap-2">
            {project.images.slice(0, 3).map((img, i) => (
              <div key={i} className="relative aspect-video rounded-md overflow-hidden bg-white/5 border border-white/10">
                <Image
                  src={img}
                  alt={`${project.title} screenshot ${i + 1}`}
                  fill
                  className="object-cover hover:opacity-80 transition-opacity cursor-pointer"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Narrative */}
      <div>
        <h3 className="text-2xl font-medium text-white mb-6 flex items-baseline gap-4">
          {project.title}
        </h3>

        <div className="text-gray-400 leading-relaxed font-light text-lg">
          {getNarrative(project.id)}
        </div>
        
        {/* Mobile-only links for better UX */}
        <div className="flex gap-4 mt-6 md:hidden">
            {project.liveUrl && (
              <a href={project.liveUrl} className="text-white underline text-sm">Live Demo</a>
            )}
            {project.diagramUrl && (
              <a href={project.diagramUrl} className="text-blue-400 underline text-sm">System Diagram</a>
            )}
        </div>
      </div>
    </motion.article>
  );
}
