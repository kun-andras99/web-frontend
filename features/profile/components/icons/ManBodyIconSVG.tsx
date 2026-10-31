import { BOTTOM_ICON_COLORS } from "@/features/(app)/(ui)/top-bar/icons/icons/icons.data";
import { BottomTabIconSVGProps } from "@/features/(app)/(ui)/top-bar/icons/icons/icons.props";

export default function ManBodyIconSVG({
    size = 19,
    startColor = BOTTOM_ICON_COLORS.startColor,
    strokeWidth = 1.15,
}: BottomTabIconSVGProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            <path
                d="M9.04029 3V5.35996C9.04029 6.16204 8.59846 6.47142 6.93425 6.89904C5.2705 7.32621 4.77733 7.57829 4.38867 8.31667C4.12956 8.80861 4 9.56822 4 10.5955V18.5833"
                stroke={startColor}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
            />

            <path
                d="M17.2651 11.2542C17.3739 12.5723 17.1504 13.7238 16.5946 14.7086C16.0387 15.6934 15.0576 16.2932 13.6511 16.508M7.23538 11.2542C7.12569 12.5723 7.35012 13.7238 7.90868 14.7086C8.46693 15.6931 9.45601 16.2929 10.8759 16.508"
                stroke={startColor}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <path
                d="M7.20831 21.3388C7.81942 20.626 8.12498 19.8511 8.12498 19.0142V15.1807M17.2916 21.3388C16.6805 20.626 16.375 19.8511 16.375 19.0142V15.1807M15.4583 3V5.35996C15.4583 6.16204 15.9001 6.47142 17.5644 6.89904C19.2281 7.32621 19.7213 7.57829 20.1099 8.31667C20.369 8.80861 20.4986 9.56822 20.4986 10.5955V18.5833"
                stroke={startColor}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
            />
        </svg>
    );
}
