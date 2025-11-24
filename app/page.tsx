"use client";

import { projects } from '@/lib/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  // Define the exact order of featured projects
  const featuredProjectIds = ['prism', 'cfb-fantasy'];
  
  // Get the full project objects in the correct order
  const featuredProjects = featuredProjectIds
    .map(id => projects.find(p => p.id === id))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  // Secondary projects (EZWORKS, Third Eye)
  const secondaryProjectIds = ['ezworks', 'thirdeye'];
  const secondaryProjects = secondaryProjectIds
    .map(id => projects.find(p => p.id === id))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

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
    <main className="min-h-screen relative overflow-hidden bg-[#030303]">
      {/* Subtle Background Mesh */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.03),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-32 relative z-10">
        
        {/* Minimal Hero */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-24"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
            <div>
              <motion.h1 
                variants={itemVariants}
                className="text-3xl font-medium text-white mb-2 tracking-tight"
              >
                Kashyap Maheshwari
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-400 font-light"
              >
                Systems that ship.
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="flex gap-4">
              <a href="https://github.com/kpm34" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/kashyapmaheshwari" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:kashpm2002@gmail.com" className="text-gray-500 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </motion.div>
          </div>
          
          <motion.div variants={itemVariants} className="h-px bg-white/10 w-full" />
        </motion.div>

        {/* Narrative Project Grid */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-32"
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Secondary Projects (Smaller) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="border-t border-white/5 pt-8 mt-32"
        >
           <div className="flex items-center gap-4 mb-6">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Also in Development</h3>
              <div className="h-px bg-white/5 flex-1" />
           </div>
           <div className="grid md:grid-cols-2 gap-6">
              {secondaryProjects.map((project) => (
                <motion.div 
                  key={project.id}
                  variants={itemVariants}
                  className="glass-panel p-4 rounded-xl flex gap-4 items-center group hover:bg-white/5 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    {/* Placeholder icon */}
                    <div className="w-6 h-6 bg-gray-500/20 rounded-full" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-white font-medium truncate">{project.title}</h4>
                      <span className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">{project.category}</span>
                    </div>
                    <p className="text-sm text-gray-500 truncate">{project.description}</p>
                  </div>
                </motion.div>
              ))}
           </div>
        </motion.div>

        {/* Minimal Footer / Skills Hint */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 pt-8 border-t border-white/5 flex justify-between items-center text-sm text-gray-600"
        >
          <p>© {new Date().getFullYear()} Kashyap Maheshwari</p>
          <div className="flex gap-4">
            <span>Next.js</span>
            <span>Python</span>
            <span>React Three Fiber</span>
            <span>AI Architecture</span>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
