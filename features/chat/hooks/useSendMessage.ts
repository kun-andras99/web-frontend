"use client";

import {
    useMutation,
    useQueryClient,
    type InfiniteData,
} from "@tanstack/react-query";
import { sendMessage } from "../api/chat.api";
import type { MessageDTO, MessagesPageDTO } from "../schemas/chat.schema";
import { chatKeys } from "./chat.keys";

type MessagesData = InfiniteData<MessagesPageDTO, string | undefined>;

const TEMP_PREFIX = "temp:";
export const isTempMessage = (message: Pick<MessageDTO, "id">) =>
    message.id.startsWith(TEMP_PREFIX);

function prepend(
    data: MessagesData | undefined,
    message: MessageDTO,
): MessagesData | undefined {
    if (!data) return data;
    return {
        ...data,
        pages: data.pages.map((page, index) =>
            index === 0 ? { ...page, items: [message, ...page.items] } : page,
        ),
    };
}

function replace(
    data: MessagesData | undefined,
    tempId: string,
    message: MessageDTO,
): MessagesData | undefined {
    if (!data) return data;
    return {
        ...data,
        pages: data.pages.map((page) => ({
            ...page,
            items: page.items.map((item) =>
                item.id === tempId ? message : item,
            ),
        })),
    };
}

export function useSendMessage(conversationId: string, viewerId: string) {
    const queryClient = useQueryClient();
    const key = chatKeys.messages(conversationId);

    return useMutation({
        mutationFn: (content: string) =>
            sendMessage(conversationId, { content }),

        onMutate: async (content) => {
            await queryClient.cancelQueries({ queryKey: key });
            const snapshot = queryClient.getQueryData<MessagesData>(key);

            const temp: MessageDTO = {
                id: `${TEMP_PREFIX}${crypto.randomUUID()}`,
                conversationId,
                senderId: viewerId,
                type: "TEXT",
                content,
                sentAt: new Date().toISOString(),
                revokedAt: null,
                isMine: true,
                isRead: false,
            };
            queryClient.setQueryData<MessagesData>(key, (data) =>
                prepend(data, temp),
            );

            return { snapshot, tempId: temp.id };
        },

        onError: (_error, _content, context) => {
            if (context) queryClient.setQueryData(key, context.snapshot);
        },

        onSuccess: (message, _content, context) => {
            queryClient.setQueryData<MessagesData>(key, (data) =>
                replace(data, context.tempId, message),
            );
        },

        onSettled: () =>
            Promise.all([
                queryClient.invalidateQueries({ queryKey: key }),
                queryClient.invalidateQueries({
                    queryKey: chatKeys.conversations(),
                }),
            ]),
    });
}
