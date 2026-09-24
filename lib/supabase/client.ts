// src/lib/supabase/client.ts

import { createClient, SupabaseClient } from "@supabase/supabase-js";

let supabaseBrowserClient: SupabaseClient | null = null;

export function getSupabaseBrowserClient() {
    if (supabaseBrowserClient) {
        return supabaseBrowserClient;
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl) {
        throw new Error("Hiányzik a NEXT_PUBLIC_SUPABASE_URL.");
    }

    if (!supabaseAnonKey) {
        throw new Error("Hiányzik a NEXT_PUBLIC_SUPABASE_ANON_KEY.");
    }

    supabaseBrowserClient = createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
            persistSession: false,
            autoRefreshToken: false,
            detectSessionInUrl: false,
        },
    });

    return supabaseBrowserClient;
}
