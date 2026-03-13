'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { skills, getSkillsByCategory } from '@/lib/dashboard/skills-data';
import { SKILL_CATEGORY_LABELS, SkillCategory, Skill } from '@/lib/dashboard/types';

const PROFICIENCY_LABELS = ['', 'Beginner', 'Intermediate', 'Advanced', 'Expert', 'Master'];
const ALL_CATEGORIES: (SkillCategory | 'all')[] = ['all', 'frontend', 'backend', 'ai-ml', 'data-engineering', '3d-graphics', 'devops', 'database', 'science'];

export default function SkillsInventory() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'all'>('all');
  const [sortBy, setSortBy] = useState<'proficiency' | 'name' | 'category'>('proficiency');

  const filteredSkills = useMemo(() => {
    const filtered = activeCategory === 'all'
      ? skills
      : getSkillsByCategory(activeCategory);

    return [...filtered].sort((a, b) => {
      if (sortBy === 'proficiency') return b.proficiency - a.proficiency;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return a.category.localeCompare(b.category);
    });
  }, [activeCategory, sortBy]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: skills.length };
    for (const skill of skills) {
      counts[skill.category] = (counts[skill.category] || 0) + 1;
    }
    return counts;
  }, []);

  return (
    <div>
      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {ALL_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-[#800020]/20 text-[#F5F5DC] border border-[#800020]/30'
                : 'text-[#F5F5DC]/40 hover:text-[#F5F5DC]/70 border border-transparent hover:border-[#F5F5DC]/10'
            }`}
          >
            {cat === 'all' ? 'All' : SKILL_CATEGORY_LABELS[cat]}
            <span className="ml-1.5 text-[#F5F5DC]/20">{categoryCounts[cat] || 0}</span>
          </button>
        ))}
      </div>

      {/* Sort controls */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-xs text-[#F5F5DC]/30 font-mono">Sort:</span>
        {(['proficiency', 'name', 'category'] as const).map((option) => (
          <button
            key={option}
            onClick={() => setSortBy(option)}
            className={`text-xs font-mono px-2 py-1 rounded ${
              sortBy === option
                ? 'text-[#800020] bg-[#800020]/10'
                : 'text-[#F5F5DC]/30 hover:text-[#F5F5DC]/50'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <div className="grid gap-3">
        {filteredSkills.map((skill, i) => (
          <SkillRow key={skill.id} skill={skill} index={i} />
        ))}
      </div>
    </div>
  );
}

function SkillRow({ skill, index }: { skill: Skill; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.02, 0.5) }}
      className="rounded-lg bg-[#F5F5DC]/[0.02] border border-[#F5F5DC]/5 overflow-hidden hover:border-[#F5F5DC]/10 transition-colors"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-5 py-4 flex items-center gap-4 text-left"
      >
        {/* Skill name */}
        <div className="w-48 shrink-0">
          <span className="text-sm text-[#F5F5DC]">{skill.name}</span>
        </div>

        {/* Category badge */}
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F5F5DC]/[0.03] text-[#F5F5DC]/30 shrink-0">
          {SKILL_CATEGORY_LABELS[skill.category]}
        </span>

        {/* Proficiency bar */}
        <div className="flex-1 flex items-center gap-3">
          <div className="flex-1 h-2 bg-[#F5F5DC]/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(skill.proficiency / 5) * 100}%` }}
              transition={{ duration: 0.6, delay: Math.min(index * 0.02, 0.5) + 0.2 }}
              className="h-full rounded-full"
              style={{
                background: skill.proficiency >= 4
                  ? 'linear-gradient(90deg, #800020, #a0003a)'
                  : skill.proficiency >= 3
                  ? 'linear-gradient(90deg, rgba(245,245,220,0.3), rgba(245,245,220,0.5))'
                  : 'linear-gradient(90deg, rgba(245,245,220,0.15), rgba(245,245,220,0.25))',
              }}
            />
          </div>
          <span className="text-xs font-mono text-[#F5F5DC]/30 w-20 text-right shrink-0">
            {PROFICIENCY_LABELS[skill.proficiency]}
          </span>
        </div>

        {/* Years */}
        <span className="text-xs font-mono text-[#F5F5DC]/20 shrink-0">
          {skill.yearsUsed}y
        </span>
      </button>

      {/* Expanded evidence */}
      {expanded && (
        <div className="px-5 pb-4 border-t border-[#F5F5DC]/5 pt-3">
          <p className="text-[10px] font-mono text-[#F5F5DC]/30 uppercase tracking-widest mb-2">
            Evidence ({skill.evidence.length})
          </p>
          <div className="space-y-2">
            {skill.evidence.map((ev, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#800020]/50 mt-1.5 shrink-0" />
                <div>
                  <span className="text-xs text-[#F5F5DC]/50">{ev.description}</span>
                  {ev.impact && (
                    <span className="text-xs text-[#800020]/70 ml-2">{ev.impact}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          {skill.keywords.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1">
              {skill.keywords.slice(0, 5).map((kw) => (
                <span key={kw} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#F5F5DC]/[0.02] text-[#F5F5DC]/20">
                  {kw}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}
