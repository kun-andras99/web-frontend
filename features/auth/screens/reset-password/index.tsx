import { ResetPasswordForm } from "@/features/auth/components/forms/PasswordResetForm";

interface ResetPasswordScreenProps {
  token: string;
}

export function ResetPasswordScreen({ token }: ResetPasswordScreenProps) {
    
  return (
    <section>
      <h1>Új jelszó beállítása</h1>
      <ResetPasswordForm token={token} />
    </section>
  );
}
