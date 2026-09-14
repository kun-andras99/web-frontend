import usersMock from "@/features/_lib/mock/usersMock";

export type MockGroupMember = {
    id: string;
    userId: string;
    groupId: string;
    joinedAt: Date;
};

export type MockGroup = {
    id: string;
    name: string;
    description: string;
    ownerId: string;
    createdAt: Date;
    members: MockGroupMember[];
};

const now = new Date("2026-09-14T12:00:00.000Z");

const groupNames = [
    "Budapest Coffee Lovers",
    "Weekend Adventures",
    "Fitness & Wellness",
    "Movie Night",
    "Travel Buddies",
    "Music & Concerts",
    "Foodies Budapest",
    "Photography Club",
    "Gaming Community",
    "New Friends Budapest",
];

const groupDescriptions = [
    "Kávézás, beszélgetések és új ismeretségek Budapesten.",
    "Közös programok, kirándulások és hétvégi kalandok.",
    "Edzés, egészséges életmód és motiváció.",
    "Filmek, sorozatok és közös mozizások.",
    "Utazás, új helyek és közös élmények.",
    "Zene, koncertek és fesztiválok.",
    "Gasztronómia, éttermek és főzős programok.",
    "Fotózás, kreativitás és közös fotós séták.",
    "Játékok, gamer találkozók és közös szórakozás.",
    "Új emberek, barátságok és közös programok.",
];

const groupImages = [
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848",
    "https://images.unsplash.com/photo-1542751371-adc38448a05e",
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18",
];

const createGroupMembers = (
    groupId: string,
    ownerId: string,
    startIndex: number,
): MockGroupMember[] => {
    const members: MockGroupMember[] = [];

    // Tulajdonos
    members.push({
        id: `${groupId}-member-1`,
        userId: ownerId,
        groupId,
        joinedAt: now,
    });

    // További 4 tag az 50 mockUser közül
    for (let i = 0; i < 4; i++) {
        const user = usersMock[(startIndex + i) % usersMock.length];

        if (user.id === ownerId) continue;

        members.push({
            id: `${groupId}-member-${members.length + 1}`,
            userId: user.id,
            groupId,
            joinedAt: new Date(now.getTime() - (i + 1) * 86400000),
        });
    }

    return members;
};

export const groupsMock: MockGroup[] = groupNames.map((name, index) => {
    const groupId = `mock-group-${String(index + 1).padStart(3, "0")}`;

    const owner = usersMock[index];

    return {
        id: groupId,
        name,
        description: groupDescriptions[index],
        ownerId: owner.id,
        createdAt: new Date(now.getTime() - (index + 1) * 86400000),
        members: createGroupMembers(groupId, owner.id, index * 5 + 1),
    };
});

export default groupsMock;
