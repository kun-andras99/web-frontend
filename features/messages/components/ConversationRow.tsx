import ChatAvatar from "@/features/chat/components/ChatAvatar";
import { conversationHref } from "@/features/chat/utils/routes";
import type { ConversationItemDTO } from "@/features/messages/schemas/messages.schema";
import { formatVisitTime } from "@/lib/utils/formatVisitTime";
import Link from "next/link";

function getPreview(last: ConversationItemDTO["lastMessage"]): string {
    if (!last) return "Még nincs üzenet";
    if (last.revokedAt) return "Az üzenet vissza lett vonva";

    const text = last.type === "TEXT" ? (last.content ?? "") : "Melléklet";
    return last.isMine ? `Te: ${text}` : text;
}

export default function ConversationRow({
    conversation,
}: {
    conversation: ConversationItemDTO;
}) {
    const { participant, lastMessage, unreadCount } = conversation;
    const unread = unreadCount > 0;

    return (
        <li>
            <Link
                href={conversationHref(conversation.id)}
                prefetch={false}
                className="flex items-center gap-3 px-4 py-3 hover:bg-white/[0.04]">
                <ChatAvatar
                    name={participant.nickname}
                    src={participant.avatarUrl}
                />

                <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                        <span
                            className={`truncate text-sm ${unread ? "font-bold" : "font-semibold"} text-white`}>
                            {participant.nickname ?? "Névtelen"}
                        </span>
                        {lastMessage && (
                            <span
                                suppressHydrationWarning
                                className="shrink-0 text-[10px] text-white/40">
                                {formatVisitTime(new Date(lastMessage.sentAt))}
                            </span>
                        )}
                    </div>

                    <div className="flex items-center justify-between gap-2">
                        <p
                            className={`truncate text-xs ${unread ? "text-white/85" : "text-white/50"}`}>
                            {getPreview(lastMessage)}
                        </p>
                        {unread && (
                            <span
                                aria-label={`${unreadCount} olvasatlan üzenet`}
                                className="grid h-5 min-w-5 shrink-0 place-items-center rounded-full bg-indigo-500 px-1.5 text-[10px] font-bold text-white">
                                {unreadCount > 99 ? "99+" : unreadCount}
                            </span>
                        )}
                    </div>
                </div>
            </Link>
        </li>
    );
}
