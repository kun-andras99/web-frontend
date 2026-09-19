import { BOTTOM_ICON_COLORS } from "@/features/(app)/navigations/top-bar/icons/icons/icons.data";
import { BottomTabIconSVGProps } from "@/features/(app)/navigations/top-bar/icons/icons/icons.props";
import { useId } from "react";

export function AboutUsIconSVG({
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
                d="M3 9V16.8M3 11.4375C3.4875 10.95 4.4625 9.4875 6.4125 9.4875C7.22663 9.4875 8.3625 9.975 8.3625 10.95V16.8M13.2375 16.8V10.95C13.2375 9.975 12.1016 9.4875 11.2875 9.4875C9.8445 9.4875 8.93385 10.2889 8.3625 10.9032M15.675 12.9C15.675 13.609 15.8958 14.3004 16.3067 14.8782C16.7177 15.4559 17.2984 15.8913 17.9682 16.1238C18.638 16.3564 19.3636 16.3746 20.0441 16.1758C20.7247 15.977 21.3265 15.5712 21.7658 15.0148M15.675 12.9C15.675 11.9949 16.0345 11.127 16.6745 10.487C17.3145 9.84703 18.1824 9.4875 19.0875 9.4875C19.9926 9.4875 20.8605 9.84703 21.5005 10.487C22.1405 11.127 22.5 11.9949 22.5 12.9H15.675Z"
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
                    gradientTransform="matrix(-10.9998 11.0001 10.5097 10.51 13.4539 13.0001)"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor={backgroundStartColor} />
                    <stop offset="1" stopColor={backgroundStopColor} />
                </radialGradient>

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

export default AboutUsIconSVG;
