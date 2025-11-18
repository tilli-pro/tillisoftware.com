import type { LucideIcon } from "lucide-react";
import {
  BrickWallShield,
  BriefcaseBusiness,
  Building,
  DollarSign,
  Factory,
  Fuel,
  Headset,
  Landmark,
  MonitorCloud,
  PhoneCall,
  ShoppingBasket,
  SquareLibrary,
  Store,
  Toilet,
  ToolCase,
  UserStar,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type SolutionRender = {
  name: string | React.ReactElement;
  Icon: LucideIcon;
  iconClassName?: string;
  href: string;
};

type SolutionBase = {
  title: string | React.ReactElement;
  Icon: LucideIcon;
  iconClassName?: string;
};

type SolutionNode = SolutionBase & {
  href: string;
};
type SolutionCategory = SolutionBase & {
  solutions: SolutionNode[];
};

const [
  industrySolutions,
  _useCaseSolutions,
  _sizeSolutions,
]: SolutionCategory[] = [
  {
    title: "By Industry",
    Icon: BriefcaseBusiness,
    solutions: [
      {
        title: "Utilities",
        Icon: Fuel,
        href: "/industries/utilities",
      },
      {
        title: "Telecommunications",
        Icon: PhoneCall,
        href: "/industries/telecommunications",
      },
      {
        title: "Insurance",
        Icon: BrickWallShield,
        href: "/industries/insurance",
      },
      {
        title: "Public Sector",
        Icon: SquareLibrary,
        href: "/industries/public",
      },
      {
        title: "E-Commerce",
        Icon: ShoppingBasket,
        href: "/industries/e-commerce",
      },
      {
        title: "Education",
        Icon: Landmark,
        href: "/industries/education",
      },
      {
        title: "Financial Services",
        Icon: DollarSign,
        href: "/industries/finance",
      },
      {
        title: "Education",
        Icon: Landmark,
        href: "/industries/asdf",
      },
    ],
  },
  {
    title: "By Use Case",
    Icon: ToolCase,
    solutions: [
      {
        title: (
          <span>
            Centralized
            <br />
            Communications
          </span>
        ),
        Icon: Headset,
        href: "/use/cpaas",
      },
      {
        title: "SaaS Billing",
        Icon: MonitorCloud,
        href: "/use/saas",
      },
      {
        title: "Customer Experience",
        Icon: UserStar,
        href: "/use/cx",
      },
      {
        title: "Idk I need a 4th",
        Icon: Factory,
        href: "/use/stuff",
      },
    ],
  },
  {
    title: "By Size",
    Icon: Factory,
    solutions: [
      {
        title: "Startup",
        Icon: Toilet,
        href: "/solutions/startup",
      },
      {
        title: "SMB",
        Icon: Store,
        href: "/solutions/smb",
      },
      {
        title: "Enterprise",
        Icon: Building,
        href: "/solutions/enterprise",
      },
    ],
  },
] as const;

const NavSolutionHeader: React.FC<SolutionCategory> = ({ title, Icon }) => {
  return (
    <div className="ml-2 flex items-center justify-start gap-1 font-header font-medium text-accent-foreground/60 text-xs uppercase select-none self-end">
      <Icon className="size-3 text-xs" size={12} />
      {title}
    </div>
  );
};

const NavSolution: React.FC<SolutionNode> = ({
  title,
  Icon,
  iconClassName,
  href,
}) => {
  return (
    <Link
      className="group/solution box-border flex h-10 min-w-30 items-center justify-start gap-2 rounded bg-background/0 p-1 ring-2 ring-background/0 transition-all hover:bg-background/40 hover:ring-background/70 lg:min-w-50 select-none"
      href={href}
    >
      <div
        className={cn(
          iconClassName,
          "flex size-8 items-center justify-center rounded bg-linear-to-br from-muted/60 via-80% via-blue-500/80 to-cyan-400/90 transition-all bg-size-[400%_400%] bg-top-left group-hover/solution:bg-bottom-right",
        )}
      >
        <Icon
          className="text-muted-foreground group-hover/solution:text-white"
          size={18}
        />
      </div>
      {title}
    </Link>
  );
};

export const NavSolutions: React.FC = () => {
  return (
    <div className="nav-solutions w-full p-2">
      <div className="col-span-1 lg:col-span-2">
        <NavSolutionHeader
          Icon={industrySolutions.Icon}
          solutions={industrySolutions.solutions}
          title={industrySolutions.title}
        />
      </div>
      {industrySolutions.solutions.map((solution) => (
        <div key={solution.href}>
          <NavSolution {...solution} />
        </div>
      ))}

      <div className="col-start-2 lg:col-start-3">
        <NavSolutionHeader
          Icon={_useCaseSolutions.Icon}
          solutions={_useCaseSolutions.solutions}
          title={_useCaseSolutions.title}
        />
      </div>
      {_useCaseSolutions.solutions.map((solution) => (
        <div className="col-start-2 lg:col-start-3" key={solution.href}>
          <NavSolution {...solution} />
        </div>
      ))}

      <div className="col-start-2 lg:col-start-4">
        <NavSolutionHeader
          Icon={_sizeSolutions.Icon}
          solutions={_sizeSolutions.solutions}
          title={_sizeSolutions.title}
        />
      </div>
      {_sizeSolutions.solutions.map((solution) => (
        <div className="col-start-2 lg:col-start-4" key={solution.href}>
          <NavSolution {...solution} />
        </div>
      ))}
    </div>
  );
};
