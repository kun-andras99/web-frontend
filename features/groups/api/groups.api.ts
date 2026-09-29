import { emptyResponse, http } from "@/lib/http/http-client";
import {
    groupDetailSchema,
    GroupMemberRole,
    groupMembersPageSchema,
    groupSchema,
    groupsPageSchema,
    joinGroupResultSchema,
    JoinRequestAction,
    joinRequestsPageSchema,
    UpdateGroupInput,
    type CreateGroupInput,
    type InvitationAction,
} from "@/features/groups/schemas/groups.schema";

export interface FetchGroupsPageParams {
    cursor?: string;
    limit?: number;
    search?: string;
}

const groupPath = (groupId: string) =>
    `/api/groups/${encodeURIComponent(groupId)}`;

export function fetchGroupsPage(
    params: FetchGroupsPageParams = {},
    signal?: AbortSignal,
) {
    return http.get("/api/groups", {
        schema: groupsPageSchema,
        query: { ...params },
        signal,
    });
}

export function fetchGroup(groupId: string, signal?: AbortSignal) {
    return http.get(groupPath(groupId), {
        schema: groupDetailSchema,
        signal,
    });
}

export function createGroup(input: CreateGroupInput) {
    return http.post("/api/groups", { schema: groupSchema, body: input });
}

export function joinGroup(groupId: string) {
    return http.post(`${groupPath(groupId)}/join`, {
        schema: joinGroupResultSchema,
    });
}

export function respondToInvitation(groupId: string, action: InvitationAction) {
    return http.patch(`${groupPath(groupId)}/invitation`, {
        schema: emptyResponse,
        body: { action },
    });
}


interface PageParams {
    cursor?: string;
    limit?: number;
}

export function fetchGroupMembersPage(
    groupId: string,
    params: PageParams = {},
    signal?: AbortSignal,
) {
    return http.get(`${groupPath(groupId)}/members`, {
        schema: groupMembersPageSchema,
        query: { ...params },
        signal,
    });
}

export function fetchJoinRequestsPage(
    groupId: string,
    params: PageParams = {},
    signal?: AbortSignal,
) {
    return http.get(`${groupPath(groupId)}/join-requests`, {
        schema: joinRequestsPageSchema,
        query: { ...params },
        signal,
    });
}

export const updateGroup = (groupId: string, input: UpdateGroupInput) =>
    http.patch(groupPath(groupId), { schema: groupDetailSchema, body: input });

export const deleteGroup = (groupId: string) =>
    http.delete(groupPath(groupId), { schema: emptyResponse });

export const leaveGroup = (groupId: string) =>
    http.post(`${groupPath(groupId)}/leave`, { schema: emptyResponse });

export const cancelJoinRequest = (groupId: string) =>
    http.delete(`${groupPath(groupId)}/join`, { schema: emptyResponse });

export const changeMemberRole = (
    groupId: string,
    userId: string,
    role: GroupMemberRole,
) =>
    http.patch(`${groupPath(groupId)}/members/${encodeURIComponent(userId)}`, {
        schema: emptyResponse,
        body: { role },
    });

export const removeMember = (groupId: string, userId: string) =>
    http.delete(`${groupPath(groupId)}/members/${encodeURIComponent(userId)}`, {
        schema: emptyResponse,
    });

export const respondToJoinRequest = (
    groupId: string,
    requestId: string,
    action: JoinRequestAction,
) =>
    http.patch(
        `${groupPath(groupId)}/join-requests/${encodeURIComponent(requestId)}`,
        {
            schema: emptyResponse,
            body: { action },
        },
    );