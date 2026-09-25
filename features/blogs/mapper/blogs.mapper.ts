import {
    BlogDetailData,
    BlogListData,
} from "@/features/blogs/repository/blogs.rep";
import { BlogDetailDTO, BlogDTO } from "@/features/blogs/repository/blogsDTO";

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

export function toBlogDetailDTO(blog: BlogDetailData): BlogDetailDTO {
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

        author: {
            id: blog.author.id,
            username: blog.author.username,

            nickname: blog.author.userData?.nickname ?? null,

            avatarUrl: blog.author.userData?.avatarUrl ?? null,
        },
    };
}
