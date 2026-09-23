import type { CityStatsDTO } from "@/features/city/repository/cityDTO";

export async function getCityStats(): Promise<CityStatsDTO> {
    const response = await fetch("/api/city", {
        method: "GET",
        credentials: "include",
    });

    if (!response.ok) {
        throw new Error("A városi adatok betöltése sikertelen.");
    }

    return response.json();
}
