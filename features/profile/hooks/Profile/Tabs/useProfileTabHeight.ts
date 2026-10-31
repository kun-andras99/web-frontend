"use client";

import { useLayoutEffect, useState } from "react";

import type { ProfileTab } from "@/features/profile/types/profile.types";

interface UseProfileTabHeightOptions {
    activeTab: ProfileTab;
    tabRefs: React.MutableRefObject<
        Partial<Record<ProfileTab, HTMLDivElement | null>>
    >;
}

export function useProfileTabHeight({
    activeTab,
    tabRefs,
}: UseProfileTabHeightOptions) {
    const [height, setHeight] = useState<number | null>(null);

    useLayoutEffect(() => {
        const element = tabRefs.current[activeTab];

        if (!element) {
            return;
        }

        const updateHeight = () => {
            setHeight(element.scrollHeight);
        };

        updateHeight();

        const observer = new ResizeObserver(() => {
            updateHeight();
        });

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [activeTab, tabRefs]);

    return {
        height,
    };
}
