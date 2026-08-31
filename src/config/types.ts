// Type definitions for portfolio content

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location?: string;
  summary?: string;
  description: string;
  /** Outcome-focused bullets. Lead with the result, not the task. */
  highlights?: string[];
  tech: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  description: string;
  link?: string;
}

export interface ProjectItem {
  title: string;
  /** Short label used in nav/search, without the sci-fi prefix. */
  name?: string;
  tagline?: string;
  description: string;
  /** The user-facing problem this solves. */
  problem?: string;
  /** How it was built / the interesting engineering. */
  approach?: string;
  /** Measurable or observable result. */
  outcome?: string;
  imageUrl: string;
  tags: string[];
  link: string;
  demo?: string;
  featured?: boolean;
  year?: string;
  status?: 'live' | 'archived' | 'wip';
}

export interface Skill {
  name: string;
  icon: string;
  color: string;
  /** 1–5 self-assessed depth, drives the proficiency meter. */
  level?: number;
  note?: string;
}

export interface SkillCategory {
  title: string;
  /** Human-readable label without the bracketed codename. */
  label?: string;
  blurb?: string;
  skills: Skill[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  twitter: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
  detail?: string;
}

export interface Pillar {
  title: string;
  icon: string;
  description: string;
}

export interface PortfolioConfig {
  personalInfo: {
    name: string;
    title: string;
    /** One-line positioning statement — the "what I do for you" hook. */
    headline: string;
    subheadline: string;
    bio: string;
    /** Longer narrative for the about section. */
    story: string[];
    avatar: string;
    availability: string;
    github: string;
  };
  stats: Stat[];
  pillars: Pillar[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: EducationItem[];
  projects: ProjectItem[];
  skills: SkillCategory[];
  contact: ContactInfo;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}
