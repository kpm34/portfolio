"use client";

import { motion } from "framer-motion";
import { Project } from "@/lib/projects";
import Image from "next/image";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

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
              Orchestrates a real-time draft system feeding into a custom 3D helmet editor that bridges Blender automation, Spline, and React Three Fiber.
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
              Multi-model orchestration system where GPT-4o handles scene manipulation logic while Gemini generates textures and materials.
            </p>
            <p>
              Demonstrates a self-improving knowledge loop where AI agents analyze scene structures to refine future command interpretations.
            </p>
          </>
        );
      case 'helmet-customizer':
        return (
          <>
            <p className="mb-4">
              Automated asset pipeline that turns raw user inputs into production-ready 3D assets.
            </p>
            <p>
              Python scripts inside Blender automate the geometry processing and UV mapping, exporting optimized GLB files directly to the web client.
            </p>
          </>
        );
      case 'vectorcraft':
        return (
          <>
            <p className="mb-4">
               Vectorization engine leveraging Gemini 2.0 to convert raster images into clean, editable SVG paths.
            </p>
            <p>
              Bridges the gap between 2D generative AI and 3D workflows by automatically preparing assets for extrusion and modeling.
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
            >
              <Github size={20} />
            </a>
           )}
        </div>
      </div>

      {/* Narrative */}
      <div>
        <h3 className="text-2xl font-medium text-white mb-6 flex items-baseline gap-4">
          {project.title}
          <span className="text-sm font-normal text-gray-500 hidden md:inline-block">
            {project.category}
          </span>
        </h3>

        <div className="text-gray-400 leading-relaxed font-light text-lg">
          {getNarrative(project.id)}
        </div>
      </div>
    </motion.article>
  );
}
