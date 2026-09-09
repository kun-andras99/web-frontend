"use client";

import type {
    ActionState,
    SignInFields,
} from "@/features/auth/types/auth-index";
import { useActionState } from "react";

const initialState: ActionState<SignInFields> = {
    status: "idle",
};

async function submitSignIn(
    _prevState: ActionState<SignInFields>,
    formData: FormData,
): Promise<ActionState<SignInFields>> {
    try {
        const response = await fetch("/api/auth/sign-in", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: formData.get("email"),
                password: formData.get("password"),
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            return {
                status: "error",
                message: data.message ?? "A bejelentkezés során hiba történt.",
                fieldErrors: data.fieldErrors,
            };
        }

        return {
            status: "success",
            message: data.message,
            redirectTo: data.redirectTo,
        };
    } catch (error) {
        console.error("[SIGN-IN REQUEST ERROR]", error);

        return {
            status: "error",
            message:
                "Nem sikerült kapcsolódni a szerverhez. Kérjük, próbáld újra.",
        };
    }
}

export function useSignInForm() {
    return useActionState(submitSignIn, initialState);
}
