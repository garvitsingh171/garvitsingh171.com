export type SkillCategoryId = "backend" | "database" | "tools";

export type SkillCategory = {
  id: SkillCategoryId;
  title: string;
  description: string;
};

export type Skill = {
  id: string;
  name: string;
  category: SkillCategoryId;
  icon: string;
  description: string;
};
