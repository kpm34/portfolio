// ===== SKILL SYSTEM =====

export type ProficiencyLevel = 1 | 2 | 3 | 4 | 5;

export type SkillCategory =
  | 'frontend'
  | 'backend'
  | 'ai-ml'
  | 'data-engineering'
  | '3d-graphics'
  | 'devops'
  | 'database'
  | 'science'
  | 'soft-skills';

export const SKILL_CATEGORY_LABELS: Record<SkillCategory, string> = {
  'frontend': 'Frontend',
  'backend': 'Backend',
  'ai-ml': 'AI & ML',
  'data-engineering': 'Data Engineering',
  '3d-graphics': '3D Graphics',
  'devops': 'DevOps',
  'database': 'Database',
  'science': 'Science',
  'soft-skills': 'Soft Skills',
};

export interface SkillEvidence {
  projectId: string;
  description: string;
  impact?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  proficiency: ProficiencyLevel;
  yearsUsed: number;
  evidence: SkillEvidence[];
  keywords: string[];
}

// ===== ROLE SYSTEM =====

export type IndustryVertical =
  | 'fintech'
  | 'healthtech'
  | 'saas'
  | 'ai-ml'
  | 'sports-tech'
  | 'general';

export interface RoleRequirement {
  skillId: string;
  importance: number; // 1-10
  isRequired: boolean;
}

export interface TargetRole {
  id: string;
  title: string;
  industry: IndustryVertical;
  requirements: RoleRequirement[];
  description: string;
  salaryRange?: { min: number; max: number };
  notes?: string;
}

// ===== RESUME TAILORING (Future Phase 3) =====

export interface ResumeBulletPoint {
  id: string;
  projectId: string;
  text: string;
  skills: string[];
  impact?: string;
}

export interface ResumeVariant {
  id: string;
  roleId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  summary: string;
  bulletSelections: {
    projectId: string;
    bulletIds: string[];
  }[];
  skillOrder: string[];
  bulletOverrides?: Record<string, string>; // bulletId -> custom text (per-variant edits)
  notes?: string;
}

// ===== APPLICATION TRACKING (Future Phase 4) =====

export type ApplicationStatus =
  | 'bookmarked'
  | 'applied'
  | 'phone-screen'
  | 'technical'
  | 'onsite'
  | 'offer'
  | 'accepted'
  | 'rejected'
  | 'withdrawn';

export interface ApplicationEvent {
  date: string;
  status: ApplicationStatus;
  notes?: string;
}

export interface Application {
  id: string;
  company: string;
  roleTitle: string;
  roleId?: string;
  industry: IndustryVertical;
  resumeVariantId?: string;
  status: ApplicationStatus;
  appliedDate: string;
  lastUpdated: string;
  url?: string;
  salary?: { min: number; max: number };
  location?: string;
  remote?: boolean;
  notes?: string;
  timeline: ApplicationEvent[];
}

// ===== COMPUTED / ANALYTICS =====

export interface SkillMatch {
  skillId: string;
  skillName: string;
  importance: number;
  proficiency: ProficiencyLevel | 0;
  isRequired: boolean;
}

export interface RoleMatchScore {
  roleId: string;
  roleTitle: string;
  overallScore: number; // 0-100
  matchedSkills: SkillMatch[];
  gapSkills: SkillMatch[];
  strongSkills: SkillMatch[];
}

export interface ApplicationAnalytics {
  totalApplications: number;
  byStatus: Record<ApplicationStatus, number>;
  byRole: Record<string, number>;
  byIndustry: Record<IndustryVertical, number>;
  conversionRates: {
    appliedToScreen: number;
    screenToInterview: number;
    interviewToOffer: number;
    overall: number;
  };
}
