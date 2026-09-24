/**
 * Skills & Technologies Data Configuration
 * Clean, text-only technology category layout.
 * No arbitrary percentages, proficiency levels, or progress indicators.
 */

export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React.js',
      'Redux Toolkit',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    skills: [
      'Node.js',
      'Express.js',
      'Python',
      'Django',
      'Django REST Framework',
      'REST APIs',
      'JWT',
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    skills: [
      'PostgreSQL',
      'MySQL',
      'Neon',
    ],
  },
  {
    id: 'tools-deployment',
    title: 'Tools & Deployment',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Postman',
      'Vercel',
      'Render',
      'Cloudinary',
    ],
  },
];

export const skillsData = skillCategories;
