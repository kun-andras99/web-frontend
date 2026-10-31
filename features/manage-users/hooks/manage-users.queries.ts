import { infiniteQueryOptions } from "@tanstack/react-query";
import { fetchManagedUsersPage } from "../api/manage-users.api";
import type { ManageFilter } from "../schemas/manage-users.schema";
import { manageUsersKeys } from "./manage-users.keys";

export const managedUsersInfiniteQueryOptions = (filter: ManageFilter) =>
    infiniteQueryOptions({
        queryKey: manageUsersKeys.list(filter),
        queryFn: ({ pageParam, signal }) =>
            fetchManagedUsersPage({ filter, cursor: pageParam }, signal),
        initialPageParam: undefined as string | undefined,
        getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
        staleTime: 30 * 1000,
    });
