import {
    ManagedUserDTO,
    RelationStatus,
} from "@/features/manage-users/schemas/manage-users.schema";
import {
    ManagedProfileData,
    RelationFlags,
} from "@/features/manage-users/server/manage-users.repository";

export function toManagedUserDTO(
    profile: ManagedProfileData,
    statuses: RelationStatus[],
): ManagedUserDTO {
    return {
        id: profile.id,
        nickname: profile.userData?.nickname ?? null,
        avatarUrl: profile.userData?.avatarUrl ?? null,
        statuses,
    };
}

/** Fix sorrend: barát, kedvenc, tiltott. */
export function toStatuses(flags: RelationFlags): RelationStatus[] {
    return [
        ...(flags.friend ? (["FRIEND"] as const) : []),
        ...(flags.favorite ? (["FAVORITE"] as const) : []),
        ...(flags.blocked ? (["BLOCKED"] as const) : []),
    ];
}
