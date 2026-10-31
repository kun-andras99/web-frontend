import type {
    ConversationDetailDTO,
    MessageDTO,
    ParticipantDTO,
} from "@/features/chat/schemas/chat.schema";
import type {
    ConversationDetailData,
    MessageRowData,
    ParticipantRowData,
} from "@/features/chat/server/chat.repository";

export function toParticipantDTO(row: ParticipantRowData): ParticipantDTO {
    return {
        userId: row.userId,
        nickname: row.user.userData?.nickname ?? null,
        avatarUrl: row.user.userData?.avatarUrl ?? null,
    };
}

export function toMessageDTO(
    row: MessageRowData,
    viewerId: string,
): MessageDTO {
    const isMine = row.senderId === viewerId;
    const revoked = row.revokedAt !== null;

    return {
        id: row.id,
        conversationId: row.conversationId,
        senderId: row.senderId,
        type: row.type,
        content: revoked ? null : row.content, // a visszavont üzenet tartalma nem hagyja el a szervert
        sentAt: row.sentAt.toISOString(),
        revokedAt: row.revokedAt?.toISOString() ?? null,
        isMine,
        isRead: isMine
            ? row.reads.some((read) => read.userId !== viewerId)
            : row.reads.some((read) => read.userId === viewerId),
    };
}

/** @returns null, ha a beszélgetésnek nincs másik résztvevője (törölt fiók) */
export function toConversationDetailDTO(
    row: ConversationDetailData,
): ConversationDetailDTO | null {
    const other = row.participants[0];
    return other ? { id: row.id, participant: toParticipantDTO(other) } : null;
}
