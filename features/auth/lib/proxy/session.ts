import {
    createRefreshToken,
    findRefreshTokenByRawValue,
    markRefreshTokenReplaced,
    revokeAllRefreshTokensForUser,
} from "@/features/auth/data/refresh-token";
import {
    ACCESS_TOKEN_COOKIE,
    REFRESH_TOKEN_COOKIE,
} from "@/features/auth/lib/constants";
import {
    getAccessTokenExpiresAt,
    signAccessToken,
    verifyAccessToken,
} from "@/features/auth/lib/jwt";
import { audit } from "@/features/auth/lib/proxy/audit";
import {
    REFRESH_REUSE_GRACE_MS,
    TOKEN_ROTATION_THRESHOLD_SECONDS,
} from "@/features/auth/lib/proxy/config";
import { getRequestMeta } from "@/features/auth/lib/proxy/http";
import {
    getCachedSession,
    setCachedSession,
} from "@/features/auth/lib/proxy/session-cache";
import type { RotatedTokens, Session } from "@/features/auth/lib/proxy/types";
import type { UserId } from "@/features/auth/types/auth-index";
import { getUserById } from "@/features/user/repositories/user";
import type { NextRequest } from "next/server";
import {
    isActiveUser,
    toSessionUser,
} from "@/features/auth/lib/session-user";

const ANONYMOUS: Session = { authenticated: false };

type UserRecord = NonNullable<Awaited<ReturnType<typeof getUserById>>>;

/** Tiltott / inaktív fiók nem kap sessiont. (A getUserById-nak le kell kérnie a `status` mezőt.) */
async function loadActiveUser(id: UserId): Promise<UserRecord | null> {
    const user = await getUserById(id);
    return user && isActiveUser(user) ? user : null;
}

function toSession(user: UserRecord, rotatedTokens?: RotatedTokens): Session {
    return {
        authenticated: true,
        user: toSessionUser(user),
        hasUserData: user.userData !== null,
        ...(rotatedTokens && { rotatedTokens }),
    };
}

// ---- access token ----

async function resolveFromAccessToken(
    rawAccessToken: string,
    fresh: boolean,
): Promise<Session | null> {
    if (!fresh) {
        const cached = getCachedSession(rawAccessToken);
        if (cached)
            return { authenticated: true, user: cached, hasUserData: true };
    }

    const payload = await verifyAccessToken(rawAccessToken);
    if (!payload) return null;

    const user = await loadActiveUser(payload.sub);
    if (!user) return null;

    const session = toSession(user);
    if (session.authenticated) {
        setCachedSession(
            rawAccessToken,
            session.user,
            session.hasUserData,
            await getAccessTokenExpiresAt(rawAccessToken),
        );
    }
    return session;
}

// ---- refresh token ----

async function resolveFromRefreshToken(
    request: NextRequest,
    rawRefreshToken: string,
): Promise<Session> {
    const existing = await findRefreshTokenByRawValue(rawRefreshToken);
    if (!existing) return ANONYMOUS;

    const { ip, userAgent } = getRequestMeta(request);
    const userId = existing.userId as UserId;

    if (existing.revokedAt) {
        // Nemrég lecserélt token: párhuzamos kérés versenye, nem lopás. Ezt a kérést
        // kiszolgáljuk, de nem forgatunk újra, mert az új cookie-t a másik válasz viszi.
        // (A `replacedByTokenId` mező neve nálad eltérhet.)
        const recentlyReplaced =
            Boolean(existing.replacedBy) &&
            Date.now() - existing.revokedAt.getTime() < REFRESH_REUSE_GRACE_MS;

        if (recentlyReplaced) {
            const user = await loadActiveUser(userId);
            return user ? toSession(user) : ANONYMOUS;
        }

        // Valódi újrafelhasználás: lopás gyanú, minden token visszavonása.
        await revokeAllRefreshTokensForUser(userId);
        audit(request, "session.refresh_token_reuse_detected", {
            userId: existing.userId,
        });
        return ANONYMOUS;
    }

    if (existing.expiresAt <= new Date()) {
        audit(request, "session.refresh_token_expired", {
            userId: existing.userId,
        });
        return ANONYMOUS;
    }

    const user = await loadActiveUser(userId);
    if (!user) return ANONYMOUS;

    // IP / user-agent eltérés: nem blokkolunk (mobilhálózat, VPN), de naplózzuk.
    const ipChanged =
        existing.ipAddress !== null && ip !== null && existing.ipAddress !== ip;
    const uaChanged =
        existing.userAgent !== null &&
        userAgent !== null &&
        existing.userAgent !== userAgent;

    if (ipChanged || uaChanged) {
        audit(request, "session.ip_or_ua_changed", {
            userId: user.id,
            metadata: {
                previousIp: existing.ipAddress,
                previousUserAgent: existing.userAgent,
                ipChanged,
                uaChanged,
            },
        });
    }

    const { id: newTokenId, rawToken: newRefreshToken } =
        await createRefreshToken({
            userId,
            userAgent,
            ipAddress: ip,
        });
    await markRefreshTokenReplaced(existing.id, newTokenId);

    const newAccessToken = await signAccessToken({ sub: userId });
    audit(request, "session.tokens_rotated", { userId: user.id });

    return toSession(user, {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
    });
}

// ---- belépési pontok ----

export async function resolveSession(
    request: NextRequest,
    options: { fresh: boolean },
): Promise<Session> {
    const rawAccessToken = request.cookies.get(ACCESS_TOKEN_COOKIE)?.value;

    if (rawAccessToken) {
        const result = await resolveFromAccessToken(
            rawAccessToken,
            options.fresh,
        );
        if (result) return result;
    }

    const rawRefreshToken = request.cookies.get(REFRESH_TOKEN_COOKIE)?.value;
    if (!rawRefreshToken) return ANONYMOUS;

    return resolveFromRefreshToken(request, rawRefreshToken);
}

/**
 * Ha az access token érvényes, de hamarosan lejár, előre forgatunk, így a következő
 * kérés nem fut lejárt tokenre. Hiba esetén marad az eredeti (még érvényes) session.
 */
export async function maybeRotateProactively(
    request: NextRequest,
    session: Session,
): Promise<Session> {
    if (!session.authenticated || session.rotatedTokens) return session;

    const rawAccessToken = request.cookies.get(ACCESS_TOKEN_COOKIE)?.value;
    const rawRefreshToken = request.cookies.get(REFRESH_TOKEN_COOKIE)?.value;
    if (!rawAccessToken || !rawRefreshToken) return session;

    const expiresAt = await getAccessTokenExpiresAt(rawAccessToken);
    if (!expiresAt) return session;

    const secondsLeft = (expiresAt.getTime() - Date.now()) / 1000;
    if (secondsLeft > TOKEN_ROTATION_THRESHOLD_SECONDS) return session;

    const rotated = await resolveFromRefreshToken(request, rawRefreshToken);
    return rotated.authenticated ? rotated : session;
}
