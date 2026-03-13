'use client';

import { useMemo } from 'react';
import { ResumeVariant } from '@/lib/dashboard/types';
import { allBullets } from '@/lib/dashboard/bullets-data';
import { skills } from '@/lib/dashboard/skills-data';

interface ResumePreviewProps {
  variant: ResumeVariant;
}

export default function ResumePreview({ variant }: ResumePreviewProps) {
  const bulletMap = useMemo(() => new Map(allBullets.map((b) => [b.id, b])), []);

  const intelivanceSel = variant.bulletSelections.find((s) => s.projectId === 'intelivance');
  const achdSel = variant.bulletSelections.find((s) => s.projectId === 'achd-lab');
  const upmcSel = variant.bulletSelections.find((s) => s.projectId === 'upmc-research');

  const orderedSkills = useMemo(() => {
    const skillMap = new Map(skills.map((s) => [s.id, s]));
    const ordered = variant.skillOrder
      .map((id) => skillMap.get(id))
      .filter(Boolean);
    // Add remaining skills not in the order
    const inOrder = new Set(variant.skillOrder);
    const remaining = skills
      .filter((s) => !inOrder.has(s.id) && s.proficiency >= 3)
      .sort((a, b) => b.proficiency - a.proficiency);
    return [...ordered, ...remaining];
  }, [variant.skillOrder]);

  // Group skills into a readable line
  const skillLine = orderedSkills
    .slice(0, 12)
    .map((s) => s!.name)
    .join(' | ');

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 text-black font-[system-ui] text-[11px] leading-[1.5] max-h-[80vh] overflow-y-auto">
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="text-[18px] font-bold tracking-tight text-black">
          Kashyap Maheshwari
        </h1>
        <p className="text-[10px] text-gray-600 mt-0.5">
          Louisville, KY &nbsp;|&nbsp; (412) 980-1292 &nbsp;|&nbsp; kashpm2002@gmail.com &nbsp;|&nbsp; kashcreates.app
        </p>
      </div>

      {/* Summary */}
      {variant.summary && (
        <div className="mb-4">
          <p className="text-[11px] text-gray-700 leading-relaxed">
            {variant.summary}
          </p>
        </div>
      )}

      {/* Experience */}
      <div className="mb-4">
        <h2 className="text-[12px] font-bold uppercase tracking-wider border-b border-gray-300 pb-0.5 mb-2">
          Experience
        </h2>

        {/* Intelivance */}
        {intelivanceSel && intelivanceSel.bulletIds.length > 0 && (
          <div className="mb-3">
            <div className="flex justify-between items-baseline">
              <p className="font-bold text-[11px]">Software Engineer</p>
              <p className="text-[10px] text-gray-500">2024–Present</p>
            </div>
            <p className="text-[10px] text-gray-500 -mt-0.5">Intelivance &nbsp;|&nbsp; Remote</p>
            <ul className="mt-1 space-y-0.5 list-disc list-outside ml-4">
              {intelivanceSel.bulletIds.map((id) => {
                const bullet = bulletMap.get(id);
                if (!bullet) return null;
                return (
                  <li key={id} className="text-[10.5px] text-gray-800 leading-[1.45]">
                    {bullet.text}
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* ACHD */}
        {achdSel && achdSel.bulletIds.length > 0 && (
          <div className="mb-3">
            <div className="flex justify-between items-baseline">
              <p className="font-bold text-[11px]">Microbiologist</p>
              <p className="text-[10px] text-gray-500">2020–2021</p>
            </div>
            <p className="text-[10px] text-gray-500 -mt-0.5">
              Allegheny County Health Department &nbsp;|&nbsp; Pittsburgh, PA
            </p>
            <ul className="mt-1 space-y-0.5 list-disc list-outside ml-4">
              {achdSel.bulletIds.map((id) => {
                const bullet = bulletMap.get(id);
                if (!bullet) return null;
                return (
                  <li key={id} className="text-[10.5px] text-gray-800 leading-[1.45]">
                    {bullet.text}
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* UPMC */}
        {upmcSel && upmcSel.bulletIds.length > 0 && (
          <div className="mb-3">
            <div className="flex justify-between items-baseline">
              <p className="font-bold text-[11px]">Cardiovascular Research Assistant</p>
              <p className="text-[10px] text-gray-500">2017–2019</p>
            </div>
            <p className="text-[10px] text-gray-500 -mt-0.5">UPMC &nbsp;|&nbsp; Pittsburgh, PA</p>
            <ul className="mt-1 space-y-0.5 list-disc list-outside ml-4">
              {upmcSel.bulletIds.map((id) => {
                const bullet = bulletMap.get(id);
                if (!bullet) return null;
                return (
                  <li key={id} className="text-[10.5px] text-gray-800 leading-[1.45]">
                    {bullet.text}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      {/* Skills */}
      <div className="mb-4">
        <h2 className="text-[12px] font-bold uppercase tracking-wider border-b border-gray-300 pb-0.5 mb-2">
          Skills
        </h2>
        <p className="text-[10.5px] text-gray-700">{skillLine}</p>
      </div>

      {/* Education */}
      <div className="mb-4">
        <h2 className="text-[12px] font-bold uppercase tracking-wider border-b border-gray-300 pb-0.5 mb-2">
          Education
        </h2>
        <div className="space-y-1.5">
          <div className="flex justify-between">
            <div>
              <p className="font-bold text-[11px]">M.S. Human Physiology</p>
              <p className="text-[10px] text-gray-500">University of Louisville &nbsp;|&nbsp; GPA: 3.93</p>
            </div>
            <p className="text-[10px] text-gray-500">2021–2023</p>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="font-bold text-[11px]">B.S. Biological Sciences, Minor: Chemistry</p>
              <p className="text-[10px] text-gray-500">University of Pittsburgh</p>
            </div>
            <p className="text-[10px] text-gray-500">2016–2019</p>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div>
        <h2 className="text-[12px] font-bold uppercase tracking-wider border-b border-gray-300 pb-0.5 mb-2">
          Certifications
        </h2>
        <p className="text-[10.5px] text-gray-700">IBM Watson Studio</p>
      </div>
    </div>
  );
}

/**
 * Generate plain text version of the resume for clipboard export.
 */
export function generateResumeText(variant: ResumeVariant): string {
  const bulletMap = new Map(allBullets.map((b) => [b.id, b]));
  const skillMap = new Map(skills.map((s) => [s.id, s]));

  const lines: string[] = [];
  lines.push('KASHYAP MAHESHWARI');
  lines.push('Louisville, KY | (412) 980-1292 | kashpm2002@gmail.com | kashcreates.app');
  lines.push('');

  if (variant.summary) {
    lines.push(variant.summary);
    lines.push('');
  }

  lines.push('EXPERIENCE');
  lines.push('');

  const intelivanceSel = variant.bulletSelections.find((s) => s.projectId === 'intelivance');
  if (intelivanceSel && intelivanceSel.bulletIds.length > 0) {
    lines.push('Software Engineer | Intelivance | Remote | 2024–Present');
    for (const id of intelivanceSel.bulletIds) {
      const b = bulletMap.get(id);
      if (b) lines.push(`  • ${b.text}`);
    }
    lines.push('');
  }

  const achdSel = variant.bulletSelections.find((s) => s.projectId === 'achd-lab');
  if (achdSel && achdSel.bulletIds.length > 0) {
    lines.push('Microbiologist | Allegheny County Health Department | Pittsburgh, PA | 2020–2021');
    for (const id of achdSel.bulletIds) {
      const b = bulletMap.get(id);
      if (b) lines.push(`  • ${b.text}`);
    }
    lines.push('');
  }

  const upmcSel = variant.bulletSelections.find((s) => s.projectId === 'upmc-research');
  if (upmcSel && upmcSel.bulletIds.length > 0) {
    lines.push('Cardiovascular Research Assistant | UPMC | Pittsburgh, PA | 2017–2019');
    for (const id of upmcSel.bulletIds) {
      const b = bulletMap.get(id);
      if (b) lines.push(`  • ${b.text}`);
    }
    lines.push('');
  }

  lines.push('SKILLS');
  const orderedSkills = variant.skillOrder
    .map((id) => skillMap.get(id)?.name)
    .filter(Boolean);
  const remaining = skills
    .filter((s) => !new Set(variant.skillOrder).has(s.id) && s.proficiency >= 3)
    .sort((a, b) => b.proficiency - a.proficiency)
    .map((s) => s.name);
  lines.push([...orderedSkills, ...remaining].slice(0, 12).join(' | '));
  lines.push('');

  lines.push('EDUCATION');
  lines.push('M.S. Human Physiology | University of Louisville | GPA: 3.93 | 2021–2023');
  lines.push('B.S. Biological Sciences, Minor: Chemistry | University of Pittsburgh | 2016–2019');
  lines.push('');
  lines.push('CERTIFICATIONS');
  lines.push('IBM Watson Studio');

  return lines.join('\n');
}
