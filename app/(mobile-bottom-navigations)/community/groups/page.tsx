import { requireCurrentUser } from "@/features/auth/lib/session";
import GroupsScreen from "@/features/groups/components/GroupsScreen";
import { groupsInfiniteQueryOptions } from "@/features/groups/hooks/groups.queries";
import { DEFAULT_GROUPS_PAGE_SIZE } from "@/features/groups/schemas/groups.schema";
import { listGroups } from "@/features/groups/server/groups.service";
import { getServerQueryClient } from "@/lib/query/server-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { redirect } from "next/navigation";

export default async function GroupsPage() {
    const currentUser = await requireCurrentUser();
    if (!currentUser) redirect("/login"); // igazítsd a login route-odhoz

    const queryClient = getServerQueryClient();
    // ugyanaz a kulcs, mint a kliensen, de a queryFn közvetlenül a service-t hívja
    // (szerveren nem kell a saját API-dat fetchelni)
    await queryClient.prefetchInfiniteQuery({
        ...groupsInfiniteQueryOptions(),
        queryFn: () =>
            listGroups(currentUser.id, { limit: DEFAULT_GROUPS_PAGE_SIZE }),
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <GroupsScreen />
        </HydrationBoundary>
    );
}
