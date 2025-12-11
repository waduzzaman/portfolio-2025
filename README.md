# Next.js Portfolio

A modern portfolio website built with **Next.js 14**, **React 18**, **TypeScript**, and **Tailwind CSS**.

## Features

- ⚡ Fast SSR and SSG with Next.js
- 🎨 Styled with Tailwind CSS
- 🌓 Dark mode support with ThemeContext
- 📱 Fully responsive design
- 🔤 TypeScript for type safety
- 🚀 Production-ready

## Project Structure

```
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with ThemeProvider
│   └── page.tsx             # Home page
├── src/
│   ├── components/          # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Testimonials.tsx
│   ├── contexts/            # React contexts
│   │   └── ThemeContext.tsx # Light/dark mode
│   ├── App.tsx              # Main app component
│   └── index.css            # Tailwind CSS
├── public/                  # Static assets
├── next.config.js           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── postcss.config.js        # PostCSS configuration
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

## Available Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run start` – Start production server
- `npm run lint` – Run Next.js linter
- `npm run typecheck` – TypeScript type checking

## Deployment

To deploy to production:

```bash
npm run build
npm run start
```

For cloud deployment, you can use:
- **Vercel** (recommended for Next.js) – Zero-config deployment
- **Netlify** – Connect your Git repository
- **Docker** – Containerize your app
- **AWS** – Use ECS, Lambda, or Amplify

## Configuration

### Tailwind CSS
Tailwind is pre-configured. Customize styles in `tailwind.config.js` or write inline classes.

### Path Aliases
You can use path aliases defined in `tsconfig.json`:
- `@/*` – Root directory
- `@/src/*` – Source directory
- `@/components/*` – Components directory
- `@/contexts/*` – Contexts directory

### Dark Mode
Dark mode is controlled via `ThemeContext`. The theme preference is saved to localStorage and persists across sessions.

## Technologies Used

- **Next.js 14** – React framework for production
- **React 18** – UI library
- **TypeScript** – Type-safe JavaScript
- **Tailwind CSS** – Utility-first CSS
- **Supabase JS** – Database & auth (optional)
- **Lucide React** – Icon library

## License

MIT

## Support

For questions or issues, please open an issue on GitHub.
