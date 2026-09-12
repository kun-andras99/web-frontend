"use client";

import { FormMessage } from "@/features/auth/components/form-message";
import { SubmitButton } from "@/features/auth/components/submit-button";
import { useSignInForm } from "@/features/auth/hooks/use-sign-in-form";
import { AUTH_ROUTES } from "@/features/auth/lib/constants";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function QuickLoginForm() {
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
        <>
            <section className="quick-login">
                {/* <h2>Authentication</h2> */}
                <form action={formAction} noValidate>
                    <label>
                        <input
                            id="email"
                            name="email"
                            placeholder="Email"
                            type="email"
                            autoComplete="email"
                            required
                        />
                        {state.status === "error" &&
                            state.fieldErrors?.email && (
                                <FormMessage
                                    className="error-msg"
                                    status="error"
                                    message={state.fieldErrors.email[0]}
                                />
                            )}
                    </label>
                    <label>
                        <input
                            id="password"
                            name="password"
                            placeholder="********"
                            type="password"
                            autoComplete="current-password"
                            required
                        />

                        {state.status === "error" &&
                            state.fieldErrors?.password && (
                                <FormMessage
                                    className="error-msg"
                                    status="error"
                                    message={state.fieldErrors.password[0]}
                                />
                            )}
                    </label>

                    {state.status === "error" && !state.fieldErrors && (
                        <FormMessage
                            className="error-msg"
                            status="error"
                            message={state.message}
                        />
                    )}

                    <section className="login-options">
                        <label>
                            <input
                                type="checkbox"
                                name="remember"
                                className="checkbox"
                            />
                            Keep me logged in
                        </label>
                        <Link href={AUTH_ROUTES.forgotPassword}>
                            Forgot password?
                        </Link>
                    </section>
                    <SubmitButton>Login</SubmitButton>
                </form>
                <Link href={AUTH_ROUTES.signUp}>Click here to register</Link>
            </section>
        </>
    );
}
