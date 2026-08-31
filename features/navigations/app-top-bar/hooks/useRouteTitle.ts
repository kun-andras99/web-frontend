"use client";

import { appBottomBarRoutes } from "@/features/navigations/app-bottom-bar/constants/app-bottom-bar.constants";
/**
 * A jelenlegi bottom-nav szekció (love/cruise/extra/inbox/community) címét
 * adja vissza az appBottomBarRoutes configból — így a fejléc címe és a
 * bottom bar címkéje mindig ugyanabból az egy helyről származik, nem
 * duplikálva a szöveget.
 */

import { usePathname } from "next/navigation";
import { useMemo } from "react";

export function useRouteTitle(): string {
    const pathname = usePathname();

    return useMemo(() => {
        const activeRoute = appBottomBarRoutes.find(
            (route) =>
                pathname === route.url || pathname.startsWith(`${route.url}/`),
        );

        return activeRoute?.title ?? "";
    }, [pathname]);
}
