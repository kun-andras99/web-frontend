import { BOTTOM_ICON_COLORS } from "@/features/navigations/app-bottom-bar/icons/icons.data";
import { BottomTabIconSVGProps } from "@/features/navigations/app-bottom-bar/icons/icons.props";

export default function ManChestIconSVG({
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
                d="M7.29828 12.2501V16.9394C7.29828 18.4335 7.29828 19.1809 7.78091 19.6454C8.32953 20.1726 10.2823 20.4828 12.2442 20.4993C14.1549 20.5158 16.0722 20.2543 16.7075 19.6454C17.1893 19.1809 17.1893 18.4335 17.1893 16.9394V12.2501"
                stroke={startColor}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <path
                d="M7.07054 13.9182C6.35691 13.6592 5.01463 13.4372 4.40908 12.83C3.57582 11.9943 4.11455 10.864 5.13591 8.7347C5.59543 7.77605 6.47571 7.07067 7.5012 6.79264C7.6405 6.75496 7.76132 6.66787 7.8411 6.54761L8.89958 4.89761C8.92979 4.85173 8.9698 4.81312 9.01673 4.78458C9.49358 4.495 10.6758 4 12.2441 4C13.8125 4 14.9172 4.49665 15.3932 4.78375C15.4403 4.81277 15.4803 4.85195 15.5103 4.89843L16.5993 6.53194C16.6791 6.65219 16.7999 6.73929 16.9392 6.77697C17.9647 7.05582 18.8046 7.67127 19.2649 8.62993C20.4117 10.7172 20.9215 11.9786 20.0875 12.8143C19.4827 13.4216 18.1215 13.6625 17.4079 13.9207"
                stroke={startColor}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <path
                d="M7.7132 6.88752L11.2063 9.60426C11.7062 9.99284 11.9562 10.1875 12.2507 10.1875C12.5452 10.1875 12.7952 9.99284 13.296 9.60426L16.7874 6.88752M10.1882 4.82501L11.4257 9.77504M14.3132 4.82501L13.0757 9.77504"
                stroke={startColor}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
