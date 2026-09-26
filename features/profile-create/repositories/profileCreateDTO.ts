import { Gender, Sexuality } from "../../../prisma/generated/prisma";

export interface CreateProfileDTO {
    userId: string;
    nickname: string;
    birth: Date;
    gender: Gender;
    sexuality: Sexuality;
    avatarUrl: string | null;
}
