"use client";

import { profileHeaderSchema } from "@/features/user/schemas/profile-header.schema";
import type { UserHeaderDatasDTO } from "@/features/user/types/user";
import { http } from "@/lib/http/http-client";

export function getUserHeaderDatas(
    userId: string,
    signal?: AbortSignal,
): Promise<UserHeaderDatasDTO> {
    return http.get(
        `/api/users/${encodeURIComponent(userId)}/profile-header-data`,
        { schema: profileHeaderSchema, signal },
    );
}
