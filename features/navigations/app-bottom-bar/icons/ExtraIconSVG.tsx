import { BottomTabIconSVGProps } from "@/features/navigations/app-bottom-bar/icons/icons.props";
import { useId } from "react";

export function ExtraIconSVG({
  size = 28,
  startColor = "#A9A9A9",
  stopColor = "#4D4D4D",
  backgroundStartColor = "#DEDEDE",
  backgroundStopColor = "#808080",
  strokeWidth = 1.25,
}: BottomTabIconSVGProps) {
  const id = useId().replace(/:/g, "");

  const fillGradient = `${id}-paint0`;
  const borderGradient = `${id}-paint1`;
  const innerGradient = `${id}-paint2`;

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
        d="M14 3.5C18.9496 3.5 21.4247 3.49999 22.9619 5.03711C24.5002 6.5764 24.5 9.05038 24.5 14C24.5 18.9497 24.5002 21.4247 22.9619 22.9619C21.4258 24.5002 18.9497 24.5 14 24.5C9.05038 24.5 6.57535 24.5002 5.03711 22.9619C3.49999 21.4258 3.5 18.9496 3.5 14C3.5 9.05038 3.49992 6.57535 5.03711 5.03711C6.5764 3.49992 9.05038 3.5 14 3.5ZM22.1934 9.95996C21.6189 9.57702 20.8429 9.73223 20.46 10.3066L19.5 11.7461L18.54 10.3066C18.1571 9.73223 17.3811 9.57702 16.8066 9.95996C16.7868 9.9732 16.7688 9.98878 16.75 10.0029C16.7312 9.98878 16.7132 9.9732 16.6934 9.95996C16.1189 9.57702 15.3429 9.73223 14.96 10.3066L14 11.7461L13.04 10.3066C12.6571 9.73223 11.8811 9.57702 11.3066 9.95996C11.2868 9.9732 11.2688 9.98878 11.25 10.0029C11.2312 9.98878 11.2132 9.9732 11.1934 9.95996C10.6189 9.57702 9.8429 9.73223 9.45996 10.3066L8.5 11.7461L7.54004 10.3066C7.1571 9.73223 6.38105 9.57702 5.80664 9.95996C5.23223 10.3429 5.07702 11.1189 5.45996 11.6934L6.99707 14L5.45996 16.3066C5.07702 16.8811 5.23223 17.6571 5.80664 18.04C6.38105 18.423 7.1571 18.2678 7.54004 17.6934L8.5 16.2529L9.45996 17.6934C9.8429 18.2678 10.6189 18.423 11.1934 18.04C11.2132 18.0268 11.2312 18.0112 11.25 17.9971C11.2688 18.0112 11.2868 18.0268 11.3066 18.04C11.8811 18.423 12.6571 18.2678 13.04 17.6934L14 16.2529L14.96 17.6934C15.3429 18.2678 16.1189 18.423 16.6934 18.04C16.7132 18.0268 16.7312 18.0112 16.75 17.9971C16.7688 18.0112 16.7868 18.0268 16.8066 18.04C17.3811 18.423 18.1571 18.2678 18.54 17.6934L19.5 16.2529L20.46 17.6934C20.8429 18.2678 21.6189 18.423 22.1934 18.04C22.7678 17.6571 22.923 16.8811 22.54 16.3066L21.002 14L22.54 11.6934C22.923 11.1189 22.7678 10.3429 22.1934 9.95996ZM12.4971 14L11.25 15.8711L10.002 14L11.25 12.1279L12.4971 14ZM17.9971 14L16.75 15.8711L15.502 14L16.75 12.1279L17.9971 14Z"
        fill={`url(#${fillGradient})`}
        fillOpacity="0.2"
      />

      <path
        d="M3.5 14C3.5 9.0503 3.5 6.57545 5.0372 5.0372C6.5765 3.5 9.0503 3.5 14 3.5C18.9497 3.5 21.4245 3.5 22.9617 5.0372C24.5 6.5765 24.5 9.0503 24.5 14C24.5 18.9497 24.5 21.4245 22.9617 22.9617C21.4256 24.5 18.9497 24.5 14 24.5C9.0503 24.5 6.57545 24.5 5.0372 22.9617C3.5 21.4256 3.5 18.9497 3.5 14Z"
        stroke={`url(#${borderGradient})`}
        strokeWidth={strokeWidth}
      />

      <path
        d="M10.5 11L8.5 14M8.5 14L6.5 17M8.5 14L6.5 11M8.5 14L10.5 17M16 11L14 14M14 14L12 17M14 14L12 11M14 14L16 17M21.5 11L19.5 14M19.5 14L17.5 17M19.5 14L17.5 11M19.5 14L21.5 17"
        stroke={`url(#${innerGradient})`}
        strokeWidth={0.75}
        strokeLinecap="round"
      />

      <defs>
        <radialGradient
          id={fillGradient}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(13.4668 14.4668) scale(12.0003 28.4104)"
        >
          <stop offset="0" stopColor={backgroundStartColor} />
          <stop offset="1" stopColor={backgroundStopColor} />
        </radialGradient>

        <radialGradient
          id={borderGradient}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(14 14) rotate(90) scale(14 20.5045)"
        >
          <stop offset="0" stopColor={backgroundStartColor} />
          <stop offset="1" stopColor={backgroundStopColor} />
        </radialGradient>

        <radialGradient
          id={innerGradient}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(14 14) rotate(90) scale(10.5 9.94337)"
        >
          <stop offset="0" stopColor={backgroundStartColor} />
          <stop offset="1" stopColor={backgroundStopColor} />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default ExtraIconSVG;