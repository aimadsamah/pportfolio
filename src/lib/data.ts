import type { Project, SkillTile, TimelineItem, NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2021 — 2025",
    title: "B.Sc. Information Systems",
    subtitle:
      "University of Science nd Technology Houari Boumediene — Focus on software engineering, distributed systems, databases, and algorithmic thinking.",
  },
  {
    year: "2023",
    title: "Full-Stack Mastery",
    subtitle:
      "Deep dive into the MERN stack. Built and shipped production applications with React, Node.js, Express, and MongoDB.",
  },
  {
    year: "2024",
    title: "TypeScript & Next.js",
    subtitle:
      "Adopted TypeScript across all projects. Migrated to Next.js App Router for SSR, SSG, and superior performance.",
  },
  {
    year: "Now",
    title: "Open to Opportunities",
    subtitle:
      "Actively building, contributing to open-source, and ready for my next challenge on a world-class team.",
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
  { icon: "🐳", name: "Docker", tag: "DevOps", size: "sm" },
  { icon: "🔐", name: "REST APIs", tag: "Architecture", size: "wide" },
  { icon: "☁️", name: "Vercel", tag: "Deployment", size: "sm" },
];

export const PROJECTS: Project[] = [
  {
    num: "01",
    title: "DevFlow Platform",
    description:
      "A full-stack developer Q&A platform with real-time answers, voting systems, and reputation tracking. Built for scale with optimistic UI updates and edge-cached responses.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind"],
    glowColor: "#2563eb",
    status: "Live",
    label: "SaaS Platform",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    num: "02",
    title: "Commerce Engine",
    description:
      "Modern e-commerce solution with dynamic product catalogs, Stripe payment integration, and a real-time inventory management dashboard built on a REST API backend.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    glowColor: "#7c3aed",
    status: "In Progress",
    label: "E-Commerce",
    githubUrl: "#",
  },
  {
    num: "03",
    title: "Atlas CMS",
    description:
      "A headless content management system featuring a visual editor, advanced media management, and dual REST + GraphQL APIs for multi-channel content delivery at scale.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "GraphQL"],
    glowColor: "#0891b2",
    status: "Live",
    label: "CMS / API",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    num: "04",
    title: "PulseMetrics",
    description:
      "Real-time analytics dashboard for web applications. Track custom events, visualize conversion funnels, and monitor live performance KPIs with a WebSocket-powered data pipeline.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    glowColor: "#059669",
    status: "Beta",
    label: "Analytics",
    githubUrl: "#",
  },
];
