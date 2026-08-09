'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Eye, EyeOff, Search } from 'lucide-react';
import { prepCategories, PrepEntry } from '@/lib/dashboard/interview-prep-types';

type CategoryFilter = 'all' | PrepEntry['category'];

function PrepCard({ entry, quizMode }: { entry: PrepEntry; quizMode: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const hidden = quizMode && !revealed;

  return (
    <div className="rounded-lg border border-[#F5F5DC]/5 bg-[#F5F5DC]/[0.02] overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#F5F5DC]/[0.03] transition-colors"
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-sm text-[#F5F5DC]/90 font-medium truncate">{entry.tag}</span>
          <span className="text-[10px] font-mono text-[#F5F5DC]/25 uppercase tracking-widest shrink-0">
            {prepCategories[entry.category]}
          </span>
        </div>
        <ChevronDown
          size={16}
          className={`text-[#F5F5DC]/30 shrink-0 transition-transform ${expanded ? 'rotate-180' : ''}`}
        />
      </button>

      {expanded && (
        <div className="px-5 pb-5 border-t border-[#F5F5DC]/5 pt-4 space-y-3">
          {hidden ? (
            <button
              onClick={() => setRevealed(true)}
              className="w-full py-6 rounded-md border border-dashed border-[#800020]/40 text-[#F5F5DC]/40 text-sm font-mono hover:text-[#F5F5DC]/70 hover:border-[#800020]/70 transition-colors"
            >
              Answer first, then reveal
            </button>
          ) : (
            <>
              <div>
                <p className="text-[10px] font-mono text-[#800020] uppercase tracking-widest mb-1">What it is</p>
                <p className="text-sm text-[#F5F5DC]/60 leading-relaxed">{entry.whatItIs}</p>
              </div>
              <div>
                <p className="text-[10px] font-mono text-[#800020] uppercase tracking-widest mb-1">Where I used it</p>
                <p className="text-sm text-[#F5F5DC]/60 leading-relaxed">{entry.whereIUsedIt}</p>
              </div>
              <div>
                <p className="text-[10px] font-mono text-[#800020] uppercase tracking-widest mb-1">The gotcha</p>
                <p className="text-sm text-[#F5F5DC]/60 leading-relaxed">{entry.gotcha}</p>
              </div>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F5F5DC]/[0.04] text-[#F5F5DC]/40">
                  cite: {entry.citeRepo}
                </span>
                {entry.caution && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#800020]/15 text-[#F5F5DC]/50 border border-[#800020]/30">
                    ⚠ {entry.caution}
                  </span>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default function InterviewPrepClient({ entries }: { entries: PrepEntry[] }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<CategoryFilter>('all');
  const [quizMode, setQuizMode] = useState(false);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return entries.filter((e) => {
      if (category !== 'all' && e.category !== category) return false;
      if (!q) return true;
      return (
        e.tag.toLowerCase().includes(q) ||
        e.whereIUsedIt.toLowerCase().includes(q) ||
        e.whatItIs.toLowerCase().includes(q)
      );
    });
  }, [entries, query, category]);

  if (entries.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-[#F5F5DC]/40 font-mono text-sm">
          No prep content loaded. Locally: ensure job-search/interview-prep-content.json exists.
        </p>
        <p className="text-[#F5F5DC]/25 font-mono text-xs mt-2">
          In production: set the INTERVIEW_PREP_DATA environment variable.
        </p>
      </div>
    );
  }

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-[#F5F5DC] tracking-tight">Interview Prep</h1>
        <p className="text-[#F5F5DC]/40 mt-2">
          Every claimed skill → what it is, where I used it, one gotcha. Answer format: three sentences, end on the gotcha.
        </p>
      </motion.div>

      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="relative flex-1 min-w-[220px]">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F5F5DC]/25" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search skills or projects…"
            className="w-full pl-9 pr-3 py-2 rounded-lg bg-[#F5F5DC]/[0.03] border border-[#F5F5DC]/10 text-sm text-[#F5F5DC]/80 placeholder:text-[#F5F5DC]/25 focus:outline-none focus:border-[#800020]/50"
          />
        </div>
        <button
          onClick={() => setQuizMode(!quizMode)}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono border transition-colors ${
            quizMode
              ? 'bg-[#800020]/20 border-[#800020]/40 text-[#F5F5DC]'
              : 'bg-[#F5F5DC]/[0.03] border-[#F5F5DC]/10 text-[#F5F5DC]/50 hover:text-[#F5F5DC]/80'
          }`}
        >
          {quizMode ? <EyeOff size={13} /> : <Eye size={13} />}
          Quiz mode
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {(['all', ...Object.keys(prepCategories)] as CategoryFilter[]).map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`px-3 py-1.5 rounded-full text-xs font-mono transition-colors ${
              category === c
                ? 'bg-[#800020]/25 text-[#F5F5DC] border border-[#800020]/40'
                : 'bg-[#F5F5DC]/[0.03] text-[#F5F5DC]/40 border border-transparent hover:text-[#F5F5DC]/70'
            }`}
          >
            {c === 'all' ? `All (${entries.length})` : prepCategories[c as PrepEntry['category']]}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {filtered.map((entry) => (
          <PrepCard key={entry.tag} entry={entry} quizMode={quizMode} />
        ))}
        {filtered.length === 0 && (
          <p className="text-sm text-[#F5F5DC]/30 font-mono py-8 text-center">No matches.</p>
        )}
      </div>
    </div>
  );
}
