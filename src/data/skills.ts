import type { Skill, SkillCategory } from "../types/skill.js";

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend Development",
    description:
      "Technologies and practices I use to build secure, maintainable, and production-ready server-side applications.",
  },
  {
    id: "database",
    title: "Databases & ORMs",
    description:
      "Relational and document database technologies I use for data modelling, querying, migrations, and transactions.",
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    description:
      "Development, collaboration, testing, containerization, and deployment tools used across my projects.",
  },
];

export const skills: Skill[] = [
  {
    id: "node-js",
    name: "Node.js",
    category: "backend",
    icon: "nodejs",
    description:
      "Builds server-side applications and REST API services using JavaScript and TypeScript.",
  },
  {
    id: "express-js",
    name: "Express.js",
    category: "backend",
    icon: "express",
    description:
      "Creates modular APIs using routes, middleware, controllers, services, validation, and centralized error handling.",
  },
  {
    id: "rest-api-design",
    name: "REST API Design",
    category: "backend",
    icon: "api",
    description:
      "Designs resource-oriented APIs with clear routes, validation, status codes, pagination, and structured error responses.",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "backend",
    icon: "typescript",
    description:
      "Uses static typing to create safer backend services, reusable data models, and maintainable application code.",
  },
  {
    id: "authentication-authorization",
    name: "Authentication & Authorization",
    category: "backend",
    icon: "authentication",
    description:
      "Implements protected routes, JWT and Clerk authentication, role checks, and resource-level access control.",
  },
  {
    id: "zod-validation",
    name: "Zod Validation",
    category: "backend",
    icon: "zod",
    description:
      "Defines type-safe schemas for validating API requests and keeping invalid data out of application services.",
  },
  {
    id: "jwt",
    name: "JWT",
    category: "backend",
    icon: "jwt",
    description:
      "Uses JSON Web Tokens for authentication flows and protected backend endpoints.",
  },
  {
    id: "bcrypt",
    name: "bcrypt",
    category: "backend",
    icon: "bcrypt",
    description:
      "Uses password hashing and comparison in secure user authentication workflows.",
  },
  {
    id: "multer",
    name: "Multer",
    category: "backend",
    icon: "multer",
    description:
      "Handles multipart form data and file uploads in Express-based applications.",
  },
  {
    id: "swagger-openapi",
    name: "Swagger / OpenAPI",
    category: "backend",
    icon: "swagger",
    description:
      "Documents and explores REST API endpoints using Swagger and OpenAPI conventions.",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "database",
    icon: "postgresql",
    description:
      "Designs relational schemas and works with constraints, relations, queries, and transactional operations.",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "database",
    icon: "mongodb",
    description:
      "Builds document-based data models and CRUD workflows for MERN and backend applications.",
  },
  {
    id: "prisma",
    name: "Prisma",
    category: "database",
    icon: "prisma",
    description:
      "Uses typed database queries, schema modelling, relations, migrations, and transactions with PostgreSQL.",
  },
  {
    id: "mongoose",
    name: "Mongoose",
    category: "database",
    icon: "mongoose",
    description:
      "Defines MongoDB schemas, models, validation rules, relationships, and application queries.",
  },
  {
    id: "sql",
    name: "SQL",
    category: "database",
    icon: "sql",
    description:
      "Works with relational queries, filtering, joins, ordering, constraints, and structured data modelling.",
  },
  {
    id: "supabase",
    name: "Supabase",
    category: "database",
    icon: "supabase",
    description:
      "Uses hosted PostgreSQL infrastructure for application data and production database connectivity.",
  },
  {
    id: "neon",
    name: "Neon",
    category: "database",
    icon: "neon",
    description:
      "Works with serverless PostgreSQL environments and Prisma database connectivity.",
  },
  {
    id: "git",
    name: "Git",
    category: "tools",
    icon: "git",
    description:
      "Uses structured branches, commits, merges, and version-control workflows across projects.",
  },
  {
    id: "github",
    name: "GitHub",
    category: "tools",
    icon: "github",
    description:
      "Manages repositories, issues, pull requests, code reviews, and open-source collaboration workflows.",
  },
  {
    id: "github-projects",
    name: "GitHub Projects",
    category: "tools",
    icon: "github-projects",
    description:
      "Plans project work using issues, labels, milestones, pull requests, and project boards.",
  },
  {
    id: "docker",
    name: "Docker",
    category: "tools",
    icon: "docker",
    description:
      "Containerizes applications to create consistent development and deployment environments.",
  },
  {
    id: "docker-compose",
    name: "Docker Compose",
    category: "tools",
    icon: "docker-compose",
    description:
      "Coordinates multi-service local environments for applications, servers, and supporting infrastructure.",
  },
  {
    id: "postman",
    name: "Postman",
    category: "tools",
    icon: "postman",
    description:
      "Tests API routes, request payloads, authentication flows, status codes, and response behaviour.",
  },
  {
    id: "linux-ubuntu",
    name: "Linux / Ubuntu",
    category: "tools",
    icon: "linux",
    description:
      "Uses Ubuntu as a primary development environment for coding, terminal workflows, and local services.",
  },
  {
    id: "vs-code",
    name: "VS Code",
    category: "tools",
    icon: "vscode",
    description:
      "Uses VS Code for development, debugging, source control, and project-specific tooling.",
  },
  {
    id: "vercel",
    name: "Vercel",
    category: "tools",
    icon: "vercel",
    description:
      "Deploys frontend applications and configures production environment variables and builds.",
  },
  {
    id: "render",
    name: "Render",
    category: "tools",
    icon: "render",
    description:
      "Deploys Node.js backend services with production builds, environment variables, and health checks.",
  },
  {
    id: "netlify",
    name: "Netlify",
    category: "tools",
    icon: "netlify",
    description:
      "Deploys frontend applications and manages basic hosting and build configuration.",
  },
  {
    id: "github-actions",
    name: "GitHub Actions",
    category: "tools",
    icon: "github-actions",
    description:
      "Works with basic repository automation and continuous-integration workflows.",
  },
];
