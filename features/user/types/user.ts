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

export type UserDTO = {
    id: string;
    nickname: string;
    avatarUrl: string;
    description: string;
    birth: string;
    gender: string;
    sexuality: string;
    city: string;
    country: string;
};

export interface UserHeaderDatasDTO {
    id: string;
    nickname: string | null;
    birth: string | null;
    avatarUrl: string | null;
    bio: string | null;
    gender: string | null;
    sexuality: string | null;
    description: string | null;
    appCity: string | null;
    transStatus: string | null;
    countryCode: string | null;
    region: string | null;
    city: string | null;
}
