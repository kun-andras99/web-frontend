"use client";

import { MessageDTO } from "@/features/chat/repository/chatDTO";

interface MessageBubbleProps {
    message: MessageDTO;
    isMine: boolean;
}

export default function MessageBubble({ message, isMine }: MessageBubbleProps) {
    const time = new Intl.DateTimeFormat("hu-HU", {
        hour: "2-digit",
        minute: "2-digit",
    }).format(new Date(message.sentAt));

    return (
        <div className={`flex ${isMine ? "justify-end" : "justify-start"}`}>
            <div
                className={`max-w-[78%] sm:max-w-[65%] ${
                    isMine ? "items-end" : "items-start"
                }`}>
                <div
                    className={`rounded-3xl px-4 py-3 text-sm leading-6 shadow-lg ${
                        isMine
                            ? "rounded-br-md bg-[#0F5C77] text-white"
                            : "rounded-bl-md bg-[#252525] text-white/90"
                    }`}>
                    {message.revokedAt ? (
                        <span className="italic text-white/50">
                            Üzenet visszavonva
                        </span>
                    ) : (
                        message.content
                    )}
                </div>

                <div
                    className={`mt-1 px-1 text-[10px] text-white/25 ${
                        isMine ? "text-right" : "text-left"
                    }`}>
                    {time}
                </div>
            </div>
        </div>
    );
}
