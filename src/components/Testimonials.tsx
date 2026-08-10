import { Quote, Star } from 'lucide-react'
import { testimonials } from '@/data'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Testimonials() {
  if (testimonials.length === 0) return null

  return (
    <section id="testimonials" className="mx-auto max-w-6xl scroll-mt-24 px-5 pt-16 pb-24 sm:px-8">
      <SectionHeading
        eyebrow="// testimonials"
        title="What clients say"
        description="A few honest words from people I've shipped with."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 100}>
            <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
              <Quote className="h-6 w-6 text-accent/50" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-sm font-bold text-accent">
                  {t.name.slice(0, 1)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-accent text-accent" />
                  ))}
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}