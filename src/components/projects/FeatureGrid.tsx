import type { ProjectFeature } from "@/types/project";
import { StaggeredReveal, StaggeredRevealItem } from "../animation";
import { Card } from "../ui";

export type FeatureGridProps = {
  features?: ProjectFeature[];
};

function hasFeatureContent(feature: ProjectFeature) {
  return Boolean(feature.title.trim());
}

export function FeatureGrid({ features }: FeatureGridProps) {
  const visibleFeatures = features?.filter(hasFeatureContent) ?? [];

  if (visibleFeatures.length === 0) {
    return null;
  }

  return (
    <StaggeredReveal className="grid gap-4 md:grid-cols-2">
      {visibleFeatures.map((feature) => (
        <StaggeredRevealItem key={feature.title} className="h-full">
          <Card className="h-full p-5">
            <h3 className="text-lg font-semibold text-primary">
              {feature.title}
            </h3>

            {feature.description ? (
              <p className="mt-3 text-body-sm text-secondary">
                {feature.description}
              </p>
            ) : null}
          </Card>
        </StaggeredRevealItem>
      ))}
    </StaggeredReveal>
  );
}
