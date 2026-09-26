"use client";

import type { Dispatch, SetStateAction } from "react";


import type { ProfileCreateForm } from "../types/profileCreate";

import { ProfileSexualitySelector } from "./ProfileSexualitySelector";
import { Gender } from "../../../prisma/generated/prisma";

interface ProfileIdentityFormProps {
    form: ProfileCreateForm;
    setForm: Dispatch<SetStateAction<ProfileCreateForm>>;
    onBack: () => void;
    onSubmit: () => void;
    isPending: boolean;
}

const genderLabels: Record<Gender, string> = {
    MAN: "Férfi",
    WOMAN: "Nő",
};

const genders: Gender[] = ["MAN", "WOMAN"];

export function ProfileIdentityForm({
    form,
    setForm,
    onBack,
    onSubmit,
    isPending,
}: ProfileIdentityFormProps) {
    const isValid = Boolean(form.gender) && Boolean(form.sexuality);

    function handleGenderChange(gender: Gender) {
        setForm((current) => ({
            ...current,
            gender,
            sexuality: null,
        }));
    }

    return (
        <div className="profile-create-form">
            <div className="profile-create-form__header">
                <span className="profile-create-form__step">2 / 2</span>

                <h2>Ki vagy?</h2>

                <p>Válaszd ki a nemedet és a szexualitásodat.</p>
            </div>

            <div className="profile-create-field">
                <label>Nem</label>

                <div className="profile-gender-options">
                    {genders.map((gender) => (
                        <button
                            key={gender}
                            type="button"
                            className={
                                form.gender === gender ? "is-selected" : ""
                            }
                            onClick={() => handleGenderChange(gender)}>
                            {genderLabels[gender]}
                        </button>
                    ))}
                </div>
            </div>

            <ProfileSexualitySelector
                gender={form.gender}
                value={form.sexuality}
                onChange={(sexuality) =>
                    setForm((current) => ({
                        ...current,
                        sexuality,
                    }))
                }
            />

            <div className="profile-create-form__actions">
                <button
                    type="button"
                    onClick={onBack}
                    disabled={isPending}
                    className="profile-create-button profile-create-button--secondary">
                    Vissza
                </button>

                <button
                    type="button"
                    disabled={!isValid || isPending}
                    onClick={onSubmit}
                    className="profile-create-button">
                    {isPending ? "Profil létrehozása..." : "Profil létrehozása"}
                </button>
            </div>
        </div>
    );
}
