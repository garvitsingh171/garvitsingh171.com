import { useEffect } from "react";
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
import { Button, EmptyState } from "../components/ui";
import { fallbackStates } from "../data/fallbackStates";
import { projects } from "../data/projects";
import type { ProjectType } from "../types/project";

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

function useMissingProjectMetadata(isMissingProject: boolean) {
  useEffect(() => {
    if (!isMissingProject) {
      return;
    }

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

    document.title = fallbackStates.projectNotFound.meta.title;
    description.setAttribute(
      "content",
      fallbackStates.projectNotFound.meta.description,
    );

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
  }, [isMissingProject]);
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((projectItem) => projectItem.slug === slug);
  const isMissingProject = !project;

  useMissingProjectMetadata(isMissingProject);

  if (!project) {
    return (
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

  return (
    <article className="space-y-10">
      <Link
        to="/projects"
        className="inline-flex text-sm font-semibold text-blue-300 transition-colors hover:text-blue-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
      >
        &larr; Back to Projects
      </Link>

      <header className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <ProjectStatusBadge status={project.status} />
            <span className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs font-semibold text-slate-300">
              {projectTypeLabel}
            </span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {project.title}
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
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

        {project.image ? (
          <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-950">
            <img
              src={project.image.src}
              alt={project.image.alt}
              className="aspect-video h-full w-full object-cover"
            />
          </div>
        ) : null}
      </header>

      <div className="space-y-6">
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
                  <h3 className="text-lg font-semibold text-white">
                    Intended Users
                  </h3>
                  <div className="mt-3">
                    <ProjectText content={targetUsers} />
                  </div>
                </div>
              ) : null}

              {hasItems(useCases) ? (
                <div>
                  <h3 className="text-lg font-semibold text-white">
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
  );
}
