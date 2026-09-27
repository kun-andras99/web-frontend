"use client";

import { AppCity, Gender, Sexuality } from "../../../prisma/generated/prisma";

interface ProfileAppCitySelectorProps {
    gender: Gender | null;
    sexuality: Sexuality | null;
    value: AppCity | null;
    onChange: (appCity: AppCity) => void;
}

const appCityLabels: Record<AppCity, string> = {
    CENTRUM: "Centrum",
    STRAIGHT: "Heteroszexuális negyed",
    BISEXUAL: "Biszexuális negyed",
    GAY: "Meleg negyed",
    LESBIAN: "Leszbikus negyed",
    TRANS: "Transz negyed",
};

function getAllowedAppCities(
    gender: Gender | null,
    sexuality: Sexuality | null,
): AppCity[] {
    if (!gender || !sexuality) {
        return [];
    }
    if (gender === Gender.MAN) {
        if (sexuality === Sexuality.STRAIGHT) {
            return [AppCity.CENTRUM, AppCity.STRAIGHT, AppCity.BISEXUAL];
        }
        if (sexuality === Sexuality.BISEXUAL) {
            return [AppCity.CENTRUM, AppCity.BISEXUAL, AppCity.GAY];
        }
        return [
            AppCity.CENTRUM,
            AppCity.STRAIGHT,
            AppCity.BISEXUAL,
            AppCity.GAY,
        ];
    }

    if (gender === Gender.WOMAN) {
        if (sexuality === Sexuality.STRAIGHT) {
            return [AppCity.CENTRUM, AppCity.STRAIGHT, AppCity.BISEXUAL];
        }
        if (sexuality === Sexuality.BISEXUAL) {
            return [AppCity.CENTRUM, AppCity.BISEXUAL, AppCity.LESBIAN];
        }
        return [
            AppCity.CENTRUM,
            AppCity.STRAIGHT,
            AppCity.BISEXUAL,
            AppCity.LESBIAN,
        ];
    }

    if (gender === Gender.TRANS_MAN) {
        if (sexuality === Sexuality.STRAIGHT) {
            return [
                AppCity.CENTRUM,
                AppCity.STRAIGHT,
                AppCity.BISEXUAL,
                AppCity.TRANS,
            ];
        }
        if (sexuality === Sexuality.BISEXUAL) {
            return [
                AppCity.CENTRUM,
                AppCity.BISEXUAL,
                AppCity.GAY,
                AppCity.TRANS,
            ];
        }
        return [
            AppCity.CENTRUM,
            AppCity.STRAIGHT,
            AppCity.BISEXUAL,
            AppCity.GAY,
            AppCity.TRANS,
        ];
    }

    if (gender === Gender.TRANS_WOMAN) {
        if (sexuality === Sexuality.STRAIGHT) {
            return [
                AppCity.CENTRUM,
                AppCity.STRAIGHT,
                AppCity.LESBIAN,
                AppCity.TRANS,
            ];
        }
        if (sexuality === Sexuality.BISEXUAL) {
            return [
                AppCity.CENTRUM,
                AppCity.BISEXUAL,
                AppCity.LESBIAN,
                AppCity.TRANS,
            ];
        }
        return [
            AppCity.CENTRUM,
            AppCity.STRAIGHT,
            AppCity.BISEXUAL,
            AppCity.LESBIAN,
            AppCity.TRANS,
        ];
    }

    return [];
}

export function ProfileAppCitySelector({
    gender,
    sexuality,
    value,
    onChange,
}: ProfileAppCitySelectorProps) {
    const cities = getAllowedAppCities(gender, sexuality);

    return (
        <div className="profile-sexuality">
            <h2>Negyed</h2>
            <div className="profile-sexuality__options">
                {cities.map((city) => {
                    const selected = value === city;

                    return (
                        <button
                            key={city}
                            type="button"
                            className={selected ? "is-selected" : ""}
                            onClick={() => onChange(city)}>
                            {appCityLabels[city]}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
