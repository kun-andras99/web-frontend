import { useQuery } from "@tanstack/react-query";

import { getBlogById } from "@/features/blogs/api/getBlog";
import { blogKeys } from "@/features/blogs/hooks/useBlogs";

export function useBlog(id: string) {
    return useQuery({
        queryKey: blogKeys.detail(id),
        queryFn: () => getBlogById(id),
        enabled: Boolean(id),
        staleTime: 5 * 60 * 1000,
    });
}
