import bcrypt from "bcryptjs";
import "dotenv/config";

import { prisma } from "@/lib/prisma";
import {
    Gender,
    GenderInterest,
    LookingFor,
    RelationshipStatus,
    Sexuality,
    UserRole,
} from "./generated/prisma/client";

const users = [
    {
        username: "Anna",
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
    RelationshipStatus.Complicated,
    RelationshipStatus.Open,
];
const lookingForValues = [
    LookingFor.Chat,
    LookingFor.Friendship,
    LookingFor.CasualDating,
    LookingFor.SeriousRelationship,
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
function randomItem<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
}
function randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomBirthDate(minAge: number, maxAge: number): Date {
    const now = new Date();
    const age = randomNumber(minAge, maxAge);
    const year = now.getFullYear() - age;
    const month = randomNumber(0, 11);
    const day = randomNumber(1, 28);
    return new Date(year, month, day);
}
async function main() {
    console.log("🌱 Seeding database...");
    /* * -------------------------------------------------- * Password * -------------------------------------------------- */ const password =
        await bcrypt.hash("password123", 12);
    /* * -------------------------------------------------- * Create users * -------------------------------------------------- */ for (
        let index = 0;
        index < users.length;
        index++
    ) {
        const data = users[index];
        /* * ---------------------------------------------- * User * ---------------------------------------------- */ const user =
            await prisma.user.upsert({
                where: { email: data.email },
                update: {
                    username: data.username,
                    avatarUrl: `/assets/images/avatar-${index + 1}.jpg`,
                },
                create: {
                    username: data.username,
                    email: data.email,
                    password,
                    avatarUrl: `/assets/images/avatar-${index + 1}.jpg`,
                    isVerified: Math.random() > 0.6,
                    isActive: Math.random() > 0.1,
                    lat: 47.4 + Math.random() * 0.15,
                    lng: 18.9 + Math.random() * 0.3,
                    role: UserRole.USER,
                    relationshipStatus: randomItem(relationshipStatuses),
                    lookingFor: randomItem(lookingForValues),
                    interestedIn: randomItem(genderInterests),
                },
            });
        /* * ---------------------------------------------- * UserData * ---------------------------------------------- */ await prisma.userData.upsert(
            {
                where: { userId: user.id },
                update: {
                    nickname: data.username,
                    gender: data.gender,
                    sexuality: data.sexuality,
                    city: data.city,
                    avatarUrl: `/assets/images/avatar-${index + 1}.jpg`,
                },
                create: {
                    userId: user.id,
                    avatar: `/assets/images/avatar-${index + 1}.jpg`,
                    nickname: data.username,
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
                    avatarUrl: `/assets/images/avatar-${index + 1}.jpg`,
                },
            },
        );
        /* * ---------------------------------------------- * UserPreference * ---------------------------------------------- */ await prisma.userPreference.upsert(
            {
                where: { userId: user.id },
                update: {},
                create: {
                    userId: user.id,
                    minAge: randomNumber(18, 25),
                    maxAge: randomNumber(30, 55),
                    minHeightCm: randomNumber(150, 175),
                    maxHeightCm: randomNumber(175, 200),
                    maxDistanceKm: randomNumber(10, 100),
                    preferredGender: randomItem(genderInterests),
                    relationshipGoal: randomItem(lookingForValues),
                    verifiedOnly: Math.random() > 0.8,
                },
            },
        );
    }
    console.log("");
    console.log("🎉 10 users created successfully!");
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
