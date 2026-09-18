// Browser example. Replace these values with your Supabase project settings.
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const supabaseUrl = "https://YOUR_PROJECT.supabase.co";
const supabaseKey = "YOUR_ANON_KEY";
const supabase = createClient(supabaseUrl, supabaseKey);

const { data, error } = await supabase
  .from("students")
  .select("id, name, email")
  .order("name");

if (error) console.error(error);
else console.table(data);
