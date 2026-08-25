import { BottomTabIconSVGProps } from "@/features/navigations/app-bottom-bar/icons/icons.props";
import { useId } from "react";

export function InboxIconSVG({
  size = 28,
  startColor = "#A9A9A9",
  stopColor = "#4D4D4D",
  backgroundStartColor = "#DEDEDE",
  backgroundStopColor = "#808080",
  strokeWidth = 1.25,
}: BottomTabIconSVGProps) {
  const id = useId().replace(/:/g, "");

  const fillGradient = `${id}-paint0`;
  const strokeGradient = `${id}-paint1`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3.5 14C3.5 8.20101 8.20101 3.5 14 3.5V3.5C19.799 3.5 24.5 8.20101 24.5 14V22C24.5 23.3807 23.3807 24.5 22 24.5H14C8.20101 24.5 3.5 19.799 3.5 14V14Z"
        fill={`url(#${fillGradient})`}
        fillOpacity="0.20"
        stroke={`url(#${strokeGradient})`}
        strokeWidth={strokeWidth}
      />

      <defs>
        <radialGradient
          id={fillGradient}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(13.5 14.4965) rotate(90) scale(14.0035 10.8424)"
        >
          <stop offset="0" stopColor={backgroundStartColor} />
          <stop offset="1" stopColor={backgroundStopColor} />
        </radialGradient>

        <radialGradient
          id={strokeGradient}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(13.5 14.4965) rotate(90) scale(27.5035 11.272)"
        >
          <stop offset="0" stopColor={backgroundStartColor} />
          <stop offset="1" stopColor={backgroundStopColor} />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default InboxIconSVG;