"use client";

import { AppCity, Gender, Sexuality } from "../../../prisma/generated/prisma";

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

function getAllowedSexualities(gender: Gender | null): Sexuality[] {
    if (gender === Gender.MAN) {
        return [
            Sexuality.STRAIGHT,
            Sexuality.BISEXUAL,
            Sexuality.GAY,
            Sexuality.PANSEXUAL,
            Sexuality.ASEXUAL,
            Sexuality.QUEER,
            Sexuality.OMNISEXUAL,
            Sexuality.DEMISEXUAL,
            Sexuality.QUESTIONING,
            Sexuality.OTHER,
            Sexuality.PREFER_NOT_TO_SAY,
        ];
    }

    if (gender === Gender.WOMAN) {
        return [
            Sexuality.STRAIGHT,
            Sexuality.BISEXUAL,
            Sexuality.LESBIAN,
            Sexuality.PANSEXUAL,
            Sexuality.ASEXUAL,
            Sexuality.QUEER,
            Sexuality.OMNISEXUAL,
            Sexuality.DEMISEXUAL,
            Sexuality.QUESTIONING,
            Sexuality.OTHER,
            Sexuality.PREFER_NOT_TO_SAY,
        ];
    }

    if (gender === Gender.TRANS_MAN) {
        return [
            Sexuality.STRAIGHT,
            Sexuality.BISEXUAL,
            Sexuality.GAY,
            Sexuality.PANSEXUAL,
            Sexuality.ASEXUAL,
            Sexuality.QUEER,
            Sexuality.OMNISEXUAL,
            Sexuality.DEMISEXUAL,
            Sexuality.QUESTIONING,
            Sexuality.OTHER,
            Sexuality.PREFER_NOT_TO_SAY,
        ];
    }

    if (gender === Gender.TRANS_WOMAN) {
        return [
            Sexuality.STRAIGHT,
            Sexuality.BISEXUAL,
            Sexuality.LESBIAN,
            Sexuality.PANSEXUAL,
            Sexuality.ASEXUAL,
            Sexuality.QUEER,
            Sexuality.OMNISEXUAL,
            Sexuality.DEMISEXUAL,
            Sexuality.QUESTIONING,
            Sexuality.OTHER,
            Sexuality.PREFER_NOT_TO_SAY,
        ];
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
            {/* <div className="profile-sexuality__header">
                <h2>Szexualitás</h2>

                <span>Válaszd ki a hozzád leginkább illőt.</span>
            </div> */}
            {gender ? <h2>Szexualitás</h2> : ""}

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
