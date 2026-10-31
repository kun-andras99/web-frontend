import { ApiError, NetworkError, RequestTimeoutError } from "@/lib/http/errors";

const MESSAGES: Record<string, string> = {
    CONVERSATION_NOT_FOUND: "A beszélgetés nem található.",
    USER_NOT_FOUND: "A felhasználó nem található.",
    CANNOT_MESSAGE_SELF: "Saját magadnak nem írhatsz.",
    MESSAGING_NOT_ALLOWED:
        "Ennek a felhasználónak most nem küldhetsz üzenetet.",
    RATE_LIMITED: "Túl gyorsan küldesz üzeneteket, várj egy kicsit.",
    VALIDATION_ERROR: "Az üzenet üres vagy túl hosszú.",
};

export function getChatErrorMessage(error: unknown): string {
    if (error instanceof ApiError && error.code && MESSAGES[error.code])
        return MESSAGES[error.code];
    if (error instanceof NetworkError || error instanceof RequestTimeoutError) {
        return "Nincs kapcsolat, próbáld újra.";
    }
    return "Váratlan hiba történt, próbáld újra.";
}
