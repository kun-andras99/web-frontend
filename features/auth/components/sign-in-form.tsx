"use client";

import Link from "next/link";
import { useSignInForm } from "@/features/auth/hooks/use-sign-in-form";
import { SubmitButton } from "@/features/auth/components/submit-button";
import { FormMessage } from "@/features/auth/components/form-message";
import { AUTH_ROUTES } from "@/features/auth/lib/constants";

export function SignInForm() {
  const [state, formAction] = useSignInForm();

  return (
    <form action={formAction} noValidate>
      <div>
        <label htmlFor="email">Email cím</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
        {state.status === "error" && state.fieldErrors?.email && (
          <FormMessage status="error" message={state.fieldErrors.email[0]} />
        )}
      </div>

      <div>
        <label htmlFor="password">Jelszó</label>
        <input id="password" name="password" type="password" autoComplete="current-password" required />
        {state.status === "error" && state.fieldErrors?.password && (
          <FormMessage status="error" message={state.fieldErrors.password[0]} />
        )}
      </div>

      {state.status === "error" && !state.fieldErrors && (
        <FormMessage status="error" message={state.message} />
      )}

      <SubmitButton pendingText="Bejelentkezés…">Bejelentkezés</SubmitButton>

      <p>
        <Link href={AUTH_ROUTES.forgotPassword}>Elfelejtett jelszó?</Link>
      </p>
      <p>
        Nincs még fiókod? <Link href={AUTH_ROUTES.signUp}>Regisztráció</Link>
      </p>
    </form>
  );
}
