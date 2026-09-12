import { BOTTOM_ICON_COLORS } from "@/features/navigations/app-bottom-bar/icons/icons.data";
import { BottomTabIconSVGProps } from "@/features/navigations/app-bottom-bar/icons/icons.props";
import { useId } from "react";

export function OurTeamIconSVG({
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
                d="M18.4167 21.6666C18.4167 19.8716 15.9911 18.4166 13 18.4166C10.0089 18.4166 7.58333 19.8716 7.58333 21.6666M22.75 18.4166C22.75 17.0841 21.4132 15.9391 19.5 15.4375M3.25 18.4166C3.25 17.0841 4.58683 15.9391 6.5 15.4375M19.5 11.089C19.821 10.8052 20.0826 10.4609 20.27 10.0756C20.4574 9.6904 20.5668 9.27192 20.5918 8.84427C20.6169 8.41662 20.5572 7.98823 20.4161 7.58374C20.275 7.17925 20.0554 6.80664 19.7698 6.48735C19.4842 6.16805 19.1383 5.90837 18.752 5.72323C18.3657 5.5381 17.9466 5.43116 17.5188 5.40857C17.091 5.38599 16.6629 5.4482 16.2593 5.59162C15.8556 5.73505 15.4843 5.95687 15.1667 6.24431M6.5 11.089C5.86332 10.5128 5.48054 9.70808 5.43527 8.85059C5.38999 7.99311 5.68591 7.15255 6.25837 6.51253C6.83084 5.87252 7.63332 5.48507 8.49053 5.43481C9.34774 5.38455 10.19 5.67558 10.8333 6.24431M13 15.1666C12.5732 15.1666 12.1506 15.0826 11.7563 14.9193C11.362 14.7559 11.0037 14.5165 10.7019 14.2147C10.4001 13.913 10.1607 13.5547 9.99739 13.1604C9.83406 12.7661 9.75 12.3434 9.75 11.9166C9.75 11.4898 9.83406 11.0672 9.99739 10.6729C10.1607 10.2786 10.4001 9.92034 10.7019 9.61855C11.0037 9.31676 11.362 9.07736 11.7563 8.91404C12.1506 8.75071 12.5732 8.66665 13 8.66665C13.862 8.66665 14.6886 9.00905 15.2981 9.61855C15.9076 10.228 16.25 11.0547 16.25 11.9166C16.25 12.7786 15.9076 13.6053 15.2981 14.2147C14.6886 14.8242 13.862 15.1666 13 15.1666Z"
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

export default OurTeamIconSVG;
