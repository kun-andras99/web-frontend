"use server";

import { createEmailVerificationToken } from "@/features/auth/data/verification-token";
import {
    sendEmail,
    verificationEmailTemplate,
} from "@/features/auth/lib/mailer";
import { getCurrentUser } from "@/features/auth/lib/session";
import type { UserId } from "@/features/auth/types/auth-index";
import { getUserByEmail } from "@/features/user/repositories/user";

/**
 * Ez az action nem `action=` prop-on keresztül fut (nincs FormData paramétere),
 * hanem simán egy async függvényként hívjuk klienskódból (pl. `onClick`-ből) —
 * ez is egy támogatott Server Action minta Next.js-ben.
 */
export async function resendVerificationEmailAction(): Promise<{
    success: boolean;
    message: string;
}> {
    const sessionUser = await getCurrentUser();
    if (!sessionUser) {
        return { success: false, message: "Jelentkezz be előbb." };
    }

    const user = await getUserByEmail(sessionUser.email);
    if (!user || user.emailVerified) {
        return {
            success: false,
            message: "Az email címed már meg van erősítve.",
        };
    }

    const rawToken = await createEmailVerificationToken(user.id as UserId);
    const verifyLink = `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/verify-email?token=${rawToken}`;
    await sendEmail({
        to: user.email,
        subject: "Erősítsd meg az email címed",
        html: verificationEmailTemplate(verifyLink),
    });

    return { success: true, message: "Elküldtük az új megerősítő emailt." };
}
