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
  const isCompact = compact || project.id === 'prism' || project.id === 'cfb-fantasy';
  const isMinimal = compact; // Use compact prop to trigger minimal styling if explicitly passed

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "circOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className={`group relative ${isCompact ? 'max-w-xl mx-auto' : 'w-full'}`}
    >
      {/* Large Visual Container */}
      <div className={`relative w-full overflow-hidden bg-[#1C1C1C] border border-[#F5F5DC]/10 group-hover:border-[#800020]/50 transition-colors duration-500 ${isCompact ? 'aspect-[16/8.1]' : 'aspect-[16/9]'}`}>
        {project.demoVideo ? (
          <video
            src={project.demoVideo}
            autoPlay
            loop
            muted
            playsInline
            className={`w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 ${isCompact ? 'object-bottom' : 'object-center'}`}
          />
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
          />
        )}

        {/* Overlay Gradient - Removed */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-transparent opacity-90" /> */}
      </div>

      {/* Content Below */}
      <div className={`w-full mt-6 flex flex-col ${isMinimal ? '' : 'md:flex-row'} justify-between items-start gap-6`}>
        <div className={isMinimal ? 'w-full' : 'max-w-2xl'}>
          <h3 className={`${isMinimal ? 'text-2xl' : 'text-3xl md:text-4xl'} font-bold text-[#800020] mb-4 tracking-tight`}>
            {project.title}
          </h3>

          <p className={`text-[#F5F5DC]/70 font-light leading-relaxed ${isMinimal ? 'text-sm' : ''} mb-6`}>
            {project.description}
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          {project.diagramUrl && (
            <a
              href={project.diagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 ${isMinimal ? 'px-4 py-2 text-xs' : 'px-6 py-3'} bg-[#1C1C1C]/80 backdrop-blur-md border border-[#F5F5DC]/10 text-[#F5F5DC] hover:border-[#800020] hover:text-[#800020] transition-all duration-300 group/btn`}
            >
              <Network size={isMinimal ? 14 : 18} />
              <span className="font-medium">Architecture</span>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 ${isMinimal ? 'px-4 py-2 text-xs' : 'px-6 py-3'} bg-[#F5F5DC] text-[#1C1C1C] hover:bg-[#800020] hover:text-[#F5F5DC] transition-all duration-300`}
            >
              <span className="font-medium">View Project</span>
              <ArrowUpRight size={isMinimal ? 14 : 18} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
