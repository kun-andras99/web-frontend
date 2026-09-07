"use client";

import { useCallback, useState } from "react";

import { PROFILE_TABS } from "@/features/profile/data/constants";
import type { ProfileTab } from "../types/profile.types";

export function useProfileTabs(initialTab: ProfileTab = PROFILE_TABS[0].id) {
    const [activeTab, setActiveTab] = useState<ProfileTab>(initialTab);

    const activeIndex = PROFILE_TABS.findIndex((tab) => tab.id === activeTab);

    const goToTab = useCallback((tab: ProfileTab) => {
        setActiveTab(tab);
    }, []);

    const nextTab = useCallback(() => {
        setActiveTab((current) => {
            const index = PROFILE_TABS.findIndex((tab) => tab.id === current);

            if (index === PROFILE_TABS.length - 1) {
                return current;
            }

            return PROFILE_TABS[index + 1].id;
        });
    }, []);

    const previousTab = useCallback(() => {
        setActiveTab((current) => {
            const index = PROFILE_TABS.findIndex((tab) => tab.id === current);

            if (index === 0) {
                return current;
            }

            return PROFILE_TABS[index - 1].id;
        });
    }, []);

    return {
        activeTab,
        activeIndex,
        goToTab,
        nextTab,
        previousTab,
    };
}
