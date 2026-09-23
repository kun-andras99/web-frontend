export interface GroupDTO {
    id: string;
    name: string;
    description: string | null;
    visibility: string;
    creatorId: string;
    memberCount: number;
    createdAt: string;
    updatedAt: string;
}
