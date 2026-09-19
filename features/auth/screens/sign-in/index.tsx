"use client";

import { useBackButton } from "@/features/_components/back-button";
import { FormMessage } from "@/features/auth/components/form-message";
import { SignInForm } from "@/features/auth/components/sign-in-form";
import { AUTH_ROUTES } from "@/features/auth/lib/constants";
import Link from "next/link";

interface SignInScreenProps {
    verified?: boolean;
    verifyError?: string;
}

export function SignInScreen({ verified, verifyError }: SignInScreenProps) {
    const { shouldShow } = useBackButton();
    return (
        <>
            {/* {shouldShow && (
                <SmartBackButton
                    style={{
                        fontSize: "14px",
                    }}
                />
            )} */}
            <div className="auth-view">
                {" "}
                {verified && (
                    <FormMessage
                        status="success"
                        message="Az email címed megerősítve. Most már bejelentkezhetsz."
                    />
                )}
                {verifyError && (
                    <FormMessage
                        status="error"
                        message="A megerősítő link érvénytelen vagy lejárt."
                    />
                )}
                <SignInForm />
                <Link href={AUTH_ROUTES.home}>Back to home</Link>
            </div>
        </>
    );
}
