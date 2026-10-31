"use client";

import { useCallback, useMemo, useState } from "react";

import type { TabConfig } from "./types";

export function useTabs<T extends string>(
    items: readonly TabConfig<T>[],
    initialTab?: T,
) {
    const tabs = useMemo(
        () => items.filter((tab) => tab.show !== false),
        [items],
    );

    const firstTab = tabs[0]?.id;

    const [selectedTab, setSelectedTab] = useState<T | null>(() => {
        if (initialTab && tabs.some((tab) => tab.id === initialTab)) {
            return initialTab;
        }

        return firstTab ?? null;
    });

    // Ha a tablista dinamikusan megváltozik,
    // az aktív tabot a következő renderben korrigáljuk.
    const activeTab =
        selectedTab && tabs.some((tab) => tab.id === selectedTab)
            ? selectedTab
            : (firstTab ?? null);

    const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);

    const goToTab = useCallback(
        (tab: T) => {
            if (tabs.some((item) => item.id === tab)) {
                setSelectedTab(tab);
            }
        },
        [tabs],
    );

    const nextTab = useCallback(() => {
        if (activeIndex >= 0 && activeIndex < tabs.length - 1) {
            setSelectedTab(tabs[activeIndex + 1].id);
        }
    }, [activeIndex, tabs]);

    const previousTab = useCallback(() => {
        if (activeIndex > 0) {
            setSelectedTab(tabs[activeIndex - 1].id);
        }
    }, [activeIndex, tabs]);

    return {
        tabs,
        activeTab,
        activeIndex,
        goToTab,
        nextTab,
        previousTab,
    };
}
