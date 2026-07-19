import { skillCategories, skills } from "../../data/skills";
import { SectionHeading } from "../ui";
import { SkillCard } from "./SkillCard";

export function SkillsSection() {
  return (
    <section
      className="border-t border-slate-800 pt-10 sm:pt-12"
      aria-labelledby="skills-heading"
    >
      <SectionHeading
        id="skills-heading"
        label="Capabilities"
        title="Skills & Technologies"
        description="Technologies and engineering tools I use to build reliable applications, APIs, and production-ready products."
        className="mb-10"
      />

      <div className="space-y-12">
        {skillCategories.map((category) => {
          const categorySkills = skills.filter(
            (skill) => skill.category === category.id,
          );

          if (!categorySkills.length) {
            return null;
          }

          return (
            <section
              key={category.id}
              className="border-t border-slate-800 pt-8 first:border-t-0 first:pt-0"
              aria-labelledby={`${category.id}-skills-heading`}
            >
              <div className="max-w-3xl">
                <h3
                  id={`${category.id}-skills-heading`}
                  className="text-2xl font-semibold tracking-tight text-white"
                >
                  {category.title}
                </h3>
                {category.description ? (
                  <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
                    {category.description}
                  </p>
                ) : null}
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {categorySkills.map((skill) => (
                  <SkillCard key={skill.id} skill={skill} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
