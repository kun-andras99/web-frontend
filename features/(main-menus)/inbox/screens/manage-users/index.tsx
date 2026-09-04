"use client";

import LoadManageUsersBox from "@/features/(main-menus)/inbox/components/LoadManageUsersBox";
import { useFilteredManageUsers } from "@/features/(main-menus)/inbox/hooks/useFilteredManageUsers";
import { useManageUsersFilter } from "@/features/(main-menus)/inbox/hooks/useManageUsersFilter";
import { ManageUsersFilter } from "@/features/(main-menus)/inbox/types/manage-users-filter.types";
import { ManageUsers } from "@/features/(main-menus)/inbox/types/manage-users.types";
import BottomPageWrapper from "@/features/_components/ui/bottom-page-wrapper";
import TopFilter from "@/features/_components/ui/top-filter";
import { usePathname } from "next/navigation";

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
    const pathname = usePathname();

    const filteredManageUsers = useFilteredManageUsers({
        manageUsers,
        filter,
    });

    console.log(pathname);

    return (
        <BottomPageWrapper>
            <TopFilter>
                <div className="filters">
                    <div className="filter">All</div>
                    <div className="filter">Favorites</div>
                    <div className="filter active">Friends</div>
                    <div className="filter">Blocked</div>
                </div>
            </TopFilter>

            <LoadManageUsersBox manageUsers={filteredManageUsers} />
        </BottomPageWrapper>
    );
}
