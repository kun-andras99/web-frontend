export interface BlogTagDTO {
    id: string;
    name: string;
}

export interface BlogDTO {
    id: string;
    authorId: string;
    title: string;
    content: string;
    visibility: string;
    tags: BlogTagDTO[];
    likeCount: number;
    createdAt: string;
    updatedAt: string;
}

export interface BlogsPageDTO {
    blogs: BlogDTO[];
    nextCursor: string | null;
    hasNextPage: boolean;
}
