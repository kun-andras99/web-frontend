import type {
    BaseEntity,
    PaginatedResult,
    PaginationParams,
} from "../types/common.types";

/**
 * Generic CRUD szerződés, amit minden repository implementál — fake vagy
 * valódi. TCreate/TUpdate felülírható entitásonként (lásd UserRepository),
 * ha egy DTO-nak el kell térnie az alapértelmezett Omit/Partial mintától.
 */
export interface BaseRepository<
    T extends BaseEntity,
    TCreate = Omit<T, "id" | "createdAt" | "updatedAt">,
    TUpdate = Partial<TCreate>,
> {
    findById(id: number): Promise<T | null>;
    findAll(params?: PaginationParams): Promise<PaginatedResult<T>>;
    create(data: TCreate): Promise<T>;
    update(id: number, data: TUpdate): Promise<T>;
    delete(id: number): Promise<void>;
}
