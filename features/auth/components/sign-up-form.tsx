"use client";

import { FormMessage } from "@/features/auth/components/form-message";
import { SubmitButton } from "@/features/auth/components/submit-button";
import { useSignUpForm } from "@/features/auth/hooks/use-sign-up-form";
import { AUTH_ROUTES } from "@/features/auth/lib/constants";
import Link from "next/link";

export function SignUpForm() {
    const [state, formAction] = useSignUpForm();

    return (
        <form action={formAction} noValidate className="action-form">
            <div className="input-group">
                <label htmlFor="name">Név</label>
                <input
                    id="username"
                    name="username"
                    placeholder="username"
                    type="text"
                    autoComplete="username"
                    required
                />
                {state.status === "error" && state.fieldErrors?.name && (
                    <FormMessage
                        className="error-msg"
                        status="error"
                        message={state.fieldErrors.name[0]}
                    />
                )}
            </div>

            <div className="input-group">
                <label htmlFor="email">Email cím</label>
                <input
                    id="email"
                    name="email"
                    placeholder="email"
                    type="email"
                    autoComplete="email"
                    required
                />
                {state.status === "error" && state.fieldErrors?.email && (
                    <FormMessage
                        className="error-msg"
                        status="error"
                        message={state.fieldErrors.email[0]}
                    />
                )}
            </div>

            <div className="input-group">
                <label htmlFor="password">Jelszó</label>
                <input
                    id="password"
                    name="password"
                    placeholder="password"
                    type="password"
                    autoComplete="new-password"
                    required
                />
                {state.status === "error" && state.fieldErrors?.password && (
                    <FormMessage
                        className="error-msg"
                        status="error"
                        message={state.fieldErrors.password[0]}
                    />
                )}
            </div>

            <div className="input-group">
                <label htmlFor="confirmPassword">Jelszó megerősítése</label>
                <input
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="confirm password"
                    type="password"
                    autoComplete="new-password"
                    required
                />
                {state.status === "error" &&
                    state.fieldErrors?.confirmPassword && (
                        <FormMessage
                            className="error-msg"
                            status="error"
                            message={state.fieldErrors.confirmPassword[0]}
                        />
                    )}
            </div>

            {state.status === "error" && !state.fieldErrors && (
                <FormMessage
                    className="error-msg"
                    status="error"
                    message={state.message}
                />
            )}

            <SubmitButton pendingText="Regisztráció…">
                Regisztráció
            </SubmitButton>

            <p>
                Már van fiókod?{" "}
                <Link href={AUTH_ROUTES.signIn}>Bejelentkezés</Link>
            </p>
        </form>
    );
}
