import { getCurrentUser } from "@/features/auth/lib/session";
import { toBlogDetailDTO } from "@/features/blogs/mapper/blogs.mapper";
import { findBlogById } from "@/features/blogs/repository/blogs.rep";
import { BlogDetailDTO } from "@/features/blogs/repository/blogsDTO";

export async function getBlogById(blogId: string): Promise<BlogDetailDTO | null> {
    const blog = await findBlogById(blogId);

    if (!blog) {
        return null;
    }

    if (blog.visibility === "PRIVATE") {
        const currentUser = await getCurrentUser();

        if (!currentUser) {
            return null;
        }

        if (currentUser.id !== blog.authorId) {
            return null;
        }
    }

    return toBlogDetailDTO(blog);
}
