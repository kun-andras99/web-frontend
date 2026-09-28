import { getCurrentUser } from "@/features/auth/lib/session";
import { handleMatchAction } from "@/features/matching/types/matching.types";
import { prisma } from "@/lib/prisma";
import { Heart, X } from "lucide-react";
import Form from "next/form";
import Image from "next/image";
import { redirect } from "next/navigation";
import { MatchActionType } from "../../../../prisma/generated/prisma";

function calculateAge(birth: Date | null): number | null {
    if (!birth) {
        return null;
    }

    const today = new Date();

    let age = today.getFullYear() - birth.getFullYear();

    const hasBirthdayPassed =
        today.getMonth() > birth.getMonth() ||
        (today.getMonth() === birth.getMonth() &&
            today.getDate() >= birth.getDate());

    if (!hasBirthdayPassed) {
        age--;
    }

    return age;
}

export default async function MatchScreen() {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        redirect("/sign-in");
    }

    const actions = await prisma.matchAction.findMany({
        where: {
            fromUserId: currentUser.id,
        },
        select: {
            toUserId: true,
        },
    });

    const excludedUserIds = actions.map((action) => action.toUserId);

    const users = await prisma.users.findMany({
        where: {
            id: {
                not: currentUser.id,
                notIn: excludedUserIds,
            },
            userData: {
                isNot: null,
            },
        },
        select: {
            id: true,
            username: true,

            userData: {
                select: {
                    nickname: true,
                    avatarUrl: true,
                    birth: true,
                    gender: true,
                    sexuality: true,
                    description: true,
                },
            },
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    const user = users[0] ?? null;

    if (!user) {
        return (
            <div className="flex flex-1 items-center justify-center px-6">
                <div className="flex flex-col items-center text-center">
                    <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#1eb1eb]/10">
                        <Heart
                            size={36}
                            strokeWidth={1.8}
                            className="text-[#1eb1eb]"
                        />
                    </div>

                    <h2 className="text-xl font-bold text-white">
                        Nincs több felhasználó
                    </h2>

                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/50">
                        Jelenleg minden elérhető profilt megnéztél.
                    </p>
                </div>
            </div>
        );
    }

    const age = calculateAge(user.userData?.birth ?? null);

    return (
        <div className="flex flex-1 items-start p-[15px]">
            <div className="mx-auto flex w-full max-w-[440px] flex-col">
                {/* PROFILE CARD */}
                <div className="relative flex flex-1 items-center justify-center">
                    <div className="relative aspect-square w-full overflow-hidden rounded-[28px] bg-neutral-900 shadow-2xl">
                        {user.userData?.avatarUrl ? (
                            <Image
                                src={user.userData.avatarUrl}
                                alt={user.userData.nickname ?? user.username}
                                fill
                                priority
                                sizes="(max-width: 768px) 95vw, 420px"
                                className="object-cover"
                            />
                        ) : (
                            <div className="flex h-full items-center justify-center bg-neutral-800 text-sm text-white/40">
                                Nincs profilkép
                            </div>
                        )}

                        {/* IMAGE OVERLAY */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                        {/* PROFILE INFO */}
                        <div className="absolute inset-x-0 bottom-0 p-6">
                            <h2 className="truncate text-2xl font-bold text-white">
                                {user.userData?.nickname ?? user.username}

                                {age !== null && (
                                    <span className="ml-2 font-normal text-white/70">
                                        {age}
                                    </span>
                                )}
                            </h2>

                            {user.userData?.gender && (
                                <p className="mt-1 text-sm text-white/60">
                                    {user.userData.gender}
                                </p>
                            )}

                            {user.userData?.description && (
                                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/70">
                                    {user.userData.description}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex items-center justify-center gap-8 py-6">
                    {/* PASS */}
                    <Form
                        action={handleMatchAction.bind(
                            null,
                            user.id,
                            MatchActionType.PASS,
                        )}>
                        <button
                            type="submit"
                            aria-label="Tovább"
                            className="
                                group
                                flex
                                flex-col
                                items-center
                                gap-2
                                outline-none
                            ">
                            <span
                                className="
                                    flex
                                    h-[64px]
                                    w-[64px]
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-white/10
                                    bg-white/[0.04]
                                    text-white/50
                                    shadow-xl
                                    backdrop-blur-md
                                    transition-all
                                    duration-200
                                    group-hover:scale-105
                                    group-hover:border-red-400/40
                                    group-hover:bg-red-500/10
                                    group-hover:text-red-400
                                    group-active:scale-95
                                ">
                                <X size={30} strokeWidth={2} />
                            </span>

                            <span className="text-xs font-medium text-white/35 transition-colors group-hover:text-red-400/80">
                                Tovább
                            </span>
                        </button>
                    </Form>

                    {/* LIKE */}
                    <Form
                        action={handleMatchAction.bind(
                            null,
                            user.id,
                            MatchActionType.LIKE,
                        )}>
                        <button
                            type="submit"
                            aria-label="Like"
                            className="
                                group
                                flex
                                flex-col
                                items-center
                                gap-2
                                outline-none
                            ">
                            <span
                                className="
                                    relative
                                    flex
                                    h-[76px]
                                    w-[76px]
                                    items-center
                                    justify-center
                                    overflow-hidden
                                    rounded-full
                                    bg-gradient-to-br
                                    from-[#1eb1eb]
                                    to-[#0878b0]
                                    text-white
                                    shadow-[0_0_40px_rgba(30,177,235,0.28)]
                                    transition-all
                                    duration-200
                                    group-hover:scale-105
                                    group-hover:shadow-[0_0_50px_rgba(30,177,235,0.42)]
                                    group-active:scale-95
                                ">
                                <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />

                                <Heart
                                    size={34}
                                    strokeWidth={2}
                                    className="relative fill-white"
                                />
                            </span>

                            <span className="text-xs font-medium text-[#1eb1eb]/70 transition-colors group-hover:text-[#1eb1eb]">
                                Tetszik
                            </span>
                        </button>
                    </Form>
                </div>
            </div>
        </div>
    );
}
