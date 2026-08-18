import { useEffect } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import type { Project } from '@/data'
import { GithubIcon } from './icons'

type ProjectModalProps = {
  project: Project
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const block = (label: string, text: string) => (
    <div>
      <h4 className="font-mono text-xs uppercase tracking-wider text-accent">{label}</h4>
      <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
    </div>
  )

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-border bg-card p-7 shadow-2xl sm:rounded-3xl sm:p-9">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close case study"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
            {project.category}
          </span>
          <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
        </div>

        <h3 className="mt-4 pr-10 text-2xl font-bold tracking-tight text-foreground">{project.title}</h3>
        <p className="mt-2 leading-relaxed text-muted-foreground">{project.tagline}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Live demo <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : null}
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              <GithubIcon className="h-4 w-4" /> Source code
            </a>
          ) : null}
        </div>

        <div className="mt-8 space-y-6">
          {block('The problem', project.problem)}
          {block('My approach', project.approach)}
          {block('The result', project.result)}
          {project.takeaways ? block('What I learned', project.takeaways) : null}
        </div>

        {project.images && project.images.length > 0 ? (
          <div className="mt-8">
            <h4 className="font-mono text-xs uppercase tracking-wider text-accent">Screenshots</h4>
            <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
              {project.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="h-auto w-48 shrink-0 rounded-lg border border-border object-cover sm:w-56"
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
