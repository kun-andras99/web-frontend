import { audit } from "@/features/auth/lib/proxy/audit";
import {
    AUTHENTICATED_HOME,
    PROFILE_CREATE_ROUTE,
} from "@/features/auth/lib/proxy/config";
import {
    jsonError,
    proceed,
    redirectTo,
    redirectToSignIn,
    unauthorizedJson,
} from "@/features/auth/lib/proxy/http";
import {
    hasRoutePermission,
    isGuestOnlyRoute,
    isProfileCreateRoute,
    isPublicApiRoute,
    isPublicRoute,
} from "@/features/auth/lib/proxy/routes";
import type { Session } from "@/features/auth/lib/proxy/types";
import type { NextRequest, NextResponse } from "next/server";
import type { CspContext } from "@/features/security/csp/build-csp";

/**
 * API hívásoknál nem redirectelünk, hanem 401 / 403 JSON választ adunk.
 * Cross-origin hívásokhoz itt kell szigorú CORS allowlist, same-origin esetén nincs teendő.
 */
export async function handleApiRoute(
    request: NextRequest,
    session: Session,
): Promise<NextResponse> {
    const { pathname } = request.nextUrl;

    if (isPublicApiRoute(pathname)) return await proceed(request, session);

    if (!session.authenticated) {
        audit(request, "api.unauthorized");
        return unauthorizedJson();
    }

    if (!hasRoutePermission(pathname, session.user.role)) {
        audit(request, "api.forbidden", { userId: session.user.id });
        return jsonError(403, "FORBIDDEN", "Insufficient permissions");
    }

    return await proceed(request, session);
}

export async function handlePageRoute(
    request: NextRequest,
    session: Session,
    csp: CspContext,
): Promise<NextResponse> {
    const { pathname, search } = request.nextUrl;

    const guestOnly = isGuestOnlyRoute(pathname);
    const publicRoute = isPublicRoute(pathname);
    const profileCreate = isProfileCreateRoute(pathname);

    // ---- nincs bejelentkezve ----
    if (!session.authenticated) {
        if (guestOnly || publicRoute) return await proceed(request, session, csp);

        audit(request, "auth.redirect_to_signin");
        return redirectToSignIn(request, `${pathname}${search}`);
    }

    // ---- be van jelentkezve ----
    const { user, hasUserData } = session;

    if (guestOnly) {
        return redirectTo(
            request,
            hasUserData ? AUTHENTICATED_HOME : PROFILE_CREATE_ROUTE,
            session,
        );
    }

    if (publicRoute) return await proceed(request, session, csp);

    if (!hasUserData && !profileCreate) {
        audit(request, "auth.profile_incomplete", { userId: user.id });
        return redirectTo(request, PROFILE_CREATE_ROUTE, session);
    }

    if (hasUserData && profileCreate) {
        return redirectTo(request, AUTHENTICATED_HOME, session);
    }

    if (!hasUserData) {
        // a profil létrehozó oldal
        return await proceed(request, session, csp);
    }

    if (!hasRoutePermission(pathname, user.role)) {
        audit(request, "auth.access_denied", { userId: user.id });
        return redirectTo(request, AUTHENTICATED_HOME, session);
    }

    return await proceed(request, session, csp);
}
