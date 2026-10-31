import {
    SEXUALITIES,
    type Gender,
    type SexualityValue,
} from "@/lib/validations/profile";

const LABELS: Record<SexualityValue, string> = {
    STRAIGHT: "Heteroszexuális",
    GAY: "Meleg",
    LESBIAN: "Leszbikus",
    BISEXUAL: "Biszexuális",
    PANSEXUAL: "Pánszexuális",
    ASEXUAL: "Aszexuális",
    DEMISEXUAL: "Demiszexuális",
    QUEER: "Queer",
    OMNISEXUAL: "Omniszexuális",
    QUESTIONING: "Bizonytalan",
    OTHER: "Egyéb",
    PREFER_NOT_TO_SAY: "Nem szeretném megadni",
};

export function getSexualityOptions(
    gender: Gender | null,
): { value: SexualityValue; label: string }[] {
    if (!gender) return [];

    const excluded: SexualityValue = gender === "MAN" ? "LESBIAN" : "GAY";

    return SEXUALITIES.filter((value) => value !== excluded).map((value) => ({
        value,
        label: LABELS[value],
    }));
}
