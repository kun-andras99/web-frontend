import {
    User,
    UserData,
    UserGenderInterest,
    UserLookingFor,
    UserPreference,
    UserSexualityInterest,
} from "../../../prisma/generated/prisma/client";

export type ProfileTab =
    "about" | "photos" | "interests" | "looking-for" | "activity";

export interface ProfileUser {
    id: string;
    username: string;

    bio?: string | null;
    age?: number | null;
    location?: string | null;

    photos?: string[];

    interests?: string[];

    lookingFor?: string[];
}

export type ProfileWithRelations = User & {
    userData: UserData | null;
    userPreference: UserPreference | null;
    lookingFor: UserLookingFor[];
    genderInterest: UserGenderInterest[];
    sexualityInteres: UserSexualityInterest[];
};
