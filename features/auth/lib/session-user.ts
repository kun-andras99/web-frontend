import type { SessionUser, UserId } from "@/features/auth/types/auth-index";
import type { getUserById } from "@/features/user/repositories/user";

export type UserRecord = NonNullable<Awaited<ReturnType<typeof getUserById>>>;

/** Tiltott / inaktív fiók nem kap sessiont. A proxy és a szerver komponensek ugyanezt használják. */
export const isActiveUser = (user: Pick<UserRecord, "status">): boolean =>
    user.status === "ACTIVE";

export function toSessionUser(user: UserRecord): SessionUser {
    return {
        id: user.id as UserId,
        email: user.email,
        username: user.username,
        role: user.role,
        emailVerified: user.emailVerified !== null,
    };
}
