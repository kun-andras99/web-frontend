import { useState } from "react";

import {
    MessageFilter,
    type MessageFilter as MessageFilterType,
} from "../types/message-filter.types";

export function useMessageFilter(
    initialFilter: MessageFilterType = MessageFilter.ALL,
) {
    const [filter, setFilter] = useState<MessageFilterType>(initialFilter);

    return {
        filter,
        setFilter,

        isAll: filter === MessageFilter.ALL,
        isRead: filter === MessageFilter.READ,
        isUnread: filter === MessageFilter.UNREAD,
    };
}
