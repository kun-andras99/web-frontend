import { z } from "zod";

export const MANAGE_USERS_PAGE_SIZE = 20;
export const MANAGE_USERS_MAX_PAGE_SIZE = 50;

export const manageFilterSchema = z.enum([
    "all",
    "friends",
    "favorites",
    "blocked",
]);
export type ManageFilter = z.infer<typeof manageFilterSchema>;
export const DEFAULT_MANAGE_FILTER: ManageFilter = "all";

/** Az URL-ből érkező, nem megbízható értéket érvényes szűrővé alakítja (hibánál "all"). */
export const parseManageFilter = (
    value: string | null | undefined,
): ManageFilter =>
    manageFilterSchema.catch(DEFAULT_MANAGE_FILTER).parse(value ?? undefined);

export const relationStatusSchema = z.enum(["FRIEND", "FAVORITE", "BLOCKED"]);

export const managedUserSchema = z.object({
    id: z.string(),
    nickname: z.string().nullable(),
    avatarUrl: z.string().nullable(),
    statuses: z.array(relationStatusSchema),
});

/** A kulcsok megegyeznek a szűrő értékeivel, így `counts[filter]` közvetlenül használható. */
export const manageCountsSchema = z.object({
    all: z.number().int().nonnegative(),
    friends: z.number().int().nonnegative(),
    favorites: z.number().int().nonnegative(),
    blocked: z.number().int().nonnegative(),
});

export const managedUsersPageSchema = z.object({
    items: z.array(managedUserSchema),
    nextCursor: z.string().nullable(),
    counts: manageCountsSchema,
});

export const relationshipResultSchema = z.object({
    statuses: z.array(relationStatusSchema),
});

// ---- request sémák ----

export const managedUsersQuerySchema = z.object({
    filter: manageFilterSchema.default(DEFAULT_MANAGE_FILTER),
    cursor: z.string().min(1).max(400).optional(),
    limit: z.coerce
        .number()
        .int()
        .min(1)
        .max(MANAGE_USERS_MAX_PAGE_SIZE)
        .default(MANAGE_USERS_PAGE_SIZE),
});

export const updateRelationshipInputSchema = z
    .object({
        favorite: z.boolean().optional(),
        blocked: z.boolean().optional(),
        /** A barátságot itt csak megszüntetni lehet; a barátkérés másik folyamat. */
        friend: z.literal(false).optional(),
    })
    .refine((value) => Object.values(value).some((v) => v !== undefined), {
        message: "Nothing to update",
    });

export type RelationStatus = z.infer<typeof relationStatusSchema>;
export type ManagedUserDTO = z.infer<typeof managedUserSchema>;
export type ManageCountsDTO = z.infer<typeof manageCountsSchema>;
export type ManagedUsersPageDTO = z.infer<typeof managedUsersPageSchema>;
export type RelationshipResultDTO = z.infer<typeof relationshipResultSchema>;
export type ManagedUsersQuery = z.output<typeof managedUsersQuerySchema>;
export type RelationshipChanges = z.input<typeof updateRelationshipInputSchema>;
