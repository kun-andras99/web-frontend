import { Blog } from "../../types/blog.types";

export const fakeBlogs: Blog[] = [
    {
        id: 1,
        title: "Ez az első blogbejegyzés címe",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laudantium pariatur vel accusantium.",
        authorId: 1,
        tags: ["lifestyle", "community"],
        viewers: 26,
        createdAt: new Date("2026-08-30T18:00:00Z"),
        updatedAt: new Date("2026-08-30T18:00:00Z"),
    },
    {
        id: 2,
        title: "Legjobb élményem egy kalandparkban",
        content:
            "Egy spontán hétvégi kiruccanásnak indult, végül az egyik legjobb élményem lett.",
        authorId: 2,
        tags: ["outdoor", "fetish", "young", "wlw"],
        viewers: 42,
        createdAt: new Date("2026-08-30T17:30:00Z"),
        updatedAt: new Date("2026-08-30T17:30:00Z"),
    },
];
