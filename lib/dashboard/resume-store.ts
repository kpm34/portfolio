'use client';

import { useCallback, useMemo } from 'react';
import { ResumeVariant } from './types';
import { useLocalStorage } from './use-dashboard-store';
import { intelivanceBullets, workBullets, summaryTemplates, scoreBulletForRole } from './bullets-data';
import { targetRoles } from './roles-data';

const STORAGE_KEY = 'resume-variants';

export function useResumeVariants() {
  const [variants, setVariants] = useLocalStorage<ResumeVariant[]>(STORAGE_KEY, []);

  const createVariant = useCallback(
    (roleId: string, name?: string) => {
      const role = targetRoles.find((r) => r.id === roleId);
      if (!role) return null;

      // Auto-select top bullets per section based on role relevance
      const scoredIntelivance = intelivanceBullets
        .map((b) => ({
          bullet: b,
          score: scoreBulletForRole(b, role.requirements),
        }))
        .sort((a, b) => b.score - a.score);

      const selectedIntelivance = scoredIntelivance.slice(0, 8).map((s) => s.bullet.id);
      const selectedWork = workBullets.map((b) => b.id);

      // Get skill ordering based on role requirements
      const skillOrder = role.requirements
        .sort((a, b) => b.importance - a.importance)
        .map((r) => r.skillId);

      const now = new Date().toISOString();
      const variant: ResumeVariant = {
        id: `variant-${Date.now()}`,
        roleId,
        name: name || `${role.title} - v1`,
        createdAt: now,
        updatedAt: now,
        summary: summaryTemplates[roleId] || summaryTemplates['fullstack-developer'],
        bulletSelections: [
          { projectId: 'intelivance', bulletIds: selectedIntelivance },
          { projectId: 'achd-lab', bulletIds: selectedWork.filter((id) => id === 'work-micro') },
          { projectId: 'upmc-research', bulletIds: selectedWork.filter((id) => id === 'work-upmc') },
        ],
        skillOrder,
      };

      setVariants((prev) => [...prev, variant]);
      return variant;
    },
    [setVariants]
  );

  const updateVariant = useCallback(
    (id: string, updates: Partial<ResumeVariant>) => {
      setVariants((prev) =>
        prev.map((v) =>
          v.id === id ? { ...v, ...updates, updatedAt: new Date().toISOString() } : v
        )
      );
    },
    [setVariants]
  );

  const duplicateVariant = useCallback(
    (id: string) => {
      setVariants((prev) => {
        const source = prev.find((v) => v.id === id);
        if (!source) return prev;
        const copy: ResumeVariant = {
          ...source,
          id: `variant-${Date.now()}`,
          name: `${source.name} (copy)`,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        return [...prev, copy];
      });
    },
    [setVariants]
  );

  const deleteVariant = useCallback(
    (id: string) => {
      setVariants((prev) => prev.filter((v) => v.id !== id));
    },
    [setVariants]
  );

  return { variants, createVariant, updateVariant, duplicateVariant, deleteVariant };
}
