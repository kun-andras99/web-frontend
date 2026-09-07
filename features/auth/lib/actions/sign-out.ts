"use server";

import { redirect } from "next/navigation";
import { clearAuthCookies, getRefreshTokenFromCookies } from "@/features/auth/lib/cookies";
import { AUTH_ROUTES } from "@/features/auth/lib/constants";
import { findRefreshTokenByRawValue, revokeRefreshTokenById } from "@/features/auth/data/refresh-token";

export async function signOutAction(): Promise<void> {
  const rawRefreshToken = await getRefreshTokenFromCookies();

  if (rawRefreshToken) {
    const existing = await findRefreshTokenByRawValue(rawRefreshToken);
    if (existing && !existing.revokedAt) {
      await revokeRefreshTokenById(existing.id);
    }
  }

  await clearAuthCookies();
  redirect(AUTH_ROUTES.signIn);
}
