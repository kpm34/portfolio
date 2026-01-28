"use client";

import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formState, setFormState] = useState<FormState>({ status: 'idle', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ status: 'loading', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setFormState({ status: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormState({ status: 'error', message: data.error || 'Something went wrong' });
      }
    } catch {
      setFormState({ status: 'error', message: 'Failed to send message. Please try again.' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

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

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="glass-panel rounded-2xl p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-mono text-[#F5F5DC]/60 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg px-4 py-3 text-[#F5F5DC] placeholder-[#F5F5DC]/30 focus:outline-none focus:border-[#800020]/50 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-mono text-[#F5F5DC]/60 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg px-4 py-3 text-[#F5F5DC] placeholder-[#F5F5DC]/30 focus:outline-none focus:border-[#800020]/50 transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-mono text-[#F5F5DC]/60 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg px-4 py-3 text-[#F5F5DC] placeholder-[#F5F5DC]/30 focus:outline-none focus:border-[#800020]/50 transition-colors resize-none"
              placeholder="Tell me about your project or just say hello..."
            />
          </div>

          {formState.status !== 'idle' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-center gap-2 text-sm font-mono ${
                formState.status === 'success' ? 'text-emerald-400' :
                formState.status === 'error' ? 'text-red-400' :
                'text-[#F5F5DC]/60'
              }`}
            >
              {formState.status === 'success' && <CheckCircle size={16} />}
              {formState.status === 'error' && <AlertCircle size={16} />}
              {formState.message}
            </motion.div>
          )}

          <button
            type="submit"
            disabled={formState.status === 'loading'}
            className="w-full bg-[#800020] hover:bg-[#800020]/80 disabled:bg-[#800020]/50 text-[#F5F5DC] font-mono text-sm py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            {formState.status === 'loading' ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
