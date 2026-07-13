import type { ProjectTechnicalDecision } from "../../types/project";
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
          <h3 className="text-lg font-semibold text-white">
            {decision.title}
          </h3>

          {decision.description ? (
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {decision.description}
            </p>
          ) : null}

          {decision.reason ? (
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                Reason
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {decision.reason}
              </p>
            </div>
          ) : null}

          {decision.tradeOff ? (
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                Trade-off
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {decision.tradeOff}
              </p>
            </div>
          ) : null}
        </Card>
      ))}
    </div>
  );
}
