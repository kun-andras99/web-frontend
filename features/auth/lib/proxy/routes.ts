import { GUEST_ONLY_ROUTES } from "@/features/auth/lib/constants";
import {
    PROFILE_CREATE_ROUTE,
    PUBLIC_API_ROUTES,
    PUBLIC_ROUTES,
    ROLE_HIERARCHY,
    ROUTE_MIN_ROLE,
} from "./config";
import { UserRole } from "../../../../prisma/generated/prisma";

function matchesRoute(pathname: string, route: string): boolean {
    // a "/" csak pontos egyezésnél számít, különben mindent lefedne
    if (route === "/") return pathname === "/";
    return pathname === route || pathname.startsWith(`${route}/`);
}

const matchesAny = (pathname: string, routes: readonly string[]) =>
    routes.some((route) => matchesRoute(pathname, route));

/** A leghosszabb egyező szabály nyer. */
export function getRouteMinRole(pathname: string): UserRole | null {
    let matched: string | null = null;

    for (const route of Object.keys(ROUTE_MIN_ROLE)) {
        if (
            matchesRoute(pathname, route) &&
            (matched === null || route.length > matched.length)
        ) {
            matched = route;
        }
    }
    return matched ? (ROUTE_MIN_ROLE[matched] ?? null) : null;
}

/** Ahol nincs külön szabály, ott bármely bejelentkezett user (USER) jogosult. */
export function hasRoutePermission(pathname: string, role: UserRole): boolean {
    const minRole = getRouteMinRole(pathname) ?? "USER";
    return ROLE_HIERARCHY[role] >= ROLE_HIERARCHY[minRole];
}

/** Az admin / moderátor route-oknál mindig friss adatot kérünk a DB-ből (nincs cache). */
export function requiresFreshSession(pathname: string): boolean {
    const minRole = getRouteMinRole(pathname);
    return minRole !== null && minRole !== "USER";
}

export const isGuestOnlyRoute = (pathname: string) =>
    matchesAny(pathname, GUEST_ONLY_ROUTES as readonly string[]);

export const isPublicRoute = (pathname: string) =>
    matchesAny(pathname, PUBLIC_ROUTES);

export const isProfileCreateRoute = (pathname: string) =>
    matchesRoute(pathname, PROFILE_CREATE_ROUTE);

export const isApiRoute = (pathname: string) =>
    pathname === "/api" || pathname.startsWith("/api/");

export const isPublicApiRoute = (pathname: string) =>
    matchesAny(pathname, PUBLIC_API_ROUTES);
