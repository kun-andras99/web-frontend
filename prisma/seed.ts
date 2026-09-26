import "dotenv/config";

import { prisma } from "@/lib/prisma";
import {
    AppCity,
    Beard,
    BlogVisibility,
    BodyHair,
    BodyType,
    BraSize,
    BraSizeSystem,
    BreastDevelopment,
    BreastImplant,
    CupSize,
    DickCircumcision,
    DickSize,
    Ethnicity,
    EyeColor,
    Fetish,
    Fisting,
    FriendRequestStatus,
    FriendshipStatus,
    GalleryType,
    GalleryVisibility,
    Gender,
    GenderCanSee,
    GroupJoinRequestStatus,
    GroupMemberRole,
    GroupVisibility,
    HairColor,
    HairLength,
    Masochism,
    NotificationType,
    OpenTo,
    Piercings,
    Position,
    Sadism,
    SaferSex,
    Sexuality,
    SexualityCanSee,
    SexualOpenness,
    Smoker,
    Tattoos,
    TransStatus,
    TransStatusCanSee,
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
    console.log("🧹 Adatbázis ürítése...");

    await prisma.$transaction(async (tx) => {
        // ─────────────────────────────────────────────
        // 1. Üzenetek / chat
        // ─────────────────────────────────────────────

        await tx.messageRead.deleteMany();
        await tx.messageAttachment.deleteMany();
        await tx.message.deleteMany();
        await tx.conversationParticipant.deleteMany();
        await tx.conversation.deleteMany();

        // ─────────────────────────────────────────────
        // 2. Értesítések / moderáció / reportok
        // ─────────────────────────────────────────────

        await tx.notification.deleteMany();
        await tx.moderationAction.deleteMany();
        await tx.report.deleteMany();

        // ─────────────────────────────────────────────
        // 3. Match / barátság / kapcsolat
        // ─────────────────────────────────────────────

        await tx.match.deleteMany();
        await tx.matchAction.deleteMany();

        await tx.friendship.deleteMany();
        await tx.friendRequest.deleteMany();

        await tx.userFavorite.deleteMany();
        await tx.userBlock.deleteMany();

        // ─────────────────────────────────────────────
        // 4. Eye Candy
        // ─────────────────────────────────────────────

        await tx.eyeCandyVote.deleteMany();
        await tx.eyeCandyImage.deleteMany();
        await tx.eyeCandyParticipant.deleteMany();
        await tx.eyeCandyContest.deleteMany();

        // ─────────────────────────────────────────────
        // 5. Right Now
        // ─────────────────────────────────────────────

        await tx.rightNowDisplay.deleteMany();

        // ─────────────────────────────────────────────
        // 6. Profil látogatások
        // ─────────────────────────────────────────────

        await tx.profileVisit.deleteMany();
        await tx.groupVisit.deleteMany();

        // ─────────────────────────────────────────────
        // 7. Galériák
        // ─────────────────────────────────────────────

        await tx.galleryShare.deleteMany();
        await tx.galleryImage.deleteMany();
        await tx.gallery.deleteMany();

        // ─────────────────────────────────────────────
        // 8. Csoportok
        // ─────────────────────────────────────────────

        await tx.groupInvitation.deleteMany();
        await tx.groupJoinRequest.deleteMany();
        await tx.groupMember.deleteMany();
        await tx.group.deleteMany();

        // ─────────────────────────────────────────────
        // 9. Blogok
        // ─────────────────────────────────────────────

        await tx.blogLike.deleteMany();
        await tx.blogTag.deleteMany();
        await tx.blog.deleteMany();

        // ─────────────────────────────────────────────
        // 10. VIP / előfizetés / fizetések
        // ─────────────────────────────────────────────

        await tx.subscriptionPayment.deleteMany();
        await tx.userSubscription.deleteMany();

        // A VipPlan szándékosan a UserSubscription és
        // SubscriptionPayment után törlődik.
        await tx.vipPlan.deleteMany();

        // ─────────────────────────────────────────────
        // 11. User kapcsolódó adatok
        // ─────────────────────────────────────────────

        await tx.userFilter.deleteMany();
        await tx.userPreference.deleteMany();
        await tx.userData.deleteMany();

        // ─────────────────────────────────────────────
        // 12. Auth tokenek
        // ─────────────────────────────────────────────

        await tx.refreshToken.deleteMany();
        await tx.verificationToken.deleteMany();

        // ─────────────────────────────────────────────
        // 13. Végül maguk a userek
        // ─────────────────────────────────────────────

        await tx.users.deleteMany();
    });

    console.log("✅ Adatbázis sikeresen kiürítve.");
}

async function main() {
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
            neckCircumference: 40,
            chestCircumference: 104,
            waistCircumference: 86,
            hipCircumference: 98,

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
            transStatus: TransStatus.CIS,
            transStatusCanSee: [TransStatusCanSee.CIS, TransStatusCanSee.TRANS],

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
            fisting: Fisting.CURIOUS,
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
            neckCircumference: 40,
            chestCircumference: 104,
            waistCircumference: 86,
            hipCircumference: 98,

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
            transStatus: TransStatus.CIS,
            transStatusCanSee: [TransStatusCanSee.CIS, TransStatusCanSee.TRANS],

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
            fisting: Fisting.CURIOUS,
            sadism: Sadism.NOT_INTERESTED,
            masochism: Masochism.NOT_INTERESTED,
            saferSex: SaferSex.SAFE,
            openTo: OpenTo.FRIENDS,

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

    const privateGallery = await prisma.gallery.upsert({
        where: {
            ownerId_name: {
                ownerId: admin.id,
                name: "My private contect album",
            },
        },
        update: {
            type: GalleryType.USER,
            visibility: GalleryVisibility.PRIVATE,
        },
        create: {
            ownerId: admin.id,
            name: "My private contect album",
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

    /*
     * Public album képek
     */

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

    /*
     * Private album képek
     */

    await prisma.galleryImage.createMany({
        data: [
            {
                galleryId: privateGallery.id,
                url: "https://i.pravatar.cc/600?img=14",
                mimeType: "image/jpeg",
                sortOrder: 0,
            },
            {
                galleryId: privateGallery.id,
                url: "https://i.pravatar.cc/600?img=15",
                mimeType: "image/jpeg",
                sortOrder: 1,
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
                requesterId: user3.id,
                status: GroupJoinRequestStatus.PENDING,
            },
            {
                groupId: privateGroup.id,
                requesterId: user4.id,
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
            entityId: privateGallery.id,
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
