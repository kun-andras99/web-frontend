"use server";

import { revokeAllRefreshTokensForUser } from "@/features/auth/data/refresh-token";
import {
    deleteVerificationTokenById,
    findValidVerificationToken,
} from "@/features/auth/data/verification-token";
import { hashPassword } from "@/features/auth/lib/password";
import { resetPasswordSchema } from "@/features/auth/lib/validation";
import type {
    ActionState,
    ResetPasswordFields,
    UserId,
} from "@/features/auth/types/auth-index";
import { updateUserPassword } from "@/features/user/repositories/user";

/**
 * A `token`-t a hívó oldalon `.bind(null, token)`-nel kötjük az action elé
 * (ld. useResetPasswordForm hook) — ez a hivatalos minta extra paraméterek
 * átadására egy `useActionState`-tel meghajtott Server Actionnek.
 */
export async function resetPasswordAction(
    token: string,
    _prevState: ActionState<ResetPasswordFields>,
    formData: FormData,
): Promise<ActionState<ResetPasswordFields>> {
    const parsed = resetPasswordSchema.safeParse({
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword"),
    });

    if (!parsed.success) {
        return {
            status: "error",
            message: "Kérjük, javítsd a hibás mezőket.",
            fieldErrors: parsed.error.flatten().fieldErrors,
        };
    }

    const verificationToken = await findValidVerificationToken(
        token,
        "PASSWORD_RESET",
    );
    if (!verificationToken) {
        return {
            status: "error",
            message: "A link lejárt vagy érvénytelen. Kérj egy újat.",
        };
    }

    const passwordHash = await hashPassword(parsed.data.password);
    const userId = verificationToken.userId as UserId;

    await updateUserPassword(userId, passwordHash);
    await deleteVerificationTokenById(verificationToken.id);
    // Jelszóváltás után minden korábbi (esetleg kompromittált) munkamenetet érvénytelenítünk.
    await revokeAllRefreshTokensForUser(userId);

    return {
        status: "success",
        message:
            "A jelszavad sikeresen megváltozott. Most már bejelentkezhetsz vele.",
    };
}
