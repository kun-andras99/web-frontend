"use client";

import BottomPageWrapper from "@/features/_components/ui/bottom-page-wrapper";
import LiquidGlassBox from "@/features/_components/ui/liquid-glass-box";
import { User } from "@/lib/db";
import Link from "next/link";

interface UsersNearbyScreenProps {
    users: User[];
}

export default function UsersNearbyScreen({ users }: UsersNearbyScreenProps) {
    return (
        <BottomPageWrapper>
            <div className="grid grid-cols-3 gap-[1px]">
                {users.map((user) => {
                    return (
                        <Link
                            key={user.id}
                            href={`/profile/${user.id}`}
                            className="user-item">
                            <div
                                key={user.id}
                                className="relative aspect-square overflow-hidden">
                                {user.username}
                            </div>
                        </Link>
                    );
                })}
            </div>
            <LiquidGlassBox />
        </BottomPageWrapper>
    );
}
