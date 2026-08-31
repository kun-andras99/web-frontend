import { useMemo } from "react";

import {
    MessageFilter,
    type MessageFilter as MessageFilterType,
} from "../types/message-filter.types";
import type { Message } from "../types/message.types";

interface UseFilteredMessagesParams {
    messages: Message[];
    filter: MessageFilterType;
}

export function useFilteredMessages({
    messages,
    filter,
}: UseFilteredMessagesParams) {
    return useMemo(() => {
        switch (filter) {
            case MessageFilter.READ:
                return messages.filter((message) => message.read);

            case MessageFilter.UNREAD:
                return messages.filter((message) => !message.read);

            case MessageFilter.ALL:
            default:
                return messages;
        }
    }, [messages, filter]);
}
