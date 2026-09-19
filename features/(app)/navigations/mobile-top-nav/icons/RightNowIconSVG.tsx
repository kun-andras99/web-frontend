import { BOTTOM_ICON_COLORS } from "@/features/(app)/navigations/top-bar/icons/icons/icons.data";
import { BottomTabIconSVGProps } from "@/features/(app)/navigations/top-bar/icons/icons/icons.props";

export function RightNowIconSVG({
    size = 28,
    startColor = BOTTOM_ICON_COLORS.startColor,
}: BottomTabIconSVGProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            <path
                d="M14.1834 3C14.8947 3 15.3709 3.675 15.2085 4.32209L15.1671 4.45151L13.3925 9.00565H15.5156C16.3488 9.00565 16.8115 9.89719 16.446 10.5739L16.3615 10.7058L10.0428 19.2043C9.58607 19.8175 8.67169 19.3937 8.7512 18.6925L9.4152 12.8476H7.05693C6.28973 12.8476 5.79913 12.066 6.07995 11.38L6.08418 11.3707L9.38814 3.64962C9.46842 3.45751 9.60365 3.29338 9.77685 3.17781C9.95005 3.06225 10.1535 3.00039 10.3617 3H14.1834Z"
                fill={startColor}
            />
        </svg>
    );
}

export default RightNowIconSVG;
