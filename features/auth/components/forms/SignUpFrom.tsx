"use client";

import AppButton from "@/features/_components/button/AppButton";
import { FormMessage } from "@/features/auth/components/forms/FormMessage";
import { useSignUpForm } from "@/features/auth/hooks/use-sign-up-form";
import { AUTH_ROUTES } from "@/features/auth/lib/constants";
import Link from "next/link";

export function SignUpForm() {
    const [state, formAction] = useSignUpForm();

    return (
        <form action={formAction} noValidate className="action-form">
            <div className="input-group">
                <input
                    id="username"
                    name="username"
                    placeholder="Username"
                    type="text"
                    autoComplete="username"
                    required
                />

                {state.status === "error" && state.fieldErrors?.username && (
                    <FormMessage
                        className="error-msg"
                        status="error"
                        message={state.fieldErrors.username[0]}
                    />
                )}
            </div>

            <div className="input-group">
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
            </div>

            <div className="input-group">
                <input
                    id="password"
                    name="password"
                    placeholder="Password"
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
            </div>

            {state.status === "error" && !state.fieldErrors && (
                <FormMessage
                    className="error-msg"
                    status="error"
                    message={state.message}
                />
            )}

            <AppButton type="submit" pendingText="Process registration...">
                Registration
            </AppButton>

            <Link href={AUTH_ROUTES.signIn}>
                <AppButton
                    className="button-full"
                    variant="outline"
                    type="button">
                    Click to login
                </AppButton>
            </Link>
        </form>
    );
}
