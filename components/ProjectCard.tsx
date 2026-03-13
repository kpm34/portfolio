"use client";

import { motion } from "framer-motion";
import { Project } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1, ease: "circOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="group relative w-full cursor-pointer"
      >
        {/* Visual Container - always use static image on cards */}
        <div className="relative w-full overflow-hidden bg-[#1C1C1C] border border-[#F5F5DC]/10 group-hover:border-[#800020]/50 transition-colors duration-500 aspect-video">
          <Image
            src={project.image}
            alt={project.title}
            fill
            quality={60}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
            loading={index < 3 ? "eager" : "lazy"}
            className="object-cover opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
            />
        </div>

        {/* Content Below */}
        <div className="w-full mt-4">
          <h3 className="text-xl font-bold text-[#800020] mb-2 tracking-tight">
            {project.title}
          </h3>

          <p className="text-[#F5F5DC]/70 font-light leading-relaxed text-sm mb-3 line-clamp-2">
            {project.description}
          </p>

          {project.outcome && (
            <p className="text-[#800020] font-mono text-xs mb-4">
              {project.outcome}
            </p>
          )}

          {/* Actions */}
          <div className="flex gap-3">
            {project.liveUrl && (
              <span
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(project.liveUrl, "_blank");
                }}
                className="flex items-center gap-2 px-3 py-2 text-xs bg-[#1C1C1C]/80 backdrop-blur-md border border-[#F5F5DC]/10 text-[#F5F5DC] hover:border-[#800020] hover:text-[#800020] transition-all duration-300"
              >
                <ExternalLink size={14} />
                <span className="font-medium">Live</span>
              </span>
            )}
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
