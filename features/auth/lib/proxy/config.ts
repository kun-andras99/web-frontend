import { UserRole } from "../../../../prisma/generated/prisma";

export const isProduction = process.env.NODE_ENV === "production";

export const PROFILE_CREATE_ROUTE = "/profile/create";

/** Ide kerül a bejelentkezett user, ha vendég-oldalra vagy tiltott route-ra téved. Igazítsd az appodhoz. */
export const AUTHENTICATED_HOME = "/love/nearby";

/** A magasabb szerepkör örökli az alacsonyabb jogait. */
export const ROLE_HIERARCHY: Record<UserRole, number> = {
    USER: 1,
    MODERATOR: 2,
    ADMIN: 3,
};

/**
 * Csak a magasabb szintet igénylő route-ok (oldal és API egyaránt).
 * Minden más, nem nyilvános route: bármely bejelentkezett user (USER).
 */
export const ROUTE_MIN_ROLE: Readonly<Record<string, UserRole>> = {
    "/moderation": "MODERATOR",
    "/api/moderation": "MODERATOR",
    "/dashboard": "ADMIN",
    "/api/dashboard": "ADMIN",
};

/**
 * Bejelentkezés nélkül is elérhető oldalak. A vendég-oldalak (GUEST_ONLY_ROUTES,
 * pl. sign-in) itt NEM kellenek, azokat külön kezeljük. Igazítsd az appodhoz.
 */
export const PUBLIC_ROUTES: readonly string[] = [
    "/",
    "/about",
    "/contact-us",
    "/forgot-password",
    "/reset-password",
    "/our-team",
    "/jobs",
    "/safety-warning",
    "/safer-sex",
    "/dating-safely",
    "/profile-locations",
    "/terms",
    "/privacy",
    "/cookie",
];

/** Nyilvános API-k. Ha a bejelentkezés route handleren megy, add hozzá: "/api/auth". */
export const PUBLIC_API_ROUTES: readonly string[] = [
    "/api/public",
    "/api/health",
];

/**
 * Cookie beállítások:
 * - secure: productionben kötelező (HTTPS)
 * - httpOnly: XSS ellen
 * - sameSite "lax": CSRF ellen, a top-level navigáció működik
 */
export const cookieOptions = {
    httpOnly: true,
    secure: isProduction,
    sameSite: "lax" as const,
    path: "/",
};

/** Csak akkor forgatunk új tokent proaktívan, ha a régi ennyi másodpercen belül lejár. */
export const TOKEN_ROTATION_THRESHOLD_SECONDS = 60;

/**
 * Egy már lecserélt refresh token ennyi ideig még nem számít lopásnak:
 * párhuzamos kérések ugyanazzal a tokennel versenyezhetnek.
 */
export const REFRESH_REUSE_GRACE_MS = 15_000;

/** Példányszintű session cache. Rövid, mert a szerepkör / státusz változása ennyit késik. */
export const SESSION_CACHE_TTL_MS = 30_000;
export const SESSION_CACHE_MAX_ENTRIES = 1000;
