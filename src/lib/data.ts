import type { Project, SkillTile, TimelineItem, NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2017 — 2021",
    title: "B.Sc. Information Systems and Software Engineering",
    subtitle:
      "University of Science and Technology Houari Boumediene (USTHB) — Focus on software engineering, distributed systems, databases, and algorithmic thinking.",
  },
  {
    year: "2022 — 2026",
    title: "Full-Stack Development",
    subtitle:
      "Specialized in building high-performance web applications. Focused on creating Luxury aesthetics with advanced animations and a mobile-first responsive design for high-end clients.",
  },
  {
    year: "2025 — 2026",
    title: "E-commerce & Digital Marketing",
    subtitle:
      "Managed online stores and Meta advertising campaigns. Focused on sales optimization and order management to drive business growth.",
  },
  {
    year: "Now",
    title: "Open to Opportunities",
    subtitle:
      "A motivated developer with an engineering background and a business mindset. Eager to join a team and build high-impact digital products.",
  },
];

export const SKILLS: SkillTile[] = [
  { icon: "⚡", name: "JavaScript", tag: "Core Language", size: "sm" },
  { icon: "🔷", name: "TypeScript", tag: "Typed JS", size: "sm" },
  { icon: "⚛️", name: "React", tag: "UI Library", size: "tall" },
  { icon: "▲", name: "Next.js", tag: "Framework", size: "sm" },
  { icon: "🌿", name: "Node.js", tag: "Runtime", size: "wide" },
  { icon: "🚂", name: "Express", tag: "Backend", size: "sm" },
  { icon: "🍃", name: "MongoDB", tag: "Database", size: "sm" },
  { icon: "💨", name: "Tailwind CSS", tag: "Styling", size: "wide" },
  { icon: "🐙", name: "Git & GitHub", tag: "Version Control", size: "sm" },
  //{ icon: "🐳", name: "Docker", tag: "DevOps", size: "sm" },
  { icon: "🔐", name: "REST APIs", tag: "Architecture", size: "wide" },
  { icon: "☁️", name: "Vercel", tag: "Deployment", size: "sm" },
];

export const PROJECTS: Project[] = [
  {
    num: "01",
    title: "Luxury Hotel Platform",
    description:
      "A premium hotel management system featuring real-time room reservations, a customer messaging system, and a comprehensive administrative dashboard for booking oversight.",
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind",
    ],
    glowColor: "#D4AF37", // Or pour le côté luxe
    status: "Live",
    label: "Hospitality SaaS",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    num: "02",
    title: "Restaurant Platform",
    description:
      "A sophisticated restaurant website with a dynamic menu, contact forms, and a secure admin dashboard to manage reservations and site content seamlessly.",
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind",
    ],
    glowColor: "#7c3aed",
    status: "Live",
    label: "Restaurant Solution",
    githubUrl: "#",
  },
  {
    num: "03",
    title: "Dir Lkhir Platform",
    description:
      "A community solidarity platform connecting individuals in need of medical or moral support with local donors, focused on direct hand-to-hand aid.",
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind",
    ],
    glowColor: "#059669",
    status: "Live",
    label: "Solidarity Network",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    num: "04",
    title: "Custom Mirror Atelier",
    description:
      "A specialized e-commerce experience for personalized mirrors, featuring a high-end UI built with Next.js App Router for superior performance and SEO.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    glowColor: "#2563eb",
    status: "Live",
    label: "E-Commerce",
    githubUrl: "#",
  },
];
