import {
    animate,
    useMotionValue,
    type MotionValue,
    type PanInfo,
} from "framer-motion";
import { useCallback, useRef, type RefObject } from "react";

interface UseTopTabSwipeParams {
    currentIndex: number;
    canGoPrev: boolean;
    canGoNext: boolean;
    goToRelativeTab: (direction: number) => void;
}

interface UseTopTabSwipeResult {
    x: MotionValue<number>;
    containerRef: RefObject<HTMLDivElement | null>;
    resetPosition: (index?: number) => void;
    handleDragEnd: (
        event: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo,
    ) => void;
}

export default function useTopTabSwipe({
    currentIndex,
    canGoPrev,
    canGoNext,
    goToRelativeTab,
}: UseTopTabSwipeParams): UseTopTabSwipeResult {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const x = useMotionValue(0);

    const getWidth = useCallback(
        () => containerRef.current?.offsetWidth || 0,
        [],
    );

    const getRestX = useCallback(() => {
        return canGoPrev ? -getWidth() : 0;
    }, [canGoPrev, getWidth]);

    // Megjegyzés: az `index` paraméter az eredeti kódban sincs felhasználva a
    // törzsben (mindig getRestX()-et állítja be) — ezt szándékosan
    // változatlanul hagytam, csak típust kapott.
    const resetPosition = useCallback(
        (index: number = currentIndex) => {
            x.set(getRestX());
        },
        [x, getRestX, currentIndex],
    );

    const handleDragEnd = (
        _event: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo,
    ) => {
        const width = getWidth();
        const threshold = width * 0.25;

        if (info.offset.x < -threshold && canGoNext) {
            animate(x, currentIndex > 0 ? -width * 2 : -width, {
                duration: 0.25,
            }).then(() => {
                goToRelativeTab(1);
            });

            return;
        }

        if (info.offset.x > threshold && canGoPrev) {
            animate(x, 0, {
                duration: 0.25,
            }).then(() => {
                goToRelativeTab(-1);
            });

            return;
        }

        animate(x, canGoPrev ? -width : 0, {
            type: "spring",
            stiffness: 400,
            damping: 35,
        });
    };

    return {
        x,
        containerRef,
        resetPosition,
        handleDragEnd,
    };
}
