"use client";

import { forgotPasswordAction } from "@/features/auth/lib/actions";
import type {
    ActionState,
    ForgotPasswordFields,
} from "@/features/auth/types/auth-index";
import { useActionState } from "react";

const initialState: ActionState<ForgotPasswordFields> = { status: "idle" };

export function useForgotPasswordForm() {
    return useActionState(forgotPasswordAction, initialState);
}
