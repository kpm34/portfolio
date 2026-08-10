"use client";

import { motion } from "framer-motion";
import { Project } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { TechStackGraph } from "./TechStackGraph";
import { DiagramPlate } from "./DiagramPlate";
import { CfbAuthDiagram } from "./CfbAuthDiagram";
import { CfbProjectionsDiagram } from "./CfbProjectionsDiagram";
import { CfbScoringDiagram } from "./CfbScoringDiagram";
import { HelmetEditorDiagram } from "./HelmetEditorDiagram";
import { ThirdEyeArchitectureDiagram } from "./ThirdEyeArchitectureDiagram";
import { ThirdEye3DJourneyDiagram } from "./ThirdEye3DJourneyDiagram";
import { ThirdEyeCFAPlatformDiagram } from "./ThirdEyeCFAPlatformDiagram";
import { BisectArchitectureDiagram } from "./BisectArchitectureDiagram";
import { BisectAICommandDiagram } from "./BisectAICommandDiagram";
import { NightkeyArchitectureDiagram } from "./NightkeyArchitectureDiagram";
import { NightkeyPaymentsDiagram } from "./NightkeyPaymentsDiagram";
import { NightkeyOnboardingDiagram } from "./NightkeyOnboardingDiagram";
import { NightkeyFloorPlanDiagram } from "./NightkeyFloorPlanDiagram";

interface ProjectPageProps {
  project: Project;
}

/** Maps a diagram slug to the component that renders it. Slugs without a
 * matching component (older diagrams that only exist as static SVG) fall
 * back to the pre-rendered asset in /public/diagrams. */
const DIAGRAM_COMPONENTS: Record<string, React.ComponentType> = {
  "cfb-auth": CfbAuthDiagram,
  "cfb-projections": CfbProjectionsDiagram,
  "cfb-scoring": CfbScoringDiagram,
  "helmet-editor-architecture": HelmetEditorDiagram,
  "thirdeye-architecture": ThirdEyeArchitectureDiagram,
  "thirdeye-3d-journey": ThirdEye3DJourneyDiagram,
  "thirdeye-cfa-platform": ThirdEyeCFAPlatformDiagram,
  "bisect-architecture": BisectArchitectureDiagram,
  "bisect-ai-commands": BisectAICommandDiagram,
  "nightkey-architecture": NightkeyArchitectureDiagram,
  "nightkey-payments": NightkeyPaymentsDiagram,
  "nightkey-onboarding": NightkeyOnboardingDiagram,
  "nightkey-floor-plan": NightkeyFloorPlanDiagram,
};

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

  // Above-the-fold hero motion is ADDITIVE ONLY: the text is already visible in
  // the server-rendered HTML and merely settles into place. Never reintroduce
  // `opacity: 0` here — a hero that needs JavaScript to become readable is the
  // exact defect this redesign was built to remove.
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 1, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "circOut" as const },
    },
  };

  return (
    <main className="min-h-screen bg-paper text-ink">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-paper/80 backdrop-blur-md border-b border-rule">
        <div className="max-w-[1100px] mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted hover:text-accent transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="label">Back</span>
          </Link>
          <div className="flex items-center gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
              >
                <Github size={20} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-ink text-paper hover:bg-accent transition-colors text-sm font-medium"
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
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <div className="max-w-[720px]">
              {/* Title */}
              <motion.h1
                variants={itemVariants}
                className="font-display italic text-[44px] leading-[1.1] tracking-[-0.01em] mb-4"
              >
                {project.title}
              </motion.h1>

              {/* Tagline */}
              <motion.p
                variants={itemVariants}
                className="text-[16px] leading-relaxed text-muted mb-12"
              >
                {project.description}
              </motion.p>
            </div>

            {/* Hero Image/Video */}
            <motion.div
              variants={itemVariants}
              className="relative w-full aspect-video overflow-hidden border border-rule media-lift"
            >
              {project.demoVideo && isPlaying ? (
                <video
                  ref={videoRef}
                  src={project.demoVideo}
                  autoPlay
                  controls
                  playsInline
                  className="w-full h-full object-contain bg-ink"
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
      <section className="py-16 border-t border-rule">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="max-w-[720px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="label mb-6">Overview</h2>
              <p className="text-[16px] leading-relaxed text-ink">
                {project.longDescription}
              </p>
              {project.problemStatement && (
                <p className="text-[16px] leading-relaxed text-muted mt-6 pt-6 border-t border-rule">
                  <span className="text-ink font-medium">The challenge:</span>{" "}
                  {project.problemStatement}
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. FEATURES - Horizontal Carousel */}
      {project.technicalHighlights && (
        <section className="py-16 border-t border-rule">
          <div className="max-w-[1100px] mx-auto px-6 mb-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-between"
            >
              <h2 className="label">Key Features</h2>
              <span className="label hidden md:block">
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
              <div className="flex-shrink-0 w-[calc((100vw-1100px)/2)] hidden xl:block" />

              {project.technicalHighlights.map((highlight, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: Math.min(i * 0.05, 0.5), duration: 0.4 }}
                  className="flex-shrink-0 w-[340px] md:w-[400px] snap-start"
                >
                  <div className="group relative h-full bg-paper border border-rule hover:border-accent/40 rounded-[2px] p-6 transition-all duration-300 hover:translate-y-[-4px] media-lift">
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Tags at top */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {highlight.tags.slice(0, 3).map((tag, j) => (
                          <span
                            key={j}
                            className="text-[11px] font-mono text-muted bg-ink/5 px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h3 className="text-[20px] font-medium text-ink mb-3 leading-tight">
                        {highlight.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[14px] text-muted leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent/0 rounded-b-[2px] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))}

              {/* Right spacer */}
              <div className="flex-shrink-0 w-6" />
            </div>

            {/* Fade edges */}
            <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-paper to-transparent pointer-events-none z-10" />
            <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-paper to-transparent pointer-events-none z-10" />
          </div>
        </section>
      )}

      {/* 4. TECH STACK - Connection Graph */}
      {project.techStackDetailed && (
        <section className="py-16 border-t border-rule">
          <div className="max-w-[1100px] mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="label mb-8"
            >
              Tech Stack
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Own hardcoded dark palette — presented as a plate, not touched. */}
              <DiagramPlate title="Technology connections">
                <TechStackGraph techStack={project.techStackDetailed} />
              </DiagramPlate>
            </motion.div>
          </div>
        </section>
      )}

      {/* 5. SKILLS APPLIED */}
      {project.skills && project.skills.length > 0 && (
        <section className="py-16 border-t border-rule">
          <div className="max-w-[1100px] mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="label mb-8"
            >
              Skills Applied
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1100px]">
              {project.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <h3 className="text-[20px] font-medium text-ink mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-[14px] text-muted leading-relaxed">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. ARCHITECTURE - Deep dive diagrams, presented as dark inset plates */}
      {project.diagrams && project.diagrams.length > 0 && (
        <section className="py-16 border-t border-rule">
          <div className="max-w-[1100px] mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="label mb-8"
            >
              Architecture Diagrams
            </motion.h2>
            <div>
              {project.diagrams.map((diagram, i) => {
                const DiagramComponent = DIAGRAM_COMPONENTS[diagram.slug];
                return (
                  <motion.div
                    key={diagram.slug}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <DiagramPlate title={diagram.title}>
                      {DiagramComponent ? (
                        <DiagramComponent />
                      ) : (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={`/diagrams/${diagram.slug}.svg`}
                          alt={diagram.title}
                          className="w-full h-auto"
                        />
                      )}
                    </DiagramPlate>
                    <Link
                      href={`/diagrams/${diagram.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-accent decoration-accent/30 underline-offset-4 hover:underline text-sm"
                    >
                      Open full size
                      <ArrowUpRight size={14} />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Footer */}
      <section className="py-24 border-t border-rule">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
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
                className="inline-flex items-center gap-3 px-8 py-4 bg-ink text-paper hover:bg-accent transition-colors text-lg font-medium"
              >
                View Live Project
                <ExternalLink size={20} />
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-rule">
        <div className="max-w-[1100px] mx-auto px-6 flex justify-between items-center text-sm text-muted">
          <Link href="/" className="hover:text-accent transition-colors">
            &larr; Back to Portfolio
          </Link>
          <span>&copy; {new Date().getFullYear()} Kashyap Maheshwari</span>
        </div>
      </footer>
    </main>
  );
}
