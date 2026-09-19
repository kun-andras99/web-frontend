"use client";

import { useBackButton } from "@/features/_components/back-button";
import { ForgotPasswordForm } from "@/features/auth/components/forgot-password-form";

export function ForgotPasswordScreen() {
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
                <ForgotPasswordForm />
            </div>
        </>
    );
}
