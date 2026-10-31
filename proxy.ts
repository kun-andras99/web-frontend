import {
    handleApiRoute,
    handlePageRoute,
} from "@/features/auth/lib/proxy/handlers";
import {
    isApiRoute,
    requiresFreshSession,
} from "@/features/auth/lib/proxy/routes";
import {
    maybeRotateProactively,
    resolveSession,
} from "@/features/auth/lib/proxy/session";
import { createCsp } from "@/features/security/csp/build-csp";
import type { NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    let session = await resolveSession(request, {
        fresh: requiresFreshSession(pathname),
    });
    session = await maybeRotateProactively(request, session);

    return isApiRoute(pathname)
        ? handleApiRoute(request, session)
        : handlePageRoute(request, session, createCsp());
}

export const config = {
    // a statikus fájlokra nem futtatjuk (a .css azért kell, mert a global-error stíluslapja a public mappában van)
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml|woff2?|css)$).*)",
    ],
};
