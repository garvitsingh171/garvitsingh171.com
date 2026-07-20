import { SITE_CONFIG } from "../../constants/site";
import { resumeConfig } from "../../data/resume";
import { Button } from "../ui";

export function ContactCtaSection() {
  return (
    <section
      className="rounded-card border border-inverse bg-inverse p-6 text-inverse-text sm:p-8 lg:p-10"
      aria-labelledby="home-contact-heading"
    >
      <p className="text-label opacity-80">06 / Contact</p>
      <h2 id="home-contact-heading" className="mt-4 max-w-3xl text-heading-1">
        Building something useful or looking for a product-minded engineering
        intern?
      </h2>
      <p className="mt-5 max-w-3xl text-body-md opacity-80">
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
          className="w-full border-inverse-text/40 text-inverse-text hover:bg-inverse-text hover:text-inverse sm:w-auto"
        >
          Download Resume
        </Button>
      </div>
    </section>
  );
}
