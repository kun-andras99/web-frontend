"use client";

import { GUEST_TOP_MENU_ROUTES } from "@/features/(app)/navigations/navigation.config";
import { getMobilePageTitle } from "@/features/(app)/navigations/navigation.utils";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

/**
 * Leegyszerűsített változata a `useHeader`-nek: ha egy komponensnek KIZÁRÓLAG
 * a cím string kell (nincs szüksége a tab/screen objektumra, ikonokra,
 * `isScreen` flag-re), ez olcsóbb és egyértelműbb, mint a `useHeader()`
 * meghívása és csak a `.title` kiszedése belőle.
 */
export function usePageTitle(fallbackTitle = ""): string {
    const pathname = usePathname();

    return useMemo(
        () =>
            getMobilePageTitle(pathname, GUEST_TOP_MENU_ROUTES, fallbackTitle),
        [pathname, fallbackTitle],
    );
}

export function useMobileTopPageTitle(fallbackTitle = ""): string {
    const pathname = usePathname();

    return useMemo(
        () =>
            getMobilePageTitle(pathname, GUEST_TOP_MENU_ROUTES, fallbackTitle),
        [pathname, fallbackTitle],
    );
}
