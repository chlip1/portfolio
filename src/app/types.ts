export interface Education {
  school: string;
  degree: string;
  dates: string;
  details: string;
  logo: string;
}

export interface Experience {
  role: string;
  company: string;
  description: string;
  date: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  live: string;
  docs?: string;
}