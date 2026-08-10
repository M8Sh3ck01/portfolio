import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { projects, type Project } from '@/data'
import { cn } from '@/lib/utils'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { ProjectModal } from './ProjectModal'
import { GithubIcon } from './icons'

function ProjectCard({ project, onOpen, index }: { project: Project; onOpen: (p: Project) => void; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Reveal delay={(index % 2) * 100}>
      <article
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-accent/50"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <button
          type="button"
          onClick={() => onOpen(project)}
          aria-label={`Open case study for ${project.title}`}
          className="relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-accent/20 via-card to-transparent text-foreground"
        >
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <>
              <span className="text-6xl font-bold tracking-tight text-accent/80 transition-transform duration-500 group-hover:scale-110">
                {project.title.slice(0, 2)}
              </span>
              <span className="absolute bottom-4 left-4 font-mono text-xs text-muted-foreground">
                {project.category} · {project.year}
              </span>
            </>
          )}
          <span
            className={cn(
              'absolute inset-0 flex items-center justify-center bg-background/70 font-mono text-sm text-foreground backdrop-blur-sm transition-opacity duration-300',
              hovered ? 'opacity-100' : 'opacity-0',
            )}
          >
            Read case study →
          </span>
        </button>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
            <div className="flex shrink-0 items-center gap-2">
              <span
                className={cn(
                  'rounded-full px-2.5 py-0.5 text-[11px] font-semibold',
                  project.visibility === 'Public'
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                    : 'bg-muted text-muted-foreground',
                )}
              >
                {project.visibility}
              </span>
              <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[11px] font-semibold text-accent">
                {project.category}
              </span>
            </div>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.tagline}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((tech) => (
              <span key={tech} className="rounded-md bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-4 border-t border-border pt-4 text-sm">
            <button
              type="button"
              onClick={() => onOpen(project)}
              className="inline-flex items-center gap-1.5 font-semibold text-accent transition-opacity hover:opacity-80"
            >
              Case study <ArrowUpRight className="h-4 w-4" />
            </button>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowUpRight className="h-4 w-4" /> Live demo
              </a>
            ) : null}
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <GithubIcon className="h-4 w-4" /> Code
              </a>
            ) : null}
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-5 pt-16 pb-24 sm:px-8">
      <SectionHeading
        eyebrow="// selected work"
        title="Projects that ship"
        description="A curated few instead of a wall of toys, each with a case study on the problem, the decisions, and the outcome. Click any project for the full story."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} onOpen={setActive} index={i} />
        ))}
      </div>

      {active ? <ProjectModal project={active} onClose={() => setActive(null)} /> : null}
    </section>
  )
}
