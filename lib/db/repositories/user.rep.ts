// repositories/user.rep.ts
import type { PaginatedResult, PaginationParams } from "../types/common.types";
import type {
    CreateUserInput,
    UpdateUserInput,
    User,
    UserFilter,
} from "../types/user.types";
import type { BaseRepository } from "./base.rep";

export interface UserRepository extends BaseRepository<
    User,
    CreateUserInput,
    UpdateUserInput
> {
    findByUsername(username: string): Promise<User | null>;
    findMany(
        filter?: UserFilter,
        pagination?: PaginationParams,
    ): Promise<PaginatedResult<User>>;
}
