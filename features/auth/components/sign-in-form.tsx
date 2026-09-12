"use client";

import { FormMessage } from "@/features/auth/components/form-message";
import { SubmitButton } from "@/features/auth/components/submit-button";
import { useSignInForm } from "@/features/auth/hooks/use-sign-in-form";
import { AUTH_ROUTES } from "@/features/auth/lib/constants";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function SignInForm() {
    const router = useRouter();

    const [state, formAction] = useSignInForm();

    useEffect(() => {
        if (state.status !== "success" || !state.redirectTo) {
            return;
        }

        router.replace(state.redirectTo);
        router.refresh();
    }, [state.status, state.redirectTo, router]);

    return (
        <form action={formAction} noValidate className="action-form">
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
                    autoComplete="current-password"
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

            {state.status === "error" && !state.fieldErrors && (
                <FormMessage
                    className="error-msg"
                    status="error"
                    message={state.message}
                />
            )}

            <SubmitButton pendingText="Bejelentkezés…">
                Bejelentkezés
            </SubmitButton>

            <p>
                <Link href={AUTH_ROUTES.forgotPassword}>
                    Elfelejtett jelszó?
                </Link>
            </p>

            <p>
                Nincs még fiókod?{" "}
                <Link href={AUTH_ROUTES.signUp}>Regisztráció</Link>
            </p>
        </form>
    );
}
