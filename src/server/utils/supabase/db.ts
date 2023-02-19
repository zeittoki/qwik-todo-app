import { createClient } from "@supabase/supabase-js";
import { serverEnv } from "../../serverEnv";
import { Database } from "./schema";

export const supabase = createClient<Database>(
  serverEnv.VITE_SUPABASE_URL,
  serverEnv.VITE_SUPABASE_ANON_KEY
);