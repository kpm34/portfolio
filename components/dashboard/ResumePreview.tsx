'use client';

import { useMemo, CSSProperties } from 'react';
import { ResumeVariant } from '@/lib/dashboard/types';
import { allBullets } from '@/lib/dashboard/bullets-data';
import { skills } from '@/lib/dashboard/skills-data';
import { ResumeStyle, DEFAULT_STYLE } from '@/lib/dashboard/resume-themes';

interface ResumePreviewProps {
  variant: ResumeVariant;
}

// ——— Style helpers ———

function getFontClass(family: ResumeStyle['fontFamily']) {
  switch (family) {
    case 'serif': return 'font-serif';
    case 'mono': return 'font-mono';
    default: return 'font-[system-ui]';
  }
}

function getDensityClasses(density: ResumeStyle['density']) {
  switch (density) {
    case 'compact': return { section: 'mb-3', item: 'mb-2', padding: 'p-6', leading: 'leading-[1.4]' };
    case 'spacious': return { section: 'mb-6', item: 'mb-4', padding: 'p-10', leading: 'leading-[1.65]' };
    default: return { section: 'mb-4', item: 'mb-3', padding: 'p-8', leading: 'leading-[1.5]' };
  }
}

function getDividerStyle(divider: ResumeStyle['dividerStyle'], accentColor: string): CSSProperties {
  switch (divider) {
    case 'double':
      return { borderBottom: 'none', borderTop: `1px solid ${accentColor}`, boxShadow: `0 3px 0 -1.5px ${accentColor}` };
    case 'thick':
      return { borderBottom: `2.5px solid ${accentColor}` };
    case 'dots':
      return { borderBottom: `2px dotted ${accentColor}`, opacity: 0.5 };
    case 'none':
      return { borderBottom: 'none' };
    default: // line
      return { borderBottom: `1px solid ${accentColor}20` };
  }
}

// ——— Component ———

export default function ResumePreview({ variant }: ResumePreviewProps) {
  const s = variant.style || DEFAULT_STYLE;
  const bulletMap = useMemo(() => new Map(allBullets.map((b) => [b.id, b])), []);
  const overrides = variant.bulletOverrides || {};

  const getBulletText = (id: string) => {
    if (overrides[id]) return overrides[id];
    return bulletMap.get(id)?.text || '';
  };

  const intelivanceSel = variant.bulletSelections.find((sel) => sel.projectId === 'intelivance');
  const achdSel = variant.bulletSelections.find((sel) => sel.projectId === 'achd-lab');
  const upmcSel = variant.bulletSelections.find((sel) => sel.projectId === 'upmc-research');

  const orderedSkills = useMemo(() => {
    const skillMap = new Map(skills.map((sk) => [sk.id, sk]));
    const ordered = variant.skillOrder.map((id) => skillMap.get(id)).filter(Boolean);
    const inOrder = new Set(variant.skillOrder);
    const remaining = skills
      .filter((sk) => !inOrder.has(sk.id) && sk.proficiency >= 3)
      .sort((a, b) => b.proficiency - a.proficiency);
    return [...ordered, ...remaining];
  }, [variant.skillOrder]);

  const skillLine = orderedSkills
    .slice(0, 12)
    .map((sk) => sk!.name)
    .join(' | ');

  const d = getDensityClasses(s.density);
  const fontClass = getFontClass(s.fontFamily);
  const dividerCSS = getDividerStyle(s.dividerStyle, s.accentColor);
  const isCenter = s.headerAlignment === 'center';

  return (
    <div
      className={`bg-white rounded-xl shadow-lg text-black text-[11px] ${d.leading} max-h-[80vh] overflow-y-auto ${fontClass} ${d.padding} relative`}
    >
      {/* Accent side bar */}
      {s.showAccentBar && (
        <div
          className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-xl"
          style={{ backgroundColor: s.accentColor }}
        />
      )}

      {/* Header */}
      <div className={`${isCenter ? 'text-center' : 'text-left'} ${d.section}`}>
        <h1
          className="text-[18px] font-bold tracking-tight"
          style={{ color: s.accentColor === '#1a1a1a' ? '#000' : s.accentColor }}
        >
          Kashyap Maheshwari
        </h1>
        <p className="text-[10px] text-gray-600 mt-0.5">
          Louisville, KY &nbsp;|&nbsp; (412) 980-1292 &nbsp;|&nbsp; kashpm2002@gmail.com &nbsp;|&nbsp; kashcreates.app
        </p>
      </div>

      {/* Summary */}
      {variant.summary && (
        <div className={d.section}>
          <p className="text-[11px] text-gray-700 leading-relaxed">
            {variant.summary}
          </p>
        </div>
      )}

      {/* Experience */}
      <div className={d.section}>
        <SectionHeader title="Experience" dividerCSS={dividerCSS} accentColor={s.accentColor} density={s.density} />

        {/* Intelivance */}
        {intelivanceSel && intelivanceSel.bulletIds.length > 0 && (
          <div className={d.item}>
            <div className="flex justify-between items-baseline">
              <p className="font-bold text-[11px]">Software Engineer</p>
              <p className="text-[10px] text-gray-500">2024–Present</p>
            </div>
            <p className="text-[10px] text-gray-500 -mt-0.5">Intelivance &nbsp;|&nbsp; Remote</p>
            <ul className="mt-1 space-y-0.5 list-disc list-outside ml-4">
              {intelivanceSel.bulletIds.map((id) => {
                const text = getBulletText(id);
                if (!text) return null;
                return (
                  <li key={id} className="text-[10.5px] text-gray-800 leading-[1.45]">{text}</li>
                );
              })}
            </ul>
          </div>
        )}

        {/* ACHD */}
        {achdSel && achdSel.bulletIds.length > 0 && (
          <div className={d.item}>
            <div className="flex justify-between items-baseline">
              <p className="font-bold text-[11px]">Microbiologist</p>
              <p className="text-[10px] text-gray-500">2020–2021</p>
            </div>
            <p className="text-[10px] text-gray-500 -mt-0.5">
              Allegheny County Health Department &nbsp;|&nbsp; Pittsburgh, PA
            </p>
            <ul className="mt-1 space-y-0.5 list-disc list-outside ml-4">
              {achdSel.bulletIds.map((id) => {
                const text = getBulletText(id);
                if (!text) return null;
                return (
                  <li key={id} className="text-[10.5px] text-gray-800 leading-[1.45]">{text}</li>
                );
              })}
            </ul>
          </div>
        )}

        {/* UPMC */}
        {upmcSel && upmcSel.bulletIds.length > 0 && (
          <div className={d.item}>
            <div className="flex justify-between items-baseline">
              <p className="font-bold text-[11px]">Research Intern</p>
              <p className="text-[10px] text-gray-500">Jun–Sep 2017</p>
            </div>
            <p className="text-[10px] text-gray-500 -mt-0.5">UPMC Cardiovascular Ultrasound Lab &nbsp;|&nbsp; Pittsburgh, PA</p>
            <ul className="mt-1 space-y-0.5 list-disc list-outside ml-4">
              {upmcSel.bulletIds.map((id) => {
                const text = getBulletText(id);
                if (!text) return null;
                return (
                  <li key={id} className="text-[10.5px] text-gray-800 leading-[1.45]">{text}</li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      {/* Skills */}
      <div className={d.section}>
        <SectionHeader title="Skills" dividerCSS={dividerCSS} accentColor={s.accentColor} density={s.density} />
        <p className="text-[10.5px] text-gray-700">{skillLine}</p>
      </div>

      {/* Education */}
      <div className={d.section}>
        <SectionHeader title="Education" dividerCSS={dividerCSS} accentColor={s.accentColor} density={s.density} />
        <div className={s.density === 'compact' ? 'space-y-1' : 'space-y-1.5'}>
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
        <SectionHeader title="Certifications" dividerCSS={dividerCSS} accentColor={s.accentColor} density={s.density} />
        <p className="text-[10.5px] text-gray-700">IBM Watson Studio</p>
      </div>
    </div>
  );
}

// ——— Section header sub-component ———

function SectionHeader({
  title,
  dividerCSS,
  accentColor,
  density,
}: {
  title: string;
  dividerCSS: CSSProperties;
  accentColor: string;
  density: string;
}) {
  return (
    <h2
      className={`text-[12px] font-bold uppercase tracking-wider ${density === 'compact' ? 'pb-0.5 mb-1.5' : 'pb-0.5 mb-2'}`}
      style={{
        color: accentColor === '#1a1a1a' ? '#000' : accentColor,
        ...dividerCSS,
      }}
    >
      {title}
    </h2>
  );
}

// ——— Plain text export ———

export function generateResumeText(variant: ResumeVariant): string {
  const bulletMap = new Map(allBullets.map((b) => [b.id, b]));
  const skillMap = new Map(skills.map((sk) => [sk.id, sk]));
  const overrides = variant.bulletOverrides || {};

  const getBulletText = (id: string) => {
    if (overrides[id]) return overrides[id];
    return bulletMap.get(id)?.text || '';
  };

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

  const intelivanceSel = variant.bulletSelections.find((sel) => sel.projectId === 'intelivance');
  if (intelivanceSel && intelivanceSel.bulletIds.length > 0) {
    lines.push('Software Engineer | Intelivance | Remote | 2024–Present');
    for (const id of intelivanceSel.bulletIds) {
      const text = getBulletText(id);
      if (text) lines.push(`  • ${text}`);
    }
    lines.push('');
  }

  const achdSel = variant.bulletSelections.find((sel) => sel.projectId === 'achd-lab');
  if (achdSel && achdSel.bulletIds.length > 0) {
    lines.push('Microbiologist | Allegheny County Health Department | Pittsburgh, PA | 2020–2021');
    for (const id of achdSel.bulletIds) {
      const text = getBulletText(id);
      if (text) lines.push(`  • ${text}`);
    }
    lines.push('');
  }

  const upmcSel = variant.bulletSelections.find((sel) => sel.projectId === 'upmc-research');
  if (upmcSel && upmcSel.bulletIds.length > 0) {
    lines.push('Research Intern | UPMC Cardiovascular Ultrasound Lab | Pittsburgh, PA | Jun–Sep 2017');
    for (const id of upmcSel.bulletIds) {
      const text = getBulletText(id);
      if (text) lines.push(`  • ${text}`);
    }
    lines.push('');
  }

  lines.push('SKILLS');
  const orderedSkills = variant.skillOrder
    .map((id) => skillMap.get(id)?.name)
    .filter(Boolean);
  const remaining = skills
    .filter((sk) => !new Set(variant.skillOrder).has(sk.id) && sk.proficiency >= 3)
    .sort((a, b) => b.proficiency - a.proficiency)
    .map((sk) => sk.name);
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
