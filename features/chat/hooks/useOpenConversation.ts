"use client";

import { useMutation } from "@tanstack/react-query";
import { openConversationWithUser } from "../api/chat.api";

export function useOpenConversation() {
    return useMutation({
        mutationFn: (userId: string) => openConversationWithUser(userId),
    });
}
