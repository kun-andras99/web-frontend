import { notFound, redirect } from "next/navigation";

import { getCurrentUser } from "@/features/auth/lib/session";
import ChatScreen from "@/features/chat/components/ChatScreen";
import { prisma } from "@/lib/prisma";

interface ChatPageProps {
    params: Promise<{
        userId: string;
        fromUserId: string;
    }>;
}

export default async function ChatPage({ params }: ChatPageProps) {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        redirect("/sign-in");
    }

    const { userId, fromUserId } = await params;

    const targetUser = await prisma.users.findUnique({
        where: {
            id: userId,
        },

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
    });

    if (!targetUser) {
        notFound();
    }

    let conversation = await prisma.conversation.findFirst({
        where: {
            participants: {
                some: {
                    userId: currentUser.id,
                },
            },

            AND: {
                participants: {
                    some: {
                        userId,
                    },
                },
            },
        },

        select: {
            id: true,
        },
    });

    if (!conversation) {
        conversation = await prisma.conversation.create({
            data: {
                participants: {
                    create: [
                        {
                            userId: currentUser.id,
                        },
                        {
                            userId,
                        },
                    ],
                },
            },

            select: {
                id: true,
            },
        });
    }

    return (
        <ChatScreen
            conversationId={conversation.id}
            currentUserId={currentUser.id}
            user={{
                id: targetUser.id,
                username: targetUser.username,
                nickname: targetUser.userData?.nickname ?? null,
                avatarUrl: targetUser.userData?.avatarUrl ?? null,
            }}
        />
    );
}
