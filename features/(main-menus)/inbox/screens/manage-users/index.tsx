"use client";

import FilterBox from "@/features/(main-menus)/inbox/components/FilterBox";
import LoadManageUsersBox from "@/features/(main-menus)/inbox/components/LoadManageUsersBox";
import { useFilteredManageUsers } from "@/features/(main-menus)/inbox/hooks/useFilteredManageUsers";
import { useManageUsersFilter } from "@/features/(main-menus)/inbox/hooks/useManageUsersFilter";
import { ManageUsersFilter } from "@/features/(main-menus)/inbox/types/manage-users-filter.types";
import { ManageUsers } from "@/features/(main-menus)/inbox/types/manage-users.types";

interface ManageUsersScreenProps {
    manageUsers: ManageUsers[];
}

const manageUsersFilterOptions = [
    {
        value: ManageUsersFilter.ALL,
        label: "All",
    },
    {
        value: ManageUsersFilter.FAVORITES,
        label: "Favorites",
    },
    {
        value: ManageUsersFilter.FRIENDS,
        label: "Friends",
    },
    {
        value: ManageUsersFilter.BLOCKED,
        label: "Blocked",
    },
];

export default function ManageUsersScreen({
    manageUsers,
}: ManageUsersScreenProps) {
    const { filter, setFilter } = useManageUsersFilter();

    const filteredManageUsers = useFilteredManageUsers({
        manageUsers,
        filter,
    });

    console.log(manageUsers);

    return (
        <main className="bottom-page">
            <FilterBox
                value={filter}
                options={manageUsersFilterOptions}
                clickChange={setFilter}
            />

            <LoadManageUsersBox manageUsers={filteredManageUsers} />
        </main>
    );
}
