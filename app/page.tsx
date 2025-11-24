"use client";

import { projects, skills } from '@/lib/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Terminal, Cpu, Database, Layout, Globe } from 'lucide-react';

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Subtle Background Mesh */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-[radial-gradient(circle_at_100%_100%,rgba(147,51,234,0.05),transparent_50%)]" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full glass-panel">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-300">Open to AI Engineering Roles</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight"
          >
            Kashyap Maheshwari
          </motion.h1>

          <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-3xl font-medium text-gray-400 mb-6"
          >
            AI Systems Architect & Full-Stack Developer
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Building production-ready AI applications with scalable architecture.
            Specializing in AI integrations, automation systems, and infrastructure design.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              View Work
            </a>
            <a
              href="https://github.com/kpm34"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 glass-panel rounded-lg font-medium text-white hover:bg-white/5 transition-colors flex items-center gap-2"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/kashyapmaheshwari"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 glass-panel rounded-lg font-medium text-white hover:bg-white/5 transition-colors flex items-center gap-2"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-gray-600">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown className="animate-bounce opacity-50" size={16} />
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 relative z-10 border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Featured Projects</h2>
            <p className="text-gray-400">Production AI applications & automation systems</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-6 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Technical Expertise</h2>
            <p className="text-gray-400">Core competencies and specialized skills</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], idx) => {
              const icons = {
                'AI Systems Architecture': <Cpu size={20} />,
                'AI Integration': <Terminal size={20} />,
                'Automation': <Database size={20} />,
                'Full-Stack Development': <Layout size={20} />,
                'Infrastructure': <Globe size={20} />
              };
              
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 glass-panel rounded-xl hover:border-blue-500/30 transition-colors group"
                >
                  <div className="mb-6 p-3 bg-white/5 rounded-lg w-fit text-blue-400 group-hover:text-blue-300 transition-colors">
                    {icons[category as keyof typeof icons] || <Terminal size={20} />}
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">
                    {category}
                  </h3>
                  
                  <ul className="space-y-2">
                    {items.map((skill) => (
                      <li key={skill} className="text-sm text-gray-400 flex items-center group-hover:text-gray-300 transition-colors">
                        <span className="w-1 h-1 bg-blue-500/50 rounded-full mr-3 group-hover:bg-blue-400" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6 relative z-10 border-t border-white/5 bg-black/20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 glass-panel rounded-2xl"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Let&apos;s Work Together</h2>
            <p className="text-lg text-gray-400 mb-10">
              Open to AI engineering roles and consulting opportunities.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:kashpm2002@gmail.com"
                className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                <Mail size={18} />
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/kashyapmaheshwari"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 glass-panel rounded-lg font-medium text-white hover:bg-white/5 transition-colors flex items-center gap-2"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </motion.div>

          <footer className="mt-16 text-gray-600 text-sm">
            <p>© {new Date().getFullYear()} Kashyap Maheshwari. Built with Next.js 16, React 19 & Tailwind.</p>
          </footer>
        </div>
      </section>
    </main>
  );
}
