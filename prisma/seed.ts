import bcrypt from "bcryptjs";
import "dotenv/config";

import { prisma } from "@/lib/prisma";

import {
    AppCity,
    BlogVisibility,
    EyeCandyAction,
    FriendRequestStatus,
    FriendshipStatus,
    GalleryType,
    GalleryVisibility,
    Gender,
    GenderInterest,
    GroupInvitationStatus,
    GroupJoinRequestStatus,
    GroupMemberRole,
    GroupVisibility,
    LookingFor,
    MatchActionType,
    MatchStatus,
    MessageType,
    ModerationActionType,
    NotificationType,
    PaymentStatus,
    QuickDisplayType,
    RelationshipStatus,
    ReportStatus,
    ReportType,
    Sexuality,
    SexualityInterest,
    SubscriptionStatus,
    TransStatus,
    UserAccountStatus,
    UserRole,
    VipTier,
} from "./generated/prisma/client";

const PASSWORD = "Test1234!";

const now = new Date();

const daysAgo = (days: number) => {
    const date = new Date(now);
    date.setDate(date.getDate() - days);
    return date;
};

const hoursAgo = (hours: number) => {
    const date = new Date(now);
    date.setHours(date.getHours() - hours);
    return date;
};

const hoursFromNow = (hours: number) => {
    const date = new Date(now);
    date.setHours(date.getHours() + hours);
    return date;
};

const daysFromNow = (days: number) => {
    const date = new Date(now);
    date.setDate(date.getDate() + days);
    return date;
};

const image = (id: number) => `https://i.pravatar.cc/800?img=${id}`;

const galleryImage = (id: number) =>
    `https://picsum.photos/seed/kamaftu-gallery-${id}/1200/1200`;

const eyeCandyImage = (id: number) =>
    `https://picsum.photos/seed/kamaftu-eye-${id}/1200/1600`;

async function clearDatabase() {
    console.log("🧹 Clearing database...");

    await prisma.subscriptionPayment.deleteMany();
    await prisma.userSubscription.deleteMany();
    await prisma.vipPlan.deleteMany();

    await prisma.moderationAction.deleteMany();
    await prisma.report.deleteMany();

    await prisma.notification.deleteMany();

    await prisma.messageRead.deleteMany();
    await prisma.messageAttachment.deleteMany();
    await prisma.message.deleteMany();
    await prisma.conversationParticipant.deleteMany();
    await prisma.conversation.deleteMany();

    await prisma.quickDisplay.deleteMany();

    await prisma.eyeCandyVote.deleteMany();
    await prisma.eyeCandyImage.deleteMany();
    await prisma.eyeCandyParticipant.deleteMany();
    await prisma.eyeCandyContest.deleteMany();

    await prisma.match.deleteMany();
    await prisma.matchAction.deleteMany();

    await prisma.friendship.deleteMany();
    await prisma.friendRequest.deleteMany();

    await prisma.userBlock.deleteMany();
    await prisma.userFavorite.deleteMany();

    await prisma.blogLike.deleteMany();
    await prisma.blogTag.deleteMany();
    await prisma.blog.deleteMany();

    await prisma.groupVisit.deleteMany();
    await prisma.groupInvitation.deleteMany();
    await prisma.groupJoinRequest.deleteMany();
    await prisma.groupMember.deleteMany();
    await prisma.group.deleteMany();

    await prisma.galleryShare.deleteMany();
    await prisma.galleryImage.deleteMany();
    await prisma.gallery.deleteMany();

    await prisma.profileVisit.deleteMany();

    await prisma.userSexualityInterest.deleteMany();
    await prisma.userGenderInterest.deleteMany();
    await prisma.userLookingFor.deleteMany();

    await prisma.userPreference.deleteMany();
    await prisma.userData.deleteMany();

    await prisma.verificationToken.deleteMany();
    await prisma.refreshToken.deleteMany();

    await prisma.users.deleteMany();

    console.log("✅ Database cleared.");
}

type UserSeed = {
    username: string;
    email: string;
    birth: Date;
    gender: Gender;
    sexuality: Sexuality;
    transStatus: TransStatus;
    relationshipStatus: RelationshipStatus;
    countryCode: string;
    region: string;
    city: string;
    appCity: AppCity;
    lat: number;
    lng: number;
    nickname: string;
    bio: string;
    description: string;
    heightCm: number;
    weightKg: number;
    avatarId: number;
};

const userSeeds: UserSeed[] = [
    {
        username: "alex_89",
        email: "alex89@example.com",
        birth: new Date("1989-05-14"),
        gender: Gender.MAN,
        sexuality: Sexuality.GAY,
        transStatus: TransStatus.CIS,
        relationshipStatus: RelationshipStatus.SINGLE,
        countryCode: "HU",
        region: "Budapest",
        city: "Budapest",
        appCity: AppCity.GAY,
        lat: 47.4979,
        lng: 19.0402,
        nickname: "Alex",
        bio: "Szeretem a hosszú sétákat, a kávézókat és az esti városi programokat.",
        description:
            "Nyugodt, társaságkedvelő srác, aki szeret új embereket megismerni.",
        heightCm: 181,
        weightKg: 78,
        avatarId: 1,
    },
    {
        username: "martin_b",
        email: "martin.b@example.com",
        birth: new Date("1992-08-21"),
        gender: Gender.MAN,
        sexuality: Sexuality.BISEXUAL,
        transStatus: TransStatus.CIS,
        relationshipStatus: RelationshipStatus.SINGLE,
        countryCode: "HU",
        region: "Pest",
        city: "Szentendre",
        appCity: AppCity.BISEXUAL,
        lat: 47.6694,
        lng: 19.0756,
        nickname: "Martin",
        bio: "Sport, utazás, jó borok és spontán programok.",
        description: "Kíváncsi és nyitott személyiség.",
        heightCm: 185,
        weightKg: 82,
        avatarId: 2,
    },
    {
        username: "daniel_92",
        email: "daniel92@example.com",
        birth: new Date("1992-02-02"),
        gender: Gender.MAN,
        sexuality: Sexuality.GAY,
        transStatus: TransStatus.CIS,
        relationshipStatus: RelationshipStatus.SINGLE,
        countryCode: "HU",
        region: "Budapest",
        city: "Budapest",
        appCity: AppCity.CENTRUM,
        lat: 47.503,
        lng: 19.061,
        nickname: "Daniel",
        bio: "Fotózás, brunch és hétvégi kirándulások.",
        description: "Pozitív és humoros srác.",
        heightCm: 178,
        weightKg: 74,
        avatarId: 3,
    },
    {
        username: "luca_s",
        email: "luca.s@example.com",
        birth: new Date("1996-11-11"),
        gender: Gender.WOMAN,
        sexuality: Sexuality.BISEXUAL,
        transStatus: TransStatus.CIS,
        relationshipStatus: RelationshipStatus.SINGLE,
        countryCode: "HU",
        region: "Budapest",
        city: "Budapest",
        appCity: AppCity.BISEXUAL,
        lat: 47.489,
        lng: 19.075,
        nickname: "Luca",
        bio: "Kreatív dolgok, zene és sok-sok kávé.",
        description: "Kreatív, kíváncsi és beszélgetős.",
        heightCm: 168,
        weightKg: 58,
        avatarId: 4,
    },
    {
        username: "emma_97",
        email: "emma97@example.com",
        birth: new Date("1997-06-18"),
        gender: Gender.WOMAN,
        sexuality: Sexuality.LESBIAN,
        transStatus: TransStatus.CIS,
        relationshipStatus: RelationshipStatus.SINGLE,
        countryCode: "HU",
        region: "Budapest",
        city: "Budapest",
        appCity: AppCity.LESBIAN,
        lat: 47.515,
        lng: 19.043,
        nickname: "Emma",
        bio: "Kutyák, természet és indie zene.",
        description: "Szeretek nyugodt helyeken beszélgetni.",
        heightCm: 172,
        weightKg: 62,
        avatarId: 5,
    },
    {
        username: "noah_tm",
        email: "noah.tm@example.com",
        birth: new Date("1995-09-07"),
        gender: Gender.TRANS_MAN,
        sexuality: Sexuality.PANSEXUAL,
        transStatus: TransStatus.TRANS,
        relationshipStatus: RelationshipStatus.SINGLE,
        countryCode: "HU",
        region: "Budapest",
        city: "Budapest",
        appCity: AppCity.TRANS,
        lat: 47.48,
        lng: 19.055,
        nickname: "Noah",
        bio: "Gaming, filmek és városi felfedezések.",
        description: "Barátságos és közvetlen.",
        heightCm: 176,
        weightKg: 71,
        avatarId: 6,
    },
    {
        username: "sophie_k",
        email: "sophie.k@example.com",
        birth: new Date("1990-03-24"),
        gender: Gender.WOMAN,
        sexuality: Sexuality.STRAIGHT,
        transStatus: TransStatus.CIS,
        relationshipStatus: RelationshipStatus.IN_RELATION,
        countryCode: "HU",
        region: "Budapest",
        city: "Budapest",
        appCity: AppCity.CENTRUM,
        lat: 47.501,
        lng: 19.032,
        nickname: "Sophie",
        bio: "Utazás, jó éttermek és könyvek.",
        description: "Szeretem a tartalmas beszélgetéseket.",
        heightCm: 165,
        weightKg: 57,
        avatarId: 7,
    },
    {
        username: "marco_v",
        email: "marco.v@example.com",
        birth: new Date("1987-12-01"),
        gender: Gender.MAN,
        sexuality: Sexuality.STRAIGHT,
        transStatus: TransStatus.CIS,
        relationshipStatus: RelationshipStatus.DIVORCED,
        countryCode: "HU",
        region: "Pest",
        city: "Érd",
        appCity: AppCity.CENTRUM,
        lat: 47.391,
        lng: 18.913,
        nickname: "Marco",
        bio: "Autók, főzés és utazás.",
        description: "Életvidám, aktív és társasági.",
        heightCm: 183,
        weightKg: 88,
        avatarId: 8,
    },
    {
        username: "oliver_p",
        email: "oliver.p@example.com",
        birth: new Date("1994-04-13"),
        gender: Gender.MAN,
        sexuality: Sexuality.ASEXUAL,
        transStatus: TransStatus.CIS,
        relationshipStatus: RelationshipStatus.SINGLE,
        countryCode: "HU",
        region: "Budapest",
        city: "Budapest",
        appCity: AppCity.CENTRUM,
        lat: 47.516,
        lng: 19.067,
        nickname: "Oliver",
        bio: "Technológia, könyvek és társasjátékok.",
        description: "Inkább mély beszélgetésekben érzem jól magam.",
        heightCm: 180,
        weightKg: 76,
        avatarId: 9,
    },
    {
        username: "mila_j",
        email: "mila.j@example.com",
        birth: new Date("1998-01-30"),
        gender: Gender.WOMAN,
        sexuality: Sexuality.PANSEXUAL,
        transStatus: TransStatus.CIS,
        relationshipStatus: RelationshipStatus.SINGLE,
        countryCode: "HU",
        region: "Budapest",
        city: "Budapest",
        appCity: AppCity.BISEXUAL,
        lat: 47.492,
        lng: 19.022,
        nickname: "Mila",
        bio: "Festés, koncertek és új helyek.",
        description: "Spontán és kíváncsi.",
        heightCm: 170,
        weightKg: 60,
        avatarId: 10,
    },
    {
        username: "tommy_r",
        email: "tommy.r@example.com",
        birth: new Date("1991-10-05"),
        gender: Gender.MAN,
        sexuality: Sexuality.GAY,
        transStatus: TransStatus.CIS,
        relationshipStatus: RelationshipStatus.OPEN,
        countryCode: "HU",
        region: "Budapest",
        city: "Budapest",
        appCity: AppCity.GAY,
        lat: 47.509,
        lng: 19.089,
        nickname: "Tommy",
        bio: "Éjszakai élet, zene és barátok.",
        description: "Szeretem a jó társaságot és a spontán estéket.",
        heightCm: 187,
        weightKg: 83,
        avatarId: 11,
    },
    {
        username: "anna_m",
        email: "anna.m@example.com",
        birth: new Date("1993-07-19"),
        gender: Gender.WOMAN,
        sexuality: Sexuality.LESBIAN,
        transStatus: TransStatus.CIS,
        relationshipStatus: RelationshipStatus.SINGLE,
        countryCode: "HU",
        region: "Pest",
        city: "Vác",
        appCity: AppCity.LESBIAN,
        lat: 47.775,
        lng: 19.132,
        nickname: "Anna",
        bio: "Yoga, természet és fotózás.",
        description: "Nyugodt, figyelmes és kíváncsi.",
        heightCm: 169,
        weightKg: 59,
        avatarId: 12,
    },
    {
        username: "samuel_x",
        email: "samuel.x@example.com",
        birth: new Date("1988-09-22"),
        gender: Gender.TRANS_WOMAN,
        sexuality: Sexuality.BISEXUAL,
        transStatus: TransStatus.TRANS,
        relationshipStatus: RelationshipStatus.SINGLE,
        countryCode: "HU",
        region: "Budapest",
        city: "Budapest",
        appCity: AppCity.TRANS,
        lat: 47.474,
        lng: 19.082,
        nickname: "Sam",
        bio: "Divat, művészet és városi élet.",
        description: "Kreatív és nagyon társaságkedvelő.",
        heightCm: 174,
        weightKg: 64,
        avatarId: 13,
    },
    {
        username: "peter_h",
        email: "peter.h@example.com",
        birth: new Date("1985-01-15"),
        gender: Gender.MAN,
        sexuality: Sexuality.STRAIGHT,
        transStatus: TransStatus.CIS,
        relationshipStatus: RelationshipStatus.MARRIED,
        countryCode: "HU",
        region: "Budapest",
        city: "Budapest",
        appCity: AppCity.CENTRUM,
        lat: 47.526,
        lng: 19.04,
        nickname: "Peter",
        bio: "Család, sport és üzlet.",
        description: "Barátokat és közösségi kapcsolatokat keresek.",
        heightCm: 182,
        weightKg: 85,
        avatarId: 14,
    },
    {
        username: "zoe_n",
        email: "zoe.n@example.com",
        birth: new Date("1999-05-27"),
        gender: Gender.WOMAN,
        sexuality: Sexuality.OTHER,
        transStatus: TransStatus.CIS,
        relationshipStatus: RelationshipStatus.SINGLE,
        countryCode: "HU",
        region: "Budapest",
        city: "Budapest",
        appCity: AppCity.CENTRUM,
        lat: 47.486,
        lng: 19.055,
        nickname: "Zoe",
        bio: "Kávé, design és hosszú séták.",
        description: "Nyitott és kreatív személyiség.",
        heightCm: 166,
        weightKg: 55,
        avatarId: 15,
    },
];

async function createUsers(passwordHash: string) {
    console.log("👤 Creating users...");

    const users = [];

    for (let i = 0; i < userSeeds.length; i++) {
        const data = userSeeds[i];

        const user = await prisma.users.create({
            data: {
                username: data.username,
                email: data.email,
                passwordHash: passwordHash,
                emailVerified: daysAgo(30 - i),
                role: i === 0 ? UserRole.ADMIN : UserRole.USER,
                status:
                    i === 14
                        ? UserAccountStatus.SUSPENDED
                        : UserAccountStatus.ACTIVE,

                lat: data.lat,
                lng: data.lng,
                locationEnabled: true,
                locationUpdatedAt: hoursAgo(i + 1),
                lastActiveAt: hoursAgo(i % 8),

                relationshipStatus: data.relationshipStatus,

                userData: {
                    create: {
                        avatar: `/assets/images/avatars/avatar-${data.avatarId}.jpg`,
                        avatarUrl: image(data.avatarId),
                        nickname: data.nickname,
                        description: data.description,
                        bio: data.bio,
                        birth: data.birth,
                        heightCm: data.heightCm,
                        weightKg: data.weightKg,
                        gender: data.gender,
                        sexuality: data.sexuality,
                        countryCode: data.countryCode,
                        region: data.region,
                        city: data.city,
                        appCity: data.appCity,
                        transStatus: data.transStatus,
                    },
                },

                userPreference: {
                    create: {
                        minAge: 18,
                        maxAge: 55,
                        minHeightCm: 155,
                        maxHeightCm: 200,
                        maxDistanceKm: 50,
                        verifiedOnly: i % 4 === 0,
                        locationRequired: true,
                    },
                },

                lookingFor: {
                    createMany: {
                        data: [
                            LookingFor.CHAT,
                            LookingFor.FRIENDSHIP,
                            i % 3 === 0
                                ? LookingFor.SERIOUS_RELATIONSHIP
                                : LookingFor.CASUAL_DATING,
                        ].map((value) => ({ value })),
                    },
                },

                genderInterest: {
                    createMany: {
                        data: [GenderInterest.MAN, GenderInterest.WOMAN].map(
                            (value) => ({ value }),
                        ),
                    },
                },

                sexualityInterest: {
                    createMany: {
                        data: [
                            SexualityInterest.BISEXUAL,
                            SexualityInterest.PANSEXUAL,
                        ].map((value) => ({ value })),
                    },
                },
            },
        });

        users.push(user);
    }

    console.log(`✅ Created ${users.length} users.`);

    return users;
}

async function createPartners(users: Awaited<ReturnType<typeof createUsers>>) {
    await prisma.users.update({
        where: { id: users[0].id },
        data: {
            partnerUserId: users[1].id,
            relationshipStatus: RelationshipStatus.IN_RELATION,
        },
    });

    await prisma.users.update({
        where: { id: users[1].id },
        data: {
            relationshipStatus: RelationshipStatus.IN_RELATION,
        },
    });
}

async function createGalleries(users: Awaited<ReturnType<typeof createUsers>>) {
    console.log("🖼️ Creating galleries...");

    const profileGalleries = [];

    for (let i = 0; i < users.length; i++) {
        const user = users[i];

        const gallery = await prisma.gallery.create({
            data: {
                ownerId: user.id,
                name: "Profile Photos",
                type: GalleryType.PROFILE,
                visibility: GalleryVisibility.PUBLIC,

                images: {
                    create: [
                        {
                            url: image(i + 1),
                            storageKey: `seed/profile/${user.id}/1`,
                            mimeType: "image/jpeg",
                            fileSize: 150000,
                            width: 800,
                            height: 800,
                            isAvatar: true,
                            sortOrder: 0,
                        },
                        {
                            url: galleryImage(i * 3 + 1),
                            storageKey: `seed/profile/${user.id}/2`,
                            mimeType: "image/jpeg",
                            fileSize: 210000,
                            width: 1200,
                            height: 1200,
                            isAvatar: false,
                            sortOrder: 1,
                        },
                        {
                            url: galleryImage(i * 3 + 2),
                            storageKey: `seed/profile/${user.id}/3`,
                            mimeType: "image/jpeg",
                            fileSize: 240000,
                            width: 1200,
                            height: 1200,
                            isAvatar: false,
                            sortOrder: 2,
                        },
                    ],
                },
            },
        });

        profileGalleries.push(gallery);
    }

    for (const user of users.slice(0, 8)) {
        await prisma.gallery.create({
            data: {
                ownerId: user.id,
                name: "Private Collection",
                type: GalleryType.USER,
                visibility: GalleryVisibility.PRIVATE,

                images: {
                    create: [
                        {
                            url: galleryImage(Math.floor(Math.random() * 1000)),
                            storageKey: `seed/private/${user.id}/1`,
                            mimeType: "image/jpeg",
                            fileSize: 300000,
                            width: 1200,
                            height: 1200,
                            sortOrder: 0,
                        },
                        {
                            url: galleryImage(Math.floor(Math.random() * 1000)),
                            storageKey: `seed/private/${user.id}/2`,
                            mimeType: "image/jpeg",
                            fileSize: 320000,
                            width: 1200,
                            height: 1200,
                            sortOrder: 1,
                        },
                    ],
                },
            },
        });
    }

    const privateGalleries = await prisma.gallery.findMany({
        where: {
            type: GalleryType.USER,
            visibility: GalleryVisibility.PRIVATE,
        },
        orderBy: {
            createdAt: "asc",
        },
    });

    for (let i = 0; i < privateGalleries.length; i++) {
        const gallery = privateGalleries[i];
        const owner = users.find((user) => user.id === gallery.ownerId);

        if (!owner) continue;

        const recipient = users[(i + 3) % users.length];

        const grantedAt = hoursAgo(i + 1);
        const expiresAt = new Date(grantedAt);
        expiresAt.setHours(expiresAt.getHours() + (i % 3) + 1);

        await prisma.galleryShare.create({
            data: {
                galleryId: gallery.id,
                ownerId: owner.id,
                recipientId: recipient.id,
                grantedAt,
                expiresAt,
                revokedAt: i === 2 ? hoursAgo(1) : null,
                purgeAfter: new Date(
                    expiresAt.getTime() + 3 * 24 * 60 * 60 * 1000,
                ),
            },
        });
    }

    console.log("✅ Galleries created.");
}

async function createVisits(users: Awaited<ReturnType<typeof createUsers>>) {
    console.log("👀 Creating visits...");

    for (let i = 0; i < 35; i++) {
        const visitor = users[i % users.length];
        const visited = users[(i + 2 + (i % 5)) % users.length];

        if (visitor.id === visited.id) continue;

        await prisma.profileVisit.create({
            data: {
                visitorId: visitor.id,
                visitedUserId: visited.id,
                visitedAt: hoursAgo(i + 1),
            },
        });
    }
}

async function createGroups(users: Awaited<ReturnType<typeof createUsers>>) {
    console.log("👥 Creating groups...");

    const groupDefinitions = [
        {
            name: "Budapest Esti Programok",
            description:
                "Közös programok, bárok, koncertek és esti találkozók.",
            visibility: GroupVisibility.PUBLIC,
        },
        {
            name: "Weekend Walkers",
            description: "Hétvégi séták és kirándulások Budapest környékén.",
            visibility: GroupVisibility.PUBLIC,
        },
        {
            name: "LGBTQ+ Budapest",
            description: "Közösségi beszélgetések és budapesti programok.",
            visibility: GroupVisibility.PUBLIC,
        },
        {
            name: "Private Friends",
            description: "Zárt közösség meghívásos alapon.",
            visibility: GroupVisibility.PRIVATE,
        },
        {
            name: "Coffee & Conversations",
            description: "Kávézás, beszélgetés és új emberek megismerése.",
            visibility: GroupVisibility.PUBLIC,
        },
    ];

    const groups = [];

    for (let i = 0; i < groupDefinitions.length; i++) {
        const definition = groupDefinitions[i];
        const creator = users[i];

        const group = await prisma.group.create({
            data: {
                name: definition.name,
                description: definition.description,
                visibility: definition.visibility,
                creatorId: creator.id,
            },
        });

        groups.push(group);

        await prisma.groupMember.create({
            data: {
                groupId: group.id,
                userId: creator.id,
                role: GroupMemberRole.ADMIN,
            },
        });

        const members = users.slice(i + 1, Math.min(i + 6, users.length));

        for (let memberIndex = 0; memberIndex < members.length; memberIndex++) {
            const member = members[memberIndex];

            await prisma.groupMember.create({
                data: {
                    groupId: group.id,
                    userId: member.id,
                    role:
                        memberIndex === 0
                            ? GroupMemberRole.MODERATOR
                            : GroupMemberRole.MEMBER,
                },
            });
        }
    }

    // Join requests
    await prisma.groupJoinRequest.create({
        data: {
            groupId: groups[3].id,
            requesterId: users[10].id,
            status: GroupJoinRequestStatus.PENDING,
        },
    });

    await prisma.groupJoinRequest.create({
        data: {
            groupId: groups[3].id,
            requesterId: users[11].id,
            status: GroupJoinRequestStatus.APPROVED,
            respondedAt: hoursAgo(4),
            respondedById: users[3].id,
        },
    });

    // Invitations
    await prisma.groupInvitation.create({
        data: {
            groupId: groups[3].id,
            senderId: users[3].id,
            receiverId: users[12].id,
            status: GroupInvitationStatus.PENDING,
        },
    });

    await prisma.groupInvitation.create({
        data: {
            groupId: groups[3].id,
            senderId: users[3].id,
            receiverId: users[13].id,
            status: GroupInvitationStatus.ACCEPTED,
            respondedAt: daysAgo(1),
        },
    });

    // Group visits
    for (let i = 0; i < 25; i++) {
        await prisma.groupVisit.create({
            data: {
                groupId: groups[i % groups.length].id,
                visitorId: users[(i + 4) % users.length].id,
                visitedAt: hoursAgo(i + 1),
            },
        });
    }

    return groups;
}

async function createBlogs(users: Awaited<ReturnType<typeof createUsers>>) {
    console.log("📝 Creating blogs...");

    const blogDefinitions = [
        {
            title: "5 hely Budapesten egy első találkozóhoz",
            content:
                "Összegyűjtöttem néhány kellemes helyet, ahol nyugodtan lehet beszélgetni egy első találkozón.",
            visibility: BlogVisibility.PUBLIC,
            tags: ["Budapest", "dating", "places"],
        },
        {
            title: "Miért fontos a jó kommunikáció?",
            content:
                "Egy kapcsolat alapja a nyílt kommunikáció és az, hogy valóban figyeljünk egymásra.",
            visibility: BlogVisibility.PUBLIC,
            tags: ["relationship", "communication"],
        },
        {
            title: "A kedvenc hétvégi programjaim",
            content:
                "Kirándulás, brunch, mozi és esti séta. Ezekből bármikor jöhet egy.",
            visibility: BlogVisibility.PUBLIC,
            tags: ["weekend", "lifestyle"],
        },
        {
            title: "Privát gondolatok",
            content:
                "Ez egy privát blogbejegyzés, amelyet csak a tulajdonos láthat.",
            visibility: BlogVisibility.PRIVATE,
            tags: ["private", "personal"],
        },
        {
            title: "Hogyan ismerjünk meg új embereket?",
            content:
                "Néha egy egyszerű kérdés vagy egy közös program elég ahhoz, hogy új kapcsolat szülessen.",
            visibility: BlogVisibility.PUBLIC,
            tags: ["community", "friends"],
        },
    ];

    const blogs = await Promise.all(
        blogDefinitions.map(async (definition, i) => {
            return prisma.blog.create({
                data: {
                    authorId: users[i].id,
                    title: definition.title,
                    content: definition.content,
                    visibility: definition.visibility,

                    tags: {
                        create: definition.tags.map((name) => ({
                            name,
                        })),
                    },
                },
            });
        }),
    );

    for (let i = 0; i < blogDefinitions.length; i++) {
        const definition = blogDefinitions[i];

        const blog = await prisma.blog.create({
            data: {
                authorId: users[i].id,
                title: definition.title,
                content: definition.content,
                visibility: definition.visibility,

                tags: {
                    create: definition.tags.map((name) => ({
                        name,
                    })),
                },
            },
        });

        blogs.push(blog);
    }

    for (let i = 0; i < blogs.length; i++) {
        const possibleLikers = users.filter(
            (user) => user.id !== blogs[i].authorId,
        );

        for (const liker of possibleLikers.slice(0, 4)) {
            await prisma.blogLike.create({
                data: {
                    blogId: blogs[i].id,
                    userId: liker.id,
                    createdAt: daysAgo(i + 1),
                },
            });
        }
    }

    return blogs;
}

async function createSocialRelations(
    users: Awaited<ReturnType<typeof createUsers>>,
) {
    console.log("❤️ Creating social relations...");

    const favoritePairs = [
        [0, 3],
        [1, 4],
        [2, 5],
        [3, 0],
        [4, 8],
        [5, 10],
        [6, 1],
        [7, 11],
        [8, 4],
        [9, 2],
    ];

    for (const [from, to] of favoritePairs) {
        await prisma.userFavorite.create({
            data: {
                fromUserId: users[from].id,
                toUserId: users[to].id,
            },
        });
    }

    await prisma.userBlock.create({
        data: {
            blockerId: users[9].id,
            blockedId: users[14].id,
        },
    });

    const friendRequests = [
        [0, 2, FriendRequestStatus.ACCEPTED],
        [1, 3, FriendRequestStatus.ACCEPTED],
        [4, 5, FriendRequestStatus.PENDING],
        [6, 8, FriendRequestStatus.REJECTED],
        [9, 11, FriendRequestStatus.PENDING],
    ] as const;

    for (const [sender, receiver, status] of friendRequests) {
        await prisma.friendRequest.create({
            data: {
                senderId: users[sender].id,
                receiverId: users[receiver].id,
                status,
                respondedAt:
                    status === FriendRequestStatus.PENDING ? null : daysAgo(1),
            },
        });
    }

    const friendships = [
        [0, 2],
        [1, 3],
        [4, 7],
    ];

    for (const [a, b] of friendships) {
        const ids = [users[a].id, users[b].id].sort();

        await prisma.friendship.create({
            data: {
                user1Id: ids[0],
                user2Id: ids[1],
                pairKey: `${ids[0]}:${ids[1]}`,
                status: FriendshipStatus.ACTIVE,
                createdAt: daysAgo(10),
            },
        });
    }
}

async function createMatches(users: Awaited<ReturnType<typeof createUsers>>) {
    console.log("💕 Creating matches...");

    const pairs = [
        [0, 1],
        [2, 3],
        [4, 5],
        [8, 9],
    ];

    for (const [a, b] of pairs) {
        await prisma.matchAction.createMany({
            data: [
                {
                    fromUserId: users[a].id,
                    toUserId: users[b].id,
                    type: MatchActionType.LIKE,
                },
                {
                    fromUserId: users[b].id,
                    toUserId: users[a].id,
                    type: MatchActionType.LIKE,
                },
            ],
        });

        const ids = [users[a].id, users[b].id].sort();

        await prisma.match.create({
            data: {
                user1Id: ids[0],
                user2Id: ids[1],
                pairKey: `${ids[0]}:${ids[1]}`,
                status: MatchStatus.ACTIVE,
                matchedAt: daysAgo(2),
            },
        });
    }

    await prisma.matchAction.create({
        data: {
            fromUserId: users[10].id,
            toUserId: users[11].id,
            type: MatchActionType.PASS,
        },
    });
}

async function createEyeCandy(users: Awaited<ReturnType<typeof createUsers>>) {
    console.log("🍭 Creating EyeCandy...");

    const contestStart = daysAgo(3);
    const contestEnd = daysFromNow(4);

    const contest = await prisma.eyeCandyContest.create({
        data: {
            name: "EyeCandy September 2026",
            startAt: contestStart,
            endAt: contestEnd,
        },
    });

    const participants = [];

    for (let i = 0; i < 10; i++) {
        const user = users[i];

        const participant = await prisma.eyeCandyParticipant.create({
            data: {
                contestId: contest.id,
                userId: user.id,
                countryCode: userSeeds[i].countryCode,
                region: userSeeds[i].region,
                city: userSeeds[i].city,
                totalScore: 20 + i * 4,
                voteCount: 5 + i,
                globalRank: i + 1,
                regionalRank: (i % 3) + 1,
                participatedAt: daysAgo(2),
            },
        });

        participants.push(participant);

        await prisma.eyeCandyImage.createMany({
            data: [
                {
                    participantId: participant.id,
                    url: eyeCandyImage(i * 2 + 1),
                    storageKey: `seed/eye-candy/${participant.id}/1`,
                    sortOrder: 0,
                },
                {
                    participantId: participant.id,
                    url: eyeCandyImage(i * 2 + 2),
                    storageKey: `seed/eye-candy/${participant.id}/2`,
                    sortOrder: 1,
                },
            ],
        });
    }

    for (let i = 0; i < 30; i++) {
        const voter = users[i];
        if (!voter) continue;
        const candidate = users[(i + 2) % 10];
        if (!candidate) continue;
        
        const participant = participants.find(
            (item) => item.userId === candidate.id,
        );

        if (!participant) continue;

        await prisma.eyeCandyVote.create({
            data: {
                contestId: contest.id,
                voterId: voter.id,
                candidateId: candidate.id,
                action: i % 5 === 0 ? EyeCandyAction.SKIP : EyeCandyAction.RATE,
                rating: i % 5 === 0 ? null : (i % 5) + 1,
                candidateCountryCode: userSeeds[(i + 2) % 10].countryCode,
                candidateRegion: userSeeds[(i + 2) % 10].region,
                createdAt: hoursAgo(i + 2),
            },
        });
    }
}

async function createQuickDisplays(
    users: Awaited<ReturnType<typeof createUsers>>,
) {
    console.log("⚡ Creating Quick Displays...");

    for (let i = 0; i < 6; i++) {
        const startedAt = hoursAgo(i + 1);
        const expiresAt = new Date(startedAt);
        expiresAt.setHours(expiresAt.getHours() + 1);

        await prisma.quickDisplay.create({
            data: {
                userId: users[i].id,
                type: QuickDisplayType.ONE_HOUR,
                startedAt,
                expiresAt,
            },
        });
    }
}

async function createConversations(
    users: Awaited<ReturnType<typeof createUsers>>,
) {
    console.log("💬 Creating conversations...");

    const pairs = [
        [0, 1],
        [0, 2],
        [1, 3],
        [4, 5],
        [6, 7],
        [8, 9],
    ];

    for (let i = 0; i < pairs.length; i++) {
        const [a, b] = pairs[i];

        const conversation = await prisma.conversation.create({
            data: {
                createdAt: daysAgo(i + 4),
                updatedAt: hoursAgo(i + 1),

                participants: {
                    create: [
                        {
                            userId: users[a].id,
                            joinedAt: daysAgo(i + 4),
                            lastReadAt: hoursAgo(1),
                        },
                        {
                            userId: users[b].id,
                            joinedAt: daysAgo(i + 4),
                            lastReadAt: i % 2 === 0 ? hoursAgo(2) : null,
                        },
                    ],
                },
            },
        });

        const messages = [
            {
                sender: users[a],
                content: "Szia! Hogy telt a napod?",
                type: MessageType.TEXT,
            },
            {
                sender: users[b],
                content: "Szia! Egész jól, köszönöm. Neked?",
                type: MessageType.TEXT,
            },
            {
                sender: users[a],
                content: "Nekem is jól. Van kedved a hétvégén találkozni?",
                type: MessageType.TEXT,
            },
            {
                sender: users[b],
                content: "Persze, szívesen!",
                type: MessageType.TEXT,
            },
        ];

        for (
            let messageIndex = 0;
            messageIndex < messages.length;
            messageIndex++
        ) {
            const item = messages[messageIndex];

            const message = await prisma.message.create({
                data: {
                    conversationId: conversation.id,
                    senderId: item.sender.id,
                    type: item.type,
                    content: item.content,
                    sentAt: hoursAgo(messages.length - messageIndex),
                },
            });

            if (messageIndex < 3) {
                const receiver =
                    item.sender.id === users[a].id ? users[b] : users[a];

                await prisma.messageRead.create({
                    data: {
                        messageId: message.id,
                        userId: receiver.id,
                        readAt: hoursAgo(1),
                    },
                });
            }
        }

        const imageMessage = await prisma.message.create({
            data: {
                conversationId: conversation.id,
                senderId: users[a].id,
                type: MessageType.IMAGE,
                content: null,
                sentAt: hoursAgo(1),
            },
        });

        await prisma.messageAttachment.create({
            data: {
                messageId: imageMessage.id,
                url: galleryImage(500 + i),
                storageKey: `seed/messages/${imageMessage.id}/image-1`,
                mimeType: "image/jpeg",
                fileSize: 350000,
                width: 1200,
                height: 1200,
            },
        });
    }
}

async function createNotifications(
    users: Awaited<ReturnType<typeof createUsers>>,
) {
    console.log("🔔 Creating notifications...");

    const notifications = [
        {
            recipient: 0,
            actor: 1,
            type: NotificationType.PROFILE_VISIT,
            title: "Új profilmegtekintés",
            message: "Martin megnézte a profilodat.",
            entityType: "USER",
        },
        {
            recipient: 0,
            actor: 3,
            type: NotificationType.NEW_FAVORITE,
            title: "Új kedvenc",
            message: "Luca kedvencnek jelölt.",
            entityType: "USER",
        },
        {
            recipient: 1,
            actor: 4,
            type: NotificationType.FRIEND_REQUEST,
            title: "Új barátkérelem",
            message: "Emma barátkérelmet küldött.",
            entityType: "FRIEND_REQUEST",
        },
        {
            recipient: 2,
            actor: 3,
            type: NotificationType.MATCH,
            title: "Új match!",
            message: "Kölcsönös érdeklődés alakult ki.",
            entityType: "MATCH",
        },
        {
            recipient: 3,
            actor: 0,
            type: NotificationType.NEW_MESSAGE,
            title: "Új üzenet",
            message: "Új üzeneted érkezett.",
            entityType: "MESSAGE",
        },
        {
            recipient: 4,
            actor: 3,
            type: NotificationType.BLOG_LIKE,
            title: "Új blog like",
            message: "Valaki kedvelte a bejegyzésedet.",
            entityType: "BLOG",
        },
        {
            recipient: 5,
            actor: 3,
            type: NotificationType.GROUP_INVITATION,
            title: "Csoportmeghívó",
            message: "Meghívást kaptál egy privát csoportba.",
            entityType: "GROUP",
        },
        {
            recipient: 6,
            actor: 2,
            type: NotificationType.GALLERY_SHARED,
            title: "Privát album megosztva",
            message: "Daniel megosztott veled egy privát albumot.",
            entityType: "GALLERY",
        },
        {
            recipient: 7,
            actor: 0,
            type: NotificationType.SYSTEM,
            title: "Üdvözlünk!",
            message: "Köszönjük, hogy csatlakoztál.",
            entityType: "SYSTEM",
        },
    ];

    for (let i = 0; i < notifications.length; i++) {
        const notification = notifications[i];

        await prisma.notification.create({
            data: {
                recipientId: users[notification.recipient].id,
                actorId: users[notification.actor].id,
                type: notification.type,
                title: notification.title,
                message: notification.message,
                entityType: notification.entityType,
                entityId: users[notification.actor].id,
                readAt: i % 3 === 0 ? hoursAgo(2) : null,
                createdAt: hoursAgo(i + 1),
            },
        });
    }
}

async function createModeration(
    users: Awaited<ReturnType<typeof createUsers>>,
) {
    console.log("🛡️ Creating moderation data...");

    await prisma.report.create({
        data: {
            reporterId: users[0].id,
            type: ReportType.USER,
            targetUserId: users[14].id,
            reason: "Inappropriate behavior",
            description: "Seed moderation report.",
            status: ReportStatus.PENDING,
        },
    });

    await prisma.report.create({
        data: {
            reporterId: users[2].id,
            type: ReportType.BLOG,
            targetId: "seed-blog-report",
            reason: "Inappropriate content",
            status: ReportStatus.REVIEWING,
        },
    });

    await prisma.moderationAction.create({
        data: {
            moderatorId: users[0].id,
            targetUserId: users[14].id,
            action: ModerationActionType.WARNING,
            reason: "Seed warning.",
            metadata: {
                source: "seed",
                note: "Example moderation action",
            },
        },
    });

    await prisma.moderationAction.create({
        data: {
            moderatorId: users[0].id,
            targetUserId: users[13].id,
            action: ModerationActionType.CONTENT_REMOVED,
            reason: "Seed example.",
        },
    });
}

async function createVip() {
    console.log("💎 Creating VIP plans...");

    const plans = [
        {
            tier: VipTier.FREE,
            name: "Free",
            price: "0.00",
            durationDays: 0,
            features: {
                maxGalleryShares: 1,
                eyeCandy: false,
                quickDisplay: false,
            },
        },
        {
            tier: VipTier.VIP1,
            name: "VIP 1",
            price: "1990.00",
            durationDays: 30,
            features: {
                maxGalleryShares: 5,
                eyeCandy: true,
                quickDisplay: true,
            },
        },
        {
            tier: VipTier.VIP2,
            name: "VIP 2",
            price: "3990.00",
            durationDays: 30,
            features: {
                maxGalleryShares: 15,
                eyeCandy: true,
                quickDisplay: true,
                advancedSearch: true,
            },
        },
        {
            tier: VipTier.VIP3,
            name: "VIP 3",
            price: "6990.00",
            durationDays: 30,
            features: {
                maxGalleryShares: 50,
                eyeCandy: true,
                quickDisplay: true,
                advancedSearch: true,
                priorityProfile: true,
            },
        },
    ];

    const createdPlans = [];

    for (const plan of plans) {
        const created = await prisma.vipPlan.create({
            data: {
                tier: plan.tier,
                name: plan.name,
                price: plan.price,
                durationDays: plan.durationDays,
                features: plan.features,
                active: true,
            },
        });

        createdPlans.push(created);
    }

    return createdPlans;
}

async function createSubscriptions(
    users: Awaited<ReturnType<typeof createUsers>>,
    plans: Awaited<ReturnType<typeof createVip>>,
) {
    console.log("💳 Creating subscriptions...");

    const vip1 = plans.find((plan) => plan.tier === VipTier.VIP1)!;
    const vip2 = plans.find((plan) => plan.tier === VipTier.VIP2)!;
    const vip3 = plans.find((plan) => plan.tier === VipTier.VIP3)!;

    const subscriptionData = [
        {
            user: users[0],
            plan: vip3,
            amount: "6990.00",
        },
        {
            user: users[1],
            plan: vip2,
            amount: "3990.00",
        },
        {
            user: users[2],
            plan: vip1,
            amount: "1990.00",
        },
        {
            user: users[3],
            plan: vip1,
            amount: "1990.00",
        },
    ];

    for (let i = 0; i < subscriptionData.length; i++) {
        const item = subscriptionData[i];

        const startedAt = daysAgo(5);
        const expiresAt = daysFromNow(25);

        const subscription = await prisma.userSubscription.create({
            data: {
                userId: item.user.id,
                planId: item.plan.id,
                status: SubscriptionStatus.ACTIVE,
                startedAt,
                expiresAt,
            },
        });

        await prisma.subscriptionPayment.create({
            data: {
                userId: item.user.id,
                planId: item.plan.id,
                subscriptionId: subscription.id,
                amount: item.amount,
                currency: "HUF",
                status: PaymentStatus.COMPLETED,
                provider: "seed",
                providerPaymentId: `seed-payment-${i + 1}`,
                createdAt: daysAgo(5),
                completedAt: daysAgo(5),
            },
        });
    }

    // Egy sikertelen payment példa
    await prisma.subscriptionPayment.create({
        data: {
            userId: users[4].id,
            planId: vip2.id,
            amount: "3990.00",
            currency: "HUF",
            status: PaymentStatus.FAILED,
            provider: "seed",
            providerPaymentId: "seed-payment-failed-1",
        },
    });
}

async function main() {
    console.log("🌱 Starting seed...\n");

    await clearDatabase();

    const PASSWORD_HASH = await bcrypt.hash(PASSWORD, 12);

    const users = await createUsers(PASSWORD_HASH);

    await createPartners(users);

    await createGalleries(users);

    await createVisits(users);

    await createGroups(users);

    await createBlogs(users);

    await createSocialRelations(users);

    await createMatches(users);

    await createEyeCandy(users);

    await createQuickDisplays(users);

    await createConversations(users);

    await createNotifications(users);

    await createModeration(users);

    const plans = await createVip();

    await createSubscriptions(users, plans);

    console.log("\n========================================");
    console.log("🌱 SEED COMPLETED");
    console.log("========================================");
    console.log(`Users:           ${users.length}`);
    console.log(`Password:        ${PASSWORD}`);
    console.log("========================================\n");
}

main()
    .catch((error) => {
        console.error("❌ Seed failed:");
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
