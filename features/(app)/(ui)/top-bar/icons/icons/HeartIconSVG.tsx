import { BottomTabIconSVGProps } from "@/features/(app)/(ui)/top-bar/icons/icons/icons.props";
import { useId } from "react";

export function HeartIconSVG({
    size = 28,
    startColor = "var(--bottom-start-color)",
    stopColor = "var(--bottom-stop-color)",
    backgroundStartColor = "var(--bottom-frontStart-color)",
    backgroundStopColor = "var(--bottom-frontStop-color)",
    strokeWidth = 2.4,
}: BottomTabIconSVGProps) {
    const id = useId().replace(/:/g, "");

    const maskId = `${id}-heart-mask`;
    const paint0Id = `${id}-paint0`;
    const paint1Id = `${id}-paint1`;
    const paint2Id = `${id}-paint2`;

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            <mask
                id={maskId}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="28"
                height="28">
                <path
                    d="M12.9816 9.60376C13.5769 4.63579 17.9552 2.87022 20.6329 4.13892C22.807 5.14937 24.7486 8.57146 24.2247 12.428C24.1097 13.268 23.9145 14.0839 23.6622 14.8684C23.1756 14.8587 22.6755 14.9369 22.1896 15.1165C21.1343 13.6494 19.2679 13.0765 17.7345 13.803L17.7355 13.804C16.8953 14.1982 16.2613 14.9575 15.8761 15.7727C15.477 16.6178 15.279 17.6511 15.4269 18.7395L15.4259 18.7415C15.6603 20.4511 16.5156 21.8911 17.2335 22.8499C17.4865 23.1877 17.734 23.4788 17.9493 23.717C17.6322 24.0283 17.4425 24.1956 17.4425 24.1956C17.3786 24.1875 9.68554 23.203 5.24036 18.2327C2.64932 15.3283 2.34557 11.4042 3.58313 9.35083C5.09394 6.80198 9.7098 5.81715 12.9816 9.60376Z"
                    fill="white"
                />
            </mask>

            <path
                d="M12.9816 9.60376C13.5769 4.63579 17.9552 2.87022 20.6329 4.13892C22.807 5.14937 24.7486 8.57146 24.2247 12.428C24.1097 13.268 23.9145 14.0839 23.6622 14.8684C23.1756 14.8587 22.6755 14.9369 22.1896 15.1165C21.1343 13.6494 19.2679 13.0765 17.7345 13.803L17.7355 13.804C16.8953 14.1982 16.2613 14.9575 15.8761 15.7727C15.477 16.6178 15.279 17.6511 15.4269 18.7395L15.4259 18.7415C15.6603 20.4511 16.5156 21.8911 17.2335 22.8499C17.4865 23.1877 17.734 23.4788 17.9493 23.717C17.6322 24.0283 17.4425 24.1956 17.4425 24.1956C17.3786 24.1875 9.68554 23.203 5.24036 18.2327C2.64932 15.3283 2.34557 11.4042 3.58313 9.35083C5.09394 6.80198 9.7098 5.81715 12.9816 9.60376Z"
                fill={`url(#${paint0Id})`}
                fillOpacity="0.25"
            />

            <path
                d="M12.9816 9.60376C13.5769 4.63579 17.9552 2.87022 20.6329 4.13892C22.807 5.14937 24.7486 8.57146 24.2247 12.428C24.1097 13.268 23.9145 14.0839 23.6622 14.8684C23.1756 14.8587 22.6755 14.9369 22.1896 15.1165C21.1343 13.6494 19.2679 13.0765 17.7345 13.803L17.7355 13.804C16.8953 14.1982 16.2613 14.9575 15.8761 15.7727C15.477 16.6178 15.279 17.6511 15.4269 18.7395L15.4259 18.7415C15.6603 20.4511 16.5156 21.8911 17.2335 22.8499C17.4865 23.1877 17.734 23.4788 17.9493 23.717C17.6322 24.0283 17.4425 24.1956 17.4425 24.1956C17.3786 24.1875 9.68554 23.203 5.24036 18.2327C2.64932 15.3283 2.34557 11.4042 3.58313 9.35083C5.09394 6.80198 9.7098 5.81715 12.9816 9.60376Z"
                fill="none"
                stroke={`url(#${paint1Id})`}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
                mask={`url(#${maskId})`}
            />

            <path
                d="M21.4966 17.396C21.254 15.3701 19.469 14.6508 18.3772 15.168C17.4908 15.5799 16.6991 16.9753 16.9127 18.5477C17.2835 21.2525 19.6777 23.3453 19.6777 23.3453C19.6777 23.3453 22.8334 22.9492 24.6528 20.9141C25.7092 19.73 25.8331 18.1304 25.3286 17.2933C24.7127 16.2539 22.8305 15.8526 21.4966 17.396Z"
                fill={`url(#${paint2Id})`}
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
                    gradientTransform="matrix(-4.99989 9.50007 8.3649 4.40272 13.4539 13.0001)"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor={backgroundStartColor} />
                    <stop offset="1" stopColor={backgroundStopColor} />
                </radialGradient>

                <radialGradient
                    id={paint2Id}
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="translate(15.0626 15.6896) rotate(137.726) scale(12.1131 10.2398)"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor={startColor} />
                    <stop offset="1" stopColor={stopColor} />
                </radialGradient>
            </defs>
        </svg>
    );
}

export default HeartIconSVG;
