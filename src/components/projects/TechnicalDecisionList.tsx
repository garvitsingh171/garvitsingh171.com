import type { ProjectTechnicalDecision } from "@/types/project";
import { Card } from "../ui";

export type TechnicalDecisionListProps = {
  decisions?: ProjectTechnicalDecision[];
};

function hasDecisionContent(decision: ProjectTechnicalDecision) {
  return Boolean(decision.title.trim());
}

export function TechnicalDecisionList({
  decisions,
}: TechnicalDecisionListProps) {
  const visibleDecisions = decisions?.filter(hasDecisionContent) ?? [];

  if (visibleDecisions.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-4">
      {visibleDecisions.map((decision) => (
        <Card key={decision.title} className="p-5">
          <h3 className="text-lg font-semibold text-primary">
            {decision.title}
          </h3>

          {decision.description ? (
            <p className="mt-3 text-body-sm text-secondary">
              {decision.description}
            </p>
          ) : null}

          {decision.reason ? (
            <div className="mt-4">
              <p className="text-label text-accent">
                Reason
              </p>
              <p className="mt-2 text-body-sm text-secondary">
                {decision.reason}
              </p>
            </div>
          ) : null}

          {decision.tradeOff ? (
            <div className="mt-4">
              <p className="text-label text-accent">
                Trade-off
              </p>
              <p className="mt-2 text-body-sm text-secondary">
                {decision.tradeOff}
              </p>
            </div>
          ) : null}
        </Card>
      ))}
    </div>
  );
}
