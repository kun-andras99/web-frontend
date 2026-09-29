import "server-only";

import { getCurrentUser } from "@/features/auth/lib/session";
import { HttpError } from "@/lib/api/route-handler";

export async function requireUser() {
    const user = await getCurrentUser();
    if (!user) {
        throw new HttpError(401, "Authentication required", "UNAUTHENTICATED");
    }
    return user;
}
