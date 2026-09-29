"use client";

import { useEffect, useRef } from "react";
import { HISTORY_STATE_KEY } from "./constants";
import { useLatest } from "./useLatest";

/**
 * Megnyitáskor egy history bejegyzést tol be, így a telefon / böngésző
 * Back gombja a sheetet zárja, nem az oldalt.
 */
export function useSheetHistory(isOpen: boolean, onClose: () => void) {
    const onCloseRef = useLatest(onClose);
    const pushedRef = useRef(false);

    useEffect(() => {
        if (!isOpen) return;

        if (!pushedRef.current) {
            window.history.pushState(
                { ...window.history.state, [HISTORY_STATE_KEY]: true },
                "",
            );
            pushedRef.current = true;
        }

        const handlePopState = () => {
            pushedRef.current = false;
            onCloseRef.current();
        };

        window.addEventListener("popstate", handlePopState);
        return () => window.removeEventListener("popstate", handlePopState);
    }, [isOpen, onCloseRef]);

    // Ha a sheet nem Back-kel, hanem az × / lehúzás / Escape miatt záródott,
    // a hozzáadott history bejegyzést is eltávolítjuk.
    useEffect(() => {
        if (isOpen) return;

        if (pushedRef.current && window.history.state?.[HISTORY_STATE_KEY]) {
            pushedRef.current = false;
            window.history.back();
        }
    }, [isOpen]);
}
