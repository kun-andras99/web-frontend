import { getRedis } from "@/lib/security/redis";
import { Ratelimit } from "@upstash/ratelimit";

const LIMITERS = {
    login: { limit: 5, window: "15 m" }, // IP + e-mail páronként
    loginIp: { limit: 30, window: "15 m" }, // IP-nként
    passwordReset: { limit: 3, window: "1 h" }, // e-mailenként
    passwordResetIp: { limit: 10, window: "1 h" }, // IP-nként
    apiDefault: { limit: 120, window: "1 m" }, // user / IP
    apiSensitive: { limit: 12, window: "1 m" }, // pl. /api/location
    manageUsersWrite: { limit: 30, window: "1 m" },
    signUpIp: { limit: 10, window: "1 h" }, // IP-nként
    chatOpen: { limit: 30, window: "1 m" }, // userenként
    chatSend: { limit: 60, window: "1 m" }, // userenként
    matchAction: { limit: 120, window: "1 m" }, // userenként
    blogWrite: { limit: 10, window: "1 h" }, // userenként
    profileCreate: { limit: 5, window: "1 h" }, // userenként
} as const;

export type LimiterName = keyof typeof LIMITERS;

export interface RateLimitResult {
    success: boolean;
    retryAfterSeconds: number;
}

const ALLOWED: RateLimitResult = { success: true, retryAfterSeconds: 0 };
const instances = new Map<LimiterName, Ratelimit>();

function getLimiter(name: LimiterName): Ratelimit | null {
    const redis = getRedis();
    if (!redis) return null;

    let limiter = instances.get(name);
    if (!limiter) {
        const { limit, window } = LIMITERS[name];
        limiter = new Ratelimit({
            redis,
            limiter: Ratelimit.slidingWindow(limit, window),
            prefix: `rl:${name}`,
            // Redis-kiesés esetén a kérés átmegy (fail-open), nem lassul be az app
            timeout: 1500,
        });
        instances.set(name, limiter);
    }
    return limiter;
}

export async function checkRateLimit(
    name: LimiterName,
    key: string,
): Promise<RateLimitResult> {
    const limiter = getLimiter(name);
    if (!limiter) return ALLOWED;

    try {
        const result = await limiter.limit(key);
        return {
            success: result.success,
            retryAfterSeconds: Math.max(
                1,
                Math.ceil((result.reset - Date.now()) / 1000),
            ),
        };
    } catch (error) {
        console.error("[rate-limit] hiba, a kérés átengedve", error);
        return ALLOWED;
    }
}

/** Párhuzamosan ellenőriz több limitet; az első sikertelen eredményt adja vissza. */
export async function checkRateLimits(
    checks: ReadonlyArray<readonly [LimiterName, string]>,
): Promise<RateLimitResult> {
    const results = await Promise.all(
        checks.map(([name, key]) => checkRateLimit(name, key)),
    );
    return results.find((result) => !result.success) ?? ALLOWED;
}
