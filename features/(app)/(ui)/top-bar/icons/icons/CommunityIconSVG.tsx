import { BottomTabIconSVGProps } from "@/features/(app)/(ui)/top-bar/icons/icons/icons.props";
import { useId } from "react";

export function CommunityIconSVG({
    size = 28,
    startColor = "var(--bottom-start-color)",
    stopColor = "var(--bottom-stop-color)",
    backgroundStartColor = "var(--bottom-frontStart-color)",
    backgroundStopColor = "var(--bottom-frontStop-color)",
    strokeWidth = 1.25,
}: BottomTabIconSVGProps) {
    const id = useId().replace(/:/g, "");

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            <path
                d="M21.6529 9.42942C20.4297 9.42942 19.4382 8.43786 19.4382 7.21471C19.4382 5.99156 20.4297 5 21.6529 5C22.876 5 23.8676 5.99156 23.8676 7.21471C23.8676 8.43786 22.876 9.42942 21.6529 9.42942Z"
                fill={`url(#${id}-paint0)`}
            />

            <path
                d="M6.3929 9.42942C5.16975 9.42942 4.17819 8.43786 4.17819 7.21471C4.17819 5.99156 5.16975 5 6.3929 5C7.61605 5 8.6076 5.99156 8.6076 7.21471C8.6076 8.43786 7.61605 9.42942 6.3929 9.42942Z"
                fill={`url(#${id}-paint1)`}
            />

            <path
                d="M13.9799 3.625C12.0939 3.62502 10.5649 5.154 10.5649 7.04004C10.5649 8.92606 12.0939 10.4551 13.9799 10.4551C15.866 10.4551 17.395 8.92607 17.395 7.04004C17.395 5.15399 15.866 3.625 13.9799 3.625Z"
                fill={`url(#${id}-paint2)`}
                fillOpacity="0.20"
                stroke={`url(#${id}-paint3)`}
                strokeWidth={strokeWidth}
            />

            <path
                d="M6.41504 11.4141C8.79088 11.4141 10.7503 12.414 11.041 13.7061C9.42273 13.9842 7.94773 14.4876 6.72949 15.1729C6.02899 15.5669 5.37519 16.0464 4.83008 16.6045C1.75007 16.3531 1.75 15.2999 1.75 14.0381C1.75027 12.5892 3.83896 11.4141 6.41504 11.4141Z"
                fill={`url(#${id}-paint4)`}
            />

            <path
                d="M21.6748 11.4141C24.2509 11.4141 26.3396 12.5892 26.3398 14.0381C26.3398 15.3105 26.34 16.3715 23.1816 16.6113C22.6354 16.0507 21.9804 15.5683 21.2773 15.1729C20.0789 14.4987 18.6322 14.0005 17.0449 13.7197C17.3246 12.421 19.2905 11.4141 21.6748 11.4141Z"
                fill={`url(#${id}-paint5)`}
            />

            <path
                d="M14.0037 15.4584C11.5136 15.4584 9.28994 16.0281 7.71069 16.9164C6.11182 17.8158 5.29468 18.9599 5.29468 20.0834C5.29468 21.5872 5.32855 22.5757 6.2312 23.3109C6.70661 23.6981 7.47285 24.0532 8.7312 24.308C9.98699 24.5622 11.6918 24.7084 14.0037 24.7084C16.3153 24.7084 18.0194 24.5622 19.2751 24.308C20.5336 24.0532 21.2997 23.6981 21.7751 23.3109C22.6779 22.5757 22.7117 21.5872 22.7117 20.0834C22.7117 18.96 21.8953 17.8157 20.2966 16.9164C18.7174 16.0281 16.4937 15.4584 14.0037 15.4584Z"
                fill={`url(#${id}-paint6)`}
                fillOpacity="0.20"
                stroke={`url(#${id}-paint7)`}
                strokeWidth={strokeWidth}
            />

            <defs>
                <radialGradient
                    id={`${id}-paint0`}
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(14 15) rotate(-37.5686) scale(16.4012 5.30102)">
                    <stop stopColor={startColor} />
                    <stop offset="1" stopColor={stopColor} />
                </radialGradient>

                <radialGradient
                    id={`${id}-paint1`}
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(14 15) rotate(-140.194) scale(15.6205 4.20613)">
                    <stop stopColor={startColor} />
                    <stop offset="1" stopColor={stopColor} />
                </radialGradient>

                <radialGradient
                    id={`${id}-paint2`}
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(13.9771 14.2543) rotate(-90) scale(13.4186 6.86913)">
                    <stop stopColor={backgroundStartColor} />
                    <stop offset="1" stopColor={backgroundStopColor} />
                </radialGradient>

                <radialGradient
                    id={`${id}-paint3`}
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(14 12.5) rotate(-90) scale(8 15.1918)">
                    <stop stopColor={backgroundStartColor} />
                    <stop offset="1" stopColor={backgroundStopColor} />
                </radialGradient>

                <radialGradient
                    id={`${id}-paint4`}
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(14 14.9827) rotate(-140.331) scale(15.5896 10.178)">
                    <stop stopColor={startColor} />
                    <stop offset="1" stopColor={stopColor} />
                </radialGradient>

                <radialGradient
                    id={`${id}-paint5`}
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(12.951 -7.92259 4.39462 7.09891 14.0465 14.9653)"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor={startColor} />
                    <stop offset="1" stopColor={stopColor} />
                </radialGradient>

                <radialGradient
                    id={`${id}-paint6`}
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(14 15) rotate(90) scale(10.5 9)">
                    <stop stopColor={backgroundStartColor} />
                    <stop offset="1" stopColor={backgroundStopColor} />
                </radialGradient>

                <radialGradient
                    id={`${id}-paint7`}
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(14 15) rotate(90) scale(8.5 7.28571)">
                    <stop stopColor={backgroundStartColor} />
                    <stop offset="1" stopColor={backgroundStopColor} />
                </radialGradient>
            </defs>
        </svg>
    );
}

export default CommunityIconSVG;
