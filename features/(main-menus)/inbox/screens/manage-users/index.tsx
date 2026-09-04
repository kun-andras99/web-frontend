"use client";

import LoadManageUsersBox from "@/features/(main-menus)/inbox/components/LoadManageUsersBox";
import { useFilteredManageUsers } from "@/features/(main-menus)/inbox/hooks/useFilteredManageUsers";
import { useManageUsersFilter } from "@/features/(main-menus)/inbox/hooks/useManageUsersFilter";
import { ManageUsers } from "@/features/(main-menus)/inbox/types/manage-users.types";
import BottomPageWrapper from "@/features/_components/ui/bottom-page-wrapper";
import TopFilter from "@/features/_components/ui/top-filter";

interface ManageUsersScreenProps {
    manageUsers: ManageUsers[];
}

export default function ManageUsersScreen({
    manageUsers,
}: ManageUsersScreenProps) {
    const { filter, setFilter } = useManageUsersFilter();

    const filteredManageUsers = useFilteredManageUsers({
        manageUsers,
        filter,
    });

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
