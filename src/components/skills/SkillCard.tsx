import type { Skill } from "../../types/skill.js";
import { Card } from "../ui";
import { SkillIcon } from "./SkillIcon";

type SkillCardProps = {
  skill: Skill;
};

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <Card className="h-full min-w-0 p-4 sm:p-5">
      <div className="flex min-w-0 gap-4">
        <SkillIcon icon={skill.icon} />

        <div className="min-w-0">
          <h4 className="text-base font-semibold leading-6 text-primary">
            {skill.name}
          </h4>
          {skill.description ? (
            <p className="mt-2 text-sm leading-6 text-secondary">
              {skill.description}
            </p>
          ) : null}
        </div>
      </div>
    </Card>
  );
}
