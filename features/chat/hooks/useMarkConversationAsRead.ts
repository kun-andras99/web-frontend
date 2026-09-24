"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { markConversationAsRead } from "@/features/chat/api/markConversationAsRead";
import { chatKeys } from "@/features/chat/hooks/useConversation";
import { conversationKeys } from "@/features/chat/hooks/useConversations";
import { ConversationDTO } from "@/features/chat/repository/chatDTO";

export function useMarkConversationAsRead() {
    const queryClient = useQueryClient();

    return useMutation<void, Error, string>({
        mutationFn: markConversationAsRead,

        onMutate: async (conversationId) => {
            /*
             * Ne fusson közben olyan lekérés,
             * ami visszaírná a régi unreadCountot.
             */
            await queryClient.cancelQueries({
                queryKey: conversationKeys.list(),
            });

            /*
             * Azonnali UI frissítés.
             *
             * Amint megnyitjuk a beszélgetést,
             * eltűnik az avatar mellől a +x.
             */
            queryClient.setQueryData<ConversationDTO[]>(
                conversationKeys.list(),
                (current) => {
                    if (!current) {
                        return current;
                    }

                    return current.map((conversation: ConversationDTO) => {
                        if (conversation.id !== conversationId) {
                            return conversation;
                        }

                        return {
                            ...conversation,
                            unreadCount: 0,
                        };
                    });
                },
            );
        },

        onSuccess: async (_, conversationId) => {
            /*
             * ConversationList frissítése a szerverről.
             */
            await queryClient.invalidateQueries({
                queryKey: conversationKeys.list(),
            });

            /*
             * Aktuális conversation frissítése.
             */
            await queryClient.invalidateQueries({
                queryKey: chatKeys.conversation(conversationId),
            });
        },
    });
}
