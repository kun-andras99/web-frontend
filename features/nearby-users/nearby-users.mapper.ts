import { NearbyUserDTO } from "@/features/nearby-users/schemas/nearby.schema";
import { NearbyProfileData } from "@/features/nearby-users/server/nearby.repository";
import { formatGender } from "@/lib/utils/formatGender";
import { calculateAge } from "@/lib/validations/profile";

export function toNearbyUserDTO(
    entry: { id: string; distanceKm: number },
    profile: NearbyProfileData,
): NearbyUserDTO {
    const userData = profile.userData;

    return {
        id: profile.id,
        nickname: userData?.nickname ?? null,
        avatarUrl: userData?.avatarUrl ?? null,
        genderLabel: formatGender(userData?.gender) ?? null,
        age: (userData?.birth ? calculateAge(userData.birth) : null) ?? null,
        distanceKm: entry.distanceKm,
    };
}
