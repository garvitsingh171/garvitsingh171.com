import type { OpenSourceContent } from "../types/openSource.js";

export const openSourceContent: OpenSourceContent = {
  introduction: {
    eyebrow: "Open Source",
    heading: "Learning from real repositories, reviews, and maintainers.",
    paragraphs: [
      "I started contributing to open source because I wanted experience beyond projects where I controlled every decision. Established repositories made me slow down, understand existing behaviour, follow project conventions, and make changes that were small enough for maintainers to review with confidence.",
      "The experience helped me see the difference between building alone and collaborating in a shared codebase. I had to read unfamiliar files, connect an issue to the actual affected path, explain the change through a pull request, and improve the solution after feedback.",
      "As a B.Tech Computer Science and Engineering student specializing in Software Product Engineering at JECRC University with Kalvium, these contributions became an important learning milestone. They made larger codebases feel more approachable and gave me a clearer sense of how code quality, communication, and review discipline fit together.",
    ],
  },
  links: [
    {
      label: "Garvit Singh on GitHub",
      url: "https://github.com/garvitsingh171",
      type: "profile",
    },
  ],
  program: {
    name: "Kalvium × Mathesar Open Source Program",
    duration: "9 weeks",
    attendance: "23/23 sessions",
    summary:
      "I participated in the nine-week Kalvium × Mathesar Open Source Program, attended all 23 sessions, and completed five merged pull requests across Mathesar and tldr-pages. The program introduced a practical contribution workflow: understand the repository, choose scoped issues, set up the project locally, make focused changes, open pull requests, respond to review, and keep refining until the work was ready to merge upstream.",
    mentors: ["Anish Umale"],
    reviewers: [
      "Pavish",
      "Anish Umale",
      "Sean Colsen",
      "tldr-pages maintainers and reviewers",
    ],
    activities: [
      "Read contribution guidelines and repository-specific documentation before changing code.",
      "Selected issues that were small enough to understand and complete responsibly.",
      "Set up unfamiliar projects locally and traced the affected frontend, backend, or documentation paths.",
      "Created focused branches, commits, and pull requests linked to the relevant issue.",
      "Tested changes through the verification style expected by each repository.",
      "Responded to maintainer and reviewer comments with updates to code, documentation, or pull-request descriptions.",
    ],
    outcomes: [
      "Five pull requests were reviewed and merged upstream.",
      "Four merged contributions landed in Mathesar.",
      "One merged contribution landed in tldr-pages.",
      "The work covered frontend interaction behaviour, user-facing error states, backend JSON serialization, TypeScript lint cleanup, and Hindi command-line documentation localization.",
    ],
  },
  stats: [
    {
      label: "Merged pull requests",
      value: "5",
      description: "Reviewed and merged across Mathesar and tldr-pages.",
    },
    {
      label: "Mathesar contributions",
      value: "4",
      description:
        "Frontend, backend, and maintenance pull requests in a PostgreSQL-oriented web application.",
    },
    {
      label: "tldr-pages contribution",
      value: "1",
      description: "A focused Hindi localization pull request for the DOS cd page.",
    },
    {
      label: "Projects contributed to",
      value: "2",
      description: "Mathesar and tldr-pages.",
    },
    {
      label: "Program attendance",
      value: "23/23",
      description: "All sessions in the Kalvium × Mathesar program.",
    },
    {
      label: "Program duration",
      value: "9 weeks",
      description: "A structured open-source contribution program.",
    },
    {
      label: "Changed files",
      value: "7",
      description:
        "Aggregate GitHub-reported files changed across the five merged pull requests.",
    },
    {
      label: "GitHub diff total",
      value: "+101 / -11",
      description:
        "Aggregate GitHub-reported additions and deletions, kept as supporting metadata rather than the main achievement.",
    },
  ],
  projects: [
    {
      id: "mathesar",
      name: "Mathesar",
      shortName: "Mathesar",
      description:
        "Mathesar is an open-source web application that provides a familiar spreadsheet-like interface for working directly with PostgreSQL data. It helps users with different levels of technical experience view, edit, query, and collaborate on PostgreSQL data without introducing an additional proprietary data layer.",
      role: "Open-source contributor through the Kalvium × Mathesar Open Source Program",
      contributionSummary:
        "My Mathesar contributions moved from a focused frontend event-handling bug to a user-facing error state, a backend serialization fix for timezone-aware temporal values, and a small TypeScript cleanup. Together, they taught me how to work across different parts of a mature application while keeping each pull request scoped.",
      repositoryUrl: "https://github.com/mathesar-foundation/mathesar",
      forkUrl: "https://github.com/garvitsingh171/mathesar",
      technologies: [
        "Svelte",
        "TypeScript",
        "Python",
        "PostgreSQL",
        "JSON serialization",
        "svelte-i18n",
        "Git",
        "GitHub",
      ],
      stats: [
        {
          label: "Merged PRs",
          value: "4",
        },
        {
          label: "Changed files",
          value: "6",
        },
        {
          label: "GitHub diff",
          value: "+85 / -11",
        },
      ],
      highlights: [
        "Fixed a linked-record cell interaction so Shift+click could support range selection without opening the record selector.",
        "Replaced a misleading blank record form with a clearer record-not-found state for invalid record URLs.",
        "Handled timezone-aware date, datetime, and time values at the response-serialization boundary.",
        "Completed a narrow TypeScript cleanup by removing an unused import without expanding the scope.",
      ],
      learnings: [
        "Maintainer feedback helped me understand why two similar components are not automatically part of the same bug.",
        "UI changes need to respect existing design language, theme tokens, internationalization, and reviewer expectations.",
        "Backend fixes are stronger when they address the right boundary instead of changing unrelated query or transformation logic.",
        "Small maintenance work still matters when it keeps shared code clean and reviewable.",
      ],
      links: [
        {
          label: "Mathesar repository",
          url: "https://github.com/mathesar-foundation/mathesar",
          type: "repository",
        },
        {
          label: "Garvit's Mathesar fork",
          url: "https://github.com/garvitsingh171/mathesar",
          type: "fork",
        },
      ],
      contributions: [
        {
          id: "mathesar-shift-click-record-selector",
          projectId: "mathesar",
          repository: "mathesar-foundation/mathesar",
          title:
            "Fix: Prevent record selector opening on Shift+click of FK cell chevron (fixes #4913)",
          summary:
            "I fixed a frontend interaction bug where Shift+clicking the chevron in a linked-record cell opened the record selector when the user was trying to extend a multi-cell selection.",
          problem:
            "Shift-clicking the chevron in a foreign-key or linked-record cell incorrectly opened the record selector, which conflicted with expected spreadsheet-style range-selection behaviour.",
          solution: [
            "Updated the linked-record cell click handling so regular clicks still open the record selector.",
            "Allowed Shift+click to avoid opening the selector and continue the intended cell-selection interaction.",
            "Kept the final change focused on the `LinkedRecordCell` path involved in sheet range selection.",
          ],
          impact: [
            "Preserved normal record-selector behaviour for regular clicks.",
            "Improved spreadsheet-style selection behaviour for modified clicks.",
            "Reduced risk by removing an unnecessary change to a related but unaffected component.",
          ],
          technologies: [
            "Svelte",
            "TypeScript",
            "Frontend event handling",
            "GitHub pull requests",
          ],
          learnings: [
            "I learned to trace a UI interaction through an unfamiliar Svelte codebase before deciding where to change it.",
            "I learned how event state such as `shiftKey` can change the intended user interaction.",
            "Maintainer feedback showed me that `LinkedRecordInput` was used in forms, filters, and other areas rather than the sheet range-selection flow.",
            "I learned that accepting a narrowed scope is part of producing a safer contribution, not a failure.",
          ],
          reviewNotes: [
            "An earlier version also changed `LinkedRecordInput`; maintainer review clarified that the bug was only relevant to `LinkedRecordCell`, and the unnecessary part was reverted before merge.",
          ],
          status: "merged",
          pullRequestNumber: 5007,
          pullRequestUrl:
            "https://github.com/mathesar-foundation/mathesar/pull/5007",
          issueUrl: "https://github.com/mathesar-foundation/mathesar/issues/4913",
          filePaths: [
            "mathesar_ui/src/components/cell-fabric/data-types/components/linked-record/LinkedRecordCell.svelte",
          ],
          createdAt: "2025-11-22",
          mergedAt: "2025-12-03",
          commits: 5,
          changedFiles: 1,
          additions: 8,
          deletions: 1,
        },
        {
          id: "mathesar-record-not-found-state",
          projectId: "mathesar",
          repository: "mathesar-foundation/mathesar",
          title:
            "Fix: Display error page for non-existent records instead of blank form (fixes #4896)",
          summary:
            "I worked on the record page experience so an invalid record URL showed a clear record-not-found state instead of a blank editable-looking form.",
          problem:
            "Navigating to the URL of a record that did not exist displayed a blank record form with an Unsaved Changes badge, which could mislead users into thinking an editable record existed.",
          solution: [
            "Detected the failed record-fetch state and rendered a dedicated record-not-found view.",
            "Matched the tone and structure of an existing schema error state instead of inventing a separate design language.",
            "Used existing design-system CSS variables so the state worked in light and dark themes.",
            "Added user-facing text through the existing `svelte-i18n` internationalization system.",
            "Kept valid-record behaviour unchanged and avoided redesigning unrelated schema, table, or backend-error handling.",
          ],
          impact: [
            "Replaced a misleading empty state with a clearer user-facing error state.",
            "Improved confidence for users who land on invalid record URLs.",
            "Kept the fix aligned with Mathesar's existing design and localization patterns.",
          ],
          technologies: [
            "Svelte",
            "TypeScript",
            "svelte-i18n",
            "CSS design tokens",
            "Manual UI verification",
          ],
          learnings: [
            "I learned to treat empty and error states as part of product behaviour, not as secondary UI details.",
            "I learned to use existing design tokens rather than hardcoded theme values.",
            "I learned that visual changes need screenshots or equivalent proof so maintainers can review the behaviour quickly.",
            "I learned that the pull-request description and repository template are part of the engineering work.",
          ],
          reviewNotes: [
            "Reviewer feedback requested screenshots and adherence to Mathesar's pull-request template.",
            "I supplied screenshots, updated the pull-request description, and added the required Developer Certificate of Origin section before merge.",
          ],
          verification: [
            "Documented behaviour before and after the fix.",
            "Checked valid-record and invalid-record paths.",
            "Verified the UI in light and dark themes.",
            "Documented lint, formatting, tests, and TypeScript checks in the final pull-request description.",
          ],
          status: "merged",
          pullRequestNumber: 5044,
          pullRequestUrl:
            "https://github.com/mathesar-foundation/mathesar/pull/5044",
          issueUrl: "https://github.com/mathesar-foundation/mathesar/issues/4896",
          filePaths: [
            "mathesar_ui/src/i18n/languages/en/dict.json",
            "mathesar_ui/src/pages/record/RecordPage.svelte",
            "mathesar_ui/src/systems/record-view/RecordStore.ts",
          ],
          createdAt: "2025-11-29",
          mergedAt: "2025-12-18",
          commits: 4,
          changedFiles: 3,
          additions: 32,
          deletions: 8,
        },
        {
          id: "mathesar-timezone-distinct-list",
          projectId: "mathesar",
          repository: "mathesar-foundation/mathesar",
          title:
            "Fix: Make Distinct List work for Time with Timezone columns (fixes #2964)",
          summary:
            "I fixed a backend response issue where Distinct List on a PostgreSQL Time with Timezone column failed because timezone-aware Python time values were not directly JSON serializable.",
          problem:
            "Applying the Distinct List transformation to a Time with Timezone column caused the backend response to fail with the error `JSON can't represent timezone-aware times`.",
          solution: [
            "Updated `mathesar/utils/explorations.py` to serialize Python `date`, `datetime`, and `time` values into ISO-8601 strings.",
            "Handled timezone-aware temporal values before the RPC response was rendered as JSON.",
            "Recursively handled values nested inside lists, tuples, and dictionaries.",
            "Converted exploration rows into JSON-friendly structures while leaving the SQL and transformation layer unchanged.",
            "Isolated the fix to the service or response-preparation boundary.",
          ],
          impact: [
            "Allowed Distinct List responses containing timezone-aware temporal values to be represented as JSON.",
            "Kept the query and transformation logic untouched because the failure was in response serialization.",
            "Improved reliability for a PostgreSQL-oriented feature without expanding the scope of the fix.",
          ],
          technologies: [
            "Python",
            "PostgreSQL",
            "JSON serialization",
            "Temporal data",
            "Backend debugging",
          ],
          learnings: [
            "I learned to debug across database query results, Python runtime values, service output, and JSON response rendering.",
            "I learned why valid Python values are not automatically valid JSON response values.",
            "I learned to handle nested containers rather than fixing only one direct value.",
            "I learned to isolate a backend fix at the correct architectural layer instead of changing SQL transformation logic unnecessarily.",
          ],
          reviewNotes: [
            "The pull request was reviewed and approved after the focused serialization change was merged with the current develop branch.",
          ],
          status: "merged",
          pullRequestNumber: 5148,
          pullRequestUrl:
            "https://github.com/mathesar-foundation/mathesar/pull/5148",
          issueUrl: "https://github.com/mathesar-foundation/mathesar/issues/2964",
          filePaths: ["mathesar/utils/explorations.py"],
          createdAt: "2025-12-27",
          mergedAt: "2026-01-24",
          commits: 2,
          changedFiles: 1,
          additions: 44,
          deletions: 1,
        },
        {
          id: "mathesar-unused-cell-id-import",
          projectId: "mathesar",
          repository: "mathesar-foundation/mathesar",
          title: "fix: Remove unused import makeCellId from records store - issue #5164",
          summary:
            "I removed an unused TypeScript import from the table records store while preserving the import that was still required.",
          problem:
            "The table records store contained an unused `makeCellId` import, which produced an unnecessary lint warning and reduced code cleanliness.",
          solution: [
            "Removed the unused `makeCellId` import.",
            "Preserved `parseCellId`, which was still used by the records store.",
            "Kept the change intentionally small instead of turning a cleanup task into a broader refactor.",
          ],
          impact: [
            "Resolved the focused unused-variable cleanup.",
            "Improved code hygiene in a shared TypeScript file.",
            "Showed that small maintenance issues still deserve careful scope control.",
          ],
          technologies: [
            "TypeScript",
            "Linting",
            "Code maintenance",
            "GitHub pull requests",
          ],
          learnings: [
            "I learned to verify an import's actual usage before removing it.",
            "I learned that a one-line fix can still be valuable when it keeps shared code clean.",
            "I learned not to expand a small cleanup into an unrelated refactor.",
            "I learned to validate the narrow change with the appropriate linting workflow.",
          ],
          verification: [
            "Verified that the relevant unused-variable lint warning was resolved.",
          ],
          status: "merged",
          pullRequestNumber: 5179,
          pullRequestUrl:
            "https://github.com/mathesar-foundation/mathesar/pull/5179",
          issueUrl: "https://github.com/mathesar-foundation/mathesar/issues/5164",
          filePaths: ["mathesar_ui/src/stores/table-data/records.ts"],
          createdAt: "2026-01-17",
          mergedAt: "2026-01-24",
          commits: 1,
          changedFiles: 1,
          additions: 1,
          deletions: 1,
        },
      ],
    },
    {
      id: "tldr-pages",
      name: "tldr-pages",
      shortName: "tldr",
      description:
        "tldr-pages is a community-maintained collection of concise and practical help pages for command-line tools. It is designed as a simpler, example-focused complement to traditional manual pages.",
      role: "Documentation and localization contributor",
      contributionSummary:
        "My tldr-pages contribution added a focused Hindi translation for the DOS `cd` command. The work taught me that documentation and localization still require repository conventions, linting, review iterations, and careful scope management.",
      repositoryUrl: "https://github.com/tldr-pages/tldr",
      forkUrl: "https://github.com/garvitsingh171/tldr",
      technologies: [
        "Markdown",
        "Hindi localization",
        "Command-line documentation",
        "tldr-lint",
        "Git",
        "GitHub",
      ],
      stats: [
        {
          label: "Merged PRs",
          value: "1",
        },
        {
          label: "Changed files",
          value: "1",
        },
        {
          label: "GitHub diff",
          value: "+16 / -0",
        },
      ],
      highlights: [
        "Added the Hindi tldr page for the DOS `cd` command in `pages.hi/dos/cd.md`.",
        "Kept command examples and intended behaviour aligned with the source page.",
        "Worked through automated checks and human review before merge.",
        "Kept unrelated outdated Hindi pages outside the scope of this pull request.",
      ],
      learnings: [
        "Documentation is part of engineering work because it affects how people learn and use tools.",
        "Localization requires project-specific style, placeholder, metadata, and link conventions.",
        "Automated bot output can include repository-wide context that is not always part of the submitted change.",
        "A focused documentation pull request can still require several review iterations.",
      ],
      links: [
        {
          label: "tldr-pages repository",
          url: "https://github.com/tldr-pages/tldr",
          type: "repository",
        },
        {
          label: "Garvit's tldr fork",
          url: "https://github.com/garvitsingh171/tldr",
          type: "fork",
        },
      ],
      contributions: [
        {
          id: "tldr-hindi-dos-cd",
          projectId: "tldr-pages",
          repository: "tldr-pages/tldr",
          title: "cd: add Hindi translation",
          summary:
            "I added a Hindi translation for the DOS `cd` command so the page could be more approachable for Hindi-speaking command-line learners.",
          problem:
            "The DOS `cd` command needed a Hindi tldr page that followed the repository's translation and formatting conventions while preserving the original command examples.",
          solution: [
            "Added `pages.hi/dos/cd.md` with translated Hindi descriptions for the DOS `cd` command.",
            "Retained the command examples and their intended behaviour.",
            "Followed the tldr-pages Markdown structure, placeholder conventions, and more-information link guidance.",
            "Used the repository's lint and review workflow to refine the page before merge.",
          ],
          impact: [
            "Made a fundamental directory-navigation command more approachable for Hindi-speaking users.",
            "Expanded the Hindi localization coverage by one focused page.",
            "Kept unrelated outdated Hindi pages outside the scope of the pull request.",
          ],
          technologies: [
            "Markdown",
            "Hindi localization",
            "Command-line documentation",
            "tldr-lint",
            "GitHub pull requests",
          ],
          learnings: [
            "I learned that localization is more than literal word replacement.",
            "I learned to follow translation guidelines for command placeholders, metadata, and links.",
            "I learned to separate relevant reviewer feedback from unrelated repository-wide bot warnings.",
            "I learned that making technical knowledge available in more languages is a meaningful contribution.",
          ],
          reviewNotes: [
            "Review feedback covered the More information link, helper-script guidance, translation conventions, title corrections, and avoiding unrelated updates to outdated Hindi pages.",
            "The pull request was refined over several commits, approved by maintainers, and merged.",
          ],
          verification: [
            "Worked through automated repository checks and human review.",
            "Used tldr-pages formatting and lint expectations for the translated page.",
          ],
          status: "merged",
          pullRequestNumber: 19315,
          pullRequestUrl: "https://github.com/tldr-pages/tldr/pull/19315",
          filePaths: ["pages.hi/dos/cd.md"],
          createdAt: "2025-11-12",
          mergedAt: "2025-11-17",
          commits: 8,
          changedFiles: 1,
          additions: 16,
          deletions: 0,
        },
      ],
    },
  ],
  learningSummary: {
    heading: "What the contribution process taught me",
    description:
      "The strongest lessons from this program were not only about the final merged code. They came from learning how to enter an unfamiliar repository respectfully, understand the real problem, communicate clearly, and keep improving the work through review.",
    learnings: [
      {
        title: "Understanding unfamiliar repositories",
        description:
          "I learned to inspect folder structures, search for related implementations, trace code paths, and observe existing behaviour before editing. That made it easier to connect an issue to the specific frontend, backend, or documentation path that actually needed work.",
        examples: [
          "Tracing Mathesar's linked-record cell interaction before changing click behaviour.",
          "Reading backend exploration response code before fixing JSON serialization.",
        ],
      },
      {
        title: "Reading contribution guidelines",
        description:
          "Repository instructions, pull-request templates, testing notes, translation rules, and code conventions are part of the implementation. The Mathesar and tldr-pages reviews showed me that maintainers need changes to follow the project's process as well as solve the technical problem.",
      },
      {
        title: "Scoping changes",
        description:
          "I learned to keep pull requests focused on the affected path. The `LinkedRecordInput` review in Mathesar and the unrelated Hindi-page warnings in tldr-pages both showed why similar-looking or nearby work should often stay out of the current pull request.",
      },
      {
        title: "Communicating through pull requests",
        description:
          "Clear titles, linked issues, detailed descriptions, screenshots for UI changes, and testing notes help maintainers review work asynchronously. I also learned to explain what changed and what intentionally did not change.",
      },
      {
        title: "Responding to review feedback",
        description:
          "Review feedback refined my solutions and improved my understanding of the repositories. I learned to treat requested changes as guidance toward a better contribution instead of as a negative event.",
      },
      {
        title: "Testing and verification",
        description:
          "Different contributions needed different verification. I used or documented linting, formatting, TypeScript checks, frontend checks, manual UI validation, valid and invalid record paths, dark and light theme checks, and tldr lint expectations where they applied.",
      },
      {
        title: "Working across contribution types",
        description:
          "Meaningful open-source work can be a frontend interaction fix, a user-facing error state, a backend serialization change, a one-line cleanup, or a documentation localization. The common thread is understanding the repository's needs and making the change responsibly.",
      },
      {
        title: "Git and GitHub workflow",
        description:
          "I practised working with forks, branches, focused commits, pull requests, review iterations, branch updates, and merged upstream changes. The process made GitHub feel less like a place to upload code and more like a collaboration workflow.",
      },
      {
        title: "Asynchronous collaboration",
        description:
          "I learned to provide enough context for maintainers to understand and review my work without a synchronous explanation. Good screenshots, descriptions, testing notes, and comments reduce back-and-forth and make review easier.",
      },
      {
        title: "Confidence and ownership",
        description:
          "The program made large repositories feel more approachable. It also taught me to take responsibility for the quality of both the code and the communication around it, because both affect whether a contribution can be merged.",
      },
    ],
  },
  closing: {
    heading: "Where I want to take this next",
    paragraphs: [
      "I want to continue contributing to open-source projects where I can deepen backend engineering skills, improve frontend and product behaviour, work on scoped bugs, strengthen documentation, and learn from experienced maintainers.",
      "My goal is to contribute consistently and thoughtfully rather than chase contribution counts. The best outcome from this program was learning how to make a change that fits the project, helps users or maintainers, and leaves the codebase a little clearer than before.",
    ],
  },
};
