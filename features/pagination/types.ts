export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    siblingCount?: number;
}

export type PaginationItem =
    | {
          type: "page";
          page: number;
      }
    | {
          type: "ellipsis";
      };
