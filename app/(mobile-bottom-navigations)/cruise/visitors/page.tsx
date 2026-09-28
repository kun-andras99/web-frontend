import { getCurrentUser } from "@/features/auth/lib/session";
import { prisma } from "@/lib/prisma";
import { calculateDistanceKm } from "@/lib/utils/calculateDistanceMKm";
import { formatDistance } from "@/lib/utils/formatDistanceMKm";
import { formatGender } from "@/lib/utils/formatGender";
import { formatVisitTime } from "@/lib/utils/formatVisitTime";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function VisitorsPage() {
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
                    lat: true,
                    lng: true,
                    userData: {
                        select: {
                            nickname: true,
                            avatarUrl: true,
                            gender: true,
                        },
                    },
                },
            },
        },
    });

    return (
        <div>
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
                <div className="grid grid-cols-2 gap-[1px]">
                    {visitors.map((visit) => {
                        const visitor = visit.visitor;
                        const userData = visitor.userData;

                        const gender = formatGender(userData?.gender);

                        const currentLat = currentUserLocation?.lat ?? null;
                        const currentLng = currentUserLocation?.lng ?? null;

                        const userLat = visitor.lat ?? null;
                        const userLng = visitor.lng ?? null;

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
                                href={`/profile/${visitor.id}`}
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
                                    <div className="absolute right-[10px] bottom-[10px] rounded-full bg-black/55 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
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
