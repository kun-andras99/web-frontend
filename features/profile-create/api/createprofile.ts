import type {
    CreateProfilePayload,
    CreateProfileResponse,
} from "@/features/profile-create/types/profileCreate";

export async function createProfile(
    payload: CreateProfilePayload,
): Promise<CreateProfileResponse> {
    const formData = new FormData();

    formData.append("nickname", payload.nickname);
    formData.append("birth", payload.birth);
    formData.append("gender", payload.gender);
    formData.append("sexuality", payload.sexuality);
    formData.append("appCity", payload.appCity);

    if (payload.avatar) {
        formData.append("avatar", payload.avatar);
    }

    const response = await fetch("/api/profile/create", {
        method: "POST",
        body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message ?? "A profil létrehozása sikertelen.");
    }

    return data;
}
