import { BOTTOM_ICON_COLORS } from "@/features/(app)/navigations/top-bar/icons/icons/icons.data";
import { BottomTabIconSVGProps } from "@/features/(app)/navigations/top-bar/icons/icons/icons.props";

export default function WomanDressIconSVG({
    size = 20,
    startColor = BOTTOM_ICON_COLORS.startColor,
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
                d="M15 4.83333L12.25 6.66667L9.5 4.83333M15 4.83333C15.5381 5.29992 16.7692 6.01858 16.8297 6.8005C16.8572 7.13875 16.716 7.32392 16.4318 7.69425C15.814 8.50183 15 8.97667 15 10.3333H9.5C9.5 8.97758 8.686 8.50183 8.06817 7.69425C7.78492 7.32392 7.64283 7.13967 7.66942 6.8005C7.73083 6.01858 8.96283 5.30083 9.5 4.83333M15 4.83333V3M9.5 4.83333V3M9.95833 10.3333H14.5417M17.75 18.5833C19.5833 18.5833 20.5 16.5914 20.5 16.5914C17.9104 14.9084 16.375 12.9312 15.5381 11.4379C15.22 10.8696 15.0605 10.5854 14.846 10.4589C14.6315 10.3333 14.3446 10.3333 13.7708 10.3333H10.7283C10.1545 10.3333 9.86758 10.3333 9.65308 10.4589C9.43858 10.5845 9.27908 10.8687 8.961 11.4379C8.125 12.9312 6.58958 14.9075 4 16.5914C4 16.5914 4.91667 18.5833 6.75 18.5833"
                stroke={startColor}
                strokeWidth="1.15"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <path
                d="M13.8138 14C14.1255 14.7297 15.4776 16.4484 16.9626 17.9508C17.5098 18.5054 17.7839 18.7822 17.7463 19.2525C17.7097 19.7218 17.4805 19.8786 17.0222 20.1921C15.9808 20.9025 14.3913 21.3333 12.25 21.3333C10.1087 21.3333 8.51918 20.9034 7.47693 20.1921C7.0186 19.8786 6.78943 19.7218 6.75276 19.2525C6.7161 18.7822 6.99018 18.5054 7.53743 17.9508C9.02243 16.4484 10.3754 14.7297 10.6862 14"
                stroke={startColor}
                strokeWidth="1.15"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
