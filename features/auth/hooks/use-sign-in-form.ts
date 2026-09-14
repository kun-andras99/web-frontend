"use client";

import { signInAction } from "@/features/auth/lib/actions";
import type {
    ActionState,
    SignInFields,
} from "@/features/auth/types/auth-index";
import { useActionState } from "react";

const initialState: ActionState<SignInFields> = {
    status: "idle",
};

export function useSignInForm() {
    return useActionState(signInAction, initialState);
}
