import "server-only";

import { getSupabaseServerClient } from "@/lib/supabase/server"; // igazítsd a meglévő útvonalhoz
import { conversationChannelName, REALTIME_EVENTS } from "./channel-names";
import { getInboxChannel } from "./inbox-channel";

/** Egy csatorna egyszeri használatra, utána mindig lezárjuk (különben szivárog). */
async function broadcast(
    channelName: string,
    event: string,
    payload: Record<string, string>,
) {
    const supabase = getSupabaseServerClient();
    const channel = supabase.channel(channelName);

    try {
        const result = await channel.send({
            type: "broadcast",
            event,
            payload,
        });
        if (result !== "ok")
            console.error(`[realtime] ${event} küldése sikertelen: ${result}`);
    } catch (error) {
        console.error(`[realtime] ${event} küldése sikertelen`, error);
    } finally {
        await supabase.removeChannel(channel);
    }
}

export async function publishMessageCreated(params: {
    conversationId: string;
    messageId: string;
    senderId: string;
    recipientIds: string[];
}) {
    const { conversationId, messageId, senderId, recipientIds } = params;
    // A payload szándékosan csak azonosító: a kliens sosem hisz benne, a tartalmat a hitelesített API-ból tölti.
    const payload = { messageId, conversationId, senderId };

    const inboxes = await Promise.all(
        [senderId, ...recipientIds].map(getInboxChannel),
    );

    await Promise.allSettled([
        broadcast(
            conversationChannelName(conversationId),
            REALTIME_EVENTS.messageNew,
            payload,
        ),
        ...inboxes.map((channel) =>
            broadcast(channel, REALTIME_EVENTS.messageNew, payload),
        ),
    ]);
}

export async function publishMessagesRead(params: {
    conversationId: string;
    readerId: string;
}) {
    await broadcast(
        conversationChannelName(params.conversationId),
        REALTIME_EVENTS.messagesRead,
        {
            conversationId: params.conversationId,
            readerId: params.readerId,
        },
    );
}
