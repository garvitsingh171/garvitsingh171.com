import { useEffect } from "react";
import { EmptyState } from "../components/ui";
import { fallbackStates } from "../data/fallbackStates";

function useNotFoundMetadata() {
  useEffect(() => {
    const previousTitle = document.title;
    const existingDescription = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    const previousDescription = existingDescription
      ? existingDescription.getAttribute("content")
      : null;
    const description =
      existingDescription ?? document.createElement("meta");

    if (!existingDescription) {
      description.setAttribute("name", "description");
      document.head.append(description);
    }

    document.title = fallbackStates.globalNotFound.meta.title;
    description.setAttribute(
      "content",
      fallbackStates.globalNotFound.meta.description,
    );

    return () => {
      document.title = previousTitle;

      if (existingDescription) {
        if (previousDescription === null) {
          existingDescription.removeAttribute("content");
        } else {
          existingDescription.setAttribute("content", previousDescription);
        }
      }

      if (!existingDescription) {
        description.remove();
      }
    };
  }, []);
}

export default function NotFound() {
  useNotFoundMetadata();

  return (
    <EmptyState
      label={fallbackStates.globalNotFound.label}
      title={fallbackStates.globalNotFound.title}
      description={fallbackStates.globalNotFound.description}
      headingLevel="h1"
      variant="page"
      className="my-4 sm:my-8"
      primaryAction={{
        type: "link",
        label: "Go to homepage",
        to: "/",
      }}
      secondaryAction={{
        type: "link",
        label: "View projects",
        to: "/projects",
      }}
    />
  );
}
