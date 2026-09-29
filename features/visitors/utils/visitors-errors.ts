import { NetworkError, RequestTimeoutError } from "@/lib/http/errors";

export function getVisitorsErrorMessage(error: unknown): string {
    if (error instanceof NetworkError || error instanceof RequestTimeoutError) {
        return "Nincs kapcsolat, próbáld újra.";
    }
    return "Hiba történt a látogatók betöltésekor.";
}
