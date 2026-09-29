"use client";

import { useLatest } from "@/features/groups/components/GroupBottomSheet/useLatest";
import { useEffect, useRef } from "react";

export function useLoadMoreOnVisible(onVisible: () => void, enabled: boolean) {
    const ref = useRef<HTMLDivElement | null>(null);
    const onVisibleRef = useLatest(onVisible);

    useEffect(() => {
        const node = ref.current;
        if (!node || !enabled) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry?.isIntersecting) onVisibleRef.current();
            },
            { rootMargin: "200px" },
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, [enabled, onVisibleRef]);

    return ref;
}
