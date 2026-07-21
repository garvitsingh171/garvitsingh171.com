import { AnimatedSection } from "../components/animation";
import { SEO } from "../components/seo";
import { staticRouteSeo } from "../data/seo";

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
            Experience
          </h1>
        </header>

        <p className="mt-5 max-w-2xl text-body-lg text-secondary">
          Work experience and achievements will be added here.
        </p>
      </AnimatedSection>
    </>
  );
}
