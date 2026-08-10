import { Briefcase, GraduationCap } from 'lucide-react'
import { education, experience } from '@/data'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-5 pt-16 pb-24 sm:px-8">
      <SectionHeading
        eyebrow="// experience"
        title="Where I've been"
        description="Highlights of what I've built, not my full CV."
      />

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            <Briefcase className="h-4 w-4" /> Work
          </div>
          <div className="relative space-y-8 border-l border-border pl-6">
            {experience.map((job, i) => (
              <Reveal key={job.role} delay={i * 80}>
                <div className="relative">
                  <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />
                  <p className="font-mono text-xs text-muted-foreground">{job.period}</p>
                  <h3 className="mt-1 font-semibold text-foreground">{job.role}</h3>
                  <p className="text-sm text-accent">{job.company}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{job.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            <GraduationCap className="h-4 w-4" /> Education
          </div>
          <div className="relative space-y-8 border-l border-border pl-6">
            {education.map((edu, i) => (
              <Reveal key={edu.degree} delay={i * 80}>
                <div className="relative">
                  <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />
                  <p className="font-mono text-xs text-muted-foreground">{edu.period}</p>
                  <h3 className="mt-1 font-semibold text-foreground">{edu.degree}</h3>
                  <p className="text-sm text-accent">{edu.school}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
