import type {
  ProjectArchitecture,
  ProjectArchitectureConnection,
  ProjectArchitectureLayer,
  ProjectArchitectureLayerKind,
} from "@/types/project";
import { Badge, Card } from "../ui";
import { CaseStudySection } from "./CaseStudySection";
import { ProjectText } from "./ProjectText";
import { hasTextContent } from "./projectTextUtils";

export type ProjectArchitectureSectionProps = {
  projectTitle: string;
  architecture?: ProjectArchitecture;
};

const layerKindLabels = {
  client: "Client",
  api: "API",
  service: "Service",
  database: "Database",
  external: "External",
  tooling: "Tooling",
} satisfies Record<ProjectArchitectureLayerKind, string>;

function hasLayerContent(layer: ProjectArchitectureLayer) {
  return Boolean(
    layer.id.trim() && layer.title.trim() && layer.description.trim(),
  );
}

function getVisibleLayers(layers?: ProjectArchitectureLayer[]) {
  return layers?.filter(hasLayerContent) ?? [];
}

function hasDiagramContent(architecture?: ProjectArchitecture) {
  return Boolean(
    architecture?.diagram?.src.trim() && architecture.diagram.alt.trim(),
  );
}

function getVisibleConnections(
  connections: ProjectArchitectureConnection[] | undefined,
  layersById: Map<string, ProjectArchitectureLayer>,
) {
  return (
    connections?.filter(
      (connection) =>
        layersById.has(connection.from) && layersById.has(connection.to),
    ) ?? []
  );
}

export function ProjectArchitectureSection({
  projectTitle,
  architecture,
}: ProjectArchitectureSectionProps) {
  const visibleLayers = getVisibleLayers(architecture?.layers);
  const layersById = new Map(visibleLayers.map((layer) => [layer.id, layer]));
  const diagram = hasDiagramContent(architecture)
    ? architecture?.diagram
    : undefined;
  const visibleConnections = getVisibleConnections(
    architecture?.connections,
    layersById,
  );
  const shouldRender =
    hasTextContent(architecture?.overview) ||
    Boolean(diagram) ||
    visibleLayers.length > 0 ||
    visibleConnections.length > 0;

  if (!architecture || !shouldRender) {
    return null;
  }

  return (
    <CaseStudySection
      id="architecture"
      title="Architecture and Development Approach"
      subtitle={`How ${projectTitle} is organized across application layers and supporting services.`}
    >
      <div className="space-y-6">
        {hasTextContent(architecture.overview) ? (
          <ProjectText content={architecture.overview} />
        ) : null}

        {diagram ? (
          <figure>
            <div className="overflow-hidden rounded-media border border-border bg-subtle p-3">
              <img
                src={diagram.src}
                alt={diagram.alt}
                loading="lazy"
                decoding="async"
                className="max-h-[34rem] w-full object-contain"
              />
            </div>

            {diagram.caption ? (
              <figcaption className="mt-3 text-body-sm text-muted">
                {diagram.caption}
              </figcaption>
            ) : null}
          </figure>
        ) : null}

        {visibleLayers.length > 0 ? (
          <ul className="grid gap-4 md:grid-cols-2">
            {visibleLayers.map((layer) => (
              <li key={layer.id} className="min-w-0">
                <Card className="h-full p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-primary">
                      {layer.title}
                    </h3>

                    {layer.kind ? (
                      <Badge>
                        {layerKindLabels[layer.kind]}
                      </Badge>
                    ) : null}
                  </div>

                  <p className="mt-3 text-body-sm text-secondary">
                    {layer.description}
                  </p>

                  {layer.technologies?.length ? (
                    <ul
                      aria-label={`${layer.title} technologies`}
                      className="mt-4 flex flex-wrap gap-2"
                    >
                      {layer.technologies.map((technology) => (
                        <li key={technology}>
                          <Badge className="rounded-md font-medium normal-case">
                            {technology}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </Card>
              </li>
            ))}
          </ul>
        ) : null}

        {visibleConnections.length > 0 ? (
          <div>
            <h3 className="text-lg font-semibold text-primary">
              Layer Relationships
            </h3>
            <ol className="mt-4 grid gap-3">
              {visibleConnections.map((connection) => {
                const fromLayer = layersById.get(connection.from);
                const toLayer = layersById.get(connection.to);

                if (!fromLayer || !toLayer) {
                  return null;
                }

                return (
                  <li
                    key={`${connection.from}-${connection.to}-${connection.label ?? ""}`}
                    className="rounded-card border border-border bg-subtle p-4"
                  >
                    <p className="text-sm font-semibold text-primary">
                      {fromLayer.title}{" "}
                      <span aria-hidden="true" className="text-accent">
                        -&gt;
                      </span>{" "}
                      {toLayer.title}
                    </p>
                    {connection.label ? (
                      <p className="mt-2 text-body-sm text-secondary">
                        {connection.label}
                      </p>
                    ) : null}
                  </li>
                );
              })}
            </ol>
          </div>
        ) : null}
      </div>
    </CaseStudySection>
  );
}
