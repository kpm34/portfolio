export type ResumeThemeId = 'classic' | 'modern' | 'elegant' | 'minimal' | 'bold' | 'editorial';

export type FontFamily = 'sans' | 'serif' | 'mono';
export type HeaderAlignment = 'center' | 'left';
export type Density = 'compact' | 'comfortable' | 'spacious';
export type DividerStyle = 'line' | 'double' | 'thick' | 'none' | 'dots';

export interface ResumeStyle {
  theme: ResumeThemeId;
  accentColor: string;
  fontFamily: FontFamily;
  headerAlignment: HeaderAlignment;
  density: Density;
  dividerStyle: DividerStyle;
  showAccentBar: boolean; // colored left bar on the resume
}

export const DEFAULT_STYLE: ResumeStyle = {
  theme: 'classic',
  accentColor: '#1a1a1a',
  fontFamily: 'sans',
  headerAlignment: 'center',
  density: 'comfortable',
  dividerStyle: 'line',
  showAccentBar: false,
};

export const RESUME_THEMES: Record<ResumeThemeId, { label: string; description: string; style: ResumeStyle }> = {
  classic: {
    label: 'Classic',
    description: 'Clean, traditional layout',
    style: {
      theme: 'classic',
      accentColor: '#1a1a1a',
      fontFamily: 'sans',
      headerAlignment: 'center',
      density: 'comfortable',
      dividerStyle: 'line',
      showAccentBar: false,
    },
  },
  modern: {
    label: 'Modern',
    description: 'Sleek with blue accents',
    style: {
      theme: 'modern',
      accentColor: '#2563eb',
      fontFamily: 'sans',
      headerAlignment: 'left',
      density: 'comfortable',
      dividerStyle: 'thick',
      showAccentBar: true,
    },
  },
  elegant: {
    label: 'Elegant',
    description: 'Refined serif typography',
    style: {
      theme: 'elegant',
      accentColor: '#7c2d12',
      fontFamily: 'serif',
      headerAlignment: 'center',
      density: 'spacious',
      dividerStyle: 'double',
      showAccentBar: false,
    },
  },
  minimal: {
    label: 'Minimal',
    description: 'Ultra-clean, no dividers',
    style: {
      theme: 'minimal',
      accentColor: '#6b7280',
      fontFamily: 'sans',
      headerAlignment: 'left',
      density: 'compact',
      dividerStyle: 'none',
      showAccentBar: false,
    },
  },
  bold: {
    label: 'Bold',
    description: 'High contrast, stand-out',
    style: {
      theme: 'bold',
      accentColor: '#dc2626',
      fontFamily: 'sans',
      headerAlignment: 'left',
      density: 'comfortable',
      dividerStyle: 'thick',
      showAccentBar: true,
    },
  },
  editorial: {
    label: 'Editorial',
    description: 'Magazine-inspired mono type',
    style: {
      theme: 'editorial',
      accentColor: '#0f172a',
      fontFamily: 'mono',
      headerAlignment: 'left',
      density: 'compact',
      dividerStyle: 'dots',
      showAccentBar: false,
    },
  },
};

export const ACCENT_PRESETS = [
  { color: '#1a1a1a', label: 'Black' },
  { color: '#2563eb', label: 'Blue' },
  { color: '#7c2d12', label: 'Sienna' },
  { color: '#dc2626', label: 'Red' },
  { color: '#059669', label: 'Emerald' },
  { color: '#7c3aed', label: 'Violet' },
  { color: '#0891b2', label: 'Cyan' },
  { color: '#b45309', label: 'Amber' },
  { color: '#0f172a', label: 'Slate' },
  { color: '#831843', label: 'Rose' },
];

export const THEME_IDS = Object.keys(RESUME_THEMES) as ResumeThemeId[];
