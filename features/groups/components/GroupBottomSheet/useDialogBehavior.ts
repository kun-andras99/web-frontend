"use client";

import { useEffect } from "react";
import { useLatest } from "./useLatest";

/** Escape-re bezár, és amíg nyitva van, a háttér nem görgethető. */
export function useDialogBehavior(isOpen: boolean, onClose: () => void) {
    const onCloseRef = useLatest(onClose);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onCloseRef.current();
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onCloseRef]);
}
