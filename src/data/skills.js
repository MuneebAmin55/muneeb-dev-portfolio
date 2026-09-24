/**
 * Modern Category-Based Technology Showcase Data
 * Structured for professional full-stack developer portfolio.
 * Removed arbitrary percentage levels and progress bars in favor of real-world categorized capabilities.
 */

export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: 'Layout',
    description:
      'Designing intuitive, responsive, and accessible client-side architectures with modern JavaScript frameworks, state management, and utility-first styling.',
    accentColor: 'blue',
    skills: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript' },
      { name: 'React.js' },
      { name: 'Redux Toolkit' },
      { name: 'Tailwind CSS' },
      { name: 'Bootstrap' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: 'Server',
    description:
      'Constructing robust asynchronous servers, microservices, secure authentication workflows, and high-performance REST APIs.',
    accentColor: 'emerald',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'Python' },
      { name: 'Django' },
      { name: 'Django REST Framework' },
      { name: 'REST APIs' },
      { name: 'JWT Authentication' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: 'Database',
    description:
      'Architecting relational database schemas, complex query pipelines, optimized indexing, and serverless PostgreSQL solutions.',
    accentColor: 'cyan',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'Neon' },
    ],
  },
  {
    id: 'tools-deployment',
    title: 'Development Tools & Deployment',
    icon: 'Wrench',
    description:
      'Streamlining version control, API testing suites, cloud media asset management, and automated continuous integration/deployment.',
    accentColor: 'purple',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
      { name: 'Postman' },
      { name: 'Vercel' },
      { name: 'Render' },
      { name: 'Cloudinary' },
    ],
  },
];

// Backwards-compatible legacy export if needed by any other module
export const skillsData = skillCategories;
