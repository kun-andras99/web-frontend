import { SignInForm } from "@/features/auth/components/sign-in-form";
import { FormMessage } from "@/features/auth/components/form-message";

interface SignInScreenProps {
  verified?: boolean;
  verifyError?: string;
}

export function SignInScreen({ verified, verifyError }: SignInScreenProps) {
  return (
    <section>
      <h1>Bejelentkezés</h1>
      {verified && (
        <FormMessage status="success" message="Az email címed megerősítve. Most már bejelentkezhetsz." />
      )}
      {verifyError && (
        <FormMessage status="error" message="A megerősítő link érvénytelen vagy lejárt." />
      )}
      <SignInForm />
    </section>
  );
}
