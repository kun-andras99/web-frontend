import { requireCurrentUser } from "@/features/auth/lib/session";
import ManageUsersScreen from "@/features/manage-users/components/ManageUsersScreen";
import { managedUsersInfiniteQueryOptions } from "@/features/manage-users/hooks/manage-users.queries";
import {
    MANAGE_USERS_PAGE_SIZE,
    parseManageFilter,
} from "@/features/manage-users/schemas/manage-users.schema";
import { listManagedUsers } from "@/features/manage-users/server/manage-users.service";
import { getServerQueryClient } from "@/lib/query/server-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Felhasználók kezelése",
    robots: { index: false },
};

interface ManageUsersPageProps {
    searchParams: Promise<{ filter?: string | string[] }>;
}

export default async function ManageUsersPage({
    searchParams,
}: ManageUsersPageProps) {
    const user = await requireCurrentUser();
    const { filter: rawFilter } = await searchParams;
    const filter = parseManageFilter(
        Array.isArray(rawFilter) ? rawFilter[0] : rawFilter,
    );

    const queryClient = getServerQueryClient();

    // csak az URL-ben kért szűrőt töltjük elő, a többi az első váltáskor jön
    await queryClient.prefetchInfiniteQuery({
        ...managedUsersInfiniteQueryOptions(filter),
        queryFn: () =>
            listManagedUsers(user.id, {
                filter,
                limit: MANAGE_USERS_PAGE_SIZE,
            }),
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <ManageUsersScreen />
        </HydrationBoundary>
    );
}
