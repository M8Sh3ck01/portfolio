import { ArrowDown, Mail } from 'lucide-react'
import { profile, socials } from '@/data'
import { Frame } from './Frame'
import { Reveal } from './Reveal'
import { GithubIcon, LinkedinIcon, XIcon } from './icons'

const iconFor = (label: string) => {
  if (label === 'GitHub') return <GithubIcon className="h-4 w-4" />
  if (label === 'LinkedIn') return <LinkedinIcon className="h-4 w-4" />
  if (label === 'X / Twitter') return <XIcon className="h-4 w-4" />
  return <Mail className="h-4 w-4" />
}

export function Hero() {
  return (
    <section id="top" className="scroll-mt-24 px-3 pt-16 pb-6 sm:px-4 sm:pb-8">
      <Frame className="flex min-h-[calc(100dvh-5rem)] max-w-none shadow-none">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-accent opacity-[0.12] blur-[120px]"
        />

        <div className="relative m-auto w-full max-w-6xl px-5 py-10 sm:px-8 sm:py-12">
          <Reveal>
            <p className="font-mono text-sm text-muted-foreground sm:text-base">Hello, I'm</p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-3 max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-7xl">
              Misheck <span className="text-accent">Champopa</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">{profile.role}</p>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                View my work
                <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Get in touch
              </a>
            </div>
          </Reveal>

          <Reveal delay={380}>
            {profile.availability ? (
              <p className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Available for freelance & internship work
              </p>
            ) : null}
          </Reveal>

          <Reveal delay={440}>
            <div className="mt-8 flex items-center gap-3 border-t border-border pt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  {iconFor(s.label)}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </Frame>
    </section>
  )
}
