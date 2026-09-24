import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createBlog } from "@/features/blogs/api/createBlog";
import { blogKeys } from "@/features/blogs/hooks/useBlogs";

export function useCreateBlog() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createBlog,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: blogKeys.list(),
            });
        },
    });
}
