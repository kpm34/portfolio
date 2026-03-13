'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { ResumeVariant } from '@/lib/dashboard/types';
import { useResumeVariants } from '@/lib/dashboard/resume-store';
import { useHydration } from '@/lib/dashboard/use-dashboard-store';
import { ResumeStyle, DEFAULT_STYLE } from '@/lib/dashboard/resume-themes';
import VariantManager from './VariantManager';
import BulletLibrary from './BulletLibrary';
import SummaryEditor from './SummaryEditor';
import StyleEditor from './StyleEditor';
import ResumePreview, { generateResumeText } from './ResumePreview';

export default function ResumeBuilder() {
  const hydrated = useHydration();
  const { variants, createVariant, updateVariant, duplicateVariant, deleteVariant } = useResumeVariants();
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeVariant = variants.find((v) => v.id === activeId) || null;

  // Save flash indicator
  const [showSaved, setShowSaved] = useState(false);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const flashSaved = useCallback(() => {
    setShowSaved(true);
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => setShowSaved(false), 1500);
  }, []);

  useEffect(() => {
    return () => { if (saveTimer.current) clearTimeout(saveTimer.current); };
  }, []);

  // Wrap updateVariant to trigger the flash
  const saveAndFlash = useCallback(
    (id: string, updates: Partial<ResumeVariant>) => {
      updateVariant(id, updates);
      flashSaved();
    },
    [updateVariant, flashSaved]
  );

  const handleCreate = useCallback(
    (roleId: string, name?: string) => {
      const variant = createVariant(roleId, name);
      if (variant) setActiveId(variant.id);
    },
    [createVariant]
  );

  const handleSelect = useCallback((id: string) => {
    setActiveId(id);
  }, []);

  const handleDelete = useCallback(
    (id: string) => {
      deleteVariant(id);
      if (activeId === id) setActiveId(null);
    },
    [deleteVariant, activeId]
  );

  const handleToggleBullet = useCallback(
    (sectionId: string, bulletId: string) => {
      if (!activeVariant) return;

      const updated = activeVariant.bulletSelections.map((sel) => {
        if (sel.projectId !== sectionId) return sel;
        const has = sel.bulletIds.includes(bulletId);
        return {
          ...sel,
          bulletIds: has
            ? sel.bulletIds.filter((id) => id !== bulletId)
            : [...sel.bulletIds, bulletId],
        };
      });

      // If section doesn't exist yet, add it
      if (!updated.find((s) => s.projectId === sectionId)) {
        updated.push({ projectId: sectionId, bulletIds: [bulletId] });
      }

      saveAndFlash(activeVariant.id, { bulletSelections: updated });
    },
    [activeVariant, saveAndFlash]
  );

  const handleEditBullet = useCallback(
    (bulletId: string, text: string | null) => {
      if (!activeVariant) return;
      const overrides = { ...(activeVariant.bulletOverrides || {}) };
      if (text === null) {
        delete overrides[bulletId];
      } else {
        overrides[bulletId] = text;
      }
      saveAndFlash(activeVariant.id, { bulletOverrides: overrides });
    },
    [activeVariant, saveAndFlash]
  );

  const handleSummaryChange = useCallback(
    (summary: string) => {
      if (!activeVariant) return;
      saveAndFlash(activeVariant.id, { summary });
    },
    [activeVariant, saveAndFlash]
  );

  const handleStyleChange = useCallback(
    (style: ResumeStyle) => {
      if (!activeVariant) return;
      saveAndFlash(activeVariant.id, { style });
    },
    [activeVariant, saveAndFlash]
  );

  const handleSave = useCallback(() => {
    // Already auto-saved via localStorage, but could add a toast
  }, []);

  const handleExportText = useCallback(() => {
    if (!activeVariant) return;
    const text = generateResumeText(activeVariant);
    navigator.clipboard.writeText(text);
  }, [activeVariant]);

  const handleExportHtml = useCallback(() => {
    if (!activeVariant) return;
    const text = generateResumeText(activeVariant);
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `resume-${activeVariant.name.replace(/\s+/g, '-').toLowerCase()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }, [activeVariant]);

  if (!hydrated) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-16 bg-[#F5F5DC]/[0.02] rounded-xl" />
        <div className="h-96 bg-[#F5F5DC]/[0.02] rounded-xl" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Variant manager bar */}
      <VariantManager
        variants={variants}
        activeVariant={activeVariant}
        onSelect={handleSelect}
        onCreate={handleCreate}
        onDuplicate={duplicateVariant}
        onDelete={handleDelete}
        onSave={handleSave}
        onExportText={handleExportText}
        onExportHtml={handleExportHtml}
      />

      {activeVariant ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Editor */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <StyleEditor
              style={activeVariant.style || DEFAULT_STYLE}
              onChange={handleStyleChange}
            />
            <SummaryEditor
              summary={activeVariant.summary}
              roleId={activeVariant.roleId}
              onChange={handleSummaryChange}
            />
            <BulletLibrary
              variant={activeVariant}
              onToggleBullet={handleToggleBullet}
              onEditBullet={handleEditBullet}
            />
          </motion.div>

          {/* Right: Preview */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:sticky lg:top-6 lg:self-start"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-mono text-[#F5F5DC]/30 uppercase tracking-widest">
                Preview
              </h3>
              <AnimatePresence mode="wait">
                {showSaved ? (
                  <motion.span
                    key="saved"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-1 text-[10px] font-mono text-emerald-400"
                  >
                    <Check size={12} />
                    Saved
                  </motion.span>
                ) : (
                  <motion.span
                    key="auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[10px] font-mono text-[#F5F5DC]/20"
                  >
                    Auto-saved
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
            <ResumePreview variant={activeVariant} />
          </motion.div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-24"
        >
          <p className="text-[#F5F5DC]/30 text-lg">
            Create a new variant or select an existing one to start
          </p>
          <p className="text-[#F5F5DC]/15 text-sm mt-2 font-mono">
            Each variant tailors your resume for a specific target role
          </p>
        </motion.div>
      )}
    </div>
  );
}
