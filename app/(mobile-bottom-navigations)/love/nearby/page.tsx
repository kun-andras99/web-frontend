import BottomPageWrapper from "@/features/(app)/(ui)/BottomPageWrapper";
import { getCurrentUser } from "@/features/auth/lib/session";
import { calculateAge } from "@/lib/_lib/validations/profile";
import { prisma } from "@/lib/prisma";
import { formatGender } from "@/lib/utils/formatGender";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Users nearby",
    description: "Found users of near you",
    applicationName: "PUBLICAPPNAME",
    keywords: [],
};

function calculateDistance(
    lat1: number,
    lng1: number,
    lat2: number,
    lng2: number,
): number {
    const earthRadius = 6371;

    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;

    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos((lat1 * Math.PI) / 180) *
            Math.cos((lat2 * Math.PI) / 180) *
            Math.sin(dLng / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return earthRadius * c;
}

function formatDistance(distanceKm: number): string {
    if (distanceKm < 1) {
        return `${Math.round(distanceKm * 1000)}m`;
    }

    return `${distanceKm.toFixed(1)}km`;
}

export default async function ExploreNearbyPage() {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return null;
    }

    const currentUserLocation = await prisma.users.findUnique({
        where: {
            id: currentUser.id,
        },
        select: {
            lat: true,
            lng: true,
            locationEnabled: true,
        },
    });

    if (
        !currentUserLocation?.locationEnabled ||
        currentUserLocation.lat === null ||
        currentUserLocation.lng === null
    ) {
        return (
            <BottomPageWrapper>
                <div className="flex min-h-[300px] items-center justify-center p-4 text-center text-sm text-neutral-400">
                    A közeli felhasználók megjelenítéséhez engedélyezned kell a
                    helymeghatározást.
                </div>
            </BottomPageWrapper>
        );
    }

    const users = await prisma.users.findMany({
        where: {
            id: {
                not: currentUser.id,
            },
            locationEnabled: true,
            lat: {
                not: null,
            },
            lng: {
                not: null,
            },
        },
        select: {
            id: true,
            lat: true,
            lng: true,

            userData: {
                select: {
                    avatarUrl: true,
                    nickname: true,
                    birth: true,
                    gender: true,
                },
            },
        },
    });

    const nearbyUsers = users
        .map((user) => {
            if (user.lat === null || user.lng === null) {
                return null;
            }

            const distance = calculateDistance(
                currentUserLocation.lat!,
                currentUserLocation.lng!,
                user.lat,
                user.lng,
            );

            return {
                ...user,
                distance,
            };
        })
        .filter((user): user is NonNullable<typeof user> => user !== null)
        .sort((a, b) => a.distance - b.distance);

    console.log(
        nearbyUsers.map((user) => ({
            id: user.id,
            nickname: user.userData?.nickname,
            avatarUrl: user.userData?.avatarUrl,
        })),
    );

    return (
        <BottomPageWrapper>
            <div>
                {nearbyUsers.length > 0 ? (
                    <div className="grid grid-cols-3 gap-[1px]">
                        {nearbyUsers.map((user) => {
                            const userData = user.userData;
                            const gender = formatGender(userData?.gender);

                            return (
                                <Link
                                    key={user.id}
                                    href={`/profile/${user.id}`}
                                    prefetch={false}
                                    className="group overflow-hidden">
                                    <div className="relative aspect-square overflow-hidden ">
                                        {/* Avatar */}
                                        {userData?.avatarUrl ? (
                                            <Image
                                                src={userData.avatarUrl}
                                                alt={
                                                    userData.nickname ?? "User"
                                                }
                                                fill
                                                sizes="(max-width: 768px) 33vw, 250px"
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="flex h-full w-full items-center justify-center bg-neutral-800 text-xs text-neutral-500">
                                                Nincs kép
                                            </div>
                                        )}

                                        {/* Bottom gradient */}
                                        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

                                        {/* User information */}
                                        <div className="absolute right-20 bottom-[10px] left-[10px]">
                                            <div
                                                className="
                                             
                                            text-sm font-semibold text-white">
                                                {userData?.nickname ?? ""}
                                            </div>

                                            <div className="mt-0.5 flex items-center gap-1  text-[10px] font-medium text-white/65">
                                                {gender && (
                                                    <span>{gender}</span>
                                                )}

                                                {gender && (
                                                    <span className="text-white/45">
                                                        ·
                                                    </span>
                                                )}

                                                {userData?.birth && (
                                                    <span>
                                                        {calculateAge(
                                                            userData.birth,
                                                        )}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="absolute right-[10px] bottom-[10px] rounded-full bg-black/55 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
                                            {formatDistance(user.distance)}
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                ) : (
                    <div className="flex min-h-[300px] items-center justify-center text-center text-sm text-neutral-400">
                        Nincs a közeledben található felhasználó.
                    </div>
                )}
            </div>
        </BottomPageWrapper>
    );
}
