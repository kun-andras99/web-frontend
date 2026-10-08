"use client";

import { useQuery } from "@tanstack/react-query";

import { useAuth } from "@/features/auth/components/provider/AuthProvider";
import type { SessionUser } from "@/features/auth/types/auth-index";
import { refreshSession } from "@/lib/http/auth-fetch";

async function requestCurrentUser(): Promise<SessionUser | null> {
    const response = await fetch("/api/auth/me", {
        method: "GET",
        credentials: "include",
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error("Failed to fetch current user.");
    }

    return response.json();
}

/**
 * A `/api/auth/me` vendégnek 200 + `null`-t ad. Ez lejárt (15 perces) access
 * token esetén is így van, ezért `null`-nál egyszer megpróbáljuk frissíteni
 * a sessiont a refresh tokennel, és csak utána mondjuk, hogy nincs user.
 */
async function fetchCurrentUser(): Promise<SessionUser | null> {
    const user = await requestCurrentUser();
    if (user) return user;

    const refreshed = await refreshSession();
    return refreshed ? requestCurrentUser() : null;
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
