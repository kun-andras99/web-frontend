"use client";

import { useRef } from "react";

interface ProfileAvatarUploaderProps {
    preview: string | null;
    onChange: (file: File) => void;
}

export function ProfileAvatarUploader({
    preview,
    onChange,
}: ProfileAvatarUploaderProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];

        if (!file) {
            return;
        }

        if (!file.type.startsWith("image/")) {
            return;
        }

        onChange(file);
    }

    return (
        <div className="profile-avatar-uploader">
            <button
                type="button"
                className="profile-avatar-uploader__button"
                onClick={() => inputRef.current?.click()}>
                {preview ? (
                    <img
                        src={preview}
                        alt="Profilkép előnézet"
                        className="profile-avatar-uploader__preview"
                    />
                ) : (
                    <span>+ Kép feltöltése</span>
                )}
            </button>

            <input
                ref={inputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleChange}
                hidden
            />
        </div>
    );
}
