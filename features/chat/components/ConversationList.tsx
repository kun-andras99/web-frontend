"use client";

import { useConversations } from "@/features/chat/hooks/useConversations";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function formatMessageDate(date: string) {
    return new Intl.DateTimeFormat("hu-HU", {
        hour: "2-digit",
        minute: "2-digit",
    }).format(new Date(date));
}

export default function ConversationList() {
    const { data: conversations = [], isLoading, isError } = useConversations();

    if (isLoading) {
        return (
            <div className="space-y-2 p-4">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div
                        key={index}
                        className="h-[76px] animate-pulse rounded-2xl bg-white/5"
                    />
                ))}
            </div>
        );
    }

    if (isError) {
        return (
            <div className="p-8 text-center">
                <p className="text-sm text-white/50">
                    Nem sikerült betölteni a beszélgetéseket.
                </p>
            </div>
        );
    }

    if (!conversations.length) {
        return (
            <div className="flex min-h-[400px] flex-col items-center justify-center px-6 text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#1eb1eb]/10">
                    <MessageCircle size={28} className="text-[#1eb1eb]" />
                </div>

                <h2 className="text-lg font-semibold text-white">
                    Még nincs beszélgetésed
                </h2>

                <p className="mt-2 max-w-sm text-sm leading-6 text-white/45">
                    Ha valakivel elkezdesz beszélgetni, a beszélgetés itt fog
                    megjelenni.
                </p>
            </div>
        );
    }

    return (
        <div className="divide-y divide-white/5">
            {conversations.map((conversation) => {
                const user = conversation.user;

                const displayName = user.nickname || user.username;

                return (
                    <Link
                        key={conversation.id}
                        href={`/chat/${user.id}/conversation/${conversation.id}`}
                        className="group flex items-center gap-4 px-4 py-4 transition hover:bg-white/[0.035] sm:px-6">
                        <div className="relative shrink-0">
                            <div className="h-14 w-14 overflow-hidden rounded-full bg-white/10">
                                {user.avatarUrl ? (
                                    <Image
                                        src={user.avatarUrl}
                                        alt={displayName}
                                        className="h-full w-full object-cover"
                                        width={46}
                                        height={46}
                                    />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center text-lg font-semibold text-white/60">
                                        {displayName.charAt(0).toUpperCase()}
                                    </div>
                                )}
                            </div>

                            {conversation.unreadCount > 0 && (
                                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#1eb1eb] px-1 text-[10px] font-bold text-white ring-4 ring-[#101011]">
                                    {conversation.unreadCount > 99
                                        ? "99+"
                                        : conversation.unreadCount}
                                </span>
                            )}
                        </div>

                        <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-3">
                                <h3
                                    className={`truncate text-sm font-semibold ${
                                        conversation.unreadCount
                                            ? "text-white"
                                            : "text-white/80"
                                    }`}>
                                    {displayName}
                                </h3>

                                {conversation.lastMessage && (
                                    <time className="shrink-0 text-[11px] text-white/30">
                                        {formatMessageDate(
                                            conversation.lastMessage.sentAt,
                                        )}
                                    </time>
                                )}
                            </div>

                            <div className="mt-1 flex items-center gap-2">
                                <p
                                    className={`truncate text-sm ${
                                        conversation.unreadCount
                                            ? "font-medium text-white/70"
                                            : "text-white/40"
                                    }`}>
                                    {conversation.lastMessage?.content ||
                                        "Még nincs üzenet."}
                                </p>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}
