import type { UserId } from "@/features/auth/types/auth-index";
import { UserGalleries } from "@/features/user/types/user";
import { prisma } from "@/lib/prisma";
import "server-only";
import { Prisma } from "../../../prisma/generated/prisma";

export function getUserByEmail(email: string) {
    return prisma.users.findUnique({ where: { email } });
}

export function getUserByUsername(username: string) {
    return prisma.users.findUnique({ where: { username } });
}

export function getUserById(id: string) {
    return prisma.users.findUnique({
        where: {
            id,
        },

        select: {
            id: true,
            email: true,
            username: true,
            emailVerified: true,
            role: true,

            userData: {
                select: {
                    id: true,
                },
            },
        },
    });
}
interface GetUserGalleriesParams {
    profileUserId: string;
    viewerUserId: string;
}

export async function getUserGalleries({
    profileUserId,
    viewerUserId,
}: GetUserGalleriesParams): Promise<UserGalleries> {
    const now = new Date();

    const galleries = await prisma.gallery.findMany({
        where: {
            ownerId: profileUserId,
        },

        orderBy: {
            createdAt: "asc",
        },

        select: {
            id: true,
            name: true,
            type: true,
            visibility: true,
            createdAt: true,

            shares: {
                where: {
                    recipientId: viewerUserId,
                    revokedAt: null,
                    expiresAt: {
                        gt: now,
                    },
                    purgeAfter: {
                        gt: now,
                    },
                },

                select: {
                    expiresAt: true,
                },

                take: 1,
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
        },
    });

    const isOwner = profileUserId === viewerUserId;

    return {
        galleries: galleries.map((gallery) => {
            const hasActiveShare = gallery.shares.length > 0;

            let access: UserGalleries["galleries"][number]["access"];

            if (isOwner) {
                access = "OWNER";
            } else if (gallery.visibility === "PUBLIC") {
                access = "PUBLIC";
            } else if (hasActiveShare) {
                access = "GRANTED";
            } else {
                access = "REQUEST_AVAILABLE";
            }

            const canView =
                isOwner || gallery.visibility === "PUBLIC" || hasActiveShare;

            return {
                id: gallery.id,
                name: gallery.name,
                type: gallery.type,
                visibility: gallery.visibility,
                createdAt: gallery.createdAt.toISOString(),

                images: canView ? gallery.images : [],

                access,
                canView,

                canRequestAccess:
                    !isOwner &&
                    gallery.visibility === "PRIVATE" &&
                    !hasActiveShare,

                accessExpiresAt: hasActiveShare
                    ? gallery.shares[0].expiresAt.toISOString()
                    : null,
            };
        }),
    };
}

export const userProfileHeaderDataSelect = {
    id: true,

    userData: {
        select: {
            nickname: true,
            gender: true,
            avatarUrl: true,
            birth: true,
            sexuality: true,
            appCity: true,
            description: true,
            bio: true,
            transStatus: true,
            countryCode: true,
            region: true,
            city: true,
        },
    },
} satisfies Prisma.UsersSelect;

export type UserProfileHeaderData = Prisma.UsersGetPayload<{
    select: typeof userProfileHeaderDataSelect;
}>;

export function getUserProfileHeaderDataById(id: UserId) {
    return prisma.users.findUnique({
        where: {
            id,
        },
        select: userProfileHeaderDataSelect,
    });
}

export function createUser(input: {
    username: string;
    email: string;
    passwordHash: string;
}) {
    return prisma.users.create({
        data: {
            username: input.username,
            email: input.email,
            passwordHash: input.passwordHash,
        },
    });
}

export function markEmailAsVerified(id: UserId) {
    return prisma.users.update({
        where: { id },
        data: { emailVerified: new Date() },
    });
}

export function updateUserPassword(id: UserId, passwordHash: string) {
    return prisma.users.update({
        where: { id },
        data: { passwordHash },
    });
}

export async function getUserByIdentifier(identifier: string) {
    const value = identifier.trim();

    return prisma.users.findFirst({
        where: {
            OR: [
                {
                    email: value.toLowerCase(),
                },
                {
                    username: value,
                },
            ],
        },
    });
}
