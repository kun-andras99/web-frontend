"use client";

import AuthButton from "@/features/auth/components/AuthButton";
import { FormMessage } from "@/features/auth/components/forms/FormMessage";
import { useSignUpForm } from "@/features/auth/hooks/use-sign-up-form";

export function SignUpForm() {
    const [state, formAction] = useSignUpForm();

    return (
        <section className="quick-login">
            <form action={formAction} noValidate>
                <label>
                    <input
                        id="username"
                        name="username"
                        placeholder="Username"
                        type="text"
                        autoComplete="username"
                        required
                    />

                    {state.status === "error" &&
                        state.fieldErrors?.username && (
                            <FormMessage
                                className="error-msg"
                                status="error"
                                message={state.fieldErrors.username[0]}
                            />
                        )}
                </label>

                <label>
                    <input
                        id="email"
                        name="email"
                        placeholder="Email address"
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
                </label>

                <label>
                    <input
                        id="password"
                        name="password"
                        placeholder="Password"
                        type="password"
                        autoComplete="new-password"
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

                <label>
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm password"
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
                </label>

                {state.status === "error" && !state.fieldErrors && (
                    <FormMessage
                        className="error-msg"
                        status="error"
                        message={state.message}
                    />
                )}

                <AuthButton
                    className="centered-button"
                    pendingText="Registrating..."
                    type="submit">
                    Registration
                </AuthButton>
            </form>
        </section>
    );
}
