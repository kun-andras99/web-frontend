// "use client";

// import { useChatScroll } from "../hooks/useChatScroll";
// import type { MessageDTO } from "../schemas/chat.schema";
// import MessageBubble from "./MessageBubble";

// interface MessageListProps {
//     messages: readonly MessageDTO[];
//     hasOlder: boolean;
//     isLoadingOlder: boolean;
//     onLoadOlder: () => void;
// }

// export default function MessageList({
//     messages,
//     hasOlder,
//     isLoadingOlder,
//     onLoadOlder,
// }: MessageListProps) {
//     const { containerRef, onScroll, captureAnchor } = useChatScroll(messages);

//     return (
//         <div
//             ref={containerRef}
//             onScroll={onScroll}
//             className="min-h-0 flex-1 overflow-y-auto px-3 py-4">
//             {hasOlder && (
//                 <div className="mb-3 flex justify-center">
//                     <button
//                         type="button"
//                         disabled={isLoadingOlder}
//                         onClick={() => {
//                             captureAnchor();
//                             onLoadOlder();
//                         }}
//                         className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80 disabled:opacity-50">
//                         {isLoadingOlder ? "Betöltés..." : "Korábbi üzenetek"}
//                     </button>
//                 </div>
//             )}

//             {messages.length === 0 ? (
//                 <p className="py-10 text-center text-sm text-white/40">
//                     Még nincs üzenet. Írj elsőként!
//                 </p>
//             ) : (
//                 <ul className="flex flex-col gap-2">
//                     {messages.map((message) => (
//                         <div key={message.id}>
//                         <MessageBubble message={message} />
//                         </div>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// }

// "use client";

// import { useEffect, useMemo, useRef } from "react";

// import { useConversation } from "@/features/chat/hooks/useConversation";
// import MessageBubble from "./MessageBubble";

// interface MessageListProps {
//     conversationId: string;
//     currentUserId: string;
// }

// export default function MessageList({
//     conversationId,
//     currentUserId,
// }: MessageListProps) {
//     const bottomRef = useRef<HTMLDivElement>(null);

//     const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
//         useConversation(conversationId);

//     const messages = useMemo(() => {
//         return data?.pages.flatMap((page) => page.messages) ?? [];
//     }, [data]);

//     useEffect(() => {
//         bottomRef.current?.scrollIntoView({
//             behavior: "smooth",
//         });
//     }, [messages.length]);

//     if (isLoading) {
//         return (
//             <div className="flex flex-1 items-center justify-center">
//                 <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-[#1eb1eb]" />
//             </div>
//         );
//     }

//     return (
//         <div className="flex flex-1 flex-col overflow-y-auto px-4">
//             {hasNextPage && (
//                 <button
//                     type="button"
//                     onClick={() => fetchNextPage()}
//                     disabled={isFetchingNextPage}
//                     className="mx-auto mb-6 rounded-full bg-white/5 px-4 py-2 text-xs text-white/50 transition hover:bg-white/10 hover:text-white">
//                     {isFetchingNextPage ? "Betöltés..." : "Korábbi üzenetek"}
//                 </button>
//             )}

//             <div className="mx-auto flex w-full max-w-3xl flex-col gap-3">
//                 {messages.map((message) => (
//                     <MessageBubble
//                         key={message.id}
//                         message={message}
//                         isMine={message.senderId === currentUserId}
//                     />
//                 ))}

//                 <div ref={bottomRef} />
//             </div>
//         </div>
//     );
// }
