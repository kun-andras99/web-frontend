import Image from "next/image";
import Link from "next/link";
import { formatDistance } from "@/lib/utils/formatDistanceMKm";
import type { NearbyUserDTO } from "@/features/nearby-users/schemas/nearby.schema";

export default function NearbyUserCard({ user }: { user: NearbyUserDTO }) {
    const gender = user.genderLabel;

    return (
        <Link
            href={`/profile/${user.id}`}
            prefetch={false}
            className="group overflow-hidden">
            <div className="relative aspect-square overflow-hidden ">
                {/* Avatar */}
                {user.avatarUrl ? (
                    <Image
                        src={user.avatarUrl}
                        alt={user.nickname ?? "User"}
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
                    <div className="text-sm font-semibold text-white">
                        {user.nickname ?? ""}
                    </div>

                    <div className="mt-0.5 flex items-center gap-1 text-[10px] font-medium text-white/65">
                        {gender && <span>{gender}</span>}

                        {gender && user.age !== null && (
                            <span className="text-white/45">·</span>
                        )}

                        {user.age !== null && <span>{user.age}</span>}
                    </div>
                </div>

                <div className="absolute right-[10px] bottom-[10px] rounded-full bg-black/55 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
                    {formatDistance(user.distanceKm)}
                </div>
            </div>
        </Link>
    );
}
