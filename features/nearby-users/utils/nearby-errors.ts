import { ApiError, NetworkError, RequestTimeoutError } from "@/lib/http/errors";

/** A helymegosztás hiánya nem hiba, hanem külön állapot, amit a UI külön üzenettel mutat. */
export function isLocationRequiredError(error: unknown): boolean {
    return (
        error instanceof ApiError &&
        (error.code === "LOCATION_DISABLED" ||
            error.code === "LOCATION_REQUIRED")
    );
}

export function getNearbyErrorMessage(error: unknown): string {
    if (error instanceof NetworkError || error instanceof RequestTimeoutError) {
        return "Nincs kapcsolat, próbáld újra.";
    }
    return "Hiba történt a közeli felhasználók betöltésekor.";
}
