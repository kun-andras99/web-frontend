"use client";

import { useQuery } from "@tanstack/react-query";

import type { SessionUser } from "@/features/auth/types/auth-index";
import { useAuth } from "@/features/auth/components/auth-provider";

async function fetchCurrentUser(): Promise<SessionUser | null> {
    const response = await fetch("/api/auth/me", {
        method: "GET",
        credentials: "include",
    });

    if (!response.ok) {
        throw new Error("Failed to fetch current user.");
    }

    return response.json();
}

export function useCurrentUser() {
    const initialUser = useAuth();
    
    return useQuery({
        queryKey: ["current-user"],
        queryFn: fetchCurrentUser,
        initialData: initialUser,
        staleTime: 5 * 60 * 1000,
        retry: 1,

        refetchOnWindowFocus: false,
    });
}
