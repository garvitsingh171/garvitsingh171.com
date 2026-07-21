import type {
  OpenSourceContent,
  OpenSourceLink,
} from "../../types/openSource.js";
import { AnimatedSection } from "../animation";
import { Button } from "../ui";
import { ExternalLink } from "./ExternalLink";
import { hasItems } from "./openSourceUtils";

type OpenSourceClosingSectionProps = {
  content: OpenSourceContent["closing"];
  links: OpenSourceLink[];
};

export function OpenSourceClosingSection({
  content,
  links,
}: OpenSourceClosingSectionProps) {
  const primaryLink = links[0];

  return (
    <AnimatedSection
      className="section-divider"
      aria-labelledby="open-source-closing-heading"
    >
      <div className="rounded-lg border border-border bg-surface p-6 sm:p-8">
        <h2
          id="open-source-closing-heading"
          className="max-w-3xl text-heading-1 text-primary"
        >
          {content.heading}
        </h2>

        <div className="mt-5 max-w-3xl space-y-4 text-body-md text-secondary">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {primaryLink ? (
            <ExternalLink
              href={primaryLink.url}
              variant="button"
              buttonVariant="secondary"
              className="w-full sm:w-auto"
              ariaLabel={`${primaryLink.label} in a new tab`}
            >
              {primaryLink.label}
            </ExternalLink>
          ) : null}

          <Button
            as="link"
            to="/contact"
            variant={hasItems(links) ? "outline" : "secondary"}
            className="w-full sm:w-auto"
          >
            Contact me
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
