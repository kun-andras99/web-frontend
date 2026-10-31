import type { Metadata } from "next";
import { SignInScreen } from "@/features/auth/screens/sign-in";

export const metadata: Metadata = {
  title: "Bejelentkezés",
};

interface SignInPageProps {
  searchParams: Promise<{ verified?: string; "verify-error"?: string }>;
}

export default async function SignInPage({ searchParams }: SignInPageProps) {
  const params = await searchParams;

  return <SignInScreen verified={params.verified === "1"} verifyError={params["verify-error"]} />;
}
