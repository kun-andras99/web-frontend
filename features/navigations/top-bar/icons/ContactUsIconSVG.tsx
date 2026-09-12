import { BOTTOM_ICON_COLORS } from "@/features/navigations/app-bottom-bar/icons/icons.data";
import { BottomTabIconSVGProps } from "@/features/navigations/app-bottom-bar/icons/icons.props";
import { useId } from "react";

export function ContactUsIconSVG({
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
                d="M14.0833 4.33325H11.9167C7.83142 4.33325 5.78825 4.33325 4.51967 5.60292C3.25108 6.87259 3.25 8.91467 3.25 12.9999V15.1666C3.25 19.2518 3.25 21.295 4.51967 22.5636C5.78933 23.8322 7.83142 23.8333 11.9167 23.8333H14.0833C18.1686 23.8333 20.2117 23.8333 21.4803 22.5636C22.7489 21.2939 22.75 19.2518 22.75 15.1666V12.9999C22.75 8.91467 22.75 6.8715 21.4803 5.60292C20.2107 4.33434 18.1686 4.33325 14.0833 4.33325Z"
                stroke={`url(#${paint1Id})`}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <path
                d="M15.7083 15.7083C15.7083 16.4266 15.423 17.1155 14.9151 17.6234C14.4072 18.1313 13.7183 18.4167 13 18.4167C12.2817 18.4167 11.5928 18.1313 11.0849 17.6234C10.577 17.1155 10.2917 16.4266 10.2917 15.7083C10.2917 14.99 10.577 14.3012 11.0849 13.7933C11.5928 13.2853 12.2817 13 13 13C13.7183 13 14.4072 13.2853 14.9151 13.7933C15.423 14.3012 15.7083 14.99 15.7083 15.7083Z"
                stroke={`url(#${paint1Id})`}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <path
                d="M7.60934 23.2916C7.74222 21.9543 8.36746 20.7142 9.36359 19.8121C10.3597 18.9101 11.6556 18.4105 12.9995 18.4105C14.3433 18.4105 15.6392 18.9101 16.6354 19.8121C17.6315 20.7142 18.2567 21.9543 18.3896 23.2916M8.66668 4.33329V2.16663M17.3333 4.33329V2.16663M8.66668 8.66663H17.3333"
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
                    gradientUnits="userSpaceOnUse">
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

export default ContactUsIconSVG;
