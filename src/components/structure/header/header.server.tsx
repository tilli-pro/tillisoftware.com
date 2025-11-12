import { Link } from "@/components/ui/link";
import { cn } from "@/lib/utils";
import { Nav } from "./nav.server";

// TODO: finish server render of Header
export const Header: React.FC = () => {
  return (
    <header
      className={cn(
        "sticky z-99999 h-16 w-full transition-[top] duration-500 will-change-auto",
        "top-0",
      )}
    >
      <div className="header-blur pointer-events-none absolute inset-0 z-0 w-full bg-linear-to-t from-background/0 to-background/30 backdrop-blur-lg" />
      <div className="page-width z-10 flex h-full items-center gap-4 py-2">
        <div className="z-9999 w-24 min-w-24 flex-1 font-header font-medium text-2xl tracking-normal md:flex-0">
          tilli.
        </div>
        <div className="flex flex-1 justify-center">
          <Nav />
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
