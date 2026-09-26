import { clientMetaFromHeaders } from "@/features/auth/lib/client-meta";
import { attachAuthCookies } from "@/features/auth/lib/cookies";
import { registerCredentials } from "@/features/auth/lib/register";
import { getCurrentUser } from "@/features/auth/lib/session";
import { NextResponse } from "next/server";
import { z } from "zod";
import { Gender, Sexuality } from "../../../../prisma/generated/prisma";
import { createProfile } from "@/features/profile-create/repositories/profileCreate";
import { mapProfileCreateToDTO } from "@/features/profile-create/mappers/profileCreate.mapper";

const profileCreateSchema = z.object({
    nickname: z
        .string()
        .trim()
        .min(3, "A megjelenített név legalább 3 karakter legyen.")
        .max(8, "A megjelenített név maximum 8 karakter lehet."),

    birth: z.string().min(1, "A születési dátum kötelező."),

    gender: z.enum(Object.values(Gender) as [Gender, ...Gender[]]),

    sexuality: z.enum(Object.values(Sexuality) as [Sexuality, ...Sexuality[]]),
});

function isSexualityAllowed(gender: Gender, sexuality: Sexuality) {
    if (gender === Gender.MAN) {
        return sexuality !== Sexuality.LESBIAN;
    }

    if (gender === Gender.WOMAN) {
        return sexuality !== Sexuality.GAY;
    }

    return false;
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

        const avatar = formData.get("avatar");

        const parsed = profileCreateSchema.safeParse({
            nickname,
            birth,
            gender,
            sexuality,
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

        if (!isSexualityAllowed(parsed.data.gender, parsed.data.sexuality)) {
            return NextResponse.json(
                {
                    message:
                        "A kiválasztott szexualitás nem használható a megadott nemmel.",
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

        let avatarUrl: string | null = null;

        if (avatar instanceof File && avatar.size > 0) {
            if (!avatar.type.startsWith("image/")) {
                return NextResponse.json(
                    {
                        message: "Csak képfájl tölthető fel.",
                    },
                    {
                        status: 400,
                    },
                );
            }

            const maxSize = 5 * 1024 * 1024;

            if (avatar.size > maxSize) {
                return NextResponse.json(
                    {
                        message: "A kép maximum 5 MB lehet.",
                    },
                    {
                        status: 400,
                    },
                );
            }

            /*
             * Itt még nincs storage.
             *
             * avatarUrl marad null.
             */
        }

        const dto = mapProfileCreateToDTO(
            {
                nickname: parsed.data.nickname,
                birth: parsed.data.birth,
                gender: parsed.data.gender,
                sexuality: parsed.data.sexuality,
                avatar: avatar instanceof File ? avatar : null,
            },
            currentUser.id,
            avatarUrl,
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
