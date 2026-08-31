import type { Blog } from "../types/blog.types";

export interface BlogRepository {
    findById(id: number): Promise<Blog | null>;
    findBySlug(slug: string): Promise<Blog | null>;
    findByAuthorId(authorId: number): Promise<Blog[]>;
    findAll(): Promise<Blog[]>;
}
