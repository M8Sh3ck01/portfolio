import { useState, type ChangeEvent, type FormEvent } from 'react'
import { ArrowUpRight, Check, Loader2, Mail, MessageCircle, Send } from 'lucide-react'
import { contactForm, profile } from '@/data'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const projectTypes = ['Web application', 'Mobile app', 'Full-stack / API', 'Something else']

type Status = 'idle' | 'sending' | 'success' | 'error'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [type, setType] = useState(projectTypes[0])
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  const update =
    (field: 'name' | 'email' | 'type' | 'message') =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const value = e.target.value
      if (field === 'name') setName(value)
      else if (field === 'email') setEmail(value)
      else if (field === 'type') setType(value)
      else setMessage(value)
      if (status === 'success') setStatus('idle')
    }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (status === 'sending') return
    if (!contactForm.web3formsAccessKey) {
      setStatus('error')
      setError('The form is not configured yet. Add your Web3Forms access key in src/data.ts.')
      return
    }
    setStatus('sending')
    setError('')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: contactForm.web3formsAccessKey,
          subject: `Project inquiry: ${type} from ${name}`,
          from_name: name,
          _replyto: email,
          name,
          email,
          'Project type': type,
          message,
        }),
      })
      const data = await res.json()
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Something went wrong sending your message.')
      }
      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again or email me directly.')
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 pt-16 pb-24 sm:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="// contact"
            title="Let's build something good together"
            description="Tell me about your project and I'll get back to you within 24 hours with a clear next step. No fluff, no pressure."
          />

          <Reveal delay={120}>
            <div className="space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 rounded-xl border border-border p-4 text-sm text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
              >
                <Mail className="h-4 w-4 text-accent" /> {profile.email}
                <ArrowUpRight className="ml-auto h-4 w-4" />
              </a>
              {profile.whatsapp ? (
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border p-4 text-sm text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
                >
                  <MessageCircle className="h-4 w-4 text-accent" /> WhatsApp, fastest way to reach me
                  <ArrowUpRight className="ml-auto h-4 w-4" />
                </a>
              ) : null}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-7 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={name}
                  onChange={update('name')}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-ring/40"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={update('email')}
                  placeholder="you@email.com"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-ring/40"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="type" className="mb-2 block text-sm font-medium text-foreground">
                Project type
              </label>
              <select
                id="type"
                value={type}
                onChange={update('type')}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-ring/40"
              >
                {projectTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                Project details
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={update('message')}
                placeholder="What are you building? What's the goal, timeline, budget?"
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-ring/40"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                </>
              ) : status === 'success' ? (
                <>
                  <Check className="h-4 w-4" /> Message sent
                </>
              ) : (
                <>
                  Send message <Send className="h-4 w-4" />
                </>
              )}
            </button>

            {status === 'success' ? (
              <p className="mt-3 text-sm text-emerald-600 dark:text-emerald-400">
                Thanks, your message is on its way. I'll get back to you within 24 hours.
              </p>
            ) : status === 'error' ? (
              <p className="mt-3 text-sm text-red-600 dark:text-red-400">{error}</p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
