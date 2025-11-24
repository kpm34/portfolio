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
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-purple-500/30">
      {/* Background Gradient Mesh */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/30 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/30 blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="inline-block mb-8">
            <div className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium backdrop-blur-sm">
              Available for AI Engineering Roles
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight"
          >
            <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
              Kashyap Maheshwari
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-2xl md:text-3xl font-light text-gray-300 mb-6"
          >
            AI Systems Architect & Full-Stack Developer
          </motion.p>

          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
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
              className="px-8 py-3.5 bg-white text-black rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              View Projects
            </a>
            <a
              href="https://github.com/kpm34"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-white/5 text-white rounded-lg font-bold border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/kashyapmaheshwari"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-white/5 text-white rounded-lg font-bold border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <Linkedin size={20} />
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
          <div className="flex flex-col items-center gap-2 text-gray-500">
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="animate-bounce" size={20} />
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
              <p className="text-xl text-gray-400">Production AI applications & automation systems</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-6 bg-black/40 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Expertise</h2>
            <p className="text-xl text-gray-400">Deep dive into my technical capabilities</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], idx) => {
              const icons = {
                'AI Systems Architecture': <Cpu size={24} />,
                'AI Integration': <Terminal size={24} />,
                'Automation': <Database size={24} />,
                'Full-Stack Development': <Layout size={24} />,
                'Infrastructure': <Globe size={24} />
              };
              
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/30 hover:bg-white/[0.07] transition-all group"
                >
                  <div className="mb-6 p-3 bg-white/5 rounded-lg w-fit text-purple-400 group-hover:text-purple-300 transition-colors">
                    {icons[category as keyof typeof icons] || <Terminal size={24} />}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-6 group-hover:text-purple-200 transition-colors">
                    {category}
                  </h3>
                  
                  <ul className="space-y-3">
                    {items.map((skill) => (
                      <li key={skill} className="text-sm text-gray-400 flex items-center group-hover:text-gray-300 transition-colors">
                        <span className="w-1.5 h-1.5 bg-purple-500/50 rounded-full mr-3 group-hover:bg-purple-400" />
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
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-white/10 backdrop-blur-sm"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let&apos;s Work Together</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              I&apos;m currently open to AI engineering roles, full-stack positions, and consulting opportunities.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:kashpm2002@gmail.com"
                className="px-8 py-4 bg-white text-black rounded-lg font-bold hover:bg-gray-200 transition-colors flex items-center gap-2"
              >
                <Mail size={20} />
                Get in Touch
              </a>
              <a
                href="https://linkedin.com/in/kashyapmaheshwari"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/5 text-white rounded-lg font-bold border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <Linkedin size={20} />
                Connect on LinkedIn
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
