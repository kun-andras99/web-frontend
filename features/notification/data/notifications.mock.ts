

export type MockNotificationType =
    | "PROFILE_VISIT"
    | "NEW_FAVORITE"
    | "FRIEND_REQUEST"
    | "FRIEND_ACCEPTED"
    | "GROUP_INVITATION"
    | "GROUP_JOIN_REQUEST"
    | "GROUP_JOIN_ACCEPTED"
    | "GALLERY_SHARED"
    | "BLOG_LIKE"
    | "MATCH"
    | "NEW_MESSAGE"
    | "SYSTEM";

export type MockNotification = {
    id: string;
    actor: {
        id: string;
        username: string;
        avatar: string;
    } | null;
    type: MockNotificationType;
    title: string;
    message: string;
    entityId: string | null;
    entityType: string | null;
    readAt: Date | null;
    createdAt: Date;
};

const users = [
    {
        id: "user-01",
        username: "Sophie",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        id: "user-02",
        username: "Emma",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
        id: "user-03",
        username: "Olivia",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
        id: "user-04",
        username: "Mia",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
        id: "user-05",
        username: "Liam",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        id: "user-06",
        username: "Noah",
        avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    {
        id: "user-07",
        username: "Lucas",
        avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    },
    {
        id: "user-08",
        username: "Daniel",
        avatar: "https://randomuser.me/api/portraits/men/68.jpg",
    },
];

const now = new Date();

const minutesAgo = (minutes: number): Date =>
    new Date(now.getTime() - minutes * 60 * 1000);

const hoursAgo = (hours: number): Date =>
    new Date(now.getTime() - hours * 60 * 60 * 1000);

function daysAgo(days: number): Date {
    const date = new Date(now);

    date.setDate(date.getDate() - days);

    return date;
}
const unreadIndexes = new Set([3, 17, 34]);

export const notificationsMock: MockNotification[] = [
    {
        id: "notification-01",
        actor: users[0],
        type: "MATCH",
        title: "Új match",
        message: "Sophie és te kölcsönösen kedveltétek egymást.",
        entityId: "match-01",
        entityType: "match",
        readAt: null,
        createdAt: minutesAgo(8),
    },
    {
        id: "notification-02",
        actor: users[4],
        type: "NEW_MESSAGE",
        title: "Új üzenet",
        message: "Liam üzenetet küldött neked.",
        entityId: "chat-01",
        entityType: "chat",
        readAt: minutesAgo(4),
        createdAt: minutesAgo(16),
    },
    {
        id: "notification-03",
        actor: users[1],
        type: "PROFILE_VISIT",
        title: "Megnézte a profilod",
        message: "Emma megnézte a profilodat.",
        entityId: users[1].id,
        entityType: "user",
        readAt: null,
        createdAt: minutesAgo(28),
    },
    {
        id: "notification-04",
        actor: users[2],
        type: "NEW_FAVORITE",
        title: "Új kedvelés",
        message: "Olivia hozzáadott a kedvenceihez.",
        entityId: users[2].id,
        entityType: "user",
        readAt: null,
        createdAt: minutesAgo(41),
    },
    {
        id: "notification-05",
        actor: users[5],
        type: "FRIEND_REQUEST",
        title: "Új ismerős felkérés",
        message: "Noah ismerősnek jelölt.",
        entityId: "friendship-01",
        entityType: "friendship",
        readAt: null,
        createdAt: minutesAgo(55),
    },

    {
        id: "notification-06",
        actor: users[3],
        type: "BLOG_LIKE",
        title: "Új kedvelés",
        message: "Mia kedvelte a blogbejegyzésedet.",
        entityId: "blog-01",
        entityType: "blog",
        readAt: null,
        createdAt: hoursAgo(1),
    },
    {
        id: "notification-07",
        actor: users[6],
        type: "GROUP_INVITATION",
        title: "Csoportmeghívó",
        message: "Lucas meghívott egy csoportba.",
        entityId: "group-01",
        entityType: "group",
        readAt: null,
        createdAt: hoursAgo(2),
    },
    {
        id: "notification-08",
        actor: users[7],
        type: "GALLERY_SHARED",
        title: "Album megosztva",
        message: "Daniel megosztott veled egy albumot.",
        entityId: "gallery-01",
        entityType: "gallery",
        readAt: hoursAgo(3),
        createdAt: hoursAgo(3),
    },
    {
        id: "notification-09",
        actor: users[0],
        type: "PROFILE_VISIT",
        title: "Megnézte a profilod",
        message: "Sophie ismét megnézte a profilodat.",
        entityId: users[0].id,
        entityType: "user",
        readAt: hoursAgo(4),
        createdAt: hoursAgo(4),
    },
    {
        id: "notification-10",
        actor: users[4],
        type: "NEW_FAVORITE",
        title: "Új kedvelés",
        message: "Liam kedvelte a profilodat.",
        entityId: users[4].id,
        entityType: "user",
        readAt: hoursAgo(5),
        createdAt: hoursAgo(5),
    },

    {
        id: "notification-11",
        actor: users[1],
        type: "FRIEND_ACCEPTED",
        title: "Ismerős felkérés elfogadva",
        message: "Emma elfogadta az ismerős felkérésedet.",
        entityId: "friendship-02",
        entityType: "friendship",
        readAt: hoursAgo(6),
        createdAt: hoursAgo(6),
    },
    {
        id: "notification-12",
        actor: users[2],
        type: "GROUP_JOIN_REQUEST",
        title: "Új csoportkérelem",
        message: "Olivia csatlakozni szeretne a csoportodhoz.",
        entityId: "group-02",
        entityType: "group",
        readAt: hoursAgo(7),
        createdAt: hoursAgo(7),
    },
    {
        id: "notification-13",
        actor: users[5],
        type: "GROUP_JOIN_ACCEPTED",
        title: "Csoporttagság elfogadva",
        message: "Noah elfogadta a csoporthoz való csatlakozásodat.",
        entityId: "group-03",
        entityType: "group",
        readAt: hoursAgo(8),
        createdAt: hoursAgo(8),
    },
    {
        id: "notification-14",
        actor: users[3],
        type: "NEW_MESSAGE",
        title: "Új üzenet",
        message: "Mia új üzenetet küldött neked.",
        entityId: "chat-02",
        entityType: "chat",
        readAt: hoursAgo(9),
        createdAt: hoursAgo(9),
    },
    {
        id: "notification-15",
        actor: users[6],
        type: "MATCH",
        title: "Új match",
        message: "Lucas és te kölcsönösen kedveltétek egymást.",
        entityId: "match-02",
        entityType: "match",
        readAt: hoursAgo(10),
        createdAt: hoursAgo(10),
    },

    ...Array.from({ length: 35 }, (_, index) => {
        const actor = users[index % users.length];

        const notifications = [
            {
                type: "PROFILE_VISIT" as const,
                title: "Megnézte a profilod",
                message: `${actor.username} megnézte a profilodat.`,
            },
            {
                type: "NEW_FAVORITE" as const,
                title: "Új kedvelés",
                message: `${actor.username} kedvelte a profilodat.`,
            },
            {
                type: "BLOG_LIKE" as const,
                title: "Új blog kedvelés",
                message: `${actor.username} kedvelte a blogbejegyzésedet.`,
            },
            {
                type: "NEW_MESSAGE" as const,
                title: "Új üzenet",
                message: `${actor.username} üzenetet küldött neked.`,
            },
            {
                type: "GALLERY_SHARED" as const,
                title: "Album megosztva",
                message: `${actor.username} megosztott veled egy albumot.`,
            },
            {
                type: "FRIEND_ACCEPTED" as const,
                title: "Ismerős felkérés elfogadva",
                message: `${actor.username} elfogadta az ismerős felkérésedet.`,
            },
            {
                type: "MATCH" as const,
                title: "Új match",
                message: `Te és ${actor.username} kölcsönösen kedveltétek egymást.`,
            },
        ];
        const createdAt = daysAgo(Math.floor(index / 8) + 1);
        const notification = notifications[index % notifications.length];
        const isUnread = unreadIndexes.has(index);

        return {
            id: `notification-${String(index + 16).padStart(2, "0")}`,
            actor,
            type: notification.type,
            title: notification.title,
            message: notification.message,
            entityId: `${notification.type.toLowerCase()}-${index + 1}`,
            entityType: notification.type.toLowerCase(),
            readAt: isUnread ? null : createdAt,
            createdAt: daysAgo(Math.floor(index / 8) + 1),
        };
    }),
];
