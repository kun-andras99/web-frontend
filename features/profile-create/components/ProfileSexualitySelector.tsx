"use client";

import { Gender, Sexuality } from "../../../prisma/generated/prisma";

interface ProfileSexualitySelectorProps {
    gender: Gender | null;
    value: Sexuality | null;
    onChange: (sexuality: Sexuality) => void;
}

const sexualityLabels: Record<Sexuality, string> = {
    STRAIGHT: "Heteroszexuális",
    GAY: "Meleg",
    LESBIAN: "Leszbikus",
    BISEXUAL: "Biszexuális",
    PANSEXUAL: "Pánszexuális",
    ASEXUAL: "Aszexuális",
    QUEER: "Különös",
    OMNISEXUAL: "Omniszexuális",
    DEMISEXUAL: "Demiszexuális",
    QUESTIONING: "Nem vagyok biztos",
    OTHER: "Egyéb",
    PREFER_NOT_TO_SAY: "Nem árulom el",
};

const maleSexualities: Sexuality[] = [
    "STRAIGHT",
    "BISEXUAL",
    "GAY",
    "PANSEXUAL",
    "ASEXUAL",
    "QUEER",
    "OMNISEXUAL",
    "DEMISEXUAL",
    "QUESTIONING",
    "OTHER",
    "PREFER_NOT_TO_SAY",
];

const femaleSexualities: Sexuality[] = [
    "STRAIGHT",
    "BISEXUAL",
    "LESBIAN",
    "PANSEXUAL",
    "ASEXUAL",
    "QUEER",
    "OMNISEXUAL",
    "DEMISEXUAL",
    "QUESTIONING",
    "OTHER",
    "PREFER_NOT_TO_SAY",
];

function getAllowedSexualities(gender: Gender | null) {
    if (gender === "MAN") {
        return maleSexualities;
    }

    if (gender === "WOMAN") {
        return femaleSexualities;
    }

    return [];
}

export function ProfileSexualitySelector({
    gender,
    value,
    onChange,
}: ProfileSexualitySelectorProps) {
    const sexualities = getAllowedSexualities(gender);

    return (
        <div className="profile-sexuality">
            <div className="profile-sexuality__header">
                <h3>Szexualitás</h3>

                <span>Válaszd ki a hozzád leginkább illőt.</span>
            </div>

            <div className="profile-sexuality__options">
                {sexualities.map((sexuality) => {
                    const selected = value === sexuality;

                    return (
                        <button
                            key={sexuality}
                            type="button"
                            className={selected ? "is-selected" : ""}
                            onClick={() => onChange(sexuality)}>
                            {sexualityLabels[sexuality]}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
