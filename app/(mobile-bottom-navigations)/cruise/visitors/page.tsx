import { getCurrentUser } from "@/features/auth/lib/session";
import { calculateAge } from "@/lib/_lib/validations/profile";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export function formatVisitTime(date: Date) {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();

    const minutes = Math.floor(diffMs / (1000 * 60));
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (minutes < 1) {
        return "épp most";
    }

    if (minutes < 60) {
        return `${minutes} perce`;
    }

    if (hours < 24) {
        return `${hours} órája`;
    }

    return `${days} napja`;
}

export default async function VisitorsPage() {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        redirect("/sign-in");
    }

    const visitors = await prisma.profileVisit.findMany({
        where: {
            visitedUserId: currentUser.id,
            visitorId: {
                not: currentUser.id,
            },
        },
        orderBy: {
            visitedAt: "desc",
        },
        include: {
            visitor: {
                select: {
                    id: true,
                    userData: {
                        select: {
                            nickname: true,
                            avatarUrl: true,
                            birth: true,
                        },
                    },
                },
            },
        },
    });

    return (
        <div className="p-[15px] sm:px-5">
            {visitors.length === 0 ? (
                <div className="flex min-h-[220px] items-center justify-center rounded-2xl border border-white/8 bg-white/[0.03] px-5">
                    <div className="text-center">
                        <div className="mb-3 text-4xl">👀</div>

                        <p className="text-sm font-medium text-white/75">
                            Még senki nem nézte meg a profilodat.
                        </p>

                        <p className="mt-1 text-xs text-white/35">
                            Ha valaki meglátogatja a profilodat, itt fog
                            megjelenni.
                        </p>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-3 gap-[15px] sm:gap-4">
                    {visitors.map((visit) => {
                        const visitor = visit.visitor;
                        const userData = visitor.userData;

                        const age = userData?.birth
                            ? calculateAge(userData.birth)
                            : null;

                        return (
                            <Link
                                key={visit.id}
                                href={`/profile/${visitor.id}`}
                                className="group overflow-hidden rounded-2xl border border-white/8 bg-white/[0.035] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1eb1eb]/30 hover:bg-white/[0.06]">
                                <div className="relative aspect-square overflow-hidden bg-white/5">
                                    {userData?.avatarUrl ? (
                                        <Image
                                            src={userData.avatarUrl}
                                            alt={
                                                userData.nickname ?? "Profilkép"
                                            }
                                            fill
                                            sizes="(max-width: 640px) 33vw, 200px"
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="flex h-full w-full items-center justify-center">
                                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-xl font-semibold text-white/40">
                                                {userData?.nickname
                                                    ?.charAt(0)
                                                    .toUpperCase() ?? "?"}
                                            </div>
                                        </div>
                                    )}

                                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 to-transparent" />

                                    <div className="absolute bottom-2 left-2 right-2">
                                        <div className="truncate text-sm font-semibold text-white">
                                            {userData?.nickname ?? "Ismeretlen"}
                                            {age !== null && (
                                                <span className="ml-1 font-normal text-white/70">
                                                    {age}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="px-2.5 py-2.5">
                                    <p className="truncate text-[11px] text-white/40">
                                        {formatVisitTime(visit.visitedAt)}
                                    </p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
