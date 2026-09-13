import { BOTTOM_ICON_COLORS } from "@/features/navigations/top-bar/icons/icons/icons.data";
import { BottomTabIconSVGProps } from "@/features/navigations/top-bar/icons/icons/icons.props";
import { useId } from "react";

export function HomeIconSVG({
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
                d="M22.75 20.5833V13.2892C22.75 12.7015 22.6304 12.1199 22.3986 11.5798C22.1667 11.0397 21.8274 10.5524 21.4012 10.1476L14.4928 3.58583C14.0902 3.20328 13.556 2.98999 13.0005 2.98999C12.4451 2.98999 11.9109 3.20328 11.5083 3.58583L4.59875 10.1476C4.17262 10.5524 3.83331 11.0397 3.60144 11.5798C3.36957 12.1199 3.25 12.7015 3.25 13.2892V20.5833C3.25 21.158 3.47827 21.7091 3.8846 22.1154C4.29093 22.5217 4.84203 22.75 5.41667 22.75H20.5833C21.158 22.75 21.7091 22.5217 22.1154 22.1154C22.5217 21.7091 22.75 21.158 22.75 20.5833Z"
                fill={`url(#${paint0Id})`}
                fillOpacity="0.20"
            />

            <path
                d="M22.75 20.5833V13.2892C22.75 12.7015 22.6304 12.1199 22.3986 11.5798C22.1667 11.0397 21.8274 10.5524 21.4012 10.1476L14.4928 3.58583C14.0902 3.20328 13.556 2.98999 13.0005 2.98999C12.4451 2.98999 11.9109 3.20328 11.5083 3.58583L4.59875 10.1476C4.17262 10.5524 3.83331 11.0397 3.60144 11.5798C3.36957 12.1199 3.25 12.7015 3.25 13.2892V20.5833C3.25 21.158 3.47827 21.7091 3.8846 22.1154C4.29093 22.5217 4.84203 22.75 5.41667 22.75H20.5833C21.158 22.75 21.7091 22.5217 22.1154 22.1154C22.5217 21.7091 22.75 21.158 22.75 20.5833Z"
                stroke={`url(#${paint1Id})`}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <path
                d="M9.75 16.25C9.75 15.6754 9.97827 15.1243 10.3846 14.718C10.7909 14.3116 11.342 14.0834 11.9167 14.0834H14.0833C14.658 14.0834 15.2091 14.3116 15.6154 14.718C16.0217 15.1243 16.25 15.6754 16.25 16.25V22.75H9.75V16.25Z"
                stroke={`url(#${paint1Id})`}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <defs>
                {/* <radialGradient
                    id={paint0Id}
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(-10.9998 11.0001 10.5097 10.51 13.4539 13.0001)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor={backgroundStartColor} />
                    <stop offset="1" stopColor={backgroundStopColor} />
                </radialGradient> */}

                <radialGradient
                    id={paint1Id}
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(-10.9998 11.0001 10.5097 10.51 13.4539 13.0001)"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor={startColor} />
                    <stop offset="1" stopColor={stopColor} />
                </radialGradient>
            </defs>
        </svg>
    );
}

export default HomeIconSVG;
