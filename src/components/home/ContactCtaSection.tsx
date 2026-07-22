import { SITE_CONFIG } from "@/data/site";
import { resumeConfig } from "@/data/resume";
import { AnimatedSection } from "../animation";
import { Button } from "../ui";

export function ContactCtaSection() {
  return (
    <AnimatedSection
      className="surface-elevated p-6 sm:p-8 lg:p-10"
      aria-labelledby="home-contact-heading"
    >
      <p className="text-label text-accent">06 / Contact</p>
      <h2
        id="home-contact-heading"
        className="mt-4 max-w-3xl text-heading-1 text-primary"
      >
        Building something useful or looking for a product-minded engineering
        intern?
      </h2>
      <p className="mt-5 max-w-3xl text-body-md text-secondary">
        I am open to remote software engineering internships and collaboration
        conversations around full-stack products, backend systems, and practical
        web applications.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button
          as="anchor"
          href={`mailto:${SITE_CONFIG.email}`}
          variant="primary"
          className="w-full sm:w-auto"
        >
          Email Garvit
        </Button>
        <Button
          as="anchor"
          href={resumeConfig.filePath}
          download
          variant="outline"
          className="w-full sm:w-auto"
        >
          Download Resume
        </Button>
      </div>
    </AnimatedSection>
  );
}
