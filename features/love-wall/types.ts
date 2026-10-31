export type MessageStatus = "sending";

export interface LoveMessage {
    id: string;
    nickname: string | null;
    avatarUrl: string | null;
    message: string;
    /** ISO 8601 */
    createdAt: string;
    status?: MessageStatus;
}

export interface MessagePage {
    items: LoveMessage[];
    nextCursor: string | null;
}
