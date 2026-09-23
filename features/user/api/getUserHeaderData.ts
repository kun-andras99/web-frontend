"use client";

import { UserHeaderDatasDTO } from "@/features/user/types/user";

export async function getUserHeaderDatas(
    userId: string,
): Promise<UserHeaderDatasDTO> {
    const response = await fetch(`/api/users/${userId}/profile-header-data`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("A felhasználó nem található.");
    }

    return response.json();
}
