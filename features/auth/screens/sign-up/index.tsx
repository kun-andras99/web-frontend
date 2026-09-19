"use client";

import { useBackButton } from "@/features/_components/back-button";
import { SignUpForm } from "@/features/auth/components/sign-up-form";
import { AUTH_ROUTES } from "@/features/auth/lib/constants";
import Link from "next/link";

export function SignUpScreen() {
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
                <SignUpForm />
                <Link href={AUTH_ROUTES.home}>Back to home</Link>
            </div>
        </>
    );
}
