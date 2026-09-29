"use client";

import BottomPageWrapper from "@/features/(app)/(ui)/BottomPageWrapper";
import NearbyEmpty from "@/features/nearby-users/components/NearbyEmpty";
import NearbyLocationRequired from "@/features/nearby-users/components/NearbyLocationRequired";
import NearbyUserCard from "@/features/nearby-users/components/NearbyUserCard";
import { useNearbyUsers } from "@/features/nearby-users/hooks/useNearbyUsers";
import {
    getNearbyErrorMessage,
    isLocationRequiredError,
} from "@/features/nearby-users/utils/nearby-errors";
import { useLoadMoreOnVisible } from "@/lib/hooks/useLoadMoreOnVisible";
import { useMemo } from "react";

export default function NearbyScreen() {
    const {
        data,
        isPending,
        isError,
        error,
        refetch,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage,
    } = useNearbyUsers();

    const users = useMemo(
        () => data?.pages.flatMap((page) => page.items) ?? [],
        [data],
    );

    const sentinelRef = useLoadMoreOnVisible(
        () => void fetchNextPage(),
        Boolean(hasNextPage) && !isFetchingNextPage,
    );

    if (isPending) {
        return (
            <BottomPageWrapper>
                <p className="py-6 text-center text-sm text-neutral-400">
                    Betöltés...
                </p>
            </BottomPageWrapper>
        );
    }

    if (isError) {
        return (
            <BottomPageWrapper>
                {isLocationRequiredError(error) ? (
                    <NearbyLocationRequired />
                ) : (
                    <div className="flex min-h-[300px] flex-col items-center justify-center gap-3 text-center">
                        <p role="alert" className="text-sm text-neutral-400">
                            {getNearbyErrorMessage(error)}
                        </p>
                        <button
                            type="button"
                            onClick={() => void refetch()}
                            className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white">
                            Újrapróbálás
                        </button>
                    </div>
                )}
            </BottomPageWrapper>
        );
    }

    return (
        <BottomPageWrapper>
            {users.length === 0 ? (
                <NearbyEmpty />
            ) : (
                <div>
                    <div className="grid grid-cols-3 gap-[1px]">
                        {users.map((user) => (
                            <NearbyUserCard key={user.id} user={user} />
                        ))}
                    </div>

                    <div ref={sentinelRef} aria-hidden />

                    {isFetchingNextPage && (
                        <p className="py-4 text-center text-xs text-neutral-400">
                            Több felhasználó betöltése...
                        </p>
                    )}
                </div>
            )}
        </BottomPageWrapper>
    );
}
