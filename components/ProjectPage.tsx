"use client";

import { motion } from "framer-motion";
import { Project } from "@/lib/projects";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { ProductMedia } from "./ProductMedia";

interface ProjectPageProps {
  project: Project;
}

export function ProjectPage({ project }: ProjectPageProps) {
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

      <section className="pt-24 pb-16">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <div className="max-w-[720px]">
              <motion.h1
                variants={itemVariants}
                className="font-display italic text-[44px] leading-[1.1] tracking-[-0.01em] mb-4"
              >
                {project.title}
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-[16px] leading-relaxed text-muted mb-8"
              >
                {project.description}
              </motion.p>

              {project.chips.length > 0 && (
                <motion.ul
                  variants={itemVariants}
                  className="mb-12 flex flex-wrap gap-x-6 gap-y-2"
                >
                  {project.chips.map((chip) => (
                    <li key={chip} className="label">
                      {chip}
                    </li>
                  ))}
                </motion.ul>
              )}
            </div>

            <motion.div variants={itemVariants}>
              <ProductMedia
                testId={project.slug}
                poster={project.image}
                clip={project.clip ?? project.demoVideo}
                alt={`${project.title} demo`}
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

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

      {project.skills && project.skills.length > 0 && (
        <section className="py-16 border-t border-rule">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="max-w-[720px] mx-auto space-y-10">
              {project.skills.map((skill, i) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <h3 className="text-[18px] font-medium text-ink mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-[15px] text-muted leading-relaxed">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

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
