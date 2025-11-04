"use client";

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

const navContent: { title: string; content: React.ReactElement }[] = [
  {
    title: "Products",
    content: <div>stuff</div>,
  },
  {
    title: "Services",
    content: <div>asdf</div>,
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

  return (
    <header className="w-full sticky top-0 z-9999 will-change-auto h-16">
      <div className="header-blur z-0 pointer-events-none absolute inset-0 w-full bg-linear-to-t from-background/0 to-background/30 backdrop-blur-lg" />
      <div className="page-width flex items-center z-10 h-full py-2 px-8 gap-4">
        <div className="flex-1 md:flex-0 font-header text-2xl font-medium tracking-normal z-9999 w-8">
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
                  <NavigationMenuContent>{content}</NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="hidden items-center gap-4 z-9999 md:flex text-xs w-8">
          {/* <Link href="/pricing">Pricing</Link> */}
          <Link href="/trial" asButton>
            Free Trial
          </Link>
        </div>
      </div>
    </header>
  );
};
