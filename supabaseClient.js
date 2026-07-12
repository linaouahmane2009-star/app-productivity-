import { createClient } from '@supabase/supabase-js'

// These come from your Supabase project settings (API section).
// You'll add them as Environment Variables in Vercel + in a local .env file.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null
