"use client";

import { useCallback, useLayoutEffect, useRef } from "react";
import type { MessageDTO } from "../schemas/chat.schema";

const STICK_THRESHOLD_PX = 120;

/**
 * - Megnyitáskor és új üzenetnél az aljára görget, ha a user az alján van (vagy ő küldte).
 * - Korábbi üzenetek betöltésekor megtartja a görgetési pozíciót (Safari nem tudja magától).
 */
export function useChatScroll(messages: readonly MessageDTO[]) {
    const containerRef = useRef<HTMLDivElement>(null);
    const stickRef = useRef(true);
    const lastIdRef = useRef<string | undefined>(undefined);
    const anchorRef = useRef<{
        height: number;
        firstId: string | undefined;
    } | null>(null);

    const onScroll = useCallback(() => {
        const el = containerRef.current;
        if (!el) return;
        stickRef.current =
            el.scrollHeight - el.scrollTop - el.clientHeight <
            STICK_THRESHOLD_PX;
    }, []);

    /** A korábbi oldal lekérése ELŐTT kell hívni. */
    const captureAnchor = useCallback(() => {
        const el = containerRef.current;
        if (el)
            anchorRef.current = {
                height: el.scrollHeight,
                firstId: messages[0]?.id,
            };
    }, [messages]);

    useLayoutEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const anchor = anchorRef.current;
        if (anchor && messages[0]?.id !== anchor.firstId) {
            el.scrollTop += el.scrollHeight - anchor.height;
            anchorRef.current = null;
            return;
        }

        const last = messages.at(-1);
        const isNewTail = last?.id !== lastIdRef.current;
        lastIdRef.current = last?.id;

        if (isNewTail && (stickRef.current || last?.isMine)) {
            el.scrollTop = el.scrollHeight;
        }
    }, [messages]);

    return { containerRef, onScroll, captureAnchor };
}
