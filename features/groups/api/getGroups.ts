import { GroupDTO } from "@/features/groups/repository/groupsDTO";

export async function getGroups(): Promise<GroupDTO[]> {
    const response = await fetch("/api/groups", {
        method: "GET",
        credentials: "include",
    });

    console.log(response);

    if (!response.ok) {
        throw new Error("A csoportok betöltése sikertelen.");
    }

    return response.json();
}
