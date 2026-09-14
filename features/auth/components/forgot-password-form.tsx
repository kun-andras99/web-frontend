"use client";

import { FormMessage } from "@/features/auth/components/form-message";
import { SubmitButton } from "@/features/auth/components/submit-button";
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
        <form action={formAction} noValidate className="action-form">
            <div className="input-group">
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
            </div>

            {state.status === "error" && !state.fieldErrors && (
                <FormMessage status="error" message={state.message} />
            )}

            <SubmitButton className="submit" pendingText="Requesting...">
                Request password reset link
            </SubmitButton>
        </form>
    );
}
