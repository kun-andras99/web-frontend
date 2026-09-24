import { prisma } from "@/lib/prisma";

export async function getUserConversations(userId: string) {
    /*
     * Először lekérjük a user conversationjeit
     * és a saját lastReadAt értékét.
     */
    const conversations = await prisma.conversation.findMany({
        where: {
            participants: {
                some: {
                    userId,
                    deletedAt: null,
                },
            },
        },

        orderBy: {
            updatedAt: "desc",
        },

        select: {
            id: true,
            updatedAt: true,

            participants: {
                where: {
                    deletedAt: null,
                },

                select: {
                    userId: true,
                    lastReadAt: true,

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
            },

            messages: {
                orderBy: {
                    sentAt: "desc",
                },

                take: 1,

                select: {
                    id: true,
                    conversationId: true,
                    senderId: true,
                    type: true,
                    content: true,
                    sentAt: true,
                    revokedAt: true,
                },
            },
        },
    });

    /*
     * Az unread számokat külön számoljuk conversationönként.
     */
    const conversationsWithUnreadCount = await Promise.all(
        conversations.map(async (conversation) => {
            const currentParticipant = conversation.participants.find(
                (participant) => participant.userId === userId,
            );

            const otherParticipant = conversation.participants.find(
                (participant) => participant.userId !== userId,
            );

            const lastReadAt = currentParticipant?.lastReadAt ?? null;

            const unreadCount = await prisma.message.count({
                where: {
                    conversationId: conversation.id,

                    /*
                     * Csak a másik user üzenetei.
                     */
                    senderId: {
                        not: userId,
                    },

                    /*
                     * Ha még soha nem olvastuk a conversationt,
                     * minden beérkezett üzenet olvasatlan.
                     *
                     * Ha már olvastuk, csak az azóta érkezettek
                     * számítanak olvasatlannak.
                     */
                    ...(lastReadAt
                        ? {
                              sentAt: {
                                  gt: lastReadAt,
                              },
                          }
                        : {}),
                },
            });

            return {
                id: conversation.id,
                updatedAt: conversation.updatedAt,

                user: otherParticipant?.user ?? {
                    id: "",
                    username: "Ismeretlen felhasználó",
                    userData: {
                        nickname: null,
                        avatarUrl: null,
                    },
                },

                lastMessage: conversation.messages[0] ?? null,

                unreadCount,
            };
        }),
    );

    return conversationsWithUnreadCount;
}
