import { getCurrentUser } from "@/features/auth/lib/session";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function NotificationsPage() {
    const currentUser = await getCurrentUser();

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
        <div className="p-3">
            <div className="mx-auto flex w-full max-w-2xl flex-col gap-2">
                {notifications.length > 0 ? (
                    notifications.map((notification) => {
                        const isUnread = notification.readAt === null;

                        const actorName =
                            notification.actor?.userData?.nickname ?? "Admin";

                        return (
                            <div
                                key={notification.id}
                                className={`flex items-center gap-3 overflow-hidden rounded-2xl border p-3 transition-colors ${
                                    isUnread
                                        ? "border-white/10 bg-neutral-900 shadow-md"
                                        : "border-white/5 bg-neutral-950/60"
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
                                <div className="min-w-0 flex-1">
                                    <div className="flex items-center gap-2">
                                        <span
                                            className={`truncate text-sm font-semibold ${
                                                isUnread
                                                    ? "text-white"
                                                    : "text-white/75"
                                            }`}>
                                            {actorName}
                                        </span>

                                        <span className="shrink-0 text-xs text-neutral-500">
                                            {notification.type}
                                        </span>
                                    </div>

                                    {notification.title && (
                                        <div
                                            className={`mt-0.5 text-sm ${
                                                isUnread
                                                    ? "font-medium text-white/90"
                                                    : "text-white/60"
                                            }`}>
                                            {notification.title}
                                        </div>
                                    )}

                                    {notification.message && (
                                        <div className="mt-0.5 line-clamp-2 text-xs text-neutral-500">
                                            {notification.message}
                                        </div>
                                    )}
                                </div>

                                {/* Unread indicator */}
                                {isUnread && (
                                    <div className="h-2 w-2 shrink-0 rounded-full bg-[#1eb1eb]" />
                                )}
                            </div>
                        );
                    })
                ) : (
                    <div className="flex min-h-[300px] items-center justify-center rounded-2xl bg-neutral-950 text-sm text-neutral-500">
                        Nincs értesítésed.
                    </div>
                )}
            </div>
        </div>
    );
}
