import { NewsItem } from "@/features/_components/carousel/news-carousel/types/NewsType";

export const ALL_NEWS: NewsItem[] = [
    {
        id: 0,
        title: "Your title is here",
        description: "lorem...",
        imageUrl: "/assets/images/user-blank-1.png",
        dateTime: new Date("2026-09-12T18:30:00.000Z"),
    },
    {
        id: 1,
        title: "Your title is here",
        description: "lorem...",
        imageUrl: "/assets/images/user-blank-2.png",
        dateTime: new Date("2026-09-12T18:30:00.000Z"),
    },
    {
        id: 2,
        title: "Your title is here",
        description: "lorem...",
        imageUrl: "/assets/images/user-blank-5.png",
        dateTime: new Date("2026-09-12T18:30:00.000Z"),
    },
] as const;
