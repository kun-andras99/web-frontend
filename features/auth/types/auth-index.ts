import { UserRole } from "../../../prisma/generated/prisma";

/**
 * Nominal ("branded") típus-helper. Cél: két, egyébként strukturálisan azonos
 * `string` (pl. egy access token és egy refresh token) ne legyen véletlenül
 * felcserélhető fordítási időben, csak azért mert mindkettő `string`.
 */
export type Brand<T, B extends string> = T & { readonly __brand: B };

export type UserId = Brand<string, "UserId">;
export type AccessToken = Brand<string, "AccessToken">;
export type RefreshToken = Brand<string, "RefreshToken">;

export function toUserId(value: string): UserId {
    return value as UserId;
}

export interface AccessTokenPayload {
    /**
     * Az access token kizárólag a user azonosítására szolgál.
     * Emailt, role-t és egyéb useradatot nem tárolunk benne.
     */
    sub: UserId;
}

export interface SessionUser {
    id: UserId;
    email: string;
    username: string;
    emailVerified: boolean;
    role: UserRole;
}

export interface CurrentUserDTO {
    id: UserId;
    email: string;
    username: string;
    emailVerified: boolean;
    role: UserRole;
}

export interface AccessTokenPayload {
    sub: UserId;
}

/**
 * Minden Server Action ugyanezt a diszkriminált uniót adja vissza, így a
 * kliens sosem bizonytalan `null`/`undefined` ellenőrzésekre van utalva —
 * a `status` mezőn keresztül a TypeScript maga szűkíti a típust.
 */
export type ActionState<
    TFields extends Record<string, unknown> = Record<string, never>,
> =
    | { status: "idle"; message?: string; redirectTo?: string }
    | {
          status: "error";
          message: string;
          fieldErrors?: Partial<Record<keyof TFields, string[]>>;
          redirectTo?: string;
      }
    | { status: "success"; message?: string; redirectTo?: string };

export type SignInFields = { identifier: string; password: string };
export type SignUpFields = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
};
export type ForgotPasswordFields = { email: string };
export type ResetPasswordFields = { password: string; confirmPassword: string };
