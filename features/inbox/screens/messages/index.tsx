"use client";

import FilterMessageBox from "@/features/inbox/components/FilterBox";
import LoadMessagesBox from "@/features/inbox/components/LoadMessagesBox";
import { useFilteredMessages } from "@/features/inbox/hooks/useFilteredMessages";
import { useMessageFilter } from "@/features/inbox/hooks/useMessageFilter";
import { MessageFilter } from "@/features/inbox/types/message-filter.types";
import { Message } from "@/features/inbox/types/message.types";

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
