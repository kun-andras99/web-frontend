import type {
    BlogDetailDTO,
    BlogsPageDTO,
} from "@/features/blogs/repository/blogsDTO";

import { blogsMock, blogDetailsMock } from "@/features/blogs/mock/blogs.mock";

export async function findMockBlogs({
    limit,
    cursor,
}: {
    limit: number;
    cursor?: string;
}): Promise<BlogsPageDTO> {
    let startIndex = 0;

    if (cursor) {
        const cursorIndex = blogsMock.findIndex((blog) => blog.id === cursor);

        if (cursorIndex !== -1) {
            startIndex = cursorIndex + 1;
        }
    }

    const items = blogsMock.slice(startIndex, startIndex + limit);

    const hasNextPage = startIndex + limit < blogsMock.length;

    const lastBlog = items[items.length - 1];

    return {
        blogs: items,
        nextCursor: hasNextPage && lastBlog ? lastBlog.id : null,
        hasNextPage,
    };
}

export async function findMockBlogById(
    blogId: string,
): Promise<BlogDetailDTO | null> {
    return blogDetailsMock.find((blog) => blog.id === blogId) ?? null;
}
