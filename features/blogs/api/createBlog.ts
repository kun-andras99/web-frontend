import { apiFetch } from "@/lib/http/auth-fetch";
import type {
    BlogDTO,
    CreateBlogInput,
} from "@/features/blogs/repository/blogsDTO";

interface CreateBlogResponse {
    blog: BlogDTO;
}

export async function createBlog(data: CreateBlogInput): Promise<BlogDTO> {
    const response = await apiFetch("/api/blogs", {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.message ?? "A blog létrehozása sikertelen.");
    }

    return result.blog;
}
