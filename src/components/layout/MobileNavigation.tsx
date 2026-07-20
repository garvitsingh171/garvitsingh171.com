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
    "flex min-h-12 items-center rounded-control border px-4 py-3 text-base font-semibold transition duration-200",
    "focus-visible:outline-focus",
    isActive
      ? "border-accent-border bg-accent-soft text-accent"
      : "border-transparent text-secondary hover:border-border hover:bg-surface-hover hover:text-primary",
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
        "border-t border-border bg-surface px-5 py-4 shadow-elevated sm:px-6 lg:hidden",
        isOpen ? "block" : "hidden",
      ].join(" ")}
    >
      <ul className="mx-auto grid max-w-[var(--container-full)] gap-2">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.href}
              className={getMobileLinkClasses}
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
