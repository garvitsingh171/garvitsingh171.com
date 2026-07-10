import type { Project } from "../types/project.js";

export const projects = [
  {
    title: "Pravaah",
    slug: "pravaah",
    summary:
      "An AI-assisted clinic flow management system that helps small and medium clinics coordinate appointments, patient queues, and no-show risk.",
    description:
      "Pravaah is a full-stack clinic operations MVP for small and medium clinics. It enables clinic-side Admin and Staff users to manage doctors, patients, appointments, daily queues, dashboard activity, and explainable no-show risk from one system. Its no-show assessment is deterministic and rule-based rather than trained machine learning, allowing the application to present understandable reasons and suggested staff actions.",
    status: "in-progress",
    type: "full-stack",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Clerk",
      "Zod",
      "Vitest",
    ],
    image: {
      src: "/images/projects/pravaah.svg",
      alt: "Pravaah clinic flow management project cover",
    },
    featured: true,
  },
  {
    title: "BeatHub API",
    slug: "beathub-api",
    summary:
      "A backend-first music platform API with secure authentication, role-based access, documented REST endpoints, and containerized deployment support.",
    description:
      "BeatHub API is a backend-first REST API for managing users, songs, artists, albums, and playlists. It includes JWT authentication, role-based authorization, protected CRUD endpoints, cursor-based song pagination, request validation, rate limiting, Swagger documentation, Docker support, and a Postman collection for API testing.",
    status: "completed",
    type: "backend",
    techStack: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Swagger",
      "Jest",
      "Docker",
    ],
    image: {
      src: "/images/projects/beathub-api.svg",
      alt: "BeatHub API backend project cover",
    },
    githubUrl: "https://github.com/garvitsingh171/beathub-api",
    featured: true,
  },
  {
    title: "Workoutly",
    slug: "workoutly",
    summary:
      "A full-stack workout tracking application for creating routines, recording completed sessions, monitoring progress, and building consistent training habits.",
    description:
      "Workoutly is a full-stack MERN workout tracker where users can securely create routines, complete workout sessions, and manage their own fitness data. It combines ownership-based authorization with workout history, calendar summaries, weekly goals, streak tracking, CSV exports, exercise progress, personal-record detection, reusable workout templates, and dashboard insights.",
    status: "in-progress",
    type: "full-stack",
    techStack: [
      "React",
      "Vite",
      "React Router",
      "Axios",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcrypt",
    ],
    image: {
      src: "/images/projects/workoutly.svg",
      alt: "Workoutly workout tracking application project cover",
    },
    githubUrl: "https://github.com/garvitsingh171/workoutly",
    featured: true,
  },
] satisfies Project[];
