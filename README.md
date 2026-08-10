# Misheck Champopa — Developer Portfolio

Dark-mode-first, one-page portfolio for a Mobile & Web Architect. Built with React + Vite + TypeScript + Tailwind CSS v4.

## Commands

```bash
npm install       # install dependencies
npm run dev       # start dev server (http://localhost:5173)
npm run build     # type-check + production build
npm run preview   # preview the production build locally
```

## How to edit

**All content lives in `src/data.ts`** — profile, projects, skills, experience, education, socials.

- `profile.githubUsername` — drives the real-time GitHub contribution chart (section shows
  your actual `ghchart.rshah.org` heatmap).
- `testimonials` — starts **empty** on purpose, so the section hides itself. Add real quotes
  (clients, lecturers, collaborators) when you have them; the section reappears automatically.
- Project cards show a **Public / Private** badge. Public projects link to GitHub; private ones
  don't (honest by design).

## Sections

Hero (avatar + availability) → Services → Projects (case-study modals) → About
→ Experience/Education → Contact → Footer.

## Deploying

Netlify / Vercel / Cloudflare Pages — any static host. Build command `npm run build`,
output directory `dist`. Netlify Drag-and-Drop: build, then drag `dist/` in.

## Notes

- Dark mode is the default; the toggle persists your choice.
- The contact form opens a pre-filled email (no backend). Swap in Formspree if you want submissions
  without opening an email client.
