import type {
  OpenSourceContent,
  OpenSourceLink,
} from "../../types/openSource.js";
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
    <section
      className="border-t border-slate-800 pt-10 sm:pt-12"
      aria-labelledby="open-source-closing-heading"
    >
      <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
        <h2
          id="open-source-closing-heading"
          className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          {content.heading}
        </h2>

        <div className="mt-5 max-w-3xl space-y-4 text-base leading-7 text-slate-300">
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
    </section>
  );
}
