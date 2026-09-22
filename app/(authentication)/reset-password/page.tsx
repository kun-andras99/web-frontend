import { ResetPasswordScreen } from "@/features/auth/screens/reset-password";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Új jelszó",
};

interface ResetPasswordPageProps {
    searchParams: Promise<{ token?: string }>;
}

export default async function ResetPasswordPage({
    searchParams,
}: ResetPasswordPageProps) {
    return <ResetPasswordScreen />;
}
