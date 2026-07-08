import type { Project } from "../types/project.js";

export const projects: Project[] = [
  {
    title: "Pravaah",
    slug: "pravaah",
    summary:
      "A clinic workflow management system focused on appointments, queue flow, and operational visibility.",
    status: "in-progress",
    type: "full-stack",
    techStack: ["React", "TypeScript", "Express", "PostgreSQL", "Prisma"],
    featured: true,
  },
  {
    title: "BeatHub API",
    slug: "beathub-api",
    summary:
      "A backend-first music platform API built with authentication, REST APIs, MongoDB, and Docker.",
    status: "completed",
    type: "backend",
    techStack: ["Node.js", "Express", "MongoDB", "JWT", "Docker"],
    featured: true,
  },
  {
    title: "Workoutly",
    slug: "workoutly",
    summary:
      "A full-stack workout tracking app focused on routines, workout history, dashboard insights, and user experience.",
    status: "in-progress",
    type: "full-stack",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    featured: true,
  },
];