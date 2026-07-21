import { Link, useParams } from "react-router-dom";
import {
  CaseStudySection,
  ChallengeList,
  FeatureGrid,
  hasTextContent,
  ProjectArchitectureSection,
  ProjectLearningsSection,
  ProjectMetadata,
  ProjectNavigation,
  ProjectScreenshotsSection,
  ProjectStatusBadge,
  ProjectText,
  TechnicalDecisionList,
  TechnologyList,
} from "../components/projects";
import { SEO } from "../components/seo";
import { Badge, Button, EmptyState } from "../components/ui";
import { fallbackStates } from "../data/fallbackStates";
import { projects } from "../data/projects";
import { useResolvedTheme } from "../hooks/useResolvedTheme";
import type { ProjectType } from "../types/project";
import { resolveProjectImageSrc } from "../utils/projectImage";
import { resolveProjectSeoMetadata } from "../utils/seo";

const projectTypeLabels = {
  "full-stack": "Full-stack",
  backend: "Backend",
  frontend: "Frontend",
  "open-source": "Open source",
} satisfies Record<ProjectType, string>;

const projectStatusLabels = {
  completed: "Completed",
  "in-progress": "In Progress",
  planned: "Planned",
} as const;

function hasItems<T>(items?: T[]): items is T[] {
  return Array.isArray(items) && items.length > 0;
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((projectItem) => projectItem.slug === slug);
  const resolvedTheme = useResolvedTheme();

  if (!project) {
    return (
      <>
        <SEO
          title={fallbackStates.projectNotFound.meta.title}
          description={fallbackStates.projectNotFound.meta.description}
          canonicalUrl={null}
          noIndex
        />
        <EmptyState
          label={fallbackStates.projectNotFound.label}
          title={fallbackStates.projectNotFound.title}
          description={fallbackStates.projectNotFound.description}
          headingLevel="h1"
          variant="page"
          className="my-4 sm:my-8"
          primaryAction={{
            type: "link",
            label: "View projects",
            to: "/projects",
          }}
          secondaryAction={{
            type: "link",
            label: "Go to homepage",
            to: "/",
          }}
        />
      </>
    );
  }

  const caseStudy = project.caseStudy;
  const projectTypeLabel = projectTypeLabels[project.type];
  const problem = caseStudy?.problem;
  const solution = caseStudy?.solution;
  const targetUsers = caseStudy?.targetUsers;
  const useCases = caseStudy?.useCases;
  const features = caseStudy?.features;
  const architecture = caseStudy?.architecture;
  const technicalDecisions = caseStudy?.technicalDecisions;
  const challenges = caseStudy?.challenges;
  const learnings = caseStudy?.learnings;
  const results = caseStudy?.results;
  const currentProgress = caseStudy?.currentProgress;
  const limitations = caseStudy?.limitations;
  const futureImprovements = caseStudy?.futureImprovements;
  const projectLinks = [
    project.liveUrl
      ? {
          label: "View Live Project",
          href: project.liveUrl,
          ariaLabel: `View the live ${project.title} project in a new tab`,
        }
      : null,
    project.githubUrl
      ? {
          label: "View Repository",
          href: project.githubUrl,
          ariaLabel: `View ${project.title} repository on GitHub in a new tab`,
        }
      : null,
    project.apiDocsUrl
      ? {
          label: "API Documentation",
          href: project.apiDocsUrl,
          ariaLabel: `View ${project.title} API documentation in a new tab`,
        }
      : null,
    project.caseStudyUrl
      ? {
          label: "Additional Case Study",
          href: project.caseStudyUrl,
          ariaLabel: `View an additional ${project.title} case study resource in a new tab`,
        }
      : null,
  ].filter((link): link is { label: string; href: string; ariaLabel: string } =>
    Boolean(link),
  );
  const projectImageSrc = project.image
    ? resolveProjectImageSrc(project.image, resolvedTheme)
    : "";

  return (
    <>
      <SEO {...resolveProjectSeoMetadata(project)} />
      <article className="space-y-12">
        <Link
          to="/projects"
          className="inline-flex rounded-sm text-sm font-semibold text-accent transition hover:text-accent-hover focus-visible:outline-focus"
        >
          &larr; Back to Projects
        </Link>

      <header className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-start">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <ProjectStatusBadge status={project.status} />
            <Badge>{projectTypeLabel}</Badge>
          </div>

          <h1 className="mt-5 text-display-2 text-primary">
            {project.title}
          </h1>

          <p className="mt-5 max-w-3xl text-body-lg text-secondary">
            {project.summary}
          </p>

          <div className="mt-6">
            <ProjectMetadata
              items={[
                { label: "Status", value: projectStatusLabels[project.status] },
                {
                  label: "Category",
                  value: caseStudy?.category ?? projectTypeLabel,
                },
                { label: "Role", value: caseStudy?.role },
                { label: "Timeline", value: caseStudy?.timeline },
                { label: "Team", value: caseStudy?.team },
              ]}
            />
          </div>

          <TechnologyList
            technologies={project.techStack}
            ariaLabel={`${project.title} technology stack`}
            className="mt-6"
            limit={8}
          />

          {projectLinks.length > 0 ? (
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {projectLinks.map((link) => (
                <Button
                  key={link.href}
                  as="anchor"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant={
                    link.label === "View Live Project" ? "primary" : "outline"
                  }
                  className="w-full sm:w-auto"
                  aria-label={link.ariaLabel}
                >
                  {link.label}
                </Button>
              ))}
            </div>
          ) : null}
        </div>

        {project.image && projectImageSrc ? (
          <div className="overflow-hidden rounded-media border border-border bg-subtle p-3 shadow-subtle sm:p-4 dark:bg-surface-elevated">
            <div className="aspect-[4/3] overflow-hidden rounded-card border border-border bg-surface">
              <img
                src={projectImageSrc}
                alt={project.image.alt}
                className="h-full w-full object-contain object-center"
              />
            </div>
          </div>
        ) : null}
      </header>

      <div className="space-y-8">
        <CaseStudySection id="overview" title="Overview">
          <ProjectText content={project.description} />
        </CaseStudySection>

        {hasTextContent(problem) ? (
          <CaseStudySection id="problem" title="The Problem">
            <ProjectText content={problem} />
          </CaseStudySection>
        ) : null}

        {hasTextContent(solution) ? (
          <CaseStudySection id="solution" title="The Solution">
            <ProjectText content={solution} />
          </CaseStudySection>
        ) : null}

        {hasItems(targetUsers) || hasItems(useCases) ? (
          <CaseStudySection id="users-and-use-cases" title="Users and Use Cases">
            <div className="grid gap-6 md:grid-cols-2">
              {hasItems(targetUsers) ? (
                <div>
                  <h3 className="text-lg font-semibold text-primary">
                    Intended Users
                  </h3>
                  <div className="mt-3">
                    <ProjectText content={targetUsers} />
                  </div>
                </div>
              ) : null}

              {hasItems(useCases) ? (
                <div>
                  <h3 className="text-lg font-semibold text-primary">
                    Common Use Cases
                  </h3>
                  <div className="mt-3">
                    <ProjectText content={useCases} />
                  </div>
                </div>
              ) : null}
            </div>
          </CaseStudySection>
        ) : null}

        {hasItems(features) ? (
          <CaseStudySection id="features" title="Key Features">
            <FeatureGrid features={features} />
          </CaseStudySection>
        ) : null}

        <ProjectScreenshotsSection
          projectTitle={project.title}
          screenshots={project.screenshots}
        />

        <ProjectArchitectureSection
          projectTitle={project.title}
          architecture={architecture}
        />

        {hasItems(technicalDecisions) ? (
          <CaseStudySection id="technical-decisions" title="Technical Decisions">
            <TechnicalDecisionList decisions={technicalDecisions} />
          </CaseStudySection>
        ) : null}

        {hasItems(challenges) ? (
          <CaseStudySection id="challenges" title="Engineering Challenges">
            <ChallengeList challenges={challenges} />
          </CaseStudySection>
        ) : null}

        <ProjectLearningsSection
          projectTitle={project.title}
          learnings={learnings}
        />

        {hasTextContent(results) ? (
          <CaseStudySection id="results" title="Results">
            <ProjectText content={results} />
          </CaseStudySection>
        ) : null}

        {hasTextContent(currentProgress) ? (
          <CaseStudySection id="current-progress" title="Current Progress">
            <ProjectText content={currentProgress} />
          </CaseStudySection>
        ) : null}

        {hasItems(limitations) ? (
          <CaseStudySection id="limitations" title="Limitations">
            <ProjectText content={limitations} />
          </CaseStudySection>
        ) : null}

        {hasItems(futureImprovements) ? (
          <CaseStudySection id="future-improvements" title="Future Improvements">
            <ProjectText content={futureImprovements} />
          </CaseStudySection>
        ) : null}
      </div>

      <ProjectNavigation projects={projects} currentSlug={project.slug} />
      </article>
    </>
  );
}
