import type { ConversationItemDTO } from "./schemas/messages.schema";
import type { ConversationRowData } from "./server/messages.repository";

const PREVIEW_LENGTH = 140;

/** @returns null, ha nincs másik résztvevő (törölt fiók): az ilyen sor kimarad */
export function toConversationItemDTO(
    row: ConversationRowData,
    viewerId: string,
): ConversationItemDTO | null {
    const other = row.participants[0];
    if (!other) return null;

    const last = row.messages[0];

    return {
        id: row.id,
        updatedAt: row.updatedAt.toISOString(),
        participant: {
            userId: other.userId,
            nickname: other.user.userData?.nickname ?? null,
            avatarUrl: other.user.userData?.avatarUrl ?? null,
        },
        lastMessage: last
            ? {
                  senderId: last.senderId,
                  type: last.type,
                  content: last.revokedAt
                      ? null
                      : (last.content?.slice(0, PREVIEW_LENGTH) ?? null),
                  sentAt: last.sentAt.toISOString(),
                  revokedAt: last.revokedAt?.toISOString() ?? null,
                  isMine: last.senderId === viewerId,
              }
            : null,
        unreadCount: row._count.messages,
    };
}
