import { UserProfileHeaderData } from "@/features/user/repositories/user";
import type {
    CurrentUserDTO,
    PublicUserDTO,
    UserGalleries,
    UserHeaderDatasDTO,
} from "@/features/user/types/user";

export function mapUserGalleries(galleries: UserGalleries): UserGalleries {
    return {
        galleries: galleries.galleries.map((gallery) => ({
            ...gallery,
            images: gallery.images.map((image) => ({
                ...image,
            })),
        })),
    };
}

export function toCurrentUserDTO(user: {
    id: string;
    username: string;
    email: string;
    emailVerified: boolean;
    role: CurrentUserDTO["role"];
}): CurrentUserDTO {
    return {
        id: user.id,
        username: user.username,
        email: user.email,
        emailVerified: user.emailVerified,
        role: user.role,
    };
}

export function toPublicUserDTO(user: {
    id: string;
    username: string;
}): PublicUserDTO {
    return {
        id: user.id,
        username: user.username,
    };
}

export function toUserProfileHeaderDataDTO(
    user: UserProfileHeaderData,
): UserHeaderDatasDTO {
    return {
        id: user.id,
        nickname: user.userData?.nickname ?? null,
        birth: user.userData?.birth?.toISOString() ?? null,
        avatarUrl: user.userData?.avatarUrl ?? null,
        bio: user.userData?.bio ?? null,
        gender: user.userData?.gender ?? null,
        sexuality: user.userData?.sexuality ?? null,
        description: user.userData?.description ?? null,
        appCity: user.userData?.appCity ?? null,
        transStatus: user.userData?.transStatus ?? null,
        countryCode: user.userData?.countryCode ?? null,
        region: user.userData?.region ?? null,
        city: user.userData?.city ?? null,
    };
}
