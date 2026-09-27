import { getCurrentUser } from "@/features/auth/lib/session";
import { mapProfileCreateToDTO } from "@/features/profile-create/mappers/profileCreate.mapper";
import { createProfile } from "@/features/profile-create/repositories/profileCreate";
import { NextResponse } from "next/server";
import { z } from "zod";
import {
    AppCity,
    Gender,
    Sexuality,
} from "../../../../prisma/generated/prisma";

const profileCreateSchema = z.object({
    nickname: z
        .string()
        .trim()
        .min(3, "A megjelenített név legalább 3 karakter legyen.")
        .max(8, "A megjelenített név maximum 8 karakter lehet."),

    birth: z.string().min(1, "A születési dátum kötelező."),
    gender: z.enum(Object.values(Gender) as [Gender, ...Gender[]]),
    sexuality: z.enum(Object.values(Sexuality) as [Sexuality, ...Sexuality[]]),
    appCity: z.enum(Object.values(AppCity) as [AppCity, ...AppCity[]]),
});

export function isValidDateString(value: string): boolean {
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);

    if (!match) {
        return false;
    }

    const year = Number(match[1]);
    const month = Number(match[2]);
    const day = Number(match[3]);

    const date = new Date(year, month - 1, day);

    return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
    );
}

export function isAtLeast18(birth: string): boolean {
    if (!isValidDateString(birth)) {
        return false;
    }

    const [year, month, day] = birth.split("-").map(Number);

    const today = new Date();

    let age = today.getFullYear() - year;

    const birthdayPassed =
        today.getMonth() + 1 > month ||
        (today.getMonth() + 1 === month && today.getDate() >= day);

    if (!birthdayPassed) {
        age--;
    }

    return age >= 18;
}

function getAllowedAppCities(gender: Gender, sexuality: Sexuality): AppCity[] {
    if (gender === Gender.MAN) {
        if (sexuality === Sexuality.STRAIGHT) {
            return [AppCity.CENTRUM, AppCity.STRAIGHT, AppCity.BISEXUAL];
        }

        if (sexuality === Sexuality.BISEXUAL) {
            return [AppCity.CENTRUM, AppCity.BISEXUAL, AppCity.GAY];
        }

        return [
            AppCity.CENTRUM,
            AppCity.STRAIGHT,
            AppCity.BISEXUAL,
            AppCity.GAY,
        ];
    }

    if (gender === Gender.WOMAN) {
        if (sexuality === Sexuality.STRAIGHT) {
            return [AppCity.CENTRUM, AppCity.STRAIGHT, AppCity.BISEXUAL];
        }

        if (sexuality === Sexuality.BISEXUAL) {
            return [AppCity.CENTRUM, AppCity.BISEXUAL, AppCity.LESBIAN];
        }

        return [
            AppCity.CENTRUM,
            AppCity.STRAIGHT,
            AppCity.BISEXUAL,
            AppCity.LESBIAN,
        ];
    }

    if (gender === Gender.TRANS_MAN) {
        if (sexuality === Sexuality.STRAIGHT) {
            return [
                AppCity.CENTRUM,
                AppCity.STRAIGHT,
                AppCity.BISEXUAL,
                AppCity.TRANS,
            ];
        }

        if (sexuality === Sexuality.BISEXUAL) {
            return [
                AppCity.CENTRUM,
                AppCity.BISEXUAL,
                AppCity.GAY,
                AppCity.TRANS,
            ];
        }

        return [
            AppCity.CENTRUM,
            AppCity.STRAIGHT,
            AppCity.BISEXUAL,
            AppCity.GAY,
            AppCity.TRANS,
        ];
    }

    if (gender === Gender.TRANS_WOMAN) {
        if (sexuality === Sexuality.STRAIGHT) {
            return [
                AppCity.CENTRUM,
                AppCity.STRAIGHT,
                AppCity.LESBIAN,
                AppCity.TRANS,
            ];
        }

        if (sexuality === Sexuality.BISEXUAL) {
            return [
                AppCity.CENTRUM,
                AppCity.BISEXUAL,
                AppCity.LESBIAN,
                AppCity.TRANS,
            ];
        }

        return [
            AppCity.CENTRUM,
            AppCity.STRAIGHT,
            AppCity.BISEXUAL,
            AppCity.LESBIAN,
            AppCity.TRANS,
        ];
    }

    return [];
}

export async function POST(request: Request) {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser) {
            return NextResponse.json(
                {
                    message: "Nincs bejelentkezve.",
                },
                {
                    status: 401,
                },
            );
        }

        const formData = await request.formData();
        const nickname = formData.get("nickname");
        const birth = formData.get("birth");
        const gender = formData.get("gender");
        const sexuality = formData.get("sexuality");
        const appCity = formData.get("appCity");
        // const avatar = formData.get("avatar");

        const parsed = profileCreateSchema.safeParse({
            nickname,
            birth,
            gender,
            sexuality,
            appCity,
        });

        if (!parsed.success) {
            return NextResponse.json(
                {
                    message: "Hibás profiladatok.",
                    errors: parsed.error.flatten(),
                },
                {
                    status: 400,
                },
            );
        }

        const allowedAppCities = getAllowedAppCities(
            parsed.data.gender,
            parsed.data.sexuality,
        );

        if (!allowedAppCities.includes(parsed.data.appCity)) {
            return NextResponse.json(
                {
                    message:
                        "A kiválasztott negyed nem használható a megadott nemmel és szexualitással.",
                },
                {
                    status: 400,
                },
            );
        }

        const birthDate = new Date(parsed.data.birth);

        if (Number.isNaN(birthDate.getTime())) {
            return NextResponse.json(
                {
                    message: "Érvénytelen születési dátum.",
                },
                {
                    status: 400,
                },
            );
        }

        if (birthDate > new Date()) {
            return NextResponse.json(
                {
                    message: "A születési dátum nem lehet jövőbeli.",
                },
                {
                    status: 400,
                },
            );
        }

        if (!isAtLeast18(parsed.data.birth)) {
            return NextResponse.json(
                {
                    message:
                        "A regisztrációhoz be kell töltened a 18. életévedet.",
                },
                {
                    status: 400,
                },
            );
        }

        /*
         * Avatar kezelés:
         *
         * Itt később:
         *
         * const avatarUrl =
         *     await uploadAvatar(
         *         currentUser.id,
         *         avatar
         *     );
         */

        // const avatarUrl: string | null = null;

        // if (avatar instanceof File && avatar.size > 0) {
        //     if (!avatar.type.startsWith("image/")) {
        //         return NextResponse.json(
        //             {
        //                 message: "Csak képfájl tölthető fel.",
        //             },
        //             {
        //                 status: 400,
        //             },
        //         );
        //     }

        // const maxSize = 5 * 1024 * 1024;

        // if (avatar.size > maxSize) {
        //     return NextResponse.json(
        //         {
        //             message: "A kép maximum 5 MB lehet.",
        //         },
        //         {
        //             status: 400,
        //         },
        //     );
        // }

        /*
         * Itt még nincs storage.
         *
         * avatarUrl marad null.
         */
        // }

        const dto = mapProfileCreateToDTO(
            {
                nickname: parsed.data.nickname,
                birth: parsed.data.birth,
                gender: parsed.data.gender,
                sexuality: parsed.data.sexuality,
                appCity: parsed.data.appCity,
            },
            currentUser.id,
            // avatarUrl,
        );

        await createProfile(dto);

        return NextResponse.json(
            {
                success: true,
            },
            {
                status: 201,
            },
        );
    } catch (error) {
        console.error("PROFILE_CREATE_ERROR", error);

        if (
            error instanceof Error &&
            error.message === "PROFILE_ALREADY_COMPLETED"
        ) {
            return NextResponse.json(
                {
                    message: "A profil már létre lett hozva.",
                },
                {
                    status: 409,
                },
            );
        }

        return NextResponse.json(
            {
                message: "A profil létrehozása sikertelen.",
            },
            {
                status: 500,
            },
        );
    }
}
