export interface Message {
    id: number;
    senderId: number;
    content: string;
    read: boolean;
    createdAt: Date;
}
