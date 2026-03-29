import { Container } from '../components/Container'
import { Button } from '../components/Button'
import { DotGrid } from '../components/reactbits'
import type { NavItem, SocialLink } from '../data/site'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

type Props = {
  name: string
  surname: string
  resumeUrl: string
  navItems: NavItem[]
  socials: SocialLink[]
}

const socialIcon = (icon: SocialLink['icon']) => {
  switch (icon) {
    case 'github':
      return FaGithub
    case 'linkedin':
      return FaLinkedin
    case 'instagram':
      return FaInstagram
    default:
      return FaGithub
  }
}

export function Footer({ name, surname, resumeUrl, navItems, socials }: Props) {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border pb-10">
      <section className="relative overflow-hidden py-20 sm:py-24">
        <DotGrid className="opacity-40" />
        <Container className="relative z-10 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            That wasn&apos;t everything yet
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Ready when you are.
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button href="#contact" variant="primary">
              Work with me
            </Button>
            <Button href={resumeUrl} variant="ghost">
              Download resume
            </Button>
          </div>
        </Container>
      </section>

      <div className="border-t border-border py-16 sm:py-20">
        <Container>
          <p className="text-center font-serif-display text-5xl italic leading-none text-foreground/90 sm:text-7xl md:text-8xl lg:text-9xl">
            {name}
          </p>
          <p className="text-center text-5xl font-bold tracking-tighter text-foreground sm:text-7xl md:text-8xl lg:text-9xl">
            {surname}
          </p>
        </Container>
      </div>

      <Container className="flex flex-col items-center justify-between gap-6 border-t border-border py-8 text-sm text-muted sm:flex-row">
        <div className="flex flex-wrap justify-center gap-4 sm:justify-start">
          {socials.map((s) => {
            const Icon = socialIcon(s.icon)
            return (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-foreground"
                aria-label={s.label}
              >
                <Icon className="h-5 w-5" />
              </a>
            )
          })}
        </div>
        <nav className="flex flex-wrap justify-center gap-4 lowercase sm:gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <p className="text-center sm:text-right">
          © {year} {name} {surname}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
