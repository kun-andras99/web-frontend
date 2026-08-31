"use client";

import { useUserSelector } from "@/features/user/hooks/useUserSelector";
import { userSelectors } from "@/features/user/selectors/users.selectors";
import { User } from "@/lib/db/types/user.types";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

interface UserPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default function UserPage({ params }: UserPageProps) {
    const [user, setUser] = useState<User | null>(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState<string | null>(null);
    const selectedUser = useUserSelector(user, userSelectors.profile);

    console.log(selectedUser);

    useEffect(() => {
        const loadUser = async () => {
            try {
                const { id } = await params;

                const response = await fetch(`/api/users/${id}`);

                if (response.status === 404) {
                    setError("User not found");
                    return;
                }

                if (!response.ok) {
                    throw new Error("Failed to fetch user");
                }

                const data: User = await response.json();

                setUser(data);
            } catch (error) {
                console.error(error);

                setError("Nem sikerült betölteni a felhasználót.");
            } finally {
                setLoading(false);
            }
        };

        loadUser();
    }, [params]);

    if (loading) {
        return <div>Felhasználó betöltése...</div>;
    }

    if (error || !user) {
        notFound();
    }

    return (
        <main>
            <h1>{user.nickname}</h1>
            <Image
                src={user.avatar}
                alt={user.nickname}
                width={120}
                height={120}
            />

            <p>@{user.username}</p>

            <p>Gender: {user.gender}</p>

            <p>Sexuality: {user.sexuality}</p>

            <p>Relationship: {user.relationshipStatus}</p>

            <h2>Looking for</h2>

            <ul>
                {user.lookingFor.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </main>
    );
}
