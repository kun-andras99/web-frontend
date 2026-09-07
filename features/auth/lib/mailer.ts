import "server-only";

interface SendEmailOptions {
    to: string;
    subject: string;
    html: string;
}

/**
 * Vékony absztrakció az email-szolgáltató fölött, hogy a többi kód sose
 * beszéljen közvetlenül egy konkrét vendorral. Cseréld le a Resend hívást
 * a saját providered (Postmark, SES, Nodemailer + SMTP, stb.) hívására.
 */
export async function sendEmail({
    to,
    subject,
    html,
}: SendEmailOptions): Promise<void> {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
        // Nincs beállítva provider (pl. lokális fejlesztés) — ne bukjon el a request, csak logoljuk.
        console.info(`[mailer] (dry-run) -> ${to} | ${subject}\n${html}`);
        return;
    }

    const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            from: process.env.EMAIL_FROM ?? "no-reply@example.com",
            to,
            subject,
            html,
        }),
    });

    if (!response.ok) {
        const body = await response.text();
        throw new Error(`Failed to send email: ${response.status} ${body}`);
    }
}

export function verificationEmailTemplate(link: string): string {
    return `<p>Kattints a linkre az email címed megerősítéséhez:</p><p><a href="${link}">${link}</a></p>`;
}

export function passwordResetEmailTemplate(link: string): string {
    return `<p>Kattints a linkre az új jelszó beállításához (1 órán belül érvényes):</p><p><a href="${link}">${link}</a></p>`;
}
