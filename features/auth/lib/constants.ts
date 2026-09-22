export const ACCESS_TOKEN_COOKIE = "access_token";
export const REFRESH_TOKEN_COOKIE = "refresh_token";

export const ACCESS_TOKEN_TTL_SECONDS = 60 * 15; // 15 perc
export const REFRESH_TOKEN_TTL_SECONDS = 60 * 60 * 24 * 30; // 30 nap

export const EMAIL_VERIFICATION_TTL_MS = 1000 * 60 * 60 * 24; // 24 óra
export const PASSWORD_RESET_TTL_MS = 1000 * 60 * 60; // 1 óra

export const AUTH_ROUTES = {
    home: "/",
    signIn: "/sign-in",
    signUp: "/sign-up",
    forgotPassword: "/forgot-password",
    resetPassword: "/reset-password",
    // Állítsd át a saját, bejelentkezés utáni landing route-odra.
    afterSignIn: "/love",
    about: "/about",
    contactUs: "/contact-us",
    ourTeam: "/our-team",
    jobs: "/jobs",
    safetyWarning: "/safety-warning",
    saferSex: "/safer-sex",
    datingSafely: "/dating-safely",
    profileLocations: "/profile-locations",
    privacy: "/privacy",
    terms: "/terms",
    cookie: "/cookie",
} as const satisfies Record<string, string>;

/** Bejelentkezve NEM elérhető route-ok — ha van érvényes session, elirányítjuk innen. */
export const GUEST_ONLY_ROUTES = [
    AUTH_ROUTES.signIn,
    AUTH_ROUTES.signUp,
] as const;

export type AuthRoute = (typeof AUTH_ROUTES)[keyof typeof AUTH_ROUTES];
