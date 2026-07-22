import type { Project } from "@/types/project.js";

export const projects: Project[] = [
  {
    title: "Pravaah",
    slug: "pravaah",
    summary:
      "A clinic appointment and patient-flow management MVP that connects clinic-side sign-in, doctor and patient records, appointment booking, daily queue operations, dashboard summaries, and rule-based no-show risk context.",
    description:
      "I built Pravaah to explore how small and medium clinics could manage connected daily workflows from one structured application. The project goes beyond isolated CRUD screens by tying together authenticated clinic staff, clinic records, doctors, patients, appointments, queue entries, dashboard data, and stored no-show risk results. The current no-show feature is deterministic and rule-based, not a trained machine-learning model.",
    status: "in-progress",
    type: "full-stack",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Clerk",
      "Zod",
      "Vitest",
    ],
    image: {
      light: "/images/projects/pravaah/pravaah-thumbnail-light.png",
      dark: "/images/projects/pravaah/pravaah-thumbnail-dark.png",
      alt: "Pravaah clinic operations dashboard preview",
    },
    githubUrl: "https://github.com/garvitsingh171/pravaah",
    caseStudy: {
      category: "Clinic operations MVP",
      role: "Full-stack developer",
      problem: [
        "The problem space for Pravaah is the amount of coordination required during a clinic day. A clinic may need to keep doctor records, patient records, scheduled appointments, arrivals, queue order, called patients, completed visits, cancellations, and no-show handling in sync.",
        "If appointment state and queue state drift apart, staff lose visibility into who has arrived, who is waiting, and which appointments have reached a final status. The project focuses on making those status changes explicit and keeping them inside backend business rules rather than relying only on frontend screens.",
      ],
      solution: [
        "Pravaah uses a React and TypeScript frontend with an Express and TypeScript API backed by PostgreSQL through Prisma. Authenticated clinic-side Admin and Staff users sign in with Clerk, then the backend maps that identity to an internal active user with a clinic association before protected clinic operations run.",
        "The backend creates appointments, queue entries, and no-show prediction records through coordinated service and repository logic. It validates request data with Zod, checks clinic ownership for doctors and patients, prevents active appointment conflicts, and keeps appointment and queue statuses synchronized through transactions.",
      ],
      targetUsers: [
        "Clinic administrators who need clinic-level access and admin-only backend actions such as clinic create or update.",
        "Reception or clinic staff who manage doctor records, patient records, appointments, daily queue status, and dashboard activity.",
        "Doctors and patients are represented as records in the system, but the current MVP does not implement doctor or patient login.",
      ],
      useCases: [
        "Create and list doctor records connected to a clinic.",
        "Create and list patient records with clinic-specific history.",
        "Book appointments for a clinic, doctor, patient, time, and booking source.",
        "Filter appointments by date, doctor, patient, or status.",
        "Move appointments and queue entries through arrived, in-queue, called, completed, cancelled, and no-show states.",
        "View dashboard summaries, high-risk appointments, and activity feed data.",
        "Review rule-based no-show risk reasons and suggested staff actions.",
      ],
      features: [
        {
          title: "Clerk sign-in with internal user mapping",
          description:
            "Protected API requests use Clerk authentication, then map the Clerk user ID to an internal active Pravaah user with a role, status, and clinic association.",
        },
        {
          title: "Clinic-level access checks",
          description:
            "Backend services verify that the signed-in internal user can access the requested clinic before clinic-scoped operations continue.",
        },
        {
          title: "Doctor and patient records",
          description:
            "The Prisma schema models doctors, patients, and clinic relationships through DoctorClinic and PatientClinic links so records can be associated with clinic workflows.",
        },
        {
          title: "Appointment booking and listing",
          description:
            "Appointments connect a clinic, doctor, patient, creator, scheduled time, duration, booking source, notes, status, queue entry, and no-show prediction.",
        },
        {
          title: "Appointment conflict prevention",
          description:
            "The backend checks active appointment statuses for the same clinic, doctor, and scheduled time, returning a conflict instead of allowing duplicate active slots.",
        },
        {
          title: "Daily queue operations",
          description:
            "Queue entries track position, waiting, arrived, called, completed, cancelled, and no-show states, with status updates synchronized back to the linked appointment.",
        },
        {
          title: "Queue reordering API",
          description:
            "The backend can reorder all active queue entries for a selected date after validating clinic ownership, final statuses, and the complete active queue list.",
        },
        {
          title: "Dashboard summaries",
          description:
            "Dashboard services aggregate appointment counts, queue counts, no-show risk counts, high-risk appointments, and activity feed items for the selected clinic day.",
        },
        {
          title: "Rule-based no-show risk",
          description:
            "The current risk feature stores LOW, MEDIUM, or HIGH results with scores, reasons, and suggested staff actions. It is deterministic rule logic, not trained machine learning.",
        },
      ],
      architecture: {
        overview: [
          "The backend follows a route, validation middleware, controller, service, repository, Prisma, and PostgreSQL flow. Routes define endpoints, Zod validation checks inputs, controllers handle HTTP concerns, services apply business rules, and repositories perform database reads, writes, transactions, and raw SQL where needed.",
          "The main relational entities are User, Clinic, Doctor, DoctorClinic, Patient, PatientClinic, Appointment, QueueEntry, and NoShowPrediction. Appointments connect clinic, doctor, patient, creator, time, status, queue entry, and risk context. Queue entries represent the daily operational flow.",
          "Appointment creation is a multi-step operation. It verifies clinic ownership for doctor and patient records, counts previous patient attendance signals, acquires transaction-level advisory locks, checks slot conflicts, calculates the next queue position, creates the appointment, creates the queue entry, and stores the no-show prediction inside a transaction.",
          "The frontend is responsible for Clerk sign-in, active clinic resolution, protected app layout, dashboard, doctors, patients, appointments, queue, loading states, empty states, errors, and toast feedback. Final authorization and writes remain backend responsibilities.",
        ],
        layers: [
          {
            id: "react-app",
            title: "React application",
            description:
              "Handles Clerk sign-in, protected application shell, active clinic context, dashboard, doctors, patients, appointments, queue, loading states, empty states, errors, and toast feedback.",
            technologies: [
              "React",
              "TypeScript",
              "Vite",
              "Tailwind CSS",
              "React Router",
              "Clerk",
            ],
            kind: "client",
          },
          {
            id: "express-api",
            title: "Express API",
            description:
              "Registers routes, resolves authentication context, validates input with Zod, runs HTTP controllers and business services, enforces clinic access rules, and coordinates appointment and queue workflows.",
            technologies: ["Node.js", "Express", "TypeScript", "Zod"],
            kind: "api",
          },
          {
            id: "persistence",
            title: "Repository and persistence layer",
            description:
              "Runs Prisma operations, PostgreSQL transactions, appointment conflict checks, queue position calculation, advisory locks, and multi-record writes.",
            technologies: ["Prisma", "PostgreSQL"],
            kind: "service",
          },
          {
            id: "postgresql",
            title: "PostgreSQL database",
            description:
              "Stores relational clinic, user, doctor, patient, appointment, queue, and no-show prediction data.",
            technologies: ["PostgreSQL"],
            kind: "database",
          },
          {
            id: "clerk",
            title: "External identity service",
            description:
              "Provides user sign-in, session identity, and authentication verification before the API maps that identity to an internal Pravaah user.",
            technologies: ["Clerk"],
            kind: "external",
          },
        ],
        connections: [
          {
            from: "react-app",
            to: "clerk",
            label: "User sign-in and session identity.",
          },
          {
            from: "react-app",
            to: "express-api",
            label: "Authenticated JSON requests for clinic workflows.",
          },
          {
            from: "express-api",
            to: "clerk",
            label: "Token and identity verification before protected operations continue.",
          },
          {
            from: "express-api",
            to: "persistence",
            label: "Prisma queries, transactions, and clinic-scoped business rules.",
          },
          {
            from: "persistence",
            to: "postgresql",
            label: "PostgreSQL stores relational clinic, appointment, queue, and prediction data.",
          },
        ],
      },
      technicalDecisions: [
        {
          title: "PostgreSQL with Prisma",
          description:
            "Pravaah uses PostgreSQL through Prisma for clinic, user, doctor, patient, appointment, queue, and prediction data.",
          reason:
            "The project has strongly connected relational data, and Prisma gives typed access to that schema from the TypeScript backend.",
          tradeOff:
            "The relational model adds migration and schema-design work compared with a simpler document store.",
        },
        {
          title: "Clerk for authentication plus internal authorization",
          description:
            "Clerk confirms who is signed in, while Pravaah stores the internal role, status, and clinic access rules.",
          reason:
            "This keeps identity management separate from clinic-specific authorization decisions.",
          tradeOff:
            "A signed-in Clerk user still needs a matching active internal Pravaah user, so seeding and user setup matter.",
        },
        {
          title: "Layered backend structure",
          description:
            "Feature modules separate routes, validation, controllers, services, repositories, and tests.",
          reason:
            "The separation keeps HTTP handling, business rules, and database access easier to reason about as workflows grow.",
          tradeOff:
            "Small features require more files than a single-route prototype.",
        },
        {
          title: "Backend-owned appointment and queue rules",
          description:
            "Conflict checks, status transitions, final-status checks, and clinic access checks live in backend services and repositories.",
          reason:
            "Those rules protect the API even if a frontend screen is changed or bypassed.",
          tradeOff:
            "The frontend must reflect backend constraints clearly so users understand failed operations.",
        },
        {
          title: "Transactions and advisory locks",
          description:
            "Appointment creation, queue status synchronization, and queue reordering use Prisma transactions. PostgreSQL transaction-level advisory locks are used while checking appointment slots and calculating queue positions.",
          reason:
            "These operations update multiple related records and need consistent appointment and queue state.",
          tradeOff:
            "The code is more complex than a simple insert flow, and concurrency guarantees are still scoped to the implemented database logic.",
        },
        {
          title: "Separate appointment and queue entities",
          description:
            "Appointments store scheduled visit information, while queue entries store daily operational position and queue status.",
          reason:
            "A patient can have an appointment record while the clinic still needs a separate operational queue view for the day.",
          tradeOff:
            "The backend must keep the linked statuses synchronized.",
        },
        {
          title: "Deterministic no-show scoring",
          description:
            "The no-show feature uses starter rules based on available appointment and patient-clinic history signals.",
          reason:
            "There is no verified training dataset in the project, so rule-based scoring keeps the result explainable and honest.",
          tradeOff:
            "The score can provide useful staff context, but it should not be treated as a trained predictive model.",
        },
      ],
      challenges: [
        {
          challenge:
            "Appointment booking needed to create several related records while avoiding conflicting active slots.",
          resolution:
            "The service validates clinic ownership, uses a transaction, acquires an advisory lock for the clinic-doctor-time slot, checks active conflicting statuses, then creates the appointment, queue entry, and prediction together.",
          learning:
            "Multi-step business workflows should be protected in backend logic, not only in frontend forms.",
        },
        {
          challenge:
            "Queue positions could become inconsistent if concurrent requests calculated the next position at the same time.",
          resolution:
            "The repository acquires a transaction-level advisory lock for the clinic, doctor, and clinic-local date before reading the highest queue position.",
          learning:
            "Concurrency issues can appear even in small MVP workflows when position numbers or status transitions are shared.",
        },
        {
          challenge:
            "Appointment and queue statuses needed to move together without changing final completed, cancelled, or no-show records unexpectedly.",
          resolution:
            "Status updates run in transactions, check final statuses, and return conflict errors when the linked appointment or queue state changes underneath the request.",
          learning:
            "Thinking in status machines makes operational workflows easier to protect.",
        },
        {
          challenge:
            "Clerk authentication did not by itself answer which clinic a user could operate.",
          resolution:
            "The backend maps Clerk identity to an internal Pravaah user and enforces active status, role checks, and single-clinic access before protected operations.",
          learning:
            "Authentication and authorization are related but separate responsibilities.",
        },
        {
          challenge:
            "The no-show idea needed to be useful without pretending to be machine learning.",
          resolution:
            "The implementation stores rule-based LOW, MEDIUM, and HIGH risk levels with scores, reason codes, and suggested staff actions.",
          learning:
            "A transparent rule-based feature can be more honest than an unsupported AI claim when historical data is limited.",
        },
        {
          challenge:
            "Deployment requires coordinating frontend, backend, database, Clerk, CORS, and environment variables.",
          resolution:
            "The repository documents deployment steps and environment requirements, while clearly stating that no proven production deployment is configured in the repo.",
          learning:
            "Release readiness is more than a successful local build; it needs configured environments and smoke tests.",
        },
      ],
      learnings: [
        {
          category: "architecture",
          title: "Relational models should reflect real workflows",
          description:
            "Pravaah taught me that schema design should start from the clinic workflow, not from isolated screens. Users, clinics, doctors, patients, appointments, queue entries, and no-show prediction records all affect each other, while DoctorClinic and PatientClinic links model clinic-specific relationships.",
          application:
            "For future systems, I start by mapping entities, ownership, states, and relationship constraints before implementing endpoints.",
        },
        {
          category: "technical",
          title: "Multi-record workflows need transactions",
          description:
            "Appointment booking creates appointment, queue, and no-show prediction data together. If only one of those writes succeeded, the clinic day could show a scheduled appointment without a queue entry or stored risk context.",
          application:
            "I now identify operations that must succeed or fail together before writing repository code.",
        },
        {
          category: "debugging",
          title: "Concurrency exists even in small MVPs",
          description:
            "Appointment-slot checks and queue-position calculation both depend on read-then-write behavior. Pravaah needed transaction-level advisory locks and conflict checks because local single-user testing can hide race conditions.",
          application:
            "I look carefully at workflows involving counters, positions, inventory, slots, or status changes before assuming sequential requests.",
        },
        {
          category: "technical",
          title: "Authentication and authorization are different layers",
          description:
            "Clerk confirms session identity, but Pravaah still needs an active internal user with role, status, and clinic association before clinic operations are allowed. A signed-in user should not automatically access every clinic record.",
          application:
            "I keep external identity management separate from domain authorization and add resource-specific access checks in the API.",
        },
        {
          category: "architecture",
          title: "Operational workflows benefit from explicit states",
          description:
            "Appointment and queue statuses have to stay synchronized, and final states such as completed, cancelled, or no-show should not be changed accidentally. Treating these as business transitions made the workflow safer than arbitrary string updates.",
          application:
            "I model status transitions as backend rules whenever a workflow has final states or linked records.",
        },
        {
          category: "product",
          title: "Explainable rules are better than unsupported AI claims",
          description:
            "The no-show feature uses deterministic LOW, MEDIUM, and HIGH risk rules with reasons and suggested actions. Because the project has no verified training dataset, describing the feature honestly is more useful than overstating it as machine learning.",
          application:
            "I match technical claims to the evidence and data actually available, especially when a feature could be mistaken for AI.",
        },
        {
          category: "deployment",
          title: "Deployment is a cross-system workflow",
          description:
            "Pravaah deployment planning has to coordinate the frontend, backend, PostgreSQL, Prisma migrations, Clerk configuration, CORS, and environment variables. A successful local build is only one part of release readiness.",
          application:
            "I use deployment checklists, environment documentation, migrations, and post-deploy smoke tests instead of treating deployment as a single command.",
        },
        {
          category: "collaboration",
          title: "Clear boundaries improve maintainability and handoff",
          description:
            "Routes, validation, controllers, services, repositories, and Prisma access each have different responsibilities. Those boundaries make it easier for another developer to understand where clinic access rules or appointment logic belong.",
          application:
            "I organize modules so future reviewers can find HTTP handling, business rules, and persistence code without reading the entire application.",
        },
      ],
      results: [
        "Implemented the core MVP spine for clinic-side Admin and Staff workflows.",
        "Added backend APIs for auth context, clinics, doctors, patients, appointments, queues, dashboard data, and no-show prediction records.",
        "Added frontend screens for dashboard, doctors, patients, appointments, queue, login, and protected application shell.",
        "Added backend Vitest coverage for critical auth, appointment, queue, prediction, dashboard, and validation behavior.",
      ],
      currentProgress: [
        "The project is in progress as a full-stack clinic operations MVP.",
        "The repository documents that the MVP spine is implemented locally.",
        "The repo does not contain a proven production deployment or live deployment URL.",
      ],
      limitations: [
        "No patient login or doctor login is implemented.",
        "The no-show feature is rule-based and uses limited local data signals; it is not trained machine learning.",
        "The current model is a single-clinic MVP through User.clinicId, not a full multi-clinic SaaS membership system.",
        "Clinic settings UI is still limited, and some frontend edit flows remain release-readiness work.",
        "No WhatsApp, SMS, or email automation is implemented.",
        "No proven production deployment, screenshots, or production monitoring setup is documented in the repo.",
      ],
      futureImprovements: [
        "Complete the remaining clinic settings and edit screens.",
        "Expose queue reordering in the frontend if the workflow needs it.",
        "Add appointment reminders or patient communication flows.",
        "Improve no-show scoring with real historical data before considering a trained model.",
        "Add audit logs for important appointment and queue state changes.",
        "Expand frontend and integration test coverage.",
        "Configure and smoke-test a real production deployment.",
        "Improve role and permission management beyond the current Admin and Staff MVP roles.",
      ],
    },
    featured: true,
  },
  {
    title: "BeatHub API",
    slug: "beathub-api",
    summary:
      "A backend-focused REST API for music resources, authenticated user workflows, admin-protected management endpoints, cursor-based song pagination, Swagger documentation, rate limiting, tests, and Docker-based local deployment.",
    description:
      "I built BeatHub API as a backend-only project to practise structuring an Express application beyond a single route file. The API manages users, songs, artists, albums, playlists, and a simple analytics endpoint. It uses MongoDB through Mongoose, JWT authentication, bcryptjs password hashing, role-based admin checks, express-validator validation, centralized error handling, Swagger UI, a Postman collection, Jest/Supertest tests, and Docker support.",
    status: "completed",
    type: "backend",
    techStack: [
      "Node.js",
      "Express",
      "JavaScript",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcryptjs",
      "Express Validator",
      "Swagger",
      "Jest",
      "Supertest",
      "Docker",
    ],
    image: {
      light: "/images/projects/beathub-api/beathub-api-thumbnail-light.png",
      dark: "/images/projects/beathub-api/beathub-api-thumbnail-dark.png",
      alt: "BeatHub API backend dashboard preview",
    },
    githubUrl: "https://github.com/garvitsingh171/beathub-api",
    caseStudy: {
      category: "Backend API",
      role: "Backend developer",
      problem: [
        "The engineering problem behind BeatHub API was to design a music-related backend that had more structure than a small demo server. It needed resource-based endpoints, persistent data models, validation, authentication, authorization, consistent errors, API documentation, and a deployment-friendly runtime.",
        "The project is intentionally backend-focused. It does not implement music streaming infrastructure or a complete client application; it focuses on the API layer that a future web or mobile client could consume.",
      ],
      solution: [
        "BeatHub API uses Express route modules for authentication, users, songs, playlists, artists, albums, and analytics. Requests pass through validation and authentication middleware where required, controllers handle HTTP responses, services handle reusable database operations, and Mongoose models persist data in MongoDB.",
        "The API protects admin-only create, update, delete, user-management, and analytics routes with JWT verification and role checks. Public read endpoints are available for music resources, while protected operations require a Bearer token.",
      ],
      targetUsers: [
        "A future web or mobile frontend that needs music catalog and playlist API endpoints.",
        "Developers testing backend workflows through Swagger UI or the included Postman collection.",
        "Admin users who manage users, songs, artists, albums, playlists, and analytics through protected endpoints.",
      ],
      useCases: [
        "Register users and hash passwords before storing them.",
        "Log in with email and password to receive a JWT.",
        "Use Bearer tokens to access admin-only routes.",
        "Create, list, update, and delete songs, artists, albums, playlists, and users where routes permit it.",
        "List songs with cursor-based pagination using limit and cursor query parameters.",
        "Read a simple top-users analytics endpoint based on playlist counts.",
        "Explore local API documentation at /api-docs.",
        "Run the API and MongoDB together through docker-compose for local testing.",
      ],
      features: [
        {
          title: "User registration and password hashing",
          description:
            "The User model stores username, email, role, liked songs, and a password field that is hashed with bcryptjs before save.",
        },
        {
          title: "JWT login",
          description:
            "The login controller verifies email and password, then signs a JWT containing the user id, email, and role.",
        },
        {
          title: "Role-protected admin routes",
          description:
            "Create, update, delete, user-management, playlist-management, music-management, and analytics routes use authentication middleware and admin role checks where required.",
        },
        {
          title: "Music resource models",
          description:
            "Mongoose schemas model users, songs, artists, albums, and playlists with ObjectId references between related resources.",
        },
        {
          title: "Cursor-based song pagination",
          description:
            "The song listing endpoint accepts limit and cursor query parameters, validates cursor values, and returns nextCursor, hasMore, limit, and count metadata.",
        },
        {
          title: "Request validation",
          description:
            "express-validator checks request bodies and MongoDB ObjectId route parameters before controllers run.",
        },
        {
          title: "Centralized error handling",
          description:
            "Async controllers forward errors to a global error handler that returns consistent JSON responses for validation, duplicate keys, invalid ids, missing resources, and application errors.",
        },
        {
          title: "Rate limiting",
          description:
            "A lightweight in-memory API rate limiter protects /api routes from repeated bursts and returns 429 responses when the limit is exceeded.",
        },
        {
          title: "Documentation and API testing assets",
          description:
            "Swagger UI is served at /api-docs, and the repository includes a Postman collection for API testing.",
        },
        {
          title: "Docker support",
          description:
            "The Dockerfile builds a production Node 18 Alpine image, and docker-compose runs the API with a MongoDB service for local deployment testing.",
        },
      ],
      architecture: {
        overview: [
          "The application starts in src/server.js, loads environment variables, connects to MongoDB, and listens on the configured PORT or 3000. src.js creates the Express app, enables JSON parsing, applies the API rate limiter, registers route modules, serves Swagger UI, and attaches not-found and global error handlers.",
          "The code is organized as route, middleware, controller, service, model, and MongoDB. Routes define endpoint paths and middleware chains. Middleware handles validation, JWT authentication, role checks, rate limiting, and errors. Controllers shape HTTP responses. Services call Mongoose models. Models define MongoDB document structure.",
          "MongoDB data is modelled with Mongoose schemas. Songs reference artists and optionally albums, albums reference artists, playlists reference users and songs, and users can reference liked songs. The model uses document collections with references where relationships are needed.",
        ],
        layers: [
          {
            id: "api-consumers",
            title: "API consumers and documentation",
            description:
              "Supports Swagger UI exploration, Postman requests, and future web or mobile clients that consume the REST API over HTTP/JSON.",
            technologies: ["Swagger", "Postman", "HTTP/JSON"],
            kind: "client",
          },
          {
            id: "express-api",
            title: "Express API",
            description:
              "Owns resource routes, authentication, admin role checks, validation middleware, rate limiting, centralized errors, and API response shape.",
            technologies: ["Node.js", "Express", "JWT", "Express Validator"],
            kind: "api",
          },
          {
            id: "controllers-services",
            title: "Controllers and services",
            description:
              "Handle requests, perform resource operations, implement cursor pagination, and provide simple analytics logic.",
            kind: "service",
          },
          {
            id: "mongoose-models",
            title: "Mongoose models",
            description:
              "Define user, song, artist, album, and playlist schemas with ObjectId relationships, schema validation, model methods, and hooks.",
            technologies: ["Mongoose"],
            kind: "service",
          },
          {
            id: "mongodb",
            title: "MongoDB database",
            description:
              "Persists music catalog resources, playlists, users, liked songs, and related document data.",
            technologies: ["MongoDB"],
            kind: "database",
          },
          {
            id: "docker",
            title: "Runtime tooling",
            description:
              "Provides a reproducible local API and MongoDB setup through the Dockerfile and docker-compose configuration.",
            technologies: ["Docker"],
            kind: "tooling",
          },
        ],
        connections: [
          {
            from: "api-consumers",
            to: "express-api",
            label: "HTTP/JSON requests from Swagger UI, Postman, or future clients.",
          },
          {
            from: "express-api",
            to: "controllers-services",
            label: "Validated requests are routed into controller and service logic.",
          },
          {
            from: "controllers-services",
            to: "mongoose-models",
            label: "Resource operations use Mongoose schemas and model methods.",
          },
          {
            from: "mongoose-models",
            to: "mongodb",
            label: "Mongoose persists and reads document data from MongoDB.",
          },
          {
            from: "docker",
            to: "express-api",
            label: "Docker runs the API container for local deployment testing.",
          },
          {
            from: "docker",
            to: "mongodb",
            label: "Docker Compose runs MongoDB beside the API service.",
          },
        ],
      },
      technicalDecisions: [
        {
          title: "MongoDB with Mongoose",
          description:
            "BeatHub uses MongoDB for persistence and Mongoose for schemas, validation, ObjectId references, and model methods.",
          reason:
            "A document database fit the project scope and made it straightforward to model music resources while still using references between related documents.",
          tradeOff:
            "Relationships and consistency rules must be handled carefully in application code and Mongoose schemas.",
        },
        {
          title: "JWT authentication with bcryptjs password hashing",
          description:
            "Passwords are hashed before save, and login returns a signed JWT for protected API calls.",
          reason:
            "This let me practise stateless API authentication and password security basics.",
          tradeOff:
            "The current implementation does not include refresh tokens, token rotation, or server-side token revocation.",
        },
        {
          title: "Role middleware for admin-only actions",
          description:
            "Protected routes use authenticateToken and requireRole(\"admin\") middleware.",
          reason:
            "Authentication confirms the requester, while authorization confirms whether that requester can perform admin operations.",
          tradeOff:
            "The role model is simple and does not include fine-grained ownership permissions.",
        },
        {
          title: "express-validator request validation",
          description:
            "Validators check required fields, email format, password length, ObjectId parameters, dates, numeric fields, arrays, and optional update values.",
          reason:
            "Validation middleware keeps invalid input out of controllers and services.",
          tradeOff:
            "Validation rules must be kept in sync with Mongoose schema expectations.",
        },
        {
          title: "Route-controller-service-model structure",
          description:
            "The codebase separates endpoint definitions, HTTP handling, reusable operations, and data models.",
          reason:
            "This made the API easier to extend across users, songs, artists, albums, playlists, and analytics.",
          tradeOff:
            "Some CRUD services remain thin wrappers around Mongoose, so deeper business rules could still be added later.",
        },
        {
          title: "Cursor pagination for songs",
          description:
            "The song list endpoint uses encoded ObjectId cursors instead of page numbers.",
          reason:
            "Cursor pagination is a useful backend pattern for ordered resource lists.",
          tradeOff:
            "The current implementation is focused on songs and does not yet provide the same pagination pattern for every resource.",
        },
        {
          title: "Docker and docker-compose",
          description:
            "The Dockerfile creates a production container, and docker-compose runs the API with MongoDB locally.",
          reason:
            "Containerization makes the runtime more repeatable across local and hosted environments.",
          tradeOff:
            "The repo does not include orchestration, CI/CD, or a verified live deployment URL.",
        },
      ],
      challenges: [
        {
          challenge:
            "Password storage needed to avoid returning or exposing password hashes.",
          resolution:
            "The User model hashes passwords before save, excludes the password field by default, compares passwords through a model method, and removes password and __v from JSON output.",
          learning:
            "Security controls belong in the data model as well as in controllers.",
        },
        {
          challenge:
            "Protected routes needed to distinguish missing authentication from insufficient permissions.",
          resolution:
            "The API uses separate JWT authentication and role-check middleware so missing or invalid tokens return 401 and non-admin users receive 403 on admin routes.",
          learning:
            "Authentication and authorization should produce different failure paths.",
        },
        {
          challenge:
            "Invalid request bodies and invalid MongoDB ids could otherwise reach controller and database code.",
          resolution:
            "The project uses express-validator middleware and a shared validation response shape before protected CRUD handlers run.",
          learning:
            "Validation middleware keeps route handlers smaller and error responses more predictable.",
        },
        {
          challenge:
            "Song listing needed a pagination pattern that did not depend on offset pages.",
          resolution:
            "The song controller decodes a cursor, validates it as an ObjectId, queries records below that id, and returns nextCursor metadata when more results exist.",
          learning:
            "Pagination design affects API response shape and error handling, not just database queries.",
        },
        {
          challenge:
            "Local deployment needed a repeatable API and database setup.",
          resolution:
            "The repository includes a Dockerfile and docker-compose configuration that run the API with MongoDB and required development environment variables.",
          learning:
            "Containerizing an API clarifies runtime dependencies and required configuration.",
        },
      ],
      learnings: [
        {
          category: "architecture",
          title: "Backend structure matters before feature count grows",
          description:
            "BeatHub API moved beyond a single route file into route modules, middleware, controllers, services, models, and utilities. That separation made users, songs, artists, albums, playlists, analytics, auth, and errors easier to extend.",
          application:
            "I establish module boundaries before CRUD endpoints become tightly coupled and difficult to test.",
        },
        {
          category: "technical",
          title: "Authentication and role authorization need different failure paths",
          description:
            "The API distinguishes missing or invalid tokens from authenticated users who lack the admin role. Returning 401 for authentication failures and 403 for permission failures makes backend behavior clearer.",
          application:
            "I design authentication and authorization middleware separately so each failure mode communicates the right problem.",
        },
        {
          category: "technical",
          title: "Security belongs in more than controllers",
          description:
            "Password hashing, password exclusion, comparison methods, and JSON transforms live close to the User model. That keeps sensitive-field handling from depending on every controller remembering to remove password data.",
          application:
            "I place security guarantees near the data model when practical, then keep controllers focused on request and response flow.",
        },
        {
          category: "debugging",
          title: "Boundary validation keeps deeper layers simpler",
          description:
            "express-validator checks request bodies and MongoDB ObjectId parameters before controller and database logic run. This turns predictable bad input into consistent 400 responses instead of scattered runtime errors.",
          application:
            "I reject malformed input at the API boundary with a documented response shape before it reaches business logic.",
        },
        {
          category: "architecture",
          title: "Pagination is part of the API contract",
          description:
            "Cursor pagination for songs affected query logic, cursor validation, response metadata, and future client behavior. It was not only a database optimization.",
          application:
            "I design list response shape, metadata, and error handling before implementing pagination queries.",
        },
        {
          category: "debugging",
          title: "Centralized errors reduce debugging ambiguity",
          description:
            "Validation failures, duplicate keys, invalid IDs, missing resources, and application errors all need predictable JSON responses. A shared error handler made tests and future client integration easier to reason about.",
          application:
            "I prefer one documented error contract over endpoint-specific response formats.",
        },
        {
          category: "collaboration",
          title: "API documentation is collaboration infrastructure",
          description:
            "Swagger UI and the Postman collection make the backend understandable to a future frontend developer or reviewer without requiring them to read controller source code first.",
          application:
            "I treat API examples and documentation as part of the interface rather than optional polish.",
        },
        {
          category: "deployment",
          title: "Containers expose runtime assumptions",
          description:
            "Docker and Docker Compose clarify the Node runtime, MongoDB dependency, ports, and environment variables. Containerization improves setup repeatability, but it does not by itself prove production readiness.",
          application:
            "I use containers to document runtime requirements while separately planning hosting, secrets, health checks, and monitoring.",
        },
        {
          category: "product",
          title: "Practice infrastructure still has production trade-offs",
          description:
            "The in-memory rate limiter is useful for learning and local API protection, but it would not coordinate limits across multiple API instances. That limitation belongs in the project story instead of being hidden.",
          application:
            "I state infrastructure limits clearly and choose production replacements only when the project scope requires them.",
        },
      ],
      results: [
        "Implemented user registration, login, JWT authentication, admin role checks, and password hashing.",
        "Implemented CRUD-style endpoints for users, songs, artists, albums, and playlists, with protected admin operations where configured.",
        "Implemented cursor-based pagination for song listing.",
        "Added a simple analytics endpoint for top users by playlist count.",
        "Added Swagger UI configuration, a Postman collection, Dockerfile, docker-compose setup, and Jest/Supertest tests for core health and user registration behavior.",
      ],
      currentProgress: [
        "The API feature set is complete for the backend-focused portfolio project scope.",
        "The README lists placeholder live deployment URLs, so no live API or live Swagger link is exposed in the portfolio data.",
      ],
      limitations: [
        "The project is backend-only and does not include a complete frontend client.",
        "It is not a music streaming system and does not implement media storage, streaming, transcoding, recommendations, or licensing workflows.",
        "The auth flow does not include refresh tokens, token rotation, or token revocation.",
        "The role model is limited to user and admin and does not include fine-grained ownership permissions.",
        "The in-memory rate limiter is useful for practice but would need a shared store for multi-instance deployment.",
        "Automated tests are limited to a small set of API checks.",
        "Swagger is configured, but documentation coverage can be expanded beyond the currently documented routes and schemas.",
        "The repository does not contain a verified active live deployment URL.",
      ],
      futureImprovements: [
        "Add broader unit and integration test coverage for protected routes, validation failures, and CRUD flows.",
        "Expand Swagger documentation for every route group.",
        "Add refresh-token handling or another explicit session renewal strategy.",
        "Move rate limiting to a production-ready shared store if the API runs across multiple instances.",
        "Add pagination, filtering, and search consistently across more resources.",
        "Add fine-grained ownership checks for user-owned resources such as playlists and liked songs.",
        "Add structured request logging, health checks, and monitoring for deployment.",
        "Build a frontend client that consumes the API.",
      ],
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
      "Multer",
      "Cloudinary",
      "Docker",
      "GitHub Actions",
    ],
    image: {
      light: "/images/projects/workoutly/workoutly-thumbnail-light.png",
      dark: "/images/projects/workoutly/workoutly-thumbnail-dark.png",
      alt: "Workoutly fitness tracking dashboard preview",
    },
    githubUrl: "https://github.com/garvitsingh171/workoutly",
    caseStudy: {
      category: "Workout tracking application",
      role: "Full-stack developer",
      team: "Solo project",
      problem: [
        "The core product problem behind Workoutly is that planning a workout and completing a workout are different jobs. A reusable routine can describe intended exercises, sets, repetitions, rest time, duration, difficulty, and notes, but it does not show what actually happened in the gym.",
        "A useful workout tracker needs to preserve both sides of that workflow. Users need a way to prepare repeatable routines, start a session from a saved plan, record actual repetitions and weights, save historical results, review consistency, and keep each user's fitness data private without maintaining a separate spreadsheet.",
        "I started Workoutly after building mostly frontend-focused React projects. The goal was not to create a coaching platform or a commercial fitness product; it was to learn how a real React interface connects to authenticated APIs, persistent MongoDB documents, uploads, session history, and deployment configuration.",
      ],
      solution: [
        "Workoutly is a full-stack MERN application that separates reusable workout templates from completed workout sessions. Users create routines, add planned exercises, upload a workout cover image, start an active session, mark sets complete, enter actual reps and weight, and save the completed session as its own MongoDB document.",
        "The backend protects API routes with JWT access-token authentication and resource-level ownership checks. Workouts, sessions, goals, records, exercise library data, uploads, and profile data are scoped to the authenticated user where applicable, so a valid token does not automatically grant access to another user's workout data.",
        "As the project matured, I extended it beyond basic workout CRUD into persisted history, date filters, monthly calendar summaries, CSV export, weekly goals, streaks, exercise-specific progress, personal-record detection, default and custom exercises, demo seeding, Docker configuration, and GitHub Actions verification.",
      ],
      targetUsers: [
        "Individuals who want to create and reuse their own workout routines.",
        "Beginner and intermediate gym users who want a structured record of completed workouts.",
        "Users who want simple consistency indicators such as weekly goals, streaks, and calendar history.",
        "Users who want to observe changes in repetitions, weight, and exercise volume over time.",
        "Developers reviewing the project as a practical full-stack MERN application.",
      ],
      useCases: [
        "Register, log in, and access protected workout pages.",
        "Create reusable workout templates with ordered exercises, sets, reps, rest time, duration, difficulty, and notes.",
        "Upload a workout cover image for a saved routine.",
        "View, edit, delete, paginate, and duplicate owned workout templates.",
        "Start an active workout session from a saved routine.",
        "Record actual repetitions, weight, and completed state for each set.",
        "Save completed sessions with timing data, completed-set totals, and total volume.",
        "Review workout history with date range, workout-name, and sort filters.",
        "View a monthly calendar summary of completed sessions.",
        "Export completed session and set-level history as CSV.",
        "Track weekly goals, remaining sessions, completion percentage, and streaks.",
        "Search exercise progress and review personal records for completed workouts.",
      ],
      features: [
        {
          title: "Registration, login, and protected routes",
          description:
            "Users can register and log in with password hashing through bcrypt. Protected frontend pages require an authenticated user, and protected backend routes require a Bearer access token.",
        },
        {
          title: "Access tokens with refresh-token support",
          description:
            "The frontend stores the access token and user object in localStorage and attaches the token through the Authorization header. Refresh-token endpoints and an HTTP-only cookie flow exist, and the Axios client can retry a 401 through /api/auth/refresh when a refresh cookie is available.",
        },
        {
          title: "Ownership-scoped workout templates",
          description:
            "Workout create, list, read, update, delete, and duplicate operations are scoped to the authenticated author. Authentication confirms the user, while authorization confirms ownership of the requested workout.",
        },
        {
          title: "Reusable workout builder",
          description:
            "Workout templates store a name, embedded exercises, duration, difficulty, notes, optional cover image URL, author, and timestamps. Each planned exercise stores a name, target sets, target reps, rest duration, and exercise notes.",
        },
        {
          title: "Workout cover-image upload",
          description:
            "Authenticated uploads use Multer memory storage, JPEG/PNG/WebP/GIF filtering, a 5 MB limit, and Cloudinary upload streaming into the workoutly folder. The API returns a secure URL and public ID, and the create-workout flow saves the URL as the routine cover image.",
        },
        {
          title: "Active workout sessions",
          description:
            "Starting a routine converts planned exercises into set logs. Users can enter actual reps and weight, mark sets complete, use the rest timer, and finish only after at least one set has been completed.",
        },
        {
          title: "Persisted session history",
          description:
            "Completed sessions are stored separately from workout templates with user, source workout, workout-name snapshot, start and completion times, duration, set results, completed-set total, total volume, notes, and timestamps.",
        },
        {
          title: "History filters, calendar, and CSV export",
          description:
            "History supports newest/oldest sorting, date range filtering, workout-name filtering, pagination, selected-date drill-down from a monthly calendar, and CSV export with escaped session and set-level values.",
        },
        {
          title: "Dashboard summaries",
          description:
            "The dashboard combines saved routine counts with session summary data, goal summary data, recent sessions, calendar activity, exercise-library category context, and loading, empty, and error states.",
        },
        {
          title: "Weekly goals and streaks",
          description:
            "Users can set an active weekly workout target. The default target is 3 sessions, valid targets are 1 through 14, and the summary reports sessions this week, remaining sessions, completion percentage, current streak, and longest streak.",
        },
        {
          title: "Exercise progress tracking",
          description:
            "Users can search an exercise name and view progress derived from matching completed sessions, including best weight, best reps, total volume, completed sets, session date, and workout name.",
        },
        {
          title: "Automatic personal records",
          description:
            "After a session is saved, completed sets are evaluated for max weight, max reps, and max volume records per user and exercise. Records link back to the session and workout where they were achieved.",
        },
        {
          title: "Default and custom exercise library",
          description:
            "The exercise library combines default exercises with user-created custom exercises. It supports search, category filtering, equipment filtering, instructions, and uniqueness rules for default names and user-scoped custom names.",
        },
        {
          title: "Demo data, Docker, and CI",
          description:
            "The repository includes guarded demo seeding, local and production-image Docker Compose files, server/client Dockerfiles, and a GitHub Actions workflow that runs server tests, client lint, client tests, and a client build with MongoDB available in CI.",
        },
      ],
      architecture: {
        overview: [
          "The frontend is a React single-page application built with Vite, React Router, Axios, authentication context, theme context, protected and public route wrappers, and toast-based feedback. Pages cover dashboard, workout creation/editing, active sessions, history, progress, records, goals, and exercises.",
          "A typical request flows from a page or form into the shared Axios client, then to an Express API route, middleware, controller or service logic, Mongoose model operations, MongoDB persistence, an API response, React state updates, and user feedback. Axios attaches the access token and extracts backend error messages for toasts.",
          "The backend uses Node.js, Express, MongoDB, Mongoose, JWT, bcrypt, Multer, Cloudinary, CORS, cookie parsing, custom application errors, validation middleware, and shared response helpers. Route groups include /api/users, /api/auth, /api/workouts, /api/sessions, /api/goals, /api/records, /api/exercises, /api/upload, and /api/health.",
          "The codebase has an evolving layered architecture rather than a perfectly uniform one. Workout and user flows use route, validation, controller, service, repository, model, and MongoDB layers, while sessions, goals, records, exercises, and uploads keep more business logic directly in controllers or focused services.",
          "The main data models divide responsibilities clearly. User stores account identity, Workout stores reusable plans, WorkoutSession stores completed session snapshots, Goal stores an active weekly target, PersonalRecord stores best values per user/exercise/record type, and Exercise stores default or user-created exercise definitions.",
          "Deployment and operations configuration is present but still project-level rather than proven production operations. The repo includes environment-variable documentation, a Vercel SPA rewrite under the client, Docker Compose for local Mongo/client/server runs, a production-image compose file, Dockerfiles, demo seeding, and CI checks.",
        ],
        layers: [
          {
            id: "react-client",
            title: "React client",
            description:
              "Handles authentication UI, protected routes, workout builder, active sessions, dashboard, history, goals, progress, records, exercise library, theme state, and user feedback.",
            technologies: ["React", "Vite", "React Router", "Axios"],
            kind: "client",
          },
          {
            id: "express-api",
            title: "Express API",
            description:
              "Owns authentication, workout CRUD, session persistence, goals and streaks, exercise progress, personal records, exercise library, upload endpoint, and centralized errors.",
            technologies: ["Node.js", "Express", "JWT", "bcrypt", "Multer"],
            kind: "api",
          },
          {
            id: "mongodb",
            title: "MongoDB persistence",
            description:
              "Stores user accounts, reusable workout templates, completed workout sessions, goals, personal records, and default or custom exercises through Mongoose models.",
            technologies: ["MongoDB", "Mongoose"],
            kind: "database",
          },
          {
            id: "cloudinary",
            title: "Media service",
            description:
              "Stores workout cover images uploaded through the authenticated API and returns secure hosted image URLs.",
            technologies: ["Cloudinary"],
            kind: "external",
          },
          {
            id: "delivery-tooling",
            title: "Delivery and verification tooling",
            description:
              "Supports Docker-based environments, guarded demo seeding, automated server and client checks, and production client build verification.",
            technologies: ["Docker", "GitHub Actions"],
            kind: "tooling",
          },
        ],
        connections: [
          {
            from: "react-client",
            to: "express-api",
            label: "Bearer-authenticated API requests through the shared Axios client.",
          },
          {
            from: "express-api",
            to: "mongodb",
            label: "Mongoose reads and writes users, workouts, sessions, goals, records, and exercises.",
          },
          {
            from: "express-api",
            to: "cloudinary",
            label: "Validated workout-cover uploads are streamed to Cloudinary.",
          },
          {
            from: "delivery-tooling",
            to: "express-api",
            label: "CI and Docker verify the server runtime and API behavior.",
          },
          {
            from: "delivery-tooling",
            to: "react-client",
            label: "CI runs client lint, tests, and production build verification.",
          },
        ],
      },
      technicalDecisions: [
        {
          title: "MERN stack",
          description:
            "Workoutly uses React and Vite on the frontend with Node.js, Express, MongoDB, and Mongoose on the backend.",
          reason:
            "Using JavaScript across the stack made the project approachable while I was learning how frontend forms, REST APIs, and persistent documents fit together.",
          tradeOff:
            "MongoDB document relationships and cross-document consistency remain application responsibilities, and plain JavaScript does not provide the compile-time guarantees that TypeScript would.",
        },
        {
          title: "Separate workout templates and completed sessions",
          description:
            "Workout documents store reusable plans, while WorkoutSession documents store actual completed training events.",
          reason:
            "A template can change over time, but historical sessions should still show what was actually performed when the session was saved.",
          tradeOff:
            "This adds more models, endpoints, validation, and synchronization logic than storing every workout as a single mutable document.",
        },
        {
          title: "Ownership-based authorization",
          description:
            "Protected operations query or validate data against the authenticated user's id instead of relying only on a valid token.",
          reason:
            "Workout plans, session history, goals, records, and custom exercises are personal data and should not be visible or mutable across accounts.",
          tradeOff:
            "Ownership checks need to be repeated consistently across related routes such as workout read/update/delete/duplicate and session creation.",
        },
        {
          title: "JWT access tokens with refresh-token support",
          description:
            "API requests use Bearer access tokens. Login can set an HTTP-only refresh cookie when refresh-token secrets are configured, and the Axios client can retry protected requests through the refresh endpoint.",
          reason:
            "This gave me a practical way to learn stateless API authentication, protected routes, and session persistence across page refreshes.",
          tradeOff:
            "The current frontend still stores the access token in localStorage, and a hardened production session strategy would need stronger token rotation, revocation, and storage decisions.",
        },
        {
          title: "Embedded exercise data in workouts and sessions",
          description:
            "Workout templates embed planned exercise details, and sessions embed the set-level results that were completed during that workout.",
          reason:
            "A full routine or completed session can be retrieved as one document, and historical session snapshots remain readable without reconstructing them from a changing exercise library.",
          tradeOff:
            "Exercise names and snapshots can diverge from library definitions, and very large histories would need document-size and indexing considerations.",
        },
        {
          title: "Cloudinary for workout cover images",
          description:
            "Images are uploaded through an authenticated endpoint, validated in memory with Multer, streamed to Cloudinary, and stored on the workout as a hosted URL.",
          reason:
            "Binary media does not belong directly in MongoDB, and a hosted media service keeps the application database focused on structured workout data.",
          tradeOff:
            "Cloudinary credentials must be configured securely, and the current code does not implement old remote-asset cleanup when a workout image is replaced or a workout is deleted.",
        },
        {
          title: "Server-calculated session metrics",
          description:
            "The backend normalizes set values, counts only completed sets, calculates total volume from actual repetitions multiplied by weight, and detects personal records after saving a session.",
          reason:
            "Completed-set count, volume, summaries, and records should not depend only on client-side calculations that can be changed or bypassed.",
          tradeOff:
            "The metric definitions are intentionally simple and do not yet handle bodyweight exercise formulas, assisted exercises, unit preferences, warm-up sets, or one-repetition-max estimates.",
        },
        {
          title: "Page-based pagination",
          description:
            "Workout and session list endpoints accept page and limit query values and cap the backend limit at 50.",
          reason:
            "Page pagination is easy to reason about for dashboards and history screens while the dataset is small.",
          tradeOff:
            "Offset-style pagination can become less efficient at large scale than cursor-based pagination.",
        },
        {
          title: "Reusable API response and error handling",
          description:
            "Controllers use a shared success helper where practical, and centralized error middleware returns JSON errors with success: false and a message.",
          reason:
            "A predictable response shape makes frontend integration and toast-based error handling simpler.",
          tradeOff:
            "Some endpoints include compatibility fields such as top-level token, user, pagination, or newRecords, so controller discipline is still needed to keep responses consistent.",
        },
        {
          title: "Docker and GitHub Actions",
          description:
            "Docker Compose can run the app with MongoDB locally, production compose can pull tagged images, and CI runs server tests, client lint, client tests, and a client build.",
          reason:
            "Container and CI configuration helped me learn how full-stack projects move beyond local-only development.",
          tradeOff:
            "Passing CI and having deployment configuration does not prove production readiness without real secrets, hosted infrastructure, monitoring, and smoke-tested deployments.",
        },
      ],
      challenges: [
        {
          challenge:
            "The original workout template model was not enough to represent what a user actually completed.",
          resolution:
            "I introduced a separate WorkoutSession model with workout-name snapshots, timing data, set-level results, completed-set totals, volume, notes, and user/workout references.",
          learning:
            "Planning data and event history often deserve separate models, even when they look similar in the interface.",
        },
        {
          challenge:
            "A valid token should not allow one user to read, edit, delete, duplicate, or save a session for another user's workout.",
          resolution:
            "The backend resolves the authenticated user from the access token, filters lists by owner, and applies explicit ownership checks before sensitive workout and session actions.",
          learning:
            "Authentication confirms who is making the request; authorization decides whether that person can access the resource.",
        },
        {
          challenge:
            "Session metrics needed to distinguish planned targets from completed work.",
          resolution:
            "The session controller normalizes numeric values, counts only completed sets, requires at least one completed set, and calculates total volume from actual reps multiplied by weight.",
          learning:
            "Derived metrics need clear definitions and server-side validation, especially when the client can send set-level details.",
        },
        {
          challenge:
            "A completed session can create several possible records across exercises and record types.",
          resolution:
            "After a session is saved, the record service checks completed sets for max weight, max reps, and max volume, then creates or updates the current record only when the new value is higher.",
          learning:
            "Derived data can make history more useful, but update rules need to stay deterministic and easy to explain.",
        },
        {
          challenge:
            "History filters, calendar grouping, weekly goals, and streaks all depend on consistent date handling.",
          resolution:
            "The backend validates date-only filters, uses ISO date keys for grouping, filters monthly calendar data, and calculates weekly/streak values from persisted completed session dates.",
          learning:
            "Date handling becomes a real domain concern quickly, and timezone-aware boundaries are worth improving as a project matures.",
        },
        {
          challenge:
            "Image uploads needed to accept useful workout covers without letting arbitrary or oversized files reach storage.",
          resolution:
            "The upload route requires authentication, uses Multer memory storage, filters MIME types to JPEG/PNG/WebP/GIF, caps files at 5 MB, streams to Cloudinary, and returns a secure hosted URL.",
          learning:
            "Uploads are more than a file input; they require validation, storage decisions, secret management, and error handling.",
        },
        {
          challenge:
            "The frontend needed to make authentication failures, validation errors, empty histories, loading states, and failed API calls understandable.",
          resolution:
            "The app uses centralized backend errors, Axios error-message extraction, protected route wrappers, loading and empty states, and toast feedback across the main workflows.",
          learning:
            "Error handling is part of product quality, not just a backend implementation detail.",
        },
        {
          challenge:
            "Deployment configuration had to coordinate React, Express, MongoDB, Cloudinary, CORS, cookies, JWT secrets, Docker, Vercel-style frontend routing, and CI.",
          resolution:
            "The repository documents environment variables, keeps secrets out of committed configuration, supports configurable API/client URLs, adds Docker Compose files, and verifies server and client checks through GitHub Actions.",
          learning:
            "Full-stack deployment is a coordinated system, not a single build command.",
        },
      ],
      learnings: [
        {
          category: "architecture",
          title: "Mutable templates and historical events need separate models",
          description:
            "Workout templates describe reusable plans, while WorkoutSession documents describe what actually happened during a completed workout. Editing a template later should not rewrite the reps, weights, timing, or volume from past sessions.",
          application:
            "I separate reusable definitions from immutable or snapshot-based events when they have different lifecycles.",
        },
        {
          category: "technical",
          title: "A valid token does not grant access to every resource",
          description:
            "Workoutly uses JWTs to identify the requester, but workouts, sessions, goals, records, and custom exercises are user-specific. Ownership checks still have to protect each personal fitness resource.",
          application:
            "I add owner or tenant conditions to protected database operations rather than relying only on authentication middleware.",
        },
        {
          category: "technical",
          title: "Derived metrics should be calculated on the server",
          description:
            "Completed-set totals, volume, summaries, and personal records should not depend only on client-calculated values. The server normalizes set values, counts completed work, and calculates volume from actual reps and weight.",
          application:
            "I calculate trusted business metrics on the server from validated inputs whenever the result affects history or user-facing summaries.",
        },
        {
          category: "architecture",
          title: "Similar-looking domain data may have different lifecycles",
          description:
            "Workout exercises store planned values, session exercises store actual reps, weights, and completion state, and exercise-library entries support suggestions and custom movements. Similar names do not mean the same model responsibility.",
          application:
            "I model data around lifecycle and ownership instead of grouping fields only because they look similar in the UI.",
        },
        {
          category: "debugging",
          title: "Date-based features contain hidden edge cases",
          description:
            "History filters, monthly calendar aggregation, weekly targets, and streaks all depend on date boundaries. Workoutly's straightforward ISO date logic works for the current scope, but timezone behavior remains an important improvement area.",
          application:
            "I define timezone and calendar-boundary rules early when building date-sensitive features.",
        },
        {
          category: "technical",
          title: "Uploads require a complete pipeline",
          description:
            "Workout cover images involve Multer memory storage, MIME filtering, file-size limits, Cloudinary streaming, secure URLs, and error handling. A file input alone is not an upload system.",
          application:
            "I plan validation, storage, cleanup, credentials, and failure recovery together when adding media features.",
        },
        {
          category: "architecture",
          title: "Authentication convenience and security involve trade-offs",
          description:
            "Bearer access tokens, localStorage persistence, refresh-token cookies, retry behavior, logout, and protected routes all interact. The current approach fits the project scope, but hardened production use would need stronger rotation, revocation, and storage decisions.",
          application:
            "I document token lifecycle and threat assumptions instead of describing an auth flow as secure without qualification.",
        },
        {
          category: "debugging",
          title: "Error handling is part of the user experience",
          description:
            "Loading states, empty states, validation messages, authentication failures, and toast feedback determine whether the app feels reliable. Backend response consistency makes that frontend feedback easier to implement.",
          application:
            "I design failure and empty-state behavior alongside the successful workflow.",
        },
        {
          category: "architecture",
          title: "An evolving architecture reveals where abstraction helps",
          description:
            "Workout and user modules have clearer service and repository layers, while sessions, goals, exercises, records, and uploads still contain more controller logic. The unevenness shows where abstraction would help and where extra files would be premature.",
          application:
            "I introduce layers when they isolate meaningful business logic rather than adding structure automatically.",
        },
        {
          category: "collaboration",
          title: "Reproducible demo data improves review and handoff",
          description:
            "Guarded demo seeding creates populated and empty-state accounts so a reviewer can inspect dashboards, history, progress, records, and empty states without manually creating weeks of workouts.",
          application:
            "I provide safe, repeatable seed data when a project's value depends on historical records or realistic state.",
        },
        {
          category: "deployment",
          title: "CI and Docker are steps toward release readiness",
          description:
            "GitHub Actions verifies server tests, client lint, client tests, and the production client build, while Docker documents runtime dependencies. Those checks still do not prove monitoring, hosted secrets, or smoke-tested production behavior.",
          application:
            "I treat automated checks as one release layer inside a larger deployment checklist.",
        },
      ],
      results: [
        "Built an authenticated full-stack MERN workout tracker.",
        "Implemented registration, login, access-token protected APIs, refresh-token endpoints, logout, and protected frontend routes.",
        "Implemented reusable workout CRUD with ownership checks, validation, pagination, and duplication.",
        "Implemented workout cover-image uploads through an authenticated Multer and Cloudinary flow.",
        "Implemented active workout sessions with set-level actual reps, weight, completed state, rest timer behavior, and persisted completed sessions.",
        "Added workout history filtering, newest/oldest sorting, monthly calendar summaries, selected-date details, and CSV export.",
        "Added dashboard summaries for saved routines, completed sessions, total sets, total volume, total duration, average duration, weekly activity, recent sessions, and streak context.",
        "Added weekly workout goals with a default target, target updates, remaining sessions, completion percentage, current streak, and longest streak.",
        "Added exercise-specific progress history based on persisted completed sessions.",
        "Added automatic personal-record tracking for max weight, max reps, and max volume.",
        "Added a default and custom exercise library with search, category, and equipment filters.",
        "Added guarded demo seeding, Docker configuration, and GitHub Actions checks for the server and client.",
      ],
      currentProgress: [
        "The core full-stack workout-planning and completed-session workflow is implemented.",
        "Session history, goals, streaks, progress, records, exports, exercise library, seed data, Docker configuration, and CI are present in the source repository.",
        "The project remains in progress because authentication hardening, architecture consistency, analytics scaling, media lifecycle cleanup, timezone handling, broader testing, and production observability can still improve.",
        "No verified live deployment URL is included in the portfolio data.",
      ],
      limitations: [
        "Workoutly is designed for individual users and does not implement trainer/client, gym-management, team, or organization workflows.",
        "Authorization is ownership-based, not a role-based or fine-grained permission system.",
        "The application does not include nutrition tracking, body measurements, recovery tracking, medical guidance, or professional coaching workflows.",
        "Progress and volume calculations are simple and do not estimate one-repetition maxes or model bodyweight and assisted exercises differently.",
        "Date grouping, weekly boundaries, and streak calculations use straightforward date logic and could benefit from stronger timezone-aware handling.",
        "The backend architecture is mixed: workouts and users have clearer service/repository layers, while sessions, goals, exercises, records, and uploads still contain substantial controller logic.",
        "Access-token storage and refresh-token integration work for the current app, but production-grade token rotation, revocation, and safer access-token storage would need more work.",
        "Automated tests cover many server workflows and a few client interactions, but they are not exhaustive across every feature, upload path, UI state, and failure case.",
        "Dashboard, calendar, streak, and summary endpoints currently read user sessions in application logic for several calculations rather than using optimized aggregation for every metric.",
        "Workout cover-image uploads are implemented for routine creation, but edit-time image replacement and Cloudinary cleanup for old assets are not fully handled.",
        "No monitoring, structured logging, alerting, production observability stack, native mobile app, offline workout-session support, social features, or sharing workflows are documented.",
      ],
      futureImprovements: [
        "Harden authentication with a fully integrated refresh-token strategy, token rotation, revocation, and safer access-token handling.",
        "Add broader unit, integration, and end-to-end test coverage for uploads, auth refresh behavior, UI states, history filters, goals, records, and failure paths.",
        "Move more backend modules toward a consistent route, validation, controller, service, repository, model structure where the extra separation pays off.",
        "Use MongoDB aggregation and additional indexes for dashboard, calendar, history, and progress metrics as data grows.",
        "Improve timezone-aware history filters, monthly calendars, weekly boundaries, and streak calculations.",
        "Add structured backend logging, monitoring, health checks, deployment smoke tests, and production observability.",
        "Support replacing workout cover images after creation and delete old Cloudinary assets when images or workouts are removed.",
        "Add richer progress charts, configurable date ranges, measurement units, and user preferences.",
        "Improve volume calculations for bodyweight movements, assisted exercises, warm-up sets, and unit conversion without claiming medical or coaching advice.",
        "Add workout timers, pause/resume support, rest-timer persistence, and recovery of interrupted active sessions.",
        "Add scheduled workout plans, reminders, PWA support, or mobile-oriented offline session capture as future product extensions.",
      ],
    },
    featured: true,
  },
];
