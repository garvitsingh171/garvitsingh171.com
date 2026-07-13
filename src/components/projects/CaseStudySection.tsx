import type { ReactNode } from "react";
import { Card } from "../ui";

export type CaseStudySectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function CaseStudySection({
  id,
  title,
  subtitle,
  children,
  className = "",
}: CaseStudySectionProps) {
  return (
    <section id={id} className={className}>
      <Card className="p-6 sm:p-7">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            {title}
          </h2>

          {subtitle ? (
            <p className="mt-3 text-sm leading-6 text-slate-400">
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="mt-5">{children}</div>
      </Card>
    </section>
  );
}
