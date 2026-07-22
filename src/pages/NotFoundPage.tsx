import { routes } from "@/routes/routes";
import { SEO } from "@/components/seo";
import { EmptyState } from "@/components/ui";
import { fallbackStates } from "@/data/fallbackStates";

export default function NotFound() {
  return (
    <>
      <SEO
        title={fallbackStates.globalNotFound.meta.title}
        description={fallbackStates.globalNotFound.meta.description}
        canonicalUrl={null}
        noIndex
      />
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
          to: routes.projects,
        }}
      />
    </>
  );
}
