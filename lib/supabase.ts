import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Client-side Supabase (uses anon key)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Server-side Supabase (uses service role key - bypasses RLS)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

// Database types
export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  message: string;
  created_at?: string;
}

export interface JobApplication {
  id?: string;
  company: string;
  role: string;
  status: 'applied' | 'interviewing' | 'offered' | 'rejected' | 'accepted';
  applied_date: string;
  notes?: string;
  contact_name?: string;
  contact_email?: string;
  job_url?: string;
  created_at?: string;
  updated_at?: string;
}
