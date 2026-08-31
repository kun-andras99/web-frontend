"use client";

import UsersScreenSkeleton from "@/features/user/all-user/users-sccreen/skeleton";
import { UserListResponse } from "@/lib/db/types/user.types";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

export default function UsersScreen() {
    const [users, setUsers] = useState<UserListResponse | null>(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadUser = async () => {
            try {
                const response = await fetch(`/api/users`);

                if (response.status === 404) {
                    setError("User not found");
                    return;
                }

                if (!response.ok) {
                    throw new Error("Failed to fetch user");
                }

                const data: UserListResponse = await response.json();

                setUsers(data.data.user);
            } catch (error) {
                console.error(error);

                setError("Nem sikerült betölteni a felhasználót.");
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            }
        };

        loadUser();
    }, []);

    if (loading) {
        return <UsersScreenSkeleton />;
    }

    if (error || !users) {
        notFound();
    }

    return (
        <main className="blogs-page">
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
                                <Image
                                    src={user.avatar}
                                    alt={user.nickname}
                                    fill
                                    className="object-cover"
                                    sizes="33.33vw"
                                />
                            </div>
                        </Link>
                    );
                })}
            </div>
            {/* <div className="users-list">
                {users.map((user: User) => {
                    return (
                        <>
                            <p>
                                <Link
                                    key={user.id}
                                    href={`/profile/${user.id}`}
                                    className="user-item">
                                    <Image
                                        src={user.avatar}
                                        alt={``}
                                        width={40}
                                        height={40}
                                    />
                                    {user.username} - {user.nickname} -{" "}
                                    {user.gender}
                                </Link>
                            </p>
                        </>
                    );
                })}
            </div> */}
        </main>
    );
}
