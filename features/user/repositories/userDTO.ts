import { Prisma, UserRole } from "../../../prisma/generated/prisma";

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

export const userGallerySelect = Prisma.validator<Prisma.GallerySelect>()({
    id: true,
    name: true,
    type: true,
    visibility: true,
    createdAt: true,

    shares: {
        select: {
            id: true,
            expiresAt: true,
        },
    },

    images: {
        orderBy: {
            sortOrder: "asc",
        },
        select: {
            id: true,
            url: true,
            mimeType: true,
            width: true,
            height: true,
            isAvatar: true,
            sortOrder: true,
        },
    },
});

export type UserGalleryDTO = Prisma.GalleryGetPayload<{
    select: typeof userGallerySelect;
}>;