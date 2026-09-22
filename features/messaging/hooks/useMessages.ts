// // hooks/useMessages.ts
// import {
//     useMutation,
//     useQuery,
//     useQueryClient,
//     UseQueryResult,
// } from "@tanstack/react-query";

// export interface User {
//     id: string;
//     username: string;
//     nickname?: string;
//     avatarUrl?: string;
// }

// export interface Message {
//     id: string;
//     conversationId: string;
//     senderId: string;
//     type: string;
//     content: string | null;
//     sentAt: Date;
//     revokedAt: Date | null;
//     sender: User;
//     reads: Array<{ readAt: Date }>;
//     attachments: Array<{
//         id: string;
//         url: string;
//         mimeType?: string;
//         width?: number;
//         height?: number;
//     }>;
// }

// export interface ConversationPreview {
//     id: string;
//     otherUser: User;
//     lastMessage: {
//         id: string;
//         content: string | null;
//         type: string;
//         sentAt: Date;
//         isOwn: boolean;
//         senderName: string;
//     } | null;
//     updatedAt: Date;
//     createdAt: Date;
// }

// // Lekérdezi az összes conversation-t az aktuális user-hoz
// export function useConversations() {
//     return useQuery({
//         queryKey: ["conversations"],
//         queryFn: async () => {
//             const res = await fetch("/api/messages/conversations");
//             if (!res.ok) throw new Error("Failed to fetch conversations");
//             return res.json() as Promise<ConversationPreview[]>;
//         },
//         refetchInterval: 5000, // 5 másodpercenként frissít
//     });
// }

// // Lekérdezi az üzeneteket egy conversation-hoz
// export function useMessages(
//     conversationId: string,
// ): UseQueryResult<Message[], Error> {
//     return useQuery({
//         queryKey: ["messages", conversationId],
//         queryFn: async () => {
//             const res = await fetch(`/api/messages/${conversationId}`);
//             if (!res.ok) throw new Error("Failed to fetch messages");
//             return res.json() as Promise<Message[]>;
//         },
//         refetchInterval: 3000, // 3 másodpercenként frissít
//         enabled: !!conversationId,
//     });
// }

// // Új üzenet küldése
// export function useSendMessage(conversationId: string) {
//     const queryClient = useQueryClient();

//     return useMutation({
//         mutationFn: async (content: string) => {
//             const res = await fetch(`/api/messages/${conversationId}`, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ content, type: "TEXT" }),
//             });
//             if (!res.ok) throw new Error("Failed to send message");
//             return res.json();
//         },
//         onSuccess: () => {
//             // Frissít az üzenetek
//             queryClient.invalidateQueries({
//                 queryKey: ["messages", conversationId],
//             });
//             // Frissít a conversation listát
//             queryClient.invalidateQueries({
//                 queryKey: ["conversations"],
//             });
//         },
//     });
// }
