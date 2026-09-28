import {
    Gender,
    UserData,
    UserPreference,
} from "../../../prisma/generated/prisma";

export type ProfileTab = "statistics" | "dress" | "datas" | "albums" | "pin";

export interface IconProps {
    size?: number | string;
    startColor?: string;
    strokeWidth?: number;
}

export interface ProfileTabConfig {
    id: ProfileTab;
    label: string;
    icon: React.ComponentType<IconProps>;
    iconHover: React.ComponentType<IconProps>;
}

export interface ProfileHeaderUserType {
    id: string;

    lat: number | null;
    lng: number | null;
    avatarUrl?: string | null;
    status?: string | null;
    bio?: string | null;
    age?: number | null;
    lastActiveAt: string | null;
    locationEnabled: boolean | null;
    relationShipStatus: string | null;
    partnerUserId: string | null;
    partnerOf: string | null;
}

export interface ProfilePartner {
    id: string;
    nickname: string;
    gender: Gender;
}

export interface ProfileFriend {
    id: string;
    nickname: string;
    gender: Gender;
    avatar?: string | null;
}

export interface ProfileRelations {
    partner: ProfilePartner | null;
    friends: ProfileFriend[];
}

export interface ProfileWithRelation {
    userData: UserData | null;
    userPreference: UserPreference | null;
}

export interface ProfileUser
    extends ProfileHeaderUserType, ProfileWithRelation, ProfileRelations {}

//     export type ProfileUser = Prisma.UsersGetPayload<{
//         select: {
//             id: true;

//             status: true;
//             locationEnabled: true;
//             lastActiveAt: true;

//             relationshipStatus: true;
//             partnerUserId: true;

//             userData: true;
//             userPreference: true;

//             partnerUser: {
//                 select: {
//                     id: true;

//                     userData: {
//                         select: {
//                             nickname: true;
//                             gender: true;
//                         };
//                     };
//                 };
//             };

//             partnerOf: {
//                 select: {
//                     id: true;

//                     userData: {
//                         select: {
//                             nickname: true;
//                             gender: true;
//                         };
//                     };
//                 };
//             };

//             friendshipsAsUser1: {
//                 select: {
//                     id: true;

//                     user2: {
//                         select: {
//                             id: true;

//                             userData: {
//                                 select: {
//                                     nickname: true;
//                                     gender: true;
//                                 };
//                             };
//                         };
//                     };
//                 };
//             };

//             friendshipsAsUser2: {
//                 select: {
//                     id: true;

//                     user1: {
//                         select: {
//                             id: true;

//                             userData: {
//                                 select: {
//                                     nickname: true;
//                                     gender: true;
//                                 };
//                             };
//                         };
//                     };
//                 };
//             };
//         };
//     }>;
