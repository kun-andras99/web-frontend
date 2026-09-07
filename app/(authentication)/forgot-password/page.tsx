import type { Metadata } from "next";
import { ForgotPasswordScreen } from "@/features/auth/screens/forgot-password";

export const metadata: Metadata = {
  title: "Elfelejtett jelszó",
};

export default function ForgotPasswordPage() {
  return <ForgotPasswordScreen />;
}
