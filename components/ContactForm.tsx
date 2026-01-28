"use client";

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

export function ContactForm() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#F5F5DC] mb-4">
            Get in Touch
          </h2>
          <p className="text-[#F5F5DC]/60 font-mono text-sm">
            Have a project in mind or want to connect?
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-panel rounded-2xl p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="mailto:kashpm2002@gmail.com"
              className="flex items-center gap-3 px-6 py-4 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg hover:border-[#800020]/50 transition-colors group"
            >
              <Mail size={20} className="text-[#800020]" />
              <span className="text-[#F5F5DC] font-mono text-sm group-hover:text-[#800020] transition-colors">
                kashpm2002@gmail.com
              </span>
            </a>

            <a
              href="https://linkedin.com/in/kashyapmaheshwari"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg hover:border-[#800020]/50 transition-colors group"
            >
              <Linkedin size={20} className="text-[#800020]" />
              <span className="text-[#F5F5DC] font-mono text-sm group-hover:text-[#800020] transition-colors">
                LinkedIn
              </span>
            </a>

            <a
              href="https://github.com/kpm34"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg hover:border-[#800020]/50 transition-colors group"
            >
              <Github size={20} className="text-[#800020]" />
              <span className="text-[#F5F5DC] font-mono text-sm group-hover:text-[#800020] transition-colors">
                GitHub
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
