"use client";

import { UserWithProfile } from "@/lib/db/user";
import { useQuery } from "@tanstack/react-query";

async function fetchUsers(): Promise<UserWithProfile[]> {
    const response = await fetch("/api/users");

    if (!response.ok) {
        throw new Error("Failed to fetch users.");
    }

    return response.json();
}

export function useUsers() {
    return useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers,
    });
}
