import { formatDistance } from "@/lib/utils/formatDistanceMKm";
import { formatVisitTime } from "@/lib/utils/formatVisitTime";
import Image from "next/image";
import Link from "next/link";
import type { VisitorDTO } from "../schemas/visitors.schema";

export default function VisitorCard({ visitor }: { visitor: VisitorDTO }) {
    const gender = visitor.genderLabel;
    const distance = formatDistance(visitor.distanceKm);

    return (
        <Link
            href={`/profile/${visitor.userId}`}
            className="group overflow-hidden">
            <div className="relative aspect-square overflow-hidden">
                {visitor.avatarUrl ? (
                    <Image
                        src={visitor.avatarUrl}
                        alt={visitor.nickname ?? "Profilkép"}
                        fill
                        sizes="(max-width: 640px) 50vw, 300px"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-white/5">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-xl font-semibold text-white/40">
                            {visitor.nickname?.charAt(0).toUpperCase() ?? "?"}
                        </div>
                    </div>
                )}

                {/* Alsó gradient */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

                {/* Bal alsó - profil adatok */}
                <div className="absolute right-20 bottom-[10px] left-[10px]">
                    <div className="truncate text-sm font-semibold text-white">
                        {visitor.nickname ?? ""}
                    </div>

                    <div className="mt-0.5 flex items-center gap-1 truncate text-[10px] font-medium text-white/65">
                        {gender && <span>{gender}</span>}

                        {gender && distance && (
                            <span className="text-white/45">·</span>
                        )}

                        {distance && <span>{distance}</span>}
                    </div>
                </div>

                {/* Jobb alsó - megtekintési idő */}
                <div
                    suppressHydrationWarning
                    className="absolute right-[10px] bottom-[10px] rounded-full bg-black/55 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
                    {formatVisitTime(new Date(visitor.visitedAt))}
                </div>
            </div>
        </Link>
    );
}
