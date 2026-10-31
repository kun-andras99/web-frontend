import type { CreateProfileInput } from "@/lib/validations/profile";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

async function createProfile(input: CreateProfileInput) {
    const res = await fetch("/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
    });

    if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.message ?? "Nem sikerült létrehozni a profilt");
    }

    return res.json();
}

export function useCreateProfile() {
    const router = useRouter();

    return useMutation({
        mutationFn: createProfile,
        onSuccess: () => {
            // a szerver már újraírta a session cookie-t (hasProfile: true),
            // a refresh biztosítja hogy a middleware/RSC ezt lássa is
            router.replace("/");
            router.refresh();
        },
    });
}
