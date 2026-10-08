import "server-only";

import { getCurrentUser } from "@/features/auth/lib/session";
import { HttpError } from "@/lib/api/route-handler";
import { UserRole } from "../../../prisma/generated/prisma";

/**
 * HttpError-ból származnak, így `withApiHandler` / `withAuth` alatt
 * automatikusan 401 / 403 válasz lesz belőlük (korábban 500 lett).
 */
export class UnauthorizedError extends HttpError {
    constructor(message = "Unauthorized") {
        super(401, message, "UNAUTHENTICATED");
        this.name = "UnauthorizedError";
    }
}

export class ForbiddenError extends HttpError {
    constructor(message = "Forbidden") {
        super(403, message, "FORBIDDEN");
        this.name = "ForbiddenError";
    }
}

/**
 * Lekéri a jelenlegi bejelentkezett felhasználót.
 *
 * Ha nincs bejelentkezve, UnauthorizedError-t dob.
 */
export async function requireAuth() {
    const user = await getCurrentUser();

    if (!user) {
        throw new UnauthorizedError();
    }

    return user;
}

/**
 * Ellenőrzi, hogy a jelenlegi felhasználó rendelkezik-e
 * a megadott szerepkörrel.
 *
 * Példák:
 *
 * await requireRole("ADMIN");
 *
 * await requireRole(["ADMIN", "MODERATOR"]);
 */
export async function requireRole(role: UserRole | readonly UserRole[]) {
    const user = await requireAuth();

    const allowedRoles = Array.isArray(role) ? role : [role];

    if (!allowedRoles.includes(user.role as UserRole)) {
        throw new ForbiddenError();
    }

    return user;
}

/**
 * Csak admin számára engedélyezett művelet.
 *
 * Rövidített helper, hogy ne kelljen mindenhol:
 *
 * await requireRole("ADMIN");
 */
export async function requireAdmin() {
    return requireRole("ADMIN");
}

/**
 * Admin vagy moderátor számára engedélyezett művelet.
 */
export async function requireModerator() {
    return requireRole(["ADMIN", "MODERATOR"]);
}
