"use client";

import { useLatest } from "@/features/groups/components/GroupBottomSheet/useLatest";
import { getSupabaseBrowserClient } from "@/lib/supabase/client"; // igazítsd a meglévő útvonalhoz
import { useEffect } from "react";

type Handlers = Record<string, (payload: unknown) => void>;

/**
 * Broadcast-események figyelése egy csatornán.
 * - A handlerek cseréje nem iratkoztat újra (ref-ben tároljuk).
 * - `onResync`: újrakapcsolódás után hívódik, mert a kiesés alatti események elvesztek.
 * A payloadot sosem renderelje a hívó: hamisítható, csak "frissíts" jelzésnek jó.
 */
export function useRealtimeBroadcast(
    channelName: string | null,
    handlers: Handlers,
    onResync?: () => void,
) {
    const handlersRef = useLatest(handlers);
    const resyncRef = useLatest(onResync);
    const eventsKey = Object.keys(handlers).sort().join("|");

    useEffect(() => {
        if (!channelName) return;

        const supabase = getSupabaseBrowserClient();
        let channel = supabase.channel(channelName);

        for (const event of eventsKey.split("|")) {
            channel = channel.on("broadcast", { event }, ({ payload }) =>
                handlersRef.current[event]?.(payload),
            );
        }

        let subscribedBefore = false;
        channel.subscribe((status) => {
            if (status !== "SUBSCRIBED") return;
            if (subscribedBefore) resyncRef.current?.();
            subscribedBefore = true;
        });

        return () => {
            void supabase.removeChannel(channel);
        };
    }, [channelName, eventsKey, handlersRef, resyncRef]);
}
