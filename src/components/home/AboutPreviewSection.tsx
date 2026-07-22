import { routes } from "@/routes/routes";
import { aboutContent } from "@/data/about";
import { AnimatedSection } from "../animation";
import { Button, SectionHeading } from "../ui";

export function AboutPreviewSection() {
  const principles = aboutContent.workingStyle.principles.slice(0, 3);

  return (
    <AnimatedSection className="section-divider" aria-labelledby="home-about-heading">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:items-start">
        <SectionHeading
          id="home-about-heading"
          label="03 / About"
          title="A product-minded engineering student, learning through complete systems."
          description={aboutContent.introduction.paragraphs[0]}
        />

        <div className="space-y-6">
          <p className="text-body-md text-secondary">
            {aboutContent.introduction.paragraphs[1]}
          </p>

          <div className="grid gap-4">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="border-l border-border-strong pl-4"
              >
                <h3 className="text-lg font-semibold text-primary">
                  {principle.title}
                </h3>
                <p className="mt-2 text-body-sm text-secondary">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

          <Button as="link" to={routes.about} variant="outline">
            Read About Garvit
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
