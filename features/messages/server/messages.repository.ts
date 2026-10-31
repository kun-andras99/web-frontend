import "server-only";

import { prisma } from "@/lib/prisma";
import { Prisma } from "../../../prisma/generated/prisma";

export function conversationListSelect(viewerId: string) {
    return {
        id: true,
        updatedAt: true,
        participants: {
            where: { userId: { not: viewerId } },
            take: 1,
            select: {
                userId: true,
                user: {
                    select: {
                        userData: {
                            select: { nickname: true, avatarUrl: true },
                        },
                    },
                },
            },
        },
        messages: {
            orderBy: [{ sentAt: "desc" }, { id: "desc" }],
            take: 1,
            select: {
                senderId: true,
                type: true,
                content: true,
                sentAt: true,
                revokedAt: true,
            },
        },
        _count: {
            select: {
                messages: {
                    where: {
                        senderId: { not: viewerId },
                        revokedAt: null,
                        reads: { none: { userId: viewerId } },
                    },
                },
            },
        },
    } satisfies Prisma.ConversationSelect;
}

export type ConversationRowData = Prisma.ConversationGetPayload<{
    select: ReturnType<typeof conversationListSelect>;
}>;

export async function findConversationsPage(params: {
    viewerId: string;
    excludeUserIds: string[];
    cursor?: string;
    limit: number;
}) {
    const { viewerId, excludeUserIds, cursor, limit } = params;

    const rows = await prisma.conversation.findMany({
        where: {
            // a "törölt" beszélgetés nem látszik, amíg új üzenet vagy megnyitás vissza nem hozza
            participants: { some: { userId: viewerId, deletedAt: null } },
            // blokkolt felhasználóval folytatott beszélgetés rejtve marad
            ...(excludeUserIds.length > 0 && {
                NOT: {
                    participants: { some: { userId: { in: excludeUserIds } } },
                },
            }),
        },
        select: conversationListSelect(viewerId),
        orderBy: [{ updatedAt: "desc" }, { id: "desc" }],
        take: limit + 1,
        ...(cursor ? { cursor: { id: cursor }, skip: 1 } : {}),
    });

    const hasMore = rows.length > limit;
    const items = hasMore ? rows.slice(0, limit) : rows;
    return { items, nextCursor: hasMore ? (items.at(-1)?.id ?? null) : null };
}
