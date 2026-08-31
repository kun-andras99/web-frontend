import type { User } from "@/lib/db/types/user.types";

export function useUserSelector<T>(
    user: User | null,
    selector: (user: User) => T,
): T | null {
    if (!user) {
        return null;
    }

    return selector(user);
}
