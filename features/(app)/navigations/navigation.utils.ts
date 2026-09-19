import type {
    MobileTopNavigationConfig,
    MobileTopNavigationScreen,
    MobileTopNavigationTab,
    MobileTopResolvedNavigation,
} from "@/features/(app)/navigations/navigation.types";

/**
 * Levágja a trailing slash-t és a query stringet / hash-t, hogy az
 * összehasonlítás konzisztens legyen:
 * "/cruise/", "/cruise?x=1", "/cruise#top" -> "/cruise"
 */
export function normalizePath(path: string): string {
    const withoutHash = path.split("#")[0] ?? "";
    const withoutQuery = withoutHash.split("?")[0] ?? "";

    if (withoutQuery.length > 1 && withoutQuery.endsWith("/")) {
        return withoutQuery.slice(0, -1);
    }

    return withoutQuery || "/";
}

/**
 * Megmondja, hogy egy adott route-minta (pl. "/cruise") aktívnak számít-e
 * a jelenlegi pathname alapján. Beágyazott / dinamikus route-okat is támogat:
 * minta "/cruise", pathname "/cruise/123" -> true.
 */
export function isActivePath(pattern: string, pathname: string): boolean {
    const normalizedPattern = normalizePath(pattern);
    const normalizedPathname = normalizePath(pathname);

    if (normalizedPattern === normalizedPathname) {
        return true;
    }

    return normalizedPathname.startsWith(`${normalizedPattern}/`);
}

/**
 * Egy screen `url` mezője csak a saját szegmens (pl. "/visitors"), NEM a teljes,
 * ténylegesen böngészőben megjelenő route. A tényleges route a szülő tab
 * route-jából (`fromUrl`) és ebből a szegmensből áll össze:
 * "/cruise" + "/visitors" -> "/cruise/visitors".
 *
 * Ezt használd a screen-hez tartozó `<Link href>` felépítéséhez is, hogy ne
 * kelljen sehol kézzel duplikálni a "/cruise" prefixet.
 */
export function getScreenFullPath(screen: MobileTopNavigationScreen): string {
    const base = screen.fromUrl.endsWith("/")
        ? screen.fromUrl.slice(0, -1)
        : screen.fromUrl;
    const segment = screen.url.startsWith("/") ? screen.url : `/${screen.url}`;

    return `${base}${segment}`;
}

export function getMobileScreenFullPath(
    screen: MobileTopNavigationScreen,
): string {
    const fromUrl = screen.fromUrl ?? "";
    const url = screen.url ?? "";

    const base = fromUrl.endsWith("/") ? fromUrl.slice(0, -1) : fromUrl;

    const segment = url ? (url.startsWith("/") ? url : `/${url}`) : "";

    return `${base}${segment}` || "/";
}

/**
 * Megkeresi az aktuális pathname alapján az aktív "screen"-t (al-oldalt), és a
 * hozzá tartozó szülő tab-ot. A screen-eket priorizáljuk a tab-okkal szemben,
 * mert azok a specifikusabb route-ok. Több egyező screen esetén a leghosszabb
 * (legspecifikusabb) url nyer.
 */
export function resolveNavigation(
    pathname: string,
    navigation: MobileTopNavigationConfig,
): MobileTopResolvedNavigation {
    const screenMatch = findMatchingMobileScreen(pathname, navigation);

    if (screenMatch) {
        return {
            tab: screenMatch.tab,
            screen: screenMatch.screen,
            title: screenMatch.screen.title,
        };
    }

    const tabMatch = findMatchingMobileTab(pathname, navigation);

    return {
        tab: tabMatch,
        screen: null,
        title: tabMatch?.title ?? null,
    };
}

export function resolveMobileTopNavigation(
    pathname: string,
    navigation: MobileTopNavigationConfig,
): MobileTopResolvedNavigation {
    const screenMatch = findMatchingMobileScreen(pathname, navigation);

    if (screenMatch) {
        return {
            tab: screenMatch.tab,
            screen: screenMatch.screen,
            title: screenMatch.screen.title,
        };
    }

    const tabMatch = findMatchingMobileTab(pathname, navigation);

    return {
        tab: tabMatch,
        screen: null,
        title: tabMatch?.title ?? null,
    };
}

function findMatchingMobileScreen(
    pathname: string,
    navigation: MobileTopNavigationConfig,
): {
    tab: MobileTopNavigationTab;
    screen: MobileTopNavigationScreen;
} | null {
    let best: {
        tab: MobileTopNavigationTab;
        screen: MobileTopNavigationScreen;
    } | null = null;

    let bestScore = -1;

    for (const tab of navigation) {
        for (const screen of tab.screens ?? []) {
            const screenFullPath = getMobileScreenFullPath(screen);

            if (!isActivePath(screenFullPath, pathname)) {
                continue;
            }

            const score = normalizePath(screenFullPath).length;

            if (score > bestScore) {
                bestScore = score;

                const parentTab =
                    navigation.find(
                        (t) =>
                            normalizePath(t.url) ===
                            normalizePath(screen.fromUrl ?? ""),
                    ) ?? tab;

                best = {
                    tab: parentTab,
                    screen,
                };
            }
        }
    }

    return best;
}

function findMatchingMobileTab(
    pathname: string,
    navigation: MobileTopNavigationConfig,
): MobileTopNavigationTab | null {
    let best: MobileTopNavigationTab | null = null;

    let bestScore = -1;

    for (const tab of navigation) {
        if (!isActivePath(tab.url, pathname)) {
            continue;
        }

        const score = normalizePath(tab.url).length;

        if (score > bestScore) {
            bestScore = score;
            best = tab;
        }
    }

    return best;
}

export function getMobilePageTitle(
    pathname: string,
    navigation: MobileTopNavigationConfig,
    fallbackTitle = "",
): string {
    return (
        resolveMobileTopNavigation(pathname, navigation).title ?? fallbackTitle
    );
}
