"use client";

import { useForgotPasswordForm } from "@/features/auth/hooks/use-forgot-password-form";
import { SubmitButton } from "@/features/auth/components/submit-button";
import { FormMessage } from "@/features/auth/components/form-message";

export function ForgotPasswordForm() {
  const [state, formAction] = useForgotPasswordForm();

  if (state.status === "success") {
    return <FormMessage status="success" message={state.message ?? "Elküldve."} />;
  }

  return (
    <form action={formAction} noValidate>
      <div>
        <label htmlFor="email">Email cím</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
        {state.status === "error" && state.fieldErrors?.email && (
          <FormMessage status="error" message={state.fieldErrors.email[0]} />
        )}
      </div>

      {state.status === "error" && !state.fieldErrors && (
        <FormMessage status="error" message={state.message} />
      )}

      <SubmitButton pendingText="Küldés…">Visszaállító link kérése</SubmitButton>
    </form>
  );
}
