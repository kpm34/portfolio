import InterviewPrepClient from '@/components/dashboard/InterviewPrepClient';
import { loadPrepEntries } from '@/lib/dashboard/interview-prep-data';

export const dynamic = 'force-dynamic';

export default function InterviewPrepPage() {
  const entries = loadPrepEntries();
  return <InterviewPrepClient entries={entries} />;
}
