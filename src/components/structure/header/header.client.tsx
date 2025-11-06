"use client";

import { useEffect, useState } from "react";
import { Link } from "@/components/ui/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
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
        <div className="children: flex items-center justify-center gap-2">
          <div className="relative h-[112.5px] w-[200px]">t</div>
          <div className="relative h-[112.5px] w-[200px]">tp</div>
          <div className="relative h-[112.5px] w-[200px]">n</div>
        </div>
      </div>
    ),
  },
  {
    title: "Services",
    content: (
      <div className="min-w-[300px] max-w-lg">
        <div className="grid grid-cols-2 items-stretch justify-stretch gap-2">
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
    content: <div>Industries</div>,
  },
  {
    title: "Developers",
    content: <div>Developers</div>,
  },
  {
    title: "Resources",
    content: <div>Resources</div>,
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
        "sticky z-99999 h-16 w-full transition-[top] duration-500 will-change-auto",
        hidden ? "-top-16" : "top-0",
      )}
    >
      <div className="header-blur pointer-events-none absolute inset-0 z-0 w-full bg-linear-to-t from-background/0 to-background/30 backdrop-blur-lg" />
      <div className="page-width z-10 flex h-full items-center gap-4 py-2">
        <div className="z-9999 w-24 min-w-24 flex-1 font-header font-medium text-2xl tracking-normal md:flex-0">
          tilli.
        </div>
        <div className="flex flex-1 justify-center">
          <NavigationMenu className="w-full" viewport={mobile}>
            <NavigationMenuList className="justify-center">
              {navContent.map(({ title, content }) => (
                <NavigationMenuItem key={title}>
                  <NavigationMenuTrigger
                    className="bg-transparent px-2 py-1 text-xs duration-500 hover:bg-accent/10 focus:bg-accent/50 data-[state=open]:bg-accent/30 data-[state=open]:focus:bg-accent/40 data-[state=open]:hover:bg-accent/20"
                    noIcon
                  >
                    {title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="shadow-[#325EF6]/30 group-data-[viewport=false]/navigation-menu:shadow-2xl">
                    {content}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="z-9999 hidden w-24 flex-0 items-center gap-4 text-xs md:flex">
          {/* <Link href="/pricing">Pricing</Link> */}
          <Link asButton href="/trial">
            Free Trial
          </Link>
        </div>
      </div>
    </header>
  );
};
