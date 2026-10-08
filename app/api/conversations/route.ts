import { unauthorizedResponse } from "@/lib/api/route-handler";
import { NextResponse } from "next/server";

import { getCurrentUser } from "@/features/auth/lib/session";
import { toConversationDTO } from "@/features/chat/mapper/conversation.mapper";
import { getUserConversations } from "@/features/chat/repository/conversations";

export async function GET() {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser) {
            return unauthorizedResponse();
        }

        const conversations = await getUserConversations(currentUser.id);

        return NextResponse.json({
            conversations: conversations.map(toConversationDTO),
        });
    } catch (error) {
        console.error("GET /api/conversations failed:", error);

        return NextResponse.json(
            {
                message: "A beszélgetések betöltése sikertelen.",
            },
            {
                status: 500,
            },
        );
    }
}
