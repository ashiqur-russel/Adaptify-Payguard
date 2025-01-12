import { createClient } from '@supabase/supabase-js';
import config from '../config';

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  config.supabase_project_url as string,
  config.supabase_api_key as string,
);
