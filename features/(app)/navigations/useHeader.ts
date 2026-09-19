"use client";

import { GUEST_TOP_MENU_ROUTES } from "@/features/(app)/navigations/navigation.config";
import { resolveMobileTopNavigation } from "@/features/(app)/navigations/navigation.utils";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { MobileTopResolvedNavigation } from "./navigation.types";

export interface UseHeaderResult extends MobileTopResolvedNavigation {
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
        const resolved = resolveMobileTopNavigation(
            pathname,
            GUEST_TOP_MENU_ROUTES,
        );

        return {
            ...resolved,
            pathname,
            isScreen: resolved.screen !== null,
        };
    }, [pathname]);
}
