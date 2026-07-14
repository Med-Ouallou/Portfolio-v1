export type NavItem = { label: string; href: string }

export type Project = {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  screenshots: string[]
  tech: string[]
  features: string[]
  challenges: string
  role: string
  liveUrl?: string
  githubUrl?: string
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
  bio: `I'm Mohamed Ouallou, a Full-Stack Web Developer based in Tangier, Morocco. I build modern, high-performance web applications and turn ideas into real digital products.
With a strong foundation in frontend and backend development, I work with React, Laravel, Node.js and APIs to create scalable and user-friendly solutions. I'm passionate about clean code, great UI/UX, and continuous learning.`,
  resumeUrl: '/Mohamed_Ouallou_Resume.pdf',
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
    id: 'dentist-website-dr-ghali',
    title: 'Cabinet Dentaire Dr. Ghali',
    description:
      'A premium multidisciplinary dental clinic website featuring interactive before/after transformation sliders, a rich photo gallery, and online booking.',
    longDescription:
      'A high-performance showcase website built for Dr. Benjebara Ghali, a multidisciplinary dental clinic based in Tangier, Morocco. The platform integrates interactive before/after smile comparison sliders, a responsive gallery of state-of-the-art clinic equipment, and direct communication channels to streamline patient acquisition and appointment booking.',
    image:
      '/ProjectPictures/dr-1.jpg',
    screenshots: [
      '/ProjectPictures/dr-1.jpg',
      '/ProjectPictures/dr-2.jpg',
      '/ProjectPictures/dr-3.jpg',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Interactive before/after sliders comparing clinical smile restorations',
      'Custom image optimization for high-resolution clinical photographs',
      'Responsive design with localized language toggling',
      'Detailed services showcase covering implants, orthodontics, and cosmetic surgery',
      'Online appointment call-to-actions with direct WhatsApp and phone integration',
    ],
    challenges:
      'Optimizing image delivery for high-quality clinical photographs and before/after transformation sliders was a primary challenge. Implemented Next.js Image optimization, lazy loading, and fine-tuned responsive layout structures to achieve perfect performance score (LCP) while presenting beautiful, high-resolution aesthetic medical imagery.',
    role: 'Full-stack Developer',
    liveUrl: 'https://dentist-website-dr-ghali.vercel.app/',
    githubUrl: 'https://github.com/Med-Ouallou/dentist-website',
  },
  {
    id: 'intelligent-recruitment',
    title: 'Intelligent Recruitment',
    description:
      'AI-powered recruitment platform featuring bidirectional matching, Explainable AI (XAI), and proof-based hiring via GitHub.',
    longDescription:
      'An innovative AI-powered recruitment platform that enables bidirectional candidate-role matching. By integrating Explainable AI (XAI), the platform provides transparency into matching recommendations. It features proof-based hiring through Git & GitHub integration to verify developers\' hands-on capabilities, backed by automated workflows built on n8n.',
    image:
      '/ProjectPictures/iksa-2.jpg',
    screenshots: [
      '/ProjectPictures/iksa-1.jpg',
      '/ProjectPictures/iksa-2.jpg',
      '/ProjectPictures/iksa-3.jpg',
      '/ProjectPictures/iksa-4.jpg',
      '/ProjectPictures/iksa-5.jpg',
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'MySQL', 'Prisma', 'NLP', 'n8n'],
    features: [
      'Bidirectional AI-powered candidate and job role matching',
      'Explainable AI (XAI) engine showing transparency for recommended matches',
      'Proof-based hiring via direct Git and GitHub profile integration',
      'Automated recruitment workflows and orchestration built using n8n',
      'Detailed dashboard for recruiters to analyze skills and profiles',
    ],
    challenges:
      'Designing an explainable matching algorithm that provides human-readable reasons for scoring candidate profiles was a key challenge. This was solved by integrating NLP parser insights and structured profile attributes, translating complex vector match scores into clear, verifiable explanations for recruiters.',
    role: 'Full-stack Developer',
    liveUrl: '#',
    githubUrl: 'https://github.com/BenTaleb-Mehdi/intelligent-recruitment',
  },
  {
    id: 'AI Agency',
    title: 'AI Agency',
    description:
      'AI Agency is a platform that provides AI-powered solutions for businesses.',
    longDescription:
      'AI Agency is a web platform that showcases AI-related services for businesses. It was built as a learning project to practice React fundamentals, component structure, and responsive UI design.',
    image:
      '/ProjectPictures/reactProject.jpg',
    screenshots: [
      '/ProjectPictures/reactProject.jpg',
    ],
    tech: ['React', 'JavaScript', 'Vite', 'npm', 'React Hot Toast', 'Motion 12', 'Tailwind CSS 4', 'Preline UI'],
    features: [
      'Built reusable React components using props and state',
      'Implemented basic UI layout with responsive design',
      'Handled user interactions using event handlers',
      'Managed component state using useState hook',
      'Structured project with clean component hierarchy',
    ],
    challenges:
      'The main challenge was learning how to manage React state efficiently while keeping the UI responsive. I faced issues with unnecessary re-renders and learned how to optimize component updates using proper state structure and React best practices.',
    role: 'Full-Stack Developer',
    liveUrl: 'https://ai-aagency.netlify.app/',
    githubUrl: 'https://github.com/Med-Ouallou/React/tree/project-1/project-1',
  },
  {
    id: 'Restaurant website management',
    title: 'Restaurant Website Management',
    description:
      'A restaurant management web application built with Laravel to learn how to consume API.',

    longDescription:
      'This project is a restaurant management system built with Laravel. It was developed as a learning project to practice backend fundamentals including authentication, authorization, and role management. The project also includes UI integration using Laravel Blade and Alpine.js for interactive components.',

    image:
      '/ProjectPictures/resto-1.jpg',

    screenshots: [
      '/ProjectPictures/resto-1.jpg',
      '/ProjectPictures/resto-2.jpg',
      '/ProjectPictures/resto-3.jpg',
      '/ProjectPictures/resto-4.jpg',
    ],

    tech: ['REST API', 'Laravel', 'Blade', 'MySQL', 'Spatie Permission', 'Alpine.js', 'authentication/authorization'],

    features: [
      'User authentication and registration system',
      'Role-based access control using Spatie Permission',
      'Admin dashboard for managing restaurant data',
      'Menu and order management system',
      'Interactive UI components using Alpine.js',
    ],

    challenges:
      'The main challenge was implementing authentication and role-based authorization using Laravel. I learned how to structure permissions with Spatie and manage secure access for different user roles like admin and staff.',

    role: 'Backend Developer (Laravel)',
    liveUrl: '#',
    githubUrl: 'https://github.com/Med-Ouallou/projet-finale-PFF/tree/develop/restaurant-system',
  }
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
