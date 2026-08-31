import { PaginationItem } from "@/features/pagination/types";

interface UsePaginationProps {
    currentPage: number;
    totalPages: number;
    siblingCount?: number;
}

export function usePagination({
    currentPage,
    totalPages,
    siblingCount = 1,
}: UsePaginationProps): PaginationItem[] {
    if (totalPages <= 0) {
        return [];
    }

    if (totalPages <= siblingCount * 2 + 5) {
        return Array.from({ length: totalPages }, (_, index) => ({
            type: "page" as const,
            page: index + 1,
        }));
    }

    const items: PaginationItem[] = [];

    const leftSibling = Math.max(currentPage - siblingCount, 1);

    const rightSibling = Math.min(currentPage + siblingCount, totalPages);

    const showLeftEllipsis = leftSibling > 2;
    const showRightEllipsis = rightSibling < totalPages - 1;

    items.push({
        type: "page",
        page: 1,
    });

    if (showLeftEllipsis) {
        items.push({
            type: "ellipsis",
        });
    } else {
        for (let page = 2; page < leftSibling; page++) {
            items.push({
                type: "page",
                page,
            });
        }
    }

    for (let page = leftSibling; page <= rightSibling; page++) {
        if (page !== 1 && page !== totalPages) {
            items.push({
                type: "page",
                page,
            });
        }
    }

    if (showRightEllipsis) {
        items.push({
            type: "ellipsis",
        });
    } else {
        for (let page = rightSibling + 1; page < totalPages; page++) {
            items.push({
                type: "page",
                page,
            });
        }
    }

    items.push({
        type: "page",
        page: totalPages,
    });

    return items;
}
