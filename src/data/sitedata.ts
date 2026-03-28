export const siteData = {
  personal: {
    name: 'Mohamed Ouallou',
    title: 'Frontend Developer',
    location: 'Tangier, Morocco',
    email: 'mohamed@example.com',
    phone: '+212600000000',
    bio: 'Frontend developer passionate about building modern, responsive, and user-friendly web applications. Currently learning full-stack development and improving my skills in React and PHP.',
    avatar: '/images/profile.jpg',
  },

  socials: [
    { platform: 'GitHub', url: 'https://github.com/yourusername' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
    { platform: 'TikTok', url: 'https://tiktok.com/@yourusername' },
  ],

  skills: [
    {
      category: 'Frontend',
      items: ['HTML', 'CSS', 'JavaScript', 'React', 'TailwindCSS'],
    },
    {
      category: 'Backend',
      items: ['PHP', 'Laravel', 'Java'],
    },
    {
      category: 'Database',
      items: ['MySQL'],
    },
    {
      category: 'Tools',
      items: ['Git', 'GitHub', 'Figma'],
    },
  ],

  projects: [
    {
      id: 1,
      title: 'Grocery Store Management',
      description:
        'A desktop application for managing products, categories, and sales using JavaFX and MySQL.',
      tech: ['Java', 'JavaFX', 'MySQL'],
      image: '/images/projects/grocery.png',
      github: 'https://github.com/yourusername/grocery-store',
      demo: '',
    },
    {
      id: 2,
      title: 'Student Management System',
      description: 'Application to manage student data with CRUD operations.',
      tech: ['Java', 'JavaFX'],
      image: '/images/projects/student.png',
      github: 'https://github.com/yourusername/student-system',
      demo: '',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description:
        'Personal portfolio built with React and modern UI components.',
      tech: ['React', 'TailwindCSS'],
      image: '/images/projects/portfolio.png',
      github: 'https://github.com/yourusername/portfolio',
      demo: 'https://yourportfolio.com',
    },
  ],

  experience: [
    {
      role: 'Frontend Developer (Learning Phase)',
      company: 'Self Learning',
      period: '2024 - Present',
      description:
        'Building personal projects, improving UI/UX skills, and learning modern frontend technologies like React.',
    },
  ],

  education: [
    {
      degree: 'Software Development',
      school: 'SoliCode',
      period: '2025 - Present',
    },
  ],

  services: [
    {
      title: 'Web Development',
      description: 'Building responsive and modern websites using React.',
    },
    {
      title: 'UI/UX Design',
      description: 'Designing clean and user-friendly interfaces.',
    },
  ],

  testimonials: [
    {
      name: 'Client Name',
      feedback: 'Great work! Very professional and fast delivery.',
    },
  ],
} as const
