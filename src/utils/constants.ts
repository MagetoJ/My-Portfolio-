import { Project, Skill, SocialLink } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform - LethaShop",
    description: "Full-stack e-commerce solution built with React, Next.js, and Django REST API. Features include user authentication, payment integration, and admin dashboard. Specializes in handcrafted leather goods with modern design.",
    technologies: ["React", "Next.js", "Django", "PostgreSQL", "Stripe", "Tailwind CSS"],
    imageUrl: "/projects/lethashop.png",
    liveUrl: "https://lethashop.com/",
    featured: true
  },
  {
    id: 2,
    title: "CNJ Safaris",
    description: "Tour and travels website for authentic African safari experiences. Features tour packages, booking system, and wildlife adventure planning with professional local guides and eco-friendly transportation.",
    technologies: ["Vue.js", "Django", "WebSockets", "PostgreSQL", "Redis"],
    imageUrl: "/projects/cnj-safaris.png",
    liveUrl: "https://cnjsafaris.com/",
    featured: true
  },
  {
    id: 3,
    title: "StatBricks Website",
    description: "Modern website for StatBricks - democratizing data analytics. Built with focus on accessibility, performance, and user experience to showcase data analytics services and training programs.",
    technologies: ["TypeScript", "React", "Chart.js", "Data Visualization"],
    imageUrl: "/projects/statbricks.png",
    liveUrl: "https://www.statbricks.com/",
    featured: false
  },
  {
    id: 4,
    title: "Big Fama",
    description: "Agriculture technology platform focused on achieving Zero Hunger through sustainable farming practices. Features modern solutions for food security and efficient water resource management.",
    technologies: ["React", "Next.js", "Agriculture Tech", "Sustainability"],
    imageUrl: "/projects/big-fama.png",
    liveUrl: "https://bigfama.co.ke/",
    featured: false
  }
];

export const skills: Skill[] = [
  { name: "JavaScript", level: "Expert", icon: "Code2", category: "Frontend" },
  { name: "TypeScript", level: "Expert", icon: "FileCode", category: "Frontend" },
  { name: "React", level: "Expert", icon: "Atom", category: "Frontend" },
  { name: "Next.js", level: "Expert", icon: "Zap", category: "Frontend" },
  { name: "Vue.js", level: "Proficient", icon: "Triangle", category: "Frontend" },
  { name: "Tailwind CSS", level: "Expert", icon: "Palette", category: "Frontend" },
  { name: "HTML5/CSS3", level: "Expert", icon: "Layout", category: "Frontend" },
  
  { name: "Django", level: "Expert", icon: "Server", category: "Backend" },
  { name: "Python", level: "Expert", icon: "Code", category: "Backend" },
  { name: "Node.js", level: "Proficient", icon: "Cpu", category: "Backend" },
  { name: "PostgreSQL", level: "Proficient", icon: "Database", category: "Backend" },
  { name: "REST APIs", level: "Expert", icon: "Globe", category: "Backend" },
  
  { name: "Git", level: "Expert", icon: "GitBranch", category: "Tools" },
  { name: "Docker", level: "Proficient", icon: "Package", category: "Tools" },
  { name: "AWS", level: "Proficient", icon: "Cloud", category: "Tools" },
  { name: "CI/CD", level: "Proficient", icon: "GitCommit", category: "Tools" }
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/MagetoJ", icon: "Github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/jabez-mochiemo-5ab313366", icon: "Linkedin" },
  { name: "Twitter", url: "https://x.com/kaptain_kiddo", icon: "Twitter" },
  { name: "Email", url: "mailto:jmageto@statbricks.com", icon: "Mail" }
];