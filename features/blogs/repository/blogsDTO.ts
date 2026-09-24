import { BlogVisibility } from "../../../prisma/generated/prisma";

export interface CreateBlogInput {
    title: string;
    content: string;
    visibility: BlogVisibility;
    tags?: string[];
}

export interface BlogTagDTO {
    id: string;
    name: string;
}

export interface BlogDTO {
    id: string;
    authorId: string;
    title: string;
    content: string;
    visibility: BlogVisibility;
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
