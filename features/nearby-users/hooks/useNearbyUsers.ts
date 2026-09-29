"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { nearbyInfiniteQueryOptions } from "@/features/nearby-users/hooks/nearby.queries";

/** `enabled`: csak akkor kérdez, ha a megosztás be van kapcsolva és a pozíciónk már szinkronban van. */
export function useNearbyUsers() {
    return useInfiniteQuery(nearbyInfiniteQueryOptions());
}
