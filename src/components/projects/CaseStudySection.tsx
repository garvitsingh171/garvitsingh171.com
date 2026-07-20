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
      <Card className="p-6 sm:p-8">
        <div className="max-w-3xl">
          <h2 className="text-heading-2 text-primary">{title}</h2>

          {subtitle ? (
            <p className="mt-3 text-body-sm text-muted">
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="mt-5">{children}</div>
      </Card>
    </section>
  );
}
