import { BOTTOM_ICON_COLORS } from "@/features/(app)/navigations/top-bar/icons/icons/icons.data";
import { BottomTabIconSVGProps } from "@/features/(app)/navigations/top-bar/icons/icons/icons.props";
import { useId } from "react";

export function CruiseIconSVG({
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
                d="M21.2773 21.3965C21.1399 22.1346 20.844 22.7916 20.3838 23.376C19.8684 24.0304 19.1442 24.3756 18.125 24.375C17.3906 24.375 16.8126 24.1246 16.3438 23.623C15.9301 23.1805 15.69 22.64 15.6367 21.9707L15.625 21.6758V21.6748C15.625 21.3561 15.6736 21.0511 15.7695 20.7568C15.8206 20.6002 15.8724 20.4524 15.9258 20.3135L21.2773 21.3965ZM12.2305 15.7559C12.3265 16.0511 12.375 16.3569 12.375 16.6748C12.375 17.4829 12.1283 18.117 11.6553 18.623C11.1864 19.1247 10.608 19.375 9.875 19.375C8.85556 19.375 8.12551 19.0297 7.60156 18.373C7.13595 17.7895 6.83602 17.1335 6.69727 16.3965L12.0732 15.3135C12.1265 15.4521 12.1795 15.5992 12.2305 15.7559ZM19.5 8.625C20.5816 8.625 21.4786 9.08506 22.2236 10.0859C22.9779 11.0994 23.375 12.3901 23.375 14C23.375 15.1036 23.2465 16.0426 23.0029 16.8271C22.8159 17.4294 22.6359 17.9234 22.4668 18.3154L16.1699 17.0566C16.0439 16.6837 15.9273 16.2689 15.8223 15.8105C15.6922 15.2431 15.6257 14.64 15.625 14C15.625 12.6348 15.9874 11.3792 16.7168 10.2207C17.4012 9.13362 18.3115 8.62564 19.5 8.625ZM8.5 3.625C9.68924 3.625 10.5997 4.13295 11.2842 5.2207C12.0136 6.37992 12.3756 7.63559 12.375 9L12.3623 9.47266C12.3375 9.93876 12.2757 10.3841 12.1777 10.8096C12.0722 11.2681 11.9559 11.6834 11.8301 12.0566L5.53223 13.3154C5.36303 12.9231 5.18409 12.4289 4.99707 11.8271C4.75351 11.0434 4.625 10.1044 4.625 9C4.625 7.38939 5.02209 6.09836 5.77637 5.08496C6.47472 4.14676 7.30652 3.68365 8.29883 3.62988L8.5 3.625Z"
                fill={`url(#${fillGradient})`}
                fillOpacity="0.15"
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
                    gradientTransform="translate(14.0036 3.34912) rotate(90) scale(22 9.64286)">
                    <stop offset="0" stopColor={backgroundStartColor} />
                    <stop offset="1" stopColor={backgroundStopColor} />
                </radialGradient>

                <radialGradient
                    id={strokeGradient}
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(14 14) rotate(89.982) scale(11.3491 4.97445)">
                    <stop offset="0" stopColor={backgroundStartColor} />
                    <stop offset="1" stopColor={backgroundStopColor} />
                </radialGradient>
            </defs>
        </svg>
    );
}

export default CruiseIconSVG;
