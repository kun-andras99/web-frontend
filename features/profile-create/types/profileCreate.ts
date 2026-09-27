import { AppCity, Gender, Sexuality } from "../../../prisma/generated/prisma";

export type ProfileCreateStep = "basics" | "identity";

export interface ProfileCreateForm {
    nickname: string;
    birth: string;
    avatarPreview: string | null;
    gender: Gender | null;
    sexuality: Sexuality | null;
    appCity: AppCity | null;
}

export interface CreateProfilePayload {
    nickname: string;
    birth: string;
    gender: Gender;
    sexuality: Sexuality;
    appCity: AppCity;
}

export interface CreateProfileResponse {
    success: boolean;
}
