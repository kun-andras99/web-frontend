import { createBlogSlug } from "@/features/blog/utils/createBlogSlug";
import type { BlogRepository } from "../../repositories/blog.rep";
import { fakeBlogs } from "../data/blogs.data";

export class FakeBlogRepository implements BlogRepository {
    async findById(id: number) {
        return fakeBlogs.find((blog) => blog.id === id) ?? null;
    }
    async findBySlug(slug: string) {
        return (
            fakeBlogs.find((blog) => createBlogSlug(blog.title) === slug) ??
            null
        );
    }
    async findByAuthorId(authorId: number) {
        return fakeBlogs.filter((blog) => blog.authorId === authorId);
    }
    async findAll() {
        return fakeBlogs;
    }
}
