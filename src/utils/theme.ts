export type ThemePreference = "light" | "dark";

export const themeStorageKey = "garvit-theme";

export function getSystemTheme(): ThemePreference {
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }

  return "light";
}

export function getDocumentTheme(): ThemePreference | null {
  if (typeof document === "undefined") {
    return null;
  }

  const documentTheme = document.documentElement.dataset.theme;

  if (documentTheme === "light" || documentTheme === "dark") {
    return documentTheme;
  }

  if (document.documentElement.classList.contains("dark")) {
    return "dark";
  }

  return null;
}

export function getStoredTheme(): ThemePreference | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const storedTheme = window.localStorage.getItem(themeStorageKey);

    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }
  } catch {
    return null;
  }

  return null;
}

export function getInitialTheme(): ThemePreference {
  return getDocumentTheme() ?? getStoredTheme() ?? getSystemTheme();
}

export function applyTheme(theme: ThemePreference) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
}
