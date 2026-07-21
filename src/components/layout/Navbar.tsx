import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  contactNavigation,
  mobileNavigation,
  primaryNavigation,
} from "../../constants/navigation";
import { SITE_CONFIG } from "../../constants/site";
import { Button, ThemeToggle } from "../ui";
import { MobileNavigation } from "./MobileNavigation";

const mobileNavigationId = "primary-mobile-navigation";

function getDesktopLinkClasses({ isActive }: { isActive: boolean }) {
  return [
    "relative whitespace-nowrap rounded-sm px-1 py-2 text-sm font-semibold transition duration-200",
    "after:absolute after:inset-x-1 after:bottom-0 after:h-px after:origin-left after:bg-accent after:transition-transform after:duration-200",
    "focus-visible:outline-focus",
    isActive
      ? "text-primary after:scale-x-100"
      : "text-secondary after:scale-x-0 hover:text-primary hover:after:scale-x-100",
  ].join(" ");
}

function MenuIcon({ isOpen }: { isOpen: boolean }) {
  if (isOpen) {
    return (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M6 6l12 12M18 6 6 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BrandMark() {
  return (
    <span
      aria-hidden="true"
      className="flex h-9 w-12 shrink-0 items-center justify-center rounded-[0.7rem] border border-border bg-[#171817] text-[#f7f7f3] transition duration-200 group-hover:border-accent-border"
    >
      <svg
        className="h-6 w-9"
        viewBox="0 0 108 72"
        fill="none"
        role="presentation"
      >
        <path
          fill="currentColor"
          d="M25 12h5v48H18V26h-4v-9l11-5Z"
        />
        <path
          fill="#3157d5"
          d="M39 12h31v13H39V12Zm15 11h16L57 60H44l10-37Z"
        />
        <path
          fill="currentColor"
          d="M86 12h5v48H79V26h-4v-9l11-5Z"
        />
      </svg>
    </span>
  );
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  useEffect(() => {
    const closeAfterRouteChange = window.setTimeout(() => {
      setIsMenuOpen(false);
    }, 0);

    return () => {
      window.clearTimeout(closeAfterRouteChange);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") {
        return;
      }

      setIsMenuOpen(false);
      menuButtonRef.current?.focus();
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    function closeMenuAtDesktopWidth(event: MediaQueryListEvent) {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    }

    desktopQuery.addEventListener("change", closeMenuAtDesktopWidth);

    return () => {
      desktopQuery.removeEventListener("change", closeMenuAtDesktopWidth);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/90 backdrop-blur">
      <div className="mx-auto flex min-h-18 max-w-[var(--container-full)] items-center justify-between gap-4 px-5 py-3 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <NavLink
          to="/"
          aria-label="Garvit Singh home"
          className="group inline-flex min-w-0 items-center gap-3 rounded-sm text-base font-semibold text-primary transition hover:text-accent focus-visible:outline-focus sm:text-lg"
          end
        >
          <BrandMark />
          <span className="block truncate">{SITE_CONFIG.name}</span>
        </NavLink>

        <div className="hidden items-center gap-6 lg:flex">
          <nav
            aria-label="Primary navigation"
            className="flex items-center gap-6"
          >
            {primaryNavigation.map((link) => (
              <NavLink
                key={link.id}
                to={link.href}
                className={getDesktopLinkClasses}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button as="link" to={contactNavigation.href} size="sm">
              {contactNavigation.label}
            </Button>
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls={mobileNavigationId}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
            className={[
              "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-control border transition duration-200 focus-visible:outline-focus",
              isMenuOpen
                ? "border-accent bg-accent text-inverse-text"
                : "border-border bg-surface text-secondary hover:border-border-strong hover:bg-surface-hover hover:text-primary",
            ].join(" ")}
          >
            <MenuIcon isOpen={isMenuOpen} />
          </button>
        </div>
      </div>

      <MobileNavigation
        id={mobileNavigationId}
        isOpen={isMenuOpen}
        links={mobileNavigation}
        onNavigate={closeMenu}
      />
    </header>
  );
}
