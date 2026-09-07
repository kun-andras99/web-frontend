import { ResetPasswordForm } from "@/features/auth/components/reset-password-form";

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
