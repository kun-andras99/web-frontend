import { NotFoundError } from "../../repositories/errors.rep";
import type {
    BaseEntity,
    PaginatedResult,
    PaginationParams,
} from "../../types/common.types";

interface InMemoryTableOptions {
    /** mesterséges késleltetés ms-ben, hogy valódi hálózati/DB hívást szimuláljon */
    latencyMs?: number;
    /** NotFoundError üzenetekben használt név, pl. "User" */
    entityName: string;
}

export class InMemoryTable<T extends BaseEntity> {
    private readonly rows: Map<number, T>;
    private nextId: number;
    private readonly latencyMs: number;
    private readonly entityName: string;

    constructor(seed: T[], options: InMemoryTableOptions) {
        this.rows = new Map(seed.map((row) => [row.id, { ...row }]));
        this.nextId = seed.reduce((max, row) => Math.max(max, row.id), 0) + 1;
        this.latencyMs = options.latencyMs ?? 0;
        this.entityName = options.entityName;
    }

    private async simulateLatency(): Promise<void> {
        if (this.latencyMs > 0) {
            await new Promise((resolve) => setTimeout(resolve, this.latencyMs));
        }
    }

    async findById(id: number): Promise<T | null> {
        await this.simulateLatency();
        return this.rows.get(id) ?? null;
    }

    async findOne(predicate: (row: T) => boolean): Promise<T | null> {
        await this.simulateLatency();
        for (const row of this.rows.values()) {
            if (predicate(row)) return row;
        }
        return null;
    }

    async findAll(): Promise<T[]> {
        await this.simulateLatency();
        return Array.from(this.rows.values());
    }

    async findWhere(predicate: (row: T) => boolean): Promise<T[]> {
        await this.simulateLatency();
        return Array.from(this.rows.values()).filter(predicate);
    }

    async paginate(
        rows: T[],
        { skip = 0, take = 20 }: PaginationParams = {},
    ): Promise<PaginatedResult<T>> {
        const total = rows.length;

        const items = rows.slice(skip, skip + take);

        const page = Math.floor(skip / take) + 1;

        const totalPages = total === 0 ? 0 : Math.ceil(total / take);

        const hasMore = skip + items.length < total;

        return {
            items,
            total,
            hasMore,
            page,
            limit: take,
            totalPages,
        };
    }

    async insert(data: Omit<T, "id" | "createdAt" | "updatedAt">): Promise<T> {
        await this.simulateLatency();
        const now = new Date();
        const row = {
            ...data,
            id: this.nextId++,
            createdAt: now,
            updatedAt: now,
        } as T;
        this.rows.set(row.id, row);
        return row;
    }

    async update(id: number, data: Partial<T>): Promise<T> {
        await this.simulateLatency();
        const existing = this.rows.get(id);
        if (!existing) throw new NotFoundError(this.entityName, id);

        const updated: T = {
            ...existing,
            ...data,
            id: existing.id,
            createdAt: existing.createdAt,
            updatedAt: new Date(),
        };
        this.rows.set(id, updated);
        return updated;
    }

    async delete(id: number): Promise<void> {
        await this.simulateLatency();
        if (!this.rows.has(id)) throw new NotFoundError(this.entityName, id);
        this.rows.delete(id);
    }
}
