"use client";

import { useCallback, useRef, useState } from "react";

import type { PointerEvent } from "react";

import type {
    ProfileTab,
    ProfileTabConfig,
} from "@/features/profile/types/profile.types";

const SWIPE_THRESHOLD = 60;

interface UseProfileTabSwipeOptions {
    activeIndex: number;
    tabs: readonly ProfileTabConfig[];
    goToTab: (tab: ProfileTab) => void;
}

export function useProfileTabSwipe({
    activeIndex,
    tabs,
    goToTab,
}: UseProfileTabSwipeOptions) {
    const startX = useRef<number | null>(null);

    const [dragX, setDragX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const handlePointerDown = useCallback(
        (event: PointerEvent<HTMLDivElement>) => {
            startX.current = event.clientX;
            setIsDragging(true);
        },
        [],
    );

    const handlePointerMove = useCallback(
        (event: PointerEvent<HTMLDivElement>) => {
            if (!isDragging || startX.current === null) {
                return;
            }

            const delta = event.clientX - startX.current;

            setDragX(delta);
        },
        [isDragging],
    );

    const reset = useCallback(() => {
        startX.current = null;
        setDragX(0);
        setIsDragging(false);
    }, []);

    const handlePointerUp = useCallback(() => {
        if (!isDragging || startX.current === null) {
            return;
        }

        const delta = dragX;

        if (Math.abs(delta) >= SWIPE_THRESHOLD) {
            if (delta < 0 && activeIndex < tabs.length - 1) {
                const nextTab = tabs[activeIndex + 1];

                goToTab(nextTab.id);
            }

            if (delta > 0 && activeIndex > 0) {
                const previousTab = tabs[activeIndex - 1];

                goToTab(previousTab.id);
            }
        }

        reset();
    }, [activeIndex, dragX, goToTab, isDragging, reset, tabs]);

    const handlePointerCancel = useCallback(() => {
        reset();
    }, [reset]);

    return {
        dragX,
        isDragging,
        handlePointerDown,
        handlePointerMove,
        handlePointerUp,
        handlePointerCancel,
    };
}
