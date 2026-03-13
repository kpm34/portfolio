'use client';

import { motion } from 'framer-motion';
import SkillsInventory from '@/components/dashboard/SkillsInventory';
import SkillGapRadar from '@/components/dashboard/SkillGapRadar';

export default function SkillsPage() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h1 className="text-3xl font-bold text-[#F5F5DC] tracking-tight">
          Skills Inventory
        </h1>
        <p className="text-[#F5F5DC]/40 mt-2">
          All technologies with proficiency levels and project evidence
        </p>
      </motion.div>

      {/* Radar chart */}
      <div className="mb-10">
        <SkillGapRadar />
      </div>

      {/* Full skills inventory */}
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-8 bg-[#800020]" />
          <h2 className="text-sm font-mono text-[#F5F5DC]/40 uppercase tracking-widest">
            All Skills
          </h2>
          <div className="h-px flex-1 bg-[#F5F5DC]/5" />
        </div>

        <SkillsInventory />
      </div>
    </div>
  );
}
