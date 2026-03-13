"use client";

import { motion } from "framer-motion";
import { Project } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Network, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { TechStackGraph } from "./TechStackGraph";

interface ProjectPageProps {
  project: Project;
}

export function ProjectPage({ project }: ProjectPageProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Mouse wheel → horizontal scroll (non-passive for preventDefault)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY * 1.5;
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

  // Drag to scroll
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "circOut" as const },
    },
  };

  return (
    <main className="min-h-screen bg-[#1C1C1C] text-[#F5F5DC]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#1C1C1C]/80 backdrop-blur-md border-b border-[#F5F5DC]/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-[#F5F5DC]/60 hover:text-[#800020] transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="font-mono text-sm">Back</span>
          </Link>
          <div className="flex items-center gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5F5DC]/60 hover:text-[#800020] transition-colors"
              >
                <Github size={20} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#F5F5DC] text-[#1C1C1C] hover:bg-[#800020] hover:text-[#F5F5DC] transition-colors text-sm font-medium"
              >
                Live Site
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* 1. HERO - First Impression */}
      <section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-normal text-[#800020] mb-4 tracking-tight"
              style={{ fontFamily: 'var(--font-marcellus), serif' }}
            >
              {project.title}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-[#F5F5DC]/70 font-light max-w-3xl mb-12"
            >
              {project.description}
            </motion.p>

            {/* Hero Image/Video */}
            <motion.div
              variants={itemVariants}
              className="relative w-full aspect-video overflow-hidden border border-[#F5F5DC]/10"
            >
              {project.demoVideo && isPlaying ? (
                <video
                  ref={videoRef}
                  src={project.demoVideo}
                  autoPlay
                  controls
                  playsInline
                  className="w-full h-full object-contain bg-black"
                  onEnded={() => setIsPlaying(false)}
                />
              ) : (
                <div
                  className={`relative w-full h-full ${project.demoVideo ? 'cursor-pointer' : ''}`}
                  onClick={() => project.demoVideo && setIsPlaying(true)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    quality={90}
                    priority
                    className="object-cover"
                  />
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. OVERVIEW - High-level what it is */}
      <section className="py-16 border-t border-[#F5F5DC]/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-mono text-[#F5F5DC]/40 uppercase tracking-widest mb-6">
              Overview
            </h2>
            <p className="text-xl md:text-2xl text-[#F5F5DC]/80 font-light leading-relaxed max-w-4xl">
              {project.longDescription}
            </p>
            {project.problemStatement && (
              <p className="text-lg text-[#F5F5DC]/60 leading-relaxed max-w-4xl mt-6 pt-6 border-t border-[#F5F5DC]/5">
                <span className="text-[#800020] font-medium">The challenge:</span>{" "}
                {project.problemStatement}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* 3. FEATURES - Horizontal Carousel */}
      {project.technicalHighlights && (
        <section className="py-16 border-t border-[#F5F5DC]/5">
          <div className="max-w-6xl mx-auto px-6 mb-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-between"
            >
              <h2 className="text-sm font-mono text-[#F5F5DC]/40 uppercase tracking-widest">
                Key Features
              </h2>
              <span className="text-sm text-[#F5F5DC]/30 font-mono hidden md:block">
                Drag or scroll &rarr;
              </span>
            </motion.div>
          </div>

          {/* Horizontal Scroll Container */}
          <div className="relative">
            <div
              ref={scrollRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              className={`flex gap-6 overflow-x-auto pb-8 px-6 snap-x snap-mandatory scrollbar-hide ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
                scrollBehavior: isDragging ? 'auto' : 'smooth'
              }}
            >
              {/* Left spacer for centering on large screens */}
              <div className="flex-shrink-0 w-[calc((100vw-72rem)/2)] hidden xl:block" />

              {project.technicalHighlights.map((highlight, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex-shrink-0 w-[340px] md:w-[400px] snap-start"
                >
                  <div className="group relative h-full bg-gradient-to-br from-[#1C1C1C] to-[#252525] border border-[#F5F5DC]/10 hover:border-[#F5F5DC]/20 rounded-xl p-6 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl hover:shadow-black/20">
                    {/* Feature Number */}
                    <div className="absolute top-4 right-4 text-6xl font-bold text-[#F5F5DC]/[0.03] select-none">
                      {String(i + 1).padStart(2, '0')}
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Tags at top */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {highlight.tags.slice(0, 3).map((tag, j) => (
                          <span
                            key={j}
                            className="text-[10px] font-mono px-2 py-1 bg-[#F5F5DC]/5 text-[#F5F5DC]/50 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title - White for legibility */}
                      <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                        {highlight.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[#F5F5DC]/60 text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#800020] to-[#800020]/0 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))}

              {/* Right spacer */}
              <div className="flex-shrink-0 w-6" />
            </div>

            {/* Fade edges */}
            <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-[#1C1C1C] to-transparent pointer-events-none z-10" />
            <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-[#1C1C1C] to-transparent pointer-events-none z-10" />
          </div>
        </section>
      )}

      {/* 4. TECH STACK - Connection Graph */}
      {project.techStackDetailed && (
        <section className="py-16 border-t border-[#F5F5DC]/5">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-mono text-[#F5F5DC]/40 uppercase tracking-widest mb-8"
            >
              Tech Stack
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <TechStackGraph techStack={project.techStackDetailed} />
            </motion.div>
          </div>
        </section>
      )}

      {/* 5. SKILLS APPLIED */}
      {project.skills && project.skills.length > 0 && (
        <section className="py-16 border-t border-[#F5F5DC]/5">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-mono text-[#F5F5DC]/40 uppercase tracking-widest mb-8"
            >
              Skills Applied
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <h3 className="text-lg font-bold text-white mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-[#F5F5DC]/60 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. ARCHITECTURE - Deep dive diagrams */}
      {project.diagrams && project.diagrams.length > 0 && (
        <section className="py-16 border-t border-[#F5F5DC]/5">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-mono text-[#F5F5DC]/40 uppercase tracking-widest mb-8"
            >
              Architecture Diagrams
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.diagrams.map((diagram, i) => (
                <motion.a
                  key={i}
                  href={`/diagrams/${diagram.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 px-5 py-4 bg-[#800020]/10 border border-[#800020]/30 hover:bg-[#800020]/20 hover:border-[#800020]/50 rounded-lg transition-all group cursor-pointer"
                >
                  <div className="p-2 bg-[#800020]/20 rounded-lg group-hover:bg-[#800020]/30 transition-colors">
                    <Network size={20} className="text-[#800020]" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[#F5F5DC] font-medium group-hover:text-white transition-colors">
                      {diagram.title}
                    </span>
                    <p className="text-xs text-[#F5F5DC]/50 mt-0.5">View diagram</p>
                  </div>
                  <ChevronRight
                    size={18}
                    className="text-[#800020]/60 group-hover:text-[#800020] group-hover:translate-x-1 transition-all"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Footer */}
      <section className="py-24 border-t border-[#F5F5DC]/5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#F5F5DC] text-[#1C1C1C] hover:bg-[#800020] hover:text-[#F5F5DC] transition-colors text-lg font-medium"
              >
                View Live Project
                <ExternalLink size={20} />
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[#F5F5DC]/5">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-sm text-[#F5F5DC]/40">
          <Link href="/" className="hover:text-[#800020] transition-colors">
            &larr; Back to Portfolio
          </Link>
          <span>&copy; {new Date().getFullYear()} Kashyap Maheshwari</span>
        </div>
      </footer>
    </main>
  );
}
