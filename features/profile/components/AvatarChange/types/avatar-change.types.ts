export const PROFILE_AVATAR_COUNT = 5;

export const PROFILE_AVATAR_INTERVAL = 5000;

export const PROFILE_AVATAR_IMAGES = Array.from(
    { length: PROFILE_AVATAR_COUNT },
    (_, index) => `/assets/images/user-blank-${index + 1}.png`,
) as [string, string, string, string, string];

export type ProfileAvatarIndex = 0 | 1 | 2 | 3 | 4;

export interface ProfileAvatarUser {
    id: string;
    username: string;
    avatarUrl?: string | null;
}

export interface ProfileAvatarLikeUser {
    id: string;
    username: string;
    avatarUrl?: string | null;
}

export interface ProfileAvatarLike {
    id: string;
    userId: string;
    profileImageId: string;
    user: ProfileAvatarLikeUser;
}

export interface ProfileAvatarImage {
    id: string;
    url: string;
    alt?: string | null;
    likesCount: number;
    isLiked: boolean;
    likes?: ProfileAvatarLike[];
}

export interface ProfileAvatarChangeProps {
    username: string | null | undefined;
    images: ProfileAvatarImage[];
    autoPlay?: boolean;
    interval?: number;
    currentUserId?: string;
    onLikeChange?: (imageId: string, isLiked: boolean) => Promise<void> | void;
}
