import { ArrowUpRight } from 'lucide-react'
import { profile, socials } from '@/data'

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center">
        <div>
          <p className="font-mono text-sm font-semibold text-foreground">
            {profile.name.toLowerCase().replace(/\s+/g, '.')}/
          </p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {profile.role} building fast, polished products. Available for freelance.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {s.label} <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-5 py-6 text-xs text-muted-foreground sm:px-8 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="font-mono">built with React + Vite + Tailwind</p>
        </div>
      </div>
    </footer>
  )
}
