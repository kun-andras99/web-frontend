"use client";

import { apiFetch } from "@/lib/http/auth-fetch";

import { useQuery } from "@tanstack/react-query";

async function fetchCurrentUserFull() {
    const response = await apiFetch("/api/auth/me/full", {
        // vendégként a null user nem hiba → ne irányítson át
        redirectOnUnauthorized: false,
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
