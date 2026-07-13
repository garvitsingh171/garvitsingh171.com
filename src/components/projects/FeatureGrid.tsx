import type { ProjectFeature } from "../../types/project";
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
    <div className="grid gap-4 md:grid-cols-2">
      {visibleFeatures.map((feature) => (
        <Card key={feature.title} className="h-full p-5">
          <h3 className="text-lg font-semibold text-white">{feature.title}</h3>

          {feature.description ? (
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {feature.description}
            </p>
          ) : null}
        </Card>
      ))}
    </div>
  );
}
