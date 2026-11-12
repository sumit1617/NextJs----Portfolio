// All site copy lives here so it can be updated without touching layout code.

export const profile = {
  name: "Sumit Kumar Singh",
  role: "Backend Engineer",
  company: "Codexlab",
  location: "Mumbai, India",
  email: "sumitkumar.singh1617@gmail.com",
  github: "https://github.com/sumit1617",
  linkedin: "https://www.linkedin.com/in/singh-sumitkumar/",
  resume: "/Sumit-Kumar-Singh-Resume.pdf",
};

export const stats = [
  { value: 2, suffix: "+", label: "Years building production backends" },
  { value: 6, suffix: "", label: "Production systems shipped" },
  { value: 200, suffix: "+", label: "Live app users on Playverse" },
  { value: 1.5, suffix: " yrs", label: "Sole backend owner, property platform", decimals: 1 },
];

// color: tailwind color family used for the card accent
// icon: key mapped to an icon in ProjectCard
export const projects = [
  {
    slug: "property",
    icon: "building",
    color: "amber",
    badge: "Backend lead",
    title: "Property Information Platform",
    org: "Codexlab",
    summary:
      "A platform real-estate businesses use to run listings, projects and their sales pipeline. I was the only backend developer for ~1.5 years; a team joined in the last few months.",
    highlights: [
      "WhatsApp marketing campaigns to segmented contacts",
      "Leads, listings and projects modules",
      "Heavy PDF generation and downloads without blocking the API",
    ],
    stack: ["Node.js", "Express", "MongoDB"],
    filters: ["Node.js"],
  },
  {
    slug: "events",
    icon: "calendar",
    color: "violet",
    badge: "Solo",
    title: "Event Management Platform",
    org: "Codexlab",
    summary:
      "Users browse events and register for the ones they want to attend. I built v1, then rebuilt the backend as v2 when the client outgrew it.",
    migration: { from: ".NET + SQL", to: "Node.js + MongoDB" },
    highlights: [
      "v1 had to wipe the previous event's data before a new one could start",
      "v2 runs many events in parallel and keeps history",
      "Restructured data model and queries, so it's no longer slow under load",
    ],
    stack: [".NET", "C#", "SQL", "Node.js", "MongoDB"],
    filters: ["Node.js", ".NET"],
  },
  {
    slug: "playverse",
    icon: "trophy",
    color: "emerald",
    badge: "Freelance · Live",
    title: "Playverse: Turf Booking",
    org: "Freelance",
    summary:
      "Multi-sport turf booking in Nashik with separate roles for admins, turf owners and players. I owned the complete backend.",
    highlights: [
      "Microservices on Node.js, Express and MongoDB",
      "Razorpay payments, Firebase real-time notifications",
      "Live with 150+ Android and 50+ iOS users",
    ],
    stack: ["Node.js", "Express", "MongoDB", "Razorpay", "Firebase", "Railway"],
    filters: ["Node.js"],
  },
  {
    slug: "audit",
    icon: "shield",
    color: "sky",
    badge: "Solo",
    title: "Website Accessibility Auditor",
    org: "Codexlab",
    summary:
      "Enter a website URL. It crawls the site page by page, audits each one and reports whether that page, and the site as a whole, is WCAG compliant.",
    highlights: [
      "Crawler discovers and visits every internal page once",
      "Per-page results, so you see exactly where a site fails",
    ],
    stack: ["Crawler", "WCAG"],
    filters: [],
  },
  {
    slug: "assessment",
    icon: "clipboard",
    color: "rose",
    badge: "In progress",
    title: "AI Assessment Platform",
    org: "Codexlab · Internal",
    summary:
      "Our hiring was losing interview time to candidates who cheat. This platform screens them first with AI-assisted assessments. The base is done and I'm building the rest.",
    highlights: [
      "Building both backend and frontend",
      "AI-assisted evaluation to cut wasted interview time",
    ],
    stack: ["Full stack", "AI"],
    filters: [],
  },
  {
    slug: "gov",
    icon: "library",
    color: "slate",
    badge: "Under NDA",
    title: "Government Projects",
    org: "Codexlab",
    summary:
      "Several government projects I can't share details of. The backend work covered analytics, admin access and a full role and permission system.",
    highlights: [
      "Role-based access control across admin levels",
      "Analytics and reporting",
    ],
    stack: [".NET", "C#", "SQL"],
    filters: [".NET"],
  },
];

export const experience = {
  role: "Software Engineer",
  org: "Codexlab Enterprise Pvt. Ltd.",
  place: "Mumbai, India",
  period: "Oct 2024 — Present",
  points: [
    "Design, build and maintain REST APIs for several production applications at the same time, in Node.js/Express and .NET, on MongoDB and SQL.",
    "Own the backend end to end: database design, auth and permissions, third-party integrations and query performance.",
    "Deploy and run services on AWS: server setup, scaling and production monitoring.",
    "Work directly with frontend, QA, product and clients in India and abroad, and pick up frontend integration when a release needs it.",
  ],
  tags: ["REST APIs", "Microservices", "AWS", "Docker", "Database design"],
};

export const stack = [
  {
    group: "Backend",
    items: ["Node.js", "Express", ".NET", "REST APIs", "Microservices"],
  },
  { group: "Databases", items: ["MongoDB", "SQL"] },
  { group: "Cloud & DevOps", items: ["AWS", "Docker", "Railway", "Vercel", "Git"] },
  { group: "Languages", items: ["JavaScript", "C#", "Python", "C++"] },
];

export const aiFlow = [
  { step: "Plan", tool: "ChatGPT", text: "Break the feature down, think through schemas and edge cases." },
  { step: "Build", tool: "Claude", text: "Code alongside me, so I move faster on the routine parts." },
  { step: "Review", tool: "Claude", text: "Code review and a security pass before anything is merged." },
  { step: "Ship", tool: "Me", text: "I read, test and take responsibility for every line that goes live." },
];

export const education = {
  degree: "B.E. in Information Technology",
  school: "University of Mumbai",
  period: "2020 — 2024",
  note: "CGPA 8.47 / 10",
};

export const certifications = [
  "Oracle Cloud Infrastructure Foundations Associate",
  "AWS Academy Graduate: Introduction to Cloud",
];
