export type Blog = {
    id: number;
    title: string;
    content: string;
    authorId: number;
    tags: string[];
    viewers: number;
    createdAt: Date;
    updatedAt: Date;
};
