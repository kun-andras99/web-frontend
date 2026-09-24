"use client";

import {
    InfiniteData,
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import { sendMessage } from "@/features/chat/api/sendMessage";
import { chatKeys } from "@/features/chat/hooks/useConversation";
import { conversationKeys } from "@/features/chat/hooks/useConversations";
import {
    ConversationDTO,
    ConversationMessagesDTO,
    MessageDTO,
} from "@/features/chat/repository/chatDTO";

interface SendMessageContext {
    previousConversation: InfiniteData<ConversationMessagesDTO> | undefined;

    previousConversations: ConversationDTO[] | undefined;

    temporaryMessageId: string;
}

function createTemporaryMessageId(): string {
    return `temp-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function useSendMessage(conversationId: string, currentUserId: string) {
    const queryClient = useQueryClient();

    return useMutation<MessageDTO, Error, string, SendMessageContext>({
        mutationFn: async (content) => {
            return sendMessage(conversationId, {
                content,
            });
        },

        onMutate: async (content) => {
            /*
             * A folyamatban lévő lekérdezéseket leállítjuk,
             * hogy egy közben érkező régi válasz ne írja
             * felül az optimistic állapotot.
             */
            await Promise.all([
                queryClient.cancelQueries({
                    queryKey: chatKeys.conversation(conversationId),
                }),

                queryClient.cancelQueries({
                    queryKey: conversationKeys.list(),
                }),
            ]);

            /*
             * Elmentjük a jelenlegi cache állapotokat,
             * hogy hiba esetén vissza tudjuk állítani őket.
             */
            const previousConversation = queryClient.getQueryData<
                InfiniteData<ConversationMessagesDTO>
            >(chatKeys.conversation(conversationId));

            const previousConversations = queryClient.getQueryData<
                ConversationDTO[]
            >(conversationKeys.list());

            const temporaryMessageId = createTemporaryMessageId();

            const optimisticSentAt = new Date().toISOString();

            /*
             * Ideiglenes üzenet.
             *
             * Ezt még nem a szerver generálta, ezért csak addig
             * használjuk, amíg a POST request vissza nem érkezik.
             */
            const optimisticMessage: MessageDTO = {
                id: temporaryMessageId,
                conversationId,
                senderId: currentUserId,
                type: "TEXT",
                content,
                sentAt: optimisticSentAt,
                revokedAt: null,
                isRead: false,
            };

            /*
             * ─────────────────────────────────────────────
             * 1. CHAT CACHE OPTIMISTIC UPDATE
             * ─────────────────────────────────────────────
             */
            queryClient.setQueryData<InfiniteData<ConversationMessagesDTO>>(
                chatKeys.conversation(conversationId),
                (current) => {
                    if (!current || current.pages.length === 0) {
                        return current;
                    }

                    const pages = [...current.pages];

                    const firstPage = pages[0];

                    pages[0] = {
                        ...firstPage,
                        messages: [...firstPage.messages, optimisticMessage],
                    };

                    return {
                        ...current,
                        pages,
                    };
                },
            );

            /*
             * ─────────────────────────────────────────────
             * 2. CONVERSATION LIST OPTIMISTIC UPDATE
             * ─────────────────────────────────────────────
             *
             * Az üzenet elküldésekor:
             *
             * - frissítjük az utolsó üzenetet
             * - frissítjük az időpontot
             * - a beszélgetést a lista elejére tesszük
             */
            queryClient.setQueryData<ConversationDTO[]>(
                conversationKeys.list(),
                (current) => {
                    if (!current) {
                        return current;
                    }

                    const conversation = current.find(
                        (item) => item.id === conversationId,
                    );

                    /*
                     * Ha a conversation nincs a cache-ben,
                     * nem tudunk optimistic módon frissíteni.
                     */
                    if (!conversation) {
                        return current;
                    }

                    const updatedConversation: ConversationDTO = {
                        ...conversation,
                        lastMessage: optimisticMessage,
                        updatedAt: optimisticSentAt,
                    };

                    /*
                     * A régi példányt eltávolítjuk,
                     * majd az új példányt a lista elejére tesszük.
                     */
                    const remainingConversations = current.filter(
                        (item) => item.id !== conversationId,
                    );

                    return [updatedConversation, ...remainingConversations];
                },
            );

            return {
                previousConversation,
                previousConversations,
                temporaryMessageId,
            };
        },

        /*
         * ─────────────────────────────────────────────
         * SUCCESS
         * ─────────────────────────────────────────────
         */
        onSuccess: (message, _content, context) => {
            if (!context) {
                return;
            }

            /*
             * ─────────────────────────────────────────────
             * 1. TEMPORARY MESSAGE → REAL MESSAGE
             * ─────────────────────────────────────────────
             */
            queryClient.setQueryData<InfiniteData<ConversationMessagesDTO>>(
                chatKeys.conversation(conversationId),
                (current) => {
                    if (!current) {
                        return current;
                    }

                    return {
                        ...current,

                        pages: current.pages.map((page) => ({
                            ...page,

                            messages: page.messages.map((existingMessage) =>
                                existingMessage.id ===
                                context.temporaryMessageId
                                    ? message
                                    : existingMessage,
                            ),
                        })),
                    };
                },
            );

            /*
             * ─────────────────────────────────────────────
             * 2. CONVERSATION LIST
             * ─────────────────────────────────────────────
             *
             * A temporary üzenetet lecseréljük a valódi
             * szerver oldali üzenetre.
             *
             * A conversation továbbra is a lista elején marad.
             */
            queryClient.setQueryData<ConversationDTO[]>(
                conversationKeys.list(),
                (current) => {
                    if (!current) {
                        return current;
                    }

                    const conversation = current.find(
                        (item) => item.id === conversationId,
                    );

                    if (!conversation) {
                        return current;
                    }

                    const updatedConversation: ConversationDTO = {
                        ...conversation,
                        lastMessage: message,
                        updatedAt: message.sentAt,
                    };

                    const remainingConversations = current.filter(
                        (item) => item.id !== conversationId,
                    );

                    return [updatedConversation, ...remainingConversations];
                },
            );

            /*
             * ─────────────────────────────────────────────
             * 3. SERVER SYNC
             * ─────────────────────────────────────────────
             *
             * Az optimistic cache már azonnal frissült.
             * Itt csak ellenőrizzük, hogy a szerver állapota
             * és a kliens cache végül teljesen szinkronban legyen.
             */
            void queryClient.invalidateQueries({
                queryKey: conversationKeys.list(),
            });
        },

        /*
         * ─────────────────────────────────────────────
         * ERROR / ROLLBACK
         * ─────────────────────────────────────────────
         */
        onError: (_error, _content, context) => {
            if (!context) {
                return;
            }

            /*
             * Chat rollback.
             */
            queryClient.setQueryData<InfiniteData<ConversationMessagesDTO>>(
                chatKeys.conversation(conversationId),
                context.previousConversation,
            );

            /*
             * ConversationList rollback.
             */
            queryClient.setQueryData<ConversationDTO[]>(
                conversationKeys.list(),
                context.previousConversations,
            );
        },
    });
}
