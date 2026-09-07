import {
    createRefreshToken,
    findRefreshTokenByRawValue,
    markRefreshTokenReplaced,
    revokeAllRefreshTokensForUser,
} from "@/features/auth/data/refresh-token";
import { getUserById } from "@/features/auth/data/user";
import {
    ACCESS_TOKEN_COOKIE,
    ACCESS_TOKEN_TTL_SECONDS,
    AUTH_ROUTES,
    GUEST_ONLY_ROUTES,
    REFRESH_TOKEN_COOKIE,
    REFRESH_TOKEN_TTL_SECONDS,
} from "@/features/auth/lib/constants";
import { signAccessToken, verifyAccessToken } from "@/features/auth/lib/jwt";
import type {
    AccessToken,
    RefreshToken,
    UserId,
} from "@/features/auth/types/auth-index";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const PROTECTED_PREFIXES = [
    "/love",
    "/extra",
    "/inbox",
    "/cruise",
    "/community",
]; // bővítsd a saját védett route-jaiddal

const isProduction = process.env.NODE_ENV === "production";
const cookieOptions = {
    httpOnly: true,
    secure: isProduction,
    sameSite: "lax" as const,
    path: "/",
};

interface SessionResult {
    authenticated: boolean;
    /** Csak akkor van kitöltve, ha az access token lejárt, de sikerült refresh tokennel frissíteni. */
    rotatedTokens?: { accessToken: AccessToken; refreshToken: RefreshToken };
}

/**
 * A Proxy Next.js 16 óta mindig Node.js runtime-on fut (az Edge Middleware
 * deprecated), ezért itt MÁR KÖZVETLENÜL használható a Prisma Client és az
 * argon2 is — nincs szükség a régi "Edge middleware -> fetch egy Node
 * Route Handlert" kerülőútra. A rotáció/reuse-detection logika egy az
 * egyben ugyanaz, mint korábban a /api/auth/refresh route handlerben volt.
 */
async function resolveSession(request: NextRequest): Promise<SessionResult> {
    const accessToken = request.cookies.get(ACCESS_TOKEN_COOKIE)?.value;
    const payload = accessToken ? await verifyAccessToken(accessToken) : null;

    if (payload) {
        return { authenticated: true };
    }

    const rawRefreshToken = request.cookies.get(REFRESH_TOKEN_COOKIE)?.value;
    if (!rawRefreshToken) {
        return { authenticated: false };
    }

    const existing = await findRefreshTokenByRawValue(rawRefreshToken);
    if (!existing) {
        return { authenticated: false };
    }

    // Reuse-detection: lezárt (elforgatott) token újrafelhasználása -> a user
    // MINDEN munkamenetét azonnal érvénytelenítjük (session-lopás gyanúja).
    if (existing.revokedAt) {
        await revokeAllRefreshTokensForUser(existing.userId as UserId);
        return { authenticated: false };
    }

    if (existing.expiresAt < new Date()) {
        return { authenticated: false };
    }

    const user = await getUserById(existing.userId as UserId);
    if (!user) {
        return { authenticated: false };
    }

    // Rotáció: a régi tokent lezárjuk, újat állítunk ki helyette.
    const { id: newTokenId, rawToken: newRefreshToken } =
        await createRefreshToken({
            userId: user.id as UserId,
            userAgent: request.headers.get("user-agent"),
            ipAddress: request.headers.get("x-forwarded-for"),
        });
    await markRefreshTokenReplaced(existing.id, newTokenId);

    const newAccessToken = await signAccessToken({
        sub: user.id as UserId,
        email: user.email,
    });

    return {
        authenticated: true,
        rotatedTokens: {
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
        },
    };
}

function withRotatedTokens(
    response: NextResponse,
    session: SessionResult,
): NextResponse {
    if (!session.rotatedTokens) return response;

    response.cookies.set(
        ACCESS_TOKEN_COOKIE,
        session.rotatedTokens.accessToken,
        {
            ...cookieOptions,
            maxAge: ACCESS_TOKEN_TTL_SECONDS,
        },
    );
    response.cookies.set(
        REFRESH_TOKEN_COOKIE,
        session.rotatedTokens.refreshToken,
        {
            ...cookieOptions,
            maxAge: REFRESH_TOKEN_TTL_SECONDS,
        },
    );
    return response;
}

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const isGuestOnly = (GUEST_ONLY_ROUTES as readonly string[]).includes(
        pathname,
    );
    const isProtected = PROTECTED_PREFIXES.some(
        (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
    );

    if (!isGuestOnly && !isProtected) {
        return NextResponse.next();
    }

    const session = await resolveSession(request);

    if (isGuestOnly) {
        if (!session.authenticated) {
            return NextResponse.next();
        }
        // Már be van jelentkezve -> a sign-in/sign-up oldalaknak itt nincs keresnivalója.
        return withRotatedTokens(
            NextResponse.redirect(
                new URL(AUTH_ROUTES.afterSignIn, request.url),
            ),
            session,
        );
    }

    // isProtected
    if (!session.authenticated) {
        return NextResponse.redirect(new URL(AUTH_ROUTES.home, request.url));
    }

    return withRotatedTokens(NextResponse.next(), session);
}

export const config = {
    // Bővítsd a saját védett route-jaiddal (pl. "/dashboard/:path*", "/settings/:path*").
    matcher: [
        "/love/:path*",
        "/extra/:path*",
        "/inbox/:path*",
        "/cruise/:path*",
        "/community/:path*",
        "/sign-in",
        "/sign-up",
    ],
};
