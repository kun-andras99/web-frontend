import type { Metadata } from "next";
import { SignUpScreen } from "@/features/auth/screens/sign-up";

export const metadata: Metadata = {
  title: "Regisztráció",
};

export default function SignUpPage() {
  return <SignUpScreen />;
}
