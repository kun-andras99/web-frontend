"use client";

import { visitorsInfiniteQueryOptions } from "@/features/visitors/hooks/visitors.queries";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useVisitors() {
    return useInfiniteQuery(visitorsInfiniteQueryOptions());
}
