import {
    createRefreshToken,
    findRefreshTokenByRawValue,
    markRefreshTokenReplaced,
    revokeAllRefreshTokensForUser,
} from "@/features/auth/data/refresh-token";
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
    SessionUser,
    UserId,
} from "@/features/auth/types/auth-index";
import { getUserById } from "@/features/user/repositories/user";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { UserRole } from "./prisma/generated/prisma";

const ROUTE_PERMISSIONS = {
    "/love": ["USER", "MODERATOR", "ADMIN"],
    "/extra": ["USER", "MODERATOR", "ADMIN"],
    "/inbox": ["USER", "MODERATOR", "ADMIN"],
    "/cruise": ["USER", "MODERATOR", "ADMIN"],
    "/community": ["USER", "MODERATOR", "ADMIN"],

    "/me": ["USER", "MODERATOR", "ADMIN"],
    "/map": ["USER", "MODERATOR", "ADMIN"],
    "/travel": ["USER", "MODERATOR", "ADMIN"],
    "/blog": ["USER", "MODERATOR", "ADMIN"],
    "/group": ["USER", "MODERATOR", "ADMIN"],
    "/settings": ["USER", "MODERATOR", "ADMIN"],

    "/moderation": ["MODERATOR", "ADMIN"],
    "/dashboard": ["ADMIN"],
} as const satisfies Record<string, readonly UserRole[]>;

// cookie
const isProduction = process.env.NODE_ENV === "production";
const cookieOptions = {
    httpOnly: true,
    secure: isProduction,
    sameSite: "lax" as const,
    path: "/",
};

interface RotatedTokens {
    accesToken: AccessToken;
    refreshToken: RefreshToken;
}
interface SessionResult {
    authenticated: boolean;
    user?: SessionUser;
    rotatedTokens?: RotatedTokens;
}

/**
 * A Proxy Next.js 16 óta mindig Node.js runtime-on fut (az Edge Middleware
 * deprecated), ezért itt MÁR KÖZVETLENÜL használható a Prisma Client és az
 * argon2 is — nincs szükség a régi "Edge middleware -> fetch egy Node
 * Route Handlert" kerülőútra. A rotáció/reuse-detection logika egy az
 * egyben ugyanaz, mint korábban a /api/auth/refresh route handlerben volt.
 */
/**
 * ---------------------------------------------------------------------------
 * ROUTE PERMISSION HELPERS
 * ---------------------------------------------------------------------------
 */

/**
 * Megkeresi az adott pathname-hez tartozó permission szabályt.
 *
 * A leghosszabb egyező prefix nyer.
 *
 * Például:
 *
 * /community
 * /community/groups
 * /community/groups/123
 *
 * mind a "/community" szabály alá esnek,
 * hacsak később nincs egy konkrétabb szabály.
 */
function getRoutePermissions(pathname: string): readonly UserRole[] | null {
    let matchedRoute: string | null = null;

    for (const route of Object.keys(ROUTE_PERMISSIONS)) {
        const matches = pathname === route || pathname.startsWith(`${route}/`);

        if (!matches) {
            continue;
        }

        if (matchedRoute === null || route.length > matchedRoute.length) {
            matchedRoute = route;
        }
    }

    if (!matchedRoute) {
        return null;
    }

    return ROUTE_PERMISSIONS[matchedRoute as keyof typeof ROUTE_PERMISSIONS];
}

/**
 * Megnézi, hogy az adott user role-ja hozzáférhet-e
 * az adott route-hoz.
 */
function hasRoutePermission(pathname: string, role: UserRole): boolean {
    const permissions = getRoutePermissions(pathname);

    if (!permissions) {
        return false;
    }

    return permissions.includes(role);
}

/**
 * ---------------------------------------------------------------------------
 * ROUTE HELPERS
 * ---------------------------------------------------------------------------
 */

function isGuestOnlyRoute(pathname: string): boolean {
    return (GUEST_ONLY_ROUTES as readonly string[]).some(
        (route) => pathname === route || pathname.startsWith(`${route}/`),
    );
}

function isProtectedRoute(pathname: string): boolean {
    return getRoutePermissions(pathname) !== null;
}

function getClientIp(request: NextRequest): string | null {
    const forwardedFor = request.headers.get("x-forwarded-for");

    if (forwardedFor) {
        return forwardedFor.split(",")[0]?.trim() ?? null;
    }

    return request.headers.get("x-real-ip") ?? null;
}

/**
 * ---------------------------------------------------------------------------
 * SESSION RESOLUTION
 * ---------------------------------------------------------------------------
 *
 * A session feloldásának sorrendje:
 *
 * 1. Access token keresése
 * 2. Access token cryptographic verification
 * 3. User lekérése DB-ből
 * 4. Ha access token nem használható:
 *      → refresh token
 * 5. Refresh token DB ellenőrzése
 * 6. Reuse detection
 * 7. Lejárat ellenőrzése
 * 8. User lekérése DB-ből
 * 9. Refresh token rotáció
 * 10. Új access token
 *
 * A role MINDIG a DB-ből érkezik.
 */

async function resolveSession(request: NextRequest): Promise<SessionResult> {
    const rawAccessToken = request.cookies.get(ACCESS_TOKEN_COOKIE)?.value;

    if (rawAccessToken) {
        const payload = await verifyAccessToken(rawAccessToken);

        if (payload) {
            /**
             * A JWT csak a user ID-t bizonyítja.
             *
             * A user aktuális állapotát és role-ját
             * a DB-ből kérjük le.
             */
            const user = await getUserById(payload.sub);

            if (user) {
                return {
                    authenticated: true,

                    user: {
                        id: user.id as UserId,
                        email: user.email,
                        username: user.username,
                        emailVerified: user.emailVerified !== null,
                        role: user.role,
                    },
                };
            }
        }
    }

    const rawRefreshToken = request.cookies.get(REFRESH_TOKEN_COOKIE)?.value;

    if (!rawRefreshToken) {
        return {
            authenticated: false,
        };
    }

    const existing = await findRefreshTokenByRawValue(rawRefreshToken);

    if (!existing) {
        return {
            authenticated: false,
        };
    }

    if (existing.revokedAt) {
        await revokeAllRefreshTokensForUser(existing.userId as UserId);

        return {
            authenticated: false,
        };
    }

    if (existing.expiresAt <= new Date()) {
        return {
            authenticated: false,
        };
    }

    const user = await getUserById(existing.userId as UserId);

    if (!user) {
        return {
            authenticated: false,
        };
    }

    const { id: newTokenId, rawToken: newRefreshToken } =
        await createRefreshToken({
            userId: user.id as UserId,
            userAgent: request.headers.get("user-agent"),
            ipAddress: getClientIp(request),
        });

    await markRefreshTokenReplaced(existing.id, newTokenId);

    const newAccessToken = await signAccessToken({
        sub: user.id as UserId,
    });

    return {
        authenticated: true,

        user: {
            id: user.id as UserId,
            email: user.email,
            username: user.username,
            emailVerified: user.emailVerified !== null,
            role: user.role,
        },

        rotatedTokens: {
            accesToken: newAccessToken,
            refreshToken: newRefreshToken,
        },
    };
}

function withRotatedTokens(
    response: NextResponse,
    session: SessionResult,
): NextResponse {
    if (!session.rotatedTokens) {
        return response;
    }

    response.cookies.set(
        ACCESS_TOKEN_COOKIE,
        session.rotatedTokens.accesToken,
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

    const guestOnly = isGuestOnlyRoute(pathname);

    const protectedRoute = isProtectedRoute(pathname);

    /**
     * Nem auth-protected route.
     *
     * Nem kell sessiont feloldani.
     */
    if (!guestOnly && !protectedRoute) {
        return NextResponse.next();
    }

    const session = await resolveSession(request);

    if (guestOnly) {
        if (!session.authenticated) {
            return NextResponse.next();
        }

        const response = NextResponse.redirect(
            new URL(AUTH_ROUTES.afterSignIn, request.url),
        );

        return withRotatedTokens(response, session);
    }

    if (!session.authenticated || !session.user) {
        const signInUrl = new URL(AUTH_ROUTES.signIn, request.url);

        signInUrl.searchParams.set(
            "callbackUrl",
            `${pathname}${request.nextUrl.search}`,
        );

        return NextResponse.redirect(signInUrl);
    }

    const allowed = hasRoutePermission(pathname, session.user.role);

    if (!allowed) {
        /**
         * Ha később lesz /forbidden oldalad,
         * ide érdemes majd arra redirectelni.
         */
        const response = NextResponse.redirect(
            new URL(AUTH_ROUTES.afterSignIn, request.url),
        );

        return withRotatedTokens(response, session);
    }

    return withRotatedTokens(NextResponse.next(), session);
}

export const config = {
    matcher: [
        "/love/:path*",
        "/extra/:path*",
        "/inbox/:path*",
        "/cruise/:path*",
        "/community/:path*",

        "/me/:path*",
        "/map/:path*",
        "/travel/:path*",
        "/group/:path*",
        "/blog/:path*",
        "/settings/:path*",

        "/moderation/:path*",
        "/dashboard/:path*",

        "/sign-in",
        "/sign-up",
    ],
};
