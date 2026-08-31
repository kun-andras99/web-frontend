// lib/route-hierarchy.ts
type RoutePattern = string; // pl. "/blogs/[slug]"

// fix, strukturális szülő-gyerek kapcsolatok
const routeHierarchy: Record<RoutePattern, RoutePattern> = {
    "/blogs/[slug]": "/blogs",
    "/blogs/[slug]/comments/[commentId]": "/blogs/[slug]", // nested dinamikus is működik
    "/settings/user": "/settings",
    "/settings/security": "/settings",
    "/my-profile": "/",
    "/my-profile/edit": "/my-profile",
};

// olyan route-ok, amik bárhonnan elérhetők (pl. drawerből),
// ezeknél nincs egyetlen fix szülő -> a valós history dönt
const dynamicEntryRoutes = new Set<string>(["/settings"]);

const DEFAULT_FALLBACK = "/";
// pattern -> regex + kinyert paraméter nevek
function patternToRegex(pattern: string) {
    const paramNames: string[] = [];
    const regexStr = pattern
        .split("/")
        .filter(Boolean)
        .map((segment) => {
            const match = segment.match(/^\[(\.\.\.)?(.+)\]$/);
            if (match) {
                paramNames.push(match[2]);
                return match[1] ? "(.+)" : "([^/]+)"; // [...slug] vs [slug]
            }
            return segment.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        })
        .join("/");
    return { regex: new RegExp(`^/${regexStr}$`), paramNames };
}

function matchPattern(pathname: string, pattern: string) {
    const { regex, paramNames } = patternToRegex(pattern);
    const match = pathname.match(regex);
    if (!match) return null;
    const params: Record<string, string> = {};
    paramNames.forEach((name, i) => (params[name] = match[i + 1]));
    return params;
}

function fillPattern(pattern: string, params: Record<string, string>) {
    return pattern
        .split("/")
        .map((seg) => {
            const match = seg.match(/^\[(\.\.\.)?(.+)\]$/);
            return match ? (params[match[2]] ?? seg) : seg;
        })
        .join("/");
}

// specifikusabb (kevesebb dinamikus szegmens) mintákat nézzük előbb
const sortedPatterns = Object.keys(routeHierarchy).sort((a, b) => {
    const aDyn = (a.match(/\[/g) || []).length;
    const bDyn = (b.match(/\[/g) || []).length;
    return aDyn !== bDyn ? aDyn - bDyn : b.length - a.length;
});

export function isDynamicEntryRoute(pathname: string): boolean {
    return [...dynamicEntryRoutes].some(
        (p) => matchPattern(pathname, p) !== null,
    );
}

export function getParentRoute(pathname: string): string {
    for (const pattern of sortedPatterns) {
        const params = matchPattern(pathname, pattern);
        if (params) return fillPattern(routeHierarchy[pattern], params);
    }

    const segments = pathname.split("/").filter(Boolean);
    segments.pop();
    return segments.length ? `/${segments.join("/")}` : DEFAULT_FALLBACK;
}

export { DEFAULT_FALLBACK };
