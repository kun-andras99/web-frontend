import { FormMessage } from "@/features/auth/components/form-message";
import { SignInForm } from "@/features/auth/components/sign-in-form";

interface SignInScreenProps {
    verified?: boolean;
    verifyError?: string;
}

export function SignInScreen({ verified, verifyError }: SignInScreenProps) {
    return (
        <div>
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
    );
}
