'use client';

import { summaryTemplates } from '@/lib/dashboard/bullets-data';
import { targetRoles } from '@/lib/dashboard/roles-data';
import { Sparkles } from 'lucide-react';

interface SummaryEditorProps {
  summary: string;
  roleId: string;
  onChange: (summary: string) => void;
}

export default function SummaryEditor({ summary, roleId, onChange }: SummaryEditorProps) {
  const role = targetRoles.find((r) => r.id === roleId);

  const handleSuggest = () => {
    const template = summaryTemplates[roleId];
    if (template) {
      onChange(template);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-[10px] font-mono text-[#F5F5DC]/30 uppercase tracking-widest">
          Summary
        </label>
        <button
          onClick={handleSuggest}
          className="flex items-center gap-1 text-[10px] font-mono text-[#800020]/70 hover:text-[#800020] transition-colors"
        >
          <Sparkles size={10} />
          Suggest for {role?.title || 'role'}
        </button>
      </div>
      <textarea
        value={summary}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        className="w-full bg-[#1C1C1C] border border-[#F5F5DC]/10 text-[#F5F5DC]/80 text-sm rounded-lg px-4 py-3 font-mono leading-relaxed focus:outline-none focus:border-[#800020]/50 resize-none"
        placeholder="Write a tailored summary for this role..."
      />
    </div>
  );
}
