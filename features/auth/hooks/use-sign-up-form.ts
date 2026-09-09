"use client";

import type {
    ActionState,
    SignUpFields,
} from "@/features/auth/types/auth-index";
import { useActionState } from "react";

const initialState: ActionState<SignUpFields> = {
    status: "idle",
};

async function submitSignUp(
    _prevState: ActionState<SignUpFields>,
    formData: FormData,
): Promise<ActionState<SignUpFields>> {
    try {
        const response = await fetch("/api/auth/sign-up", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: formData.get("username"),
                email: formData.get("email"),
                password: formData.get("password"),
                confirmPassword: formData.get("confirmPassword"),
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            return {
                status: "error",
                message: data.message ?? "A regisztráció során hiba történt.",
                fieldErrors: data.fieldErrors,
            };
        }

        return {
            status: "success",
            message: data.message,
            redirectTo: data.redirectTo,
        };
    } catch (error) {
        console.error("Sign-up request error:", error);

        return {
            status: "error",
            message:
                "Nem sikerült kapcsolódni a szerverhez. Kérjük, próbáld újra.",
        };
    }
}

export function useSignUpForm() {
    return useActionState(submitSignUp, initialState);
}
