import fs from 'fs';
import path from 'path';
import { PrepEntry } from './interview-prep-types';

export type { PrepEntry };
export { prepCategories } from './interview-prep-types';

// Content is private: kept out of the public repo (job-search/ is gitignored)
// and injected in production via the INTERVIEW_PREP_DATA env var.
export function loadPrepEntries(): PrepEntry[] {
  const localPath = path.join(process.cwd(), 'job-search', 'interview-prep-content.json');
  try {
    if (fs.existsSync(localPath)) {
      return JSON.parse(fs.readFileSync(localPath, 'utf8'));
    }
  } catch {
    // fall through to env
  }
  const env = process.env.INTERVIEW_PREP_DATA;
  if (env) {
    try {
      return JSON.parse(env);
    } catch {
      return [];
    }
  }
  return [];
}
