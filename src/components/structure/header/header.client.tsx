"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "@/components/ui/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const navContent: { title: string; content: React.ReactElement }[] = [
  {
    title: "Products",
    content: (
      <div className="max-w-lg">
        <div className="flex items-center justify-center gap-2 children:">
          <div className="relative w-[200px] h-[112.5px]">t</div>
          <div className="relative w-[200px] h-[112.5px]">tp</div>
          <div className="relative w-[200px] h-[112.5px]">n</div>
        </div>
      </div>
    ),
  },
  {
    title: "Services",
    content: (
      <div className="max-w-lg min-w-[300px]">
        <div className="grid grid-cols-2 gap-2 items-stretch justify-stretch">
          <div className="size-32">a</div>
          <div className="size-32">a</div>
          <div className="size-32">a</div>
          <div className="size-32">a</div>
          <div className="size-32">a</div>
          <div className="size-32">a</div>
        </div>
      </div>
    ),
  },
  {
    title: "Industries",
    content: <div>jklkm</div>,
  },
  {
    title: "Developers",
    content: <div>feeewe</div>,
  },
  {
    title: "Resources",
    content: <div>weweawe</div>,
  },
];

export const Header: React.FC = () => {
  const mobile = useIsMobile();
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
        "w-full sticky z-99999 will-change-auto h-16 transition-[top] duration-500",
        hidden ? "-top-16" : "top-0",
      )}
    >
      <div className="header-blur z-0 pointer-events-none absolute inset-0 w-full bg-linear-to-t from-background/0 to-background/30 backdrop-blur-lg" />
      <div className="page-width flex items-center z-10 h-full py-2 px-8 gap-4">
        <div className="flex-1 md:flex-0 font-header text-2xl font-medium tracking-normal z-9999 w-16">
          tilli
        </div>
        <div className="flex-1 flex justify-center">
          <NavigationMenu viewport={mobile} className="w-full">
            <NavigationMenuList className="justify-center">
              {navContent.map(({ title, content }) => (
                <NavigationMenuItem key={title}>
                  <NavigationMenuTrigger
                    noIcon
                    className="text-xs px-2 py-1 bg-transparent hover:bg-accent/10 data-[state=open]:hover:bg-accent/20 data-[state=open]:bg-accent/30 data-[state=open]:focus:bg-accent/40 focus:bg-accent/50 duration-500"
                  >
                    {title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="group-data-[viewport=false]/navigation-menu:shadow-2xl shadow-[#325EF6]/30">
                    {content}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="hidden items-center gap-4 z-9999 md:flex text-xs w-16">
          {/* <Link href="/pricing">Pricing</Link> */}
          <Link href="/trial" asButton>
            Free Trial
          </Link>
        </div>
      </div>
    </header>
  );
};
