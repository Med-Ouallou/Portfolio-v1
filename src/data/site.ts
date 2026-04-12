export type NavItem = { label: string; href: string }

export type Project = {
  id: string
  title: string
  description: string
  image: string
  tech: string[]
  liveUrl?: string
  caseStudyUrl?: string
}

export type Testimonial = {
  id: string
  quote: string
  name: string
  role: string
}

export type ExperienceEntry = {
  id: string
  title: string
  organization: string
  period: string
  description: string
}

export type SkillItem = { name: string }
export type SkillCategory = {
  id: string
  title: string
  items: SkillItem[]
}

export type SocialLink = {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'instagram' | 'email'
}

export const profile = {
  name: 'Mohamed',
  surname: 'Ouallou',
  role: 'Fullstack Developer',
  tagline:
    'I ship production-ready apps with a focus on performance, accessibility, and polished UX.',
  heroHeadline: {
    lead: 'I build',
    emphasis: 'fast, scalable',
    tail: 'web experiences.',
  },
  email: 'mouallou279@gmail.com',
  whatsapp: '212776440786',
  location: 'Remote / Worldwide',
  bio: `I’m Mohamed Ouallou, a Full-Stack Web Developer based in Tangier, Morocco. I build modern, high-performance web applications and turn ideas into real digital products.
With a strong foundation in backend development, I work with React, Laravel, Node.js and APIs to create scalable and user-friendly solutions. I’m passionate about clean code, great UI/UX, and continuous learning.`,
  resumeUrl: '#',
  portraitSrc: '/img-2.jpg',
}

export const navItems: NavItem[] = [
  { label: 'home', href: '#hero' },
  { label: 'about', href: '#about' },
  { label: 'stack', href: '#stack' },
  { label: 'projects', href: '#projects' },
  { label: 'experience', href: '#experience' },
  { label: 'contact', href: '#contact' },
]

export const heroTags = [
  { label: 'UI/UX craft', position: 'top-0 -right-2 sm:right-0' },
  { label: '2+ years exp', position: 'bottom-8 -left-4 sm:left-0' },
  { label: 'Frontend & API', position: 'top-1/3 -left-6 sm:-left-8' },
]

export const logoRow = [
  'Acme',
  'Northwind',
  'Globex',
  'Umbrella',
  'Stark',
  'Wayne',
]

export const projects: Project[] = [
  {
    id: '1',
    title: 'Crypto trading dashboard',
    description:
      'Real-time portfolio analytics, risk widgets, and low-latency charts for active traders.',
    image:
      'https://images.unsplash.com/photo-1642543499460-20d28c886b3b?w=1200&q=80&auto=format&fit=crop',
    tech: ['React', 'TypeScript', 'Node.js', 'WebSockets'],
    liveUrl: '#',
  },
  {
    id: '2',
    title: 'Team project hub',
    description:
      'Kanban, milestones, and automations that keep distributed teams aligned without noise.',
    image:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&q=80&auto=format&fit=crop',
    tech: ['Next.js', 'Tailwind', 'PostgreSQL'],
    liveUrl: '#',
    caseStudyUrl: '#',
  },
  {
    id: '3',
    title: 'Analytics control center',
    description:
      'Unified funnels, cohort exploration, and exportable reports for growth teams.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop',
    tech: ['React', 'D3', 'Python'],
    liveUrl: '#',
  },
  {
    id: '4',
    title: 'Indie game studio site',
    description:
      'Cinematic marketing site with CMS-driven releases, press kit, and newsletter.',
    image:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80&auto=format&fit=crop',
    tech: ['Astro', 'Contentful', 'Vercel'],
    liveUrl: '#',
  },
]


export const experience: ExperienceEntry[] = [
  {
    id: 'e1',
    title: 'Full-Stack Web Developer (In Progress)',
    organization: 'SoliCode - Bootcamp Training Center',
    period: '2025 — Present',
    description:
      'Training in modern web technologies including React, PHP, APIs, and working in Agile teams on real-world projects.',
  },
  {
    id: 'e2',
    title: 'Specialized Technician in IT Development',
    organization: 'MIAGE TANGER',
    period: '2023 — 2025',
    description:
      'Focused on backend development, MVC architecture, database design, and building desktop applications using Java and JavaFX.',
  },
  {
    id: 'e3',
    title: 'Baccalaureate in Physical Sciences',
    organization: 'Allal Fassi High School',
    period: '2022 — 2023',
    description:
      '',
  },
]

export const skillCategories: SkillCategory[] = [
  {
    id: 'fe',
    title: 'Frontend',
    items: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Next.js' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    id: 'be',
    title: 'Backend',
    items: [
      { name: 'Node.js' },
      { name: 'Laravel' },
      { name: 'MySQL' },
      { name: 'REST API' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    items: [
      { name: 'Docker' },
      { name: 'Git - GitHub' },
      { name: 'Figma' },
      { name: 'AI Tools' },
      { name: 'VS Code' },
    ],
  },
]

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/Med-Ouallou', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohamed-ouallou-b3a46a28b/', icon: 'linkedin' },
  { label: 'Instagram', href: 'https://www.instagram.com/med.ouallou/', icon: 'instagram' },
  { label: 'Email', href: 'mailto:mouallou279@gmail.com', icon: 'email' },
]
