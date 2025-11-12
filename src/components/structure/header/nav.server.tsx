import Link from "next/link";
import { navItems } from "./nav-items";

export const Nav: React.FC = () => {
  return (
    <nav className="w-full">
      <ul className="flex justify-center font-medium text-xs">
        {navItems.map((item, _index) => (
          <li key={item.label}>
            <Link className="rounded p-2" href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
