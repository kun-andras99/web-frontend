import {
    createRefreshToken,
    findRefreshTokenByRawValue,
    markRefreshTokenReplaced,
    revokeAllRefreshTokensForUser,
} from "@/features/auth/data/refresh-token";
import {
    ACCESS_TOKEN_COOKIE,
    ACCESS_TOKEN_TTL_SECONDS,
    REFRESH_TOKEN_COOKIE,
    REFRESH_TOKEN_TTL_SECONDS,
} from "@/features/auth/lib/constants";
import { signAccessToken } from "@/features/auth/lib/jwt";
import type { UserId } from "@/features/auth/types/auth-index";
import { getUserById } from "@/features/user/repositories/user";
import { NextRequest, NextResponse } from "next/server";

const isProduction = process.env.NODE_ENV === "production";

const baseCookieOptions = {
    httpOnly: true,
    secure: isProduction,
    sameSite: "lax" as const,
    path: "/",
};

/**
 * Ez a route handler NODE runtime-on fut (ez az alapértelmezett Route Handlereknél),
 * ezért itt biztonságosan használható a Prisma Client és argon2 — szemben a
 * middleware-rel, ami Edge runtime-on fut és ezeket nem támogatja.
 *
 * A middleware ezt a végpontot egy sima `fetch`-csel hívja meg, amikor egy
 * lejárt access tokent észlel — így a DB-hívást igénylő logika mindig
 * Node runtime-on marad, az útvonalvédelem gyors ellenőrzése pedig Edge-en.
 */
export async function POST(request: NextRequest) {
    const rawRefreshToken = request.cookies.get(REFRESH_TOKEN_COOKIE)?.value;

    if (!rawRefreshToken) {
        return NextResponse.json(
            { error: "missing_refresh_token" },
            { status: 401 },
        );
    }

    const existing = await findRefreshTokenByRawValue(rawRefreshToken);

    if (!existing) {
        return NextResponse.json(
            { error: "invalid_refresh_token" },
            { status: 401 },
        );
    }

    // Reuse-detection: ha egy már lezárt (elforgatott) tokent próbálnak újra
    // felhasználni, az session-lopásra utalhat -> a user MINDEN munkamenetét
    // azonnal érvénytelenítjük, és töröljük a jelenlegi cookie-kat is.
    if (existing.revokedAt) {
        await revokeAllRefreshTokensForUser(existing.userId as UserId);
        const response = NextResponse.json(
            { error: "refresh_token_reused" },
            { status: 401 },
        );
        response.cookies.delete(ACCESS_TOKEN_COOKIE);
        response.cookies.delete(REFRESH_TOKEN_COOKIE);
        return response;
    }

    if (existing.expiresAt < new Date()) {
        return NextResponse.json(
            { error: "expired_refresh_token" },
            { status: 401 },
        );
    }

    const user = await getUserById(existing.userId as UserId);
    if (!user) {
        return NextResponse.json({ error: "user_not_found" }, { status: 401 });
    }

    // Rotáció: a régi tokent lezárjuk, és egy vadonatúj tokent állítunk ki helyette.
    const { id: newTokenId, rawToken: newRefreshToken } =
        await createRefreshToken({
            userId: user.id as UserId,
            userAgent: request.headers.get("user-agent"),
            ipAddress: request.headers.get("x-forwarded-for"),
        });
    await markRefreshTokenReplaced(existing.id, newTokenId);

    const accessToken = await signAccessToken({
        sub: user.id as UserId,
    });

    const response = NextResponse.json({ success: true });
    response.cookies.set(ACCESS_TOKEN_COOKIE, accessToken, {
        ...baseCookieOptions,
        maxAge: ACCESS_TOKEN_TTL_SECONDS,
    });
    response.cookies.set(REFRESH_TOKEN_COOKIE, newRefreshToken, {
        ...baseCookieOptions,
        maxAge: REFRESH_TOKEN_TTL_SECONDS,
    });

    return response;
}
