import type { Project } from "@/types/project.js";

export const projects: Project[] = [
  {
    title: "Pravaah",
    slug: "pravaah",
    summary:
      "An actively developed clinic operations platform connecting staff access, doctor availability, slot-aware scheduling, arrivals, live queues, activity history, and explainable no-show support.",
    description:
      "Pravaah is a clinic operations product for small and medium clinics, built around the full flow from clinic setup and staff access to scheduling, arrival, queue movement, consultation status, and operational review. v0.3.0 is the production-verified Clinic Operations Release. The current source has since expanded with staff invitation APIs, doctor availability, slot discovery, appointment rescheduling and activity history, structured arrival and terminal reasons, address geocoding, and patient travel estimates; those post-release capabilities remain clearly separated from the deployed v0.3 baseline until deployment verification is recorded.",
    engineeringHighlight:
      "Added Staff invitation, doctor-availability, slot-discovery, rescheduling, activity-history, geocoding, and travel-routing APIs after the v0.3 release.",
    status: "in-progress",
    type: "full-stack",
    techStack: [
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Clerk",
      "Geoapify",
      "Zod",
      "Vite",
      "Tailwind CSS",
      "Vitest",
    ],
    image: {
      light: "/images/projects/pravaah/pravaah-thumbnail-light.png",
      dark: "/images/projects/pravaah/pravaah-thumbnail-dark.png",
      alt: "Pravaah clinic operations dashboard preview for appointment, queue, and workflow management",
    },
    githubUrl: "https://github.com/garvitsingh171/pravaah",
    liveUrl: "https://pravaah.garvitsingh171.com",
    seo: {
      title: "Pravaah | Clinic Operations Product Case Study",
      description:
        "Pravaah clinic operations case study: TypeScript APIs, PostgreSQL workflows, slot-aware scheduling, staff access, live queues, and explainable no-show support.",
      image: "/images/projects/pravaah/pravaah-thumbnail-light.png",
    },
    caseStudy: {
      category: "Clinic Operations / Clinic Flow Management",
      role: "Product-minded full-stack developer",
      timeline: "v0.3.0 released; post-release source actively developing",
      problem: [
        "Small and medium clinics often coordinate the day through notebooks, phone calls, messages, spreadsheets, reception conversations, and memory. Those tools can hold fragments of appointment context, but they do not automatically keep the clinic day coherent.",
        "The real problem is not just booking an appointment. A scheduled visit affects expected arrival, waiting order, doctor time, queue movement, consultation completion, cancellations, no-shows, and the operational picture staff need in order to decide what needs attention next.",
      ],
      productThesis: [
        "Pravaah means flow. The product is built around the clinic day rather than only the appointment calendar: clinic setup leads to doctors and patients, appointments create queue context, risk assistance gives staff review signals, arrivals move into the queue, and the dashboard reflects what has happened and what is happening now.",
        "The product direction is a clinic-side operations platform that can help staff reduce coordination overhead, protect appointment capacity, keep queues moving, and make operational decisions with better context. It does this without pretending to be a hospital ERP, patient portal, doctor portal, or trained AI prediction product.",
      ],
      solution: [
        "Pravaah combines a React and TypeScript frontend with an Express and TypeScript API, PostgreSQL, Prisma, Clerk, and Zod. Public visitors can reach the product landing page, sign up or sign in through Clerk, and complete onboarding if they are a new clinic Admin.",
        "The v0.3.0 release supports a production-verified clinic-side workflow: self-service onboarding, transactional clinic and first Admin provisioning, optional fictional sample data, clinic settings, setup guidance, doctor and patient records, appointment booking and filtering, queue status and manual reorder, dashboard summaries, and stored no-show risk context.",
        "Post-release source work adds invitation-based Staff provisioning, Admin staff management, recurring doctor availability, slot discovery, rescheduling, appointment activity history, structured arrival and terminal reasons, patient attendance statistics, and structured clinic/patient location workflows backed by Geoapify geocoding and routing.",
        "Important writes stay backend-owned. Appointment creation and rescheduling validate clinic relationships, availability, operating hours, duration and buffer conflicts; transactions and PostgreSQL advisory locks protect selected slot, queue-position, lifecycle, and reorder scopes.",
      ],
      businessValue: [
        {
          title: "Save staff time",
          description:
            "By keeping appointments, arrival state, queue progression, risk context, and operational summaries connected, Pravaah is designed to reduce the manual coordination reception teams do during the clinic day.",
        },
        {
          title: "Protect appointment capacity",
          description:
            "Unused appointment slots can mean lost doctor capacity. Explainable risk assistance gives staff earlier visibility into appointments that may deserve attention before they become avoidable operational gaps.",
        },
        {
          title: "Improve clinic productivity",
          description:
            "Productivity means less coordination overhead: fewer repeated status checks, clearer appointment-to-queue progression, and a shared operational view for Admin and Staff users.",
        },
        {
          title: "Improve operational visibility",
          description:
            "The dashboard and workflow screens help clinic teams see today's appointments, current queue state, completed visits, cancellations, no-shows, high-risk appointments, and recent activity.",
        },
      ],
      differentiators: [
        {
          title: "Clinic-flow-first, not calendar-first",
          description:
            "Pravaah is built around the clinic day. Appointments feed into arrival, queue state, completion, dashboard visibility, and risk context instead of remaining isolated calendar rows.",
        },
        {
          title: "Appointment-to-queue continuity",
          description:
            "A scheduled visit becomes part of the live operational queue, so booking, waiting, called, completed, cancelled, and no-show states stay connected.",
        },
        {
          title: "Explainable no-show assistance",
          description:
            "The current feature stores LOW, MEDIUM, or HIGH risk, a numeric score, readable reasons, and suggested staff actions. It is deterministic decision support, not unsupported machine learning.",
        },
        {
          title: "Human-controlled operations",
          description:
            "Pravaah does not automatically cancel appointments, contact patients, or silently reorder queues. It gives context while authorized clinic staff keep final control.",
        },
        {
          title: "Clinic-scoped operational integrity",
          description:
            "Backend authorization maps Clerk identity to an active internal user and clinic before protected operations continue. The v0.3.0 production verification records cross-clinic rejection as passing.",
        },
      ],
      targetUsers: [
        "Reception and Staff users manage appointments, patient records, arrivals, queue status, manual queue reorder, visit state, dashboard review, and no-show context inside their assigned clinic.",
        "Clinic Admin users provision the clinic workspace, manage settings and sample data, and—in the current post-release source—create one-time Staff invitations, review invitation state, revoke pending invitations, and suspend or reactivate Staff access.",
        "Doctors are records in the current product, not logged-in users. Their benefit is indirect: clearer patient order, smoother queue progression, and fewer interruptions caused by operational uncertainty.",
        "Patients are records in the current product, not logged-in users. The current release does not implement self-booking, patient login, or a patient portal.",
      ],
      useCases: [
        "Open the public product, sign up with Clerk, resolve onboarding status, create a clinic workspace, and become the first active Admin.",
        "Configure clinic settings, doctors, recurring weekly availability, patients, and optional fictional sample data.",
        "Invite Staff through a one-time, hashed-token workflow and manage Staff access without exposing authority fields to the browser.",
        "Discover valid appointment slots from doctor availability, clinic hours, duration, buffer, and existing active appointments.",
        "Book or reschedule appointments while preserving queue identity and protecting against stale concurrent changes.",
        "Track first arrival, lateness, lifecycle activity, cancellation reasons, no-show reasons, and patient attendance statistics.",
        "Geocode structured clinic and patient addresses and calculate server-side travel distance and duration estimates through Geoapify.",
        "Manage live queue status and manual ordering for one doctor and clinic-local date with backend validation and conflict handling.",
        "Review dashboard summaries, high-risk appointments, setup state, and recent operational activity.",
        "Review deterministic no-show risk reasons and suggested staff actions without treating the score as trained machine learning.",
      ],
      features: [
        {
          title: "Public entry and Clerk authentication",
          description:
            "The frontend includes public landing, sign-in, and sign-up routes. Clerk provides session identity before the API decides whether the user is onboarded or authorized for clinic operations.",
        },
        {
          title: "Self-service clinic onboarding",
          description:
            "A valid Clerk user without an internal Pravaah account can create a clinic workspace and first active Admin through a dedicated onboarding API.",
        },
        {
          title: "Transactional clinic and Admin provisioning",
          description:
            "Clinic creation and first Admin creation run inside one Prisma transaction, with slug checks, replay handling, and conflict responses to avoid orphan clinic records.",
        },
        {
          title: "Internal user mapping",
          description:
            "Protected API requests use Clerk authentication, then map the Clerk user ID to an internal active Pravaah user with a role, status, and clinic association.",
        },
        {
          title: "Clinic-level access checks",
          description:
            "Backend services verify that the signed-in internal user can access the requested clinic before clinic-scoped operations continue.",
        },
        {
          title: "Clinic settings and first-run setup",
          description:
            "Admin users can review and update clinic profile, timezone, operating hours, slot duration, and buffer settings. A first-run checklist tracks clinic setup, doctors, patients, appointments, and queue readiness.",
        },
        {
          title: "Doctor and patient records",
          description:
            "The Prisma schema models doctors, patients, and clinic relationships through DoctorClinic and PatientClinic links. The frontend supports create, list, search, and edit workflows for these records.",
        },
        {
          title: "Appointment booking and listing",
          description:
            "Appointments connect a clinic, doctor, patient, creator, scheduled time, duration, booking source, notes, status, queue entry, and no-show prediction.",
        },
        {
          title: "Availability-aware scheduling",
          description:
            "Recurring doctor availability and slot APIs enforce clinic hours, appointment duration, buffer windows, inactive-doctor checks, and overlap conflicts before booking or rescheduling.",
        },
        {
          title: "Invitation-based Staff access",
          description:
            "Admin-only APIs create, list, revoke, and accept one-time Staff invitations, then support Staff suspension and reactivation while preserving operational attribution.",
        },
        {
          title: "Appointment rescheduling and history",
          description:
            "Appointment-specific APIs discover alternative slots, reschedule with optimistic concurrency checks, preserve the linked queue record, and expose an append-only activity timeline.",
        },
        {
          title: "Arrival and outcome context",
          description:
            "Lifecycle updates capture first arrival, signed timing offset, late classification, cancellation or no-show reasons, and idempotent patient attendance statistics.",
        },
        {
          title: "Location and travel estimates",
          description:
            "Structured clinic and patient addresses can be geocoded server-side, while route calculation stores compact distance and free-flow travel-duration context without exposing the provider key.",
        },
        {
          title: "Daily queue operations",
          description:
            "Queue entries track position, waiting, arrived, called, completed, cancelled, and no-show states, with status updates synchronized back to the linked appointment.",
        },
        {
          title: "Manual queue reordering",
          description:
            "Staff-facing queue controls can move active queue entries while the backend validates clinic ownership, final statuses, the selected date, and the complete active queue list.",
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
      apiHighlights: [
        {
          title: "Staff access APIs",
          description:
            "GET/POST /api/clinics/:clinicId/staff and /staff/invitations manage members and invitations; GET/POST /api/staff/invitations/:token provides identity-aware preview and acceptance.",
        },
        {
          title: "Doctor availability APIs",
          description:
            "GET and PUT /api/clinics/:clinicId/doctors/:doctorId/availability read or atomically replace a clinic-specific seven-day availability schedule.",
        },
        {
          title: "Slot and rescheduling APIs",
          description:
            "GET /api/clinics/:clinicId/appointments/available-slots discovers bookable capacity; appointment-specific reschedule-slots and PATCH reschedule routes protect self-exclusion and stale writes.",
        },
        {
          title: "Lifecycle and activity APIs",
          description:
            "PATCH /api/appointments/:appointmentId/status enforces lifecycle rules and structured outcome reasons; GET /activities returns the appointment's append-only operational timeline.",
        },
        {
          title: "Location APIs",
          description:
            "Clinic and patient geocode routes perform explicit retries, while POST /api/clinics/:clinicId/patients/:patientId/route calculates synchronized travel metrics through a server-owned provider integration.",
        },
        {
          title: "Queue and dashboard APIs",
          description:
            "Clinic-scoped queue list, status, and reorder routes work alongside dashboard summary, high-risk appointment, and activity endpoints for the selected clinic day.",
        },
      ],
      workflow: [
        "A new clinic Admin signs up through Clerk and creates the clinic plus first active Admin in one transaction.",
        "The Admin configures clinic settings, structured location data, doctors, weekly availability, patients, and optional fictional sample data.",
        "The Admin can create a one-time Staff invite; the invitee signs in with the matching Clerk identity and explicitly accepts before receiving clinic access.",
        "Staff selects a doctor, patient, date, and duration; the backend derives valid slots from availability, clinic hours, buffers, and active conflicts.",
        "Booking creates the appointment, queue entry, and explainable no-show context together under transaction and advisory-lock protection.",
        "The clinic can reschedule through appointment-specific slot discovery, preserving the appointment and queue identity while recording an activity event.",
        "Arrival and lifecycle updates synchronize appointment and queue state, record lateness and terminal reasons, and update patient statistics once.",
        "Optional geocoding and routing jobs enrich clinic-patient context with address confidence, distance, and travel duration without changing booking or risk decisions.",
        "The dashboard gives Admin and Staff visibility into current appointments, queue state, high-risk appointments, activity, and setup progress.",
      ],
      architecture: {
        overview: [
          "The request flow is React client, Clerk authentication, Express API, Zod validation, controller, service layer, repository or Prisma operation, and PostgreSQL. Routes define endpoints, Zod validation checks inputs, controllers handle HTTP concerns, services apply business rules, and repositories perform database reads, writes, transactions, and raw SQL where needed.",
          "The relational model now includes User, StaffInvitation, Clinic, Doctor, DoctorClinic, DoctorAvailabilityPeriod, Patient, PatientClinic, Appointment, AppointmentActivity, QueueEntry, and NoShowPrediction. These records separate identity, clinic membership, scheduling policy, visit history, live operations, and decision-support context.",
          "Appointment creation is a multi-step operation. It verifies clinic ownership for doctor and patient records, counts previous patient attendance signals, acquires transaction-level advisory locks, checks slot conflicts, calculates the next queue position, creates the appointment, creates the queue entry, and stores the no-show prediction inside a transaction.",
          "Clinic onboarding has a separate identity-aware path. The API can answer onboarding status for a valid Clerk identity before an internal user exists, then creates the clinic and first Admin together with server-controlled role, status, and clinic ownership.",
          "The frontend handles public and invite routes, Clerk auth, onboarding-aware redirects, active clinic resolution, staff management, doctor availability, patients, appointments, activity dialogs, queues, dashboard, settings, and feedback states. Final authorization, provider credentials, state transitions, and writes remain backend responsibilities.",
          "Post-release location modules treat geocoding and routing as best-effort enrichment. Geoapify calls happen server-side, stale-attempt guards prevent older responses from overwriting newer address state, and travel metrics remain operational context rather than prediction or navigation data.",
        ],
        layers: [
          {
            id: "react-app",
            title: "React application",
            description:
              "Handles public routes, Clerk sign-in and sign-up, onboarding-aware routing, protected application shell, active clinic context, dashboard, doctors, patients, appointments, queue, clinic settings, loading states, empty states, errors, and toast feedback.",
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
              "Registers clinic-scoped REST routes, resolves identity and role context, validates with Zod, and coordinates onboarding, Staff invitations, availability, slots, appointments, lifecycle activity, queues, location enrichment, dashboard, and settings workflows.",
            technologies: ["Node.js", "Express", "TypeScript", "Zod"],
            kind: "api",
          },
          {
            id: "persistence",
            title: "Repository and persistence layer",
            description:
              "Runs Prisma operations, PostgreSQL transactions, clinic/Admin provisioning, appointment conflict checks, queue position calculation, advisory locks, queue reordering, and multi-record writes.",
            technologies: ["Prisma", "PostgreSQL"],
            kind: "service",
          },
          {
            id: "postgresql",
            title: "PostgreSQL database",
            description:
              "Stores relational clinic, user, doctor, patient, appointment, queue, settings, and no-show prediction data.",
            technologies: ["PostgreSQL"],
            kind: "database",
          },
          {
            id: "clerk",
            title: "External identity service",
            description:
              "Provides user sign-in, session identity, and authentication verification before the API maps that identity to an internal Pravaah user or invitation acceptance path.",
            technologies: ["Clerk"],
            kind: "external",
          },
          {
            id: "geoapify",
            title: "Geocoding and routing service",
            description:
              "Resolves structured addresses and calculates compact clinic-to-patient travel metrics through server-side calls with retry and stale-attempt protection.",
            technologies: ["Geoapify"],
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
            from: "express-api",
            to: "geoapify",
            label: "Server-owned geocoding and route requests; provider credentials never reach the browser.",
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
            "Clerk confirms who is signed in, while Pravaah stores the internal role, status, onboarding state, and clinic access rules.",
          reason:
            "This keeps identity management separate from clinic-specific authorization decisions.",
          tradeOff:
            "A signed-in Clerk user may be unprovisioned, so the app needs onboarding-aware routing and recovery states in addition to protected app routes.",
        },
        {
          title: "Server-owned onboarding bootstrap",
          description:
            "A dedicated onboarding API creates the clinic and first Admin together, using trusted Clerk identity data and server-controlled role, status, and clinic ownership.",
          reason:
            "A normal clinic creation API requires an existing Admin, so first-run onboarding needs a separate guarded path.",
          tradeOff:
            "The flow has more edge cases to handle, including duplicate submissions, slug conflicts, recovery states, and sample data provisioning.",
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
            "Clinic/Admin onboarding, appointment creation, queue status synchronization, and queue reordering use Prisma transactions. PostgreSQL transaction-level advisory locks are used for selected appointment slot, queue-position, queue-reorder, and sample-data scopes.",
          reason:
            "Two concurrent requests should not both believe the same doctor slot or queue state is available and leave the clinic day inconsistent.",
          tradeOff:
            "The code is more complex than a simple insert flow, and the concurrency guarantee is scoped to the implemented database logic rather than every possible race condition.",
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
          title: "Explicit lifecycle state machines",
          description:
            "Appointment and queue transitions are checked against backend policies, with compare-and-set writes, idempotent same-status retries, append-only activity events, and one-time terminal effects.",
          reason:
            "A valid enum value is not automatically a valid next state, especially when appointment, queue, and patient statistics must stay synchronized.",
          tradeOff:
            "More transition code and tests are required than a generic status update endpoint.",
        },
        {
          title: "Best-effort geospatial enrichment",
          description:
            "Address geocoding and route calculation run after core record writes and track attempt identity, provider status, and source hashes.",
          reason:
            "Clinic operations should still save when an external location provider is unavailable or an address cannot be resolved.",
          tradeOff:
            "Location data can temporarily be missing or stale and needs explicit retry and synchronization paths.",
        },
        {
          title: "Deterministic no-show assistance",
          description:
            "The no-show feature uses starter rules based on appointment timing and available patient-clinic history signals. It stores risk level, score, reasons, and suggested staff actions.",
          reason:
            "There is no validated training dataset in the project, so rule-based decision support keeps the result explainable and honest.",
          tradeOff:
            "The score can provide useful staff context, but it should not be treated as a trained predictive model.",
        },
      ],
      tradeOffs: [
        {
          title: "Rule-based assistance instead of ML",
          reason:
            "Deterministic rules are inspectable and appropriate while the product has no validated historical dataset.",
          tradeOff:
            "Pravaah cannot claim learned prediction accuracy, calibration, fairness metrics, or adaptive model behavior yet.",
        },
        {
          title: "Separate Appointment and QueueEntry records",
          reason:
            "Scheduling state and live clinic queue state are related but different domain concepts.",
          tradeOff:
            "The backend has to synchronize linked statuses and protect terminal states carefully.",
        },
        {
          title: "Backend authorization as the source of truth",
          reason:
            "Frontend guards improve UX, but clinic data protection needs server-side user, role, status, and clinic checks.",
          tradeOff:
            "More request context and recovery handling is required, especially for newly signed-up users.",
        },
        {
          title: "One active clinic per internal user today",
          reason:
            "A single `User.clinicId` keeps the current product scope manageable for v0.3.0.",
          tradeOff:
            "Full multi-clinic SaaS membership, role-per-clinic access, and clinic switching remain future work.",
        },
        {
          title: "Human-controlled queue operations",
          reason:
            "Staff need operational flexibility and should remain responsible for queue and risk decisions.",
          tradeOff:
            "The current product does not optimize queues, contact patients, or make autonomous capacity decisions.",
        },
      ],
      challenges: [
        {
          challenge:
            "A new Clerk user can be authenticated before Pravaah has any internal user or clinic record for them.",
          resolution:
            "The auth module exposes an onboarding status path for identity-only users and keeps normal operational APIs protected behind active internal Admin or Staff records.",
          learning:
            "A product can have valid states between sign-up and authorization, and those states should be modeled directly instead of treated as generic auth failures.",
        },
        {
          challenge:
            "Self-service onboarding needed to avoid creating a clinic without an owning Admin.",
          resolution:
            "The onboarding service creates the Clinic and first ACTIVE ADMIN user inside one Prisma transaction, handles duplicate identity or slug conflicts, and returns an already-completed result when the same identity safely replays a completed request.",
          learning:
            "Bootstrap flows need stronger consistency guarantees than ordinary CRUD screens because they create the ownership boundary for the rest of the app.",
        },
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
            "Queue positions and manual reordering are mutable operational state, so stale or incomplete client order cannot be trusted.",
          resolution:
            "Queue reorder validates clinic access, one doctor, one clinic-local date, non-final statuses, and the complete active queue set before persisting positions inside a locked transaction.",
          learning:
            "Operational flexibility works best when the UI gives staff control while the backend still protects invariants.",
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
            "Invitation acceptance had to authorize a Clerk identity that did not yet have an internal Pravaah user without weakening normal operational APIs.",
          resolution:
            "Dedicated preview and acceptance routes validate a one-time hashed token, normalized email, expiry, invitation state, and trusted Clerk identity before transactionally creating the Staff user.",
          learning:
            "Bootstrap and invitation paths need narrow identity-aware exceptions instead of bypassing the application's normal authorization boundary.",
        },
        {
          challenge:
            "Scheduling needed to account for weekly availability, clinic hours, duration overlap, buffer windows, rescheduling self-exclusion, and concurrent writes.",
          resolution:
            "Shared scheduling policy drives slot discovery and mutations; appointment-specific rescheduling derives immutable fields from persistence and confirms the client's current scheduled time before writing.",
          learning:
            "Availability is a domain policy shared by read and write paths, not merely a calendar UI calculation.",
        },
        {
          challenge:
            "External geocoding and routing responses could arrive late or fail after a clinic or patient address had already changed.",
          resolution:
            "The backend uses source hashes and attempt IDs so stale results cannot overwrite newer location state, while core clinic and patient writes remain independent from provider success.",
          learning:
            "External enrichment should be failure-tolerant and guarded against out-of-order completion.",
        },
        {
          challenge:
            "The no-show idea needed to be useful without pretending to be machine learning.",
          resolution:
            "The implementation stores rule-based LOW, MEDIUM, and HIGH risk levels with scores, reason codes, and suggested staff actions.",
          learning:
            "A transparent rule-based feature can be more honest than an unsupported AI claim when historical data is limited.",
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
          title: "Concurrency appears before scale",
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
          title: "Release readiness is cross-system",
          description:
            "Pravaah v0.3.0 required coordinating frontend deployment, backend deployment, PostgreSQL migration, Clerk configuration, CORS, environment variables, health checks, and production smoke testing.",
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
        "Shipped Pravaah v0.3.0 as the Clinic Operations Release, recorded as released after owner production verification and GO decision.",
        "Production verification records PASS for the v0.3 database migration, health endpoint, fresh Clerk signup, onboarding, clinic provisioning, authorization, doctor, patient, appointment, no-show, queue, dashboard, and smoke-test flows.",
        "Expanded the current source beyond v0.3 with Staff invitation and access APIs, availability-aware scheduling, appointment rescheduling, activity history, arrival and outcome context, patient statistics, and Geoapify-backed location services.",
        "Kept deployment claims auditable by separating the production-verified v0.3 baseline from newer source capabilities that still require owner migration, environment, and live smoke verification.",
        "Kept no-show support evidence-based by exposing deterministic reasons and suggested actions rather than claiming trained AI or measured predictive accuracy.",
      ],
      currentProgress: [
        "Released baseline: v0.3.0 - Clinic Operations Release, production-verified by owner with a GO decision.",
        "Production frontend: https://pravaah.garvitsingh171.com.",
        "Current source: post-v0.3 development with Staff access, scheduling, lifecycle, activity, location, and routing capabilities implemented across API, database, tests, and UI.",
        "Verification boundary: newer post-release features are not described as production-deployed until their migrations, provider configuration, build/test gates, deployed SHA, and smoke checks are recorded.",
        "Release tracking: the tagged release remains v0.3.0 while newer mainline capabilities await a verified release record.",
      ],
      limitations: [
        "No patient login or doctor login is implemented.",
        "No patient portal, doctor portal, self-booking flow, billing, payments, prescriptions, inventory, full medical records, hospital ERP workflow, or native mobile app is implemented.",
        "The no-show feature is deterministic and uses limited available operational signals; it is not trained machine learning and has no committed accuracy, fairness, calibration, or real-world outcome metrics.",
        "The system does not automatically cancel appointments, contact patients, prioritize appointments by risk, or silently reorder queues.",
        "Post-release availability, rescheduling, Staff invitation, geocoding, and routing capabilities are implemented in source but do not yet have recorded production deployment verification.",
        "Scheduling has no date-specific doctor exceptions, holiday or leave calendar, and past-date booking remains a documented business-rule gap.",
        "Rescheduling preserves the existing no-show prediction instead of recalculating it for the new appointment time.",
        "The Staff invitation flow creates a copyable one-time link but does not send email because no mail provider is integrated.",
        "Travel metrics use free-flow routing context; the system stores no route geometry or live-traffic navigation data, and travel time does not affect booking or no-show scoring.",
        "The current authorization model uses one active `User.clinicId`, not full multi-clinic SaaS membership or clinic switching.",
        "No notification automation, audit log, browser E2E suite, CI/CD workflow, or production monitoring/observability stack is committed.",
        "No committed real Pravaah screenshots are available for the portfolio yet, so I kept the existing thumbnail assets rather than fabricating product screenshots.",
      ],
      futureImprovements: [
        "Verify and release the post-v0.3 Staff, scheduling, lifecycle, geocoding, and routing work with production migrations, environment checks, deployed SHAs, and focused smoke tests.",
        "Add reminder logs, confirmations, and SMS, email, or WhatsApp integrations; connect Staff invitations to a transactional email provider.",
        "Add date-specific doctor leave and holiday exceptions, reject past-date booking, and recalculate decision-support context after rescheduling where appropriate.",
        "Add broader audit coverage for Staff access, queue decisions, location retries, and risk review.",
        "Add richer operational analytics, dashboard drill-downs, pagination, sorting, and production observability.",
        "Evolve the single-clinic user link into a ClinicMember or UserClinic model for multi-clinic membership and clinic switching.",
        "Explore patient and doctor portals as future surfaces, clearly separate from the current v0.3.0 product.",
        "Improve no-show assistance with richer historical data and consider trained models only after appropriate data governance, evaluation, and explainability work exist.",
        "Capture reviewed production or demo screenshots with fictional data for future portfolio visuals.",
      ],
    },
    featured: true,
  },
  {
    title: "ClearTax",
    slug: "cleartax",
    summary:
      "A bulk GST invoice reconciliation workspace that compares Purchase Register CSV data with GSTR-2B references and persists matched, mismatched, and failed row outcomes.",
    description:
      "ClearTax is a two-person, in-progress invoice reconciliation product built through the Kalvium Simulated Work program. I own the backend and database work: authentication context, GSTIN-scoped authorization, GSTR-2B and Purchase Register upload contracts, inline row reconciliation, PostgreSQL persistence, cursor-paginated result APIs, structured errors, request IDs, and logging. Edha Singh owns the frontend. The current implementation is a working Next.js MVP; durable Cloud Tasks processing, Cloud Storage file persistence, CI/CD, and verified production deployment remain future work.",
    engineeringHighlight:
      "Built the business-scoped reconciliation backend, validated upload workflows, persisted row evidence, cursor pagination, structured errors, and request logging.",
    status: "in-progress",
    type: "full-stack",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "NextAuth.js",
      "Zod",
      "Pino",
      "Tailwind CSS",
      "bcrypt",
    ],
    image: {
      light: "/images/projects/cleartax/cleartax-thumbnail-light.png",
      dark: "/images/projects/cleartax/cleartax-thumbnail-dark.png",
      alt: "Invoice reconciliation dashboard concept showing matched, mismatched, unmatched, and error records",
    },
    githubUrl: "https://github.com/kalviumcommunity/SW2627-ClearTax",
    seo: {
      title: "ClearTax | GST Invoice Reconciliation Case Study",
      description:
        "ClearTax case study: a Next.js and PostgreSQL GST invoice reconciliation workflow with validated uploads, persisted row results, pagination, and structured APIs.",
      image: "/images/projects/cleartax/cleartax-thumbnail-light.png",
    },
    caseStudy: {
      category: "GST Invoice Reconciliation / FinTech Workflow",
      role: "Backend & database developer",
      team: "Garvit Singh — Backend · Edha Singh — Frontend",
      timeline: "In progress · Kalvium Simulated Work",
      problem: [
        "GST teams compare an internal Purchase Register with supplier-reported invoices in GSTR-2B. Manual comparison becomes slow and error-prone when invoice numbers, supplier GSTINs, dates, taxable values, tax components, or totals differ across thousands of rows.",
        "The engineering problem is larger than file upload. The application needs a trustworthy business ownership boundary, strict file and row validation, deterministic monetary comparisons, durable batch history, inspectable mismatch reasons, pagination, and failure isolation so one malformed invoice does not hide the rest of a batch.",
      ],
      productThesis: [
        "The product turns reconciliation into a reviewable workflow: establish a trusted GSTR-2B reference, upload a Purchase Register, classify every row, preserve the result, and let the user return to the batch after refresh.",
        "This is a ClearTax-inspired educational product, not a production tax-filing service. The current scope focuses on reconciliation evidence and backend workflow design rather than GST filing, compliance advice, or unsupported cloud-scale claims.",
      ],
      solution: [
        "The application uses Next.js 16 App Router for server-rendered pages, client-side upload interactions, and authenticated route handlers in one TypeScript codebase. NextAuth supplies JWT session context, while APIs and private pages resolve the current user and business before querying data.",
        "A GSTR-2B JSON import is validated, checked against the authenticated business GSTIN, normalized, and persisted as a ReferenceImport with ReferenceInvoice rows. A Purchase Register CSV is then validated and reconciled against that selected reference inside a database transaction.",
        "Each Purchase Register row becomes a persisted ReconciliationRow. Valid exact comparisons become MATCHED, valid rows with missing or differing reference data become MISMATCHED, and malformed rows become ERROR with a reusable error code and readable explanation. Results remain available through batch pages and a cursor-paginated API.",
      ],
      businessValue: [
        {
          title: "Reduce manual comparison",
          description:
            "The workflow normalizes and compares invoice identity and monetary fields so reviewers can focus on exceptions instead of checking every row by hand.",
        },
        {
          title: "Make exceptions inspectable",
          description:
            "Persisted mismatch codes, mismatch details, row errors, and linked reference invoices provide evidence for why a row did or did not reconcile.",
        },
        {
          title: "Preserve reconciliation history",
          description:
            "Reference imports, upload batches, counters, and row results survive refresh and can be revisited from protected dashboard and history pages.",
        },
      ],
      differentiators: [
        {
          title: "Row-level fault isolation",
          description:
            "File-contract failures reject the upload, while valid files can preserve malformed invoice rows as ERROR records so other rows still complete.",
        },
        {
          title: "Exact money storage",
          description:
            "PostgreSQL Decimal(18, 2) columns and normalized monetary strings avoid relying on binary floating-point comparisons for GST values.",
        },
        {
          title: "Business-scoped access",
          description:
            "Private pages and APIs filter imports, batches, and results through the business ID resolved from the authenticated session.",
        },
        {
          title: "Honest processing boundary",
          description:
            "The current request performs reconciliation inline. Queue workers, raw-file cloud storage, and GCP deployment are documented as planned rather than presented as implemented.",
        },
      ],
      targetUsers: [
        "Business owners, accountants, GST executives, and finance teams who need to compare Purchase Register data with GSTR-2B reference invoices.",
        "Evaluators and developers reviewing a realistic authentication, upload, reconciliation, and persistence workflow in a two-person product build.",
      ],
      useCases: [
        "Create an account with a business legal name and GSTIN, then sign in through credentials or a configured Google provider.",
        "Import a GSTR-2B-like JSON file whose GSTIN matches the authenticated business.",
        "Upload a Purchase Register CSV of up to 10,000 rows against an owned reference import.",
        "Review batch status, totals, matched rows, mismatches, and row-level errors after processing.",
        "Filter the result API by reconciliation outcome and continue through results using a batch-scoped cursor.",
        "Return to dashboard, reconciliation history, batch detail, reference-import history, and reference-import detail views after refresh.",
      ],
      features: [
        {
          title: "Credentials signup and sign-in",
          description:
            "Signup creates the User and first Business, hashes passwords with bcrypt, and handles unique email or GSTIN conflicts. NextAuth credentials sessions carry user, business, and OWNER context.",
        },
        {
          title: "Protected business workspace",
          description:
            "A route proxy protects workspace pages, while private pages and every business-data API independently enforce session and business context on the server.",
        },
        {
          title: "GSTR-2B JSON import",
          description:
            "Multipart validation checks extension, MIME type, 10 MB size, JSON structure, supplier GSTINs, invoice dates, totals, item values, duplicates, and ownership GSTIN before persistence.",
        },
        {
          title: "Purchase Register CSV upload",
          description:
            "CSV validation requires the expected header set, rejects duplicate headers, caps files at 10 MB and 10,000 invoice rows, and validates row shape and invoice fields.",
        },
        {
          title: "Deterministic reconciliation",
          description:
            "Rows are indexed against reference invoices by supplier GSTIN and normalized invoice number, then compared across date, taxable value, GST components, cess, and total value.",
        },
        {
          title: "Persisted batch and row results",
          description:
            "One UploadBatch stores aggregate counters while ReconciliationRow records preserve raw input, normalized fields, outcome, errors, mismatch evidence, and optional matched-reference linkage.",
        },
        {
          title: "Cursor-paginated results",
          description:
            "The batch results API validates that a cursor belongs to the requested batch, supports outcome filtering, fetches one extra record to determine hasMore, and returns a next cursor plus total count.",
        },
        {
          title: "Structured API failures",
          description:
            "Shared helpers return stable error codes, readable messages, validation details, safe generic internal errors, and consistent success envelopes.",
        },
        {
          title: "Request-aware logging",
          description:
            "Pino logs request context and upload lifecycle events, while completed API responses expose an x-request-id header for debugging and correlation.",
        },
        {
          title: "Idempotent demo data",
          description:
            "The Prisma seed creates a repeatable local business, active reference import, reference invoices, completed batch, and representative matched, mismatched, and error rows.",
        },
      ],
      apiHighlights: [
        {
          title: "Authentication API",
          description:
            "POST /api/auth/signup validates identity and business data, hashes the password, creates User and Business records, and returns conflict details without exposing the password hash.",
        },
        {
          title: "Reference import APIs",
          description:
            "GET/POST /api/reference-imports lists owned imports or accepts JSON metadata and multipart GSTR-2B uploads; GET /api/reference-imports/[referenceImportId] returns one owned import.",
        },
        {
          title: "Reconciliation batch APIs",
          description:
            "GET/POST /api/reconciliation-batches lists recent business batches or accepts metadata and multipart Purchase Register uploads that run the current inline reconciliation transaction.",
        },
        {
          title: "Batch detail and status APIs",
          description:
            "GET /api/reconciliation-batches/[batchId] returns one business-scoped batch, while /status exposes lifecycle state and aggregate counters.",
        },
        {
          title: "Paginated result API",
          description:
            "GET /api/reconciliation-batches/[batchId]/results supports validated limit, cursor, and result parameters and returns batch-scoped row details with pagination metadata.",
        },
      ],
      workflow: [
        "The user creates an account; the signup transaction creates their identity and GSTIN-scoped business workspace.",
        "NextAuth establishes a JWT session containing the user ID, first business ID, and current OWNER role.",
        "The user uploads GSTR-2B JSON; the API validates the file and business GSTIN, then transactionally activates the new reference import and stores normalized invoices.",
        "The user selects that reference and uploads a Purchase Register CSV; the API validates its file contract, headers, row count, and row data.",
        "The backend loads owned reference invoices, builds an in-memory lookup, classifies each row, and creates the batch plus row records in one Prisma transaction.",
        "The UI opens the batch detail with counters and initial results; API consumers can filter and paginate the complete persisted result set.",
        "Every private read remains constrained by the business context resolved from the authenticated session.",
      ],
      architecture: {
        overview: [
          "ClearTax uses one Next.js App Router application. Server components query PostgreSQL through Prisma for dashboard and detail pages; client components handle forms and uploads; route handlers own JSON and multipart API contracts.",
          "The core relational path is User to Business to ReferenceImport and ReferenceInvoice, plus Business and ReferenceImport to UploadBatch, then UploadBatch to ReconciliationRow. A row can optionally link to the reference invoice used for its comparison.",
          "The upload path separates whole-file validation from row-level reconciliation. Invalid file metadata, JSON structure, CSV headers, or excessive row counts reject the request. Once the file contract is valid, malformed invoice rows are persisted as isolated errors instead of aborting the remaining batch.",
          "Current reconciliation runs synchronously inside POST /api/reconciliation-batches. GCP environment placeholders and storage keys preserve a future direction, but there is no implemented Cloud Tasks dispatch, Cloud Storage upload, independent worker, or verified cloud deployment.",
        ],
        layers: [
          {
            id: "next-ui",
            title: "Next.js application UI",
            description:
              "Provides server-rendered dashboard and history pages plus focused client interactions for authentication, uploads, and reconciliation review.",
            technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
            kind: "client",
          },
          {
            id: "route-handlers",
            title: "App Router route handlers",
            description:
              "Own session checks, Zod validation, multipart parsing, response contracts, inline reconciliation orchestration, cache revalidation, and request completion logging.",
            technologies: ["Next.js Route Handlers", "Zod", "Pino"],
            kind: "api",
          },
          {
            id: "next-auth",
            title: "Authentication and business context",
            description:
              "Uses NextAuth JWT sessions, credentials with bcrypt, optional Google OAuth, and server-owned user, business, and role resolution.",
            technologies: ["NextAuth.js", "bcrypt"],
            kind: "service",
          },
          {
            id: "prisma",
            title: "Reconciliation and persistence layer",
            description:
              "Uses Prisma transactions, ownership-scoped queries, exact decimal fields, normalized lookup keys, constraints, indexes, migrations, and deterministic seed data.",
            technologies: ["Prisma", "@prisma/adapter-pg"],
            kind: "service",
          },
          {
            id: "postgresql",
            title: "PostgreSQL database",
            description:
              "Stores users, businesses, reference imports, reference invoices, upload batches, row results, mismatch evidence, errors, and lifecycle counters.",
            technologies: ["PostgreSQL"],
            kind: "database",
          },
        ],
        connections: [
          {
            from: "next-ui",
            to: "next-auth",
            label: "Sign-in and protected page session resolution.",
          },
          {
            from: "next-ui",
            to: "route-handlers",
            label: "Validated JSON and multipart requests for uploads and result review.",
          },
          {
            from: "route-handlers",
            to: "next-auth",
            label: "Server-side authentication and business ownership context.",
          },
          {
            from: "route-handlers",
            to: "prisma",
            label: "Transactions, scoped reads, batch writes, and paginated result queries.",
          },
          {
            from: "prisma",
            to: "postgresql",
            label: "Relational persistence, constraints, indexes, and exact decimal values.",
          },
        ],
      },
      technicalDecisions: [
        {
          title: "Next.js as one full-stack codebase",
          description:
            "App Router pages and route handlers share TypeScript, validation, authentication, and persistence utilities.",
          reason:
            "A compact codebase fits a two-person MVP and avoids operating separate frontend and backend services.",
          tradeOff:
            "Inline reconciliation competes with web request time and cannot scale independently until worker infrastructure exists.",
        },
        {
          title: "PostgreSQL with Prisma",
          description:
            "Relational models connect identity, business ownership, reference data, batches, results, and optional matched invoices.",
          reason:
            "The workflow benefits from foreign keys, exact decimal columns, compound uniqueness, indexes, migrations, and typed queries.",
          tradeOff:
            "Schema and migration changes require deliberate coordination and generated-client management.",
        },
        {
          title: "Persist every reconciliation row",
          description:
            "Batch counters summarize the run, while each parsed row keeps its outcome, errors, mismatch details, raw data, and matched-reference link.",
          reason:
            "Results must survive refresh and remain explainable during later review.",
          tradeOff:
            "Row persistence increases storage and makes chunking or background writes important for larger uploads.",
        },
        {
          title: "Decimal money values",
          description:
            "GST amounts use Decimal(18, 2) in PostgreSQL and normalized two-decimal strings during comparison.",
          reason:
            "Financial reconciliation should not depend on binary floating-point behavior.",
          tradeOff:
            "Values require explicit parsing, normalization, and serialization across files, Prisma, and JSON responses.",
        },
        {
          title: "Business ID as the authorization boundary",
          description:
            "The JWT session carries the current business ID and private queries combine resource identifiers with that business scope.",
          reason:
            "Authentication alone should not allow access to another business's imports, batches, or results.",
          tradeOff:
            "The current session selects the first business and does not implement business switching or fine-grained roles.",
        },
        {
          title: "Cursor pagination for row results",
          description:
            "The results endpoint orders by row ID, verifies cursor ownership, fetches limit plus one, and returns nextCursor and hasMore.",
          reason:
            "A batch can contain up to 10,000 rows and should not require one unbounded response.",
          tradeOff:
            "The current detail page still renders a limited first-page table and does not expose the full API pagination experience in the UI.",
        },
        {
          title: "Centralized responses and logging",
          description:
            "Shared helpers coordinate response envelopes, error codes, request IDs, log context, and safe unexpected-error handling.",
          reason:
            "Predictable contracts improve frontend integration and make failed requests traceable during demos and debugging.",
          tradeOff:
            "Every route must consistently complete requests through the shared helper path.",
        },
      ],
      tradeOffs: [
        {
          title: "Inline processing before background workers",
          reason:
            "It keeps the current MVP executable without unimplemented cloud dependencies.",
          tradeOff:
            "Large uploads can hold a request open, and queued or processing statuses do not yet represent durable asynchronous work.",
        },
        {
          title: "File validation before record creation",
          reason:
            "A structurally invalid file should not create ambiguous import or batch metadata.",
          tradeOff:
            "Whole-file contract failures reject the upload, while only valid-file row errors receive partial-failure persistence.",
        },
        {
          title: "One active business context",
          reason:
            "The first-business session model keeps authorization understandable for the current scope.",
          tradeOff:
            "Multi-business switching and actual OWNER, ADMIN, and ACCOUNTANT permission behavior remain unimplemented.",
        },
        {
          title: "No invented deployment claim",
          reason:
            "The repository contains planned GCP variables but no verified infrastructure or public production URL.",
          tradeOff:
            "The portfolio exposes source and case-study evidence without a live-product button.",
        },
      ],
      challenges: [
        {
          challenge:
            "The same invoice number can be formatted differently across datasets.",
          resolution:
            "The import and upload paths normalize invoice numbers and index reference data with supplier GSTIN before comparison.",
          learning:
            "Reconciliation depends on explicit normalization rules, not raw string equality alone.",
        },
        {
          challenge:
            "Financial fields needed deterministic comparisons across CSV text, JSON values, Prisma Decimal objects, and PostgreSQL.",
          resolution:
            "The backend rejects invalid or negative values, normalizes money to two decimals, and persists exact Decimal(18, 2) values.",
          learning:
            "Money needs an intentional representation at every boundary.",
        },
        {
          challenge:
            "A malformed invoice row should not make every valid row disappear.",
          resolution:
            "After file-level validation succeeds, each row is independently classified and invalid rows receive an error code, message, raw payload, and completed processing state.",
          learning:
            "Batch systems need a clear distinction between fatal file errors and recoverable row errors.",
        },
        {
          challenge:
            "Result cursors could otherwise be reused across another batch.",
          resolution:
            "The paginated endpoint verifies that the cursor row exists inside the authenticated business's requested batch before using it.",
          learning:
            "Pagination identifiers are also authorization inputs and need scope validation.",
        },
        {
          challenge:
            "Frontend failures needed useful messages without leaking database or server internals.",
          resolution:
            "Centralized error helpers map known validation, auth, conflict, and not-found cases while logging unexpected errors under a request ID and returning a generic public message.",
          learning:
            "Error contracts are part of both security and product usability.",
        },
      ],
      learnings: [
        {
          category: "architecture",
          title: "Batch workflows need durable domain records",
          description:
            "Upload metadata alone is not enough. Reference imports, batches, counters, row outcomes, mismatch evidence, and lifecycle timestamps create the reviewable product workflow.",
          application:
            "I model batch state and row evidence before optimizing the worker that produces them.",
        },
        {
          category: "technical",
          title: "Validation belongs at multiple boundaries",
          description:
            "ClearTax validates auth forms, API JSON, multipart metadata, MIME and extensions, file size, JSON structure, CSV headers, row counts, GSTINs, dates, money, duplicates, and pagination input.",
          application:
            "I separate transport, file-contract, domain, and row-level validation so failures remain specific and actionable.",
        },
        {
          category: "architecture",
          title: "Tenant context must reach every query",
          description:
            "A valid session identifies the user, but business-scoped data still needs businessId filters and owned-reference checks on reads and writes.",
          application:
            "I treat tenant scope as part of repository criteria rather than relying only on page guards.",
        },
        {
          category: "technical",
          title: "Pagination is an API contract",
          description:
            "Limit bounds, stable ordering, cursor scope, hasMore, nextCursor, result filtering, and total counts all affect how clients safely traverse a batch.",
          application:
            "I design pagination metadata and invalid-cursor behavior alongside the database query.",
        },
        {
          category: "collaboration",
          title: "Shared response contracts support team development",
          description:
            "In a two-person project, centralized success and error envelopes reduce frontend/backend drift and make integration failures easier to diagnose.",
          application:
            "I document route behavior and keep response helpers reusable when another developer consumes the API.",
        },
        {
          category: "product",
          title: "Planned infrastructure is not implementation evidence",
          description:
            "Environment placeholders and PRD architecture describe direction, but the current code still performs reconciliation inline and does not upload files to Cloud Storage.",
          application:
            "I separate current capabilities from future architecture in documentation, demos, and portfolio claims.",
        },
      ],
      results: [
        "Implemented credentials authentication, account and business creation, password hashing, JWT business context, and protected private routes.",
        "Implemented validated GSTR-2B JSON imports and Purchase Register CSV uploads with a 10 MB file limit and a 10,000-row batch limit.",
        "Persisted reference invoices, reconciliation batches, exact aggregate counters, and explainable row-level outcomes through PostgreSQL and Prisma.",
        "Added business-scoped batch, status, import, and cursor-paginated result APIs with centralized errors, request IDs, and Pino logging.",
        "Worked in a two-person backend/frontend split with shared API contracts, migrations, documentation, and seeded demo data.",
      ],
      currentProgress: [
        "Status: in active development as a Kalvium Simulated Work team project.",
        "Implemented workflow: authentication to GSTR-2B import to Purchase Register upload to inline reconciliation to persisted review.",
        "Current result classifications: MATCHED, MISMATCHED, and ERROR in the implemented upload path; UNMATCHED exists in the schema but missing references are currently represented as MISMATCHED with REFERENCE_NOT_FOUND.",
        "Repository evidence includes committed Prisma migrations, idempotent seed data, API and architecture documentation, and the current UI workflow.",
        "No verified public production URL is exposed in the repository, so the portfolio intentionally provides no live-product link.",
      ],
      limitations: [
        "Reconciliation runs synchronously inside the upload request; durable background jobs and independent worker scaling are not implemented.",
        "Cloud Tasks, Cloud Storage persistence, deployed GCP infrastructure, and GitHub Actions CI/CD remain planned.",
        "Uploaded raw files are validated in memory and not written to durable object storage.",
        "The implemented upload path uses MATCHED, MISMATCHED, and ERROR; the UNMATCHED enum value is not currently emitted for missing references.",
        "The role type lists OWNER, ADMIN, and ACCOUNTANT, but current authentication assigns OWNER only and does not provide role administration.",
        "The session selects the first business; business switching and richer multi-business membership are not implemented.",
        "The batch detail UI shows a limited first result page even though the API supports cursor pagination and result filtering.",
        "No automated test script or committed test suite is present in package.json; current quality gates are lint, build, migrations, seed data, and manual workflow verification.",
      ],
      futureImprovements: [
        "Move reconciliation into idempotent Cloud Tasks workers with chunked processing, retries, progress counters, and safe replay behavior.",
        "Persist raw GSTR-2B and Purchase Register files in private Cloud Storage with retention and access controls.",
        "Add automated unit, integration, route-handler, reconciliation, authorization, and upload-contract tests.",
        "Connect UI pagination, outcome filtering, search, export, and virtualized result review to the existing result API.",
        "Implement explicit UNMATCHED semantics or simplify the enum and product language to match the chosen classification model.",
        "Add multi-business membership, business switching, and enforced OWNER, ADMIN, and ACCOUNTANT permissions.",
        "Establish verified deployment, CI/CD, monitoring, and production-safe secret and migration workflows before presenting the product as production deployed.",
      ],
    },
    featured: false,
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
