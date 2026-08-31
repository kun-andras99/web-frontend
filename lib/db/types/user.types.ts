import { BaseEntity, CreateInput, UpdateInput } from "./common.types";
import {
    Gender,
    GenderInterest,
    LookingFor,
    RelationshipStatus,
    Sexuality,
    UserRole,
} from "./enums";

export interface User extends BaseEntity {
    id: number;
    username: string;
    nickname: string;
    avatar: string;
    role: UserRole;
    gender: Gender;
    sexuality: Sexuality;
    relationshipStatus: RelationshipStatus;
    lookingFor: LookingFor[];
    interestedIn: GenderInterest[];
}

export type CreateUserInput = CreateInput<User>;
export type UpdateUserInput = UpdateInput<User>;

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
