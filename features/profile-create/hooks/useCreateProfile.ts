"use client";

import { createProfile } from "@/features/profile-create/api/createprofile";
import { useMutation } from "@tanstack/react-query";

export function useCreateProfile() {
    return useMutation({
        mutationFn: createProfile,
    });
}
