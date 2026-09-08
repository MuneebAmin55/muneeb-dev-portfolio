# Muneeb Amin — Full Stack Developer Portfolio

An enterprise-grade, high-performance developer portfolio and architecture showcase built for **Muneeb Amin (Full Stack Developer)**. Designed with Apple, Vercel, and Linear aesthetics featuring dark-mode glassmorphism, responsive micro-interactions, hardware-accelerated Framer Motion animations, WCAG 2.1 AA accessibility compliance, and production-tuned Vite bundling.

---

## 🚀 Live Demo & Preview

- **Production URL**: [https://muneebamin.dev](https://muneebamin.dev) *(Custom domain)*
- **Default Local Port**: `http://localhost:5173/` or `http://localhost:3000/`

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Core Framework** | [React 19](https://react.dev/), [Vite 6](https://vitejs.dev/) |
| **Routing** | [React Router v7](https://reactrouter.com/) (Browser router, lazy loading, route code splitting) |
| **Styling & System** | [Tailwind CSS 3](https://tailwindcss.com/), PostCSS, CSS Variables, Glassmorphism |
| **Component Variants** | [Class Variance Authority (CVA)](https://cva.style/), `clsx`, `tailwind-merge` |
| **Motion & Physics** | [Framer Motion 12](https://www.framer.com/motion/) (Hardware-accelerated transforms, `prefers-reduced-motion` aware) |
| **Icons** | [Lucide React](https://lucide.dev/) + Custom curated SVG components |
| **Form Handling** | [React Hook Form](https://react-hook-form.com/) with regex validation & ARIA error announcements |
| **Email API** | [@emailjs/browser](https://www.emailjs.com/) for zero-backend client-side email dispatch |
| **SEO & Meta** | [React Helmet Async](https://github.com/staylor/react-helmet-async), JSON-LD Person Schema, Open Graph 1200x630 |
| **Deployment** | [Vercel](https://vercel.com/) with custom `vercel.json` SPA rewrites & security headers |

---

## 📁 Project Architecture & Clean Folder Structure

```
my-portfolio/
├── public/
│   ├── images/                 # Official project screenshots & professional portrait
│   │   ├── ecommerce-platform.png
│   │   ├── martpos-dashboard.png
│   │   ├── muneeb-amin.jpg
│   │   └── pawpal-dashboard.png
│   ├── favicon.svg             # Vector monogram SVG favicon
│   ├── og-image.png            # 1200x630 Open Graph preview image
│   ├── og-image.svg            # Vector fallback Open Graph card
│   ├── robots.txt              # Search crawler access directives
│   └── sitemap.xml             # XML sitemap for search engines
├── src/
│   ├── components/
│   │   ├── common/             # Shared atoms (AnimatedBackground, ErrorBoundary, Container, ResumeModal)
│   │   ├── feedback/           # Loaders & progress (BackToTop, LoadingScreen, ScrollProgress, SuspenseLoader)
│   │   ├── layout/             # Structural frame (MainLayout, Navbar, Footer, PageWrapper)
│   │   ├── sections/           # Feature sections (Hero, About, Skills, Projects, Experience, Education, GitHub, Contact)
│   │   └── ui/                 # Accessible primitives (Button, Card, Badge, Modal, ThemeToggle)
│   ├── constants/              # Navigation links, routes, SEO defaults, theme tokens
│   ├── context/                # ThemeContext (Dark / Light mode state provider)
│   ├── data/                   # Structured data models (personal, projects, skills, experience, education, github)
│   ├── hooks/                  # Custom hooks (useTheme, useScrollPosition, useScrollProgress, useMediaQuery, useClickOutside)
│   ├── pages/                  # Route views (HomePage, AboutPage, ProjectsPage, ExperiencePage, ContactPage, NotFoundPage)
│   ├── routes/                 # AppRouter with errorElement ErrorBoundary & Suspense
│   ├── utils/                  # Utility functions (cn, animations, email, formatters)
│   ├── App.jsx                 # Top-level composition & Providers
│   ├── index.css               # Design tokens, Tailwind directives, glassmorphism utilities
│   └── main.jsx                # React 19 createRoot DOM entry
├── .env.example                # Environment variable configuration template
├── package.json                # Dependencies, project scripts, and metadata
├── tailwind.config.js          # Extended color palette, shadows, keyframes
├── vercel.json                 # Vercel SPA rewrites & HTTP security headers
└── vite.config.js              # Rollup manual chunking & path aliasing
```

---

## 📦 Required Dependencies

All packages are configured and locked in `package.json`:

### Production Dependencies (`dependencies`)
```json
{
  "@emailjs/browser": "^4.4.1",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "framer-motion": "^12.4.7",
  "lucide-react": "^1.16.0",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-helmet-async": "^2.0.5",
  "react-hook-form": "^7.54.2",
  "react-router-dom": "^7.1.5",
  "tailwind-merge": "^3.0.1"
}
```

### Development Dependencies (`devDependencies`)
```json
{
  "@vitejs/plugin-react": "^4.3.4",
  "autoprefixer": "^10.4.20",
  "postcss": "^8.5.2",
  "tailwindcss": "^3.4.17",
  "vite": "^6.1.0"
}
```

---

## ⚙️ Installation & Setup Guide

### 1. Prerequisites
- **Node.js**: v18.18.0 or v20+ recommended (Node 22 / 25 fully supported)
- **Package Manager**: npm (v9+) or pnpm / yarn

### 2. Clone the Repository
```bash
git clone https://github.com/muneebamin/my-portfolio.git
cd my-portfolio
```

### 3. Install All Dependencies
Run the standard clean installation command:
```bash
npm install
```

*(Optional) If using strict dependency resolution:*
```bash
npm ci
```

---

## 🔑 Environment Variables Setup

1. Duplicate `.env.example` to create your local `.env`:
```bash
cp .env.example .env
```

2. Fill in your EmailJS credentials (free from [EmailJS Dashboard](https://dashboard.emailjs.com/)):
```env
VITE_SITE_URL=https://muneebamin.dev
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

> **Note**: If environment variables are omitted, the contact form automatically falls back to safe client-side simulated delivery mode with zero application crashes.

---

## 💻 Development & Build Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts Vite local development server with instant Hot Module Replacement (HMR). |
| `npm run build` | Compiles optimized, minified production bundle to `/dist` with zero Rollup warnings. |
| `npm run preview` | Locally serves the compiled production build from `/dist` to test production performance. |

---

## 🚢 Deployment Guide for Vercel

### Method 1: Vercel Web Dashboard (Recommended)
1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Navigate to [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New Project"**.
3. Import your portfolio repository.
4. Configure the Project Settings:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. In **Environment Variables**, add:
   - `VITE_SITE_URL` = `https://your-domain.vercel.app`
   - `VITE_EMAILJS_SERVICE_ID` = `your_service_id`
   - `VITE_EMAILJS_TEMPLATE_ID` = `your_template_id`
   - `VITE_EMAILJS_PUBLIC_KEY` = `your_public_key`
6. Click **Deploy**. Vercel will automatically build and serve your site globally via CDN edge nodes.

### Method 2: Vercel CLI
```bash
# 1. Install Vercel CLI globally
npm i -g vercel

# 2. Login to your Vercel account
vercel login

# 3. Deploy to production
vercel --prod
```

### Why `vercel.json` is Included
The included `vercel.json` ensures:
1. **Single Page Application (SPA) Routing**: Navigating directly to `/projects`, `/about`, or `/experience` serves `index.html` without returning HTTP 404 errors.
2. **Security Headers**: Injects `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, and `Permissions-Policy`.
3. **Asset Caching**: Sets immutable 1-year cache headers on hashed Vite chunks for maximum Lighthouse performance.

---

## ♿ Accessibility & Performance Standards

- **WCAG 2.1 AA Compliant**: High contrast ratios, accessible form inputs with `aria-invalid` & `aria-describedby`, descriptive icon labels, and keyboard-navigable dialogs.
- **Motion Accessibility**: Continuously respects `prefers-reduced-motion` media queries across background drifts, floating badges, and page transitions.
- **Image Optimization**:
  - Above-the-fold portrait: `fetchpriority="high"`, explicit `width="400"` & `height="400"` to eliminate Cumulative Layout Shift (CLS).
  - Project showcase cards: `loading="lazy"` and `decoding="async"`.
- **Fault-Tolerant Error Boundaries**: Root React Error Boundary catches unexpected exceptions and provides non-destructive recovery actions without white-screening.

---

## 👤 Developer Contact

- **Name**: Muneeb Amin
- **Role**: Full Stack Developer
- **GitHub**: [@muneebamin](https://github.com/muneebamin)
- **LinkedIn**: [linkedin.com/in/muneebamin](https://linkedin.com/in/muneebamin)
- **Email**: [muneeb.amin@example.com](mailto:muneeb.amin@example.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
#   m u n e e b - d e v - p o r t f o l i o  
 