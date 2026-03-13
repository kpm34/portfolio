'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import MetricCard from '@/components/dashboard/MetricCard';
import RoleMatchCard from '@/components/dashboard/RoleMatchCard';
import { skills } from '@/lib/dashboard/skills-data';
import { targetRoles } from '@/lib/dashboard/roles-data';
import { calculateAllRoleMatches } from '@/lib/dashboard/match-engine';
import { SKILL_CATEGORY_LABELS, SkillCategory } from '@/lib/dashboard/types';

export default function DashboardPage() {
  const matches = useMemo(
    () => calculateAllRoleMatches(targetRoles, skills),
    []
  );

  const bestMatch = matches[0];

  const categoryBreakdown = useMemo(() => {
    const counts: Partial<Record<SkillCategory, number>> = {};
    for (const skill of skills) {
      counts[skill.category] = (counts[skill.category] || 0) + 1;
    }
    return Object.entries(counts)
      .sort(([, a], [, b]) => b - a)
      .map(([cat, count]) => ({
        category: SKILL_CATEGORY_LABELS[cat as SkillCategory],
        count,
      }));
  }, []);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h1 className="text-3xl font-bold text-[#F5F5DC] tracking-tight">
          Career Dashboard
        </h1>
        <p className="text-[#F5F5DC]/40 mt-2">
          Skills inventory, role matching, and gap analysis
        </p>
      </motion.div>

      {/* Metric cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <MetricCard label="Total Skills" value={skills.length} sublabel="Technology-level" />
        <MetricCard
          label="Best Match"
          value={`${bestMatch.overallScore}%`}
          sublabel={bestMatch.roleTitle}
          accent
        />
        <MetricCard
          label="Categories"
          value={categoryBreakdown.length}
          sublabel={`Top: ${categoryBreakdown[0]?.category}`}
        />
        <MetricCard
          label="Expert Level"
          value={skills.filter((s) => s.proficiency >= 4).length}
          sublabel="Skills at 4-5 proficiency"
        />
      </div>

      {/* Role matches */}
      <div className="mb-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-8 bg-[#800020]" />
          <h2 className="text-sm font-mono text-[#F5F5DC]/40 uppercase tracking-widest">
            Role Match Scores
          </h2>
          <div className="h-px flex-1 bg-[#F5F5DC]/5" />
        </div>

        <div className="grid gap-4">
          {matches.map((match, i) => (
            <RoleMatchCard key={match.roleId} match={match} index={i} />
          ))}
        </div>
      </div>

      {/* Category breakdown */}
      <div className="mt-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-8 bg-[#800020]" />
          <h2 className="text-sm font-mono text-[#F5F5DC]/40 uppercase tracking-widest">
            Skill Distribution
          </h2>
          <div className="h-px flex-1 bg-[#F5F5DC]/5" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {categoryBreakdown.map((item) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="p-4 rounded-lg bg-[#F5F5DC]/[0.02] border border-[#F5F5DC]/5 text-center"
            >
              <p className="text-2xl font-bold text-[#F5F5DC]">{item.count}</p>
              <p className="text-[10px] font-mono text-[#F5F5DC]/30 uppercase tracking-wider mt-1">
                {item.category}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
