import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { themeIconVariants } from "@/config/animations";
import { useResolvedTheme } from "@/hooks/useResolvedTheme";
import { applyTheme, getStoredTheme, themeStorageKey } from "@/lib/theme";

function SunIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 4V2M12 22v-2M4.93 4.93 3.52 3.52M20.48 20.48l-1.41-1.41M4 12H2M22 12h-2M4.93 19.07l-1.41 1.41M20.48 3.52l-1.41 1.41"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path
        d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5 7.5 7.5 0 1 0 20.5 15.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ThemeToggle() {
  const theme = useResolvedTheme();
  const nextTheme = theme === "dark" ? "light" : "dark";
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    function handleSystemThemeChange(event: MediaQueryListEvent) {
      if (getStoredTheme()) {
        return;
      }

      applyTheme(event.matches ? "dark" : "light");
    }

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const label =
    nextTheme === "dark" ? "Switch to dark theme" : "Switch to light theme";

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={() => {
        try {
          window.localStorage.setItem(themeStorageKey, nextTheme);
        } catch {
          // The root theme remains the active source of truth if storage is blocked.
        }

        applyTheme(nextTheme);
      }}
      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-control border border-border bg-surface text-secondary transition duration-200 hover:border-border-strong hover:bg-surface-hover hover:text-primary focus-visible:outline-focus"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={shouldReduceMotion ? false : "hidden"}
          animate={shouldReduceMotion ? undefined : "visible"}
          exit={shouldReduceMotion ? undefined : "exit"}
          variants={shouldReduceMotion ? undefined : themeIconVariants}
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
