import { BOTTOM_ICON_COLORS } from "@/features/navigations/app-bottom-bar/icons/icons.data";
import { BottomTabIconSVGProps } from "@/features/navigations/app-bottom-bar/icons/icons.props";

export function SharedAlbumIconSVG({
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
                d="M17.141 8.45648L15.332 3.47435C15.1985 3.10655 14.806 2.91116 14.4576 3.03936L2.43507 7.42734C2.08671 7.55466 1.91077 7.95518 2.04516 8.32298L3.95137 13.5757V10.7614C3.95137 9.49004 4.96636 8.45648 6.21476 8.45648H9.39148L13.18 5.79699L15.3718 8.45648H17.141ZM19.0092 10.0745H6.21476C6.12509 10.0742 6.03628 10.0919 5.95356 10.1265C5.87083 10.1611 5.79587 10.2119 5.73308 10.2759C5.6703 10.3399 5.62096 10.4159 5.58798 10.4993C5.555 10.5826 5.53904 10.6718 5.54105 10.7614V19.09C5.54193 19.4826 5.84431 19.8 6.21476 19.8H19.0092C19.3805 19.8 19.6829 19.4826 19.6829 19.09V10.7614C19.6849 10.6718 19.6689 10.5826 19.6359 10.4993C19.603 10.4159 19.5536 10.3399 19.4908 10.2759C19.4281 10.2119 19.3531 10.1611 19.2704 10.1265C19.1876 10.0919 19.0988 10.0742 19.0092 10.0745ZM17.9146 18.0317H7.30491V16.2634L9.05904 12.711L11.5063 15.7489L13.8033 13.3953L16.7546 12.3299L17.9146 15.3793V18.0317Z"
                fill={startColor}
            />
        </svg>
    );
}

export default SharedAlbumIconSVG;
