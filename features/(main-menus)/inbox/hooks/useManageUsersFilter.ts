import { useState } from "react";

import {
    ManageUsersFilter,
    type ManageUsersFilter as ManageUsersFilterType,
} from "../types/manage-users-filter.types";

export function useManageUsersFilter(
    initialFilter: ManageUsersFilterType = ManageUsersFilter.ALL,
) {
    const [filter, setFilter] = useState<ManageUsersFilterType>(initialFilter);

    return {
        filter,
        setFilter,

        isAll: filter === ManageUsersFilter.ALL,
        isFavorites: filter === ManageUsersFilter.FAVORITES,
        isFriends: filter === ManageUsersFilter.FRIENDS,
        isBlocked: filter === ManageUsersFilter.BLOCKED,
    };
}
