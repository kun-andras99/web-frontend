import { useInfiniteQuery } from "@tanstack/react-query";

import { getBlogs } from "@/features/blogs/api/getBlogs";

const BLOGS_PER_PAGE = 5;

export const blogKeys = {
    all: ["blogs"] as const,
    list: () => [...blogKeys.all, "list"] as const,
};

export function useBlogs() {
    return useInfiniteQuery({
        queryKey: blogKeys.list(),

        queryFn: ({ pageParam }) =>
            getBlogs({
                limit: BLOGS_PER_PAGE,
                cursor: pageParam,
            }),

        initialPageParam: undefined as string | undefined,

        getNextPageParam: (lastPage) => {
            if (!lastPage.hasNextPage) {
                return undefined;
            }

            return lastPage.nextCursor;
        },

        staleTime: 5 * 60 * 1000,
    });
}
