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
  icon: 'github' | 'linkedin' | 'twitter' | 'dribbble'
}

export const profile = {
  name: 'Mahmoud',
  surname: 'Assegaf',
  role: 'Fullstack Developer',
  tagline:
    'I ship production-ready apps with a focus on performance, accessibility, and polished UX.',
  heroHeadline: {
    lead: 'I build',
    emphasis: 'fast, scalable',
    tail: 'web experiences.',
  },
  email: 'hello@example.com',
  location: 'Remote / Worldwide',
  bio: `I'm a fullstack developer who bridges product thinking with solid engineering. I enjoy turning ambiguous problems into clear systems, clean APIs, and interfaces that feel effortless.`,
  resumeUrl: '#',
  portraitSrc: '/avatar-placeholder.svg',
}

export const navItems: NavItem[] = [
  { label: 'projects', href: '#projects' },
  { label: 'about', href: '#about' },
  { label: 'contact', href: '#contact' },
  { label: 'journal', href: '#journal' },
]

export const heroTags = [
  { label: 'UI/UX craft', position: 'top-0 -right-2 sm:right-0' },
  { label: '5+ years exp', position: 'bottom-8 -left-4 sm:left-0' },
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

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'Mahmoud shipped our dashboard ahead of schedule and the UX finally matches our brand.',
    name: 'Sarah Chen',
    role: 'Product Lead, Finscale',
  },
  {
    id: 't2',
    quote:
      'Rare mix: communicates like a PM, codes like a senior, and cares about performance.',
    name: 'James Okafor',
    role: 'CTO, Northwind Labs',
  },
  {
    id: 't3',
    quote:
      'Our Lighthouse scores jumped double digits after the refactor. Highly recommend.',
    name: 'Elena Ruiz',
    role: 'Engineering Manager',
  },
  {
    id: 't4',
    quote:
      'Clear documentation, thoughtful API design, and zero drama across the engagement.',
    name: 'Marcus Webb',
    role: 'Founder, Studio Glyph',
  },
]

export const experience: ExperienceEntry[] = [
  {
    id: 'e1',
    title: 'Senior Fullstack Engineer',
    organization: 'Remote SaaS',
    period: '2022 — Present',
    description:
      'Led feature squads across React and Node services, CI/CD hardening, and design-system adoption.',
  },
  {
    id: 'e2',
    title: 'Fullstack Developer',
    organization: 'Digital Agency',
    period: '2019 — 2022',
    description:
      'Built marketing sites and custom admin tools for clients in fintech and e-commerce.',
  },
  {
    id: 'e3',
    title: 'B.Sc. Computer Science',
    organization: 'University',
    period: '2015 — 2019',
    description:
      'Coursework in algorithms, databases, and human-computer interaction.',
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
      { name: 'PostgreSQL' },
      { name: 'REST & GraphQL' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    items: [
      { name: 'Docker' },
      { name: 'GitHub Actions' },
      { name: 'Figma' },
      { name: 'AWS' },
    ],
  },
]

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
  { label: 'Dribbble', href: 'https://dribbble.com', icon: 'dribbble' },
]
