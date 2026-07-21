import { skillCategories, skills } from "../../data/skills";
import { AnimatedSection } from "../animation";
import { Badge, SectionHeading } from "../ui";

export function EngineeringStrengthsSection() {
  return (
    <AnimatedSection
      className="section-divider"
      aria-labelledby="home-strengths-heading"
    >
      <SectionHeading
        id="home-strengths-heading"
        label="04 / Engineering Strengths"
        title="Skills grouped around the work they support."
        description="The portfolio emphasizes product evidence first, then the backend, database, and delivery tools used to make those projects reliable."
        className="mb-10"
      />

      <div className="grid gap-5 md:grid-cols-3">
        {skillCategories.map((category) => {
          const categorySkills = skills
            .filter((skill) => skill.category === category.id)
            .slice(0, 5);

          return (
            <article
              key={category.id}
              className="rounded-card border border-border bg-surface p-5"
            >
              <h3 className="text-xl font-semibold text-primary">
                {category.title}
              </h3>
              <p className="mt-3 text-body-sm text-secondary">
                {category.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {categorySkills.map((skill) => (
                  <li key={skill.id}>
                    <Badge className="rounded-md font-medium normal-case">
                      {skill.name}
                    </Badge>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
