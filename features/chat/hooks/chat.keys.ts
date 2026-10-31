export const chatKeys = {
    all: ["chat"] as const,
    conversations: () => [...chatKeys.all, "conversations"] as const,
    inboxChannel: () => [...chatKeys.all, "inbox-channel"] as const,
    conversation: (id: string) =>
        [...chatKeys.all, "conversation", id] as const,
    messages: (id: string) =>
        [...chatKeys.conversation(id), "messages"] as const,
};
