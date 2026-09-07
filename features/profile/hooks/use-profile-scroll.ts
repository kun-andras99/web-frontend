"use client";

import { RefObject, useEffect, useState } from "react";

interface UseProfileScrollOptions {
    threshold?: number;
}

export function useProfileScroll(
    containerRef: RefObject<HTMLDivElement | null>,
    { threshold = 160 }: UseProfileScrollOptions = {},
) {
    const [scrollY, setScrollY] = useState(0);
    const [isCollapsed, setIsCollapsed] = useState(false);

    useEffect(() => {
        const container = containerRef.current;

        if (!container) {
            return;
        }

        const handleScroll = () => {
            const value = container.scrollTop;

            setScrollY(value);
            setIsCollapsed(value >= threshold);
        };

        container.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    }, [containerRef, threshold]);

    return {
        scrollY,
        isCollapsed,
    };
}
