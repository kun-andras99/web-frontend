export const ManageUsersFilter = {
    ALL: "all",
    FAVORITES: "favorites",
    FRIENDS: "friends",
    BLOCKED: "blocked",
} as const;

export type ManageUsersFilter =
    (typeof ManageUsersFilter)[keyof typeof ManageUsersFilter];
