import type {
    GroupDetailDTO,
    GroupDTO,
    GroupViewerState,
    GroupMemberDTO,
    JoinRequestDTO,
} from "@/features/groups/schemas/groups.schema";
import type {
    GroupDetailData,
    GroupListData,
    MemberPreviewData,
    JoinRequestRowData,
    MemberRowData,
} from "@/features/groups/server/groups.repository";

type ViewerStateSource = Pick<
    GroupListData,
    "creatorId" | "members" | "invitations" | "joinRequests"
>;

function resolveViewerState(
    group: ViewerStateSource,
    viewerId: string,
): GroupViewerState {
    if (group.creatorId === viewerId) return "ADMIN";
    if (group.members.length > 0) return "MEMBER";
    if (group.invitations.length > 0) return "INVITED";
    if (group.joinRequests.length > 0) return "PENDING";
    return "NONE";
}

export function toGroupDTO(group: GroupListData, viewerId: string): GroupDTO {
    return {
        id: group.id, 
        name: group.name, 
        description: group.description,
        visibility: group.visibility,
        creatorId: group.creatorId,
        creatorNickname: group.creator.userData?.nickname ?? null,
        memberCount: group._count.members,
        viewerState: resolveViewerState(group, viewerId),
        createdAt: group.createdAt.toISOString(),
        updatedAt: group.updatedAt.toISOString(),
    };
}

interface DetailExtras {
    memberPreview: MemberPreviewData[];
    membersVisible: boolean;
    pendingRequestCount: number | null;
}

export function toGroupDetailDTO(
    group: GroupDetailData,
    viewerId: string,
    extras: DetailExtras,
): GroupDetailDTO {
    return {
        ...toGroupDTO(group, viewerId),
        viewerRole: group.members[0]?.role ?? null,
        membersVisible: extras.membersVisible,
        memberPreview: extras.memberPreview.map((member) => ({
            userId: member.userId,
            nickname: member.user.userData?.nickname ?? null,
            role: member.role,
            joinedAt: member.joinedAt.toISOString(),
        })),
        pendingRequestCount: extras.pendingRequestCount,
    };
}

export function toGroupMemberDTO(
    row: MemberRowData,
    creatorId: string,
): GroupMemberDTO {
    return {
        userId: row.userId,
        nickname: row.user.userData?.nickname ?? null,
        role: row.role,
        joinedAt: row.joinedAt.toISOString(),
        isOwner: row.userId === creatorId,
    };
}

export function toJoinRequestDTO(row: JoinRequestRowData): JoinRequestDTO {
    return {
        id: row.id,
        requesterId: row.requesterId,
        nickname: row.requester.userData?.nickname ?? null,
        createdAt: row.createdAt.toISOString(),
    };
}