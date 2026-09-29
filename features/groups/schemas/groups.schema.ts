import { z } from "zod";

export const DEFAULT_GROUPS_PAGE_SIZE = 20;
export const MAX_GROUPS_PAGE_SIZE = 50;

// igazítsd a Prisma GroupVisibility enumodhoz
export const groupVisibilitySchema = z.enum(["PUBLIC", "PRIVATE"]);
export const groupMemberRoleSchema = z.enum(["ADMIN", "MEMBER"]);
 
/** A bejelentkezett user viszonya a csoporthoz. */
export const groupViewerStateSchema = z.enum([
    "ADMIN",
    "MEMBER",
    "INVITED",
    "PENDING",
    "NONE",
]);

export const groupMemberPreviewSchema = z.object({
    userId: z.string(),
    nickname: z.string().nullable(),
    role: groupMemberRoleSchema,
    joinedAt: z.string(),
});

export const groupSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().nullable(),
    visibility: groupVisibilitySchema,
    creatorId: z.string(),
    creatorNickname: z.string().nullable(),
    memberCount: z.number().int().nonnegative(),
    viewerState: groupViewerStateSchema,
    createdAt: z.string(),
    updatedAt: z.string(),
});

export const groupsPageSchema = z.object({
    items: z.array(groupSchema),
    nextCursor: z.string().nullable(),
});

export const groupDetailSchema = groupSchema.extend({
    viewerRole: groupMemberRoleSchema.nullable(),
    /** false: privát csoport, a néző nem tag, ezért a lista üres */
    membersVisible: z.boolean(),
    memberPreview: z.array(groupMemberPreviewSchema),
    /** csak adminnak / létrehozónak, másnak null */
    pendingRequestCount: z.number().int().nonnegative().nullable(),
});

export const joinGroupResultSchema = z.object({
    viewerState: z.enum(["MEMBER", "PENDING"]),
});

// ---- request sémák (a route handler validál velük) ----

export const listGroupsQuerySchema = z.object({
    cursor: z.string().min(1).optional(),
    limit: z.coerce
        .number()
        .int()
        .min(1)
        .max(MAX_GROUPS_PAGE_SIZE)
        .default(DEFAULT_GROUPS_PAGE_SIZE),
    search: z.string().trim().min(1).max(100).optional(),
});

export const createGroupInputSchema = z.object({
    name: z.string().trim().min(2).max(60),
    description: z
        .string()
        .trim()
        .max(500)
        .nullish()
        .transform((value) => value || null),
    visibility: groupVisibilitySchema.default("PUBLIC"),
});

export const respondInvitationInputSchema = z.object({
    action: z.enum(["ACCEPT", "DECLINE"]),
});

export const paginationQuerySchema = z.object({
    cursor: z.string().min(1).optional(),
    limit: z.coerce
        .number()
        .int()
        .min(1)
        .max(MAX_GROUPS_PAGE_SIZE)
        .default(DEFAULT_GROUPS_PAGE_SIZE),
});

export const groupMemberSchema = z.object({
    userId: z.string(),
    nickname: z.string().nullable(),
    role: groupMemberRoleSchema,
    joinedAt: z.string(),
    isOwner: z.boolean(),
});
export const groupMembersPageSchema = z.object({
    items: z.array(groupMemberSchema),
    nextCursor: z.string().nullable(),
});

export const joinRequestSchema = z.object({
    id: z.string(),
    requesterId: z.string(),
    nickname: z.string().nullable(),
    createdAt: z.string(),
});
export const joinRequestsPageSchema = z.object({
    items: z.array(joinRequestSchema),
    nextCursor: z.string().nullable(),
});

export const changeMemberRoleInputSchema = z.object({
    role: groupMemberRoleSchema,
});

export const respondJoinRequestInputSchema = z.object({
    action: z.enum(["APPROVE", "REJECT"]),
});

/**
 * Külön séma, NEM createGroupInputSchema.partial():
 * annak a `visibility.default("PUBLIC")` része részleges frissítésnél
 * észrevétlenül visszaállítaná a csoportot nyilvánosra.
 */
export const updateGroupInputSchema = z
    .object({
        name: z.string().trim().min(2).max(60).optional(),
        description: z
            .string()
            .trim()
            .max(500)
            .nullable()
            .optional()
            .transform((value) =>
                value === undefined ? undefined : value || null,
            ),
        visibility: groupVisibilitySchema.optional(),
    })
    .refine((value) => Object.values(value).some((v) => v !== undefined), {
        message: "Nothing to update",
    });

// ---- típusok ----

export type GroupDTO = z.infer<typeof groupSchema>;
export type GroupsPageDTO = z.infer<typeof groupsPageSchema>;
export type GroupMemberRole = z.infer<typeof groupMemberRoleSchema>;
export type GroupMemberPreviewDTO = z.infer<typeof groupMemberPreviewSchema>;
export type GroupDetailDTO = z.infer<typeof groupDetailSchema>;
export type GroupViewerState = z.infer<typeof groupViewerStateSchema>;
export type JoinGroupResult = z.infer<typeof joinGroupResultSchema>;
export type InvitationAction = z.infer<
    typeof respondInvitationInputSchema
>["action"];

export type PaginationQuery = z.output<typeof paginationQuerySchema>;
export type GroupMemberDTO = z.infer<typeof groupMemberSchema>;
export type GroupMembersPageDTO = z.infer<typeof groupMembersPageSchema>;
export type JoinRequestDTO = z.infer<typeof joinRequestSchema>;
export type JoinRequestsPageDTO = z.infer<typeof joinRequestsPageSchema>;
export type JoinRequestAction = z.infer<typeof respondJoinRequestInputSchema>["action"];
export type UpdateGroupInput = z.input<typeof updateGroupInputSchema>; // kliens
export type UpdateGroupData = z.output<typeof updateGroupInputSchema>; // szerver

export type ListGroupsQuery = z.output<typeof listGroupsQuerySchema>;
export type GroupsFilters = { search?: string };

export type CreateGroupInput = z.input<typeof createGroupInputSchema>; // kliens oldal
export type CreateGroupData = z.output<typeof createGroupInputSchema>; // szerver oldal
