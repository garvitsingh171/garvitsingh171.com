import type { OpenSourceProgram } from "../../types/openSource.js";
import { Button, Card, SectionHeading } from "../ui";
import { hasItems } from "./openSourceUtils";

type OpenSourceProgramSectionProps = {
  program: OpenSourceProgram;
};

function TextList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="border-l border-slate-700 pl-3 text-sm leading-6 text-slate-300"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function OpenSourceProgramSection({
  program,
}: OpenSourceProgramSectionProps) {
  const metadata = [
    { label: "Duration", value: program.duration },
    { label: "Attendance", value: program.attendance },
  ];

  return (
    <section
      className="border-t border-slate-800 py-12 sm:py-16"
      aria-labelledby="open-source-program-heading"
    >
      <SectionHeading
        id="open-source-program-heading"
        label="Program"
        title={program.name}
        description={program.summary}
        className="mb-8"
      />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div className="space-y-6">
          <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {metadata.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-slate-800 bg-slate-900/60 p-5"
              >
                <dt className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {item.label}
                </dt>
                <dd className="mt-2 break-words text-2xl font-bold text-white">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>

          {hasItems(program.mentors) || hasItems(program.reviewers) ? (
            <Card className="p-5">
              <h3 className="text-lg font-semibold text-white">
                Guidance and review
              </h3>
              {hasItems(program.mentors) ? (
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-blue-200">
                    Mentor support
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {program.mentors.join(", ")}
                  </p>
                </div>
              ) : null}
              {hasItems(program.reviewers) ? (
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-blue-200">
                    Review interaction
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {program.reviewers.join(", ")}
                  </p>
                </div>
              ) : null}
              {program.certificateUrl ? (
                <Button
                  as="anchor"
                  href={program.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  className="mt-5 w-full sm:w-auto"
                  aria-label={`${program.name} certificate in a new tab`}
                >
                  View certificate
                </Button>
              ) : null}
            </Card>
          ) : null}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
          {hasItems(program.activities) ? (
            <Card className="p-5 sm:p-6">
              <h3 className="text-lg font-semibold text-white">
                Contribution workflow
              </h3>
              <div className="mt-4">
                <TextList items={program.activities} />
              </div>
            </Card>
          ) : null}

          {hasItems(program.outcomes) ? (
            <Card className="p-5 sm:p-6">
              <h3 className="text-lg font-semibold text-white">
                Program outcomes
              </h3>
              <div className="mt-4">
                <TextList items={program.outcomes} />
              </div>
            </Card>
          ) : null}
        </div>
      </div>
    </section>
  );
}
