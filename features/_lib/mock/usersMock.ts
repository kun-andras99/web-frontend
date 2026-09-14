import type {
    Gender,
    GenderInterest,
    LookingFor,
    RelationshipStatus,
    Sexuality,
    SexualityInterest,
    TransStatus,
    UserRole,
} from "../../../prisma/generated/prisma";

type MockUser = {
    id: string;
    username: string;
    email: string;
    password: string;
    passwordHash: string;
    emailVerified: Date | null;
    createdAt: Date;
    updatedAt: Date;

    lat: number | null;
    lng: number | null;
    locationEnabled: boolean;
    locationUpdatedAt: Date | null;

    role: UserRole;
    relationshipStatus: RelationshipStatus | null;

    lookingFor: {
        id: number;
        userId: string;
        value: LookingFor;
    }[];

    genderInterest: {
        id: number;
        userId: string;
        value: GenderInterest;
    }[];

    sexualityInteres: {
        id: number;
        userId: string;
        value: SexualityInterest;
    }[];

    userData: {
        id: number;
        userId: string;
        avatar: string | null;
        avatarUrl: string | null;
        nickname: string | null;
        description: string | null;
        bio: string | null;
        birth: Date;
        heightCm: number | null;
        weightKg: number | null;
        gender: Gender | null;
        sexuality: Sexuality | null;
        pronouns: string | null;
        city: string | null;
        transStatus: TransStatus | null;
        createdAt: Date;
        updatedAt: Date;
    } | null;

    userPreference: {
        id: number;
        userId: string;
        minAge: number | null;
        maxAge: number | null;
        minHeightCm: number | null;
        maxHeightCm: number | null;
        maxDistanceKm: number | null;
        verifiedOnly: boolean;
        locationRequired: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | null;
};

const now = new Date("2026-09-14T12:00:00.000Z");

const names = [
    "Alex",
    "Daniel",
    "Martin",
    "Bence",
    "Márk",
    "Dávid",
    "Ádám",
    "Péter",
    "Máté",
    "Zoltán",
    "Gergő",
    "Balázs",
    "Kristóf",
    "Tamás",
    "András",
    "László",
    "Noel",
    "Levente",
    "Bálint",
    "Dominik",
    "Anna",
    "Emma",
    "Lili",
    "Nóra",
    "Hanna",
    "Laura",
    "Réka",
    "Dóra",
    "Eszter",
    "Zsófia",
    "Luca",
    "Sára",
    "Petra",
    "Viktória",
    "Jázmin",
    "Fanni",
    "Blanka",
    "Kata",
    "Mira",
    "Flóra",
    "Chris",
    "Sam",
    "Jordan",
    "Taylor",
    "Robin",
    "Jamie",
    "Morgan",
    "Charlie",
    "Dani",
    "Patrik",
] as const;

const descriptions = [
    "Kávé, jó beszélgetések és spontán programok.",
    "Szeretem az utazást, a zenét és az új embereket.",
    "Nyugodt, őszinte és kíváncsi természet vagyok.",
    "Sport, barátok és egy kis kaland.",
    "Keresem azt, akivel jókat lehet nevetni.",
    "Filmrajongó, kávéfüggő, örök optimista.",
    "Szeretem a természetet és a hosszú sétákat.",
    "Kreatív ember vagyok, imádok új dolgokat kipróbálni.",
    "Jó humor, őszinteség és kölcsönös tisztelet.",
    "Nyitott vagyok új élményekre és kapcsolatokra.",
];

const avatars = [
    "https://i.pravatar.cc/600?img=1",
    "https://i.pravatar.cc/600?img=2",
    "https://i.pravatar.cc/600?img=3",
    "https://i.pravatar.cc/600?img=4",
    "https://i.pravatar.cc/600?img=5",
    "https://i.pravatar.cc/600?img=6",
    "https://i.pravatar.cc/600?img=7",
    "https://i.pravatar.cc/600?img=8",
    "https://i.pravatar.cc/600?img=9",
    "https://i.pravatar.cc/600?img=10",
    "https://i.pravatar.cc/600?img=11",
    "https://i.pravatar.cc/600?img=12",
    "https://i.pravatar.cc/600?img=13",
    "https://i.pravatar.cc/600?img=14",
    "https://i.pravatar.cc/600?img=15",
    "https://i.pravatar.cc/600?img=16",
    "https://i.pravatar.cc/600?img=17",
    "https://i.pravatar.cc/600?img=18",
    "https://i.pravatar.cc/600?img=19",
    "https://i.pravatar.cc/600?img=20",
    "https://i.pravatar.cc/600?img=21",
    "https://i.pravatar.cc/600?img=22",
    "https://i.pravatar.cc/600?img=23",
    "https://i.pravatar.cc/600?img=24",
    "https://i.pravatar.cc/600?img=25",
    "https://i.pravatar.cc/600?img=26",
    "https://i.pravatar.cc/600?img=27",
    "https://i.pravatar.cc/600?img=28",
    "https://i.pravatar.cc/600?img=29",
    "https://i.pravatar.cc/600?img=30",
    "https://i.pravatar.cc/600?img=31",
    "https://i.pravatar.cc/600?img=32",
    "https://i.pravatar.cc/600?img=33",
    "https://i.pravatar.cc/600?img=34",
    "https://i.pravatar.cc/600?img=35",
    "https://i.pravatar.cc/600?img=36",
    "https://i.pravatar.cc/600?img=37",
    "https://i.pravatar.cc/600?img=38",
    "https://i.pravatar.cc/600?img=39",
    "https://i.pravatar.cc/600?img=40",
    "https://i.pravatar.cc/600?img=41",
    "https://i.pravatar.cc/600?img=42",
    "https://i.pravatar.cc/600?img=43",
    "https://i.pravatar.cc/600?img=44",
    "https://i.pravatar.cc/600?img=45",
    "https://i.pravatar.cc/600?img=46",
    "https://i.pravatar.cc/600?img=47",
    "https://i.pravatar.cc/600?img=48",
    "https://i.pravatar.cc/600?img=49",
    "https://i.pravatar.cc/600?img=50",
];

const genders: Gender[] = [
    "MAN",
    "WOMAN",
    "MAN",
    "WOMAN",
    "MAN",
    "WOMAN",
    "MAN",
    "WOMAN",
    "MAN",
    "WOMAN",
    "MAN",
    "WOMAN",
    "MAN",
    "WOMAN",
    "MAN",
    "WOMAN",
    "MAN",
    "WOMAN",
    "MAN",
    "WOMAN",
    "MAN",
    "WOMAN",
    "MAN",
    "WOMAN",
    "MAN",
    "WOMAN",
    "MAN",
    "WOMAN",
    "MAN",
    "WOMAN",
    "MAN",
    "WOMAN",
    "MAN",
    "WOMAN",
    "MAN",
    "WOMAN",
    "MAN",
    "WOMAN",
    "MAN",
    "WOMAN",
    "TRANS_MAN",
    "TRANS_WOMAN",
    "MAN",
    "WOMAN",
    "MAN",
    "WOMAN",
    "MAN",
    "WOMAN",
    "MAN",
    "WOMAN",
];

const sexualities: Sexuality[] = [
    "GAY",
    "STRAIGHT",
    "BISEXUAL",
    "STRAIGHT",
    "GAY",
    "LESBIAN",
    "BISEXUAL",
    "STRAIGHT",
    "GAY",
    "STRAIGHT",
    "PANSEXUAL",
    "LESBIAN",
    "GAY",
    "BISEXUAL",
    "STRAIGHT",
    "PANSEXUAL",
    "GAY",
    "STRAIGHT",
    "BISEXUAL",
    "LESBIAN",
    "STRAIGHT",
    "BISEXUAL",
    "LESBIAN",
    "STRAIGHT",
    "PANSEXUAL",
    "BISEXUAL",
    "STRAIGHT",
    "LESBIAN",
    "GAY",
    "BISEXUAL",
    "STRAIGHT",
    "PANSEXUAL",
    "LESBIAN",
    "STRAIGHT",
    "BISEXUAL",
    "GAY",
    "STRAIGHT",
    "PANSEXUAL",
    "BISEXUAL",
    "LESBIAN",
    "GAY",
    "PANSEXUAL",
    "STRAIGHT",
    "BISEXUAL",
    "GAY",
    "STRAIGHT",
    "LESBIAN",
    "BISEXUAL",
    "GAY",
    "STRAIGHT",
];

const cities = [
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
    "CENTRUM",
] as const;

const lookingForValues: LookingFor[] = [
    "CHAT",
    "FRIENDSHIP",
    "CASUAL_DATING",
    "SERIOUS_RELATIONSHIP",
    "NETWORKING",
    "CHAT",
    "FRIENDSHIP",
    "CASUAL_DATING",
    "SERIOUS_RELATIONSHIP",
    "NOTHING_SPECIFIC",
    "CHAT",
    "FRIENDSHIP",
    "CASUAL_DATING",
    "SERIOUS_RELATIONSHIP",
    "HOOKUP",
    "CHAT",
    "FRIENDSHIP",
    "CASUAL_DATING",
    "SERIOUS_RELATIONSHIP",
    "NETWORKING",
    "CHAT",
    "FRIENDSHIP",
    "CASUAL_DATING",
    "SERIOUS_RELATIONSHIP",
    "NOTHING_SPECIFIC",
    "CHAT",
    "FRIENDSHIP",
    "CASUAL_DATING",
    "SERIOUS_RELATIONSHIP",
    "HOOKUP",
    "CHAT",
    "FRIENDSHIP",
    "CASUAL_DATING",
    "SERIOUS_RELATIONSHIP",
    "NETWORKING",
    "CHAT",
    "FRIENDSHIP",
    "CASUAL_DATING",
    "SERIOUS_RELATIONSHIP",
    "NOTHING_SPECIFIC",
    "CHAT",
    "FRIENDSHIP",
    "CASUAL_DATING",
    "SERIOUS_RELATIONSHIP",
    "HOOKUP",
    "CHAT",
    "FRIENDSHIP",
    "CASUAL_DATING",
    "SERIOUS_RELATIONSHIP",
    "NETWORKING",
    "CHAT",
    "FRIENDSHIP",
];

const relationshipStatuses: RelationshipStatus[] = [
    "SINGLE",
    "SINGLE",
    "SINGLE",
    "SINGLE",
    "COMPLICATED",
    "SINGLE",
    "DIVORCED",
    "SINGLE",
    "OPEN",
    "SINGLE",
    "SINGLE",
    "SINGLE",
    "IN_RELATION",
    "SINGLE",
    "SINGLE",
    "SINGLE",
    "COMPLICATED",
    "SINGLE",
    "SINGLE",
    "SINGLE",
    "SINGLE",
    "SINGLE",
    "SINGLE",
    "DIVORCED",
    "SINGLE",
    "SINGLE",
    "OPEN",
    "SINGLE",
    "SINGLE",
    "SINGLE",
    "SINGLE",
    "SINGLE",
    "SINGLE",
    "SINGLE",
    "SINGLE",
    "COMPLICATED",
    "SINGLE",
    "SINGLE",
    "SINGLE",
    "SINGLE",
    "SINGLE",
    "SINGLE",
    "SINGLE",
    "SINGLE",
    "OPEN",
    "SINGLE",
    "SINGLE",
    "SINGLE",
    "SINGLE",
    "SINGLE",
];

const locations = [
    { lat: 47.4979, lng: 19.0402 },
    { lat: 47.503, lng: 19.057 },
    { lat: 47.514, lng: 19.062 },
    { lat: 47.489, lng: 19.071 },
    { lat: 47.508, lng: 19.035 },
    { lat: 47.485, lng: 19.041 },
    { lat: 47.52, lng: 19.05 },
    { lat: 47.495, lng: 19.025 },
    { lat: 47.511, lng: 19.08 },
    { lat: 47.478, lng: 19.06 },
];

const addDays = (days: number) => new Date(now.getTime() + days * 86400000);

const birthDate = (age: number) => new Date(Date.UTC(2026 - age, 5, 15));

const getGenderInterest = (gender: Gender): GenderInterest[] => {
    if (gender === "MAN" || gender === "TRANS_MAN") {
        return ["MAN", "WOMAN"];
    }

    return ["MAN", "WOMAN"];
};

const getSexualityInterest = (sexuality: Sexuality): SexualityInterest[] => {
    if (sexuality === "GAY") return ["GAY", "BISEXUAL"];
    if (sexuality === "LESBIAN") return ["LESBIAN", "BISEXUAL"];

    return ["STRAIGHT", "BISEXUAL", "PANSEXUAL"];
};

export const usersMock: MockUser[] = names.map((name, index) => {
    const id = `mock-user-${String(index + 1).padStart(3, "0")}`;
    const gender = genders[index];
    const sexuality = sexualities[index];
    const location = locations[index % locations.length];
    const lookingFor = lookingForValues[index];
    const createdAt = addDays(-index - 1);

    const avatar = avatars[index];

    return {
        id,
        username: `${name.toLowerCase()}${index + 1}`,
        email: `${name.toLowerCase()}${index + 1}@example.com`,
        password: "mock-password",
        passwordHash: "mock-password-hash",
        emailVerified: index % 5 === 0 ? null : createdAt,
        createdAt,
        updatedAt: now,

        lat: location.lat,
        lng: location.lng,
        locationEnabled: true,
        locationUpdatedAt: now,

        role: "USER",
        relationshipStatus: relationshipStatuses[index],

        lookingFor: [
            {
                id: index + 1,
                userId: id,
                value: lookingFor,
            },
        ],

        genderInterest: getGenderInterest(gender).map(
            (value, interestIndex) => ({
                id: index * 2 + interestIndex + 1,
                userId: id,
                value,
            }),
        ),

        sexualityInteres: getSexualityInterest(sexuality).map(
            (value, interestIndex) => ({
                id: index * 3 + interestIndex + 1,
                userId: id,
                value,
            }),
        ),

        userData: {
            id: index + 1,
            userId: id,
            avatar,
            avatarUrl: avatar,
            nickname: name,
            description: descriptions[index % descriptions.length],
            bio: `Szia, ${name} vagyok! Szeretem az életet, a jó társaságot és az új élményeket.`,
            birth: birthDate(22 + (index % 19)),
            heightCm: 165 + (index % 26),
            weightKg: 55 + (index % 36),
            gender,
            sexuality,
            pronouns:
                gender === "MAN" || gender === "TRANS_MAN" ? "ő/őt" : "ő/őt",
            city: cities[index],
            transStatus:
                gender === "TRANS_MAN" || gender === "TRANS_WOMAN"
                    ? "TRANS"
                    : "CIS",
            createdAt,
            updatedAt: now,
        },

        userPreference: {
            id: index + 1,
            userId: id,
            minAge: 18,
            maxAge: 60,
            minHeightCm: 150,
            maxHeightCm: 200,
            maxDistanceKm: 50,
            verifiedOnly: false,
            locationRequired: true,
            createdAt,
            updatedAt: now,
        },
    };
});

export default usersMock;
