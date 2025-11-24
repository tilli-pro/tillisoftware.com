interface LinkArrowProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}
export const LinkArrow: React.FC<LinkArrowProps> = ({
  width,
  height,
  color = "white",
}) => {
  return (
    <svg
      className="size-2"
      fill="none"
      height={height ?? 8}
      viewBox="0 0 8 8"
      width={width ?? 8}
    >
      <title>Link Arrow</title>
      <g clipPath="url(#clip0_544_2344)">
        <path
          d="M0.800781 0.800049H7.20078V7.20005"
          stroke={color ?? "white"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M0.800781 7.20005L7.20078 0.800049"
          stroke={color ?? "white"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_544_2344">
          <rect fill="white" height="8" width="8" />
        </clipPath>
      </defs>
    </svg>
  );
};
