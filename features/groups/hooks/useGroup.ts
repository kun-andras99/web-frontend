"use client";

import { useQuery } from "@tanstack/react-query";
import { groupDetailQueryOptions } from "./groups.queries";

export function useGroup(groupId: string) {
    return useQuery(groupDetailQueryOptions(groupId));
}
