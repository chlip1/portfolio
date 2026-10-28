export interface Education {
  school: string;
  degree: string;
  dates: string;
}

export interface Role {
  title: string;
  date: string;
  highlights: string[];
}

export interface Experience {
  company: string;
  roles: Role[];
  skills: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  image?: string;
  links: ProjectLink[];
}

export interface SkillGroup {
  name: string;
  items: string[];
}
