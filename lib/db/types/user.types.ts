import { UserData } from "../../../prisma/generated/prisma/browser";
import {
    Gender,
    GenderInterest,
    LookingFor,
    RelationshipStatus,
    Sexuality,
    UserRole,
} from "./enums";

export interface User {
    id: number;
    username: string;
    avatarUrl: string;
    role: UserRole;
    relationshipStatus: RelationshipStatus;
    interestedIn: GenderInterest[];
    lookingFor: LookingFor[];
    userData: UserData;
    isVerified: boolean;
    isActive: boolean;
    lat: number | null;
    lng: number | null;
}

/**
 * findMany szűrők — tudatosan úgy néznek ki, mint egy Prisma `where`,
 * hogy a fake és a majdani Prisma repo logikája ne térjen el egymástól.
 */
export interface UserFilter {
    role?: UserRole;
    gender?: Gender;
    sexuality?: Sexuality;
    relationshipStatus?: RelationshipStatus;
    /** true, ha a user lookingFor listája TARTALMAZ bármelyiket ezek közül */
    lookingFor?: LookingFor[];
    /** true, ha a user interestedIn listája TARTALMAZ bármelyiket ezek közül */
    interestedIn?: GenderInterest[];
    userData: UserData;
    /** case-insensitive részleges egyezés username/nickname mezőkön */
    search?: string;
}

export interface UserListItem {
    id: number;
    username: string;
    nickname: string;
}

export interface UserListResponse {
    data: {
        user: UserListItem[];
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    };
}
