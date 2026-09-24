"use client";

import AuthButton from "@/features/auth/components/AuthButton";
import { FormMessage } from "@/features/auth/components/forms/FormMessage";
import { useSignInForm } from "@/features/auth/hooks/use-sign-in-form";

export function SignInForm() {
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
                    {/* </section> */}
                    <AuthButton
                        className="centered-button"
                        pendingText="Logging in..."
                        type="submit">
                        Login
                    </AuthButton>
                </form>
            </section>
        </>
    );
}
