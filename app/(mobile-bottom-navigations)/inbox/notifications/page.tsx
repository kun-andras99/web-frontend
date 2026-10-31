import { requireCurrentUser } from "@/features/auth/lib/session";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function NotificationsPage() {
    const currentUser = await requireCurrentUser();

    if (!currentUser) {
        redirect("/love/nearby");
    }

    const notifications = await prisma.notification.findMany({
        where: {
            recipientId: currentUser.id,
        },
        orderBy: {
            createdAt: "desc",
        },
        select: {
            id: true,
            type: true,
            title: true,
            message: true,
            readAt: true,
            createdAt: true,

            actor: {
                select: {
                    id: true,

                    userData: {
                        select: {
                            nickname: true,
                            avatarUrl: true,
                        },
                    },
                },
            },
        },
    });

    return (
        <div className="">
            {notifications.length > 0 ? (
                notifications.map((notification) => {
                    const isUnread = notification.readAt === null;

                    const actorName =
                        notification.actor?.userData?.nickname ?? "Admin";

                    return (
                        <div
                            key={notification.id}
                            className={` ${
                                isUnread
                                    ? "border-white/10  "
                                    : "border-white/5 "
                            }`}>
                            {/* Avatar */}
                            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-neutral-800">
                                {notification.actor?.userData?.avatarUrl ? (
                                    <Image
                                        src={
                                            notification.actor.userData
                                                .avatarUrl
                                        }
                                        alt={actorName}
                                        fill
                                        sizes="(max-width: 768px) 33vw, 250px"
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center text-xs text-neutral-500">
                                        ?
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="">
                                <div className="">
                                    <span
                                        className={` ${
                                            isUnread
                                                ? "text-white"
                                                : "text-white/75"
                                        }`}>
                                        {actorName}
                                    </span>

                                    <span className="">
                                        {notification.type}
                                    </span>
                                </div>

                                {notification.title && (
                                    <div
                                        className={` ${
                                            isUnread
                                                ? "font-medium text-white/90"
                                                : "text-white/60"
                                        }`}>
                                        {notification.title}
                                    </div>
                                )}

                                {notification.message && (
                                    <div className="">
                                        {notification.message}
                                    </div>
                                )}
                            </div>

                            {/* Unread indicator */}
                            {isUnread && (
                                <div className="h-2 w-2 shrink-0 rounded-full " />
                            )}
                        </div>
                    );
                })
            ) : (
                <div className="">Nincs értesítésed.</div>
            )}
        </div>
    );
}
