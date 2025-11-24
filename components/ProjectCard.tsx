"use client";

import { motion } from "framer-motion";
import { Project } from "@/lib/projects";
import Image from "next/image";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <Badge variant="accent" className="bg-black/50 backdrop-blur-md border-white/10">
            {project.category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                title="View Source"
              >
                <Github size={18} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                title="Live Demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-400 mb-6 line-clamp-3">
          {project.description}
        </p>

        {/* AI Highlights */}
        <div className="mb-6 space-y-2">
          <p className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
            AI Highlights
          </p>
          <ul className="space-y-1">
            {project.aiHighlights.slice(0, 3).map((highlight, idx) => (
              <li key={idx} className="text-sm text-gray-500 flex items-start gap-2">
                <span className="text-purple-500 mt-1">
                  <ArrowRight size={12} />
                </span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-white/5 rounded-md text-xs text-gray-400 border border-white/10"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2.5 py-1 bg-white/5 rounded-md text-xs text-gray-400 border border-white/10">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

