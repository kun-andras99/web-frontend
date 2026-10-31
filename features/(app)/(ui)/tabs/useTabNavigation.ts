"use client";

import { useCallback, useEffect, useRef } from "react";

const TAB_SCROLL_OFFSET = 10;
const TAB_HORIZONTAL_OFFSET = 10;

interface UseTabNavigationOptions<T extends string> {
    activeTab: T | null;
    goToTab: (tab: T) => void;
}

export function useTabNavigation<T extends string>({
    activeTab,
    goToTab,
}: UseTabNavigationOptions<T>) {
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
            TAB_SCROLL_OFFSET;

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

        if (!container || activeTab === null) {
            return;
        }

        const activeElement = Array.from(
            container.querySelectorAll<HTMLElement>("[data-tab-id]"),
        ).find((element) => element.dataset.tabId === activeTab);

        if (!activeElement) {
            return;
        }

        const containerRect = container.getBoundingClientRect();
        const tabRect = activeElement.getBoundingClientRect();

        const leftOverflow = containerRect.left - tabRect.left;
        const rightOverflow = tabRect.right - containerRect.right;

        if (leftOverflow > 0) {
            container.scrollBy({
                left: -(leftOverflow + TAB_HORIZONTAL_OFFSET),
                behavior: "smooth",
            });

            return;
        }

        if (rightOverflow > 0) {
            container.scrollBy({
                left: rightOverflow + TAB_HORIZONTAL_OFFSET,
                behavior: "smooth",
            });
        }
    }, [activeTab]);

    /**
     * Tabváltás után az aktív tab láthatóvá válik.
     */
    useEffect(() => {
        const frame = requestAnimationFrame(() => {
            scrollActiveTabIntoView();
        });

        return () => {
            cancelAnimationFrame(frame);
        };
    }, [scrollActiveTabIntoView]);

    /**
     * Aktiválja a tabot, majd a tablistához görget.
     */
    const navigateToTab = useCallback(
        (tab: T) => {
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
