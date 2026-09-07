// /**
//  * Minden entitás és repository közös építőelemei.
//  * Szándékosan Prisma-konvenciókat követ (skip/take, stb.),
//  * hogy a fake -> prisma csere ne érintse ezt a réteget.
//  */

// export interface BaseEntity {
//     id: number;
//     createdAt: Date;
//     updatedAt: Date;
// }

// export type SortOrder = "asc" | "desc";

// export interface PaginationParams {
//     skip?: number;
//     take?: number;
// }

// export interface PaginatedResult<T> {
//     items: T[];
//     total: number;
//     hasMore: boolean;
//     page: number;
//     limit: number;
//     totalPages: number;
// }

// /** Bármely BaseEntity-ből levezethető "create" DTO */
// export type CreateInput<T extends BaseEntity> = Omit<
//     T,
//     "id" | "createdAt" | "updatedAt"
// >;

// /** Bármely BaseEntity-ből levezethető "update" DTO */
// export type UpdateInput<T extends BaseEntity> = Partial<CreateInput<T>>;
