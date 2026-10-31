import {
    SESSION_CACHE_MAX_ENTRIES,
    SESSION_CACHE_TTL_MS,
} from "@/features/auth/lib/proxy/config";
import type { SessionUser } from "@/features/auth/types/auth-index";

interface Entry {
    user: SessionUser;
    expiresAt: number;
}

/** Példányszintű (nem osztott) cache. Kulcs: a nyers access token. */
const cache = new Map<string, Entry>();

export function getCachedSession(rawAccessToken: string): SessionUser | null {
    const entry = cache.get(rawAccessToken);
    if (!entry) return null;

    if (entry.expiresAt <= Date.now()) {
        cache.delete(rawAccessToken);
        return null;
    }
    return entry.user;
}

export function setCachedSession(
    rawAccessToken: string,
    user: SessionUser,
    hasUserData: boolean,
    tokenExpiresAt: Date | null,
): void {
    // Csak a kész profilú usert cache-eljük: a profil létrehozása után a "nincs profil"
    // állapot nem ragadhat be (a server action nem éri el ennek a bundle-nek a memóriáját).
    if (!hasUserData) return;

    const now = Date.now();
    const ttlEnd = now + SESSION_CACHE_TTL_MS;
    // a cache soha nem élhet tovább, mint maga a token
    const expiresAt = tokenExpiresAt
        ? Math.min(ttlEnd, tokenExpiresAt.getTime())
        : ttlEnd;
    if (expiresAt <= now) return;

    if (cache.size >= SESSION_CACHE_MAX_ENTRIES) {
        for (const [key, entry] of cache) {
            if (entry.expiresAt <= now) cache.delete(key);
        }
        // ha még mindig tele van, a legrégebbi bejegyzések esnek ki
        while (cache.size >= SESSION_CACHE_MAX_ENTRIES) {
            const oldest = cache.keys().next().value;
            if (oldest === undefined) break;
            cache.delete(oldest);
        }
    }

    cache.set(rawAccessToken, { user, expiresAt });
}
