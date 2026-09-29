import React from 'react';
import { cn } from '@/utils/cn';
import { Code2 } from 'lucide-react';

/**
 * High-fidelity, official brand vector icons for modern technology stack showcase.
 * All icons are lightweight inline SVGs with crisp viewboxes and accurate brand aesthetics.
 */
export function TechIcon({ name, className = 'w-6 h-6', ...props }) {
  const iconClass = cn('shrink-0 select-none transition-transform duration-200', className);

  switch (name) {
    // ---------------- Frontend ----------------
    case 'HTML5':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path d="M4.135 3L5.62 19.626L12 21.4L18.38 19.626L19.865 3H4.135Z" fill="#E34F26" />
          <path d="M12 4.545V19.674L16.98 18.293L18.214 4.545H12Z" fill="#EF652A" />
          <path d="M12 8.364H8.487L8.647 10.16H12V11.96H8.808L9.129 15.565L12 16.363V18.218L7.147 16.868L6.682 6.564H12V8.364Z" fill="#EBEBEB" />
          <path d="M12 11.96H15.192L14.891 15.334L12 16.137V17.992L16.853 16.642L17.397 10.518L17.477 9.617L17.558 8.718L17.572 8.563H12V10.364H15.352L15.21 11.96H12Z" fill="#FFFFFF" />
        </svg>
      );

    case 'CSS3':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path d="M4.135 3L5.62 19.626L12 21.4L18.38 19.626L19.865 3H4.135Z" fill="#1572B6" />
          <path d="M12 4.545V19.674L16.98 18.293L18.214 4.545H12Z" fill="#33A9DC" />
          <path d="M12 8.364H8.487L8.647 10.16H12V8.364ZM12 14.563L9.129 13.765L8.969 11.96H7.163L7.484 15.565L12 16.818V14.563Z" fill="#EBEBEB" />
          <path d="M12 8.364V6.564H17.318L17.158 8.364H12ZM16.998 10.16L16.697 13.534L12 14.837V17.092L16.853 15.742L17.477 8.718L17.397 9.617L17.417 9.385L17.477 8.718H12V10.16H16.998Z" fill="#FFFFFF" />
        </svg>
      );

    case 'JavaScript':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} xmlns="http://www.w3.org/2000/svg" {...props}>
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M6.5 17.8c.8.5 1.7.8 2.6.8 1.4 0 2.2-.7 2.2-2.1v-7.2h-2.1v7.2c0 .5-.2.8-.7.8-.5 0-.9-.2-1.3-.5l-.7 1zM13.6 18c1.2.6 2.5 1 3.7 1 2.2 0 3.7-1.1 3.7-3.1 0-1.8-1.2-2.7-2.9-3.4l-.8-.3c-1.1-.5-1.6-.9-1.6-1.6 0-.7.6-1.3 1.6-1.3.9 0 1.8.3 2.5.8l.7-1.4c-.8-.5-1.9-.8-3.1-.8-2.2 0-3.6 1.3-3.6 3 0 1.7 1.1 2.6 2.8 3.3l.8.3c1.2.5 1.8 1 1.8 1.8 0 .8-.7 1.5-1.9 1.5-1.2 0-2.3-.4-3.2-1.1l-.6 1.4z" fill="#000000" />
        </svg>
      );

    case 'React.js':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <ellipse cx="12" cy="12" rx="2.8" ry="2.8" fill="#61DAFB" />
          <ellipse cx="12" cy="12" rx="9.5" ry="3.8" stroke="#61DAFB" strokeWidth="1.4" />
          <ellipse cx="12" cy="12" rx="9.5" ry="3.8" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9.5" ry="3.8" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(120 12 12)" />
        </svg>
      );

    case 'Redux Toolkit':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <rect width="24" height="24" rx="4" fill="#764ABC" fillOpacity="0.12" />
          <path
            d="M16.1 14.5c1.4-1.2 1.9-2.9 1.5-4.5-.4-1.6-1.8-2.7-3.5-2.7h-4.3c-.4 0-.8.3-.8.8v7.8c0 .4.3.8.8.8h4.3c1.7 0 3.1-1 3.5-2.7.4-1.6-.1-3.3-1.5-4.5zm-5.4-5.6h3.4c1 0 1.9.6 2.1 1.5.3.9 0 1.9-.7 2.6-.7.6-1.7.8-2.6.7h-2.2V8.9zm2.1 6.3h-2.1v-1.5h2.1c.9 0 1.7.4 2.1 1.1.2.3.2.6 0 .9-.4.7-1.1 1.2-2.1 1.2v-1.7z"
            fill="#764ABC"
          />
          <path
            d="M12 2.5C6.75 2.5 2.5 6.75 2.5 12s4.25 9.5 9.5 9.5 9.5-4.25 9.5-9.5S17.25 2.5 12 2.5zm3.6 13.9c-.6 1.3-1.8 2.2-3.3 2.2h-3.8c-1 0-1.9-.8-1.9-1.9V7.3c0-1 .8-1.9 1.9-1.9h3.8c1.5 0 2.7.9 3.3 2.2.6 1.5.3 3.2-.7 4.3 1 1.1 1.3 2.8.7 4.3z"
            fill="#764ABC"
          />
        </svg>
      );

    case 'Tailwind CSS':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path
            d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
            fill="#06B6D4"
          />
        </svg>
      );

    case 'Bootstrap':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <rect width="24" height="24" rx="5" fill="#7952B3" />
          <path
            d="M7.5 6.2h5.5c2.1 0 3.5 1 3.5 2.6 0 1.1-.6 2-1.7 2.4 1.3.3 2.2 1.3 2.2 2.6 0 1.8-1.5 2.9-3.8 2.9H7.5V6.2zm3.1 4.1h2.1c.8 0 1.4-.4 1.4-1.1s-.6-1.1-1.4-1.1h-2.1v2.2zm0 4.5h2.4c.9 0 1.6-.4 1.6-1.2 0-.7-.7-1.2-1.6-1.2h-2.4v2.4z"
            fill="#FFFFFF"
          />
        </svg>
      );

    // ---------------- Backend ----------------
    case 'Node.js':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path d="M12 2.2L20.8 7.3V17.5L12 22.6L3.2 17.5V7.3L12 2.2Z" fill="#339933" />
          <path d="M12 4.4L18.8 8.3V16.1L12 20L5.2 16.1V8.3L12 4.4Z" fill="#5FA04E" />
          <path d="M12 7.8L15.5 9.8V13.8L12 15.8L8.5 13.8V9.8L12 7.8Z" fill="#FFFFFF" fillOpacity="0.9" />
        </svg>
      );

    case 'Express.js':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1" />
          <path
            d="M6.5 15.5l2.4-3.5-2.2-3.5h2.1l1.2 2.1 1.2-2.1h2.1l-2.2 3.5 2.4 3.5h-2.1l-1.4-2.3-1.4 2.3H6.5z"
            fill="currentColor"
          />
          <path
            d="M14.5 13.8h3.2c0 .9-.6 1.7-1.6 1.7-.9 0-1.5-.6-1.6-1.7zm1.6-3.8c-1.5 0-2.6 1.1-2.6 2.8 0 1.6 1.1 2.8 2.8 2.8 1.1 0 2.1-.6 2.5-1.5h-1.4c-.2.4-.6.6-1.1.6-.8 0-1.4-.5-1.5-1.3h4.1c0-.2.1-.4.1-.6 0-1.6-1.1-2.8-2.4-2.8z"
            fill="currentColor"
          />
        </svg>
      );

    case 'Python':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path
            d="M11.91 2c-5.18 0-4.86 2.25-4.86 2.25l.01 2.33h4.94v.7H5.06S2 6.93 2 12.16c0 5.24 2.67 5.03 2.67 5.03h1.6v-2.24s-.09-2.67 2.62-2.67h4.48s2.54.04 2.54-2.48V4.54s.37-2.54-4.06-2.54zm-2.68 1.48a.86.86 0 1 1 0 1.72.86.86 0 0 1 0-1.72z"
            fill="#3776AB"
          />
          <path
            d="M12.09 22c5.18 0 4.86-2.25 4.86-2.25l-.01-2.33h-4.94v-.7h6.94S22 17.07 22 11.84c0-5.24-2.67-5.03-2.67-5.03h-1.6v2.24s.09 2.67-2.62 2.67h-4.48s-2.54-.04-2.54 2.48v5.26s-.37 2.54 4.06 2.54zm2.68-1.48a.86.86 0 1 1 0-1.72.86.86 0 0 1 0 1.72z"
            fill="#FFD43B"
          />
        </svg>
      );

    case 'Django':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <rect width="24" height="24" rx="4" fill="#092E20" />
          <path
            d="M12.92 5.5v7.24c-.58.12-1.07.16-1.57.16-1.53 0-2.4-.73-2.4-2.02 0-1.28.84-2.1 2.23-2.1.53 0 .97.09 1.25.18V7.2a4.42 4.42 0 0 0-1.37-.2c-2.4 0-3.9 1.43-3.9 3.77 0 2.29 1.48 3.7 3.82 3.7.67 0 1.34-.09 1.94-.28v2.11h1.79V5.5h-1.79zm3.58 3.51h1.79v7.71h-1.79V9.01zm0-3.51h1.79v2.11h-1.79V5.5z"
            fill="#44B78B"
          />
        </svg>
      );

    case 'Django REST Framework':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <rect width="24" height="24" rx="4" fill="#A30000" />
          <rect x="5.5" y="6" width="5.5" height="5" rx="1" fill="#FFFFFF" fillOpacity="0.95" />
          <rect x="13" y="6" width="5.5" height="5" rx="1" fill="#FFFFFF" fillOpacity="0.95" />
          <rect x="5.5" y="13" width="5.5" height="5" rx="1" fill="#FFFFFF" fillOpacity="0.95" />
          <rect x="13" y="13" width="5.5" height="5" rx="1" fill="#FFFFFF" fillOpacity="0.45" />
        </svg>
      );

    case 'REST APIs':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <rect width="24" height="24" rx="4" fill="#0284C7" />
          <path
            d="M8 12h8m-8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm8 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm-4-4v8m0-8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 8a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
            stroke="#FFFFFF"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'JWT Authentication':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <rect width="24" height="24" rx="4" fill="#18181B" />
          <path
            d="M12 3.8C7.5 3.8 3.8 7.5 3.8 12s3.7 8.2 8.2 8.2 8.2-3.7 8.2-8.2S16.5 3.8 12 3.8zm0 14.8c-3.6 0-6.6-3-6.6-6.6s3-6.6 6.6-6.6 6.6 3 6.6 6.6-3 6.6-6.6 6.6z"
            fill="#FB015B"
          />
          <circle cx="8" cy="12" r="1.8" fill="#FB015B" />
          <circle cx="12" cy="12" r="1.8" fill="#D63AFF" />
          <circle cx="16" cy="12" r="1.8" fill="#00B9F1" />
        </svg>
      );

    // ---------------- Databases ----------------
    case 'PostgreSQL':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <circle cx="12" cy="12" r="10" fill="#336791" />
          <path
            d="M16.9 10.8c-.3-.8-.9-1.5-1.7-1.9-.3-.2-.7-.3-1.1-.3-.6 0-1.1.2-1.5.5-.3-.3-.7-.6-1.1-.7-.7-.3-1.4-.2-2 .1-.6.3-1 .8-1.2 1.4-.3.9-.2 2 .4 2.8.4.6 1 1 1.7 1.2v2.3c0 .5.4.9.9.9s.9-.4.9-.9v-2.1c.3.1.6.1.9.1.9 0 1.7-.4 2.3-1 .8-.6 1.4-1.4 1.5-2.3z"
            fill="#FFFFFF"
          />
          <path
            d="M8.8 11.2c.2-.5.5-.9 1-.1.4.6.9 1 1.5 1.2v2.1c-.6-.2-1.1-.6-1.5-1.1-.7-.6-.9-1.4-1-2.1z"
            fill="#A8C7DF"
          />
        </svg>
      );

    case 'MySQL':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <rect width="24" height="24" rx="4" fill="#00758F" />
          <path
            d="M18.2 15.2c-1.1.9-2.7 1.4-4.3 1.4-3.3 0-5.8-2-6.4-5-.2-.8-.2-1.6 0-2.3.3-.8.8-1.4 1.4-1.8.8-.5 1.7-.7 2.6-.5 1.1.2 2.2.9 2.8 1.8l-1.2 1c-.5-.7-1.1-1-1.9-1.1-.6-.1-1.1 0-1.6.3-.4.3-.7.7-.8 1.1-.1.5-.1 1 .1 1.6.4 2.1 2.3 3.5 4.6 3.5 1.1 0 2.3-.4 3.1-.9l1.2 1z"
            fill="#F29111"
          />
          <path
            d="M14.5 7.8c.8.4 1.4 1 1.9 1.7l-1.2 1c-.4-.6-.8-1-1.4-1.2l.7-1.5z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'Neon':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <rect width="24" height="24" rx="4" fill="#050C14" />
          <path d="M5.5 18V6l5 6.5V6h3v12l-5-6.5V18h-3zm10.5 0V6h2.5v12H16z" fill="#00E599" />
        </svg>
      );

    // ---------------- Tools & Deployment ----------------
    case 'Git':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path
            d="M21.7 11.2l-8.9-8.9c-.8-.8-2.1-.8-2.8 0L8.2 4.1l3.5 3.5c.8-.3 1.8-.1 2.4.5.6.6.8 1.6.5 2.4l3.4 3.4c.8-.3 1.8-.1 2.4.5.8.8.8 2.1 0 2.8-.8.8-2.1.8-2.8 0-.6-.6-.8-1.6-.5-2.4L13.7 11v5.1c.2.1.5.3.7.5.8.8.8 2.1 0 2.8-.8.8-2.1.8-2.8 0-.8-.8-.8-2.1 0-2.8.2-.2.5-.4.7-.5V10.8c-.2-.1-.5-.3-.7-.5-.6-.6-.8-1.6-.5-2.4L7.6 4.4 2.3 9.7c-.8.8-.8 2.1 0 2.8l8.9 8.9c.8.8 2.1.8 2.8 0l7.7-7.7c.8-.7.8-2 0-2.5z"
            fill="#F05032"
          />
        </svg>
      );

    case 'GitHub':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      );

    case 'VS Code':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path d="M17.6 2.4c-.4-.2-.8-.1-1.1.1L8.7 8.7 5.1 6c-.4-.3-.9-.2-1.2.1l-1.6 1.5c-.3.3-.3.8 0 1.1L5.8 12l-3.5 3.3c-.3.3-.3.8 0 1.1l1.6 1.5c.3.3.8.4 1.2.1l3.6-2.7 7.8 6.2c.3.2.7.3 1.1.1.4-.2.6-.5.6-.9V3.3c0-.4-.2-.7-.6-.9z" fill="#007ACC" />
          <path d="M18.2 3.3v17.4L9.8 14.1l-4.7 3.9 13.1-14.7z" fill="#1F9CF0" opacity="0.6" />
          <path d="M18.2 3.3L8.7 10.9l-3.6-2.7 13.1-4.9z" fill="#0065A9" opacity="0.8" />
          <path d="M18.2 20.7L8.7 13.1l-3.6 2.7 13.1 4.9z" fill="#0065A9" opacity="0.8" />
        </svg>
      );

    case 'Postman':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <circle cx="12" cy="12" r="10" fill="#FF6C37" />
          <path
            d="M16.8 9.2c-.3-.4-.8-.7-1.4-.8l-4.2-.6c-.6-.1-1.2.2-1.5.7l-1.8 3c-.3.5-.2 1.1.2 1.5l2.4 2.2c.4.4 1 .4 1.4.1l4.6-3.8c.5-.4.6-1.1.3-1.6l-.0-.7z"
            fill="#FFFFFF"
          />
          <circle cx="14.8" cy="10.8" r="1.1" fill="#FF6C37" />
        </svg>
      );

    case 'Vercel':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path d="M12 2L23 21H1L12 2Z" />
        </svg>
      );

    case 'Render':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <rect width="24" height="24" rx="4" fill="#0F172A" />
          <path
            d="M12 5C8.134 5 5 8.134 5 12c0 3.866 3.134 7 7 7s7-3.134 7-7c0-3.866-3.134-7-7-7zm0 2.5a4.5 4.5 0 0 1 4.5 4.5h-4.5V7.5zM7.5 12A4.5 4.5 0 0 1 12 7.5v4.5H7.5zm0 0H12v4.5A4.5 4.5 0 0 1 7.5 12zm9 0a4.5 4.5 0 0 1-4.5 4.5V12h4.5z"
            fill="#46E3B7"
          />
        </svg>
      );

    case 'Cloudinary':
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path
            d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
            fill="#3448C5"
          />
          <path
            d="M12 9a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
            fill="#FFFFFF"
            opacity="0.9"
          />
        </svg>
      );

    default:
      return <Code2 className={iconClass} {...props} />;
  }
}
