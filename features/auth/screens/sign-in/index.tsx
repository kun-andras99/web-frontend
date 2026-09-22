"use client";

// import { useBackButton } from "@/features/_components/back-button";
import { FormMessage } from "@/features/auth/components/forms/FormMessage";
import { SignInForm } from "@/features/auth/components/forms/SignInForm";

interface SignInScreenProps {
    verified?: boolean;
    verifyError?: string;
}

export function SignInScreen({ verified, verifyError }: SignInScreenProps) {
    // const { shouldShow } = useBackButton();
    return (
        <>
            {/* {shouldShow && (
                <SmartBackButton
                    style={{
                        fontSize: "14px",
                    }}
                />
            )} */}
            <div className="main-container">
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
            </div>
        </>
    );
}
