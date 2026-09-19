"use client";

import { usePagination } from "@/features/(app)/pagination/hooks/usePagination";
import { PaginationProps } from "@/features/(app)/pagination/types";

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
    siblingCount = 1,
}: PaginationProps) {
    const items = usePagination({
        currentPage,
        totalPages,
        siblingCount,
    });

    const goToPrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const goToNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <nav className="pagination">
            <button
                type="button"
                className="btn back"
                onClick={goToPrevious}
                disabled={currentPage === 1}
                aria-label="Previous page">
                ←
            </button>

            <div className="numbers">
                {items.map((item, index) => {
                    if (item.type === "ellipsis") {
                        return (
                            <span key={`ellipsis-${index}`} className="btn">
                                ...
                            </span>
                        );
                    }

                    const isActive = item.page === currentPage;

                    return (
                        <button
                            key={item.page}
                            type="button"
                            className={isActive ? "btn active" : "btn"}
                            onClick={() => onPageChange(item.page)}
                            aria-current={isActive ? "page" : undefined}>
                            {item.page}
                        </button>
                    );
                })}
            </div>

            <button
                type="button"
                className="btn prev"
                onClick={goToNext}
                disabled={currentPage === totalPages}
                aria-label="Next page">
                →
            </button>
        </nav>
    );
}
