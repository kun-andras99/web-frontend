import { prisma } from "@/lib/prisma";
import { Gender, Prisma } from "../../../prisma/generated/prisma";

export const userAppCitySelect = {
    id: true,

    userData: {
        select: {
            appCity: true,
        },
    },
} satisfies Prisma.UsersSelect;

export async function getCurrentUserCityStats(userId: string) {
    const currentUser = await prisma.users.findUnique({
        where: {
            id: userId,
        },
        select: userAppCitySelect,
    });

    if (!currentUser?.userData?.appCity) {
        return null;
    }

    const users = await prisma.userData.findMany({
        where: {
            appCity: currentUser.userData.appCity,
        },
        select: {
            gender: true,
            birth: true,
        },
    });

    const now = new Date();

    let male = 0;
    let female = 0;
    let transMale = 0;
    let transFemale = 0;

    let age18To25 = 0;
    let age26To40 = 0;
    let age41To60 = 0;
    let age60Plus = 0;

    for (const user of users) {
        // -------------------------
        // Gender
        // -------------------------

        switch (user.gender) {
            case Gender.MAN:
                male++;
                break;

            case Gender.WOMAN:
                female++;
                break;

            case Gender.TRANS_MAN:
                transMale++;
                break;

            case Gender.TRANS_WOMAN:
                transFemale++;
                break;
        }

        // -------------------------
        // Age
        // -------------------------

        if (!user.birth) {
            continue;
        }

        const birth = new Date(user.birth);

        let age = now.getFullYear() - birth.getFullYear();

        const birthdayThisYear = new Date(
            now.getFullYear(),
            birth.getMonth(),
            birth.getDate(),
        );

        if (birthdayThisYear > now) {
            age--;
        }

        if (age >= 18 && age <= 25) {
            age18To25++;
        } else if (age >= 26 && age <= 40) {
            age26To40++;
        } else if (age >= 41 && age <= 60) {
            age41To60++;
        } else if (age >= 61) {
            age60Plus++;
        }
    }

    return {
        appCity: currentUser.userData.appCity,

        total: users.length,

        gender: {
            male,
            female,
            transMale,
            transFemale,
        },

        age: {
            age18To25,
            age26To40,
            age41To60,
            age60Plus,
        },
    };
}
