"use client";

import { useFilteredManageUsers } from "@/features/(main-menus)/inbox/hooks/useFilteredManageUsers";
import { useManageUsersFilter } from "@/features/(main-menus)/inbox/hooks/useManageUsersFilter";
import { ManageUsersFilter } from "@/features/(main-menus)/inbox/types/manage-users-filter.types";
import { ManageUsers } from "@/features/(main-menus)/inbox/types/manage-users.types";
import BottomPageWrapper from "@/features/_components/ui/bottom-page-wrapper";
import LiquidGlassBox from "@/features/_components/ui/liquid-glass-box";
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
            <LiquidGlassBox />

            {/* <LoadManageUsersBox manageUsers={filteredManageUsers} /> */}
        </BottomPageWrapper>
    );
}
