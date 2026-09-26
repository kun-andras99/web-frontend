"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useUploadAvatar } from "../hooks/useUploadAvatar";
import { useProfileWizardStore } from "../store/useProfileWizardStore";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_SIZE_BYTES = 5 * 1024 * 1024;

export function AvatarUploader() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<string | null>(null);

    const previewUrl = useProfileWizardStore((s) => s.avatarPreviewUrl);
    const setAvatarPreview = useProfileWizardStore((s) => s.setAvatarPreview);
    const setAvatarUploadedUrl = useProfileWizardStore(
        (s) => s.setAvatarUploadedUrl,
    );
    const upload = useUploadAvatar();

    function handleFile(file: File) {
        setError(null);

        if (!ALLOWED_TYPES.includes(file.type)) {
            setError("Csak JPEG, PNG vagy WEBP kép tölthető fel");
            return;
        }
        if (file.size > MAX_SIZE_BYTES) {
            setError("A kép legfeljebb 5 MB lehet");
            return;
        }

        const preview = URL.createObjectURL(file);
        setAvatarPreview(file, preview);

        upload.mutate(file, {
            onSuccess: (data) => setAvatarUploadedUrl(data.url),
            onError: (err) =>
                setError(
                    err instanceof Error
                        ? err.message
                        : "Hiba történt a feltöltéskor",
                ),
        });
    }

    return (
        <div className="flex flex-col items-center gap-2">
            <motion.button
                type="button"
                whileTap={{ scale: 0.96 }}
                onClick={() => inputRef.current?.click()}
                className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 border-dashed border-neutral-300 bg-neutral-50">
                {previewUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={previewUrl}
                        alt="Profilkép előnézet"
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <span className="px-2 text-center text-xs text-neutral-500">
                        Kép feltöltése
                    </span>
                )}

                {upload.isPending && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-xs text-white">
                        Feltöltés...
                    </div>
                )}
            </motion.button>

            <input
                ref={inputRef}
                type="file"
                accept={ALLOWED_TYPES.join(",")}
                className="hidden"
                onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleFile(file);
                }}
            />

            {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
    );
}
