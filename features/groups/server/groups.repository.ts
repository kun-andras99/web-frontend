import "server-only";

import {
    CreateGroupData,
    GroupMemberRole,
    UpdateGroupData,
} from "@/features/groups/schemas/groups.schema";
import { prisma } from "@/lib/prisma";
import { Prisma } from "../../../prisma/generated/prisma";

const memberOrderBy = [
    { role: "desc" }, // az enum sorrendje miatt az ADMIN van elöl
    { joinedAt: "asc" },
    { id: "asc" },
] satisfies Prisma.GroupMemberOrderByWithRelationInput[];

function toPage<T extends { id: string }>(rows: T[], limit: number) {
    const hasMore = rows.length > limit;
    const items = hasMore ? rows.slice(0, limit) : rows;
    return { items, nextCursor: hasMore ? (items.at(-1)?.id ?? null) : null };
}

/** A select a nézőtől függ (tagság, kérelem, meghívó), ezért függvény. */
export function groupListSelect(viewerId: string) {
    return {
        id: true,
        name: true,
        description: true,
        visibility: true,
        creatorId: true,
        createdAt: true,
        updatedAt: true,
        creator: {
            select: { userData: { select: { nickname: true } } },
        },
        _count: { select: { members: true } },
        members: { where: { userId: viewerId }, select: { id: true }, take: 1 },
        joinRequests: {
            where: { requesterId: viewerId, status: "PENDING" },
            select: { id: true },
            take: 1,
        },
        invitations: {
            where: { receiverId: viewerId, status: "PENDING" },
            select: { id: true },
            take: 1,
        },
    } satisfies Prisma.GroupSelect;
}

export type GroupListData = Prisma.GroupGetPayload<{
    select: ReturnType<typeof groupListSelect>;
}>;

interface FindGroupsPageParams {
    viewerId: string;
    cursor?: string;
    limit: number;
    search?: string;
}

export async function findGroupsPage({
    viewerId,
    cursor,
    limit,
    search,
}: FindGroupsPageParams): Promise<{
    items: GroupListData[];
    nextCursor: string | null;
}> {
    const rows = await prisma.group.findMany({
        where: search
            ? { name: { contains: search, mode: "insensitive" } }
            : undefined,
        select: groupListSelect(viewerId),
        // az id második rendezési kulcs: azonos createdAt mellett is stabil a sorrend
        orderBy: [{ createdAt: "desc" }, { id: "desc" }],
        take: limit + 1, // eggyel többet kérünk, így tudjuk, van-e következő oldal
        ...(cursor ? { cursor: { id: cursor }, skip: 1 } : {}),
    });

    const hasMore = rows.length > limit;
    const items = hasMore ? rows.slice(0, limit) : rows;

    return { items, nextCursor: hasMore ? (items.at(-1)?.id ?? null) : null };
}

export function insertGroup(creatorId: string, data: CreateGroupData) {
    return prisma.group.create({
        data: {
            name: data.name,
            description: data.description,
            visibility: data.visibility,
            creatorId,
            // a létrehozó automatikusan tag is; igazítsd a GroupMemberRole enumodhoz
            members: { create: { userId: creatorId, role: "ADMIN" } },
        },
        select: groupListSelect(creatorId),
    });
}

export function findGroupForJoin(groupId: string, userId: string) {
    return prisma.group.findUnique({
        where: { id: groupId },
        select: {
            id: true,
            visibility: true,
            members: { where: { userId }, select: { id: true }, take: 1 },
        },
    });
}

/** Idempotens: ha már tag, nem hoz létre újat és nem dob hibát. */
export function upsertMember(groupId: string, userId: string) {
    return prisma.groupMember.upsert({
        where: { groupId_userId: { groupId, userId } },
        create: { groupId, userId },
        update: {},
    });
}

/** Egy elutasított kérelem újra PENDING-re állítható. */
export function upsertJoinRequest(groupId: string, requesterId: string) {
    return prisma.groupJoinRequest.upsert({
        where: { groupId_requesterId: { groupId, requesterId } },
        create: { groupId, requesterId },
        update: {
            status: "PENDING",
            createdAt: new Date(),
            respondedAt: null,
            respondedById: null,
        },
    });
}

/**
 * Tranzakcióban válaszol a meghívóra. A státusz-feltétel a WHERE-ben van,
 * így két párhuzamos kérés közül csak az egyik "nyer".
 * @returns false, ha nem volt függő meghívó
 */
export function answerInvitation(params: {
    groupId: string;
    receiverId: string;
    accept: boolean;
}): Promise<boolean> {
    const { groupId, receiverId, accept } = params;

    return prisma.$transaction(async (tx) => {
        const { count } = await tx.groupInvitation.updateMany({
            where: { groupId, receiverId, status: "PENDING" },
            data: {
                status: accept ? "ACCEPTED" : "DECLINED",
                respondedAt: new Date(),
            },
        });
        if (count === 0) return false;

        if (accept) {
            await tx.groupMember.upsert({
                where: { groupId_userId: { groupId, userId: receiverId } },
                create: { groupId, userId: receiverId },
                update: {},
            });
        }
        return true;
    });
}

export function groupDetailSelect(viewerId: string) {
    return {
        ...groupListSelect(viewerId),
        // felülírja a lista szűkebb `members` mezőjét, hogy a néző szerepköre is meglegyen
        members: {
            where: { userId: viewerId },
            select: { id: true, role: true },
            take: 1,
        },
    } satisfies Prisma.GroupSelect;
}

export type GroupDetailData = Prisma.GroupGetPayload<{
    select: ReturnType<typeof groupDetailSelect>;
}>;

export function findGroupDetail(groupId: string, viewerId: string) {
    return prisma.group.findUnique({
        where: { id: groupId },
        select: groupDetailSelect(viewerId),
    });
}

export function findMemberPreview(groupId: string, limit: number) {
    return prisma.groupMember.findMany({
        where: { groupId },
        orderBy: memberOrderBy,
        take: limit,
        select: {
            userId: true,
            role: true,
            joinedAt: true,
            user: { select: { userData: { select: { nickname: true } } } },
        },
    });
}

export type MemberPreviewData = Awaited<
    ReturnType<typeof findMemberPreview>
>[number];

export function countPendingJoinRequests(groupId: string) {
    return prisma.groupJoinRequest.count({
        where: { groupId, status: "PENDING" },
    });
}

export function findGroupAccess(groupId: string, userId: string) {
    return prisma.group.findUnique({
        where: { id: groupId },
        select: {
            id: true,
            creatorId: true,
            visibility: true,
            members: { where: { userId }, select: { role: true }, take: 1 },
        },
    });
}

export async function findMembersPage(params: {
    groupId: string;
    cursor?: string;
    limit: number;
}) {
    const { groupId, cursor, limit } = params;
    const rows = await prisma.groupMember.findMany({
        where: { groupId },
        select: {
            id: true,
            userId: true,
            role: true,
            joinedAt: true,
            user: { select: { userData: { select: { nickname: true } } } },
        },
        orderBy: memberOrderBy,
        take: limit + 1,
        ...(cursor
            ? {
                  cursor: { id: cursor },
                  skip: 1,
              }
            : {}),
    });
    return toPage(rows, limit);
}

export type MemberRowData = Awaited<
    ReturnType<typeof findMembersPage>
>["items"][number];

export async function findJoinRequestsPage(params: {
    groupId: string;
    cursor?: string;
    limit: number;
}) {
    const { groupId, cursor, limit } = params;
    const rows = await prisma.groupJoinRequest.findMany({
        where: { groupId, status: "PENDING" },
        select: {
            id: true,
            requesterId: true,
            createdAt: true,
            requester: { select: { userData: { select: { nickname: true } } } },
        },
        orderBy: [{ createdAt: "asc" }, { id: "asc" }],
        take: limit + 1,
        ...(cursor
            ? {
                  cursor: { id: cursor },
                  skip: 1,
              }
            : {}),
    });
    return toPage(rows, limit);
}
export type JoinRequestRowData = Awaited<
    ReturnType<typeof findJoinRequestsPage>
>["items"][number];

export function findMemberRole(groupId: string, userId: string) {
    return prisma.groupMember.findUnique({
        where: { groupId_userId: { groupId, userId } },
        select: { role: true },
    });
}

/** @returns az érintett sorok száma (0 = nem létező tag) */
export async function updateMemberRole(
    groupId: string,
    userId: string,
    role: GroupMemberRole,
): Promise<number> {
    const { count } = await prisma.groupMember.updateMany({
        where: { groupId, userId },
        data: { role },
    });
    return count;
}

export async function deleteMember(
    groupId: string,
    userId: string,
): Promise<number> {
    const { count } = await prisma.groupMember.deleteMany({
        where: { groupId, userId },
    });
    return count;
}

/** A kérelmező visszavonja a saját, még függő kérelmét. */
export async function cancelPendingJoinRequest(
    groupId: string,
    requesterId: string,
): Promise<number> {
    const { count } = await prisma.groupJoinRequest.updateMany({
        where: { groupId, requesterId, status: "PENDING" },
        data: { status: "CANCELLED", respondedAt: new Date() },
    });
    return count;
}

/**
 * Tranzakcióban bírál el egy kérelmet. A `PENDING` feltétel az UPDATE WHERE-jében is
 * szerepel, így két admin párhuzamos kattintásából csak az egyik nyer.
 */
export function answerJoinRequest(params: {
    groupId: string;
    requestId: string;
    responderId: string;
    approve: boolean;
}): Promise<boolean> {
    const { groupId, requestId, responderId, approve } = params;

    return prisma.$transaction(async (tx) => {
        const request = await tx.groupJoinRequest.findFirst({
            where: { id: requestId, groupId, status: "PENDING" },
            select: { requesterId: true },
        });
        if (!request) return false;

        const { count } = await tx.groupJoinRequest.updateMany({
            where: { id: requestId, status: "PENDING" },
            data: {
                status: approve ? "APPROVED" : "REJECTED",
                respondedAt: new Date(),
                respondedById: responderId,
            },
        });
        if (count === 0) return false;

        if (approve) {
            await tx.groupMember.upsert({
                where: {
                    groupId_userId: { groupId, userId: request.requesterId },
                },
                create: { groupId, userId: request.requesterId },
                update: {},
            });
        }
        return true;
    });
}

export function updateGroupFields(groupId: string, data: UpdateGroupData) {
    return prisma.group.update({
        where: { id: groupId },
        data,
        select: { id: true },
    });
}

/** A kapcsolódó tagok, kérelmek és meghívók a sémában beállított Cascade miatt törlődnek. */
export function deleteGroupRow(groupId: string) {
    return prisma.group.delete({
        where: { id: groupId },
        select: { id: true },
    });
}
