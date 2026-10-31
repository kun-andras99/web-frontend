import "server-only";

import { toConversationItemDTO } from "@/features/messages/messages.mapper";
import { getInboxChannel } from "@/lib/realtime/inbox-channel";
import { findBlockedUserIds } from "@/lib/server/blocks";
import type {
    ConversationsPageDTO,
    ConversationsQuery,
} from "../schemas/messages.schema";
import { findConversationsPage } from "./messages.repository";

export async function listConversations(
    viewerId: string,
    query: ConversationsQuery,
): Promise<ConversationsPageDTO> {
    const excludeUserIds = await findBlockedUserIds(viewerId);
    const { items, nextCursor } = await findConversationsPage({
        viewerId,
        excludeUserIds,
        ...query,
    });

    return {
        items: items.flatMap((row) => {
            const dto = toConversationItemDTO(row, viewerId);
            return dto ? [dto] : [];
        }),
        nextCursor,
    };
}

/** A user saját realtime csatornájának neve: csak neki adjuk át. */
export async function getInboxChannelFor(
    userId: string,
): Promise<{ channel: string }> {
    return { channel: await getInboxChannel(userId) };
}
