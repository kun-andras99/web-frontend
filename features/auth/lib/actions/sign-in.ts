"use server";

import type {
    ActionState,
    SignInFields,
} from "@/features/auth/types/auth-index";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { authenticateCredentials } from "../authenticate";
import { clientMetaFromHeaders } from "../client-meta";
import { setAuthCookies } from "../cookies";

export async function signInAction(
    _prevState: ActionState<SignInFields>,
    formData: FormData,
): Promise<ActionState<SignInFields>> {
    const result = await authenticateCredentials(
        {
            identifier: formData.get("identifier"),
            password: formData.get("password"),
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
