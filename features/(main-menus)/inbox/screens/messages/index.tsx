// app/(main)/messages/page.tsx
"use client";

type TypingUser = {
    userId: string;
    username: string;
};

export default function MessagesScreen() {
    // const [messageInput, setMessageInput] = useState("");
    // const [typingUsers, setTypingUsers] = useState<Map<string, TypingUser>>(
    //     new Map(),
    // );
    // const [unreadCount, setUnreadCount] = useState(0);
    // const messagesEndRef = useRef<HTMLDivElement>(null);
    // const messagesContainerRef = useRef<HTMLDivElement>(null);
    // const typingTimeoutRef = useRef<NodeJS.Timeout>(null);
    // const lastMessageCountRef = useRef(0);
    // const initializedRef = useRef(false);

    // const { data: currentUser, isLoading: userLoading } = useCurrentUser();
    // const { data: conversations, isLoading: conversationsLoading } =
    //     useConversations();

    // const selectedConversationId = useMemo(() => {
    //     if (conversations && conversations.length > 0) {
    //         return conversations[0].id;
    //     }
    //     return null;
    // }, [conversations]);

    // const { data: messages, isLoading: messagesLoading } = useMessages(
    //     selectedConversationId || "",
    // );
    // const sendMessage = useSendMessage(selectedConversationId || "");

    // SSE notifications kezelése
    // useMessageNotifications({
    //     onTyping: (data) => {
    //         if (data.conversationId === selectedConversationId) {
    //             setTypingUsers((prev) => {
    //                 const updated = new Map(prev);
    //                 updated.set(data.userId || "", {
    //                     userId: data.userId || "",
    //                     username: data.username || "Valaki",
    //                 });
    //                 return updated;
    //             });
    //         }
    //     },
    //     onTypingStop: (data) => {
    //         setTypingUsers((prev) => {
    //             const updated = new Map(prev);
    //             updated.delete(data.userId || "");
    //             return updated;
    //         });
    //     },
    //     onNewMessage: (data) => {
    //         if (data.conversationId !== selectedConversationId) {
    //             setUnreadCount((prev) => prev + 1);
    //         }
    //         // Auto-scroll új üzenetre
    //         setTimeout(() => {
    //             scrollToBottom();
    //         }, 100);
    //     },
    // });

    // Auto-scroll az utolsó üzenetre
    // const scrollToBottom = useCallback(() => {
    //     if (messagesContainerRef.current) {
    //         messagesContainerRef.current.scrollTop =
    //             messagesContainerRef.current.scrollHeight;
    //     }
    // }, []);

    // // Scroll amikor új üzenetek érkeznek
    // useEffect(() => {
    //     if (messages && messages.length > lastMessageCountRef.current) {
    //         lastMessageCountRef.current = messages.length;
    //         scrollToBottom();
    //     }
    // }, [messages, scrollToBottom]);

    // // ⭐ Unread count reset amikor conversation-t választunk
    // // useEffect(() => {
    // //     if (selectedConversationId) {
    // //         setUnreadCount(0);
    // //     }
    // // }, [selectedConversationId]);

    // // Typing indicator kezelése
    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setMessageInput(e.target.value);

    //     // Töröljük az előző timeout-ot
    //     if (typingTimeoutRef.current) {
    //         clearTimeout(typingTimeoutRef.current);
    //     }

    //     // Új timeout - 2 másodperc után vége az írásnak
    //     typingTimeoutRef.current = setTimeout(() => {
    //         // Typing stop küldése
    //     }, 2000);
    // };

    // const handleSendMessage = async (e: React.FormEvent) => {
    //     e.preventDefault();

    //     if (!messageInput.trim() || !selectedConversationId || !currentUser?.id)
    //         return;

    //     setMessageInput("");
    //     setTypingUsers(new Map());

    //     try {
    //         await sendMessage.mutateAsync(messageInput);
    //     } catch (error) {
    //         console.error("Failed to send message:", error);
    //     }
    // };

    // const selectedConversation = useMemo(() => {
    //     if (conversations && selectedConversationId) {
    //         return conversations.find((c) => c.id === selectedConversationId);
    //     }
    //     return null;
    // }, [conversations, selectedConversationId]);

    // if (userLoading) {
    //     return (
    //         <div className="h-[300px] flex items-center justify-center bg-background">
    //             <Loader2 className="w-8 h-8 animate-spin text-primary" />
    //         </div>
    //     );
    // }

    return (
        <div className="flex bg-background overflow-hidden">
            {/* <div className="w-full flex flex-col overflow-hidden">
                <div className="flex-1 overflow-y-auto">
                    {conversations && conversations.length > 0 ? (
                        <div className="">
                            {conversations.map((conv) => (
                                <div
                                    key={conv.id}
                                    className={cn(
                                        "w-full p-3 rounded-lg transition-all text-left group cursor-pointer",
                                        // selectedConversationId === conv.id
                                        //     ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg"
                                        //     :
                                        "hover:bg-accent/50",
                                    )}>
                                    <div className="flex items-center gap-3">
                                        <div className="relative flex-shrink-0">
                                            {conv.otherUser.avatarUrl ? (
                                                <Image
                                                    src={
                                                        conv.otherUser.avatarUrl
                                                    }
                                                    alt={
                                                        conv.otherUser
                                                            .nickname ||
                                                        conv.otherUser.username
                                                    }
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/50" />
                                            )}
                                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full  " />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-semibold truncate">
                                                {conv.otherUser.nickname ||
                                                    conv.otherUser.username}
                                            </p>
                                            <p
                                                className={cn(
                                                    "text-sm truncate",
                                                    selectedConversationId ===
                                                        conv.id
                                                        ? "opacity-80"
                                                        : "text-muted-foreground",
                                                )}>
                                                {conv.lastMessage?.content ||
                                                    "Nincs üzenet"}
                                            </p>
                                        </div>
                                        {conv.lastMessage && (
                                            <span
                                                className={cn(
                                                    "text-xs flex-shrink-0",
                                                    selectedConversationId ===
                                                        conv.id
                                                        ? "opacity-80"
                                                        : "text-muted-foreground",
                                                )}></span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex justify-center items-center h-32">
                            <Loader2 className="w-6 h-6 animate-spin text-primary" />
                        </div>
                    )}
                </div>
            </div> */}

            {/* Messages Container */}
            {/* <div className="flex-1 flex flex-col overflow-hidden">
                {selectedConversationId && selectedConversation ? (
                    <>
                        <div className="p-4 border-b border-border bg-card flex items-center justify-between flex-shrink-0 bg-gradient-to-r from-primary/5 to-transparent">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    {selectedConversation.otherUser
                                        .avatarUrl ? (
                                        <Image
                                            src={
                                                selectedConversation.otherUser
                                                    .avatarUrl
                                            }
                                            alt={
                                                selectedConversation.otherUser
                                                    .nickname ||
                                                selectedConversation.otherUser
                                                    .username
                                            }
                                            width={40}
                                            height={40}
                                            className="rounded-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/50" />
                                    )}
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                                </div>
                                <div>
                                    <h2 className="font-semibold text-lg">
                                        {selectedConversation.otherUser
                                            .nickname ||
                                            selectedConversation.otherUser
                                                .username}
                                    </h2>
                                    <p className="text-xs text-green-600 font-medium">
                                        Online
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            ref={messagesContainerRef}
                            className="flex-1 overflow-y-auto p-4 space-y-4 bg-background scroll-smooth">
                            {messagesLoading ? (
                                <div className="flex justify-center items-center h-full">
                                    <Loader2 className="w-6 h-6 animate-spin text-primary" />
                                </div>
                            ) : messages && messages.length > 0 ? (
                                <>
                                    {messages.map((msg, idx) => {
                                        const isOwn =
                                            msg.senderId === currentUser?.id;
                                        const showAvatar =
                                            idx === messages.length - 1 ||
                                            messages[idx + 1].senderId !==
                                                msg.senderId;

                                        return (
                                            <div
                                                key={msg.id}
                                                className={cn(
                                                    "flex gap-3",
                                                    isOwn
                                                        ? "justify-end"
                                                        : "justify-start",
                                                )}>
                                                {!isOwn && showAvatar && (
                                                    <div className="relative flex-shrink-0">
                                                        {msg.sender
                                                            .avatarUrl ? (
                                                            <Image
                                                                src={
                                                                    msg.sender
                                                                        .avatarUrl
                                                                }
                                                                alt={
                                                                    msg.sender
                                                                        .nickname ||
                                                                    msg.sender
                                                                        .username
                                                                }
                                                                width={32}
                                                                height={32}
                                                                className="rounded-full object-cover"
                                                            />
                                                        ) : (
                                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/50" />
                                                        )}
                                                    </div>
                                                )}
                                                {!isOwn && !showAvatar && (
                                                    <div className="w-8 h-8" />
                                                )}
                                                <div
                                                    className={cn(
                                                        "max-w-xs px-4 py-2 rounded-lg animate-in fade-in slide-in-from-bottom-2",
                                                        isOwn
                                                            ? "bg-gradient-to-br from-primary to-primary/90 text-primary-foreground shadow-md"
                                                            : "bg-card border border-border",
                                                    )}>
                                                    <p className="break-words text-sm">
                                                        {msg.content}
                                                    </p>
                                                    <p
                                                        className={cn(
                                                            "text-xs opacity-70 mt-1",
                                                        )}>
                                                        {isOwn &&
                                                            msg.reads.length >
                                                                0 && (
                                                                <span className="ml-1">
                                                                    ✓✓
                                                                </span>
                                                            )}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}

                                    {typingUsers.size > 0 && (
                                        <div className="flex gap-3 animate-in fade-in">
                                            <div className="relative flex-shrink-0">
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-400 to-gray-500" />
                                            </div>
                                            <div className="bg-card border border-border px-4 py-2 rounded-lg">
                                                <div className="flex gap-1">
                                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                                                    <div
                                                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                                        style={{
                                                            animationDelay:
                                                                "0.1s",
                                                        }}
                                                    />
                                                    <div
                                                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                                        style={{
                                                            animationDelay:
                                                                "0.2s",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <div ref={messagesEndRef} />
                                </>
                            ) : (
                                <div className="flex justify-center items-center h-full text-muted-foreground">
                                    <div className="text-center">
                                        <Heart className="w-8 h-8 mx-auto mb-2 opacity-50" />
                                        <p>Kezdd meg a beszélgetést</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="p-4 border-t border-border bg-card flex-shrink-0">
                            <form
                                onSubmit={handleSendMessage}
                                className="flex gap-2">
                                <input
                                    type="text"
                                    value={messageInput}
                                    onChange={handleInputChange}
                                    placeholder="Írj üzenetet..."
                                    className="flex-1 px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-ring"
                                    disabled={sendMessage.isPending}
                                    autoFocus
                                />
                                <button
                                    type="submit"
                                    disabled={
                                        !messageInput.trim() ||
                                        sendMessage.isPending
                                    }
                                    className="px-4 py-2 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2">
                                    {sendMessage.isPending ? (
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                    ) : (
                                        <Send className="w-4 h-4" />
                                    )}
                                </button>
                            </form>
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground">
                        <MessageCircle className="w-16 h-16 mb-4 opacity-20" />
                        <p className="text-lg">
                            Válassz egy conversation-t az üzenetekhez
                        </p>
                    </div>
                )}
            </div> */}
        </div>
    );
}
