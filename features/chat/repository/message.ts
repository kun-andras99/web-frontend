import { prisma } from "@/lib/prisma";

interface GetConversationMessagesParams {
    conversationId: string;
    userId: string;
    limit: number;
    cursor?: string;
}

export async function getConversationMessages({
    conversationId,
    userId,
    limit,
    cursor,
}: GetConversationMessagesParams) {
    const participant = await prisma.conversationParticipant.findUnique({
        where: {
            conversationId_userId: {
                conversationId,
                userId,
            },
        },
        select: {
            id: true,
            deletedAt: true,
        },
    });

    if (!participant || participant.deletedAt) {
        throw new Error("CONVERSATION_NOT_FOUND");
    }

    return prisma.message.findMany({
        where: {
            conversationId,
        },

        take: limit + 1,

        ...(cursor && {
            skip: 1,
            cursor: {
                id: cursor,
            },
        }),

        orderBy: {
            sentAt: "desc",
        },

        select: {
            id: true,
            conversationId: true,
            senderId: true,
            type: true,
            content: true,
            sentAt: true,
            revokedAt: true,

            reads: {
                where: {
                    userId,
                },

                select: {
                    id: true,
                },

                take: 1,
            },
        },
    });
}

export async function getConversationUser({
    conversationId,
    userId,
}: {
    conversationId: string;
    userId: string;
}) {
    const participant = await prisma.conversationParticipant.findUnique({
        where: {
            conversationId_userId: {
                conversationId,
                userId,
            },
        },
        select: {
            conversation: {
                select: {
                    participants: {
                        where: {
                            userId: {
                                not: userId,
                            },
                        },

                        select: {
                            user: {
                                select: {
                                    id: true,
                                    username: true,

                                    userData: {
                                        select: {
                                            nickname: true,
                                            avatarUrl: true,
                                        },
                                    },
                                },
                            },
                        },

                        take: 1,
                    },
                },
            },
        },
    });

    return participant?.conversation.participants[0]?.user ?? null;
}
