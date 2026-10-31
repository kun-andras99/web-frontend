export const conversationChannelName = (conversationId: string) =>
    `conversation:${conversationId}`;

export const REALTIME_EVENTS = {
    messageNew: "message:new",
    messagesRead: "messages:read",
} as const;
