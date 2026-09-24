"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const NAVIGATION_HISTORY_KEY = "app-navigation-history";
export const NAVIGATION_HISTORY_EVENT = "app-navigation-history-change";

export interface NavigationHistory {
    previousPath: string | null;
    currentPath: string;
}

export default function NavigationHistoryProvider() {
    const pathname = usePathname();

    useEffect(() => {
        const stored = sessionStorage.getItem(NAVIGATION_HISTORY_KEY);

        let history: NavigationHistory;

        try {
            history = stored
                ? JSON.parse(stored)
                : {
                      previousPath: null,
                      currentPath: pathname,
                  };
        } catch {
            history = {
                previousPath: null,
                currentPath: pathname,
            };
        }

        // Első betöltés / refresh
        if (history.currentPath === pathname) {
            return;
        }

        const updatedHistory: NavigationHistory = {
            previousPath: history.currentPath,
            currentPath: pathname,
        };

        sessionStorage.setItem(
            NAVIGATION_HISTORY_KEY,
            JSON.stringify(updatedHistory),
        );

        window.dispatchEvent(new CustomEvent(NAVIGATION_HISTORY_EVENT));
    }, [pathname]);

    return null;
}
