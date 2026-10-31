import "dotenv/config";

import { prisma } from "../lib/prisma";
import {
    AppCity,
    ArtInterest,
    AutomotiveInterest,
    Beard,
    BlogVisibility,
    BodyHair,
    BodyType,
    BooksInterest,
    BraSize,
    BraSizeSystem,
    BreastDevelopment,
    BreastImplant,
    CollectingInterest,
    CultureInterest,
    CupSize,
    DickCircumcision,
    DickSize,
    Ethnicity,
    EventsInterest,
    EyeColor,
    FashionInterest,
    Fetish,
    Fisting,
    FoodInterest,
    FriendRequestStatus,
    FriendshipStatus,
    GalleryType,
    GalleryVisibility,
    GamingInterest,
    Gender,
    GenderCanSee,
    GoingOutInterest,
    GroupJoinRequestStatus,
    GroupMemberRole,
    GroupVisibility,
    HairColor,
    HairLength,
    Languages,
    LearningInterest,
    LifestyleInterest,
    LookingFor,
    Masochism,
    MoviesInterest,
    MusicInterest,
    NatureInterest,
    NotificationType,
    OpenTo,
    OtherInterest,
    OutdoorInterest,
    PersonalInterest,
    Piercings,
    Position,
    Sadism,
    SaferSex,
    Sexuality,
    SexualityCanSee,
    SexualOpenness,
    Smoker,
    SocialInterest,
    SportsInterest,
    Tattoos,
    TechnologyInterest,
    TransStatus,
    TransStatusCanSee,
    TravelInterest,
    UserAccountStatus,
    UserRole,
} from "./generated/prisma/client";

const ADMIN_USERNAME = "adminuser";
const ADMIN_EMAIL = "adminuser@example.com";
const ADMIN_PASSWORD_HASH =
    "$argon2id$v=19$m=19456,p=1,t=2$3aqQSE1QX/6UuXMXYKZOMw$YPA4eA2qYobxUWOb5mG17iYrKWwVPpMTsBd3VEMQVLM";
const USER_PASSWORD_HASH =
    "$argon2id$v=19$m=19456,p=1,t=2$BDxa3WO49FrUHdPDGJXoMg$KVjKFTtJYPMwKkGarUkHqSQ7RKRsYro/r8d/hAq/ir8";

const now = new Date();

function birthDate(age: number) {
    const date = new Date(now);
    date.setFullYear(date.getFullYear() - age);
    return date;
}

async function clearDatabase() {
    console.log("");
    console.log("🧹 Adatbázis ürítése...");
    console.log("");

    try {
        console.log("  → Chat törlése...");
        await prisma.messageRead.deleteMany();
        await prisma.messageAttachment.deleteMany();
        await prisma.message.deleteMany();
        await prisma.conversationParticipant.deleteMany();
        await prisma.conversation.deleteMany();

        console.log("  → Értesítések / moderáció törlése...");
        await prisma.notification.deleteMany();
        await prisma.moderationAction.deleteMany();
        await prisma.report.deleteMany();

        console.log("  → Match / barátság / kapcsolat törlése...");
        await prisma.match.deleteMany();
        await prisma.matchAction.deleteMany();
        await prisma.friendship.deleteMany();
        await prisma.friendRequest.deleteMany();
        await prisma.userFavorite.deleteMany();
        await prisma.userBlock.deleteMany();

        console.log("  → Eye Candy törlése...");
        await prisma.eyeCandyVote.deleteMany();
        await prisma.eyeCandyImage.deleteMany();
        await prisma.eyeCandyParticipant.deleteMany();
        await prisma.eyeCandyContest.deleteMany();

        console.log("  → Right Now törlése...");
        await prisma.rightNowDisplay.deleteMany();

        console.log("  → Profil látogatások törlése...");
        await prisma.profileVisit.deleteMany();
        await prisma.groupVisit.deleteMany();

        console.log("  → Galériák törlése...");
        await prisma.galleryShare.deleteMany();
        await prisma.galleryImage.deleteMany();
        await prisma.gallery.deleteMany();

        console.log("  → Csoportok törlése...");
        await prisma.groupInvitation.deleteMany();
        await prisma.groupJoinRequest.deleteMany();
        await prisma.groupMember.deleteMany();
        await prisma.group.deleteMany();

        console.log("  → Blogok törlése...");
        await prisma.blogLike.deleteMany();
        await prisma.blogTag.deleteMany();
        await prisma.blog.deleteMany();

        console.log("  → VIP / subscription törlése...");
        await prisma.subscriptionPayment.deleteMany();
        await prisma.userSubscription.deleteMany();
        await prisma.vipPlan.deleteMany();

        console.log("  → User kapcsolódó adatok törlése...");
        await prisma.userFilter.deleteMany();
        await prisma.userPreference.deleteMany();
        await prisma.userData.deleteMany();

        console.log("  → Auth tokenek törlése...");
        await prisma.refreshToken.deleteMany();
        await prisma.verificationToken.deleteMany();

        console.log("  → Felhasználók törlése...");
        await prisma.users.deleteMany();

        console.log("");
        console.log("✅ Adatbázis sikeresen kiürítve.");
        console.log("");
    } catch (error) {
        console.error("");
        console.error("❌ Adatbázis ürítése közben hiba történt:");
        console.error(error);
        console.error("");

        throw error;
    }
}

async function main() {
    console.log("");
    console.log("🌱 SEED START");
    console.log("==============================");

    await clearDatabase();
    /*
     * ------------------------------------------------------------
     * 1. USERS
     * ------------------------------------------------------------
     */

    const admin = await prisma.users.upsert({
        where: {
            username: ADMIN_USERNAME,
        },
        update: {
            email: ADMIN_EMAIL,
            passwordHash: ADMIN_PASSWORD_HASH,
            role: UserRole.ADMIN,
            status: UserAccountStatus.ACTIVE,
            emailVerified: now,
        },
        create: {
            username: ADMIN_USERNAME,
            email: ADMIN_EMAIL,
            passwordHash: ADMIN_PASSWORD_HASH,
            role: UserRole.ADMIN,
            status: UserAccountStatus.ACTIVE,
            emailVerified: now,
            lat: 47.4979,
            lng: 19.0402,
            locationEnabled: true,
            locationUpdatedAt: now,
            lastActiveAt: now,
        },
    });

    const user1 = await prisma.users.upsert({
        where: {
            username: "user1",
        },
        update: {
            email: "user1@example.com",
            passwordHash: USER_PASSWORD_HASH,
            role: UserRole.USER,
            status: UserAccountStatus.ACTIVE,
            emailVerified: now,
        },
        create: {
            username: "user1",
            email: "user1@example.com",
            passwordHash: USER_PASSWORD_HASH,
            role: UserRole.USER,
            status: UserAccountStatus.ACTIVE,
            emailVerified: now,
            lat: 47.5105,
            lng: 19.045,
            locationEnabled: true,
            locationUpdatedAt: now,
            lastActiveAt: now,
        },
    });

    const user2 = await prisma.users.upsert({
        where: {
            username: "user2",
        },
        update: {
            email: "user2@example.com",
            passwordHash: USER_PASSWORD_HASH,
            role: UserRole.USER,
            status: UserAccountStatus.ACTIVE,
            emailVerified: now,
        },
        create: {
            username: "user2",
            email: "user2@example.com",
            passwordHash: USER_PASSWORD_HASH,
            role: UserRole.USER,
            status: UserAccountStatus.ACTIVE,
            emailVerified: now,
            lat: 47.489,
            lng: 19.06,
            locationEnabled: true,
            locationUpdatedAt: now,
            lastActiveAt: now,
        },
    });

    const user3 = await prisma.users.upsert({
        where: {
            username: "user3",
        },
        update: {
            email: "user3@example.com",
            passwordHash: USER_PASSWORD_HASH,
            role: UserRole.USER,
            status: UserAccountStatus.ACTIVE,
            emailVerified: now,
        },
        create: {
            username: "user3",
            email: "user3@example.com",
            passwordHash: USER_PASSWORD_HASH,
            role: UserRole.USER,
            status: UserAccountStatus.ACTIVE,
            emailVerified: now,
            lat: 47.505,
            lng: 19.025,
            locationEnabled: true,
            locationUpdatedAt: now,
            lastActiveAt: now,
        },
    });

    const user4 = await prisma.users.upsert({
        where: {
            username: "user4",
        },
        update: {
            email: "user4@example.com",
            passwordHash: USER_PASSWORD_HASH,
            role: UserRole.USER,
            status: UserAccountStatus.ACTIVE,
            emailVerified: now,
        },
        create: {
            username: "user4",
            email: "user4@example.com",
            passwordHash: USER_PASSWORD_HASH,
            role: UserRole.USER,
            status: UserAccountStatus.ACTIVE,
            emailVerified: now,
            lat: 47.485,
            lng: 19.035,
            locationEnabled: true,
            locationUpdatedAt: now,
            lastActiveAt: now,
        },
    });

    const user5 = await prisma.users.upsert({
        where: {
            username: "user5",
        },
        update: {
            email: "user5@example.com",
            passwordHash: USER_PASSWORD_HASH,
            role: UserRole.USER,
            status: UserAccountStatus.BANNED,
            emailVerified: now,
        },
        create: {
            username: "user5",
            email: "user5@example.com",
            passwordHash: USER_PASSWORD_HASH,
            role: UserRole.USER,
            status: UserAccountStatus.BANNED,
            emailVerified: now,
            lat: 47.52,
            lng: 19.03,
            locationEnabled: true,
            locationUpdatedAt: now,
            lastActiveAt: now,
        },
    });

    /*
     * ------------------------------------------------------------
     * 2. USER DATA
     * ------------------------------------------------------------
     */

    await prisma.userData.upsert({
        where: {
            userId: admin.id,
        },
        update: {
            avatarUrl: "https://i.pravatar.cc/300?img=12",
            nickname: "Admin",
            description: "Közösségi adminisztrátor",
            bio: "Az alkalmazás közösségi és moderációs rendszerének kezelője.",
            birth: birthDate(32),

            heightCm: 182,
            weightKg: 82,
            shoulderWidth: 47,
            underbustCircumference: 55,
            waistCircumference: 55,
            hipCircumference: 50,
            upperArmCircumference: 18,
            forearmCircumference: 17,
            wristCircumference: 12,
            armLength: 65,
            upperArmLength: 22,
            forearmLength: 30,
            thighCircumference: 38,
            kneeCircumference: 25,
            calfCircumference: 22,
            ankleCircumference: 16,
            legLength: 25,
            inseamLength: 56,
            outseamLength: 60,
            handLength: 14,
            handWidth: 12,
            fingerLength: 5,
            neckCircumference: 40,
            chestCircumference: 104,

            appCity: AppCity.CENTRUM,
            gender: Gender.MAN,
            genderCanSee: [GenderCanSee.MAN, GenderCanSee.WOMAN],
            sexuality: Sexuality.BISEXUAL,
            transStatus: TransStatus.CIS,
            sexualityCanSee: [
                SexualityCanSee.STRAIGHT,
                SexualityCanSee.BISEXUAL,
                SexualityCanSee.GAY,
                SexualityCanSee.LESBIAN,
            ],
            transStatusCanSee: [TransStatusCanSee.CIS, TransStatusCanSee.TRANS],

            languages: [Languages.ENGLISH, Languages.HUNGARIAN],
            hairLength: HairLength.SHORT,
            hairColor: HairColor.DARK_BROWN,
            eyeColor: EyeColor.BROWN,
            bodyType: BodyType.ATHLETIC,
            beard: Beard.DESIGNER_STUBBLE,
            bodyHair: BodyHair.NOT_VERY_HAIR,
            ethnicity: Ethnicity.EASTERN_EUROPEAN,
            smoker: Smoker.NO,
            tattoos: Tattoos.A_FEW,
            piercings: Piercings.NO_PIERCINGS,
            position: Position.VERSATILE,
            dickSize: DickSize.M,
            dickCircumcision: DickCircumcision.CLEAN_CUT,
            fetish: Fetish.NONE,
            sexualOpenness: SexualOpenness.VERY,
            fisting: Fisting.NOT_INTERESTED,
            sadism: Sadism.NOT_INTERESTED,
            masochism: Masochism.NOT_INTERESTED,
            saferSex: SaferSex.SAFE,
            openTo: OpenTo.FRIENDS,

            countryCode: "HU",
            region: "Budapest",
            city: "Budapest",
        },
        create: {
            userId: admin.id,
            avatarUrl: "https://i.pravatar.cc/300?img=12",
            nickname: "Admin",
            description: "Közösségi adminisztrátor",
            bio: "Az alkalmazás közösségi és moderációs rendszerének kezelője.",
            birth: birthDate(32),

            heightCm: 182,
            weightKg: 82,
            shoulderWidth: 47,
            underbustCircumference: 55,
            waistCircumference: 55,
            hipCircumference: 50,
            upperArmCircumference: 18,
            forearmCircumference: 17,
            wristCircumference: 12,
            armLength: 65,
            upperArmLength: 22,
            forearmLength: 30,
            thighCircumference: 38,
            kneeCircumference: 25,
            calfCircumference: 22,
            ankleCircumference: 16,
            legLength: 25,
            inseamLength: 56,
            outseamLength: 60,
            handLength: 14,
            handWidth: 12,
            fingerLength: 5,
            neckCircumference: 40,
            chestCircumference: 104,

            appCity: AppCity.CENTRUM,
            gender: Gender.MAN,
            genderCanSee: [GenderCanSee.MAN, GenderCanSee.WOMAN],
            sexuality: Sexuality.BISEXUAL,
            sexualityCanSee: [
                SexualityCanSee.STRAIGHT,
                SexualityCanSee.BISEXUAL,
                SexualityCanSee.GAY,
                SexualityCanSee.LESBIAN,
            ],
            transStatusCanSee: [TransStatusCanSee.CIS, TransStatusCanSee.TRANS],

            languages: [Languages.ENGLISH, Languages.HUNGARIAN],
            hairLength: HairLength.SHORT,
            hairColor: HairColor.DARK_BROWN,
            eyeColor: EyeColor.BROWN,
            bodyType: BodyType.ATHLETIC,
            beard: Beard.DESIGNER_STUBBLE,
            bodyHair: BodyHair.NOT_VERY_HAIR,
            ethnicity: Ethnicity.EASTERN_EUROPEAN,
            smoker: Smoker.NO,
            tattoos: Tattoos.A_FEW,
            piercings: Piercings.NO_PIERCINGS,
            position: Position.VERSATILE,
            dickSize: DickSize.M,
            dickCircumcision: DickCircumcision.CLEAN_CUT,
            fetish: Fetish.NONE,
            sexualOpenness: SexualOpenness.VERY,
            fisting: Fisting.NOT_INTERESTED,
            sadism: Sadism.NOT_INTERESTED,
            masochism: Masochism.NOT_INTERESTED,
            saferSex: SaferSex.SAFE,
            openTo: OpenTo.FRIENDS,

            goingOutInterests: [
                GoingOutInterest.BARS,
                GoingOutInterest.CLUBS,
                GoingOutInterest.RESTAURANTS,
                GoingOutInterest.PUBS,
            ],
            lifestyleInterests: [
                LifestyleInterest.SELF_CARE,
                LifestyleInterest.WELLNESS,
                LifestyleInterest.MINIMALISM,
                LifestyleInterest.BEAUTY,
            ],
            musicInterests: [
                MusicInterest.POP,
                MusicInterest.ROCK,
                MusicInterest.ELECTRONIC,
                MusicInterest.HOUSE,
            ],
            movieInterests: [
                MoviesInterest.ACTION,
                MoviesInterest.COMEDY,
                MoviesInterest.THRILLER,
                MoviesInterest.SCI_FI,
            ],
            gamingInterests: [
                GamingInterest.XBOX,
                GamingInterest.NINTENDO,
                GamingInterest.MMORPG,
            ],
            sportsInterests: [
                SportsInterest.GYM,
                SportsInterest.RUNNING,
                SportsInterest.SWIMMING,
                SportsInterest.FOOTBALL,
            ],
            booksInterests: [BooksInterest.FICTION, BooksInterest.READING],
            travelInterests: [
                TravelInterest.CITY_TRIPS,
                TravelInterest.ROAD_TRIPS,
            ],

            foodInterests: [FoodInterest.GRILLING, FoodInterest.STREET_FOOD],
            artInterests: [ArtInterest.PHOTOGRAPHY],
            technologyInterests: [
                TechnologyInterest.COMPUTERS,
                TechnologyInterest.GADGETS,
            ],
            natureInterests: [
                NatureInterest.MOUNTAINS,
                NatureInterest.LAKES,
                NatureInterest.FORESTS,
            ],
            cultureInterests: [CultureInterest.MUSEUMS],
            learningInterests: [
                LearningInterest.LANGUAGES,
                LearningInterest.PSYCHOLOGY,
                LearningInterest.HISTORY,
            ],
            socialInterests: [SocialInterest.FRIENDS, SocialInterest.PARTIES],
            automotiveInterests: [
                AutomotiveInterest.CARS,
                AutomotiveInterest.MOTORCYCLES,
            ],
            outdoorInterests: [
                OutdoorInterest.HIKING,
                OutdoorInterest.CAMPING,
                OutdoorInterest.CYCLING,
            ],
            personalInterests: [
                PersonalInterest.MEDITATION,
                PersonalInterest.ASTROLOGY,
                PersonalInterest.HOROSCOPES,
            ],
            collectingInterests: [
                CollectingInterest.BOOK_COLLECTION,
                CollectingInterest.WATCHES,
            ],
            fashionInterests: [
                FashionInterest.SNEAKERS,
                FashionInterest.JEWELRY,
            ],
            eventsInterests: [
                EventsInterest.CONCERTS,
                EventsInterest.FESTIVALS,
                EventsInterest.SPORTS_EVENTS,
            ],
            otherInterests: [OtherInterest.VOLUNTEERING],

            countryCode: "HU",
            region: "Budapest",
            city: "Budapest",
        },
    });

    await prisma.userData.upsert({
        where: { userId: user1.id },
        update: {
            avatarUrl: "https://i.pravatar.cc/300?img=13",
            nickname: "Alex",
            description: "Nyitott, társaságkedvelő srác.",
            bio: "Szeretem az új embereket és a jó beszélgetéseket.",
            birth: birthDate(29),
            heightCm: 180,
            weightKg: 76,
            appCity: AppCity.GAY,
            gender: Gender.MAN,
            genderCanSee: [GenderCanSee.MAN],
            sexuality: Sexuality.GAY,
            sexualityCanSee: [SexualityCanSee.GAY, SexualityCanSee.BISEXUAL],
            transStatus: TransStatus.CIS,
            transStatusCanSee: [TransStatusCanSee.CIS, TransStatusCanSee.TRANS],
            hairLength: HairLength.SHORT,
            hairColor: HairColor.BLACK,
            eyeColor: EyeColor.GREEN,
            bodyType: BodyType.FIT,
            beard: Beard.SHORT,
            bodyHair: BodyHair.HAIRY,
            ethnicity: Ethnicity.EASTERN_EUROPEAN,
            smoker: Smoker.NO,
            tattoos: Tattoos.A_FEW,
            piercings: Piercings.NO_PIERCINGS,
            position: Position.MORE_TOP,
            dickSize: DickSize.L,
            dickCircumcision: DickCircumcision.UNCUT,
            fetish: Fetish.NONE,
            sexualOpenness: SexualOpenness.VERY,
            fisting: Fisting.CURIOUS,
            sadism: Sadism.NOT_INTERESTED,
            masochism: Masochism.CURIOUS,
            saferSex: SaferSex.SAFE,
            openTo: OpenTo.SEX,
            countryCode: "HU",
            region: "Budapest",
            city: "Budapest",
        },
        create: {
            userId: user1.id,
            avatarUrl: "https://i.pravatar.cc/300?img=13",
            nickname: "Alex",
            description: "Nyitott, társaságkedvelő srác.",
            bio: "Szeretem az új embereket és a jó beszélgetéseket.",
            birth: birthDate(29),
            heightCm: 180,
            weightKg: 76,
            appCity: AppCity.GAY,
            gender: Gender.MAN,
            genderCanSee: [GenderCanSee.MAN],
            sexuality: Sexuality.GAY,
            sexualityCanSee: [SexualityCanSee.GAY, SexualityCanSee.BISEXUAL],
            transStatus: TransStatus.CIS,
            transStatusCanSee: [TransStatusCanSee.CIS, TransStatusCanSee.TRANS],
            hairLength: HairLength.SHORT,
            hairColor: HairColor.BLACK,
            eyeColor: EyeColor.GREEN,
            bodyType: BodyType.FIT,
            beard: Beard.SHORT,
            bodyHair: BodyHair.HAIRY,
            ethnicity: Ethnicity.EASTERN_EUROPEAN,
            smoker: Smoker.NO,
            tattoos: Tattoos.A_FEW,
            piercings: Piercings.NO_PIERCINGS,
            position: Position.MORE_TOP,
            dickSize: DickSize.L,
            dickCircumcision: DickCircumcision.UNCUT,
            fetish: Fetish.NONE,
            sexualOpenness: SexualOpenness.VERY,
            fisting: Fisting.CURIOUS,
            sadism: Sadism.NOT_INTERESTED,
            masochism: Masochism.CURIOUS,
            saferSex: SaferSex.SAFE,
            openTo: OpenTo.SEX,
            countryCode: "HU",
            region: "Budapest",
            city: "Budapest",
        },
    });

    await prisma.userData.upsert({
        where: { userId: user2.id },
        update: {
            avatarUrl: "https://i.pravatar.cc/300?img=14",
            nickname: "Daniel",
            description: "Nyugodt, sportos és közvetlen.",
            bio: "Komolyabb kapcsolatot keresek, de egy jó beszélgetésnek is örülök.",
            birth: birthDate(34),
            heightCm: 185,
            weightKg: 88,
            appCity: AppCity.STRAIGHT,
            gender: Gender.MAN,
            genderCanSee: [GenderCanSee.WOMAN],
            sexuality: Sexuality.STRAIGHT,
            sexualityCanSee: [
                SexualityCanSee.STRAIGHT,
                SexualityCanSee.BISEXUAL,
            ],
            transStatus: TransStatus.CIS,
            transStatusCanSee: [TransStatusCanSee.CIS],
            hairLength: HairLength.VERY_SHORT,
            hairColor: HairColor.BROWN,
            eyeColor: EyeColor.BLUE,
            bodyType: BodyType.ATHLETIC,
            beard: Beard.FULL,
            bodyHair: BodyHair.VERY_HAIRY,
            ethnicity: Ethnicity.EASTERN_EUROPEAN,
            smoker: Smoker.NO,
            tattoos: Tattoos.NO_TATTOOS,
            piercings: Piercings.NO_PIERCINGS,
            position: Position.VERSATILE,
            dickSize: DickSize.L,
            dickCircumcision: DickCircumcision.CLEAN_CUT,
            fetish: Fetish.NONE,
            sexualOpenness: SexualOpenness.MODERATELY,
            fisting: Fisting.NOT_INTERESTED,
            sadism: Sadism.NOT_INTERESTED,
            masochism: Masochism.NOT_INTERESTED,
            saferSex: SaferSex.SAFE,
            openTo: OpenTo.RELATIONSHIP,
            countryCode: "HU",
            region: "Budapest",
            city: "Budapest",
        },
        create: {
            userId: user2.id,
            avatarUrl: "https://i.pravatar.cc/300?img=14",
            nickname: "Daniel",
            description: "Nyugodt, sportos és közvetlen.",
            bio: "Komolyabb kapcsolatot keresek, de egy jó beszélgetésnek is örülök.",
            birth: birthDate(34),
            heightCm: 185,
            weightKg: 88,
            appCity: AppCity.STRAIGHT,
            gender: Gender.MAN,
            genderCanSee: [GenderCanSee.WOMAN],
            sexuality: Sexuality.STRAIGHT,
            sexualityCanSee: [
                SexualityCanSee.STRAIGHT,
                SexualityCanSee.BISEXUAL,
            ],
            transStatus: TransStatus.CIS,
            transStatusCanSee: [TransStatusCanSee.CIS],
            hairLength: HairLength.VERY_SHORT,
            hairColor: HairColor.BROWN,
            eyeColor: EyeColor.BLUE,
            bodyType: BodyType.ATHLETIC,
            beard: Beard.FULL,
            bodyHair: BodyHair.VERY_HAIRY,
            ethnicity: Ethnicity.EASTERN_EUROPEAN,
            smoker: Smoker.NO,
            tattoos: Tattoos.NO_TATTOOS,
            piercings: Piercings.NO_PIERCINGS,
            position: Position.VERSATILE,
            dickSize: DickSize.L,
            dickCircumcision: DickCircumcision.CLEAN_CUT,
            fetish: Fetish.NONE,
            sexualOpenness: SexualOpenness.MODERATELY,
            fisting: Fisting.NOT_INTERESTED,
            sadism: Sadism.NOT_INTERESTED,
            masochism: Masochism.NOT_INTERESTED,
            saferSex: SaferSex.SAFE,
            openTo: OpenTo.RELATIONSHIP,
            countryCode: "HU",
            region: "Budapest",
            city: "Budapest",
        },
    });

    await prisma.userData.upsert({
        where: { userId: user3.id },
        update: {
            avatarUrl: "https://i.pravatar.cc/300?img=47",
            nickname: "Emma",
            description: "Vidám és kíváncsi.",
            bio: "Szeretek utazni, új helyeket felfedezni és sokat nevetni.",
            birth: birthDate(27),
            heightCm: 168,
            weightKg: 61,
            appCity: AppCity.STRAIGHT,
            gender: Gender.WOMAN,
            genderCanSee: [GenderCanSee.MAN],
            sexuality: Sexuality.STRAIGHT,
            sexualityCanSee: [
                SexualityCanSee.STRAIGHT,
                SexualityCanSee.BISEXUAL,
            ],
            transStatus: TransStatus.CIS,
            transStatusCanSee: [TransStatusCanSee.CIS, TransStatusCanSee.TRANS],
            hairLength: HairLength.LONG,
            hairColor: HairColor.BLONDE,
            eyeColor: EyeColor.BLUE,
            bodyType: BodyType.SLIM,
            bodyHair: BodyHair.SMOOTH,
            ethnicity: Ethnicity.EASTERN_EUROPEAN,
            smoker: Smoker.NO,
            tattoos: Tattoos.NO_TATTOOS,
            piercings: Piercings.A_FEW,
            breastDevelopment: BreastDevelopment.AVERAGE,
            breastImplant: BreastImplant.NONE,
            braSize: BraSize.C,
            braSizeSystem: BraSizeSystem.EU,
            cupSize: CupSize.C,
            openTo: OpenTo.RELATIONSHIP,
            saferSex: SaferSex.SAFE,
            sexualOpenness: SexualOpenness.MODERATELY,
            fetish: Fetish.NONE,
            fisting: Fisting.NOT_INTERESTED,
            sadism: Sadism.NOT_INTERESTED,
            masochism: Masochism.NOT_INTERESTED,
            countryCode: "HU",
            region: "Budapest",
            city: "Budapest",
        },
        create: {
            userId: user3.id,
            avatarUrl: "https://i.pravatar.cc/300?img=47",
            nickname: "Emma",
            description: "Vidám és kíváncsi.",
            bio: "Szeretek utazni, új helyeket felfedezni és sokat nevetni.",
            birth: birthDate(27),
            heightCm: 168,
            weightKg: 61,
            appCity: AppCity.STRAIGHT,
            gender: Gender.WOMAN,
            genderCanSee: [GenderCanSee.MAN],
            sexuality: Sexuality.STRAIGHT,
            sexualityCanSee: [
                SexualityCanSee.STRAIGHT,
                SexualityCanSee.BISEXUAL,
            ],
            transStatus: TransStatus.CIS,
            transStatusCanSee: [TransStatusCanSee.CIS, TransStatusCanSee.TRANS],
            hairLength: HairLength.LONG,
            hairColor: HairColor.BLONDE,
            eyeColor: EyeColor.BLUE,
            bodyType: BodyType.SLIM,
            bodyHair: BodyHair.SMOOTH,
            ethnicity: Ethnicity.EASTERN_EUROPEAN,
            smoker: Smoker.NO,
            tattoos: Tattoos.NO_TATTOOS,
            piercings: Piercings.A_FEW,
            breastDevelopment: BreastDevelopment.AVERAGE,
            breastImplant: BreastImplant.NONE,
            braSize: BraSize.C,
            braSizeSystem: BraSizeSystem.EU,
            cupSize: CupSize.C,
            openTo: OpenTo.RELATIONSHIP,
            saferSex: SaferSex.SAFE,
            sexualOpenness: SexualOpenness.MODERATELY,
            fetish: Fetish.NONE,
            fisting: Fisting.NOT_INTERESTED,
            sadism: Sadism.NOT_INTERESTED,
            masochism: Masochism.NOT_INTERESTED,
            countryCode: "HU",
            region: "Budapest",
            city: "Budapest",
        },
    });

    await prisma.userData.upsert({
        where: { userId: user4.id },
        update: {
            avatarUrl: "https://i.pravatar.cc/300?img=44",
            nickname: "Sophie",
            description: "Kreatív, társaságkedvelő nő.",
            bio: "A művészet, az utazás és az érdekes emberek inspirálnak.",
            birth: birthDate(31),
            heightCm: 171,
            weightKg: 65,
            appCity: AppCity.BISEXUAL,
            gender: Gender.WOMAN,
            genderCanSee: [GenderCanSee.MAN, GenderCanSee.WOMAN],
            sexuality: Sexuality.BISEXUAL,
            sexualityCanSee: [
                SexualityCanSee.STRAIGHT,
                SexualityCanSee.BISEXUAL,
                SexualityCanSee.GAY,
                SexualityCanSee.LESBIAN,
            ],
            transStatus: TransStatus.CIS,
            transStatusCanSee: [TransStatusCanSee.CIS, TransStatusCanSee.TRANS],
            hairLength: HairLength.AVERAGE,
            hairColor: HairColor.DARK_BROWN,
            eyeColor: EyeColor.HAZEL,
            bodyType: BodyType.CURVY,
            bodyHair: BodyHair.SMOOTH,
            ethnicity: Ethnicity.EASTERN_EUROPEAN,
            smoker: Smoker.SOCIALLY,
            tattoos: Tattoos.A_FEW,
            piercings: Piercings.A_FEW,
            breastDevelopment: BreastDevelopment.LARGE,
            breastImplant: BreastImplant.NONE,
            braSize: BraSize.D,
            braSizeSystem: BraSizeSystem.EU,
            cupSize: CupSize.D,
            openTo: OpenTo.FRIENDS,
            saferSex: SaferSex.SAFE,
            sexualOpenness: SexualOpenness.VERY,
            fetish: Fetish.NONE,
            fisting: Fisting.CURIOUS,
            sadism: Sadism.NOT_INTERESTED,
            masochism: Masochism.NOT_INTERESTED,
            countryCode: "HU",
            region: "Budapest",
            city: "Budapest",
        },
        create: {
            userId: user4.id,
            avatarUrl: "https://i.pravatar.cc/300?img=44",
            nickname: "Sophie",
            description: "Kreatív, társaságkedvelő nő.",
            bio: "A művészet, az utazás és az érdekes emberek inspirálnak.",
            birth: birthDate(31),
            heightCm: 171,
            weightKg: 65,
            appCity: AppCity.BISEXUAL,
            gender: Gender.WOMAN,
            genderCanSee: [GenderCanSee.MAN, GenderCanSee.WOMAN],
            sexuality: Sexuality.BISEXUAL,
            sexualityCanSee: [
                SexualityCanSee.STRAIGHT,
                SexualityCanSee.BISEXUAL,
                SexualityCanSee.GAY,
                SexualityCanSee.LESBIAN,
            ],
            transStatus: TransStatus.CIS,
            transStatusCanSee: [TransStatusCanSee.CIS, TransStatusCanSee.TRANS],
            hairLength: HairLength.AVERAGE,
            hairColor: HairColor.DARK_BROWN,
            eyeColor: EyeColor.HAZEL,
            bodyType: BodyType.CURVY,
            bodyHair: BodyHair.SMOOTH,
            ethnicity: Ethnicity.EASTERN_EUROPEAN,
            smoker: Smoker.SOCIALLY,
            tattoos: Tattoos.A_FEW,
            piercings: Piercings.A_FEW,
            breastDevelopment: BreastDevelopment.LARGE,
            breastImplant: BreastImplant.NONE,
            braSize: BraSize.D,
            braSizeSystem: BraSizeSystem.EU,
            cupSize: CupSize.D,
            openTo: OpenTo.FRIENDS,
            saferSex: SaferSex.SAFE,
            sexualOpenness: SexualOpenness.VERY,
            fetish: Fetish.NONE,
            fisting: Fisting.CURIOUS,
            sadism: Sadism.NOT_INTERESTED,
            masochism: Masochism.NOT_INTERESTED,
            countryCode: "HU",
            region: "Budapest",
            city: "Budapest",
        },
    });

    await prisma.userData.upsert({
        where: { userId: user5.id },
        update: {
            avatarUrl: "https://i.pravatar.cc/300?img=11",
            nickname: "Mark",
            description: "Tesztelt, tiltott felhasználó.",
            bio: "Ez a profil a moderációs folyamat tesztelésére szolgál.",
            birth: birthDate(36),
            heightCm: 178,
            weightKg: 84,
            appCity: AppCity.STRAIGHT,
            gender: Gender.MAN,
            genderCanSee: [GenderCanSee.WOMAN],
            sexuality: Sexuality.STRAIGHT,
            sexualityCanSee: [SexualityCanSee.STRAIGHT],
            transStatus: TransStatus.CIS,
            transStatusCanSee: [TransStatusCanSee.CIS],
            hairLength: HairLength.SHORT,
            hairColor: HairColor.BROWN,
            eyeColor: EyeColor.GREY,
            bodyType: BodyType.AVERAGE,
            beard: Beard.MUSTACHE_AND_BEARD,
            bodyHair: BodyHair.HAIRY,
            ethnicity: Ethnicity.EASTERN_EUROPEAN,
            smoker: Smoker.NO,
            tattoos: Tattoos.NO_TATTOOS,
            piercings: Piercings.NO_PIERCINGS,
            position: Position.VERSATILE,
            dickSize: DickSize.M,
            dickCircumcision: DickCircumcision.CLEAN_CUT,
            fetish: Fetish.NONE,
            sexualOpenness: SexualOpenness.SLIGHTLY,
            fisting: Fisting.NOT_INTERESTED,
            sadism: Sadism.NOT_INTERESTED,
            masochism: Masochism.NOT_INTERESTED,
            saferSex: SaferSex.SAFE,
            openTo: OpenTo.RELATIONSHIP,
            countryCode: "HU",
            region: "Budapest",
            city: "Budapest",
        },
        create: {
            userId: user5.id,
            avatarUrl: "https://i.pravatar.cc/300?img=11",
            nickname: "Mark",
            description: "Tesztelt, tiltott felhasználó.",
            bio: "Ez a profil a moderációs folyamat tesztelésére szolgál.",
            birth: birthDate(36),
            heightCm: 178,
            weightKg: 84,
            appCity: AppCity.STRAIGHT,
            gender: Gender.MAN,
            genderCanSee: [GenderCanSee.WOMAN],
            sexuality: Sexuality.STRAIGHT,
            sexualityCanSee: [SexualityCanSee.STRAIGHT],
            transStatus: TransStatus.CIS,
            transStatusCanSee: [TransStatusCanSee.CIS],
            hairLength: HairLength.SHORT,
            hairColor: HairColor.BROWN,
            eyeColor: EyeColor.GREY,
            bodyType: BodyType.AVERAGE,
            beard: Beard.MUSTACHE_AND_BEARD,
            bodyHair: BodyHair.HAIRY,
            ethnicity: Ethnicity.EASTERN_EUROPEAN,
            smoker: Smoker.NO,
            tattoos: Tattoos.NO_TATTOOS,
            piercings: Piercings.NO_PIERCINGS,
            position: Position.VERSATILE,
            dickSize: DickSize.M,
            dickCircumcision: DickCircumcision.CLEAN_CUT,
            fetish: Fetish.NONE,
            sexualOpenness: SexualOpenness.SLIGHTLY,
            fisting: Fisting.NOT_INTERESTED,
            sadism: Sadism.NOT_INTERESTED,
            masochism: Masochism.NOT_INTERESTED,
            saferSex: SaferSex.SAFE,
            openTo: OpenTo.RELATIONSHIP,
            countryCode: "HU",
            region: "Budapest",
            city: "Budapest",
        },
    });

    /*
     * ------------------------------------------------------------
     * 3. ADMIN USER PREFERENCE
     * ------------------------------------------------------------
     */

    /*
     * A UserPreference-ben lévő enum filterek közül a fontosabbakat
     * explicit feltöltjük.
     *
     * Ha nálad a végleges schema már külön UserGenderInterest /
     * UserSexualityInterest / UserLookingFor táblákat használ,
     * ezeket az alábbi résznél hozzuk létre.
     */

    /*
     * ------------------------------------------------------------
     * 4. ADMIN GALLERIES
     * ------------------------------------------------------------
     */

    const avatarGallery = await prisma.gallery.upsert({
        where: {
            ownerId_name: {
                ownerId: admin.id,
                name: "Avatars",
            },
        },
        update: {
            type: GalleryType.PROFILE,
            visibility: GalleryVisibility.PUBLIC,
        },
        create: {
            ownerId: admin.id,
            name: "Avatars",
            type: GalleryType.PROFILE,
            visibility: GalleryVisibility.PUBLIC,
        },
    });

    const publicGallery = await prisma.gallery.upsert({
        where: {
            ownerId_name: {
                ownerId: admin.id,
                name: "My album",
            },
        },
        update: {
            type: GalleryType.USER,
            visibility: GalleryVisibility.PUBLIC,
        },
        create: {
            ownerId: admin.id,
            name: "My album",
            type: GalleryType.USER,
            visibility: GalleryVisibility.PUBLIC,
        },
    });

    const adminPrivateGallery = await prisma.gallery.upsert({
        where: {
            ownerId_name: {
                ownerId: admin.id,
                name: "private admin album",
            },
        },
        update: {
            type: GalleryType.USER,
            visibility: GalleryVisibility.PRIVATE,
        },
        create: {
            ownerId: admin.id,
            name: "private admin album",
            type: GalleryType.USER,
            visibility: GalleryVisibility.PRIVATE,
        },
    });

    /*
     * Profilkép az Avatars galériában.
     */

    await prisma.galleryImage.createMany({
        data: [
            {
                galleryId: avatarGallery.id,
                url: "https://i.pravatar.cc/600?img=12",
                mimeType: "image/jpeg",
                isAvatar: true,
                sortOrder: 0,
            },
        ],
        skipDuplicates: true,
    });

    await prisma.galleryImage.createMany({
        data: [
            {
                galleryId: publicGallery.id,
                url: "https://i.pravatar.cc/600?img=12",
                mimeType: "image/jpeg",
                sortOrder: 0,
            },
            {
                galleryId: publicGallery.id,
                url: "https://i.pravatar.cc/600?img=13",
                mimeType: "image/jpeg",
                sortOrder: 1,
            },
        ],
        skipDuplicates: true,
    });

    await prisma.galleryImage.createMany({
        data: [
            {
                galleryId: adminPrivateGallery.id,
                url: "https://i.pravatar.cc/600?img=15",
                mimeType: "image/jpeg",
                sortOrder: 0,
            },
            {
                galleryId: adminPrivateGallery.id,
                url: "https://i.pravatar.cc/600?img=16",
                mimeType: "image/jpeg",
                sortOrder: 1,
            },
            {
                galleryId: adminPrivateGallery.id,
                url: "https://i.pravatar.cc/600?img=17",
                mimeType: "image/jpeg",
                sortOrder: 2,
            },
        ],
        skipDuplicates: true,
    });

    /*
     * ------------------------------------------------------------
     * 5. ADMIN GROUPS
     * ------------------------------------------------------------
     */

    const publicGroup = await prisma.group.create({
        data: {
            name: "Budapest Community",
            description:
                "Nyilvános közösségi csoport Budapest környékén élőknek.",
            creatorId: admin.id,
            visibility: GroupVisibility.PUBLIC,
        },
    });
    const publicGroup2 = await prisma.group.create({
        data: {
            name: "Admini csoport",
            description: "Megintcsak nyilvános.",
            creatorId: admin.id,
            visibility: GroupVisibility.PUBLIC,
        },
    });

    await prisma.groupMember.createMany({
        data: [
            {
                groupId: publicGroup.id,
                userId: user1.id,
                role: GroupMemberRole.MEMBER,
            },
            {
                groupId: publicGroup.id,
                userId: user2.id,
                role: GroupMemberRole.MEMBER,
            },
            {
                groupId: publicGroup.id,
                userId: user3.id,
                role: GroupMemberRole.MEMBER,
            },
            {
                groupId: publicGroup2.id,
                userId: user3.id,
                role: GroupMemberRole.MEMBER,
            },
            {
                groupId: publicGroup2.id,
                userId: user4.id,
                role: GroupMemberRole.MEMBER,
            },
        ],
        skipDuplicates: true,
    });

    /*
     * Private group
     */

    const privateGroup = await prisma.group.create({
        data: {
            name: "Private Circle",
            description:
                "Privát közösség meghívással és csatlakozási kérelemmel.",
            creatorId: admin.id,
            visibility: GroupVisibility.PRIVATE,
        },
    });

    /*
     * Két pending csatlakozási kérelem.
     */

    await prisma.groupJoinRequest.createMany({
        data: [
            {
                groupId: privateGroup.id,
                requesterId: user4.id,
                status: GroupJoinRequestStatus.PENDING,
            },
            {
                groupId: privateGroup.id,
                requesterId: user1.id,
                status: GroupJoinRequestStatus.PENDING,
            },
        ],
        skipDuplicates: true,
    });

    /*
     * ------------------------------------------------------------
     * 6. ADMIN BLOGS
     * ------------------------------------------------------------
     */

    await prisma.blog.create({
        data: {
            authorId: admin.id,
            title: "Welcome to the community",
            content:
                "Üdvözlünk a közösségben! Ez a publikus tesztblog az alkalmazás blogrendszerének bemutatására szolgál.",
            visibility: BlogVisibility.PUBLIC,
            tags: {
                create: [
                    { name: "community" },
                    { name: "welcome" },
                    { name: "dating" },
                ],
            },
        },
    });

    await prisma.blog.create({
        data: {
            authorId: admin.id,
            title: "Private admin notes",
            content:
                "Ez egy privát tesztblog, amely csak az admin saját profilján jelenhet meg.",
            visibility: BlogVisibility.PRIVATE,
            tags: {
                create: [
                    { name: "private" },
                    { name: "admin" },
                    { name: "notes" },
                ],
            },
        },
    });

    /*
     * ------------------------------------------------------------
     * 7. FRIENDSHIPS
     * ------------------------------------------------------------
     */

    await prisma.friendship.upsert({
        where: {
            pairKey: `${admin.id}_${user3.id}`,
        },
        update: {
            status: FriendshipStatus.ACTIVE,
            endedAt: null,
        },
        create: {
            user1Id: admin.id,
            user2Id: user3.id,
            status: FriendshipStatus.ACTIVE,
            pairKey: `${admin.id}_${user3.id}`,
        },
    });

    await prisma.friendship.upsert({
        where: {
            pairKey: `${admin.id}_${user4.id}`,
        },
        update: {
            status: FriendshipStatus.ACTIVE,
            endedAt: null,
        },
        create: {
            user1Id: admin.id,
            user2Id: user4.id,
            status: FriendshipStatus.ACTIVE,
            pairKey: `${admin.id}_${user4.id}`,
        },
    });

    /*
     * ------------------------------------------------------------
     * 8. INCOMING FRIEND REQUESTS
     * ------------------------------------------------------------
     */

    await prisma.friendRequest.upsert({
        where: {
            senderId_receiverId: {
                senderId: user1.id,
                receiverId: admin.id,
            },
        },
        update: {
            status: FriendRequestStatus.PENDING,
            respondedAt: null,
        },
        create: {
            senderId: user1.id,
            receiverId: admin.id,
            status: FriendRequestStatus.PENDING,
        },
    });

    await prisma.friendRequest.upsert({
        where: {
            senderId_receiverId: {
                senderId: user2.id,
                receiverId: admin.id,
            },
        },
        update: {
            status: FriendRequestStatus.PENDING,
            respondedAt: null,
        },
        create: {
            senderId: user2.id,
            receiverId: admin.id,
            status: FriendRequestStatus.PENDING,
        },
    });

    /*
     * ------------------------------------------------------------
     * 9. EXACTLY 10 NOTIFICATIONS
     * ------------------------------------------------------------
     */

    await prisma.notification.deleteMany({
        where: {
            recipientId: admin.id,
        },
    });

    const notifications = [
        {
            type: NotificationType.PROFILE_VISIT,
            title: "Új profilmegtekintés",
            message: "Alex megtekintette a profilodat.",
            actorId: user1.id,
        },
        {
            type: NotificationType.PROFILE_VIEW,
            title: "Új látogató",
            message: "Daniel meglátogatta a profilodat.",
            actorId: user2.id,
        },
        {
            type: NotificationType.NEW_FAVORITE,
            title: "Új kedvenc",
            message: "Emma hozzáadott a kedvenceihez.",
            actorId: user3.id,
        },
        {
            type: NotificationType.FRIEND_REQUEST,
            title: "Új barátkérés",
            message: "Alex barátnak jelölt.",
            actorId: user1.id,
        },
        {
            type: NotificationType.FRIEND_REQUEST,
            title: "Új barátkérés",
            message: "Daniel barátnak jelölt.",
            actorId: user2.id,
        },
        {
            type: NotificationType.FRIEND_ACCEPTED,
            title: "Barátság létrejött",
            message: "Emma elfogadta a barátkérésedet.",
            actorId: user3.id,
        },
        {
            type: NotificationType.GROUP_JOIN_REQUEST,
            title: "Új csatlakozási kérelem",
            message: "Emma csatlakozni szeretne a privát csoportodhoz.",
            actorId: user3.id,
            entityId: privateGroup.id,
            entityType: "Group",
        },
        {
            type: NotificationType.GROUP_JOIN_REQUEST,
            title: "Új csatlakozási kérelem",
            message: "Sophie csatlakozni szeretne a privát csoportodhoz.",
            actorId: user4.id,
            entityId: privateGroup.id,
            entityType: "Group",
        },
        {
            type: NotificationType.GALLERY_SHARED,
            title: "Galéria",
            message: "Teszt galéria esemény értesítés.",
            actorId: user4.id,
            entityId: adminPrivateGallery.id,
            entityType: "Gallery",
        },
        {
            type: NotificationType.SYSTEM_MESSAGE,
            title: "Üdvözlünk",
            message: "A seed adatbázis sikeresen létrejött.",
            actorId: null,
        },
    ];

    for (const notification of notifications) {
        await prisma.notification.create({
            data: {
                recipientId: admin.id,
                actorId: notification.actorId,
                type: notification.type,
                title: notification.title,
                message: notification.message,
                entityId: notification.entityId,
                entityType: notification.entityType,
            },
        });
    }

    await prisma.userPreference.upsert({
        where: {
            userId: admin.id,
        },

        update: {
            minAge: 18,
            maxAge: 50,

            minHeightCm: 160,
            maxHeightCm: 200,

            minShoulderWidthCm: 35,
            maxShoulderWidthCm: 55,

            minNeckCircumferenceCm: 30,
            maxNeckCircumferenceCm: 45,

            minChestCircumferenceCm: 80,
            maxChestCircumferenceCm: 130,

            minBustCircumferenceCm: null,
            maxBustCircumferenceCm: null,

            minUnderbustCircumferenceCm: null,
            maxUnderbustCircumferenceCm: null,

            minWaistCircumferenceCm: 60,
            maxWaistCircumferenceCm: 120,

            minHipCircumferenceCm: 80,
            maxHipCircumferenceCm: 130,

            minUpperArmCircumferenceCm: 20,
            maxUpperArmCircumferenceCm: 45,

            minForearmCircumferenceCm: 20,
            maxForearmCircumferenceCm: 40,

            minWristCircumferenceCm: 14,
            maxWristCircumferenceCm: 25,

            minArmLengthCm: 50,
            maxArmLengthCm: 80,

            minUpperArmLengthCm: 20,
            maxUpperArmLengthCm: 40,

            minForearmLengthCm: 20,
            maxForearmLengthCm: 35,

            minThighCircumferenceCm: 40,
            maxThighCircumferenceCm: 80,

            minKneeCircumferenceCm: 30,
            maxKneeCircumferenceCm: 50,

            minCalfCircumferenceCm: 25,
            maxCalfCircumferenceCm: 50,

            minAnkleCircumferenceCm: 18,
            maxAnkleCircumferenceCm: 30,

            minLegLengthCm: 70,
            maxLegLengthCm: 110,

            minInseamLengthCm: 65,
            maxInseamLengthCm: 95,

            minOutseamLengthCm: 80,
            maxOutseamLengthCm: 120,

            minHandLengthCm: 15,
            maxHandLengthCm: 23,

            minHandWidthCm: 7,
            maxHandWidthCm: 12,

            minFingerLengthCm: 6,
            maxFingerLengthCm: 11,

            lookingFor: [LookingFor.CHAT, LookingFor.FRIENDSHIP],

            gender: [Gender.MAN],

            sexuality: [
                Sexuality.STRAIGHT,
                Sexuality.GAY,
                Sexuality.LESBIAN,
                Sexuality.BISEXUAL,
            ],

            transStatus: [TransStatus.CIS, TransStatus.TRANS],

            hairLength: [],
            hairColor: [],
            eyeColor: [],
            bodyType: [],
            beard: [],
            bodyHair: [],
            ethnicity: [],
            smoker: [],
            tattoos: [],
            piercings: [],
            position: [],
            dickSize: [],
            dickCircumcision: [],
            fetish: [],
            sexualOpenness: [],
            fisting: [],
            sadism: [],
            masochism: [],
            saferSex: [],
            openTo: [],
            cupSizes: [],
            braSizes: [],
            binderSizes: [],

            goingOutInterests: [],
            lifestyleInterests: [],
            musicInterests: [],
            movieInterests: [],
            gamingInterests: [],
            sportsInterests: [],
            booksInterests: [],
            travelInterests: [],
            foodInterests: [],
            artInterests: [],
            technologyInterests: [],
            natureInterests: [],
            cultureInterests: [],
            learningInterests: [],
            socialInterests: [],
            automotiveInterests: [],
            outdoorInterests: [],
            personalInterests: [],
            collectingInterests: [],
            fashionInterests: [],
            eventsInterests: [],
            otherInterests: [],
        },

        create: {
            userId: admin.id,

            minAge: 18,
            maxAge: 50,

            minHeightCm: 160,
            maxHeightCm: 200,

            minShoulderWidthCm: 35,
            maxShoulderWidthCm: 55,

            minNeckCircumferenceCm: 30,
            maxNeckCircumferenceCm: 45,

            minChestCircumferenceCm: 80,
            maxChestCircumferenceCm: 130,

            minBustCircumferenceCm: null,
            maxBustCircumferenceCm: null,

            minUnderbustCircumferenceCm: null,
            maxUnderbustCircumferenceCm: null,

            minWaistCircumferenceCm: 60,
            maxWaistCircumferenceCm: 120,

            minHipCircumferenceCm: 80,
            maxHipCircumferenceCm: 130,

            minUpperArmCircumferenceCm: 20,
            maxUpperArmCircumferenceCm: 45,

            minForearmCircumferenceCm: 20,
            maxForearmCircumferenceCm: 40,

            minWristCircumferenceCm: 14,
            maxWristCircumferenceCm: 25,

            minArmLengthCm: 50,
            maxArmLengthCm: 80,

            minUpperArmLengthCm: 20,
            maxUpperArmLengthCm: 40,

            minForearmLengthCm: 20,
            maxForearmLengthCm: 35,

            minThighCircumferenceCm: 40,
            maxThighCircumferenceCm: 80,

            minKneeCircumferenceCm: 30,
            maxKneeCircumferenceCm: 50,

            minCalfCircumferenceCm: 25,
            maxCalfCircumferenceCm: 50,

            minAnkleCircumferenceCm: 18,
            maxAnkleCircumferenceCm: 30,

            minLegLengthCm: 70,
            maxLegLengthCm: 110,

            minInseamLengthCm: 65,
            maxInseamLengthCm: 95,

            minOutseamLengthCm: 80,
            maxOutseamLengthCm: 120,

            minHandLengthCm: 15,
            maxHandLengthCm: 23,

            minHandWidthCm: 7,
            maxHandWidthCm: 12,

            minFingerLengthCm: 6,
            maxFingerLengthCm: 11,

            lookingFor: [LookingFor.CHAT, LookingFor.FRIENDSHIP],

            gender: [Gender.MAN],

            sexuality: [
                Sexuality.STRAIGHT,
                Sexuality.GAY,
                Sexuality.LESBIAN,
                Sexuality.BISEXUAL,
            ],

            transStatus: [TransStatus.CIS, TransStatus.TRANS],

            hairLength: [],
            hairColor: [],
            eyeColor: [],
            bodyType: [],
            beard: [],
            bodyHair: [],
            ethnicity: [],
            smoker: [],
            tattoos: [],
            piercings: [],
            position: [],
            dickSize: [],
            dickCircumcision: [],
            fetish: [],
            sexualOpenness: [],
            fisting: [],
            sadism: [],
            masochism: [],
            saferSex: [],
            openTo: [],
            cupSizes: [],
            braSizes: [],
            binderSizes: [],

            goingOutInterests: [],
            lifestyleInterests: [],
            musicInterests: [],
            movieInterests: [],
            gamingInterests: [],
            sportsInterests: [],
            booksInterests: [],
            travelInterests: [],
            foodInterests: [],
            artInterests: [],
            technologyInterests: [],
            natureInterests: [],
            cultureInterests: [],
            learningInterests: [],
            socialInterests: [],
            automotiveInterests: [],
            outdoorInterests: [],
            personalInterests: [],
            collectingInterests: [],
            fashionInterests: [],
            eventsInterests: [],
            otherInterests: [],
        },
    });
    /*
     * ------------------------------------------------------------
     * 10. ADMIN CHAT CONVERSATIONS
     * ------------------------------------------------------------
     *
     * 3 tesztbeszélgetés:
     *   - admin <-> user1: 15 üzenet
     *   - admin <-> user2: 15 üzenet
     *   - admin <-> user4: 15 üzenet
     *
     * Az üzenetek váltva követik egymást, így mindhárom
     * beszélgetés valódi oda-vissza chatnek látszik.
     */

    async function createSeedConversation(
        userAId: string,
        userBId: string,
        messages: Array<{
            senderId: string;
            content: string;
        }>,
    ) {
        const conversation = await prisma.conversation.create({
            data: {
                participants: {
                    create: [
                        {
                            userId: userAId,
                        },
                        {
                            userId: userBId,
                        },
                    ],
                },
            },
        });

        await prisma.message.createMany({
            data: messages.map((message, index) => ({
                conversationId: conversation.id,
                senderId: message.senderId,
                content: message.content,
                sentAt: new Date(
                    now.getTime() - (messages.length - index) * 5 * 60 * 1000,
                ),
            })),
        });

        return conversation;
    }

    await createSeedConversation(admin.id, user1.id, [
        {
            senderId: admin.id,
            content: "Szia Alex! Hogy telik a napod?",
        },
        {
            senderId: user1.id,
            content: "Szia! Köszönöm, egész jól. Nálad minden rendben?",
        },
        {
            senderId: admin.id,
            content: "Igen, köszi! Most éppen az alkalmazást tesztelem.",
        },
        {
            senderId: user1.id,
            content: "Akkor jókor írtam. Van valami érdekes újdonság?",
        },
        {
            senderId: admin.id,
            content: "Igen, több új közösségi funkció is készül.",
        },
        {
            senderId: user1.id,
            content: "Ez jól hangzik. A chatet is fejlesztitek még?",
        },
        {
            senderId: admin.id,
            content:
                "Persze, most éppen a beszélgetések és az olvasottság tesztelése megy.",
        },
        {
            senderId: user1.id,
            content:
                "A valós idejű üzenetek szerintem különösen hasznosak lesznek.",
        },
        {
            senderId: admin.id,
            content: "Pontosan ez a cél. Szeretnénk gyors és egyszerű élményt.",
        },
        {
            senderId: user1.id,
            content: "Remélem, a mobilos használat is kényelmes lesz.",
        },
        {
            senderId: admin.id,
            content: "Igen, arra külön figyelünk.",
        },
        {
            senderId: user1.id,
            content: "Szuper, akkor kíváncsian várom a következő verziót.",
        },
        {
            senderId: admin.id,
            content: "Köszi! Ha találsz hibát, mindenképpen szólj.",
        },
        {
            senderId: user1.id,
            content: "Rendben, tesztelés közben figyelek majd.",
        },
        {
            senderId: admin.id,
            content: "Nagyon köszönöm a segítséged!",
        },
    ]);

    await createSeedConversation(admin.id, user2.id, [
        {
            senderId: admin.id,
            content: "Szia Daniel! Mizujs?",
        },
        {
            senderId: user2.id,
            content: "Szia! Minden oké, éppen pihenek egy kicsit.",
        },
        {
            senderId: admin.id,
            content: "Jól teszed. Volt ma edzés?",
        },
        {
            senderId: user2.id,
            content: "Igen, reggel elmentem edzeni.",
        },
        {
            senderId: admin.id,
            content: "Akkor már megvolt a napi adag.",
        },
        {
            senderId: user2.id,
            content: "Így van, most már jöhet egy nyugodtabb este.",
        },
        {
            senderId: admin.id,
            content: "Van valami programod estére?",
        },
        {
            senderId: user2.id,
            content: "Még nincs konkrét tervem.",
        },
        {
            senderId: admin.id,
            content: "Néha a teljesen szabad este a legjobb.",
        },
        {
            senderId: user2.id,
            content: "Ezzel teljesen egyetértek.",
        },
        {
            senderId: admin.id,
            content: "Én valószínűleg filmet nézek majd.",
        },
        {
            senderId: user2.id,
            content: "Jó ötlet. Van valami film, amit ajánlasz?",
        },
        {
            senderId: admin.id,
            content: "Mostanában inkább régebbi thrillereket nézek.",
        },
        {
            senderId: user2.id,
            content: "Azokból én is szeretek néhányat.",
        },
        {
            senderId: admin.id,
            content: "Akkor majd küldök pár címet.",
        },
    ]);

    await createSeedConversation(admin.id, user4.id, [
        {
            senderId: admin.id,
            content: "Szia Sophie! Hogy vagy?",
        },
        {
            senderId: user4.id,
            content: "Szia! Jól vagyok, köszönöm. Te?",
        },
        {
            senderId: admin.id,
            content: "Én is jól. Mivel töltöd a napot?",
        },
        {
            senderId: user4.id,
            content: "Dolgozom egy kreatív projekten.",
        },
        {
            senderId: admin.id,
            content: "Ez érdekes. Milyen jellegű projekt?",
        },
        {
            senderId: user4.id,
            content: "Egy kisebb vizuális anyagot készítek.",
        },
        {
            senderId: admin.id,
            content: "Gondolom, szereted az ilyen alkotós feladatokat.",
        },
        {
            senderId: user4.id,
            content: "Igen, sokkal jobban, mint a rutinfeladatokat.",
        },
        {
            senderId: admin.id,
            content:
                "Teljesen érthető. Jó érzés, amikor valami saját ötletből születik.",
        },
        {
            senderId: user4.id,
            content: "Pontosan. A végeredmény is sokkal személyesebb.",
        },
        {
            senderId: admin.id,
            content: "Szoktál közben zenét is hallgatni?",
        },
        {
            senderId: user4.id,
            content: "Mindig. Zene nélkül nehezen tudok dolgozni.",
        },
        {
            senderId: admin.id,
            content: "Én is így vagyok vele, főleg hosszabb munkánál.",
        },
        {
            senderId: user4.id,
            content: "Akkor ebben hasonlítunk.",
        },
        {
            senderId: admin.id,
            content: "Úgy tűnik, igen. Sok sikert a projekthez!",
        },
    ]);

    /*
     * ------------------------------------------------------------
     * 10. ADMIN LOOKING FOR / INTERESTS
     * ------------------------------------------------------------
     *
     * Ezt a részt a saját végleges UserLookingFor /
     * UserGenderInterest / UserSexualityInterest modelleidhez
     * kell igazítani, ha ezek a modellek ténylegesen benne vannak.
     */

    console.log("");
    console.log("✅ Seed completed");
    console.log("");
    console.log("Users:");
    console.log(`  ADMIN: ${admin.username}`);
    console.log(`  USER:  ${user1.username}`);
    console.log(`  USER:  ${user2.username}`);
    console.log(`  USER:  ${user3.username}`);
    console.log(`  USER:  ${user4.username}`);
    console.log(`  USER:  ${user5.username} [BANNED]`);
    console.log("");
    console.log("Admin galleries: 3");
    console.log("Admin groups: 2");
    console.log("Public group members: 2");
    console.log("Private group join requests: 2");
    console.log("Admin blogs: 2");
    console.log("Admin friendships: 2");
    console.log("Incoming friend requests: 2");
    console.log("Admin notifications: 10");
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
