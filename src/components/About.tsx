import { MapPin, Clock, HeartHandshake } from 'lucide-react'
import { profile } from '@/data'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const facts = [
  { icon: <MapPin className="h-4 w-4" />, label: 'Based in', value: profile.location },
  { icon: <Clock className="h-4 w-4" />, label: 'Timezone', value: 'UTC / friendly with your hours' },
  { icon: <HeartHandshake className="h-4 w-4" />, label: 'Currently', value: profile.availability ? 'Available for projects' : 'Open to select projects' },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 pt-16 pb-24 sm:px-8">
      <SectionHeading
        eyebrow="// about"
        title="The short version of why I build"
      />

      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <Reveal>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I'm Misheck, an ICT student at Mzuzu University who got into code by wanting to build things that
              actually work well. That instinct is what drives every project I take on, whether it's a native Android
              app, a web platform, or a low-level bridge that most people wouldn't touch.
            </p>
            <p>
              What I'm most proud of is the range: a Kotlin/JNI native core for Bluetooth and file-system ops, a
              Tauri + Rust desktop editor, offline-first mobile apps, and full-stack systems with real-time features.
              Each one was designed, built, and shipped end to end by me: the decisions, the tradeoffs, and the bugs.
            </p>
            <p>
              I'm currently looking for freelance projects and internship opportunities where I can bring that range
              to real products, and keep learning on the job.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="space-y-4">
            {facts.map((fact) => (
              <div key={fact.label} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  {fact.icon}
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{fact.label}</p>
                  <p className="mt-0.5 text-sm font-medium text-foreground">{fact.value}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
