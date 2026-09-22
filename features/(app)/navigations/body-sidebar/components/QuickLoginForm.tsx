"use client";

import AppButton from "@/features/_components/button/AppButton";
import { FormMessage } from "@/features/auth/components/forms/FormMessage";
import { useSignInForm } from "@/features/auth/hooks/use-sign-in-form";
import { GUEST_ROUTES } from "@/features/auth/lib/constants";
import Link from "next/link";

export default function QuickLoginForm() {
    const [state, formAction] = useSignInForm();

    return (
        <>
            <section className="quick-login">
                <form action={formAction} noValidate>
                    <label>
                        <input
                            id="identifier"
                            name="identifier"
                            placeholder="Email or username"
                            type="text"
                            autoComplete="username"
                            required
                        />
                        {state.status === "error" &&
                            state.fieldErrors?.identifier && (
                                <FormMessage
                                    className="error-msg"
                                    status="error"
                                    message={state.fieldErrors.identifier[0]}
                                />
                            )}
                    </label>
                    <label>
                        <input
                            id="password"
                            name="password"
                            placeholder="Password"
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

                    {/* <section className="login-options"> */}
                    {/* <label>
                            <input
                                type="checkbox"
                                name="remember"
                                className="checkbox"
                            />
                            Keep me logged in
                        </label> */}
                    <Link href={GUEST_ROUTES.forgotPassword}>
                        Forgot password?
                    </Link>
                    {/* </section> */}
                    <AppButton
                        className="centered-button"
                        pendingText="Logging in...">
                        <div className="auth-r">
                            <div className="r">Login</div>
                        </div>
                    </AppButton>
                </form>
            </section>
        </>
    );
}
