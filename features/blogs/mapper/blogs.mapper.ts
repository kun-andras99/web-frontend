import type { BlogListData } from "@/features/blogs/repository/blogs.rep";
import type { BlogDTO } from "@/features/blogs/repository/blogsDTO";

export function toBlogDTO(blog: BlogListData): BlogDTO {
    return {
        id: blog.id,
        authorId: blog.authorId,
        title: blog.title,
        content: blog.content,
        visibility: blog.visibility,

        tags: blog.tags.map((tag) => ({
            id: tag.id,
            name: tag.name,
        })),

        likeCount: blog._count.likes,

        createdAt: blog.createdAt.toISOString(),
        updatedAt: blog.updatedAt.toISOString(),
    };
}
