export const ACCESS_TOKEN_COOKIE = "access_token";
export const REFRESH_TOKEN_COOKIE = "refresh_token";

export const ACCESS_TOKEN_TTL_SECONDS = 60 * 15; // 15 perc
export const REFRESH_TOKEN_TTL_SECONDS = 60 * 60 * 24 * 30; // 30 nap

export const EMAIL_VERIFICATION_TTL_MS = 1000 * 60 * 60 * 24; // 24 óra
export const PASSWORD_RESET_TTL_MS = 1000 * 60 * 60; // 1 óra

export const AUTH_ROUTES = {
    signIn: "/sign-in",
    signUp: "/sign-up",
    // Állítsd át a saját, bejelentkezés utáni landing route-odra.
    afterSignIn: "/love",
} as const satisfies Record<string, string>;

export const GUEST_ROUTES = {
    forgotPassword: "/forgot-password",
    resetPassword: "/reset-password",
    home: "/",
    about: "/about",
    loveWall: "/love-wall",
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

export const AUTHED_ROUTES = {
    travel: "/travel",
    map: "/map",

    nearby: "/love/nearby",
    match: "/love/match",
    eyeCandy: "/love/eye-candy",

    auction: "/extra/auction",
    rightNow: "/extra/right-now",
    hotOffers: "/extra/hot-offers",

    groups: "/community/groups",
    city: "/community/city",
    blogs: "/community/blogs",

    profileSettings: "/settings/profile",
    manageUsers: "/settings/manage-users",
    customizeSettings: "/settings/customize",
} as const satisfies Record<string, string>;

/** Bejelentkezve NEM elérhető route-ok — ha van érvényes session, elirányítjuk innen. */
export const GUEST_ONLY_ROUTES = [
    AUTH_ROUTES.signIn,
    AUTH_ROUTES.signUp,
    GUEST_ROUTES.forgotPassword,
    GUEST_ROUTES.home,
] as const;

export type AuthRoute = (typeof AUTH_ROUTES)[keyof typeof AUTH_ROUTES];
