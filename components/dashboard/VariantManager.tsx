'use client';

import { useState } from 'react';
import { ResumeVariant } from '@/lib/dashboard/types';
import { targetRoles } from '@/lib/dashboard/roles-data';
import { Plus, Copy, Trash2, Save, Download, ClipboardCopy } from 'lucide-react';

interface VariantManagerProps {
  variants: ResumeVariant[];
  activeVariant: ResumeVariant | null;
  onSelect: (id: string) => void;
  onCreate: (roleId: string, name?: string) => void;
  onDuplicate: (id: string) => void;
  onDelete: (id: string) => void;
  onSave: () => void;
  onExportText: () => void;
  onExportHtml: () => void;
}

export default function VariantManager({
  variants,
  activeVariant,
  onSelect,
  onCreate,
  onDuplicate,
  onDelete,
  onSave,
  onExportText,
  onExportHtml,
}: VariantManagerProps) {
  const [showCreate, setShowCreate] = useState(false);
  const [newRoleId, setNewRoleId] = useState(targetRoles[0].id);
  const [newName, setNewName] = useState('');
  const [showExport, setShowExport] = useState(false);

  const handleCreate = () => {
    onCreate(newRoleId, newName || undefined);
    setShowCreate(false);
    setNewName('');
  };

  return (
    <div className="rounded-xl bg-[#F5F5DC]/[0.02] border border-[#F5F5DC]/5 p-4">
      <div className="flex flex-wrap items-center gap-3">
        {/* Variant selector */}
        <select
          value={activeVariant?.id || ''}
          onChange={(e) => onSelect(e.target.value)}
          className="bg-[#1C1C1C] border border-[#F5F5DC]/10 text-[#F5F5DC] text-sm rounded-lg px-3 py-2 font-mono focus:outline-none focus:border-[#800020]/50 min-w-[200px]"
        >
          <option value="" disabled>Select variant...</option>
          {variants.map((v) => (
            <option key={v.id} value={v.id}>{v.name}</option>
          ))}
        </select>

        {/* New variant */}
        <button
          onClick={() => setShowCreate(!showCreate)}
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#800020]/20 text-[#F5F5DC] text-sm font-mono hover:bg-[#800020]/30 transition-colors border border-[#800020]/30"
        >
          <Plus size={14} />
          New
        </button>

        {/* Actions for active variant */}
        {activeVariant && (
          <>
            <button
              onClick={onSave}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-[#F5F5DC]/50 hover:text-[#F5F5DC] text-sm font-mono hover:bg-[#F5F5DC]/[0.03] transition-colors"
            >
              <Save size={14} />
              Save
            </button>
            <button
              onClick={() => onDuplicate(activeVariant.id)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-[#F5F5DC]/50 hover:text-[#F5F5DC] text-sm font-mono hover:bg-[#F5F5DC]/[0.03] transition-colors"
            >
              <Copy size={14} />
              Duplicate
            </button>
            <button
              onClick={() => onDelete(activeVariant.id)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-red-400/50 hover:text-red-400 text-sm font-mono hover:bg-red-400/5 transition-colors"
            >
              <Trash2 size={14} />
            </button>

            {/* Export */}
            <div className="relative ml-auto">
              <button
                onClick={() => setShowExport(!showExport)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#F5F5DC]/[0.05] text-[#F5F5DC]/70 text-sm font-mono hover:bg-[#F5F5DC]/[0.08] transition-colors"
              >
                <Download size={14} />
                Export
              </button>
              {showExport && (
                <div className="absolute right-0 top-full mt-1 z-10 bg-[#1C1C1C] border border-[#F5F5DC]/10 rounded-lg shadow-xl overflow-hidden">
                  <button
                    onClick={() => { onExportText(); setShowExport(false); }}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-[#F5F5DC]/70 hover:bg-[#F5F5DC]/[0.05] w-full font-mono"
                  >
                    <ClipboardCopy size={14} />
                    Copy as Text
                  </button>
                  <button
                    onClick={() => { onExportHtml(); setShowExport(false); }}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-[#F5F5DC]/70 hover:bg-[#F5F5DC]/[0.05] w-full font-mono"
                  >
                    <Download size={14} />
                    Download HTML
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>

      {/* Create new variant form */}
      {showCreate && (
        <div className="mt-4 pt-4 border-t border-[#F5F5DC]/5 flex flex-wrap items-end gap-3">
          <div>
            <label className="block text-[10px] font-mono text-[#F5F5DC]/30 uppercase tracking-widest mb-1">
              Target Role
            </label>
            <select
              value={newRoleId}
              onChange={(e) => setNewRoleId(e.target.value)}
              className="bg-[#1C1C1C] border border-[#F5F5DC]/10 text-[#F5F5DC] text-sm rounded-lg px-3 py-2 font-mono focus:outline-none focus:border-[#800020]/50"
            >
              {targetRoles.map((r) => (
                <option key={r.id} value={r.id}>{r.title}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-mono text-[#F5F5DC]/30 uppercase tracking-widest mb-1">
              Name (optional)
            </label>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="e.g. AI Engineer - Fintech v2"
              className="bg-[#1C1C1C] border border-[#F5F5DC]/10 text-[#F5F5DC] text-sm rounded-lg px-3 py-2 font-mono focus:outline-none focus:border-[#800020]/50 w-64"
            />
          </div>
          <button
            onClick={handleCreate}
            className="px-4 py-2 rounded-lg bg-[#800020] text-[#F5F5DC] text-sm font-mono hover:bg-[#800020]/80 transition-colors"
          >
            Create
          </button>
        </div>
      )}
    </div>
  );
}
