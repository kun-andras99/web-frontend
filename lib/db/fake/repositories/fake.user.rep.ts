import { DuplicateError } from "../../repositories/errors.rep";
import type { UserRepository } from "../../repositories/user.rep";
import type {
    PaginatedResult,
    PaginationParams,
} from "../../types/common.types";
import type {
    CreateUserInput,
    UpdateUserInput,
    User,
    UserFilter,
} from "../../types/user.types";
import { fakeUsers } from "../data/users.data";
import { InMemoryTable } from "../db/in-memory-table";

export class FakeUserRepository implements UserRepository {
    private readonly table = new InMemoryTable<User>(fakeUsers, {
        entityName: "User",
        latencyMs: 150, // dev közben szimulál egy valós hálózati körutat
    });

    async findById(id: number): Promise<User | null> {
        return this.table.findById(id);
    }

    async findByUsername(username: string): Promise<User | null> {
        return this.table.findOne((user) => user.username === username);
    }

    async findAll(params?: PaginationParams): Promise<PaginatedResult<User>> {
        const all = await this.table.findAll();
        return this.table.paginate(all, params);
    }

    async findMany(
        filter: UserFilter = {},
        pagination?: PaginationParams,
    ): Promise<PaginatedResult<User>> {
        const matched = await this.table.findWhere((user) =>
            matchesFilter(user, filter),
        );
        return this.table.paginate(matched, pagination);
    }

    async create(data: CreateUserInput): Promise<User> {
        const existing = await this.findByUsername(data.username);
        if (existing) {
            throw new DuplicateError("User", "username", data.username);
        }
        return this.table.insert(data);
    }

    async update(id: number, data: UpdateUserInput): Promise<User> {
        return this.table.update(id, data);
    }

    async delete(id: number): Promise<void> {
        return this.table.delete(id);
    }
}

function matchesFilter(user: User, filter: UserFilter): boolean {
    if (filter.role && user.role !== filter.role) return false;
    if (filter.gender && user.gender !== filter.gender) return false;
    if (filter.sexuality && user.sexuality !== filter.sexuality) return false;
    if (
        filter.relationshipStatus &&
        user.relationshipStatus !== filter.relationshipStatus
    )
        return false;

    if (
        filter.lookingFor?.length &&
        !filter.lookingFor.some((value) => user.lookingFor.includes(value))
    )
        return false;

    if (
        filter.interestedIn?.length &&
        !filter.interestedIn.some((value) => user.interestedIn.includes(value))
    )
        return false;

    if (filter.search) {
        const needle = filter.search.toLowerCase();
        const haystack = `${user.username} ${user.nickname}`.toLowerCase();
        if (!haystack.includes(needle)) return false;
    }

    return true;
}
