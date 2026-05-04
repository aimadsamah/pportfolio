export interface Project {
  num: string
  title: string
  description: string
  tech: string[]
  glowColor: string
  status: 'Live' | 'In Progress' | 'Beta'
  label: string
  githubUrl?: string
  liveUrl?: string
}

export interface TimelineItem {
  year: string
  title: string
  subtitle: string
}

export interface SkillTile {
  icon: string
  name: string
  tag: string
  size: 'sm' | 'wide' | 'tall' | 'xl'
}

export interface NavLink {
  label: string
  href: string
}
