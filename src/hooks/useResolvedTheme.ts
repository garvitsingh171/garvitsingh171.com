import { useEffect, useState } from "react";
import {
  getDocumentTheme,
  getInitialTheme,
  getSystemTheme,
  type ThemePreference,
} from "../utils/theme";

export function useResolvedTheme() {
  const [theme, setTheme] = useState<ThemePreference>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;

    function syncTheme() {
      const nextTheme = getDocumentTheme() ?? getSystemTheme();

      setTheme((currentTheme) =>
        currentTheme === nextTheme ? currentTheme : nextTheme,
      );
    }

    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return theme;
}
