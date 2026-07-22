import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function getHashTarget(hash: string) {
  if (!hash) {
    return null;
  }

  let id: string;

  try {
    id = window.decodeURIComponent(hash.slice(1));
  } catch {
    return null;
  }

  if (!id) {
    return null;
  }

  return document.getElementById(id);
}

function focusElement(element: HTMLElement) {
  const hadTabIndex = element.hasAttribute("tabindex");

  if (!hadTabIndex) {
    element.setAttribute("tabindex", "-1");
  }

  element.focus({ preventScroll: true });

  if (!hadTabIndex) {
    element.addEventListener(
      "blur",
      () => {
        element.removeAttribute("tabindex");
      },
      { once: true },
    );
  }
}

function getRouteFocusTarget() {
  return (
    document.querySelector<HTMLElement>("main h1") ??
    document.getElementById("main-content")
  );
}

export function RouteScrollManager() {
  const location = useLocation();
  const hasHandledInitialRoute = useRef(false);

  useEffect(() => {
    if (!("scrollRestoration" in window.history)) {
      return undefined;
    }

    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previousRestoration;
    };
  }, []);

  useLayoutEffect(() => {
    const shouldMoveFocus = hasHandledInitialRoute.current;
    hasHandledInitialRoute.current = true;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let animationFrame = 0;

    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });

      if (shouldMoveFocus) {
        const focusTarget = getRouteFocusTarget();
        if (focusTarget) {
          focusElement(focusTarget);
        }
      }

      return () => undefined;
    }

    animationFrame = window.requestAnimationFrame(() => {
      const target = getHashTarget(location.hash);

      if (!target) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });

        if (shouldMoveFocus) {
          const focusTarget = getRouteFocusTarget();
          if (focusTarget) {
            focusElement(focusTarget);
          }
        }

        return;
      }

      target.scrollIntoView({
        block: "start",
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });

      if (shouldMoveFocus) {
        focusElement(target);
      }
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [location.hash, location.pathname, location.search]);

  return null;
}
