"use client";

import { DEFAULT_AVATAR } from "@/features/love-wall/constants";
import Image from "next/image";
import { useState } from "react";

interface Props {
    src: string | null;
    size?: number;
}

/** Dísz elem: a név mellette van, ezért üres alt. Hibás URL esetén fallback. */
export default function Avatar({ src, size = 34 }: Props) {
    const [failed, setFailed] = useState(false);

    return (
        <Image
            src={failed || !src ? DEFAULT_AVATAR : src}
            alt=""
            width={size}
            height={size}
            className="avatar"
            onError={() => setFailed(true)}
        />
    );
}
