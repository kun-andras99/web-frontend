import { ProfileAvatarImage } from "@/features/profile/avatar-change/types/avatar-change.types";

export const PROFILE_AVATAR_MOCK_IMAGES: ProfileAvatarImage[] = [
    {
        id: "image-1",
        url: "/assets/images/user-blank-1.png",
        alt: "Profile image 1",
        likesCount: 2,
        isLiked: false,
        likes: [
            {
                id: "like-1",
                userId: "user-2",
                profileImageId: "image-1",
                user: {
                    id: "user-2",
                    username: "Peter",
                    avatarUrl: "/assets/images/user-blank-2.png",
                },
            },
            {
                id: "like-2",
                userId: "user-2",
                profileImageId: "image-1",
                user: {
                    id: "user-3",
                    username: "Alex",
                    avatarUrl: "/assets/images/user-blank-3.png",
                },
            },
        ],
    },
    {
        id: "image-2",
        url: "/assets/images/user-blank-2.png",
        alt: "Profile image 2",
        likesCount: 1,
        isLiked: false,
        likes: [
            {
                id: "like-2",
                userId: "user-2",
                profileImageId: "image-1",
                user: {
                    id: "user-3",
                    username: "Alex",
                    avatarUrl: "/assets/images/user-blank-4.png",
                },
            },
        ],
    },
    {
        id: "image-3",
        url: "/assets/images/user-blank-3.png",
        alt: "Profile image 3",
        likesCount: 3,
        isLiked: false,
        likes: [
            {
                id: "like-1",
                userId: "user-2",
                profileImageId: "image-1",
                user: {
                    id: "user-2",
                    username: "Peter",
                    avatarUrl: "/assets/images/user-blank-2.png",
                },
            },
            {
                id: "like-2",
                userId: "user-2",
                profileImageId: "image-1",
                user: {
                    id: "user-3",
                    username: "Alex",
                    avatarUrl: "/assets/images/user-blank-3.png",
                },
            },
            {
                id: "like-2",
                userId: "user-2",
                profileImageId: "image-1",
                user: {
                    id: "user-1",
                    username: "Alex",
                    avatarUrl: "/assets/images/user-blank-1.png",
                },
            },
        ],
    },
    {
        id: "image-4",
        url: "/assets/images/user-blank-4.png",
        alt: "Profile image 4",
        likesCount: 5,
        isLiked: false,
        likes: [
            {
                id: "like-2",
                userId: "user-2",
                profileImageId: "image-1",
                user: {
                    id: "user-3",
                    username: "Alex",
                    avatarUrl: "/assets/images/user-blank-5.png",
                },
            },
            {
                id: "like-1",
                userId: "user-2",
                profileImageId: "image-1",
                user: {
                    id: "user-2",
                    username: "Peter",
                    avatarUrl: "/assets/images/user-blank-4.png",
                },
            },
            {
                id: "like-2",
                userId: "user-2",
                profileImageId: "image-1",
                user: {
                    id: "user-3",
                    username: "Alex",
                    avatarUrl: "/assets/images/user-blank-3.png",
                },
            },

            {
                id: "like-2",
                userId: "user-2",
                profileImageId: "image-1",
                user: {
                    id: "user-3",
                    username: "Alex",
                    avatarUrl: "/assets/images/user-blank-2.png",
                },
            },
            {
                id: "like-2",
                userId: "user-2",
                profileImageId: "image-1",
                user: {
                    id: "user-3",
                    username: "Alex",
                    avatarUrl: "/assets/images/user-blank-1.png",
                },
            },
        ],
    },
    {
        id: "image-5",
        url: "/assets/images/user-blank-5.png",
        alt: "Profile image 5",
        likesCount: 3,
        isLiked: false,
        likes: [
            {
                id: "like-1",
                userId: "user-2",
                profileImageId: "image-1",
                user: {
                    id: "user-2",
                    username: "Peter",
                    avatarUrl: "/assets/images/user-blank-2.png",
                },
            },
            {
                id: "like-2",
                userId: "user-2",
                profileImageId: "image-1",
                user: {
                    id: "user-3",
                    username: "Alex",
                    avatarUrl: "/assets/images/user-blank-3.png",
                },
            },
            {
                id: "like-2",
                userId: "user-2",
                profileImageId: "image-1",
                user: {
                    id: "user-1",
                    username: "Alex",
                    avatarUrl: "/assets/images/user-blank-1.png",
                },
            },
        ],
    },
];
