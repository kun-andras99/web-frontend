import "server-only";

import {
    toGroupDetailDTO,
    toGroupDTO,
    toGroupMemberDTO,
    toJoinRequestDTO,
} from "@/features/groups/groups.mapper";
import {
    listGroupsQuerySchema,
    type CreateGroupData,
    type GroupDetailDTO,
    type GroupDTO,
    type GroupMemberRole,
    type GroupMembersPageDTO,
    type GroupsPageDTO,
    type InvitationAction,
    type JoinGroupResult,
    type JoinRequestAction,
    type JoinRequestsPageDTO,
    type ListGroupsQuery,
    type PaginationQuery,
    type UpdateGroupData,
} from "@/features/groups/schemas/groups.schema";
import { HttpError } from "@/lib/api/route-handler";
import {
    answerInvitation,
    answerJoinRequest,
    cancelPendingJoinRequest,
    countPendingJoinRequests,
    deleteGroupRow,
    deleteMember,
    findGroupAccess,
    findGroupDetail,
    findGroupForJoin,
    findGroupsPage,
    findJoinRequestsPage,
    findMemberPreview,
    findMemberRole,
    findMembersPage,
    insertGroup,
    updateGroupFields,
    updateMemberRole,
    upsertJoinRequest,
    upsertMember,
} from "./groups.repository";

const MEMBER_PREVIEW_LIMIT = 8;

export async function getGroupDetail(
    groupId: string,
    viewerId: string,
): Promise<GroupDetailDTO> {
    const group = await findGroupDetail(groupId, viewerId);
    if (!group) {
        throw new HttpError(404, "Group not found", "GROUP_NOT_FOUND");
    }

    const isOwner = group.creatorId === viewerId;
    const viewerRole = group.members[0]?.role;
    const isMember = isOwner || viewerRole !== undefined;
    const isAdmin = isOwner || viewerRole === "ADMIN";

    // nyilvános csoport tagjai mindenkinek láthatók, privátnál csak a tagoknak
    const membersVisible = group.visibility === "PUBLIC" || isMember;

    const [memberPreview, pendingRequestCount] = await Promise.all([
        membersVisible ? findMemberPreview(groupId, MEMBER_PREVIEW_LIMIT) : [],
        isAdmin ? countPendingJoinRequests(groupId) : null,
    ]);

    return toGroupDetailDTO(group, viewerId, {
        memberPreview,
        membersVisible,
        pendingRequestCount,
    });
}

export async function listGroups(
    viewerId: string,
    query?: ListGroupsQuery,
): Promise<GroupsPageDTO> {
    const parsedQuery = listGroupsQuerySchema.parse(query ?? {});
    // Ha a privát csoportokat el kell rejteni a nem tagok elől,
    // itt add át a repositorynak a szűrési szabályt.
    const { items, nextCursor } = await findGroupsPage({
        viewerId,
        ...parsedQuery,
    });

    return {
        items: items.map((group) => toGroupDTO(group, viewerId)),
        nextCursor,
    };
}

export async function createGroup(
    userId: string,
    input: CreateGroupData,
): Promise<GroupDTO> {
    const group = await insertGroup(userId, input);
    return toGroupDTO(group, userId);
}

export async function joinGroup(
    groupId: string,
    userId: string,
): Promise<JoinGroupResult> {
    const group = await findGroupForJoin(groupId, userId);
    if (!group) {
        throw new HttpError(404, "Group not found", "GROUP_NOT_FOUND");
    }

    // idempotens: aki már tag, annak nincs teendője
    if (group.members.length > 0) return { viewerState: "MEMBER" };

    if (group.visibility === "PUBLIC") {
        await upsertMember(groupId, userId);
        return { viewerState: "MEMBER" };
    }

    await upsertJoinRequest(groupId, userId);
    return { viewerState: "PENDING" };
}

export async function respondToInvitation(
    groupId: string,
    userId: string,
    action: InvitationAction,
): Promise<void> {
    const answered = await answerInvitation({
        groupId,
        receiverId: userId,
        accept: action === "ACCEPT",
    });

    if (!answered) {
        throw new HttpError(
            404,
            "No pending invitation for this group",
            "INVITATION_NOT_FOUND",
        );
    }
}

type GroupAccessRow = NonNullable<Awaited<ReturnType<typeof findGroupAccess>>>;

interface GroupAccess {
    group: GroupAccessRow;
    isOwner: boolean;
    isAdmin: boolean;
    isMember: boolean;
}

async function loadAccess(
    groupId: string,
    userId: string,
): Promise<GroupAccess> {
    const group = await findGroupAccess(groupId, userId);
    if (!group) throw new HttpError(404, "Group not found", "GROUP_NOT_FOUND");

    const isOwner = group.creatorId === userId;
    const role = group.members[0]?.role;
    return {
        group,
        isOwner,
        isAdmin: isOwner || role === "ADMIN",
        isMember: isOwner || role !== undefined,
    };
}

function assertAdmin(access: GroupAccess) {
    if (!access.isAdmin) {
        throw new HttpError(403, "Admin permission required", "ADMIN_REQUIRED");
    }
}

export async function listMembers(
    groupId: string,
    viewerId: string,
    query: PaginationQuery,
): Promise<GroupMembersPageDTO> {
    const access = await loadAccess(groupId, viewerId);
    if (access.group.visibility === "PRIVATE" && !access.isMember) {
        throw new HttpError(403, "Members are hidden", "MEMBERS_HIDDEN");
    }

    const { items, nextCursor } = await findMembersPage({ groupId, ...query });
    return {
        items: items.map((row) =>
            toGroupMemberDTO(row, access.group.creatorId),
        ),
        nextCursor,
    };
}

export async function changeMemberRole(
    groupId: string,
    actorId: string,
    targetUserId: string,
    role: GroupMemberRole,
): Promise<void> {
    const access = await loadAccess(groupId, actorId);
    if (!access.isOwner) {
        throw new HttpError(
            403,
            "Only the owner can change roles",
            "ONLY_OWNER",
        );
    }
    if (targetUserId === access.group.creatorId) {
        throw new HttpError(
            409,
            "The owner's role is locked",
            "OWNER_ROLE_LOCKED",
        );
    }

    const count = await updateMemberRole(groupId, targetUserId, role);
    if (count === 0)
        throw new HttpError(404, "Member not found", "MEMBER_NOT_FOUND");
}

export async function removeMember(
    groupId: string,
    actorId: string,
    targetUserId: string,
): Promise<void> {
    const access = await loadAccess(groupId, actorId);
    assertAdmin(access);

    if (targetUserId === actorId) {
        throw new HttpError(400, "Use the leave endpoint", "USE_LEAVE");
    }
    if (targetUserId === access.group.creatorId) {
        throw new HttpError(
            403,
            "The owner cannot be removed",
            "CANNOT_REMOVE_OWNER",
        );
    }

    const target = await findMemberRole(groupId, targetUserId);
    if (!target)
        throw new HttpError(404, "Member not found", "MEMBER_NOT_FOUND");
    if (target.role === "ADMIN" && !access.isOwner) {
        throw new HttpError(
            403,
            "Only the owner can remove admins",
            "ADMIN_REQUIRES_OWNER",
        );
    }

    await deleteMember(groupId, targetUserId);
}

export async function leaveGroup(
    groupId: string,
    userId: string,
): Promise<void> {
    const access = await loadAccess(groupId, userId);
    if (access.isOwner) {
        throw new HttpError(
            409,
            "The owner cannot leave",
            "OWNER_CANNOT_LEAVE",
        );
    }

    const count = await deleteMember(groupId, userId);
    if (count === 0)
        throw new HttpError(404, "You are not a member", "NOT_MEMBER");
}

export async function listJoinRequests(
    groupId: string,
    viewerId: string,
    query: PaginationQuery,
): Promise<JoinRequestsPageDTO> {
    assertAdmin(await loadAccess(groupId, viewerId));

    const { items, nextCursor } = await findJoinRequestsPage({
        groupId,
        ...query,
    });
    return { items: items.map(toJoinRequestDTO), nextCursor };
}

export async function respondToJoinRequest(
    groupId: string,
    actorId: string,
    requestId: string,
    action: JoinRequestAction,
): Promise<void> {
    assertAdmin(await loadAccess(groupId, actorId));

    const answered = await answerJoinRequest({
        groupId,
        requestId,
        responderId: actorId,
        approve: action === "APPROVE",
    });
    if (!answered) {
        throw new HttpError(
            404,
            "No pending request found",
            "JOIN_REQUEST_NOT_FOUND",
        );
    }
}

export async function cancelJoinRequest(
    groupId: string,
    userId: string,
): Promise<void> {
    const count = await cancelPendingJoinRequest(groupId, userId);
    if (count === 0) {
        throw new HttpError(
            404,
            "No pending request found",
            "JOIN_REQUEST_NOT_FOUND",
        );
    }
}

export async function updateGroup(
    groupId: string,
    actorId: string,
    input: UpdateGroupData,
): Promise<GroupDetailDTO> {
    assertAdmin(await loadAccess(groupId, actorId));
    await updateGroupFields(groupId, input);
    return getGroupDetail(groupId, actorId);
}

export async function deleteGroup(
    groupId: string,
    actorId: string,
): Promise<void> {
    const access = await loadAccess(groupId, actorId);
    if (!access.isOwner) {
        throw new HttpError(
            403,
            "Only the owner can delete the group",
            "ONLY_OWNER",
        );
    }
    await deleteGroupRow(groupId);
}
