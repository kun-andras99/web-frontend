"use server";

import type {
    ActionState,
    SignUpFields,
} from "@/features/auth/types/auth-index";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { clientMetaFromHeaders } from "../client-meta";
import { setAuthCookies } from "../cookies";
import { registerCredentials } from "../register";

export async function signUpAction(
    _prevState: ActionState<SignUpFields>,
    formData: FormData,
): Promise<ActionState<SignUpFields>> {
    const result = await registerCredentials(
        {
            username: formData.get("username"),
            email: formData.get("email"),
            password: formData.get("password"),
            confirmPassword: formData.get("confirmPassword"),
        },
        clientMetaFromHeaders(await headers()),
    );

    if (!result.ok) {
        return result.state;
    }

    await setAuthCookies(result.accessToken, result.refreshToken);

    if (result.state.redirectTo) {
        redirect(result.state.redirectTo);
    }

    return result.state;
}
