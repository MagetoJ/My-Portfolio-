export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: 'Beginner' | 'Learning' | 'Proficient' | 'Expert';
  icon: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Other';
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}