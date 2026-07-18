import type {
  WritingArticle,
  WritingCategory,
  WritingCategoryId,
} from "../types/writing.js";

export const writingCategories: WritingCategory[] = [
  {
    id: "project-learnings",
    label: "Project Learnings",
    description:
      "Reflective articles about building projects, making architecture decisions, debugging features, deployment setup, and understanding product trade-offs through implementation.",
  },
  {
    id: "backend-engineering",
    label: "Backend Engineering",
    description:
      "Technical notes about APIs, authentication, authorization, validation, databases, service layers, error handling, pagination, and backend design decisions.",
  },
  {
    id: "open-source",
    label: "Open Source",
    description:
      "Articles about contributing to shared repositories through issues, pull requests, code review, documentation, testing expectations, and asynchronous collaboration.",
  },
  {
    id: "dsa-problem-solving",
    label: "DSA and Problem Solving",
    description:
      "Learning notes about problem-solving patterns, dry runs, revision systems, interview explanations, and structured DSA practice.",
  },
  {
    id: "engineering-growth",
    label: "Engineering Growth",
    description:
      "Broader reflections on learning through implementation, balancing projects and DSA, organising work with issues, communicating clearly, and building stronger engineering habits.",
  },
];

export const writingArticles: WritingArticle[] = [
  {
    title: "What I Learned Building BeatHub API",
    slug: "beathub-api-learnings",
    summary:
      "A reflection on how building a backend-only music catalogue API taught me to separate authentication from authorization, validate requests at the API boundary, design pagination as part of the response contract, document endpoints, and describe project limitations honestly.",
    category: "project-learnings",
    tags: [
      "Node.js",
      "Express",
      "MongoDB",
      "REST APIs",
      "Authentication",
      "Backend Architecture",
      "Docker",
    ],
    status: "draft",
    relatedProjectSlug: "beathub-api",
    relatedLinks: [
      {
        label: "BeatHub API project",
        href: "/projects/beathub-api",
      },
      {
        label: "BeatHub API repository",
        href: "https://github.com/garvitsingh171/beathub-api",
        external: true,
      },
    ],
    body: {
      introduction: [
        "BeatHub API started as a way for me to move beyond small Express demos. I wanted a backend project where the main work was not hidden behind a frontend screen: routes, request bodies, status codes, validation, authentication, permissions, data models, documentation, tests, seed data, and runtime setup all had to be visible.",
        "The project is a backend-focused music catalogue API, not a commercial music platform. It does not stream audio, store media files, recommend songs, or ship with a complete frontend. That boundary matters: BeatHub was not a finished product story, but a practice space for understanding how backend pieces fit together.",
      ],
      sections: [
        {
          id: "why-backend-only",
          heading: "Why I Built a Backend-Only Project",
          paragraphs: [
            "Working without a frontend forced me to pay attention to the API itself. In many early projects, it is easy to judge progress by what appears on screen. With BeatHub, the visible surface was an HTTP contract: routes, methods, required fields, failure cases, and response shapes.",
            "That made the backend feel less like a place to store data and more like the product boundary. User registration, login, songs, artists, albums, playlists, and analytics each needed their own route files, controllers, validators, and models. I still value frontend work, but this project helped me isolate backend concerns long enough to understand them more clearly.",
          ],
        },
        {
          id: "beyond-crud",
          heading: "Moving Beyond Basic CRUD",
          paragraphs: [
            "CRUD endpoints were only the starting point. It is one thing to create a song or list albums. It is another thing to decide which operations are public, which operations require an authenticated user, which operations should be admin-only, and how errors should look when something fails.",
            "A usable API also needs repeated decisions to be consistent. BeatHub made me think about response shapes, validation failures, missing resources, duplicate keys, invalid MongoDB ids, and pagination metadata. Those details are easy to skip in a feature list, but they are exactly what a future client would notice first.",
          ],
        },
        {
          id: "application-structure",
          heading: "How I Structured the Application",
          paragraphs: [
            "The actual request path is straightforward: Express registers route modules in `src/app.js`, routes attach validation and auth middleware, controllers shape the HTTP response, services call Mongoose operations, models define MongoDB documents, and `src/server.js` connects to MongoDB before listening on the configured port.",
            "That separation made it easier to add multiple resources without putting everything in one server file. Auth, users, songs, artists, albums, playlists, analytics, validation, rate limiting, errors, Swagger configuration, and cursor helpers each had a place. The structure is still not a perfect enterprise system. Some service methods are thin wrappers around Mongoose, and song cursor pagination lives in the controller. Even that taught me how architecture evolves from real pressure instead of from a diagram alone.",
          ],
        },
        {
          id: "auth-authorization",
          heading: "Authentication and Authorization Are Different",
          paragraphs: [
            "BeatHub helped me separate two ideas that are easy to mix up. Authentication answers whether the requester has a valid identity. Authorization answers whether that authenticated identity is allowed to perform the action.",
            "The API uses JWT login for authentication. The login controller finds a user by email, includes the password field for comparison, checks the candidate password, and signs a token with the user id, email, and role. Protected routes use Bearer token middleware to verify the token and attach `req.user`.",
            "Admin-only operations use a separate role check with `requireRole(\"admin\")`. Missing or invalid authentication returns 401, while a signed-in user without the admin role receives 403. Even though HTTP names the 401 status `Unauthorized`, in this project I treated it as the authentication failure path and 403 as the permission failure path. That distinction made protected API behaviour much clearer.",
          ],
        },
        {
          id: "password-security",
          heading: "Password Handling Needs More Than a Controller",
          paragraphs: [
            "The User model hashes passwords with bcryptjs before saving, excludes the password field by default with `select: false`, compares passwords through a model method, and removes password hashes from JSON output. Placing those rules close to the model reduces the chance that every controller has to remember the same security cleanup.",
            "At the same time, the authentication design is intentionally limited. It does not include refresh-token rotation, token revocation, a complete session management strategy, or fine-grained ownership permissions. BeatHub gave me practice with core JWT and password-hashing ideas, but it also showed me where a learning implementation ends.",
          ],
        },
        {
          id: "validation-errors",
          heading: "Validation and Predictable Errors",
          paragraphs: [
            "BeatHub uses express-validator at the route boundary. That means malformed input can be rejected before controllers and database operations try to use it. The validators cover required fields, email format, minimum password length, MongoDB ObjectId parameters, optional update fields, numeric values, ISO date input, playlist song arrays, and nested song ids.",
            "The validation middleware returns a predictable 400 response with field-level messages. A centralized error handler also handles Mongoose validation errors, cast errors, duplicate keys, not-found routes, authentication failures, permission failures, and application errors. I would not describe every endpoint as perfectly uniform, but the shared path made the API easier to reason about.",
          ],
        },
        {
          id: "pagination-contract",
          heading: "Pagination Is Part of the API Contract",
          paragraphs: [
            "The most specific list behaviour in BeatHub is cursor pagination for songs. `GET /api/songs` accepts a `limit` query parameter and an optional base64-encoded cursor. The controller decodes the cursor, validates it as a MongoDB ObjectId, queries songs with ids lower than the cursor, requests one extra record, and returns `nextCursor`, `hasMore`, `limit`, and `count` metadata.",
            "Implementing this made pagination feel like more than query logic. It changed what the response promised to clients. A future frontend would need to store the cursor, check `hasMore`, and handle invalid cursor errors. The same pattern is not shared across every resource yet, so I should describe it as song-focused cursor pagination rather than a universal API feature.",
          ],
        },
        {
          id: "documentation-collaboration",
          heading: "Documentation Is Part of Collaboration",
          paragraphs: [
            "Swagger UI is served at `/api-docs`, and the Swagger setup defines OpenAPI metadata, bearer auth, user schemas, login request and response schemas, and error response shapes. Inline Swagger comments currently document the user routes; other route groups can still be expanded.",
            "The repository also includes a Postman collection focused on user requests. These assets are not a replacement for complete documentation, but they are useful collaboration tools. A reviewer can discover the API shape without starting from controller source code.",
          ],
        },
        {
          id: "testing-seed-data",
          heading: "Testing and Seed Data",
          paragraphs: [
            "The automated Jest and Supertest coverage is limited. The current tests check the root health payload and successful user registration against a test Mongo connection that is cleaned after each test. That is useful, but it does not cover protected routes, validation failures, CRUD paths, pagination, or analytics.",
            "The seed script was still valuable for development. `scripts/seed500.js` clears old data, creates 500 artists, 500 albums, 500 songs, 500 generated regular users, demo admin and user accounts, and 500 playlists with random song selections. This is synthetic data, not production data. It helped list endpoints and analytics feel less empty during local testing.",
          ],
        },
        {
          id: "analytics-aggregation",
          heading: "Using Aggregation for a Small Analytics Feature",
          paragraphs: [
            "The analytics route is admin-protected and exposes a top-users endpoint. The service uses MongoDB aggregation on playlists: it matches playlists with a user, groups by user id, counts playlists, sorts by playlist count, limits the result to five, and projects a string `userId` with the count.",
            "That feature is small, but it showed a different database operation than simple create, find, update, and delete. Aggregation made me think in terms of grouping, counting, sorting, and returning summarised results. It is not a recommendation engine or a full analytics platform, and it should not be described that way.",
          ],
        },
        {
          id: "rate-limiting-docker",
          heading: "Rate Limiting and Docker Expose Runtime Assumptions",
          paragraphs: [
            "BeatHub applies a lightweight in-memory rate limiter to `/api` routes. It tracks requests by IP and returns 429 after repeated bursts. That is useful for learning and basic local protection, but a multi-instance deployment would need a shared store or a more complete production strategy.",
            "Docker and Docker Compose made the runtime more explicit. The Dockerfile builds a Node 18 Alpine image, runs as a non-root user, exposes port 3000, and starts `src/server.js`. Docker Compose runs the API beside MongoDB with local environment variables, a volume, ports, and a bridge network. This improves repeatability, but containerisation by itself does not prove production readiness.",
          ],
        },
        {
          id: "difficult-parts",
          heading: "What Was Difficult",
          paragraphs: [
            "The difficult parts were not dramatic. They were the ordinary details that decide whether a backend is comfortable to use. I had to keep authentication and authorization separate, make validators line up with schemas, avoid leaking password hashes, choose consistent error messages, and keep modules scoped as resources grew.",
            "Cursor pagination also made me slow down. It was not enough to return a shorter list of songs. I had to think about cursor encoding, invalid cursor behaviour, whether another page exists, and how the client would know what to request next. Docker had a similar effect because it forced me to name the MongoDB dependency, port, and environment variables.",
          ],
        },
        {
          id: "mistakes-limitations",
          heading: "Mistakes and Current Limitations",
          paragraphs: [
            "One mistake would be to describe BeatHub as more complete than it is. The README has production-oriented language, but the repository does not provide a verified active deployment URL. The project is backend-only, has no complete frontend, and does not implement audio storage, streaming, recommendations, licensing workflows, or a complete refresh-token strategy.",
            "Other limitations are more technical. The role model is only user and admin. Pagination is focused on songs instead of every resource. Swagger coverage can expand beyond the currently documented routes and schemas. The tests cover only a small set of paths. The rate limiter stores state in memory. Some service methods remain close to direct Mongoose wrappers. These points make the learning story more honest and easier to discuss.",
          ],
        },
        {
          id: "carry-forward",
          heading: "The Lessons I Will Carry Forward",
          paragraphs: [
            "BeatHub changed how I think about backend work. Structure matters before the number of resources grows. Security should not depend only on controllers. Validation belongs at the API boundary. Errors are part of the API design. Pagination changes the response contract. Documentation helps collaboration. Docker exposes runtime assumptions. Limitations are better stated clearly than hidden behind confident wording.",
            "I do not see BeatHub as proof that I have finished learning backend engineering. I see it as a project that gave me concrete hooks for future work. The next backend project can go deeper on testing, ownership-based authorization, refresh-token strategy, shared infrastructure, richer documentation, and deployment verification because BeatHub showed me where those questions appear in real code.",
          ],
        },
      ],
      conclusion: [
        "Building BeatHub API helped me move from writing isolated Express routes to thinking about an API as a contract. It gave me a place to practise backend fundamentals without pretending the result was a complete music platform.",
        "The most useful outcome is that I can now explain both what the backend supports and what it does not. That honesty makes the project stronger, and it gives me a clearer direction for the next backend system I build.",
      ],
    },
  },
  {
    title: "What Open Source Taught Me About Collaborative Development",
    slug: "open-source-collaboration-learnings",
    summary:
      "Lessons from five merged pull requests across Mathesar and tldr-pages, including how I approached unfamiliar codebases, narrowed issue scope, responded to review feedback, verified changes, and communicated through asynchronous GitHub workflows.",
    category: "open-source",
    tags: [
      "Open Source",
      "Git",
      "GitHub",
      "Pull Requests",
      "Code Review",
      "Collaboration",
    ],
    status: "draft",
    relatedLinks: [
      {
        label: "Open-source portfolio page",
        href: "/open-source",
      },
      {
        label: "Mathesar repository",
        href: "https://github.com/mathesar-foundation/mathesar",
        external: true,
      },
      {
        label: "tldr-pages repository",
        href: "https://github.com/tldr-pages/tldr",
        external: true,
      },
    ],
    body: {
      introduction: [
        "Before contributing to open source, most of my development experience came from projects where I controlled the codebase. I could decide the folder structure, naming style, level of testing, and when a change was finished. Open source changed that rhythm because the work had to fit into a repository that already had users, maintainers, conventions, review expectations, and history.",
        "Through the nine-week Kalvium x Mathesar Open Source Program, I attended 23 out of 23 sessions and had five pull requests merged upstream: four in Mathesar and one in tldr-pages. The numbers are useful context, but they are not the main point. The stronger lesson was learning how to enter someone else's codebase carefully and make a change that reviewers could understand, trust, and merge.",
      ],
      sections: [
        {
          id: "expectations-before-contributing",
          heading: "What I Expected Before Contributing",
          paragraphs: [
            "At first, I thought contributing might mostly mean finding a small issue and writing a small patch. That was not completely wrong, but it missed a lot of the actual work. A patch is only one part of the contribution. Before that comes reading the issue, setting up the project, searching for related code, understanding current behaviour, and deciding what should stay out of scope.",
            "After the code change comes another set of responsibilities: writing the pull request, linking the issue, explaining the solution, listing verification, adding screenshots when the change is visual, responding to comments, updating the branch, and waiting asynchronously. None of this made the work less technical. It made me see communication as part of engineering.",
          ],
        },
        {
          id: "unfamiliar-repositories",
          heading: "Entering an Unfamiliar Repository",
          paragraphs: [
            "Mathesar was not a small practice app. It is an open-source web application around PostgreSQL data, with frontend, backend, API, state, design, and internationalization patterns already in place. tldr-pages was different again: a documentation repository with strict Markdown, placeholder, metadata, link, translation, and lint conventions.",
            "My practical approach was to slow down before editing. I inspected folder structures, searched for component names and related implementations, traced calls, looked at nearby patterns, read contribution instructions, and checked how similar states were already represented. In personal projects, I can sometimes move by memory. In a shared repository, I had to earn enough context to make a small change safely.",
          ],
        },
        {
          id: "understand-the-issue",
          heading: "Understanding the Issue Before Editing Code",
          paragraphs: [
            "Mathesar PR #5007 taught this lesson clearly. The issue was about a record selector opening when Shift+clicking the chevron in a foreign-key cell during range selection. The affected path was the linked-record cell inside the sheet interaction. My initial version also changed a related linked-record input component because it looked similar.",
            "Maintainer feedback clarified that the input component was used in other places such as forms and filters, while the bug was specific to sheet range selection. The unnecessary change was removed before merge. That review helped me understand that similar components can have different responsibilities. The safer contribution was the narrower one.",
          ],
        },
        {
          id: "scope-control",
          heading: "Why Scope Control Matters",
          paragraphs: [
            "Scope control became one of the central lessons of the program. A pull request is easier to review when it solves the stated problem and leaves unrelated code untouched. Expanding the diff can feel productive, but it can also make reviewers spend time checking behaviour that the issue never required.",
            "The tldr-pages PR #19315 reinforced the same idea from a documentation side. I added a Hindi translation for the DOS `cd` command. Automated bot output also mentioned several outdated Hindi pages elsewhere in the repository. Review feedback made it clear that those broader updates could be handled separately. Keeping the PR focused on the new DOS `cd` page allowed the contribution to move forward without dragging unrelated translation maintenance into it.",
          ],
        },
        {
          id: "pull-request-work",
          heading: "The Pull Request Is Part of the Work",
          paragraphs: [
            "Mathesar PR #5044 was a UI-facing fix for invalid record URLs. The problem was that a non-existent record could show a misleading blank form with an unsaved-changes state. The merged change displayed a record-not-found error state instead, using existing error-page structure, theme-aware design variables, and text through the internationalization system.",
            "The code mattered, but the pull request description mattered too. Reviewers asked for screenshots and for the PR to follow Mathesar's template. Later, the Developer Certificate of Origin section also had to be added. That experience made reviewability concrete. A maintainer should not have to reconstruct the change from scattered comments when the PR description can explain the problem, solution, screenshots, testing, and required declarations in one place.",
          ],
        },
        {
          id: "review-feedback",
          heading: "Receiving Review Feedback",
          paragraphs: [
            "Review comments improved the contributions instead of simply judging them. In #5007, review narrowed the component scope. In #5044, review improved the description, screenshots, template compliance, DCO, and final code cleanup. In #19315, review covered the More information link, translated placeholder conventions, title correction, and what should stay out of the current PR.",
            "I had to stop treating requested changes as a personal failure. In a shared codebase, maintainers carry context that a new contributor does not have yet. Their feedback can reveal hidden coupling, design expectations, repository process, or project-specific language rules. The better response is to understand the reason, update the work, and keep the conversation clear.",
          ],
        },
        {
          id: "contribution-variety",
          heading: "What Each Type of Contribution Taught Me",
          paragraphs: [
            "The five merged pull requests were small in different ways. #5007 was a frontend interaction fix. #5044 was a user-facing error state. #5148 was a backend serialization fix. #5179 removed an unused TypeScript import. #19315 added localized command-line documentation.",
            "That variety changed my idea of open-source value. A useful contribution does not have to be a large feature. It can be making an interaction behave correctly, replacing a confusing blank state with a clear error, converting Python temporal values before a JSON response, removing unused code carefully, or making documentation more accessible in another language. The common thread is responsible integration into an existing repository.",
          ],
        },
        {
          id: "correct-layer",
          heading: "Fixing the Correct Layer",
          paragraphs: [
            "Mathesar PR #5148 was especially useful for backend reasoning. The bug appeared when Distinct List was applied to Time with Timezone values. The data could exist as valid Python `date`, `datetime`, or `time` objects, including nested values, but the response failed because those values were not safe for JSON rendering.",
            "The fix serialized exploration results into JSON-friendly values before returning them, while leaving the SQL and transformation layer unchanged. That taught me to debug across boundaries: database values, Python objects, service output, and response rendering. The right fix was not always where the visible error first appeared.",
          ],
        },
        {
          id: "verification-varies",
          heading: "Testing and Verification Depend on the Change",
          paragraphs: [
            "Verification looked different for each contribution. A frontend interaction fix needed manual behaviour checks for Shift+click and normal click behaviour. The invalid-record UI needed screenshots, valid and invalid URL checks, and light and dark theme awareness. The TypeScript cleanup needed confidence that the import was truly unused and that the relevant lint warning was gone.",
            "For the backend serialization fix, the important verification was that timezone-aware temporal values could be returned as JSON-friendly response data. For tldr-pages, formatting, lint expectations, and repository translation conventions mattered more than running an application locally. This made me less likely to say only `tested locally` and more likely to describe what kind of test actually matched the change.",
          ],
        },
        {
          id: "documentation-localization",
          heading: "Documentation and Localization Are Engineering Work",
          paragraphs: [
            "The tldr-pages contribution looked simple from the outside: add a Hindi translation for the DOS `cd` command. In practice, localization was not just literal word replacement. The page had to follow tldr's structure, title style, placeholder conventions, command examples, More information link expectations, and Markdown formatting.",
            "The automated and human review also taught me how to separate relevant feedback from repository-wide context. Outdated Hindi pages in other directories were real maintenance concerns, but they were not part of this PR. That distinction made the contribution easier to merge and gave me a better respect for documentation repositories as carefully maintained engineering systems.",
          ],
        },
        {
          id: "mistakes-made",
          heading: "Mistakes I Made",
          paragraphs: [
            "My mistakes were mostly about scope and communication. I initially treated a related component as automatically in scope in #5007. In #5044, I underestimated how important the PR template, screenshots, and DCO were for review. In documentation work, I needed time to interpret bot output and understand which warnings were relevant to my changed file.",
            "These were useful mistakes because they were fixable and specific. They did not require a dramatic story. They showed me that contributing well means reading before editing, proving the change clearly, and respecting the repository's process as much as its code.",
          ],
        },
        {
          id: "changed-process",
          heading: "How Open Source Changed My Development Process",
          paragraphs: [
            "Open source changed how I work on my own projects too. I now try to make issues more specific, keep branches focused, write clearer commits, document verification, and think about the person who will read the change later. Even when I am the only maintainer of a personal project, future me becomes the reviewer.",
            "It also changed how I measure progress. A large diff is not automatically better than a small one. A one-line cleanup like #5179 can still be worthwhile if it is correct, scoped, and verified. Code quantity matters less than whether the change solves the actual problem and fits the surrounding system.",
          ],
        },
        {
          id: "first-time-advice",
          heading: "Advice I Would Give a First-Time Contributor",
          paragraphs: [
            "I would tell a first-time contributor to start with a scoped issue, read the contribution instructions, reproduce or understand the problem first, and search for existing patterns before writing code. If something is unclear, ask a precise question instead of guessing broadly.",
            "I would also tell them to keep the pull request focused, explain testing honestly, include screenshots for UI work, and avoid chasing contribution counts. Small contributions are valid. Review feedback is part of the process. The goal is not to look impressive in one PR; it is to make a change that belongs in the project.",
          ],
        },
      ],
      conclusion: [
        "The most important outcome of the program was not only five merged pull requests. It was learning how to enter a shared codebase respectfully, understand the real issue, communicate through GitHub, and improve work through review.",
        "I describe the role accurately as open-source contributor. That is already meaningful because it represents real work through issues, pull requests, review feedback, and upstream merges. I want to continue contributing with that same focus: smaller, clearer changes that fit the repository and help the people maintaining it.",
      ],
    },
  },
  {
    title: "Building a DSA Learning System That I Can Actually Maintain",
    slug: "my-dsa-learning-system",
    summary:
      "A practical breakdown of how I practise DSA, identify common problem-solving patterns, create long-term revision notes, and balance understanding with consistent problem-solving.",
    category: "dsa-problem-solving",
    tags: ["DSA", "Problem Solving", "Revision", "LeetCode", "Codeforces"],
    status: "coming-soon",
    plannedSections: [
      {
        heading: "Building a repeatable practice process",
        topics: [
          "Selecting problems by topic",
          "Limiting the number of new patterns at one time",
          "Balancing guided practice with independent attempts",
        ],
      },
      {
        heading: "Learning intuition before code",
        topics: [
          "Understanding what the problem asks",
          "Identifying brute force",
          "Recognizing repeated work",
          "Connecting the problem to a known pattern",
          "Performing a dry run",
        ],
      },
      {
        heading: "Pattern recognition",
        topics: [
          "Two pointers",
          "Sliding window",
          "Binary search",
          "Hash maps",
          "Prefix sum",
          "Recursion",
          "Backtracking",
          "Monotonic stack",
          "Queue",
          "Singly linked list",
          "Doubly linked list",
          "Merge sort",
          "Quick sort",
        ],
      },
      {
        heading: "Long-term notes",
        topics: [
          "Writing detailed explanations",
          "Recording intuition",
          "Explaining the algorithm",
          "Adding dry runs",
          "Recording time and space complexity",
          "Documenting common mistakes",
        ],
      },
      {
        heading: "Revision notes",
        topics: [
          "Short pattern reminders",
          "Key conditions",
          "Important edge cases",
          "Recognizing when the pattern applies",
        ],
      },
      {
        heading: "Tracking mistakes",
        topics: [
          "Logic mistakes",
          "Syntax mistakes",
          "Boundary mistakes",
          "Class-based implementation confusion",
          "Returning the wrong value",
          "Incorrect stack conditions",
        ],
      },
      {
        heading: "LeetCode and Codeforces",
        topics: [
          "Structured topic practice on LeetCode",
          "Broader problem-solving exposure on Codeforces",
          "Avoiding random problem selection without review",
        ],
      },
      {
        heading: "Interview explanations",
        topics: [
          "Explaining the brute-force approach",
          "Explaining the optimized approach",
          "Naming the pattern",
          "Justifying complexity",
          "Discussing trade-offs",
        ],
      },
      {
        heading: "Balancing DSA and projects",
        topics: [
          "Avoiding an all-or-nothing schedule",
          "Maintaining regular practice",
          "Keeping project implementation as the main engineering evidence",
          "Using DSA to improve reasoning rather than replace project work",
        ],
      },
    ],
  },
];

export const getWritingArticleBySlug = (slug: string) =>
  writingArticles.find((article) => article.slug === slug);

export const getWritingCategoryById = (id: WritingCategoryId) =>
  writingCategories.find((category) => category.id === id);
