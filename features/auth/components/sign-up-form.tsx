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
                <input
                    id="username"
                    name="username"
                    placeholder="username"
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
                <input
                    id="password"
                    name="password"
                    placeholder="********"
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
                    placeholder="******* ********"
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

            <SubmitButton pendingText="Registrating...">
                <div className="auth-r">
                    <div className="r">Registration</div>
                </div>
            </SubmitButton>

            <Link href={AUTH_ROUTES.signIn}>
                <div className="auth-r">
                    <div className="b">Click to login</div>
                </div>
            </Link>
        </form>
    );
}
