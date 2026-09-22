// import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";
// import { useQueryClient } from "@tanstack/react-query";
// import { useEffect, useRef } from "react";

// interface MessageNotification {
//     type: "new_message" | "typing" | "typing_stop" | "message_read";
//     conversationId: string;
//     userId?: string;
//     username?: string;
//     messageId?: string;
// }

// interface UseMessageNotificationsOptions {
//     onTyping?: (data: MessageNotification) => void;
//     onTypingStop?: (data: MessageNotification) => void;
//     onNewMessage?: (data: MessageNotification) => void;
//     onMessageRead?: (data: MessageNotification) => void;
// }

// export function useMessageNotifications(
//     options: UseMessageNotificationsOptions = {},
// ) {
//     const queryClient = useQueryClient();
//     const { data: currentUser } = useCurrentUser();

//     // 1. Megoldás a végtelen újracsatlakozási ciklusra: useRef-be mentjük a callbackeket
//     const optionsRef = useRef(options);
//     useEffect(() => {
//         optionsRef.current = options;
//     }, [options]);

//     useEffect(() => {
//         if (!currentUser?.id) return;

//         const eventSource = new EventSource("/api/messages/notifications");

//         eventSource.onmessage = (event) => {
//             try {
//                 const data = JSON.parse(event.data) as MessageNotification;

//                 switch (data.type) {
//                     case "typing":
//                         optionsRef.current.onTyping?.(data);
//                         break;

//                     case "typing_stop":
//                         optionsRef.current.onTypingStop?.(data);
//                         break;

//                     case "new_message":
//                         queryClient.invalidateQueries({
//                             queryKey: ["messages", data.conversationId],
//                         });
//                         queryClient.invalidateQueries({
//                             queryKey: ["conversations"],
//                         });
//                         optionsRef.current.onNewMessage?.(data);
//                         break;

//                     case "message_read":
//                         queryClient.invalidateQueries({
//                             queryKey: ["messages", data.conversationId],
//                         });
//                         optionsRef.current.onMessageRead?.(data);
//                         break;
//                 }
//             } catch (error) {
//                 console.error("Notification parse error:", error);
//             }
//         };

//         // 2. Megoldás az EventSource error hibára: az Event típus kezelése
//         eventSource.onerror = (event) => {
//             eventSource.close();
//         };

//         return () => {
//             eventSource.close();
//         };
//     }, [currentUser?.id, queryClient]); // Az `options` kikerült innen, így nem szakad meg a kapcsolat minden rendernél!
// }
