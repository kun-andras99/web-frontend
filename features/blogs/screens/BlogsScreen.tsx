"use client";

import { Fragment, useEffect, useRef } from "react";

import BottomPageWrapper from "@/features/(app)/(ui)/BottomPageWrapper";
import { useBlogs } from "@/features/blogs/hooks/useBlogs";
import Link from "next/link";

export default function BlogsScreen() {
    const {
        data: blogs,
        isLoading,
        isError,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useBlogs();

    const loadMoreRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const element = loadMoreRef.current;

        if (!element) {
            return;
        }

        if (!hasNextPage) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];

                if (entry.isIntersecting && !isFetchingNextPage) {
                    fetchNextPage();
                }
            },
            {
                rootMargin: "300px",
            },
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

    console.log(blogs);
    if (isLoading) {
        return (
            <BottomPageWrapper>
                <p>Loading blogs...</p>
            </BottomPageWrapper>
        );
    }

    if (isError) {
        return (
            <BottomPageWrapper>
                <h2 className="small-title">Blogok</h2>

                <div className="blogs-list">
                    <p>Nem sikerült betölteni a blogokat.</p>
                </div>
            </BottomPageWrapper>
        );
    }

    const hasBlogs =
        blogs?.pages.some((page) => page.blogs.length > 0) ?? false;

    return (
        <BottomPageWrapper>
            <div className="blogs-list">
                <Link href={`/blog/create`}>Új blog készítése</Link>
                {!hasBlogs ? (
                    <p>Még nincsenek blogok.</p>
                ) : (
                    blogs?.pages.map((page) =>
                        page.blogs.map((blog) => (
                            <Fragment key={blog.id}>
                                <Link href={`/blog/${blog.id}`}>
                                    <article className="blog-card">
                                        <div className="blog-card-content">
                                            <h3>{blog.title}</h3>

                                            <p className="content">
                                                {blog.content}
                                            </p>
                                            <div className="blog-card-data">
                                                <div className="blog-card-tags">
                                                    {blog.tags.map((tag) => (
                                                        <span
                                                            key={tag.id}
                                                            className="blog-tag">
                                                            #{tag.name}
                                                        </span>
                                                    ))}
                                                </div>

                                                <div className="blog-card-meta">
                                                    <span>
                                                        {blog.likeCount} like
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </Fragment>
                        )),
                    )
                )}

                {hasNextPage && (
                    <div ref={loadMoreRef} className="blogs-load-more">
                        {isFetchingNextPage && <p>Blogok betöltése...</p>}
                    </div>
                )}
            </div>
        </BottomPageWrapper>
    );
}
