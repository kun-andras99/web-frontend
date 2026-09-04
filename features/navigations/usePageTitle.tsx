"use client";

import { APP_BOTTOM_BAR_ROUTES } from "@/features/navigations/navigation.config";
import { getPageTitle } from "@/features/navigations/navigation.utils";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

/**
 * Leegyszerűsített változata a `useHeader`-nek: ha egy komponensnek KIZÁRÓLAG
 * a cím string kell (nincs szüksége a tab/screen objektumra, ikonokra,
 * `isScreen` flag-re), ez olcsóbb és egyértelműbb, mint a `useHeader()`
 * meghívása és csak a `.title` kiszedése belőle.
 */
export function usePageTitle(fallbackTitle = "s"): string {
    const pathname = usePathname();

    return useMemo(
        () => getPageTitle(pathname, APP_BOTTOM_BAR_ROUTES, fallbackTitle),
        [pathname, fallbackTitle],
    );
}
