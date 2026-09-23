import { GroupListData } from "@/features/groups/repository/groups.repository";
import { GroupDTO } from "@/features/groups/repository/groupsDTO";

export function toGroupDTO(groups: GroupListData): GroupDTO {
    return {
        id: groups.id,
        name: groups.name,
        description: groups.description,
        visibility: groups.visibility,
        creatorId: groups.creatorId,
        memberCount: groups._count.members,
        createdAt: groups.createdAt.toISOString(),
        updatedAt: groups.updatedAt.toISOString(),
    };
}
