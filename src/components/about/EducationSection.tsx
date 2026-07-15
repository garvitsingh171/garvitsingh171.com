import { Card, SectionHeading } from "../ui";
import type { AboutEducation } from "../../types/about.js";

type EducationSectionProps = {
  content: AboutEducation;
};

export function EducationSection({ content }: EducationSectionProps) {
  const metadata = [
    { label: "Specialization", value: content.specialization },
    {
      label: "Collaboration",
      value: `In collaboration with ${content.collaboration}`,
    },
    { label: "Location", value: content.location },
  ];

  return (
    <section className="border-t border-slate-800 py-12 sm:py-16">
      <SectionHeading
        label="Background"
        title={content.heading}
        description={content.description}
        className="mb-8"
      />

      <Card className="p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              {content.institution}
            </h3>
            <p className="mt-3 text-base font-medium leading-7 text-slate-100">
              {content.degree}
            </p>
          </div>

          <p className="shrink-0 text-sm font-semibold text-blue-200">
            {content.period}
          </p>
        </div>

        <dl className="mt-6 flex flex-wrap gap-3">
          {metadata.map((item) => (
            <div
              key={item.label}
              className="min-w-0 rounded-md border border-slate-800 bg-slate-950/60 px-3 py-2"
            >
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                {item.label}
              </dt>
              <dd className="mt-1 text-sm leading-6 text-slate-300">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.8fr)]">
          <p className="min-w-0 text-base leading-7 text-slate-300">
            {content.description}
          </p>

          <div className="min-w-0">
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-200">
              Highlights
            </h4>
            <ul className="mt-3 space-y-3">
              {content.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="border-l border-slate-700 pl-3 text-sm leading-6 text-slate-300"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </section>
  );
}
