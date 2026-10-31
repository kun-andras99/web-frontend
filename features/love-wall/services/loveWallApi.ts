import { API_BASE, PAGE_SIZE } from "@/features/love-wall/constants";
import { LoveMessage, MessagePage } from "@/features/love-wall/types";

async function request<T>(url: string, init?: RequestInit): Promise<T> {
    const response = await fetch(url, {
        ...init,
        headers: { "Content-Type": "application/json", ...init?.headers },
    });

    if (!response.ok) {
        throw new Error(`Love wall request failed (${response.status})`);
    }

    if (response.status === 204) return undefined as T;
    return (await response.json()) as T;
}

export const loveWallApi = {
    list(cursor?: string | null, signal?: AbortSignal) {
        const params = new URLSearchParams({ limit: String(PAGE_SIZE) });
        if (cursor) params.set("cursor", cursor);

        return request<MessagePage>(`${API_BASE}?${params}`, { signal });
    },

    create(message: string) {
        return request<LoveMessage>(API_BASE, {
            method: "POST",
            body: JSON.stringify({ message }),
        });
    },

    report(id: string) {
        return request<void>(`${API_BASE}/${id}/report`, { method: "POST" });
    },
};
