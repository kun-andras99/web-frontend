import bcrypt from "bcryptjs";
import "dotenv/config";

import { prisma } from "@/lib/prisma";

import {
    FolderVisibility,
    Gender,
    GenderInterest,
    LookingFor,
    RelationshipStatus,
    Sexuality,
    UserRole,
} from "./generated/prisma/client";

// --------------------------------------------------
// Helpers
// --------------------------------------------------

function randomItem<T>(array: readonly T[]): T {
    return array[Math.floor(Math.random() * array.length)];
}

function randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomBoolean(probability = 0.5): boolean {
    return Math.random() < probability;
}

function randomItems<T>(array: readonly T[], min: number, max: number): T[] {
    const shuffled = [...array].sort(() => Math.random() - 0.5);

    const count = randomNumber(min, Math.min(max, shuffled.length));

    return shuffled.slice(0, count);
}

function randomBirthDate(minAge: number, maxAge: number): Date {
    const now = new Date();

    const age = randomNumber(minAge, maxAge);

    const year = now.getFullYear() - age;

    const month = randomNumber(0, 11);

    const day = randomNumber(1, 28);

    return new Date(year, month, day);
}

// --------------------------------------------------
// Data
// --------------------------------------------------

const users = [
    {
        username: "anna_kovacs",
        email: "anna.kovacs@example.com",
        gender: Gender.Female,
        sexuality: Sexuality.Straight,
        city: "Budapest",
    },
    {
        username: "bence_nagy",
        email: "bence.nagy@example.com",
        gender: Gender.Male,
        sexuality: Sexuality.Straight,
        city: "Budapest",
    },
    {
        username: "dora_szabo",
        email: "dora.szabo@example.com",
        gender: Gender.Female,
        sexuality: Sexuality.Bisexual,
        city: "Szeged",
    },
    {
        username: "mark_toth",
        email: "mark.toth@example.com",
        gender: Gender.Male,
        sexuality: Sexuality.Gay,
        city: "Pécs",
    },
    {
        username: "lilla_horvath",
        email: "lilla.horvath@example.com",
        gender: Gender.Female,
        sexuality: Sexuality.Lesbian,
        city: "Győr",
    },
    {
        username: "adam_varga",
        email: "adam.varga@example.com",
        gender: Gender.Male,
        sexuality: Sexuality.Bisexual,
        city: "Debrecen",
    },
    {
        username: "nora_kiss",
        email: "nora.kiss@example.com",
        gender: Gender.Female,
        sexuality: Sexuality.Pansexual,
        city: "Budapest",
    },
    {
        username: "david_molnar",
        email: "david.molnar@example.com",
        gender: Gender.Male,
        sexuality: Sexuality.Straight,
        city: "Miskolc",
    },
    {
        username: "alex_farkas",
        email: "alex.farkas@example.com",
        gender: Gender.NonBinary,
        sexuality: Sexuality.Pansexual,
        city: "Budapest",
    },
    {
        username: "eszter_balogh",
        email: "eszter.balogh@example.com",
        gender: Gender.Female,
        sexuality: Sexuality.Bisexual,
        city: "Kecskemét",
    },
];

const relationshipStatuses = [
    RelationshipStatus.Single,
    RelationshipStatus.Relation,
    RelationshipStatus.Engaged,
    RelationshipStatus.Complicated,
    RelationshipStatus.Open,
];

const lookingForValues = [
    LookingFor.Chat,
    LookingFor.Friendship,
    LookingFor.CasualDating,
    LookingFor.SeriousRelationship,
    LookingFor.Hookup,
    LookingFor.Networking,
    LookingFor.NothingSpecific,
];

const genderInterests = [
    GenderInterest.Men,
    GenderInterest.Women,
    GenderInterest.NonBinary,
    GenderInterest.Everyone,
];

const descriptions = [
    "Szeretek új embereket megismerni és jókat beszélgetni.",
    "Keresem azokat az embereket, akikkel igazán jól érzem magam.",
    "Szeretem a spontán programokat, utazást és a jó társaságot.",
    "Nyitott vagyok új kapcsolatokra és érdekes beszélgetésekre.",
    "Szabadidőmben zenét hallgatok, filmezek és szeretek kirándulni.",
];

const bios = [
    "Kávé, zene, utazás és hosszú beszélgetések.",
    "Mindig keresem a következő jó programot.",
    "Szeretek új helyeket felfedezni.",
    "Nyugodt, kíváncsi és társasági ember vagyok.",
    "Egy jó beszélgetés mindent meg tud változtatni.",
];

const firstNames = [
    "Anna",
    "Bence",
    "Dóra",
    "Márk",
    "Lilla",
    "Ádám",
    "Nóra",
    "Dávid",
    "Alex",
    "Eszter",
];

const imageCaptions = [
    "Egy jó nap emléke.",
    "Kedvenc helyem.",
    "Nyári pillanat.",
    "Egy spontán program.",
    "Csak egy átlagos nap.",
];

// --------------------------------------------------
// Main
// --------------------------------------------------

async function main() {
    console.log("🌱 Seeding database...");

    // --------------------------------------------------
    // Password
    // --------------------------------------------------

    const password = await bcrypt.hash("password123", 12);

    // --------------------------------------------------
    // Clean existing seed data
    // --------------------------------------------------

    console.log("🧹 Cleaning database...");

    await prisma.imageView.deleteMany();
    await prisma.imageLike.deleteMany();

    await prisma.galleryImage.deleteMany();
    await prisma.folderPermission.deleteMany();
    await prisma.galleryFolder.deleteMany();

    await prisma.groupMember.deleteMany();
    await prisma.group.deleteMany();

    await prisma.userLookingFor.deleteMany();
    await prisma.userGenderInterest.deleteMany();

    await prisma.userPreference.deleteMany();
    await prisma.userData.deleteMany();
    await prisma.user.deleteMany();

    // --------------------------------------------------
    // Create users
    // --------------------------------------------------

    const createdUsers = [];

    for (let index = 0; index < users.length; index++) {
        const data = users[index];

        const avatarUrl = `/assets/images/avatar-${index + 1}.jpg`;

        console.log(`👤 Creating ${data.username}...`);

        // --------------------------------------------------
        // User
        // --------------------------------------------------

        const user = await prisma.user.create({
            data: {
                username: data.username,
                email: data.email,
                password,

                avatarUrl,

                isVerified: randomBoolean(0.4),

                isActive: randomBoolean(0.9),

                lat: 47.4 + Math.random() * 0.15,

                lng: 18.9 + Math.random() * 0.3,

                role: UserRole.USER,

                relationshipStatus: randomItem(relationshipStatuses),
            },
        });

        createdUsers.push(user);

        // --------------------------------------------------
        // Looking For
        // --------------------------------------------------

        const lookingFor = randomItems(lookingForValues, 1, 3);

        await prisma.userLookingFor.createMany({
            data: lookingFor.map((value) => ({
                userId: user.id,
                value,
            })),
        });

        // --------------------------------------------------
        // Gender Interest
        // --------------------------------------------------

        const interestedIn = randomItems(genderInterests, 1, 3);

        await prisma.userGenderInterest.createMany({
            data: interestedIn.map((value) => ({
                userId: user.id,
                value,
            })),
        });

        // --------------------------------------------------
        // UserData
        // --------------------------------------------------

        await prisma.userData.create({
            data: {
                userId: user.id,

                avatar: avatarUrl,

                nickname: firstNames[index],

                description: randomItem(descriptions),

                bio: randomItem(bios),

                birth: randomBirthDate(20, 45),

                heightCm: randomNumber(155, 195),

                weightKg: randomNumber(50, 100),

                gender: data.gender,

                sexuality: data.sexuality,

                pronouns:
                    data.gender === Gender.Male
                        ? "he/him"
                        : data.gender === Gender.Female
                          ? "she/her"
                          : "they/them",

                city: data.city,

                country: "Hungary",

                avatarUrl,
            },
        });

        // --------------------------------------------------
        // UserPreference
        // --------------------------------------------------

        await prisma.userPreference.create({
            data: {
                userId: user.id,

                minAge: randomNumber(18, 25),

                maxAge: randomNumber(30, 55),

                minHeightCm: randomNumber(150, 170),

                maxHeightCm: randomNumber(175, 200),

                maxDistanceKm: randomNumber(10, 100),

                verifiedOnly: randomBoolean(0.2),
            },
        });

        // --------------------------------------------------
        // Gallery Folder
        // --------------------------------------------------

        const folder = await prisma.galleryFolder.create({
            data: {
                userId: user.id,

                name: "Profilképek",

                description: "A profilom képei.",

                visibility: FolderVisibility.PUBLIC,

                isLocked: false,
            },
        });

        // --------------------------------------------------
        // Gallery Images
        // --------------------------------------------------

        const imageCount = randomNumber(2, 5);

        const createdImages = [];

        for (let imageIndex = 0; imageIndex < imageCount; imageIndex++) {
            const image = await prisma.galleryImage.create({
                data: {
                    folderId: folder.id,

                    userId: user.id,

                    url: avatarUrl,

                    caption: randomItem(imageCaptions),

                    bio: randomItem(bios),

                    width: 800,

                    height: 800,

                    mimeType: "image/jpeg",

                    size: randomNumber(100000, 5000000),

                    isPrivate: imageIndex > 2 && randomBoolean(0.3),
                },
            });

            createdImages.push(image);
        }

        // --------------------------------------------------
        // Folder Permission
        // --------------------------------------------------

        await prisma.folderPermission.create({
            data: {
                folderId: folder.id,
                userId: user.id,

                canView: true,
                canUpload: false,
            },
        });

        // --------------------------------------------------
        // User-created logs
        // --------------------------------------------------

        console.log(`   ❤️ Looking for: ${lookingFor.join(", ")}`);

        console.log(`   👥 Interested in: ${interestedIn.join(", ")}`);

        console.log(`   📸 Images: ${createdImages.length}`);

        console.log(`   ✅ ${data.username} created`);
    }

    // --------------------------------------------------
    // Groups
    // --------------------------------------------------

    console.log("👥 Creating groups...");

    const groupNames = [
        "Budapesti randizók",
        "Közös érdeklődés",
        "Hétvégi programok",
    ];

    for (let groupIndex = 0; groupIndex < groupNames.length; groupIndex++) {
        const owner = createdUsers[groupIndex];

        const group = await prisma.group.create({
            data: {
                name: groupNames[groupIndex],

                description:
                    "Egy közösségi csoport a hasonló érdeklődésű embereknek.",

                ownerId: owner.id,
            },
        });

        // Owner is member
        await prisma.groupMember.create({
            data: {
                groupId: group.id,
                userId: owner.id,
            },
        });

        // Random members
        const members = randomItems(
            createdUsers.filter((user) => user.id !== owner.id),
            2,
            5,
        );

        for (const member of members) {
            await prisma.groupMember.create({
                data: {
                    groupId: group.id,
                    userId: member.id,
                },
            });
        }
    }

    // --------------------------------------------------
    // Likes
    // --------------------------------------------------

    console.log("❤️ Creating image likes...");

    const allImages = await prisma.galleryImage.findMany();

    for (const image of allImages) {
        const possibleUsers = createdUsers.filter(
            (user) => user.id !== image.userId,
        );

        const usersWhoLike = randomItems(
            possibleUsers,
            0,
            Math.min(4, possibleUsers.length),
        );

        for (const user of usersWhoLike) {
            await prisma.imageLike.create({
                data: {
                    imageId: image.id,
                    userId: user.id,
                },
            });
        }
    }

    // --------------------------------------------------
    // Views
    // --------------------------------------------------

    console.log("👀 Creating image views...");

    for (const image of allImages) {
        const possibleUsers = createdUsers.filter(
            (user) => user.id !== image.userId,
        );

        const usersWhoViewed = randomItems(
            possibleUsers,
            0,
            Math.min(5, possibleUsers.length),
        );

        for (const user of usersWhoViewed) {
            await prisma.imageView.create({
                data: {
                    imageId: image.id,
                    userId: user.id,
                },
            });
        }
    }

    console.log("");
    console.log("🎉 Database seeded successfully!");

    console.log(`👤 Users: ${createdUsers.length}`);

    console.log(`📸 Images: ${allImages.length}`);
}

// --------------------------------------------------
// Execute
// --------------------------------------------------

main()
    .catch((error) => {
        console.error("❌ Seed failed:");

        console.error(error);

        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
