import {
    GalleryType,
    GalleryVisibility,
    UserRole,
} from "../../../prisma/generated/prisma";

export type GalleryAccessState =
    "OWNER" | "PUBLIC" | "GRANTED" | "REQUEST_AVAILABLE" | "PENDING";

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

export interface MainProfileDatasDTO {
    id: string;
    nickname: string | null;
    avatarUrl: string | null;
}

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

export interface MainProfileDatasDTO {
    id: string;
    nickname: string | null;
    avatarUrl: string | null;
}

export interface UserGalleryImage {
    id: string;
    url: string;
    mimeType: string | null;
    width: number | null;
    height: number | null;
    isAvatar: boolean;
    sortOrder: number;
}

export interface UserGallery {
    id: string;
    name: string;
    type: GalleryType;
    visibility: GalleryVisibility;
    createdAt: string;

    images: UserGalleryImage[];

    access: GalleryAccessState;
    canView: boolean;
    canRequestAccess: boolean;
    accessExpiresAt: string | null;
}

export interface UserGalleries {
    galleries: UserGallery[];
}
