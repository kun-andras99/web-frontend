import { apiFetch } from "@/lib/http/auth-fetch";
import { UserDTO } from "@/features/user/types/user";

export async function getUser(userId: string): Promise<UserDTO> {
    const response = await apiFetch(`/api/users/${userId}`, {
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
