'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Palette } from 'lucide-react';
import {
  ResumeStyle,
  RESUME_THEMES,
  THEME_IDS,
  ACCENT_PRESETS,
  DEFAULT_STYLE,
  FontFamily,
  HeaderAlignment,
  Density,
  DividerStyle,
} from '@/lib/dashboard/resume-themes';

interface StyleEditorProps {
  style: ResumeStyle;
  onChange: (style: ResumeStyle) => void;
}

export default function StyleEditor({ style, onChange }: StyleEditorProps) {
  const [expanded, setExpanded] = useState(false);

  const update = (partial: Partial<ResumeStyle>) => {
    onChange({ ...style, ...partial });
  };

  const applyTheme = (themeId: string) => {
    const theme = RESUME_THEMES[themeId as keyof typeof RESUME_THEMES];
    if (theme) onChange({ ...theme.style });
  };

  return (
    <div className="rounded-lg bg-[#F5F5DC]/[0.02] border border-[#F5F5DC]/5 overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-4 py-3 flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-2">
          <Palette size={14} className="text-[#800020]" />
          <p className="text-sm text-[#F5F5DC] font-medium">Style & Theme</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-[#F5F5DC]/30">
            {RESUME_THEMES[style.theme]?.label || 'Custom'}
          </span>
          {expanded ? (
            <ChevronUp size={14} className="text-[#F5F5DC]/30" />
          ) : (
            <ChevronDown size={14} className="text-[#F5F5DC]/30" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="border-t border-[#F5F5DC]/5 px-4 py-4 space-y-5">
              {/* Theme presets */}
              <div>
                <label className="block text-[10px] font-mono text-[#F5F5DC]/30 uppercase tracking-widest mb-2">
                  Theme
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {THEME_IDS.map((id) => {
                    const theme = RESUME_THEMES[id];
                    const isActive = style.theme === id;
                    return (
                      <button
                        key={id}
                        onClick={() => applyTheme(id)}
                        className={`group relative px-3 py-2.5 rounded-lg border text-left transition-all ${
                          isActive
                            ? 'border-[#800020]/50 bg-[#800020]/10'
                            : 'border-[#F5F5DC]/5 hover:border-[#F5F5DC]/15 hover:bg-[#F5F5DC]/[0.02]'
                        }`}
                      >
                        {/* Mini preview swatch */}
                        <div className="flex items-center gap-2 mb-1">
                          <div
                            className="w-3 h-3 rounded-full shrink-0"
                            style={{ backgroundColor: theme.style.accentColor }}
                          />
                          <span className={`text-xs font-medium ${isActive ? 'text-[#F5F5DC]' : 'text-[#F5F5DC]/60'}`}>
                            {theme.label}
                          </span>
                        </div>
                        <p className="text-[9px] font-mono text-[#F5F5DC]/25 leading-tight">
                          {theme.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Accent color */}
              <div>
                <label className="block text-[10px] font-mono text-[#F5F5DC]/30 uppercase tracking-widest mb-2">
                  Accent Color
                </label>
                <div className="flex flex-wrap gap-2">
                  {ACCENT_PRESETS.map((preset) => (
                    <button
                      key={preset.color}
                      onClick={() => update({ accentColor: preset.color })}
                      className={`w-7 h-7 rounded-full border-2 transition-all hover:scale-110 ${
                        style.accentColor === preset.color
                          ? 'border-[#F5F5DC]/60 scale-110'
                          : 'border-transparent'
                      }`}
                      style={{ backgroundColor: preset.color }}
                      title={preset.label}
                    />
                  ))}
                  <label
                    className="w-7 h-7 rounded-full border-2 border-dashed border-[#F5F5DC]/20 flex items-center justify-center cursor-pointer hover:border-[#F5F5DC]/40 transition-colors"
                    title="Custom color"
                  >
                    <span className="text-[9px] text-[#F5F5DC]/30">+</span>
                    <input
                      type="color"
                      value={style.accentColor}
                      onChange={(e) => update({ accentColor: e.target.value })}
                      className="sr-only"
                    />
                  </label>
                </div>
              </div>

              {/* Font family */}
              <div>
                <label className="block text-[10px] font-mono text-[#F5F5DC]/30 uppercase tracking-widest mb-2">
                  Typography
                </label>
                <div className="flex gap-2">
                  {([
                    { value: 'sans', label: 'Sans', preview: 'Aa' },
                    { value: 'serif', label: 'Serif', preview: 'Aa' },
                    { value: 'mono', label: 'Mono', preview: 'Aa' },
                  ] as const).map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => update({ fontFamily: opt.value })}
                      className={`flex-1 px-3 py-2 rounded-lg border text-center transition-all ${
                        style.fontFamily === opt.value
                          ? 'border-[#800020]/50 bg-[#800020]/10'
                          : 'border-[#F5F5DC]/5 hover:border-[#F5F5DC]/15'
                      }`}
                    >
                      <span className={`text-lg ${
                        opt.value === 'sans' ? 'font-sans' : opt.value === 'serif' ? 'font-serif' : 'font-mono'
                      } ${style.fontFamily === opt.value ? 'text-[#F5F5DC]' : 'text-[#F5F5DC]/50'}`}>
                        {opt.preview}
                      </span>
                      <p className={`text-[9px] font-mono mt-0.5 ${
                        style.fontFamily === opt.value ? 'text-[#F5F5DC]/60' : 'text-[#F5F5DC]/25'
                      }`}>
                        {opt.label}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Header alignment */}
              <div>
                <label className="block text-[10px] font-mono text-[#F5F5DC]/30 uppercase tracking-widest mb-2">
                  Header
                </label>
                <div className="flex gap-2">
                  {([
                    { value: 'center', label: 'Centered', icon: '═══' },
                    { value: 'left', label: 'Left-aligned', icon: '═──' },
                  ] as const).map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => update({ headerAlignment: opt.value })}
                      className={`flex-1 px-3 py-2 rounded-lg border text-center transition-all ${
                        style.headerAlignment === opt.value
                          ? 'border-[#800020]/50 bg-[#800020]/10'
                          : 'border-[#F5F5DC]/5 hover:border-[#F5F5DC]/15'
                      }`}
                    >
                      <span className={`text-xs font-mono ${
                        style.headerAlignment === opt.value ? 'text-[#F5F5DC]/60' : 'text-[#F5F5DC]/25'
                      }`}>
                        {opt.icon}
                      </span>
                      <p className={`text-[9px] font-mono mt-0.5 ${
                        style.headerAlignment === opt.value ? 'text-[#F5F5DC]/60' : 'text-[#F5F5DC]/25'
                      }`}>
                        {opt.label}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Density */}
              <div>
                <label className="block text-[10px] font-mono text-[#F5F5DC]/30 uppercase tracking-widest mb-2">
                  Density
                </label>
                <div className="flex gap-2">
                  {([
                    { value: 'compact', label: 'Compact' },
                    { value: 'comfortable', label: 'Comfortable' },
                    { value: 'spacious', label: 'Spacious' },
                  ] as const).map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => update({ density: opt.value })}
                      className={`flex-1 px-3 py-1.5 rounded-lg border text-center transition-all ${
                        style.density === opt.value
                          ? 'border-[#800020]/50 bg-[#800020]/10'
                          : 'border-[#F5F5DC]/5 hover:border-[#F5F5DC]/15'
                      }`}
                    >
                      <p className={`text-[10px] font-mono ${
                        style.density === opt.value ? 'text-[#F5F5DC]/60' : 'text-[#F5F5DC]/25'
                      }`}>
                        {opt.label}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Divider style */}
              <div>
                <label className="block text-[10px] font-mono text-[#F5F5DC]/30 uppercase tracking-widest mb-2">
                  Dividers
                </label>
                <div className="flex gap-2">
                  {([
                    { value: 'line', label: 'Line' },
                    { value: 'double', label: 'Double' },
                    { value: 'thick', label: 'Thick' },
                    { value: 'dots', label: 'Dots' },
                    { value: 'none', label: 'None' },
                  ] as const).map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => update({ dividerStyle: opt.value })}
                      className={`flex-1 px-2 py-1.5 rounded-lg border text-center transition-all ${
                        style.dividerStyle === opt.value
                          ? 'border-[#800020]/50 bg-[#800020]/10'
                          : 'border-[#F5F5DC]/5 hover:border-[#F5F5DC]/15'
                      }`}
                    >
                      <p className={`text-[10px] font-mono ${
                        style.dividerStyle === opt.value ? 'text-[#F5F5DC]/60' : 'text-[#F5F5DC]/25'
                      }`}>
                        {opt.label}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Accent bar toggle */}
              <div className="flex items-center justify-between">
                <label className="text-[10px] font-mono text-[#F5F5DC]/30 uppercase tracking-widest">
                  Accent Side Bar
                </label>
                <button
                  onClick={() => update({ showAccentBar: !style.showAccentBar })}
                  className={`w-10 h-5 rounded-full transition-colors relative ${
                    style.showAccentBar ? 'bg-[#800020]' : 'bg-[#F5F5DC]/10'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white absolute top-0.5 transition-transform ${
                      style.showAccentBar ? 'translate-x-5' : 'translate-x-0.5'
                    }`}
                  />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
