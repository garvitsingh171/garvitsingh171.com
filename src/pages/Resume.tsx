import { useEffect } from "react";
import { AnimatedSection } from "../components/animation";
import { InternshipAvailability } from "../components/internship";
import { ResumeDownloadButton } from "../components/resume";
import { ProjectStatusBadge, TechnologyList } from "../components/projects";
import { Button, Card, SectionHeading } from "../components/ui";
import { internshipAvailability } from "../data/internship";
import { resumeContent } from "../data/resume";

function TextList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="border-l border-border-strong pl-3 text-sm leading-6 text-secondary"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Resume() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = resumeContent.meta.title;

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="space-y-12 sm:space-y-16">
      <AnimatedSection aria-labelledby="resume-page-heading">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
          <div className="min-w-0 max-w-4xl">
            <p className="text-label text-accent">
              {resumeContent.introduction.label}
            </p>

            <h1
              id="resume-page-heading"
              className="mt-5 max-w-4xl text-display-2 text-primary"
            >
              {resumeContent.introduction.heading}
            </h1>

            <p className="mt-6 max-w-3xl text-body-lg text-secondary">
              {resumeContent.introduction.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ResumeDownloadButton className="w-full sm:w-auto" />
              <Button
                as="link"
                to="/contact"
                variant="outline"
                className="w-full sm:w-auto"
              >
                Contact Me
              </Button>
            </div>
          </div>

          <Card className="p-5 sm:p-6">
            <h2 className="text-lg font-semibold text-primary">
              Resume snapshot
            </h2>
            <dl className="mt-5 space-y-5">
              <div>
                <dt className="text-sm font-medium text-secondary">Focus</dt>
                <dd className="mt-1 text-base font-semibold text-primary">
                  Backend-first full-stack development
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-secondary">
                  Education
                </dt>
                <dd className="mt-1 text-base font-semibold text-primary">
                  Software Product Engineering
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-secondary">
                  Open source
                </dt>
                <dd className="mt-1 text-base font-semibold text-primary">
                  Mathesar and tldr-pages contributions
                </dd>
              </div>
            </dl>
          </Card>
        </div>
      </AnimatedSection>

      <AnimatedSection
        className="section-divider"
        aria-labelledby="resume-summary-heading"
      >
        <SectionHeading
          id="resume-summary-heading"
          label="Profile"
          title="Professional summary"
          description={resumeContent.meta.description}
          className="mb-8"
        />

        <Card className="p-5 sm:p-6">
          <div className="max-w-3xl space-y-4 text-base leading-7 text-secondary">
            {resumeContent.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Card>
      </AnimatedSection>

      <InternshipAvailability content={internshipAvailability} />

      <AnimatedSection
        className="section-divider"
        aria-labelledby="resume-skills-heading"
      >
        <SectionHeading
          id="resume-skills-heading"
          label="Capabilities"
          title="Technical skills"
          description="Grouped from the portfolio's existing skill data so recruiters can quickly scan the tools and practices I am actively using."
          className="mb-8"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resumeContent.skillGroups.map((group) => (
            <Card
              key={group.title}
              title={group.title}
              description={group.description}
              className="h-full min-w-0"
            >
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="min-w-0 max-w-full">
                    <span className="inline-flex max-w-full rounded-md border border-border-strong bg-subtle px-2.5 py-1 text-xs font-medium leading-5 text-secondary break-words">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection
        className="section-divider"
        aria-labelledby="resume-experience-heading"
      >
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="resume-experience-heading"
            label="Experience"
            title="Open-source and collaboration experience"
            description="Verified contribution experience from the current portfolio data, focused on scoped changes, review feedback, and maintainable pull requests."
          />

          <Button
            as="link"
            to="/open-source"
            variant="outline"
            className="w-full sm:w-auto"
          >
            View Open Source
          </Button>
        </div>

        <div className="mt-8 space-y-6">
          {resumeContent.experience.map((item) => (
            <Card key={`${item.organization}-${item.title}`} className="p-5 sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base font-medium leading-7 text-accent">
                    {item.organization}
                  </p>
                </div>

                {item.duration ? (
                  <p className="shrink-0 text-sm font-semibold text-secondary">
                    {item.duration}
                  </p>
                ) : null}
              </div>

              <p className="mt-5 text-sm leading-6 text-secondary sm:text-base sm:leading-7">
                {item.description}
              </p>

              {item.highlights?.length ? (
                <div className="mt-5">
                  <h4 className="text-label text-accent">
                    Highlights
                  </h4>
                  <div className="mt-3">
                    <TextList items={item.highlights} />
                  </div>
                </div>
              ) : null}
            </Card>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection
        className="section-divider"
        aria-labelledby="resume-projects-heading"
      >
        <SectionHeading
          id="resume-projects-heading"
          label="Selected Work"
          title="Featured projects"
          description="A compact view of the strongest portfolio projects, with full case studies available on the projects page."
          className="mb-8"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resumeContent.featuredProjects.map((project) => (
            <Card key={project.href} className="h-full min-w-0 p-5 sm:p-6">
              <div className="flex h-full flex-col">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="min-w-0 flex-1 text-xl font-semibold text-primary">
                    {project.title}
                  </h3>
                  <ProjectStatusBadge status={project.status} />
                </div>

                <p className="mt-4 text-sm leading-6 text-secondary">
                  {project.summary}
                </p>

                <TechnologyList
                  technologies={project.technologies}
                  ariaLabel={`${project.title} resume technologies`}
                  className="mt-5"
                />

                <div className="mt-auto pt-6">
                  <Button
                    as="link"
                    to={project.href}
                    variant="project"
                    className="w-full sm:w-auto"
                    aria-label={`View ${project.title} project details`}
                  >
                    View Project
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection
        className="section-divider"
        aria-labelledby="resume-education-heading"
      >
        <SectionHeading
          id="resume-education-heading"
          label="Education"
          title="Academic background"
          description={resumeContent.education.description}
          className="mb-8"
        />

        <Card className="p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <h3 className="text-2xl font-semibold text-primary">
                {resumeContent.education.institution}
              </h3>
              <p className="mt-3 text-base font-medium leading-7 text-primary">
                {resumeContent.education.degree}
              </p>
            </div>

            <p className="shrink-0 text-sm font-semibold text-accent">
              {resumeContent.education.duration}
            </p>
          </div>

          <dl className="mt-6 flex flex-wrap gap-3">
            {resumeContent.education.location ? (
              <div className="min-w-0 rounded-md border border-border bg-subtle px-3 py-2">
                <dt className="text-xs font-semibold uppercase text-muted">
                  Location
                </dt>
                <dd className="mt-1 text-sm leading-6 text-secondary">
                  {resumeContent.education.location}
                </dd>
              </div>
            ) : null}

            {resumeContent.education.metadata?.map((item) => (
              <div
                key={item.label}
                className="min-w-0 rounded-md border border-border bg-subtle px-3 py-2"
              >
                <dt className="text-xs font-semibold uppercase text-muted">
                  {item.label}
                </dt>
                <dd className="mt-1 text-sm leading-6 text-secondary">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>

          {resumeContent.education.highlights?.length ? (
            <div className="mt-6">
              <h4 className="text-label text-accent">
                Highlights
              </h4>
              <div className="mt-3">
                <TextList items={resumeContent.education.highlights} />
              </div>
            </div>
          ) : null}
        </Card>
      </AnimatedSection>

      <AnimatedSection
        className="section-divider"
        aria-labelledby="resume-achievements-heading"
      >
        <SectionHeading
          id="resume-achievements-heading"
          label="Recognition"
          title="Certifications and achievements"
          description="Confirmed highlights already represented in the portfolio data."
          className="mb-8"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {resumeContent.achievements.map((achievement) => (
            <Card
              key={achievement.title}
              title={achievement.title}
              description={achievement.description}
              className="h-full min-w-0"
            />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection
        className="section-divider"
        aria-labelledby="resume-final-cta-heading"
      >
        <div className="rounded-lg border border-border bg-surface p-6 sm:p-8">
          <h2
            id="resume-final-cta-heading"
            className="max-w-3xl text-heading-1 text-primary"
          >
            {resumeContent.finalCta.heading}
          </h2>
          <p className="mt-4 max-w-3xl text-body-md text-secondary">
            {resumeContent.finalCta.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ResumeDownloadButton className="w-full sm:w-auto" />
            <Button
              as="link"
              to="/contact"
              variant="outline"
              className="w-full sm:w-auto"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
