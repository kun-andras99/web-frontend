"use client";

import { useCallback, useMemo, useState } from "react";

import { PROFILE_TABS } from "@/features/profile/data/constants";
import type { ProfileTab } from "../types/profile.types";

export function useProfileTabs(usergender: string, initialTab?: ProfileTab) {
    const tabs = useMemo(() => PROFILE_TABS(usergender), [usergender]);

    const [activeTab, setActiveTab] = useState<ProfileTab>(
        initialTab ?? tabs[0].id,
    );

    const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);

    const goToTab = useCallback((tab: ProfileTab) => {
        setActiveTab(tab);
    }, []);

    const nextTab = useCallback(() => {
        setActiveTab((current) => {
            const index = tabs.findIndex((tab) => tab.id === current);

            if (index === tabs.length - 1) {
                return current;
            }

            return tabs[index + 1].id;
        });
    }, [tabs]);

    const previousTab = useCallback(() => {
        setActiveTab((current) => {
            const index = tabs.findIndex((tab) => tab.id === current);

            if (index === 0) {
                return current;
            }

            return tabs[index - 1].id;
        });
    }, [tabs]);

    return {
        tabs,
        activeTab,
        activeIndex,
        goToTab,
        nextTab,
        previousTab,
    };
}
