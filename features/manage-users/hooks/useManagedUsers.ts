"use client";

import { useInfiniteQuery, type InfiniteData } from "@tanstack/react-query";
import type {
    ManagedUsersPageDTO,
    ManageFilter,
} from "../schemas/manage-users.schema";
import { managedUsersInfiniteQueryOptions } from "./manage-users.queries";

// Külön, stabil függvény: a React Query csak akkor számolja újra, ha az adat változik.
const selectManagedUsers = (
    data: InfiniteData<ManagedUsersPageDTO, string | undefined>,
) => ({
    users: data.pages.flatMap((page) => page.items),
    counts: data.pages[0]?.counts ?? null,
});

export function useManagedUsers(filter: ManageFilter) {
    return useInfiniteQuery({
        ...managedUsersInfiniteQueryOptions(filter),
        select: selectManagedUsers,
    });
}
