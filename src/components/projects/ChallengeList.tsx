import type { ProjectChallenge } from "../../types/project";
import { Card } from "../ui";

export type ChallengeListProps = {
  challenges?: ProjectChallenge[];
};

function hasChallengeContent(challenge: ProjectChallenge) {
  return Boolean(challenge.challenge.trim());
}

export function ChallengeList({ challenges }: ChallengeListProps) {
  const visibleChallenges = challenges?.filter(hasChallengeContent) ?? [];

  if (visibleChallenges.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-4">
      {visibleChallenges.map((item) => (
        <Card key={item.challenge} className="p-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
              Challenge
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {item.challenge}
            </p>
          </div>

          {item.resolution ? (
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                Approach
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {item.resolution}
              </p>
            </div>
          ) : null}

          {item.learning ? (
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                Learning
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {item.learning}
              </p>
            </div>
          ) : null}
        </Card>
      ))}
    </div>
  );
}
