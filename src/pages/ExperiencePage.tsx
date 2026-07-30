import { AnimatedSection } from "@/components/animation";
import { SEO } from "@/components/seo";
import { Button } from "@/components/ui";
import { staticRouteSeo } from "@/data/seo";
import { routes } from "@/routes/routes";

export default function Experience() {
  return (
    <>
      <SEO {...staticRouteSeo.experience} />
      <AnimatedSection aria-labelledby="experience-page-heading">
        <header className="max-w-3xl">
          <p className="text-label text-accent">
            Work History
          </p>
          <h1
            id="experience-page-heading"
            className="mt-4 text-display-2 text-primary"
          >
            Experience and open-source contributions
          </h1>
        </header>

        <p className="mt-5 max-w-2xl text-body-lg text-secondary">
          My current experience is centered on scoped open-source
          contributions, backend-focused portfolio projects, and practical
          product engineering work documented across this website.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button as="link" to={routes.openSource} className="w-full sm:w-auto">
            Read Open Source Contributions
          </Button>
          <Button
            as="link"
            to={routes.resume}
            variant="outline"
            className="w-full sm:w-auto"
          >
            Read Resume
          </Button>
        </div>
      </AnimatedSection>
    </>
  );
}
