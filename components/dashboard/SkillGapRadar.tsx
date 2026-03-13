'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { targetRoles } from '@/lib/dashboard/roles-data';
import { skills } from '@/lib/dashboard/skills-data';
import { getRadarChartData } from '@/lib/dashboard/match-engine';

export default function SkillGapRadar() {
  const [selectedRoleId, setSelectedRoleId] = useState(targetRoles[0].id);

  const selectedRole = useMemo(
    () => targetRoles.find((r) => r.id === selectedRoleId) ?? targetRoles[0],
    [selectedRoleId]
  );

  const chartData = useMemo(
    () => getRadarChartData(selectedRole, skills),
    [selectedRole]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-xl bg-[#F5F5DC]/[0.02] border border-[#F5F5DC]/5 p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-mono text-[#F5F5DC]/40 uppercase tracking-widest">
          Skill Gap Analysis
        </h3>
        <select
          value={selectedRoleId}
          onChange={(e) => setSelectedRoleId(e.target.value)}
          className="bg-[#1C1C1C] border border-[#F5F5DC]/10 text-[#F5F5DC] text-sm rounded-lg px-3 py-1.5 font-mono focus:outline-none focus:border-[#800020]/50"
        >
          {targetRoles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.title}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full h-[420px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={chartData} cx="50%" cy="50%" outerRadius="75%">
            <PolarGrid stroke="rgba(245, 245, 220, 0.06)" />
            <PolarAngleAxis
              dataKey="skill"
              tick={{ fill: 'rgba(245, 245, 220, 0.5)', fontSize: 11, fontFamily: 'JetBrains Mono, monospace' }}
              tickLine={false}
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 100]}
              tick={{ fill: 'rgba(245, 245, 220, 0.2)', fontSize: 10 }}
              tickCount={5}
              axisLine={false}
            />
            <Radar
              name="Role Requirement"
              dataKey="required"
              stroke="rgba(245, 245, 220, 0.3)"
              fill="rgba(245, 245, 220, 0.05)"
              strokeWidth={1}
              strokeDasharray="4 4"
            />
            <Radar
              name="Your Level"
              dataKey="you"
              stroke="#800020"
              fill="rgba(128, 0, 32, 0.15)"
              strokeWidth={2}
            />
            <Legend
              wrapperStyle={{
                fontSize: '12px',
                fontFamily: 'JetBrains Mono, monospace',
                color: 'rgba(245, 245, 220, 0.5)',
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Gap summary */}
      <div className="mt-4 flex items-center gap-6 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-3 h-0.5 bg-[#800020]" />
          <span className="text-[#F5F5DC]/40">Your proficiency</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-0.5 border-t border-dashed border-[#F5F5DC]/30" />
          <span className="text-[#F5F5DC]/40">Role requirement</span>
        </div>
        <span className="text-[#F5F5DC]/20 ml-auto">
          Gaps show where the dashed line exceeds the filled area
        </span>
      </div>
    </motion.div>
  );
}
