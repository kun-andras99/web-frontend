"use client";

import { useBackButton } from "@/features/_components/back-button";
import { SignUpForm } from "@/features/auth/components/forms/SignUpFrom";

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
            </div>
        </>
    );
}
