"use server";

import { getUserByEmail } from "@/features/auth/data/user";
import { createPasswordResetToken } from "@/features/auth/data/verification-token";
import { GUEST_ROUTES } from "@/features/auth/lib/constants";
import {
    passwordResetEmailTemplate,
    sendEmail,
} from "@/features/auth/lib/mailer";
import { forgotPasswordSchema } from "@/features/auth/lib/validation";
import type {
    ActionState,
    ForgotPasswordFields,
    UserId,
} from "@/features/auth/types/auth-index";

const GENERIC_SUCCESS_MESSAGE =
    "Ha létezik fiók ezzel az email címmel, elküldtünk rá egy jelszó-visszaállító linket.";

export async function forgotPasswordAction(
    _prevState: ActionState<ForgotPasswordFields>,
    formData: FormData,
): Promise<ActionState<ForgotPasswordFields>> {
    const parsed = forgotPasswordSchema.safeParse({
        email: formData.get("email"),
    });

    if (!parsed.success) {
        return {
            status: "error",
            message: "Kérjük, adj meg egy érvényes email címet.",
            fieldErrors: parsed.error.flatten().fieldErrors,
        };
    }

    const user = await getUserByEmail(parsed.data.email);

    // Mindig ugyanazt a sikerüzenetet adjuk vissza — enumerálás-védelem.
    if (user) {
        const rawToken = await createPasswordResetToken(user.id as UserId);
        const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}${GUEST_ROUTES.resetPassword}?token=${rawToken}`;
        await sendEmail({
            to: user.email,
            subject: "Jelszó visszaállítása",
            html: passwordResetEmailTemplate(resetLink),
        });
    }

    return { status: "success", message: GENERIC_SUCCESS_MESSAGE };
}
