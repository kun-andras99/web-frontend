export const ManageUsersRelation = {
    FAVORITES: "favorites",
    FRIENDS: "friends",
    BLOCKED: "blocked",
} as const;

export const ManageUsersFilter = {
    ALL: "all",
    FAVORITES: "favorites",
    FRIENDS: "friends",
    BLOCKED: "blocked",
} as const;

export type ManageUsersRelation =
    (typeof ManageUsersRelation)[keyof typeof ManageUsersRelation];

export type ManageUsersFilter =
    (typeof ManageUsersFilter)[keyof typeof ManageUsersFilter];
