import { BOTTOM_ICON_COLORS } from "@/features/navigations/app-bottom-bar/icons/icons.data";
import { BottomTabIconSVGProps } from "@/features/navigations/app-bottom-bar/icons/icons.props";

export default function StatsIconSVG({
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
                d="M4 4V17.7143C4 18.3205 4.24082 18.9019 4.66947 19.3305C5.09812 19.7592 5.67951 20 6.28571 20H19.4286M7.42857 13.1429V16.5714M12 9.71429V16.5714M16.5714 6.28571V16.5714"
                stroke={startColor}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
