import { NavLink } from "react-router-dom";
import type { NavigationItem } from "../../constants/navigation";

type MobileNavigationProps = {
  id: string;
  isOpen: boolean;
  links: readonly NavigationItem[];
  onNavigate: () => void;
};

function getMobileLinkClasses({ isActive }: { isActive: boolean }) {
  return [
    "flex min-h-11 items-center rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400",
    isActive
      ? "border border-blue-400/60 bg-blue-500/15 text-white"
      : "border border-transparent text-slate-300 hover:bg-slate-900 hover:text-white",
  ].join(" ");
}

export function MobileNavigation({
  id,
  isOpen,
  links,
  onNavigate,
}: MobileNavigationProps) {
  return (
    <nav
      id={id}
      aria-label="Mobile primary navigation"
      aria-hidden={!isOpen}
      className={[
        "border-t border-slate-800 bg-slate-950 px-4 py-3 sm:px-6 lg:hidden",
        isOpen ? "block" : "hidden",
      ].join(" ")}
    >
      <ul className="mx-auto grid max-w-5xl gap-1">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.href}
              className={getMobileLinkClasses}
              end={link.href === "/"}
              onClick={onNavigate}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
