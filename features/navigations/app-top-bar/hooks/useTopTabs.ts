import { useMemo, useState } from "react";

import type { TopTabScreen } from "../types/top-tab.types";

interface UseTopTabResult {
    tab: string;
    changeTab: (newTab: string) => void;
    currentIndex: number;
    canGoPrev: boolean;
    canGoNext: boolean;
    prevTab: string | undefined;
    nextTab: string | undefined;
    goToRelativeTab: (direction: number) => void;
}

export default function useTopTab(screens: TopTabScreen[]): UseTopTabResult {
    const [tab, setTab] = useState(screens[0].id.toString());

    const currentIndex = useMemo(
        () => screens.findIndex((item) => item.id.toString() === tab),
        [screens, tab],
    );

    const canGoPrev = currentIndex > 0;
    const canGoNext = currentIndex < screens.length - 1;

    const prevTab = screens[currentIndex - 1]?.id.toString();
    const nextTab = screens[currentIndex + 1]?.id.toString();

    const changeTab = (newTab: string) => {
        if (newTab === tab) return;
        setTab(newTab);
    };

    const goToRelativeTab = (direction: number) => {
        const nextIndex = currentIndex + direction;
        if (nextIndex < 0 || nextIndex >= screens.length) return;
        changeTab(screens[nextIndex].id.toString());
    };

    return {
        tab,
        changeTab,
        currentIndex,
        canGoPrev,
        canGoNext,
        prevTab,
        nextTab,
        goToRelativeTab,
    };
}
