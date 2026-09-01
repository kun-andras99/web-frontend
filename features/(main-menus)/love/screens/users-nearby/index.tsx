"use client";

import Link from "next/link";
import { User } from "../../../../../prisma/generated/prisma/client";

interface UsersNearbyScreenProps {
    users: User[];
}

export default function UsersNearbyScreen({ users }: UsersNearbyScreenProps) {
    return (
        <main className="bottom-page">
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
        </main>
    );
}
