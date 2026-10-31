import type {
    CreateProfilePayload,
    CreateProfileResponse,
} from "@/features/profile-create/types/profileCreate";
import { http } from "@/lib/http/http-client";
import { z } from "zod";

const createProfileResponseSchema = z.object({ success: z.boolean() });

export async function createProfile(
    payload: CreateProfilePayload,
): Promise<CreateProfileResponse> {
    const formData = new FormData();

    formData.append("nickname", payload.nickname);
    formData.append("birth", payload.birth);
    formData.append("gender", payload.gender);
    formData.append("sexuality", payload.sexuality);
    formData.append("appCity", payload.appCity);

    return http.post("/api/profile/create", {
        schema: createProfileResponseSchema,
        body: formData,
    });
}
