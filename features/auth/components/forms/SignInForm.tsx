"use client";

import AppButton from "@/features/_components/button/AppButton";
import { FormMessage } from "@/features/auth/components/forms/FormMessage";
import { useSignInForm } from "@/features/auth/hooks/use-sign-in-form";
import { AUTH_ROUTES } from "@/features/auth/lib/constants";
import Link from "next/link";

export function SignInForm() {
    const [state, formAction] = useSignInForm();

    return (
        <form action={formAction} noValidate className="action-form">
            <div className="input-group">
                <input
                    id="identifier"
                    name="identifier"
                    placeholder="Email or username"
                    type="text"
                    autoComplete="username"
                    autoCapitalize="none"
                    spellCheck={false}
                    required
                />

                {state.status === "error" && state.fieldErrors?.identifier && (
                    <FormMessage
                        className="error-msg"
                        status="error"
                        message={state.fieldErrors.identifier[0]}
                    />
                )}
            </div>

            <div className="input-group">
                <input
                    id="password"
                    name="password"
                    placeholder="Password"
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

            {/* <SubmitButton pendingText="Logging in...">
                <div className="auth-r">
                    <div className="r">Login</div>
                </div>
            </SubmitButton> */}
            <AppButton type="submit" pendingText="Logging in...">
                Login
            </AppButton>

            <Link href={AUTH_ROUTES.forgotPassword}>Forgot password?</Link>

            <Link href={AUTH_ROUTES.signUp}>
                <AppButton
                    className="button-full"
                    variant="outline"
                    type="button">
                    Click to register
                </AppButton>
            </Link>
        </form>
    );
}
