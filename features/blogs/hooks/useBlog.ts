import { fetchBlog } from "@/features/blogs/api/blogs.api";
import { blogKeys } from "@/features/blogs/hooks/useBlogs";
import { useQuery } from "@tanstack/react-query";

export function useBlog(id: string) {
    return useQuery({
        queryKey: blogKeys.detail(id),
        queryFn: ({ signal }) => fetchBlog(id, signal),
        enabled: Boolean(id),
        staleTime: 5 * 60 * 1000,
    });
}
