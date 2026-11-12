// All site copy lives here so it can be updated without touching layout code.

export const profile = {
  name: "Sumit Kumar Singh",
  role: "Backend Engineer",
  location: "Mumbai, India",
  email: "sumitkumar.singh1617@gmail.com",
  github: "https://github.com/sumit1617",
  linkedin: "https://www.linkedin.com/in/singh-sumitkumar/",
  resume: "/Sumit-Kumar-Singh-Resume.pdf",
};

export const projects = [
  {
    slug: "property",
    title: "Property information platform",
    org: "Codexlab",
    period: "2024 — now",
    ownership:
      "Sole backend developer for ~1.5 years. A small team joined in the last few months; I still own the backend.",
    summary:
      "A property platform that real-estate businesses use to run their listings, projects and sales pipeline in one place. It grew one module at a time, and I designed each of them.",
    points: [
      "WhatsApp marketing: campaigns sent to segmented contact lists, with delivery tracked per message.",
      "Leads: capture from several sources, assignment, status tracking and follow-ups.",
      "Listings and projects: the core property data model that every other module hangs off.",
      "Heavy PDF downloads: large, data-dense documents generated and served without blocking the API for everyone else.",
    ],
    stack: ["Node.js", "Express", "MongoDB"],
  },
  {
    slug: "events",
    title: "Event management platform: v1 to v2 rebuild",
    org: "Codexlab",
    period: "Solo",
    ownership: "Built v1, then rewrote the backend as v2 on my own.",
    summary:
      "Users browse events and register for the ones they want to attend. v1 worked for a single event at a time. Once the client wanted to run several, its design became the bottleneck, so I rebuilt the backend.",
    compare: {
      rows: [
        ["Stack", ".NET (C#) + SQL", "Node.js + MongoDB"],
        [
          "Running events",
          "One at a time. Previous event data had to be cleared before the next one could start.",
          "Many in parallel. Data is scoped per event, so nothing is wiped and history is kept.",
        ],
        [
          "Performance",
          "Slowed down noticeably as data and traffic grew.",
          "Restructured queries and data model, so it stays responsive under load.",
        ],
      ],
    },
    stack: [".NET", "C#", "SQL", "Node.js", "MongoDB"],
  },
  {
    slug: "playverse",
    title: "Playverse: multi-sport turf booking",
    org: "Freelance",
    period: "Live",
    ownership: "Owned the complete backend.",
    summary:
      "A booking platform for sports turfs in Nashik. Players find and book slots, turf owners manage their grounds and admins oversee the whole thing, each with their own permissions.",
    points: [
      "Split into services with Node.js, Express and MongoDB so booking, payments and notifications can change independently.",
      "Razorpay for payments, Firebase for real-time in-app notifications.",
      "Deployed on Railway and Vercel. In use by 150+ Android and 50+ iOS users.",
    ],
    stack: ["Node.js", "Express", "MongoDB", "Razorpay", "Firebase", "Railway"],
  },
  {
    slug: "audit",
    title: "Website accessibility auditing",
    org: "Codexlab",
    period: "Solo",
    ownership: "Built end to end.",
    summary:
      "You give it a URL. It crawls the site page by page, runs accessibility checks on each one and reports whether that page, and the site overall, meets WCAG.",
    points: [
      "Crawler discovers internal links and visits every page once, staying within the submitted domain.",
      "Each page is audited separately, so results show exactly where a site fails, not just a single score.",
    ],
    stack: ["Crawler", "WCAG"],
  },
  {
    slug: "assessment",
    title: "AI-assisted assessment platform",
    org: "Codexlab · internal",
    period: "In progress",
    ownership: "Building backend and frontend.",
    summary:
      "An internal tool for our hiring. We were losing interview time to candidates who cheat, so this platform screens them first with AI-assisted assessments. The base is done; I'm building the rest now.",
    stack: ["Backend", "Frontend", "AI"],
  },
  {
    slug: "gov",
    title: "Government projects",
    org: "Codexlab",
    period: "Under NDA",
    ownership: "Backend.",
    summary:
      "Several government projects whose details I can't share. The work covered analytics, admin access, and a role and permission system that decides who can see and change what.",
    stack: [".NET", "C#", "SQL"],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    org: "Codexlab Enterprise Pvt. Ltd.",
    place: "Mumbai",
    period: "Oct 2024 — Present",
    points: [
      "Design, build and maintain REST APIs for several production applications at the same time, in Node.js/Express and .NET, on MongoDB and SQL.",
      "Own the backend end to end: database design, auth and permissions, third-party integrations and query performance.",
      "Deploy and run services on AWS: server setup, scaling and production monitoring.",
      "Work directly with frontend, QA, product and clients in India and abroad, and pick up frontend integration when a release needs it.",
    ],
  },
  {
    role: "Backend Developer",
    org: "Freelance",
    place: "Remote",
    period: "Project-based",
    points: [
      "Built and shipped the full backend for a turf booking platform that is live in Nashik.",
    ],
  },
];

export const stack = [
  { group: "Primary", items: ["Node.js", "Express", "MongoDB", "REST APIs"] },
  { group: "Also in production", items: [".NET / C#", "SQL", "Microservices"] },
  { group: "Infra", items: ["AWS", "Docker", "Railway", "Vercel"] },
  { group: "Languages", items: ["JavaScript", "C#", "Python", "C++"] },
];

export const aiTools = [
  {
    tool: "ChatGPT",
    use: "Planning. Breaking a feature into steps, thinking through schemas and edge cases before I write any code.",
  },
  {
    tool: "Claude",
    use: "Coding alongside me, reviewing my changes, and a security review pass before anything goes to production.",
  },
];

export const education = {
  degree: "B.E. in Information Technology",
  school: "University of Mumbai",
  period: "2020 — 2024",
  note: "CGPA 8.47",
};

export const certifications = [
  "Oracle Cloud Infrastructure Foundations Associate",
  "AWS Academy Graduate: Introduction to Cloud",
];
