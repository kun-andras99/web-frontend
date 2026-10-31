"use client";

import { useMemo } from "react";

interface UseProfileTabTranslateOptions {
    activeIndex: number;
    dragX: number;
    tabWidth: number;
}

export function useProfileTabTranslate({
    activeIndex,
    dragX,
    tabWidth,
}: UseProfileTabTranslateOptions) {
    return useMemo(() => {
        const baseTranslate = -(activeIndex * tabWidth);

        return `translate3d(${baseTranslate + dragX}px, 0, 0)`;
    }, [activeIndex, dragX, tabWidth]);
}
