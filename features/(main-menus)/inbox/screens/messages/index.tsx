"use client";

import FilterMessageBox from "@/features/(main-menus)/inbox/components/FilterBox";
import LoadMessagesBox from "@/features/(main-menus)/inbox/components/LoadMessagesBox";
import { useFilteredMessages } from "@/features/(main-menus)/inbox/hooks/useFilteredMessages";
import { useMessageFilter } from "@/features/(main-menus)/inbox/hooks/useMessageFilter";
import { MessageFilter } from "@/features/(main-menus)/inbox/types/message-filter.types";
import { Message } from "@/features/(main-menus)/inbox/types/message.types";

interface MessagesScreenProps {
    messages: Message[];
}

const messageFilterOptions = [
    {
        value: MessageFilter.ALL,
        label: "All",
    },
    {
        value: MessageFilter.READ,
        label: "Readed",
    },
    {
        value: MessageFilter.UNREAD,
        label: "Unread",
    },
];

export default function MessagesScreen({ messages }: MessagesScreenProps) {
    const { filter, setFilter } = useMessageFilter();

    const filteredMessages = useFilteredMessages({
        messages,
        filter,
    });

    return (
        <main className="bottom-page">
            <FilterMessageBox
                value={filter}
                options={messageFilterOptions}
                clickChange={setFilter}
            />

            <LoadMessagesBox messages={filteredMessages} />
        </main>
    );
}
