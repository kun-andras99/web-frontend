import type { User } from "@/lib/db/types/user.types";

export const userSelectors = {
    card: (user: User) => ({
        id: user.id,
        nickname: user.nickname,
        avatar: user.avatar,
    }),

    profile: (user: User) => ({
        id: user.id,
        username: user.username,
        nickname: user.nickname,
        avatar: user.avatar,
        gender: user.gender,
        sexuality: user.sexuality,
        relationshipStatus: user.relationshipStatus,
        lookingFor: user.lookingFor,
        interestedIn: user.interestedIn,
    }),

    list: (user: User) => ({
        id: user.id,
        username: user.username,
        nickname: user.nickname,
        avatar: user.avatar,
    }),
};
