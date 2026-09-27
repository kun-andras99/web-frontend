import type { CreateProfileDTO } from "@/features/profile-create/repositories/profileCreateDTO";
import type { CreateProfilePayload } from "@/features/profile-create/types/profileCreate";

export function mapProfileCreateToDTO(
    payload: CreateProfilePayload,
    userId: string,
): CreateProfileDTO {
    return {
        userId,
        nickname: payload.nickname.trim(),
        birth: new Date(payload.birth),
        gender: payload.gender,
        sexuality: payload.sexuality,
        appCity: payload.appCity,
    };
}
