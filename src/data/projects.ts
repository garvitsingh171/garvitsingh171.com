import type { Project } from "../types/project.js";

export const projects: Project[] = [
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
    caseStudy: {
      category: "Clinic operations MVP",
      problem:
        "Small and medium clinics need to coordinate appointments, patient queues, dashboard activity, and no-show risk from one system.",
      solution:
        "Pravaah enables clinic-side Admin and Staff users to manage doctors, patients, appointments, daily queues, dashboard activity, and explainable no-show risk.",
      features: [
        {
          title: "Clinic workflow management",
          description:
            "Supports clinic-side Admin and Staff users as they manage doctors, patients, appointments, and daily queues.",
        },
        {
          title: "Explainable no-show risk",
          description:
            "Uses deterministic, rule-based assessment so the application can present understandable reasons.",
        },
        {
          title: "Suggested staff actions",
          description:
            "Pairs no-show explanations with suggested staff actions inside the clinic workflow.",
        },
      ],
      technicalDecisions: [
        {
          title: "Deterministic no-show assessment",
          description:
            "The no-show assessment is rule-based rather than trained machine learning.",
          reason:
            "This keeps the displayed reasons and suggested staff actions understandable.",
        },
      ],
      currentProgress:
        "Pravaah is currently in progress as a full-stack clinic operations MVP for small and medium clinics.",
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
    caseStudy: {
      category: "Backend API",
      problem:
        "A backend-first music platform needs secure authentication, role-based access, documented endpoints, and deployment support.",
      solution:
        "BeatHub API provides REST endpoints for managing users, songs, artists, albums, and playlists with authentication, authorization, validation, and API documentation.",
      features: [
        {
          title: "Protected REST resources",
          description:
            "Includes protected CRUD endpoints for users, songs, artists, albums, and playlists.",
        },
        {
          title: "Authentication and authorization",
          description:
            "Uses JWT authentication and role-based authorization for API access control.",
        },
        {
          title: "API testing and documentation",
          description:
            "Includes Swagger documentation and a Postman collection for API testing.",
        },
        {
          title: "Deployment support",
          description:
            "Includes Docker support for containerized deployment workflows.",
        },
      ],
      technicalDecisions: [
        {
          title: "Cursor-based song pagination",
          description:
            "Song listing endpoints use cursor-based pagination.",
        },
        {
          title: "Documented API surface",
          description:
            "Swagger documentation and a Postman collection support endpoint exploration and testing.",
        },
      ],
      results:
        "The completed API includes authentication, role-based authorization, protected CRUD endpoints, cursor-based song pagination, validation, rate limiting, Swagger documentation, Docker support, and a Postman collection.",
    },
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
    caseStudy: {
      category: "Workout tracking application",
      problem:
        "Workout tracking requires a way to create routines, record completed sessions, monitor progress, and build consistent training habits.",
      solution:
        "Workoutly lets users securely create routines, complete workout sessions, and manage their own fitness data through a full-stack MERN application.",
      features: [
        {
          title: "Routine and session tracking",
          description:
            "Users can create routines, complete workout sessions, and view workout history.",
        },
        {
          title: "Progress visibility",
          description:
            "Includes calendar summaries, weekly goals, streak tracking, exercise progress, and dashboard insights.",
        },
        {
          title: "Personal fitness data",
          description:
            "Combines ownership-based authorization with personal-record detection, reusable workout templates, and CSV exports.",
        },
      ],
      technicalDecisions: [
        {
          title: "Ownership-based authorization",
          description:
            "Workout data is managed through ownership-based authorization.",
        },
        {
          title: "MERN application structure",
          description:
            "The project combines React and Vite on the frontend with Node.js, Express, MongoDB, and Mongoose on the backend.",
        },
      ],
      currentProgress:
        "Workoutly is currently in progress as a full-stack MERN workout tracker.",
    },
    featured: true,
  },
];
