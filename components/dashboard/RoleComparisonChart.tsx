'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
  LabelList,
} from 'recharts';
import { targetRoles } from '@/lib/dashboard/roles-data';
import { skills } from '@/lib/dashboard/skills-data';
import { calculateAllRoleMatches } from '@/lib/dashboard/match-engine';

export default function RoleComparisonChart() {
  const matches = useMemo(
    () => calculateAllRoleMatches(targetRoles, skills),
    []
  );

  const chartData = matches.map((m) => ({
    role: m.roleTitle,
    score: m.overallScore,
    matched: m.matchedSkills.length,
    gaps: m.gapSkills.length,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="rounded-xl bg-[#F5F5DC]/[0.02] border border-[#F5F5DC]/5 p-6"
    >
      <h3 className="text-sm font-mono text-[#F5F5DC]/40 uppercase tracking-widest mb-6">
        Role Comparison
      </h3>

      <div className="w-full h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} layout="vertical" margin={{ left: 20, right: 40, top: 0, bottom: 0 }}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(245, 245, 220, 0.04)"
              horizontal={false}
            />
            <XAxis
              type="number"
              domain={[0, 100]}
              tick={{ fill: 'rgba(245, 245, 220, 0.3)', fontSize: 11, fontFamily: 'JetBrains Mono, monospace' }}
              axisLine={{ stroke: 'rgba(245, 245, 220, 0.06)' }}
              tickLine={false}
            />
            <YAxis
              type="category"
              dataKey="role"
              width={160}
              tick={{ fill: 'rgba(245, 245, 220, 0.6)', fontSize: 12, fontFamily: 'JetBrains Mono, monospace' }}
              axisLine={false}
              tickLine={false}
            />
            <Bar dataKey="score" radius={[0, 6, 6, 0]} barSize={28}>
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    entry.score >= 80
                      ? 'rgba(74, 222, 128, 0.5)'
                      : entry.score >= 60
                      ? 'rgba(250, 204, 21, 0.4)'
                      : 'rgba(248, 113, 113, 0.4)'
                  }
                  stroke={
                    entry.score >= 80
                      ? 'rgba(74, 222, 128, 0.3)'
                      : entry.score >= 60
                      ? 'rgba(250, 204, 21, 0.3)'
                      : 'rgba(248, 113, 113, 0.3)'
                  }
                />
              ))}
              <LabelList
                dataKey="score"
                position="right"
                formatter={(value) => `${value}%`}
                style={{
                  fill: 'rgba(245, 245, 220, 0.6)',
                  fontSize: 12,
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center gap-6 text-xs font-mono text-[#F5F5DC]/30">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded bg-green-400/50" />
          <span>80%+ Strong Match</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded bg-yellow-400/40" />
          <span>60-79% Partial</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded bg-red-400/40" />
          <span>&lt;60% Gap Focus</span>
        </div>
      </div>
    </motion.div>
  );
}
