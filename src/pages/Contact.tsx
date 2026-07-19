import { useEffect } from "react";
import { SocialIcon, SocialLinks } from "../components/social-links";
import { Button, Card, SectionHeading } from "../components/ui";
import { contactDetails, contactPageContent } from "../data/contact";

function useContactMetadata() {
  useEffect(() => {
    const previousTitle = document.title;
    const existingDescription = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    const previousDescription = existingDescription
      ? existingDescription.getAttribute("content")
      : null;
    const description =
      existingDescription ?? document.createElement("meta");

    if (!existingDescription) {
      description.setAttribute("name", "description");
      document.head.append(description);
    }

    document.title = contactPageContent.meta.title;
    description.setAttribute("content", contactPageContent.meta.description);

    return () => {
      document.title = previousTitle;

      if (existingDescription) {
        if (previousDescription === null) {
          existingDescription.removeAttribute("content");
        } else {
          existingDescription.setAttribute("content", previousDescription);
        }
      }

      if (!existingDescription) {
        description.remove();
      }
    };
  }, []);
}

export default function Contact() {
  useContactMetadata();

  return (
    <>
      <section
        className="py-16 sm:py-20 lg:py-24"
        aria-labelledby="contact-page-heading"
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <div className="min-w-0 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              {contactPageContent.introduction.label}
            </p>

            <h1
              id="contact-page-heading"
              className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              {contactPageContent.introduction.heading}
            </h1>

            <div className="mt-6 max-w-3xl space-y-4 text-base leading-8 text-slate-300 sm:text-lg">
              <p>{contactPageContent.introduction.description}</p>
              <p>{contactPageContent.introduction.supportingDescription}</p>
            </div>

            <ul
              aria-label="Welcome contact topics"
              className="mt-8 grid gap-3 sm:grid-cols-2"
            >
              {contactPageContent.introduction.welcomedContexts.map((item) => (
                <li key={item} className="min-w-0">
                  <span className="flex min-h-11 items-center rounded-md border border-slate-800 bg-slate-900/60 px-3 py-2 text-sm font-medium leading-6 text-slate-200">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <Card className="p-5 sm:p-6">
            <h2 className="text-xl font-semibold text-white">
              {contactPageContent.emailCard.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {contactPageContent.emailCard.description}
            </p>

            <div className="mt-6">
              <Button
                as="anchor"
                href={contactDetails.emailHref}
                className="w-full gap-2 sm:w-auto"
                aria-label={contactDetails.emailCtaAriaLabel}
              >
                <SocialIcon icon="email" className="h-4 w-4" />
                <span>{contactDetails.emailCtaLabel}</span>
              </Button>
            </div>

            <p className="mt-4 break-words text-sm font-medium leading-6 text-slate-400">
              {contactDetails.email}
            </p>
          </Card>
        </div>
      </section>

      <section
        className="border-t border-slate-800 py-12 sm:py-16"
        aria-labelledby="contact-social-heading"
      >
        <SectionHeading
          id="contact-social-heading"
          label={contactPageContent.socialSection.label}
          title={contactPageContent.socialSection.title}
          description={contactPageContent.socialSection.description}
          className="mb-8"
        />

        <SocialLinks
          links={contactPageContent.socialSection.links}
          ariaLabel="Garvit Singh professional social links"
        />
      </section>
    </>
  );
}
