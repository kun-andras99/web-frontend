// "use client";

// import { ChatUserDTO } from "@/features/chat/repository/chatDTO";
// import { ArrowLeft } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// interface ChatHeaderProps {
//     user: ChatUserDTO;
// }

// export default function ChatHeader({ user }: ChatHeaderProps) {
//     const displayName = user.nickname || user.username;

//     return (
//         <header className="flex h-[68px] items-center gap-3 border-b border-white/5 bg-[#101011]/95 px-4 backdrop-blur-xl sm:px-6">
//             <Link
//                 href="/inbox/messages"
//                 className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white/50 transition hover:bg-white/5 hover:text-white">
//                 <ArrowLeft size={19} />
//             </Link>

//             <div className="h-11 w-11 overflow-hidden rounded-full bg-white/10">
//                 {user.avatarUrl ? (
//                     <Image
//                         src={user.avatarUrl}
//                         alt={displayName}
//                         className="h-full w-full object-cover"
//                         width={42}
//                         height={42}
//                     />
//                 ) : (
//                     <div className="flex h-full w-full items-center justify-center font-semibold text-white/50">
//                         {displayName.charAt(0).toUpperCase()}
//                     </div>
//                 )}
//             </div>

//             <div className="min-w-0">
//                 <Link
//                     href={`/love/profile/${user.id}`}
//                     className="block truncate text-sm font-semibold text-white transition hover:text-[#1eb1eb]">
//                     {displayName}
//                 </Link>

//                 <p className="text-xs text-white/30">Beszélgetés</p>
//             </div>
//         </header>
//     );
// }

import Link from "next/link";
import type { ParticipantDTO } from "../schemas/chat.schema";
import { MESSAGES_HREF } from "../utils/routes";
import ChatAvatar from "./ChatAvatar";

export default function ChatHeader({
    participant,
}: {
    participant: ParticipantDTO;
}) {
    return (
        <header className="flex items-center gap-3 border-b border-white/10 px-3 py-2.5">
            <Link
                href={MESSAGES_HREF}
                aria-label="Vissza az üzenetekhez"
                className="grid h-9 w-9 place-items-center rounded-full text-lg text-white/80 hover:bg-white/10">
                ‹
            </Link>

            <Link
                href={`/profile/${participant.userId}`}
                prefetch={false}
                className="flex min-w-0 items-center gap-3">
                <ChatAvatar
                    name={participant.nickname}
                    src={participant.avatarUrl}
                    className="h-9 w-9"
                />
                <span className="truncate text-sm font-semibold text-white">
                    {participant.nickname ?? "Névtelen"}
                </span>
            </Link>
        </header>
    );
}
