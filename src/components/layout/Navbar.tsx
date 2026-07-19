import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { primaryNavigation } from "../../constants/navigation";
import { SITE_CONFIG } from "../../constants/site";
import { MobileNavigation } from "./MobileNavigation";

const mobileNavigationId = "primary-mobile-navigation";

function getDesktopLinkClasses({ isActive }: { isActive: boolean }) {
  return [
    "whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400",
    isActive
      ? "bg-blue-500 text-white"
      : "text-slate-300 hover:bg-slate-900 hover:text-white",
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
    <header className="border-b border-slate-800 bg-slate-950/90">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <NavLink
          to="/"
          className="min-w-0 rounded-sm text-base font-semibold text-white transition-colors hover:text-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400 sm:text-lg"
          end
        >
          <span className="block truncate">{SITE_CONFIG.name}</span>
        </NavLink>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {primaryNavigation.map((link) => (
            <NavLink
              key={link.id}
              to={link.href}
              className={getDesktopLinkClasses}
              end={link.href === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls={mobileNavigationId}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          className={[
            "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border transition-colors duration-150 lg:hidden",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400",
            isMenuOpen
              ? "border-blue-400/60 bg-blue-500 text-white"
              : "border-slate-700 bg-slate-900/60 text-slate-200 hover:border-slate-600 hover:bg-slate-900 hover:text-white",
          ].join(" ")}
        >
          <MenuIcon isOpen={isMenuOpen} />
        </button>
      </div>

      <MobileNavigation
        id={mobileNavigationId}
        isOpen={isMenuOpen}
        links={primaryNavigation}
        onNavigate={closeMenu}
      />
    </header>
  );
}
