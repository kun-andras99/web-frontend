"use client";

import { useQuery } from "@tanstack/react-query";

async function fetchCurrentUserFull() {
    const response = await fetch("/api/auth/me/full", {
        credentials: "include",
    });

    if (response.status === 401) {
        return null;
    }

    if (!response.ok) {
        throw new Error("Failed to fetch current user.");
    }

    const data = await response.json();

    return data.user;
}

export function useCurrentUserFull() {
    return useQuery({
        queryKey: ["current-user-full"],
        queryFn: fetchCurrentUserFull,
        staleTime: 5 * 60 * 1000,
        retry: 1,
        refetchOnWindowFocus: false,
    });
}
