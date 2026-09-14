"use client";

import { signUpAction } from "@/features/auth/lib/actions";
import type {
    ActionState,
    SignUpFields,
} from "@/features/auth/types/auth-index";
import { useActionState } from "react";

const initialState: ActionState<SignUpFields> = {
    status: "idle",
};

export function useSignUpForm() {
    return useActionState(signUpAction, initialState);
}
