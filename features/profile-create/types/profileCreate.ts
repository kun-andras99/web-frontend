import { Gender, Sexuality } from "../../../prisma/generated/prisma";

export type ProfileCreateStep = "basics" | "identity";

export interface ProfileCreateForm {
    nickname: string;
    birth: string;
    avatar: File | null;
    avatarPreview: string | null;
    gender: Gender | null;
    sexuality: Sexuality | null;
}

export interface CreateProfilePayload {
    nickname: string;
    birth: string;
    gender: Gender;
    sexuality: Sexuality;
    avatar: File | null;
}

export interface CreateProfileResponse {
    success: boolean;
}
