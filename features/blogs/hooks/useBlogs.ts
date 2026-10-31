import { fetchBlogsPage } from "@/features/blogs/api/blogs.api";
import { BLOGS_DEFAULT_PAGE_SIZE } from "@/features/blogs/schemas/blogs.schema";
import { infiniteQueryOptions, useInfiniteQuery } from "@tanstack/react-query";

export const blogKeys = {
    all: ["blogs"] as const,
    lists: () => [...blogKeys.all, "list"] as const,
    list: () => [...blogKeys.lists()] as const,
    details: () => [...blogKeys.all, "detail"] as const,
    detail: (id: string) => [...blogKeys.details(), id] as const,
};

/** Szerveren (prefetch) és kliensen is ugyanez az opció használható. */
export const blogsInfiniteQueryOptions = () =>
    infiniteQueryOptions({
        queryKey: blogKeys.list(),
        queryFn: ({ pageParam, signal }) =>
            fetchBlogsPage(
                { limit: BLOGS_DEFAULT_PAGE_SIZE, cursor: pageParam },
                signal,
            ),
        initialPageParam: undefined as string | undefined,
        getNextPageParam: (lastPage) =>
            lastPage.hasNextPage
                ? (lastPage.nextCursor ?? undefined)
                : undefined,
        staleTime: 5 * 60 * 1000,
    });

export function useBlogs() {
    return useInfiniteQuery(blogsInfiniteQueryOptions());
}
