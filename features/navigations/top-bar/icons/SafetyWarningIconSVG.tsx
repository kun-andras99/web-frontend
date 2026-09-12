import { BOTTOM_ICON_COLORS } from "@/features/navigations/app-bottom-bar/icons/icons.data";
import { BottomTabIconSVGProps } from "@/features/navigations/app-bottom-bar/icons/icons.props";
import { useId } from "react";

export function SafetyWarningIconSVG({
    size = 28,
    startColor = BOTTOM_ICON_COLORS.startColor,
    stopColor = BOTTOM_ICON_COLORS.stopColor,
    backgroundStartColor = BOTTOM_ICON_COLORS.backgroundStartColor,
    backgroundStopColor = BOTTOM_ICON_COLORS.backgroundStopColor,
    strokeWidth = 1.15,
}: BottomTabIconSVGProps) {
    const id = useId().replace(/:/g, "");

    const paint0Id = `${id}-paint0`;
    const paint1Id = `${id}-paint1`;

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            <path
                d="M13 8.66667V13M21.6667 11.0121C21.6667 18.1274 16.2847 21.3178 14.0032 22.3503L13.9999 22.3524C13.7605 22.4608 13.6405 22.5149 13.3673 22.5615C13.1939 22.5918 12.8061 22.5918 12.6338 22.5615C12.4118 22.5246 12.1969 22.4533 11.9968 22.3503C9.71534 21.3178 4.33334 18.1274 4.33334 11.0121V6.71667C4.33334 5.50333 4.33334 4.89667 4.56951 4.433C4.77751 4.02458 5.10793 3.69417 5.51634 3.48617C5.98001 3.25 6.58668 3.25 7.80001 3.25H18.2C19.4133 3.25 20.02 3.25 20.4826 3.48617C20.891 3.69417 21.2225 4.02458 21.4305 4.433C21.6667 4.89558 21.6667 5.50225 21.6667 6.71342V11.0121ZM13.0542 16.25V16.3583H12.9458V16.25H13.0542Z"
                stroke={`url(#${paint1Id})`}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <defs>
                <radialGradient
                    id={paint0Id}
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(13 13) rotate(90) scale(13)">
                    <stop offset="0" stopColor={backgroundStartColor} />
                    <stop offset="1" stopColor={backgroundStopColor} />
                </radialGradient>

                <linearGradient
                    id={paint1Id}
                    x1="4.33334"
                    y1="3.25"
                    x2="22.75"
                    y2="22.75"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor={startColor} />
                    <stop offset="1" stopColor={stopColor} />
                </linearGradient>
            </defs>
        </svg>
    );
}

export default SafetyWarningIconSVG;
