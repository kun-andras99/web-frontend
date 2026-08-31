import { useCallback, useLayoutEffect, useRef } from "react";

type ScrollNodeRef = (node: HTMLDivElement | null) => void;

interface UseTopTabScrollResult {
    registerScrollNode: (tabId: string) => ScrollNodeRef;
}

export default function useTopTabScroll(tab: string): UseTopTabScrollResult {
    const scrollNodes = useRef<Map<string, HTMLDivElement>>(new Map());

    const registerScrollNode = useCallback(
        (tabId: string): ScrollNodeRef =>
            (node) => {
                if (node) {
                    scrollNodes.current.set(tabId, node);
                } else {
                    scrollNodes.current.delete(tabId);
                }
            },
        [],
    );

    useLayoutEffect(() => {
        requestAnimationFrame(() => {
            const node = scrollNodes.current.get(tab);

            if (!node) return;
            node.scrollTop = 0;
        });
    }, [tab]);

    return {
        registerScrollNode,
    };
}
