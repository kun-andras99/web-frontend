"use client";

import { useMemo, useState } from "react";

import { blogs } from "@/features/blog/blogs.data";
import Pagination from "@/features/pagination";
import BlogList from "./BlogList";

const ITEMS_PER_PAGE = 4;

export default function BlogsPage() {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE);

    const currentBlogs = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

        const endIndex = startIndex + ITEMS_PER_PAGE;

        return blogs.slice(startIndex, endIndex);
    }, [currentPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="blogs-page">
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />

            <BlogList blogs={currentBlogs} />

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
}
