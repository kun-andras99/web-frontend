import { BOTTOM_ICON_COLORS } from "@/features/(app)/navigations/top-bar/icons/icons/icons.data";
import { BottomTabIconSVGProps } from "@/features/(app)/navigations/top-bar/icons/icons/icons.props";
import { useId } from "react";

export function InboxIconSVG({
    size = 28,
    startColor = BOTTOM_ICON_COLORS.startColor,
    stopColor = BOTTOM_ICON_COLORS.stopColor,
    backgroundStartColor = BOTTOM_ICON_COLORS.backgroundStartColor,
    backgroundStopColor = BOTTOM_ICON_COLORS.backgroundStopColor,
    strokeWidth = 1.25,
}: BottomTabIconSVGProps) {
    const id = useId().replace(/:/g, "");

    const fillGradient = `${id}-paint0`;
    const strokeGradient = `${id}-paint1`;

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            <path
                d="M3.5 14C3.5 8.20101 8.20101 3.5 14 3.5V3.5C19.799 3.5 24.5 8.20101 24.5 14V22C24.5 23.3807 23.3807 24.5 22 24.5H14C8.20101 24.5 3.5 19.799 3.5 14V14Z"
                fill={`url(#${fillGradient})`}
                fillOpacity="0.20"
                stroke={`url(#${strokeGradient})`}
                strokeWidth={strokeWidth}
            />

            <defs>
                <radialGradient
                    id={fillGradient}
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(13.5 14.4965) rotate(90) scale(14.0035 10.8424)">
                    <stop offset="0" stopColor={backgroundStartColor} />
                    <stop offset="1" stopColor={backgroundStopColor} />
                </radialGradient>

                <radialGradient
                    id={strokeGradient}
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(13.5 14.4965) rotate(90) scale(27.5035 11.272)">
                    <stop offset="0" stopColor={backgroundStartColor} />
                    <stop offset="1" stopColor={backgroundStopColor} />
                </radialGradient>
            </defs>
        </svg>
    );
}

export default InboxIconSVG;

<svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
        d="M3.5 14C3.5 8.20101 8.20101 3.5 14 3.5V3.5C19.799 3.5 24.5 8.20101 24.5 14V22C24.5 23.3807 23.3807 24.5 22 24.5H14C8.20101 24.5 3.5 19.799 3.5 14V14Z"
        fill="url(#paint0_radial_102_500)"
        fill-opacity="0.2"
        stroke="url(#paint1_radial_102_500)"
        stroke-width="1.5"
    />
    <defs>
        <radialGradient
            id="paint0_radial_102_500"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(13.5 14.4965) rotate(90) scale(14.0035 10.8424)">
            <stop stop-color="#DEDEDE" />
            <stop offset="1" stop-color="#808080" />
        </radialGradient>
        <radialGradient
            id="paint1_radial_102_500"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(13.5 14.4965) rotate(90) scale(27.5035 11.272)">
            <stop stop-color="#DEDEDE" />
            <stop offset="1" stop-color="#808080" />
        </radialGradient>
    </defs>
</svg>;
