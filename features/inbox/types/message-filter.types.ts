export const MessageFilter = {
    ALL: "all",
    READ: "read",
    UNREAD: "unread",
} as const;

export type MessageFilter = (typeof MessageFilter)[keyof typeof MessageFilter];
