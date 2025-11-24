import { cva, type VariantProps } from "class-variance-authority";
import NextLink, { type LinkProps } from "next/link";
import { use } from "react";
import { cn } from "@/lib/utils";
import { LinkArrow } from "./link-arrow";

const inlineLinkVariants = cva("inline-flex gap-1 items-center", {
  variants: {
    type: {
      default: ["text-muted-foreground hover:text-primary"],
      highlighted: [""],
      gradient: [
        "bg-position-[0%_0] bg-size-[300%_100%] bg-clip-text text-transparent transition-all duration-700 [background-image:linear-gradient(to_right,#6CD3EF_16.7%,#5C9BF4_33.3%,#2E67F8_50%,#6CD3EF_60%,#5C9BF4_70%,#2E67F8_100%)] hover:bg-position-[200%_0]",
      ],
    },
  },
  defaultVariants: {
    type: "default",
  },
});

interface InlineLinkProps
  extends VariantProps<typeof inlineLinkVariants>,
    LinkProps {
  className?: string;
  useIcon?: boolean;
}
export const Link: React.FC<React.PropsWithChildren<InlineLinkProps>> = ({
  type,
  useIcon = false,
  children,
  className,
  ...linkProps
}) => {
  const classes = inlineLinkVariants({ type, className });
  return (
    <NextLink className={cn(classes)} {...linkProps}>
      {children}
      {useIcon && <LinkArrow color={type === "gradient" ? "white" : "black"} />}
    </NextLink>
  );
};
