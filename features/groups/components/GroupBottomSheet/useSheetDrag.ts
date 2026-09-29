"use client";

import {
    useCallback,
    useRef,
    useState,
    type PointerEvent,
    type RefObject,
} from "react";
import { CLOSE_THRESHOLD_PX, CLOSE_THRESHOLD_RATIO } from "./constants";

interface UseSheetDragParams {
    sheetRef: RefObject<HTMLElement | null>;
    onClose: () => void;
}

export function useSheetDrag({ sheetRef, onClose }: UseSheetDragParams) {
    const pointerIdRef = useRef<number | null>(null);
    const startYRef = useRef(0);
    const offsetRef = useRef(0);

    const [dragOffset, setDragOffset] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const reset = useCallback(() => {
        pointerIdRef.current = null;
        offsetRef.current = 0;
        setIsDragging(false);
        setDragOffset(0);
    }, []);

    const getCloseThreshold = useCallback(() => {
        const height = sheetRef.current?.getBoundingClientRect().height;
        if (!height) return CLOSE_THRESHOLD_PX;

        return Math.min(height * CLOSE_THRESHOLD_RATIO, CLOSE_THRESHOLD_PX);
    }, [sheetRef]);

    const onPointerDown = useCallback((event: PointerEvent<HTMLElement>) => {
        if (event.pointerType === "mouse" && event.button !== 0) return;

        pointerIdRef.current = event.pointerId;
        startYRef.current = event.clientY;
        offsetRef.current = 0;

        setIsDragging(true);
        event.currentTarget.setPointerCapture(event.pointerId);
    }, []);

    const onPointerMove = useCallback((event: PointerEvent<HTMLElement>) => {
        if (pointerIdRef.current !== event.pointerId) return;

        // felfelé húzásnál nem mozdul a sheet
        const offset = Math.max(0, event.clientY - startYRef.current);
        offsetRef.current = offset;
        setDragOffset(offset);
    }, []);

    const onPointerUp = useCallback(
        (event: PointerEvent<HTMLElement>) => {
            if (pointerIdRef.current !== event.pointerId) return;

            const shouldClose = offsetRef.current >= getCloseThreshold();
            reset();

            if (shouldClose) onClose();
        },
        [getCloseThreshold, onClose, reset],
    );

    const onPointerCancel = useCallback(
        (event: PointerEvent<HTMLElement>) => {
            if (pointerIdRef.current !== event.pointerId) return;
            reset();
        },
        [reset],
    );

    return {
        dragOffset,
        isDragging,
        handleProps: {
            onPointerDown,
            onPointerMove,
            onPointerUp,
            onPointerCancel,
        },
    };
}
