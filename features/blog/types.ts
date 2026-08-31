import { User } from "../../lib/db/types/user.types";

export interface Blog {
    id: number;
    title: string;
    author: string;
    createdAt: string;
    content: string;
    tags?: string[];
    readCount?: number;
}

export type BlogWithAuthor = Blog & { author: User };
