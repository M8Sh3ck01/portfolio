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

**All content lives in `src/data.ts`** — profile, projects, experience, education, socials.

- `contactForm.web3formsAccessKey` — your Web3Forms access key; submissions post straight to
  your inbox via `api.web3forms.com/submit`.
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
- The contact form submits to Web3Forms, so messages land in your inbox with no backend to run.
