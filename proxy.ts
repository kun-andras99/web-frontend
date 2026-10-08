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

const PROFILE_CREATE_ROUTE = "/profile/create";

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
    hasUserData?: boolean | undefined;
    rotatedTokens?: RotatedTokens;
}

/**
 * ---------------------------------------------------------------------------
 * ROUTE PERMISSION HELPERS
 * ---------------------------------------------------------------------------
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

function isProfileCreateRoute(pathname: string): boolean {
    return (
        pathname === PROFILE_CREATE_ROUTE ||
        pathname.startsWith(`${PROFILE_CREATE_ROUTE}/`)
    );
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
 * USER PROFILE STATUS
 * ---------------------------------------------------------------------------
 */

/**
 * ---------------------------------------------------------------------------
 * SESSION RESOLUTION
 * ---------------------------------------------------------------------------
 */

async function resolveSession(request: NextRequest): Promise<SessionResult> {
    const rawAccessToken = request.cookies.get(ACCESS_TOKEN_COOKIE)?.value;

    if (rawAccessToken) {
        const payload = await verifyAccessToken(rawAccessToken);

        if (payload) {
            const user = await getUserById(payload.sub);

            if (user && user.status === "ACTIVE") {
                return {
                    authenticated: true,

                    user: {
                        id: user.id as UserId,
                        email: user.email,
                        username: user.username,
                        emailVerified: user.emailVerified !== null,
                        role: user.role,
                    },

                    hasUserData: user.userData !== null,
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

    if (!user || user.status !== "ACTIVE") {
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

        hasUserData: user.userData !== null,

        rotatedTokens: {
            accesToken: newAccessToken,
            refreshToken: newRefreshToken,
        },
    };
}

/**
 * ---------------------------------------------------------------------------
 * ROTATED TOKENS
 * ---------------------------------------------------------------------------
 */

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

/**
 * ---------------------------------------------------------------------------
 * PROXY
 * ---------------------------------------------------------------------------
 */

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const guestOnly = isGuestOnlyRoute(pathname);

    const protectedRoute = isProtectedRoute(pathname);

    const profileCreate = isProfileCreateRoute(pathname);

    const session = await resolveSession(request);

    /**
     * -----------------------------------------------------------------------
     * NOT AUTHENTICATED
     * -----------------------------------------------------------------------
     */

    if (!session.authenticated || !session.user) {
        if (profileCreate) {
            const signInUrl = new URL(AUTH_ROUTES.signIn, request.url);

            signInUrl.searchParams.set("callbackUrl", PROFILE_CREATE_ROUTE);

            return NextResponse.redirect(signInUrl);
        }

        if (guestOnly) {
            return withRotatedTokens(NextResponse.next(), session);
        }

        if (!protectedRoute) {
            return withRotatedTokens(NextResponse.next(), session);
        }

        const signInUrl = new URL(AUTH_ROUTES.signIn, request.url);

        signInUrl.searchParams.set(
            "callbackUrl",
            `${pathname}${request.nextUrl.search}`,
        );

        return NextResponse.redirect(signInUrl);
    }

    /**
     * -----------------------------------------------------------------------
     * AUTHENTICATED BUT PROFILE IS NOT CREATED
     * -----------------------------------------------------------------------
     */

    if (!session.hasUserData) {
        if (!profileCreate) {
            const response = NextResponse.redirect(
                new URL(PROFILE_CREATE_ROUTE, request.url),
            );

            return withRotatedTokens(response, session);
        }

        return withRotatedTokens(NextResponse.next(), session);
    }

    /**
     * -----------------------------------------------------------------------
     * AUTHENTICATED + PROFILE COMPLETED
     * -----------------------------------------------------------------------
     */

    if (profileCreate) {
        const response = NextResponse.redirect(
            new URL(AUTH_ROUTES.afterSignIn, request.url),
        );

        return withRotatedTokens(response, session);
    }

    /**
     * Guest-only route:
     * /sign-in
     * /sign-up
     */
    if (guestOnly) {
        const response = NextResponse.redirect(
            new URL(AUTH_ROUTES.afterSignIn, request.url),
        );

        return withRotatedTokens(response, session);
    }

    /**
     * -----------------------------------------------------------------------
     * NORMAL ROLE PERMISSION
     * -----------------------------------------------------------------------
     */

    if (protectedRoute) {
        const allowed = hasRoutePermission(pathname, session.user.role);

        if (!allowed) {
            const response = NextResponse.redirect(
                new URL(AUTH_ROUTES.afterSignIn, request.url),
            );

            return withRotatedTokens(response, session);
        }
    }

    return withRotatedTokens(NextResponse.next(), session);
}

/**
 * ---------------------------------------------------------------------------
 * MATCHER
 * ---------------------------------------------------------------------------
 *
 * A profile completion nélküli authenticated user
 * ténylegesen csak a /profile/create oldalt érheti el.
 *
 * Ezért nem csak a protected route-okat figyeljük,
 * hanem az összes page route-ot.
 */
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
