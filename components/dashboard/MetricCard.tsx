'use client';

import { motion } from 'framer-motion';

interface MetricCardProps {
  label: string;
  value: string | number;
  sublabel?: string;
  accent?: boolean;
}

export default function MetricCard({ label, value, sublabel, accent }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-xl bg-[#F5F5DC]/[0.02] border border-[#F5F5DC]/5 hover:border-[#F5F5DC]/10 transition-colors"
    >
      <p className="text-xs font-mono text-[#F5F5DC]/40 uppercase tracking-widest mb-2">
        {label}
      </p>
      <p className={`text-3xl font-bold ${accent ? 'text-[#800020]' : 'text-[#F5F5DC]'}`}>
        {value}
      </p>
      {sublabel && (
        <p className="text-sm text-[#F5F5DC]/50 mt-1">{sublabel}</p>
      )}
    </motion.div>
  );
}
