"use client";

import type { Dispatch, SetStateAction } from "react";

import type { ProfileCreateForm } from "../types/profileCreate";

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

    // function updateAvatar(file: File) {
    //     const preview = URL.createObjectURL(file);

    //     setForm((current) => ({
    //         ...current,
    //         avatar: file,
    //         avatarPreview: preview,
    //     }));
    // }

    return (
        <div className="profile-create-form">
            {/* <div className="profile-create-form__header">
                <span className="profile-create-form__step">1 / 2</span>
            </div> */}

            <div className="profile-create-field">
                <h2>Hogyan szólíthatunk?</h2>
                <input
                    id="nickname"
                    type="text"
                    value={form.nickname}
                    onChange={(event) => updateNickname(event.target.value)}
                    placeholder="Nickname"
                    minLength={3}
                    maxLength={8}
                    autoComplete="nickname"
                    className={`app-input`}
                />
                <p>Más felhasználók ezt a nevet fogják látni.</p>
            </div>

            <div className="profile-create-field">
                <h2>Mikor születtél?</h2>
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

            {/* <div className="profile-create-field">
                <ProfileAvatarUploader
                    preview={form.avatarPreview}
                    onChange={updateAvatar}
                />
            </div> */}

            <button
                type="button"
                disabled={!isValid}
                onClick={onNext}
                className="app-button">
                Tovább
            </button>
        </div>
    );
}
