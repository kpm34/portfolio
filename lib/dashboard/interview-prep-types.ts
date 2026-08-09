export interface PrepEntry {
  tag: string;
  category: 'ai-llm' | 'ml-python' | 'backend' | 'frontend' | 'mobile' | 'testing' | 'data';
  whatItIs: string;
  whereIUsedIt: string;
  gotcha: string;
  citeRepo: string;
  caution?: string;
}

export const prepCategories: Record<PrepEntry['category'], string> = {
  'ai-llm': 'AI & LLM',
  'ml-python': 'ML & Python',
  'backend': 'Backend & Infra',
  'frontend': 'Frontend',
  'mobile': 'Mobile',
  'testing': 'Testing & Tooling',
  'data': 'Data & Integrations',
};
