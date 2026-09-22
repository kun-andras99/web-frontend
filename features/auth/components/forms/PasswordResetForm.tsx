"use client";

import AppButton from "@/features/_components/button/AppButton";
import { FormMessage } from "@/features/auth/components/forms/FormMessage";
import { useResetPasswordForm } from "@/features/auth/hooks/use-reset-password-form";
import { AUTH_ROUTES } from "@/features/auth/lib/constants";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface ResetPasswordFormProps {
    token: string;
}

export function ResetPasswordForm({ token }: ResetPasswordFormProps) {
    const [state, formAction] = useResetPasswordForm(token);
    const router = useRouter();

    useEffect(() => {
        if (state.status !== "success") return;
        const timeout = setTimeout(() => router.push(AUTH_ROUTES.signIn), 2000);
        return () => clearTimeout(timeout);
    }, [state.status, router]);

    if (state.status === "success") {
        return (
            <FormMessage status="success" message={state.message ?? "Kész."} />
        );
    }

    return (
        <section className="quick-login">
            <form action={formAction} noValidate>
                <div>
                    <label htmlFor="password">Új jelszó</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        required
                    />
                    {state.status === "error" &&
                        state.fieldErrors?.password && (
                            <FormMessage
                                status="error"
                                message={state.fieldErrors.password[0]}
                            />
                        )}
                </div>

                <div>
                    <label htmlFor="confirmPassword">
                        Új jelszó megerősítése
                    </label>
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        autoComplete="new-password"
                        required
                    />
                    {state.status === "error" &&
                        state.fieldErrors?.confirmPassword && (
                            <FormMessage
                                status="error"
                                message={state.fieldErrors.confirmPassword[0]}
                            />
                        )}
                </div>

                {state.status === "error" && !state.fieldErrors && (
                    <FormMessage status="error" message={state.message} />
                )}

                <AppButton pendingText="Mentés…">Jelszó módosítása</AppButton>
            </form>
        </section>
    );
}
