"use client";

import { ProfileTab } from "@/features/profile/types/profile.types";
import { useCallback, useRef } from "react";

const PROFILE_TABS_SCROLL_OFFSET = 10;

interface UseProfileTabNavigationOptions {
    activeTab: ProfileTab;
    goToTab: (tab: ProfileTab) => void;
}

export function useProfileTabNavigation({
    activeTab,
    goToTab,
}: UseProfileTabNavigationOptions) {
    const tabsRef = useRef<HTMLDivElement>(null);

    const scrollToTabs = useCallback(() => {
        const element = tabsRef.current;

        if (!element) {
            return;
        }

        const top =
            element.getBoundingClientRect().top +
            window.scrollY -
            PROFILE_TABS_SCROLL_OFFSET;

        window.scrollTo({
            top: Math.max(0, top),
            behavior: "smooth",
        });
    }, []);

    const navigateToTab = useCallback(
        (tab: ProfileTab) => {
            if (tab === activeTab) {
                scrollToTabs();
                return;
            }

            goToTab(tab);

            requestAnimationFrame(() => {
                scrollToTabs();
            });
        },
        [activeTab, goToTab, scrollToTabs],
    );

    return {
        tabsRef,
        navigateToTab,
        scrollToTabs,
    };
}
