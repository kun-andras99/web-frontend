"use client";

import { ForgotPasswordForm } from "@/features/auth/components/forms/ForgotPasswordForm";

export function ForgotPasswordScreen() {
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
