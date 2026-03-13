'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import RoleMatchCard from '@/components/dashboard/RoleMatchCard';
import RoleComparisonChart from '@/components/dashboard/RoleComparisonChart';
import { skills } from '@/lib/dashboard/skills-data';
import { targetRoles } from '@/lib/dashboard/roles-data';
import { calculateAllRoleMatches } from '@/lib/dashboard/match-engine';

export default function RolesPage() {
  const matches = useMemo(
    () => calculateAllRoleMatches(targetRoles, skills),
    []
  );

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h1 className="text-3xl font-bold text-[#F5F5DC] tracking-tight">
          Target Roles
        </h1>
        <p className="text-[#F5F5DC]/40 mt-2">
          Match scores and gap analysis for each target role
        </p>
      </motion.div>

      {/* Comparison chart */}
      <div className="mb-10">
        <RoleComparisonChart />
      </div>

      {/* Role descriptions */}
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-8 bg-[#800020]" />
          <h2 className="text-sm font-mono text-[#F5F5DC]/40 uppercase tracking-widest">
            Role Definitions
          </h2>
          <div className="h-px flex-1 bg-[#F5F5DC]/5" />
        </div>

        <div className="grid gap-4 mb-10">
          {targetRoles.map((role, i) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-5 rounded-xl bg-[#F5F5DC]/[0.02] border border-[#F5F5DC]/5"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-[#F5F5DC]">{role.title}</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#800020]/10 text-[#800020] mt-1 inline-block">
                    {role.industry}
                  </span>
                </div>
              </div>
              <p className="text-sm text-[#F5F5DC]/50 mt-3 leading-relaxed">
                {role.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {role.requirements.map((req) => (
                  <span
                    key={req.skillId}
                    className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                      req.isRequired
                        ? 'bg-[#F5F5DC]/[0.05] text-[#F5F5DC]/50 border border-[#F5F5DC]/10'
                        : 'bg-[#F5F5DC]/[0.02] text-[#F5F5DC]/30'
                    }`}
                  >
                    {req.skillId.replace(/-/g, ' ')}
                    <span className="ml-1 text-[#F5F5DC]/15">w:{req.importance}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detailed match cards */}
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-8 bg-[#800020]" />
          <h2 className="text-sm font-mono text-[#F5F5DC]/40 uppercase tracking-widest">
            Detailed Match Breakdown
          </h2>
          <div className="h-px flex-1 bg-[#F5F5DC]/5" />
        </div>

        <div className="grid gap-4">
          {matches.map((match, i) => (
            <RoleMatchCard key={match.roleId} match={match} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
