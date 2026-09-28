import { getCurrentUser } from "@/features/auth/lib/session";
import { prisma } from "@/lib/prisma";
import { calculateDistanceKm } from "@/lib/utils/calculateDistanceMKm";
import { formatDistance } from "@/lib/utils/formatDistanceMKm";
import { formatGender } from "@/lib/utils/formatGender";
import { formatVisitTime } from "@/lib/utils/formatVisitTime";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function VisitedPage() {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        redirect("/sign-in");
    }

    const currentUserLocation = await prisma.users.findUnique({
        where: {
            id: currentUser.id,
        },
        select: {
            lat: true,
            lng: true,
        },
    });

    const visitedProfiles = await prisma.profileVisit.findMany({
        where: {
            visitorId: currentUser.id,
            visitedUserId: {
                not: currentUser.id,
            },
        },
        orderBy: {
            visitedAt: "desc",
        },
        include: {
            visitedUser: {
                select: {
                    id: true,
                    lat: true,
                    lng: true,
                    userData: {
                        select: {
                            nickname: true,
                            avatarUrl: true,
                            gender: true,
                            sexuality: true,
                        },
                    },
                },
            },
        },
    });

    return (
        <div>
            {visitedProfiles.length === 0 ? (
                <p className="text-sm font-medium text-white/75">
                    Még nem tekintettél meg profilokat.
                </p>
            ) : (
                <div className="grid grid-cols-2 gap-[1px]">
                    {visitedProfiles.map((visit) => {
                        const user = visit.visitedUser;
                        const userData = user.userData;

                        const gender = formatGender(userData?.gender);

                        const currentLat = currentUserLocation?.lat ?? null;
                        const currentLng = currentUserLocation?.lng ?? null;

                        const userLat = user.lat ?? null;
                        const userLng = user.lng ?? null;

                        const hasCurrentLocation =
                            currentLat !== null && currentLng !== null;

                        const hasUserLocation =
                            userLat !== null && userLng !== null;

                        const distanceKm =
                            hasCurrentLocation && hasUserLocation
                                ? calculateDistanceKm(
                                      currentLat,
                                      currentLng,
                                      userLat,
                                      userLng,
                                  )
                                : null;

                        const distance = formatDistance(distanceKm);

                        return (
                            <Link
                                key={visit.id}
                                href={`/profile/${user.id}`}
                                className="group overflow-hidden">
                                <div className="relative aspect-square overflow-hidden">
                                    {userData?.avatarUrl ? (
                                        <Image
                                            src={userData.avatarUrl}
                                            alt={
                                                userData.nickname ?? "Profilkép"
                                            }
                                            fill
                                            sizes="(max-width: 640px) 50vw, 300px"
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="flex h-full w-full items-center justify-center bg-white/5">
                                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-xl font-semibold text-white/40">
                                                {userData?.nickname
                                                    ?.charAt(0)
                                                    .toUpperCase() ?? "?"}
                                            </div>
                                        </div>
                                    )}

                                    {/* Alsó gradient */}
                                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

                                    {/* Bal alsó - profil adatok */}
                                    <div className="absolute right-20 bottom-[10px] left-[10px]">
                                        <div className="truncate text-sm font-semibold text-white">
                                            {userData?.nickname ?? ""}
                                        </div>

                                        <div className="mt-0.5 flex items-center gap-1 truncate text-[10px] font-medium text-white/65">
                                            {gender && <span>{gender}</span>}

                                            {gender && distance && (
                                                <span className="text-white/45">
                                                    ·
                                                </span>
                                            )}

                                            {distance && (
                                                <span>{distance}</span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Jobb alsó - megtekintési idő */}
                                    <div className="absolute right-[10px] bottom-[10px] text-right text-[10px] rounded-full bg-black/55 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
                                        {formatVisitTime(visit.visitedAt)}
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
