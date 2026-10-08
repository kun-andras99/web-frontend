import "server-only";

import { getCurrentUser } from "@/features/auth/lib/session";
import type { SessionUser } from "@/features/auth/types/auth-index";
import { HttpError, withApiHandler } from "@/lib/api/route-handler";
import type { UserRole } from "../../../prisma/generated/prisma";

/**
 * API route guard-ok.
 *
 * FONTOS: a `proxy.ts` matcher-e szándékosan kihagyja az `/api` útvonalakat,
 * tehát az API route-okat SEMMI nem védi automatikusan — minden handlernek
 * magának kell ellenőriznie a usert. Ehhez a `withAuth` a javasolt út.
 */

export interface AuthOptions {
    /** Ha meg van adva, csak ezekkel a szerepkörökkel engedjük át. */
    roles?: readonly UserRole[];
    /** Ha true, csak megerősített email címmel engedjük át. */
    requireVerifiedEmail?: boolean;
}

/** 401-et dob, ha nincs érvényes, aktív session. */
export async function requireUser(
    options: AuthOptions = {},
): Promise<SessionUser> {
    const user = await getCurrentUser();

    if (!user) {
        throw new HttpError(401, "Authentication required", "UNAUTHENTICATED");
    }

    if (options.requireVerifiedEmail && !user.emailVerified) {
        throw new HttpError(
            403,
            "Email address is not verified",
            "EMAIL_NOT_VERIFIED",
        );
    }

    if (options.roles && !options.roles.includes(user.role)) {
        throw new HttpError(403, "Insufficient permissions", "FORBIDDEN");
    }

    return user;
}

type AuthedHandler<TParams> = (
    request: Request,
    context: { params: Promise<TParams> },
    user: SessionUser,
) => Promise<Response>;

/**
 * `withApiHandler` + `requireUser` egyben: a handler már csak akkor fut le,
 * ha a user be van jelentkezve (és megfelel az opcióknak), és harmadik
 * paraméterként megkapja a `SessionUser`-t.
 *
 * @example
 * export const GET = withAuth(async (request, _ctx, user) => {
 *     return NextResponse.json(await listThings(user.id));
 * });
 *
 * export const DELETE = withAuth<{ id: string }>(
 *     async (_request, { params }, user) => { ... },
 *     { roles: ["ADMIN"] },
 * );
 */
export function withAuth<TParams = unknown>(
    handler: AuthedHandler<TParams>,
    options: AuthOptions = {},
) {
    return withApiHandler<TParams>(async (request, context) => {
        const user = await requireUser(options);
        const response = await handler(request, context, user);

        // User-specifikus válasz: semmilyen köztes cache ne tárolja el.
        if (!response.headers.has("Cache-Control")) {
            try {
                response.headers.set("Cache-Control", "private, no-store");
            } catch {
                // immutable headers (pl. Response.redirect) — nem gond
            }
        }

        return response;
    });
}
