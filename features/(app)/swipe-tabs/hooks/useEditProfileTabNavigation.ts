"use client";

import { ProfileTab } from "@/features/profile/types/profile.types";
import { useCallback, useEffect, useRef } from "react";

const PROFILE_TABS_SCROLL_OFFSET = 10;

interface useEditProfileTabNavigationOptions {
    activeTab: ProfileTab;
    goToTab: (tab: ProfileTab) => void;
}

export function useEditProfileTabNavigation({
    activeTab,
    goToTab,
}: useEditProfileTabNavigationOptions) {
    const tabsRef = useRef<HTMLDivElement>(null);

    /**
     * Vertikálisan a tablistához görget.
     */
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

    /**
     * Horizontálisan láthatóvá teszi az aktív tabot.
     */
    const scrollActiveTabIntoView = useCallback(() => {
        const container = tabsRef.current;

        if (!container) {
            return;
        }

        const activeElement = container.querySelector<HTMLElement>(
            `[data-profile-tab="${activeTab}"]`,
        );

        if (!activeElement) {
            return;
        }

        const containerRect = container.getBoundingClientRect();
        const tabRect = activeElement.getBoundingClientRect();

        const leftOverflow = containerRect.left - tabRect.left;
        const rightOverflow = tabRect.right - containerRect.right;

        if (leftOverflow > 0) {
            container.scrollBy({
                left: -(leftOverflow + 10),
                behavior: "smooth",
            });

            return;
        }

        if (rightOverflow > 0) {
            container.scrollBy({
                left: rightOverflow + 10,
                behavior: "smooth",
            });
        }
    }, [activeTab]);

    /**
     * Tabváltás után az aktív tabot horizontálisan
     * láthatóvá tesszük.
     */
    useEffect(() => {
        const frame = requestAnimationFrame(() => {
            scrollActiveTabIntoView();
        });

        return () => {
            cancelAnimationFrame(frame);
        };
    }, [activeTab, scrollActiveTabIntoView]);

    /**
     * Tabváltás:
     *
     * 1. aktiváljuk a tabot
     * 2. az oldal felgördül a tablistához
     * 3. az aktív tab vízszintesen látható lesz
     */
    const navigateToTab = useCallback(
        (tab: ProfileTab) => {
            if (tab === activeTab) {
                scrollToTabs();

                requestAnimationFrame(() => {
                    scrollActiveTabIntoView();
                });

                return;
            }

            goToTab(tab);

            requestAnimationFrame(() => {
                scrollToTabs();
            });
        },
        [activeTab, goToTab, scrollToTabs, scrollActiveTabIntoView],
    );

    return {
        tabsRef,
        navigateToTab,
        scrollToTabs,
        scrollActiveTabIntoView,
    };
}
