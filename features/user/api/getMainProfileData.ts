"use client";

import { mainProfileSchema, profileHeaderSchema } from "@/features/user/schemas/profile-header.schema";
import type { MainProfileDatasDTO, UserHeaderDatasDTO } from "@/features/user/types/user";
import { http } from "@/lib/http/http-client";

export function getMainProfileDatas(
    userId: string,
    signal?: AbortSignal,
): Promise<MainProfileDatasDTO> {
    return http.get(
        `/api/users/${encodeURIComponent(userId)}/main-profile-data`,
        { schema: mainProfileSchema, signal },
    );
}