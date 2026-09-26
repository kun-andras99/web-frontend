"use client";

import { useEffect, useRef } from "react";

import BottomPageWrapper from "@/features/(app)/(ui)/BottomPageWrapper";
import { useBlogs } from "@/features/blogs/hooks/useBlogs";
import Image from "next/image";
import Link from "next/link";

export function formatDate(date: string | Date) {
    return new Intl.DateTimeFormat("en-EN", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(date));
}

export default function BlogsScreen() {
    const {
        data: apiBlogs,
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
        apiBlogs?.pages.some((page) => page.blogs.length > 0) ?? false;
    const blogs = apiBlogs?.pages.flatMap((page) => page.blogs) ?? [];

    return (
        <BottomPageWrapper>
            <div className="blogs-list">
                {/* <Link href={`/blog/create`}>Új blog készítése</Link> */}
                {!hasBlogs ? (
                    <p>Még nincsenek blogok.</p>
                ) : (
                    blogs.map((blog) => (
                        <article className="blog-card" key={blog.id}>
                            <div className="blog-card-content">
                                <div>
                                    <div className="blog-author">
                                        <Image
                                            src={
                                                blog.author.avatarUrl ??
                                                "/assets/images/user-blank-1.png"
                                            }
                                            alt={
                                                blog.author.nickname ??
                                                blog.author.username
                                            }
                                            width={42}
                                            height={42}
                                            className={"rounded-full"}
                                        />
                                    </div>
                                    <div>
                                        <Link href={`/blog/${blog.id}`}>
                                            <h3>{blog.title}</h3>
                                        </Link>
                                    </div>
                                    <div>
                                        <p>{blog.author.nickname}</p>
                                        <p>{formatDate(blog.createdAt)}</p>
                                    </div>
                                </div>
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
                                        <span>{blog.likeCount} like</span>
                                    </div>
                                </div>
                                <p className="content">{blog.content}</p>
                            </div>
                        </article>
                    ))
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
