import "server-only";

import { HttpError } from "@/lib/api/route-handler";
import { checkRateLimit, LimiterName } from "@/lib/security/rate-limit";

export async function enforceRateLimit(
    name: LimiterName,
    key: string,
): Promise<void> {
    const result = await checkRateLimit(name, key);
    if (!result.success) {
        throw new HttpError(429, "Too many requests", "RATE_LIMITED", {
            "Retry-After": String(result.retryAfterSeconds),
        });
    }
}
