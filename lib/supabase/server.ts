import { createClient } from "@supabase/supabase-js";

let supabaseServerClient: ReturnType<typeof createClient> | null = null;

export function getSupabaseServerClient() {
    if (supabaseServerClient) {
        return supabaseServerClient;
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl) {
        throw new Error("Hiányzik a NEXT_PUBLIC_SUPABASE_URL.");
    }

    if (!supabaseServiceRoleKey) {
        throw new Error("Hiányzik a SUPABASE_SERVICE_ROLE_KEY.");
    }

    supabaseServerClient = createClient(supabaseUrl, supabaseServiceRoleKey, {
        auth: {
            persistSession: false,
            autoRefreshToken: false,
        },
    });

    return supabaseServerClient;
}
