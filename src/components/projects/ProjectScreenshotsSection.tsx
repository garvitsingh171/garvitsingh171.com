import type { ProjectScreenshot } from "../../types/project";
import { CaseStudySection } from "./CaseStudySection";

export type ProjectScreenshotsSectionProps = {
  projectTitle: string;
  screenshots?: ProjectScreenshot[];
};

function getVisibleScreenshots(screenshots?: ProjectScreenshot[]) {
  return (
    screenshots?.filter(
      (screenshot) => screenshot.src.trim() && screenshot.alt.trim(),
    ) ?? []
  );
}

function getViewportLabel(viewport?: ProjectScreenshot["viewport"]) {
  if (viewport === "mobile") {
    return "Mobile";
  }

  if (viewport === "desktop") {
    return "Desktop";
  }

  return null;
}

export function ProjectScreenshotsSection({
  projectTitle,
  screenshots,
}: ProjectScreenshotsSectionProps) {
  const visibleScreenshots = getVisibleScreenshots(screenshots);

  if (visibleScreenshots.length === 0) {
    return null;
  }

  return (
    <CaseStudySection
      id="screenshots"
      title="Screenshots"
      subtitle={`${projectTitle} interface captures from key project workflows.`}
    >
      <div
        className={[
          "grid gap-5",
          visibleScreenshots.length > 1 ? "lg:grid-cols-2" : "",
        ].join(" ")}
      >
        {visibleScreenshots.map((screenshot) => {
          const isMobile = screenshot.viewport === "mobile";
          const viewportLabel = getViewportLabel(screenshot.viewport);

          return (
            <figure
              key={screenshot.src}
              className={[
                "min-w-0",
                isMobile ? "mx-auto w-full max-w-xs sm:max-w-sm" : "",
                !isMobile && visibleScreenshots.length === 1
                  ? "lg:col-span-2"
                  : "",
              ].join(" ")}
            >
              <div
                className={[
                  "relative overflow-hidden rounded-lg border border-slate-800 bg-slate-950/80 p-2",
                  isMobile ? "aspect-[9/16]" : "aspect-[16/10]",
                ].join(" ")}
              >
                {viewportLabel ? (
                  <span className="absolute left-4 top-4 rounded-full border border-slate-700 bg-slate-950/90 px-3 py-1 text-xs font-semibold text-slate-300">
                    {viewportLabel}
                  </span>
                ) : null}

                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full rounded-md object-contain"
                />
              </div>

              {screenshot.title || screenshot.caption ? (
                <figcaption className="mt-3 space-y-1">
                  {screenshot.title ? (
                    <p className="text-sm font-semibold text-white">
                      {screenshot.title}
                    </p>
                  ) : null}
                  {screenshot.caption ? (
                    <p className="text-sm leading-6 text-slate-400">
                      {screenshot.caption}
                    </p>
                  ) : null}
                </figcaption>
              ) : null}
            </figure>
          );
        })}
      </div>
    </CaseStudySection>
  );
}
