import type { ManageFilter } from "../schemas/manage-users.schema";

export const manageUsersKeys = {
    all: ["manage-users"] as const,
    lists: () => [...manageUsersKeys.all, "list"] as const,
    list: (filter: ManageFilter) =>
        [...manageUsersKeys.lists(), { filter }] as const,
};
