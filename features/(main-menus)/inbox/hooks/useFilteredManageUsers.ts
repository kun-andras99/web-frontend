import { useMemo } from "react";

import {
    ManageUsersFilter,
    type ManageUsersFilter as ManageUsersFilterType,
} from "@/features/(main-menus)/inbox/types/manage-users-filter.types";

import type { ManageUsers } from "@/features/(main-menus)/inbox/types/manage-users.types";

interface UseFilteredManageUsersParams {
    manageUsers: ManageUsers[];
    filter: ManageUsersFilterType;
}

export function useFilteredManageUsers({
    manageUsers,
    filter,
}: UseFilteredManageUsersParams) {
    return useMemo(() => {
        switch (filter) {
            case ManageUsersFilter.FAVORITES:
                return manageUsers.filter((user) =>
                    user.relations.includes(ManageUsersFilter.FAVORITES),
                );

            case ManageUsersFilter.FRIENDS:
                return manageUsers.filter((user) =>
                    user.relations.includes(ManageUsersFilter.FRIENDS),
                );

            case ManageUsersFilter.BLOCKED:
                return manageUsers.filter((user) =>
                    user.relations.includes(ManageUsersFilter.BLOCKED),
                );

            case ManageUsersFilter.ALL:
            default:
                return manageUsers;
        }
    }, [manageUsers, filter]);
}
