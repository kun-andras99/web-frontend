"use client";

import AuthButton from "@/features/auth/components/AuthButton";
import { FormMessage } from "@/features/auth/components/forms/FormMessage";
import { useForgotPasswordForm } from "@/features/auth/hooks/use-forgot-password-form";

export function ForgotPasswordForm() {
    const [state, formAction] = useForgotPasswordForm();

    if (state.status === "success") {
        return (
            <FormMessage
                status="success"
                message={state.message ?? "Elküldve."}
            />
        );
    }

    return (
        <section className="quick-login">
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
                    {state.status === "error" && state.fieldErrors?.email && (
                        <FormMessage
                            status="error"
                            message={state.fieldErrors.email[0]}
                        />
                    )}
                </label>
                {state.status === "error" && !state.fieldErrors && (
                    <FormMessage status="error" message={state.message} />
                )}
                <AuthButton
                    className="centered-button"
                    type="submit"
                    pendingText="Requesting...">
                    Request password reset link
                </AuthButton>
            </form>
        </section>
    );
}
