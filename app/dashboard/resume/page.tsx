'use client';

import { motion } from 'framer-motion';
import ResumeBuilder from '@/components/dashboard/ResumeBuilder';

export default function ResumePage() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-[#F5F5DC] tracking-tight">
          Resume Builder
        </h1>
        <p className="text-[#F5F5DC]/40 mt-2">
          Create role-tailored resume variants with auto-recommended bullets
        </p>
      </motion.div>

      <ResumeBuilder />
    </div>
  );
}
