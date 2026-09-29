import type { CSSProperties } from "react";
import { getInitials, hueFromString } from "../../utils/group-ui";

interface AvatarProps {
    name: string;
    /** a színt ebből számoljuk (id-ból, hogy a név változása ne színezze át) */
    seed: string;
    size?: "sm" | "md" | "lg";
}

export default function Avatar({ name, seed, size = "md" }: AvatarProps) {
    return (
        <span
            className={`gd-avatar gd-avatar--${size}`}
            style={{ "--gd-hue": hueFromString(seed) } as CSSProperties}
            aria-hidden>
            {getInitials(name)}
        </span>
    );
}
