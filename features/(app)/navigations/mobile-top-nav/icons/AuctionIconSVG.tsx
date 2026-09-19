import { BOTTOM_ICON_COLORS } from "@/features/(app)/navigations/top-bar/icons/icons/icons.data";
import { BottomTabIconSVGProps } from "@/features/(app)/navigations/top-bar/icons/icons/icons.props";

export function AuctionIconSVG({
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
                d="M6.92914 8.16252L7.75969 2.65002H3.43999L1.63504 7.37502C1.57904 7.54302 1.55069 7.71802 1.54999 7.90002C1.54999 9.05922 2.75749 10 4.24954 10C5.62504 10 6.76219 9.19782 6.92914 8.16252ZM11 10C12.491 10 13.6995 9.05922 13.6995 7.90002C13.6988 7.85662 13.6971 7.81427 13.6943 7.77297L13.1598 2.65002H8.84014L8.30464 7.76877L8.30044 7.90002C8.30044 9.05922 9.50899 10 11 10ZM16.25 11.0983V15.25H5.74999V11.1046C5.29009 11.2705 4.78399 11.365 4.24954 11.365C4.04479 11.365 3.84634 11.3409 3.64999 11.3136V17.98C3.64999 18.7885 4.31044 19.45 5.11789 19.45H16.88C17.6885 19.45 18.35 18.7875 18.35 17.98V11.3146C18.1516 11.3461 17.9513 11.3633 17.7504 11.3661C17.2385 11.3646 16.7308 11.274 16.25 11.0983ZM20.366 7.37502L18.5589 2.65002H14.2403L15.0698 8.15412C15.2315 9.19362 16.3686 10 17.7504 10C19.2414 10 20.45 9.05922 20.45 7.90002C20.4493 7.71802 20.4213 7.54302 20.366 7.37502Z"
                fill={startColor}
            />
        </svg>
    );
}

export default AuctionIconSVG;
