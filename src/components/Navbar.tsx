import { useEffect, useState, type MouseEvent } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { profile } from '@/data'
import { useTheme } from '@/theme'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    window.history.replaceState(null, '', href)
    requestAnimationFrame(() => {
      const behavior: ScrollBehavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth'
      if (href === '#top') {
        window.scrollTo({ top: 0, behavior })
        return
      }
      const el = document.querySelector<HTMLElement>(href)
      if (!el) return
      const vh = window.innerHeight
      const top = el.getBoundingClientRect().top + window.scrollY
      const height = el.offsetHeight
      const fits = height <= vh - 64
      const targetY = fits ? top - (vh - height) / 2 : top - Math.min(vh * 0.16, 144)
      window.scrollTo({ top: Math.max(0, targetY), behavior })
    })
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || open ? 'border-b border-border bg-background/85 backdrop-blur' : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          onClick={(e) => {
            setOpen(false)
            scrollToSection(e, '#top')
          }}
          className="font-mono text-sm font-semibold tracking-tight text-foreground"
        >
          {profile.name.toLowerCase().replace(/\s+/g, '.')}/
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 md:block"
          >
            Hire Me
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="flex flex-col gap-1 border-t border-border bg-background px-5 py-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                setOpen(false)
                scrollToSection(e, link.href)
              }}
              className="rounded-lg px-3 py-2.5 text-base text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              setOpen(false)
              scrollToSection(e, '#contact')
            }}
            className="mt-2 rounded-full bg-accent px-4 py-2.5 text-center text-base font-medium text-accent-foreground"
          >
            Hire Me
          </a>
        </div>
      ) : null}
    </header>
  )
}
