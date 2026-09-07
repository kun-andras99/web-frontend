"use client";

import { APP_BOTTOM_BAR_ROUTES } from "@/features/navigations/navigation.config";
import type { ResolvedNavigation } from "@/features/navigations/navigation.types";
import { resolveNavigation } from "@/features/navigations/navigation.utils";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export interface UseHeaderResult extends ResolvedNavigation {
    /** A jelenlegi pathname, ahogy a Next.js szolgáltatja */
    pathname: string;
    /** true, ha egy "screen" (al-oldal) aktív, nem csak egy top-level tab */
    isScreen: boolean;
}

/**
 * Az aktuális route alapján visszaadja a headerhez (és igény esetén a bottom
 * tab bar-hoz) szükséges navigációs állapotot: aktív tab, aktív screen, cím.
 *
 * Csak Client Component-ben használható, mert `usePathname`-re épül.
 * A tényleges feloldó logika a `navigation.utils.ts`-ben van, ami React-től
 * függetlenül, önmagában is unit tesztelhető.
 */
export function useHeader(): UseHeaderResult {
    const pathname = usePathname();
    return useMemo<UseHeaderResult>(() => {
        const resolved = resolveNavigation(pathname, APP_BOTTOM_BAR_ROUTES);

        return {
            ...resolved,
            pathname,
            isScreen: resolved.screen !== null,
        };
    }, [pathname]);
}
