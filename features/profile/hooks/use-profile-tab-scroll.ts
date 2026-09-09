"use client";

import { RefObject, useEffect } from "react";
import type { ProfileTab } from "../types/profile.types";

export function useProfileTabScroll(
    containerRef: RefObject<HTMLDivElement | null>,
    activeTab: ProfileTab,
) {
    useEffect(() => {
        const container = containerRef.current;

        if (!container) {
            return;
        }

        const activeButton = container.querySelector<HTMLElement>(
            `[data-profile-tab="${activeTab}"]`,
        );

        if (!activeButton) {
            return;
        }

        const containerLeft = container.scrollLeft;

        const containerWidth = container.clientWidth;

        const buttonLeft = activeButton.offsetLeft;

        const buttonWidth = activeButton.offsetWidth;

        const buttonRight = buttonLeft + buttonWidth;

        const visibleLeft = containerLeft;

        const visibleRight = containerLeft + containerWidth;

        // Bal oldalon kilóg
        if (buttonLeft < visibleLeft) {
            container.scrollTo({
                left: buttonLeft - 15,
                behavior: "smooth",
            });

            return;
        }

        // Jobb oldalon kilóg
        if (buttonRight > visibleRight) {
            container.scrollTo({
                left: buttonRight - containerWidth + 15,
                behavior: "smooth",
            });
        }
    }, [containerRef, activeTab]);
}
