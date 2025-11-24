import { projects, skills } from '@/lib/projects';
import Image from 'next/image';

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 animate-pulse" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full border border-purple-500/20">
            <p className="text-purple-400 text-sm font-medium">Available for Opportunities</p>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Kashyap Maheshwari
          </h1>

          <p className="text-3xl md:text-4xl font-semibold text-gray-300 mb-4">
            AI Systems Architect & Full-Stack Developer
          </p>

          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Building production-ready AI applications with scalable architecture
          </p>

          <p className="text-lg text-gray-500 mb-12">
            Specializing in AI integrations, automation systems, and infrastructure design
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="https://github.com/kpm34"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 rounded-lg font-semibold text-white border border-white/10 hover:bg-white/10 transition-all"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/kashyapmaheshwari"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 rounded-lg font-semibold text-white border border-white/10 hover:bg-white/10 transition-all"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-purple-500 rounded-full" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-400">Production AI applications & automation systems</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-sm text-white border border-white/20">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* AI Highlights */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-purple-400 mb-2">AI/Automation Highlights:</p>
                    <ul className="space-y-1">
                      {project.aiHighlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx} className="text-sm text-gray-500 flex items-start">
                          <span className="text-purple-500 mr-2">→</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/10">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-sm font-semibold text-white text-center hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                      >
                        Live Demo →
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-white/5 rounded-lg text-sm font-semibold text-white border border-white/10 hover:bg-white/10 transition-all"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Technical Skills</h2>
            <p className="text-xl text-gray-400">AI-first engineering expertise</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl border border-white/10 hover:border-purple-500/30 transition-all"
              >
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                  {category}
                </h3>
                <ul className="space-y-2">
                  {items.map((skill) => (
                    <li key={skill} className="text-sm text-gray-400 flex items-center">
                      <span className="text-purple-500/50 mr-2">▹</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Let&apos;s Work Together</h2>
          <p className="text-xl text-gray-400 mb-12">
            Open to AI engineering roles, full-stack positions, and consulting opportunities
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href="mailto:kashpm2002@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105"
            >
              Email Me
            </a>
            <a
              href="https://github.com/kpm34"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 rounded-lg font-semibold text-white border border-white/10 hover:bg-white/10 transition-all"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/kashyapmaheshwari"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 rounded-lg font-semibold text-white border border-white/10 hover:bg-white/10 transition-all"
            >
              LinkedIn
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            © 2025 Kashyap Maheshwari. Built with Next.js 16 & React 19.
          </p>
        </div>
      </section>
    </main>
  );
}
