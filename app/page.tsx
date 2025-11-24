import { projects, skills } from '@/lib/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Terminal, Cpu, Database, Layout, Globe } from 'lucide-react';

export default function Home() {
  // Define the exact order of featured projects
  const featuredProjectIds = ['vectorcraft', 'cfb-fantasy', 'helmet-customizer', 'prism'];
  
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
    <main className="min-h-screen relative overflow-hidden">
      {/* Subtle Background Mesh */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-[radial-gradient(circle_at_100%_100%,rgba(147,51,234,0.05),transparent_50%)]" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative z-10 max-w-7xl mx-auto w-full"
        >
          {/* Compact Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 border-b border-white/5 pb-8">
            <div className="text-left">
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full glass-panel border-blue-500/20">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-xs font-medium text-blue-400 tracking-wide uppercase">AI Systems Architect</span>
              </motion.div>

              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-6xl font-bold mb-2 tracking-tight text-white"
              >
                Kashyap Maheshwari
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-400 max-w-2xl"
              >
                Building production-ready AI applications with scalable architecture.
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="flex gap-3">
              <a href="https://github.com/kpm34" target="_blank" rel="noopener noreferrer" className="p-3 glass-panel rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/kashyapmaheshwari" target="_blank" rel="noopener noreferrer" className="p-3 glass-panel rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:kashpm2002@gmail.com" className="p-3 glass-panel rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                <Mail size={20} />
              </a>
            </motion.div>
          </div>

          {/* Projects Grid (Immediately Visible) */}
          <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>

          {/* Secondary Projects (Smaller) */}
          <motion.div variants={containerVariants} className="border-t border-white/5 pt-8">
             <div className="flex items-center gap-4 mb-6">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Also in Development</h3>
                <div className="h-px bg-white/5 flex-1" />
             </div>
             <div className="grid md:grid-cols-2 gap-6">
                {secondaryProjects.map((project, index) => (
                  <motion.div 
                    key={project.id}
                    variants={itemVariants}
                    className="glass-panel p-4 rounded-xl flex gap-4 items-center group hover:bg-white/5 transition-colors"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity flex items-center justify-center shrink-0`}>
                      <Terminal size={20} className="text-white opacity-50" />
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

        </motion.div>
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
