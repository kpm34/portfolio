'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ResumeBulletPoint, ResumeVariant } from '@/lib/dashboard/types';
import { intelivanceBullets, workBullets, scoreBulletForRole } from '@/lib/dashboard/bullets-data';
import { targetRoles } from '@/lib/dashboard/roles-data';
import { ChevronDown, ChevronUp, Pencil, X } from 'lucide-react';

interface BulletLibraryProps {
  variant: ResumeVariant;
  onToggleBullet: (sectionId: string, bulletId: string) => void;
  onEditBullet: (bulletId: string, text: string | null) => void;
}

interface BulletSection {
  id: string;
  title: string;
  subtitle: string;
  bullets: ResumeBulletPoint[];
}

const sections: BulletSection[] = [
  {
    id: 'intelivance',
    title: 'Software Engineer | Intelivance',
    subtitle: 'Remote | 2024–Present',
    bullets: intelivanceBullets,
  },
  {
    id: 'achd-lab',
    title: 'Microbiologist | Allegheny County Health Dept',
    subtitle: 'Pittsburgh, PA | 2020–2021',
    bullets: workBullets.filter((b) => b.projectId === 'achd-lab'),
  },
  {
    id: 'upmc-research',
    title: 'Research Intern | UPMC Cardiovascular Ultrasound Lab',
    subtitle: 'Pittsburgh, PA | Jun–Sep 2017',
    bullets: workBullets.filter((b) => b.projectId === 'upmc-research'),
  },
];

export default function BulletLibrary({ variant, onToggleBullet, onEditBullet }: BulletLibraryProps) {
  const role = useMemo(
    () => targetRoles.find((r) => r.id === variant.roleId),
    [variant.roleId]
  );

  const selectedIds = useMemo(() => {
    const ids = new Set<string>();
    for (const sel of variant.bulletSelections) {
      for (const id of sel.bulletIds) {
        ids.add(id);
      }
    }
    return ids;
  }, [variant.bulletSelections]);

  return (
    <div className="space-y-4">
      <h3 className="text-xs font-mono text-[#F5F5DC]/30 uppercase tracking-widest">
        Bullet Library
      </h3>
      {sections.map((section) => (
        <SectionGroup
          key={section.id}
          section={section}
          role={role}
          selectedIds={selectedIds}
          bulletOverrides={variant.bulletOverrides || {}}
          onToggle={(bulletId) => onToggleBullet(section.id, bulletId)}
          onEdit={onEditBullet}
        />
      ))}
    </div>
  );
}

function SectionGroup({
  section,
  role,
  selectedIds,
  bulletOverrides,
  onToggle,
  onEdit,
}: {
  section: BulletSection;
  role: ReturnType<typeof targetRoles.find>;
  selectedIds: Set<string>;
  bulletOverrides: Record<string, string>;
  onToggle: (bulletId: string) => void;
  onEdit: (bulletId: string, text: string | null) => void;
}) {
  const [expanded, setExpanded] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState('');

  const selectedCount = section.bullets.filter((b) => selectedIds.has(b.id)).length;

  const scoredBullets = useMemo(() => {
    if (!role) return section.bullets.map((b) => ({ bullet: b, score: 0 }));
    return section.bullets
      .map((b) => ({
        bullet: b,
        score: scoreBulletForRole(b, role.requirements),
      }))
      .sort((a, b) => b.score - a.score);
  }, [section.bullets, role]);

  const startEdit = (bullet: ResumeBulletPoint) => {
    setEditingId(bullet.id);
    setEditText(bulletOverrides[bullet.id] || bullet.text);
  };

  const saveEdit = () => {
    if (editingId) {
      const original = section.bullets.find((b) => b.id === editingId);
      // If text matches original, clear the override
      if (original && editText === original.text) {
        onEdit(editingId, null);
      } else {
        onEdit(editingId, editText);
      }
      setEditingId(null);
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  return (
    <div className="rounded-lg bg-[#F5F5DC]/[0.02] border border-[#F5F5DC]/5 overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-4 py-3 flex items-center justify-between text-left"
      >
        <div>
          <p className="text-sm text-[#F5F5DC] font-medium">{section.title}</p>
          <p className="text-[10px] font-mono text-[#F5F5DC]/30">{section.subtitle}</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-[#800020]">
            {selectedCount}/{section.bullets.length}
          </span>
          {expanded ? (
            <ChevronUp size={14} className="text-[#F5F5DC]/30" />
          ) : (
            <ChevronDown size={14} className="text-[#F5F5DC]/30" />
          )}
        </div>
      </button>

      {expanded && (
        <div className="border-t border-[#F5F5DC]/5 px-2 py-2 space-y-1">
          {scoredBullets.map(({ bullet, score }) => {
            const isSelected = selectedIds.has(bullet.id);
            const isEditing = editingId === bullet.id;
            const hasOverride = bullet.id in bulletOverrides;
            const displayText = bulletOverrides[bullet.id] || bullet.text;
            const relevance =
              score >= 15 ? 'high' : score >= 5 ? 'medium' : 'low';

            return (
              <motion.div
                key={bullet.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`flex items-start gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  isSelected
                    ? 'bg-[#800020]/10 border border-[#800020]/20'
                    : 'hover:bg-[#F5F5DC]/[0.02] border border-transparent'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => onToggle(bullet.id)}
                  className="mt-1 shrink-0 accent-[#800020] cursor-pointer"
                />
                <div className="flex-1 min-w-0">
                  {isEditing ? (
                    <div className="space-y-2">
                      <textarea
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        rows={3}
                        className="w-full bg-[#1C1C1C] border border-[#800020]/30 text-[#F5F5DC]/80 text-xs rounded px-2 py-1.5 font-mono leading-relaxed focus:outline-none focus:border-[#800020]/60 resize-none"
                        autoFocus
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={saveEdit}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#800020]/20 text-[#F5F5DC]/70 hover:bg-[#800020]/30"
                        >
                          Save
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="text-[10px] font-mono px-2 py-0.5 rounded text-[#F5F5DC]/30 hover:text-[#F5F5DC]/50"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="group">
                      <p className={`text-xs leading-relaxed ${isSelected ? 'text-[#F5F5DC]/80' : 'text-[#F5F5DC]/50'}`}>
                        {displayText}
                        {hasOverride && (
                          <span className="text-[9px] text-yellow-400/50 ml-1">(edited)</span>
                        )}
                      </p>
                      {bullet.impact && (
                        <span className="text-[10px] text-[#800020]/60 font-mono">{bullet.impact}</span>
                      )}
                      <button
                        onClick={(e) => { e.stopPropagation(); startEdit(bullet); }}
                        className="hidden group-hover:inline-flex items-center gap-1 mt-1 text-[10px] font-mono text-[#F5F5DC]/20 hover:text-[#F5F5DC]/50 transition-colors"
                      >
                        <Pencil size={10} />
                        Edit
                      </button>
                    </div>
                  )}
                </div>
                <span
                  className={`shrink-0 w-2 h-2 rounded-full mt-1.5 ${
                    relevance === 'high'
                      ? 'bg-green-400'
                      : relevance === 'medium'
                      ? 'bg-yellow-400'
                      : 'bg-[#F5F5DC]/10'
                  }`}
                  title={`Relevance: ${relevance} (${score})`}
                />
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
