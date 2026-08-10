import { Check, Globe, Server, Smartphone } from 'lucide-react'
import { services } from '@/data'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const iconMap = {
  globe: <Globe className="h-5 w-5" />,
  smartphone: <Smartphone className="h-5 w-5" />,
  server: <Server className="h-5 w-5" />,
} as const

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-24 px-5 pt-16 pb-24 sm:px-8">
      <SectionHeading
        eyebrow="// services"
        title="What I can build for you"
        description="Three ways I help founders, startups and agencies ship product, from idea to deployed and maintained."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={i * 100}>
            <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-colors hover:border-accent/50">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                {iconMap[service.icon as keyof typeof iconMap]}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
