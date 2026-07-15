import { Button } from "../ui";
import type { AboutIntroduction } from "../../types/about.js";

type AboutHeroSectionProps = {
  content: AboutIntroduction;
};

export function AboutHeroSection({ content }: AboutHeroSectionProps) {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24"
      aria-labelledby="about-page-heading"
    >
      <div className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
          Software Product Engineering
        </p>

        <h1
          id="about-page-heading"
          className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {content.heading}
        </h1>

        <div className="mt-6 max-w-3xl space-y-4 text-base leading-8 text-slate-300 sm:text-lg">
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
          <Button
            as="link"
            to="/contact"
            variant="outline"
            className="w-full sm:w-auto"
          >
            Contact me
          </Button>
        </div>
      </div>
    </section>
  );
}
