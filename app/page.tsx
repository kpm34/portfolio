"use client";

import { projects } from '@/lib/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { Hero } from '@/components/Hero';
import { motion } from 'framer-motion';

export default function Home() {
  // Define the exact order of featured projects
  const featuredProjectIds = ['prism', 'cfb-fantasy'];

  // Get the full project objects in the correct order
  const featuredProjects = featuredProjectIds
    .map(id => projects.find(p => p.id === id))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  // In Development projects
  const devProjectIds = ['ezworks', 'thirdeye'];
  const devProjects = devProjectIds
    .map(id => projects.find(p => p.id === id))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#1C1C1C]">
      {/* Subtle Background Mesh */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(128,0,32,0.03),transparent_50%)]" />
      </div>

      <Hero />

      <div className="max-w-7xl mx-auto px-6 pb-32 relative z-10">

        {/* Narrative Project Grid */}
        <div className="space-y-40 mt-20">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* In Development Section */}
        <div className="mt-40">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-[1px] flex-1 bg-[#F5F5DC]/10" />
            <h2 className="text-xl font-mono text-[#F5F5DC]/40 uppercase tracking-widest">In Development</h2>
            <div className="h-[1px] flex-1 bg-[#F5F5DC]/10" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {devProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} compact={true} />
            ))}
          </div>
        </div>

        {/* Minimal Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-40 pt-12 border-t border-[#F5F5DC]/5 flex justify-between items-center text-sm text-[#F5F5DC]/40"
        >
          <p>© {new Date().getFullYear()} Kashyap Maheshwari</p>
          <div className="flex gap-6 font-mono text-xs">
            <span>Next.js</span>
            <span>React Three Fiber</span>
            <span>AI Architecture</span>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
