"use client";

import Link, { type LinkProps } from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "../button";
import { LinkArrow } from "./link-arrow";

interface LinkButtonProps extends LinkProps {
  className?: string;
  useIcon?: boolean;
  variant?: "gradient" | "ghost";
}
export const LinkButton: React.FC<React.PropsWithChildren<LinkButtonProps>> = ({
  children,
  variant = "gradient",
  className,
  useIcon = true,
  ...linkProps
}) => {
  return (
    <Button
      className={cn(
        "flex h-7 items-center rounded-sm px-2 text-xs lg:h-8 lg:rounded-md lg:px-3 lg:text-sm",
        className,
      )}
      size="sm"
      variant={variant}
    >
      <Link {...linkProps}>{children}</Link>
      {useIcon && (
        <span className="ml-1">
          <LinkArrow color={variant === "ghost" ? "black" : "white"} />
        </span>
      )}
    </Button>
  );
};
