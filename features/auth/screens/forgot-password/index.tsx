"use client";

import { ForgotPasswordForm } from "@/features/auth/components/forgot-password-form";
import { useBackButton } from "@/features/back-button";

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
