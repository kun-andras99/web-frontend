"use client";

import { useFilteredMessages } from "@/features/(main-menus)/inbox/hooks/useFilteredMessages";
import { useMessageFilter } from "@/features/(main-menus)/inbox/hooks/useMessageFilter";
import { MessageFilter } from "@/features/(main-menus)/inbox/types/message-filter.types";
import { Message } from "@/features/(main-menus)/inbox/types/message.types";
import BottomPageWrapper from "@/features/_components/ui/bottom-page-wrapper";

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
        <BottomPageWrapper>
            <div className="">
                <h2 className="small-title">Bejövő üzenetek</h2>
                {/* <LoadMessagesBox messages={filteredMessages} /> */}
            </div>
        </BottomPageWrapper>
    );
}
