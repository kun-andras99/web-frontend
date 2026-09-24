import { BOTTOM_ICON_COLORS } from "@/features/(app)/(ui)/top-bar/icons/icons/icons.data";
import { BottomTabIconSVGProps } from "@/features/(app)/(ui)/top-bar/icons/icons/icons.props";

export function BackButtonIconSVG({
    size = 22,
    startColor = BOTTOM_ICON_COLORS.backgroundStartColor,
    stopColor = BOTTOM_ICON_COLORS.backgroundStopColor,
}: BottomTabIconSVGProps) {
    const gradientId = `back-button-gradient-${startColor.replace(
        /[^a-zA-Z0-9]/g,
        "",
    )}`;

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            <path
                d="M7.58333 4L3 8.58333L7.58333 13.1667"
                stroke={`url(#${gradientId}-1)`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <path
                d="M3 8.58337H10.3333C15.3961 8.58337 19.5 12.6873 19.5 17.75V18.6667"
                stroke={`url(#${gradientId}-2)`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <defs>
                <radialGradient
                    id={`${gradientId}-1`}
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(3.25 8.41663) scale(10.5 5.94497)">
                    <stop stopColor={startColor} />
                    <stop offset="1" stopColor="#808080" />
                </radialGradient>

                <radialGradient
                    id={`${gradientId}-2`}
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(3.25 8.41663) scale(11.5 4.90516)">
                    <stop stopColor={startColor} />
                    <stop offset="1" stopColor={stopColor} />
                </radialGradient>
            </defs>
        </svg>
    );
}

export default BackButtonIconSVG;
