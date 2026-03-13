'use client';

import { motion } from 'framer-motion';
import { RoleMatchScore } from '@/lib/dashboard/types';
import { CheckCircle, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface RoleMatchCardProps {
  match: RoleMatchScore;
  index: number;
}

export default function RoleMatchCard({ match, index }: RoleMatchCardProps) {
  const [expanded, setExpanded] = useState(false);

  const scoreColor = match.overallScore >= 80
    ? 'text-green-400'
    : match.overallScore >= 60
    ? 'text-yellow-400'
    : 'text-red-400';

  const scoreBg = match.overallScore >= 80
    ? 'bg-green-400/10 border-green-400/20'
    : match.overallScore >= 60
    ? 'bg-yellow-400/10 border-yellow-400/20'
    : 'bg-red-400/10 border-red-400/20';

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-xl bg-[#F5F5DC]/[0.02] border border-[#F5F5DC]/5 overflow-hidden hover:border-[#F5F5DC]/10 transition-colors"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-6 flex items-center justify-between text-left"
      >
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-[#F5F5DC]">{match.roleTitle}</h3>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-xs font-mono text-[#F5F5DC]/40">
              {match.matchedSkills.length}/{match.matchedSkills.length + match.gapSkills.length} skills matched
            </span>
            <span className="text-xs font-mono text-[#F5F5DC]/40">
              {match.gapSkills.length} gaps
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className={`px-4 py-2 rounded-lg border ${scoreBg}`}>
            <span className={`text-2xl font-bold font-mono ${scoreColor}`}>
              {match.overallScore}%
            </span>
          </div>
          {expanded ? (
            <ChevronUp size={18} className="text-[#F5F5DC]/40" />
          ) : (
            <ChevronDown size={18} className="text-[#F5F5DC]/40" />
          )}
        </div>
      </button>

      {expanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="border-t border-[#F5F5DC]/5 p-6"
        >
          {/* Strong Skills */}
          {match.strongSkills.length > 0 && (
            <div className="mb-6">
              <h4 className="text-xs font-mono text-green-400/70 uppercase tracking-widest mb-3">
                Strong Match
              </h4>
              <div className="flex flex-wrap gap-2">
                {match.strongSkills.map((s) => (
                  <span
                    key={s.skillId}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-400/10 border border-green-400/20 text-xs text-green-400"
                  >
                    <CheckCircle size={12} />
                    {s.skillName}
                    <span className="text-green-400/50 ml-1">{s.proficiency}/5</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Matched Skills (not strong) */}
          {match.matchedSkills.filter((s) => s.proficiency < 4).length > 0 && (
            <div className="mb-6">
              <h4 className="text-xs font-mono text-[#F5F5DC]/40 uppercase tracking-widest mb-3">
                Matched (Room to Grow)
              </h4>
              <div className="flex flex-wrap gap-2">
                {match.matchedSkills
                  .filter((s) => s.proficiency < 4)
                  .map((s) => (
                    <span
                      key={s.skillId}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F5F5DC]/[0.03] border border-[#F5F5DC]/10 text-xs text-[#F5F5DC]/60"
                    >
                      {s.skillName}
                      <span className="text-[#F5F5DC]/30 ml-1">{s.proficiency}/5</span>
                    </span>
                  ))}
              </div>
            </div>
          )}

          {/* Gap Skills */}
          {match.gapSkills.length > 0 && (
            <div>
              <h4 className="text-xs font-mono text-red-400/70 uppercase tracking-widest mb-3">
                Gaps {match.gapSkills.some((s) => s.isRequired) && '(includes required)'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {match.gapSkills.map((s) => (
                  <span
                    key={s.skillId}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs ${
                      s.isRequired
                        ? 'bg-red-400/10 border border-red-400/20 text-red-400'
                        : 'bg-[#F5F5DC]/[0.02] border border-[#F5F5DC]/5 text-[#F5F5DC]/40'
                    }`}
                  >
                    <AlertCircle size={12} />
                    {s.skillName}
                    {s.isRequired && <span className="text-red-400/50 ml-1">required</span>}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}
