import { GUEST_ROUTES } from "@/features/auth/lib/constants";
import { ResetPasswordScreen } from "@/features/auth/screens/reset-password";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Új jelszó",
};

interface ResetPasswordPageProps {
    searchParams: Promise<{ token?: string }>;
}

export default async function ResetPasswordPage({
    searchParams,
}: ResetPasswordPageProps) {
    const { token } = await searchParams;

    if (!token) {
        redirect(GUEST_ROUTES.forgotPassword);
    }

    return <ResetPasswordScreen token={token} />;
}
