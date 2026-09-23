import { getCurrentUser } from "@/features/auth/lib/session";
import { UserRole } from "../../../prisma/generated/prisma";

export class UnauthorizedError extends Error {
    constructor(message = "Unauthorized") {
        super(message);
        this.name = "UnauthorizedError";
    }
}

export class ForbiddenError extends Error {
    constructor(message = "Forbidden") {
        super(message);
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
