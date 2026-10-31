import { ApiError, NetworkError, RequestTimeoutError } from "@/lib/http/errors";

const MESSAGES: Record<string, string> = {
    USER_NOT_FOUND: "A felhasználó nem található.",
    CANNOT_MANAGE_SELF: "Saját magadat nem kezelheted.",
    FAVORITE_BLOCKED: "Tiltott felhasználót nem jelölhetsz kedvencnek.",
    RATE_LIMITED: "Túl sok művelet, várj egy kicsit.",
    INVALID_CURSOR: "A lista elavult, töltsd újra.",
    VALIDATION_ERROR: "Érvénytelen kérés.",
};

export function getManageUsersErrorMessage(error: unknown): string {
    if (error instanceof ApiError && error.code && MESSAGES[error.code])
        return MESSAGES[error.code];
    if (error instanceof NetworkError || error instanceof RequestTimeoutError) {
        return "Nincs kapcsolat, próbáld újra.";
    }
    return "Váratlan hiba történt, próbáld újra.";
}
