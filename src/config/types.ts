// Type definitions for portfolio content

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string;
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
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
}

export interface Skill {
  name: string;
  icon: string;
  color: string;
}

export interface SkillCategory {
  title: string;
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

export interface PortfolioConfig {
  personalInfo: {
    name: string;
    title: string;
    bio: string;
    avatar: string;
    github: string;
  };
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
