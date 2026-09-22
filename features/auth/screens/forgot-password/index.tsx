"use client";

import { useBackButton } from "@/features/_components/back-button";
import { ForgotPasswordForm } from "@/features/auth/components/forms/ForgotPasswordForm";

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
            <div className="main-container centered-main">
                <ForgotPasswordForm />
            </div>
        </>
    );
}
