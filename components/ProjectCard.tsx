"use client";

import { motion } from "framer-motion";
import { Project } from "@/lib/projects";
import Image from "next/image";
import { ExternalLink, Github, ArrowUpRight, Network } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
  compact?: boolean;
}

export function ProjectCard({ project, index, compact = false }: ProjectCardProps) {
  // Custom narrative descriptions based on project ID
  const getNarrative = (id: string) => {
    switch (id) {
      case 'cfb-fantasy':
        return (
          <>
            <p className="mb-4">
              A comprehensive fantasy sports platform offering real-time drafts, 3D stadium visualizations, and deep player analytics. 
            </p>
            <p>
              Features a custom 3D helmet editor for team branding and a projection engine that factors in weather, odds, and historical stats.
            </p>
          </>
        );
      case 'prism':
        return (
          <>
            <p className="mb-4">
              A no-code 3D creation platform with three interconnected studios: Vector, Texture, and 3D Scene editing.
            </p>
            <p>
              Features a multi-agent AI orchestrator that routes tasks to GPT-4o, Gemini, or Claude based on capability and cost, with a drag-drop bridge for seamless asset transfer between studios.
            </p>
          </>
        );
      case 'ezworks':
        return (
          <>
            <p className="mb-4">
              Production AI SaaS platform for image generation with scalable architecture.
            </p>
            <p>
              Simplifies ComfyUI workflows into a user-friendly interface with real-time generation progress and subscription management.
            </p>
          </>
        );
      case 'helmet-customizer':
        return (
          <>
            <p className="mb-4">
              Real-time 3D helmet customization using React Three Fiber with zone-based color application and MeshPhysicalMaterial.
            </p>
            <p>
              Features 4 material finishes (glossy, matte, chrome, brushed) and stripe patterns rendered as 3D Bezier curve tubes following the helmet contour.
            </p>
          </>
        );
      default:
        return <p>{project.description}</p>;
    }
  };

  if (compact) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-[1fr,1fr] gap-4 md:gap-6 items-center group"
      >
        {/* Visual */}
        <div className="relative aspect-video rounded-lg overflow-hidden bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
             {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white text-black rounded-full hover:scale-110 transition-transform"
                title="Live Demo"
              >
                <ArrowUpRight size={16} />
              </a>
             )}
             {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-black text-white border border-white/20 rounded-full hover:scale-110 transition-transform"
                title="Source Code"
              >
                <Github size={16} />
              </a>
             )}
             {project.diagramUrl && (
              <a 
                href={project.diagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 text-white rounded-full hover:scale-110 transition-transform"
                title="System Diagram"
              >
                <Network size={16} />
              </a>
             )}
          </div>
        </div>

        {/* Narrative */}
        <div>
          <h3 className="text-lg font-medium text-white mb-3">
            {project.title}
          </h3>

          <div className="text-gray-400 leading-relaxed font-light text-sm">
            {getNarrative(project.id)}
          </div>
          
          {/* Action Links for Compact */}
          <div className="flex gap-3 mt-4 flex-wrap">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 underline text-xs transition-colors"
                >
                  Demo
                </a>
              )}
              {project.diagramUrl && (
                <a 
                  href={project.diagramUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline text-xs transition-colors flex items-center gap-1"
                >
                  <Network size={12} />
                  Diagram
                </a>
              )}
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white underline text-xs transition-colors"
                >
                  Code
                </a>
              )}
          </div>
        </div>
      </motion.article>
    );
  }

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

        <div className="text-gray-400 leading-relaxed font-light text-base">
          {getNarrative(project.id)}
        </div>
        
        {/* Action Links */}
        <div className="flex gap-4 mt-6 flex-wrap">
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 underline text-sm transition-colors"
              >
                Live Demo
              </a>
            )}
            {project.diagramUrl && (
              <a 
                href={project.diagramUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline text-sm transition-colors flex items-center gap-1"
              >
                <Network size={14} />
                System Diagram
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white underline text-sm transition-colors"
              >
                Source Code
              </a>
            )}
        </div>
      </div>
    </motion.article>
  );
}
