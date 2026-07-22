import type { AboutContent } from "@/types/about.js";

export const aboutContent: AboutContent = {
  introduction: {
    heading: "About me",
    paragraphs: [
      "I am Garvit Singh, a Software Product Engineering student at JECRC University in Jaipur, building full-stack applications with a growing focus on backend systems, data modelling, API design, and product architecture.",
      "I learn best by turning ideas into working products. My path started with frontend development and the MERN stack, then gradually moved toward connected workflows, authentication, relational databases, transactions, deployment, open-source collaboration, and the backend decisions that make a product reliable.",
    ],
  },
  education: {
    heading: "Education",
    institution: "JECRC University",
    degree: "B.Tech in Computer Science and Engineering",
    specialization: "Software Product Engineering",
    collaboration: "Kalvium",
    location: "Jaipur, Rajasthan, India",
    period: "2025 - 2029",
    description:
      "My program combines computer science fundamentals with project-based software engineering and product development. It has helped me connect classroom learning with full-stack projects, backend architecture, collaboration, documentation, and GitHub-based workflows.",
    highlights: [
      "Maintained a 9+ CGPA while building practical software projects.",
      "Achieved a 9.25 CGPA in the first semester.",
      "Built full-stack and backend-focused projects through project-based learning.",
      "Practised product development, collaboration, documentation, and GitHub workflows.",
    ],
  },
  currentLearning: {
    heading: "Current learning",
    description:
      "I am actively strengthening the fundamentals that make software easier to reason about, maintain, and ship. My current focus is on backend-first full-stack development, problem-solving, system design basics, open source, and responsible AI-assisted product features.",
    areas: [
      {
        title: "Data Structures and Algorithms",
        description:
          "I am improving how I recognise patterns, write clear solutions, and analyse time and space complexity without treating problem-solving as memorisation.",
        topics: [
          "Two pointers",
          "Sliding window",
          "Binary search",
          "Recursion",
          "Backtracking",
          "Stacks and queues",
          "Linked lists",
          "Sorting",
          "Hash maps",
          "Prefix sums",
        ],
      },
      {
        title: "Backend Engineering",
        description:
          "I am deepening my TypeScript backend skills through API design, authentication, validation, relational data modelling, transactions, layered architecture, error handling, testing, and deployment.",
        topics: [
          "Node.js",
          "Express",
          "PostgreSQL",
          "Prisma",
          "REST APIs",
          "JWT and cookie-based authentication",
          "Business rules",
          "Deployment workflows",
        ],
      },
      {
        title: "System Design Fundamentals",
        description:
          "I am learning how production systems are structured by studying API boundaries, database trade-offs, caching, rate limiting, reliability, and small backend services such as URL shorteners.",
        topics: [
          "API boundaries",
          "Database trade-offs",
          "Caching",
          "Rate limiting",
          "Reliability",
          "Small service design",
        ],
      },
      {
        title: "Open Source",
        description:
          "Through the Kalvium and Mathesar open-source program, I learned to read unfamiliar repositories, pick scoped issues, work through pull requests, respond to reviews, and make maintainable changes.",
        topics: [
          "GitHub issues",
          "Branches and commits",
          "Pull requests",
          "Maintainer feedback",
          "Scoped code changes",
        ],
      },
      {
        title: "AI and Agentic Development",
        description:
          "I am exploring how AI features can support useful software products through LLM fundamentals, prompt design, structured outputs, API integration, local models, retrieval basics, embeddings, vector databases, and simple agentic workflows.",
        topics: [
          "Prompt engineering",
          "Structured model outputs",
          "AI API integration",
          "Ollama",
          "RAG fundamentals",
          "Embeddings",
          "Vector databases",
          "Basic agent workflows",
        ],
      },
    ],
  },
  workingStyle: {
    heading: "Working style",
    description:
      "I try to approach projects as product work, not just code output. That means understanding the problem, breaking down the implementation, owning backend behaviour, and improving the result through review and reflection.",
    principles: [
      {
        title: "Learn by building",
        description:
          "I prefer applying concepts in real projects because implementation exposes the gaps that tutorials can hide. Building helps me make decisions, debug failures, and understand how separate parts of a product work together.",
      },
      {
        title: "Break work into clear steps",
        description:
          "I plan larger features with GitHub issues, smaller deliverables, branches, commits, and pull requests so the work stays reviewable and each step has a clear purpose.",
      },
      {
        title: "Take ownership",
        description:
          "I try to understand the complete feature, including validation, backend rules, database behaviour, error states, deployment concerns, and documentation, instead of stopping at the visible interface.",
      },
      {
        title: "Keep code structured",
        description:
          "I value readable code, separation of concerns, reusable components, layered backend architecture, meaningful names, and documentation that makes future changes easier.",
      },
      {
        title: "Improve through feedback",
        description:
          "I use debugging, code review, project reflection, and maintainer feedback to find weak spots and make the next version better instead of assuming the first implementation is finished.",
      },
    ],
  },
};
