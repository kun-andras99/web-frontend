import { ManageUsersRelation } from "@/features/inbox/types/manage-users-filter.types";

export interface ManageUsers {
    id: number;
    userId: number;
    nickname: string;
    avatar: string;
    gender: string;
    birth: Date;

    relations: ManageUsersRelation[];
}
