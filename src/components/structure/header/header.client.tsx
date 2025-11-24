"use client";

import NextLink from "next/link";
import { useEffect, useState } from "react";
import { LinkButton } from "@/components/ui/links/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Nav } from "./nav.client";

export const Header: React.FC = () => {
  const _mobile = useIsMobile();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("#logo-footer");
    if (footer) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setHidden(true);
            } else {
              setHidden(false);
            }
          });
        },
        { threshold: 1 },
      );

      observer.observe(footer);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return (
    <header
      className={cn(
        "sticky z-99999 h-16 w-full transition-[top] duration-500 will-change-auto",
        hidden ? "-top-16" : "top-0",
      )}
    >
      <div className="header-blur pointer-events-none absolute inset-0 z-0 w-full bg-linear-to-t from-background/0 to-background/30 backdrop-blur-lg" />
      <div className="page-width relative z-10 flex h-full items-center gap-4 py-2">
        <div className="absolute left-0 z-9999 ml-4 font-header font-medium text-2xl tracking-normal">
          <NextLink href="/">tilli.</NextLink>
        </div>
        <div className="flex flex-1 justify-end md:mx-12 md:justify-center">
          <Nav />
        </div>
        <div className="absolute right-0 z-9999 mr-4 hidden items-center gap-2 text-xs md:flex">
          <LinkButton
            className="hidden lg:flex"
            href="/pricing"
            variant="ghost"
          >
            Pricing
          </LinkButton>
          <LinkButton href="/trial">Free Trial</LinkButton>
        </div>
      </div>
    </header>
  );
};
