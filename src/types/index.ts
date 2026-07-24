export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full Stack' | 'Java & Backend' | 'Security & Systems' | 'UI/UX & WebGL';
  description: string;
  longDescription: string;
  image: string;
  demoUrl?: string;
  githubUrl: string;
  tags: string[];
  featured: boolean;
  architectureHighlights: string[];
  metrics?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: number; // 0 to 100
    icon?: string;
    experience: string;
    featured?: boolean;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  type: 'Work' | 'Education' | 'Project';
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  badgeImage?: string;
  skills: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}
