import {
    blogResponseSchema,
    blogsPageSchema,
    type CreateBlogBody,
} from "@/features/blogs/schemas/blogs.schema";
import { http } from "@/lib/http/http-client";

export function fetchBlogsPage(
    params: { cursor?: string; limit?: number } = {},
    signal?: AbortSignal,
) {
    return http.get("/api/blogs", {
        schema: blogsPageSchema,
        query: { ...params },
        signal,
    });
}

export async function fetchBlog(id: string, signal?: AbortSignal) {
    const { blog } = await http.get(`/api/blogs/${encodeURIComponent(id)}`, {
        schema: blogResponseSchema,
        signal,
    });
    return blog;
}

export async function createBlogRequest(input: CreateBlogBody) {
    const { blog } = await http.post("/api/blogs", {
        schema: blogResponseSchema,
        body: input,
    });
    return blog;
}
