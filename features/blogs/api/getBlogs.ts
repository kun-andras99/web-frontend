import type { BlogsPageDTO } from "@/features/blogs/repository/blogsDTO";

interface GetBlogsParams {
    limit?: number;
    cursor?: string;
}

export async function getBlogs({
    limit = 5,
    cursor,
}: GetBlogsParams = {}): Promise<BlogsPageDTO> {
    const searchParams = new URLSearchParams();
    searchParams.set("limit", String(limit));

    if (cursor) {
        searchParams.set("cursor", cursor);
    }

    const response = await fetch(`/api/blogs?${searchParams.toString()}`, {
        method: "GET",
        credentials: "include",
    });

    const result: BlogsPageDTO = await response.json();

    if (!response.ok) {
        throw new Error("A blogok betöltése sikertelen.");
    }

    return result;
}
