import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { NavLink } from "react-router-dom";
import {
  mobileMenuItemVariants,
  mobileMenuListVariants,
  mobileMenuVariants,
} from "@/config/animations";
import type { NavigationItem } from "@/data/navigation";
import { cn } from "@/lib/cn";

type MobileNavigationProps = {
  id: string;
  isOpen: boolean;
  links: readonly NavigationItem[];
  onNavigate: () => void;
};

function getMobileLinkClasses({ isActive }: { isActive: boolean }) {
  return cn(
    "flex min-h-12 items-center rounded-control border px-4 py-3 text-base font-semibold transition duration-200",
    "focus-visible:outline-focus",
    isActive
      ? "border-accent-border bg-accent-soft text-accent"
      : "border-transparent text-secondary hover:border-border hover:bg-surface-hover hover:text-primary",
  );
}

export function MobileNavigation({
  id,
  isOpen,
  links,
  onNavigate,
}: MobileNavigationProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence initial={false}>
      {isOpen ? (
        <motion.nav
          id={id}
          aria-label="Mobile primary navigation"
          initial={shouldReduceMotion ? false : "hidden"}
          animate={shouldReduceMotion ? undefined : "visible"}
          exit={shouldReduceMotion ? undefined : "exit"}
          variants={shouldReduceMotion ? undefined : mobileMenuVariants}
          className="border-t border-border bg-surface px-5 py-4 shadow-elevated sm:px-6 lg:hidden"
        >
          <motion.ul
            variants={shouldReduceMotion ? undefined : mobileMenuListVariants}
            className="mx-auto grid max-w-[var(--container-full)] gap-2"
          >
            {links.map((link) => (
              <motion.li
                key={link.id}
                variants={
                  shouldReduceMotion ? undefined : mobileMenuItemVariants
                }
              >
                <NavLink
                  to={link.href}
                  className={getMobileLinkClasses}
                  onClick={onNavigate}
                >
                  {link.label}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>
      ) : null}
    </AnimatePresence>
  );
}
