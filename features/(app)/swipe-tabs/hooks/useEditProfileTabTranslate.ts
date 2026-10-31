"use client";

import { useMemo } from "react";

interface useEditProfileTabTranslateOptions {
    activeIndex: number;
    dragX: number;
    tabWidth: number;
}

export function useEditProfileTabTranslate({
    activeIndex,
    dragX,
    tabWidth,
}: useEditProfileTabTranslateOptions) {
    return useMemo(() => {
        const baseTranslate = -(activeIndex * tabWidth);

        return `translate3d(${baseTranslate + dragX}px, 0, 0)`;
    }, [activeIndex, dragX, tabWidth]);
}
