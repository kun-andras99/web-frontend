"use client";

import BottomPageWrapper from "@/features/(app)/(ui)/BottomPageWrapper";
import ManageUserModal from "@/features/manage-users/components/ManageUserModal";
import ManagedUserRow from "@/features/manage-users/components/ManageUserRow";
import ManageUsersEmpty from "@/features/manage-users/components/ManageUsersEmpty";
import ManageUsersFilters from "@/features/manage-users/components/ManageUsersFilter";
import { useLoadMoreOnVisible } from "@/lib/hooks/useLoadMoreOnVisible";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { useManagedUsers } from "../hooks/useManagedUsers";
import {
    DEFAULT_MANAGE_FILTER,
    parseManageFilter,
    type ManageFilter,
} from "../schemas/manage-users.schema";
import { getManageUsersErrorMessage } from "../utils/manage-users-errors";

const NO_USERS: never[] = [];

export default function ManageUsersScreen() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const filter = parseManageFilter(searchParams.get("filter"));

    const query = useManagedUsers(filter);
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const users = query.data?.users ?? NO_USERS;
    const selectedUser = useMemo(
        () => users.find((user) => user.id === selectedId) ?? null,
        [users, selectedId],
    );

    console.log(query);

    // A szűrő az URL-ben él (megosztható, a Vissza gomb működik). A natív replaceState
    // integrálódik a Next.js routerrel, ezért nincs szerver-újrarenderelés.
    const changeFilter = useCallback(
        (next: ManageFilter) => {
            const params = new URLSearchParams(searchParams.toString());
            if (next === DEFAULT_MANAGE_FILTER) params.delete("filter");
            else params.set("filter", next);

            const search = params.toString();
            window.history.replaceState(
                null,
                "",
                search ? `${pathname}?${search}` : pathname,
            );
            setSelectedId(null);
        },
        [pathname, searchParams],
    );

    const sentinelRef = useLoadMoreOnVisible(
        () => void query.fetchNextPage(),
        Boolean(query.hasNextPage) && !query.isFetchingNextPage,
    );

    let content: React.ReactNode;

    if (query.isPending) {
        content = (
            <p className="py-6 text-center text-sm text-white/40">
                Betöltés...
            </p>
        );
    } else if (query.isError) {
        content = (
            <div className="flex min-h-[220px] flex-col items-center justify-center gap-3 text-center">
                <p role="alert" className="text-sm text-white/75">
                    {getManageUsersErrorMessage(query.error)}
                </p>
                <button
                    type="button"
                    onClick={() => void query.refetch()}
                    className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white">
                    Újrapróbálás
                </button>
            </div>
        );
    } else if (users.length === 0) {
        content = <ManageUsersEmpty filter={filter} />;
    } else {
        content = (
            <>
                <ul className=" flex flex-row flex-wrap">
                    {/* <ul className="divide-y divide-white/5"> */}
                    {users.map((user) => (
                        <ManagedUserRow
                            key={user.id}
                            user={user}
                            onEdit={setSelectedId}
                        />
                    ))}
                </ul>

                <div ref={sentinelRef} aria-hidden />

                {query.isFetchingNextPage && (
                    <p className="py-4 text-center text-xs text-white/40">
                        Több felhasználó betöltése...
                    </p>
                )}
            </>
        );
    }

    return (
        <BottomPageWrapper>
            <div className=" w-full ">
                <h1 className="text-lg font-bold text-white">
                    Felhasználók kezelése
                </h1>
                <p className=" text-sm text-white/50">
                    Barátok, kedvencek és tiltott felhasználók egy helyen.
                </p>

                <ManageUsersFilters
                    active={filter}
                    counts={query.data?.counts ?? null}
                    onChange={changeFilter}
                />

                <div className="">{content}</div>
            </div>

            <ManageUserModal
                user={selectedUser}
                onClose={() => setSelectedId(null)}
            />
        </BottomPageWrapper>
    );
}
