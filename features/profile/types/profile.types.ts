import {
    UserData,
    UserPreference,
    Users,
} from "../../../prisma/generated/prisma";

export type ProfileTab = "statistics" | "dress" | "datas" | "albums" | "pin";

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

export type ProfileWithRelations = Users & {
    userData: UserData | null;
    userPreference: UserPreference | null;
};
