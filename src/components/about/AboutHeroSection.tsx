import { Button } from "../ui";
import type { AboutIntroduction } from "../../types/about.js";
import { ResumeDownloadButton } from "../resume";

type AboutHeroSectionProps = {
  content: AboutIntroduction;
};

export function AboutHeroSection({ content }: AboutHeroSectionProps) {
  return (
    <section
      aria-labelledby="about-page-heading"
    >
      <div className="max-w-4xl">
        <p className="text-label text-accent">
          Software Product Engineering
        </p>

        <h1
          id="about-page-heading"
          className="mt-5 max-w-4xl text-display-2 text-primary"
        >
          {content.heading}
        </h1>

        <div className="mt-6 max-w-3xl space-y-4 text-body-lg text-secondary">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button
            as="link"
            to="/projects"
            variant="secondary"
            className="w-full sm:w-auto"
          >
            View projects
          </Button>
          <ResumeDownloadButton
            variant="outline"
            className="w-full sm:w-auto"
          />
          <Button
            as="link"
            to="/contact"
            variant="ghost"
            className="w-full sm:w-auto"
          >
            Contact me
          </Button>
        </div>
      </div>
    </section>
  );
}
