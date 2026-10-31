"use client";

import { useCallback, useMemo, useState } from "react";

import { PROFILE_TABS } from "@/features/profile/data/constants";
import { ProfileTab } from "@/features/profile/types/profile.types";
import { Gender } from "../../../../prisma/generated/prisma";

export function useEditProfileTabs(
    userGender: Gender | null | undefined,
    initialTab?: ProfileTab,
) {
    const tabs = useMemo(() => PROFILE_TABS(userGender), [userGender]);

    const firstTab = tabs[0].id;

    const [activeTab, setActiveTab] = useState<ProfileTab>(() => {
        if (initialTab && tabs.some((tab) => tab.id === initialTab)) {
            return initialTab;
        }

        return firstTab;
    });

    /*
     * Ha a userGender miatt megváltozik a tabs lista,
     * előfordulhat, hogy az aktuális tab már nem létezik.
     *
     * Ilyenkor a következő renderben az első érvényes tabot
     * használjuk fallbackként.
     */
    const resolvedActiveTab = tabs.some((tab) => tab.id === activeTab)
        ? activeTab
        : firstTab;

    const activeIndex = tabs.findIndex((tab) => tab.id === resolvedActiveTab);

    const goToTab = useCallback(
        (tab: ProfileTab) => {
            if (!tabs.some((item) => item.id === tab)) {
                return;
            }

            setActiveTab(tab);
        },
        [tabs],
    );

    const nextTab = useCallback(() => {
        setActiveTab((currentTab: ProfileTab) => {
            const currentIndex = tabs.findIndex((tab) => tab.id === currentTab);

            /*
             * Ha az aktuális tab már nem létezik,
             * biztonságosan az első tabra állunk.
             */
            if (currentIndex === -1) {
                return firstTab;
            }

            /*
             * Már az utolsó tabon vagyunk.
             */
            if (currentIndex >= tabs.length - 1) {
                return currentTab;
            }

            return tabs[currentIndex + 1].id;
        });
    }, [tabs, firstTab]);

    const previousTab = useCallback(() => {
        setActiveTab((currentTab: ProfileTab) => {
            const currentIndex = tabs.findIndex((tab) => tab.id === currentTab);

            /*
             * Ha az aktuális tab már nem létezik,
             * biztonságosan az első tabra állunk.
             */
            if (currentIndex === -1) {
                return firstTab;
            }

            /*
             * Már az első tabon vagyunk.
             */
            if (currentIndex <= 0) {
                return currentTab;
            }

            return tabs[currentIndex - 1].id;
        });
    }, [tabs, firstTab]);

    return {
        tabs,
        activeTab: resolvedActiveTab,
        activeIndex,
        goToTab,
        nextTab,
        previousTab,
    };
}
