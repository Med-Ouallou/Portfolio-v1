import { useEffect, useState } from 'react'
import { Container } from './Container'
import { Button } from './Button'
import { ThemeToggle } from './ThemeToggle'
import type { NavItem } from '../data/site'
type Props = {
  items: NavItem[]
}

export function Nav({ items }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px' },
    )

    items.forEach((item) => {
      const el = document.querySelector(item.href)
      if (el) observer.observe(el)
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [items])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background,backdrop-filter,border-color] duration-300 backdrop-blur-md bg-black/60 dark:bg-black/60 light:bg-white/72 ${
        scrolled
          ? 'border-border'
          : 'border-transparent'
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm lowercase transition-all duration-200 hover:text-foreground ${
                activeSection === item.href.replace('#', '')
                  ? 'text-foreground font-semibold'
                  : 'text-muted'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#"
          className="font-medium tracking-tight text-foreground md:hidden"
        >
          MA
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <span className="hidden items-center gap-2 rounded-full border border-border bg-white/5 dark:bg-white/5 light:bg-black/5 px-3 py-1.5 text-xs text-muted sm:inline-flex">
            <span
              className="relative flex h-2 w-2"
              aria-hidden
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for hire
          </span>
          <Button
            variant="primary"
            href="#contact"
            className="px-4 py-2 text-xs sm:px-5 sm:text-sm"
          >
            Contact me
          </Button>
        </div>
      </Container>

      <nav
        className="flex justify-center gap-5 border-t border-border px-4 py-2 md:hidden"
        aria-label="Primary mobile"
      >
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`text-xs lowercase transition-colors ${
              activeSection === item.href.replace('#', '')
                ? 'text-foreground font-semibold'
                : 'text-muted'
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
