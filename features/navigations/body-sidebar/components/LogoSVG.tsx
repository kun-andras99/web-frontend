import React from "react";

interface LogoSVGProps {
    width?: number;
    height?: number;
    className?: string;
}

export const LogoSVG: React.FC<LogoSVGProps> = ({
    width = 500,
    height = 500,
    className = "",
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}>
            <g clipPath="url(#clip0_4008_6)">
                <rect
                    width="500"
                    height="500"
                    rx="250"
                    fill="url(#paint0_linear_4008_6)"
                />
                <path
                    d="M108.85 500V96.1H189.63V262.853L315.416 96.1H421.007L264.64 285.356L432.547 500H329.264L189.63 321.707V500H108.85Z"
                    fill="white"
                />
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_4008_6"
                    x1="57.5"
                    y1="46.5"
                    x2="427"
                    y2="439.5"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0CA7F4" />
                    <stop offset="1" stop-color="#0B374D" />
                </linearGradient>
                <clipPath id="clip0_4008_6">
                    <rect width="500" height="500" rx="250" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default LogoSVG;
