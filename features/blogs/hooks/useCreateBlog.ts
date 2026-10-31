import { createBlogRequest } from "@/features/blogs/api/blogs.api";
import { blogKeys } from "@/features/blogs/hooks/useBlogs";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateBlog() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createBlogRequest,
        onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: blogKeys.list() }),
    });
}
