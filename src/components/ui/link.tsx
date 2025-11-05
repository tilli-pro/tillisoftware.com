import _Link, { type LinkProps as _LinkProps } from "next/link";
import { Fragment } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import { Button } from "./button";

interface LinkArrowProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}
const LinkArrow: React.FC<LinkArrowProps> = ({ width, height, color }) => {
  return (
    <svg
      width={width ?? 8}
      height={height ?? 8}
      className="size-2"
      viewBox="0 0 8 8"
      fill="none"
    >
      <title>Link Arrow</title>
      <g clipPath="url(#clip0_544_2344)">
        <path
          d="M0.800781 0.800049H7.20078V7.20005"
          stroke={color ?? "black"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.800781 7.20005L7.20078 0.800049"
          stroke={color ?? "black"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_544_2344">
          <rect width="8" height="8" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

interface LinkProps extends _LinkProps {
  className?: string;
  asButton?: boolean;
  noIcon?: boolean;
  color?: string;
}
export const Link: React.FC<React.PropsWithChildren<LinkProps>> = ({
  children,
  className,
  asButton,
  noIcon,
  color,
  ...props
}) => {
  const Outer = asButton ? Button : Fragment;
  const outerProps = asButton
    ? { variant: "gradient" as const, size: "sm" as const }
    : {};

  return (
    <Outer {...outerProps}>
      <_Link
        {...props}
        className={cn(
          "flex items-center justify-start gap-2",
          {
            "hover:text-primary/90": !asButton,
          },
          className,
        )}
      >
        {children}
        {!noIcon && (
          <LinkArrow
            width={asButton ? 4 : 9}
            height={asButton ? 4 : 9}
            color={asButton ? "white" : (color ?? "black")}
          />
        )}
      </_Link>
    </Outer>
  );
};
