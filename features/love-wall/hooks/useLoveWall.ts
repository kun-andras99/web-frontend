"use client";

import { useCallback, useRef, useState } from "react";
import { loveWallApi } from "@/features/love-wall/services/loveWallApi";
import { LoveMessage } from "@/features/love-wall/types";

interface Options {
    initialMessages?: LoveMessage[];
    initialCursor?: string | null;
}

export function useLoveWall({
    initialMessages = [],
    initialCursor = null,
}: Options = {}) {
    const [messages, setMessages] = useState<LoveMessage[]>(initialMessages);
    const [cursor, setCursor] = useState<string | null>(initialCursor);
    const [reportedIds, setReportedIds] = useState<ReadonlySet<string>>(
        () => new Set(),
    );
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const loadingRef = useRef(false);

    const loadMore = useCallback(async () => {
        if (!cursor || loadingRef.current) return;

        loadingRef.current = true;
        setIsLoadingMore(true);
        setError(null);

        try {
            const page = await loveWallApi.list(cursor);
            setMessages((prev) => {
                const known = new Set(prev.map((m) => m.id));
                return [...prev, ...page.items.filter((m: LoveMessage) => !known.has(m.id))];
            });
            setCursor(page.nextCursor);
        } catch {
            setError("Nem sikerült betölteni az üzeneteket. Próbáld újra.");
        } finally {
            loadingRef.current = false;
            setIsLoadingMore(false);
        }
    }, [cursor]);

    /** Optimista küldés. `true`-val tér vissza siker esetén. */
    const send = useCallback(async (text: string) => {
        const tempId = `temp-${crypto.randomUUID()}`;
        const optimistic: LoveMessage = {
            id: tempId,
            nickname: null,
            avatarUrl: null,
            message: text,
            createdAt: new Date().toISOString(),
            status: "sending",
        };

        setError(null);
        setMessages((prev) => [optimistic, ...prev]);

        try {
            const saved = await loveWallApi.create(text);
            setMessages((prev) =>
                prev.map((m) => (m.id === tempId ? saved : m)),
            );
            return true;
        } catch {
            setMessages((prev) => prev.filter((m) => m.id !== tempId));
            setError("Az üzenetet nem sikerült elküldeni. Próbáld újra.");
            return false;
        }
    }, []);

    const report = useCallback(async (id: string) => {
        setReportedIds((prev) => new Set(prev).add(id));

        try {
            await loveWallApi.report(id);
        } catch {
            setReportedIds((prev) => {
                const next = new Set(prev);
                next.delete(id);
                return next;
            });
            setError("A jelentést nem sikerült elküldeni. Próbáld újra.");
        }
    }, []);

    return {
        messages,
        reportedIds,
        hasMore: cursor !== null,
        isLoadingMore,
        error,
        loadMore,
        send,
        report,
    };
}
