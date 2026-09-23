import { UserRole } from "../../../prisma/generated/prisma";

export interface CurrentUserDTO {
    id: string;
    username: string;
    email: string;
    emailVerified: boolean;
    role: UserRole;
}

export interface PublicUserDTO {
    id: string;
    username: string;
}
