"use client";

import { resetPasswordAction } from "@/features/auth/lib/actions";
import type {
    ActionState,
    ResetPasswordFields,
} from "@/features/auth/types/auth-index";
import { useActionState } from "react";

const initialState: ActionState<ResetPasswordFields> = { status: "idle" };

export function useResetPasswordForm(token: string) {
    const boundAction = resetPasswordAction.bind(null, token);
    return useActionState(boundAction, initialState);
}
