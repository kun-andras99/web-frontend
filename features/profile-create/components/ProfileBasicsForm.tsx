"use client";

import type { Dispatch, SetStateAction } from "react";

import type { ProfileCreateForm } from "../types/profileCreate";

import { ProfileAvatarUploader } from "./ProfileAvatarUploader";

interface ProfileBasicsFormProps {
    form: ProfileCreateForm;
    setForm: Dispatch<SetStateAction<ProfileCreateForm>>;
    onNext: () => void;
}

export function ProfileBasicsForm({
    form,
    setForm,
    onNext,
}: ProfileBasicsFormProps) {
    const nicknameLength = form.nickname.trim().length;

    const isValid =
        nicknameLength >= 3 && nicknameLength <= 8 && Boolean(form.birth);

    function updateNickname(value: string) {
        if (value.length > 8) {
            return;
        }

        setForm((current) => ({
            ...current,
            nickname: value,
        }));
    }

    function updateAvatar(file: File) {
        const preview = URL.createObjectURL(file);

        setForm((current) => ({
            ...current,
            avatar: file,
            avatarPreview: preview,
        }));
    }

    return (
        <div className="profile-create-form">
            <div className="profile-create-form__header">
                <span className="profile-create-form__step">1 / 2</span>

                <h2>Alapadatok</h2>

                <p>Néhány alapadat, hogy létrehozhassuk a profilodat.</p>
            </div>

            <div className="profile-create-field">
                <label htmlFor="nickname">Megjelenített név</label>

                <input
                    id="nickname"
                    type="text"
                    value={form.nickname}
                    onChange={(event) => updateNickname(event.target.value)}
                    placeholder="Pl. Andris"
                    minLength={3}
                    maxLength={8}
                    autoComplete="nickname"
                />

                <div className="profile-create-field__meta">
                    <span>Minimum 3, maximum 8 karakter</span>

                    <span>{nicknameLength}/8</span>
                </div>
            </div>

            <div className="profile-create-field">
                <label htmlFor="birth">Születési idő</label>

                <input
                    id="birth"
                    type="date"
                    value={form.birth}
                    onChange={(event) =>
                        setForm((current) => ({
                            ...current,
                            birth: event.target.value,
                        }))
                    }
                    max={new Date().toISOString().split("T")[0]}
                />
            </div>

            <div className="profile-create-field">
                <label>Profilkép</label>

                <ProfileAvatarUploader
                    preview={form.avatarPreview}
                    onChange={updateAvatar}
                />
            </div>

            <button
                type="button"
                disabled={!isValid}
                onClick={onNext}
                className="profile-create-button">
                Tovább
            </button>
        </div>
    );
}
