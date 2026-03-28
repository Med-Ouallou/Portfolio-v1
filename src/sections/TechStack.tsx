import type { ComponentType } from 'react'
import { FiCloud } from 'react-icons/fi'
import {
  SiAstro,
  SiDocker,
  SiFigma,
  SiGithubactions,
  SiGraphql,
  SiLaravel,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { Container } from '../components/Container'
import { SectionHeader } from '../components/SectionHeader'
import { ScrollReveal, SpotlightCard } from '../components/reactbits'
import type { SkillCategory } from '../data/site'

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  React: SiReact,
  TypeScript: SiTypescript,
  'Next.js': SiNextdotjs,
  'Tailwind CSS': SiTailwindcss,
  'Node.js': SiNodedotjs,
  Laravel: SiLaravel,
  PostgreSQL: SiPostgresql,
  'REST & GraphQL': SiGraphql,
  Docker: SiDocker,
  'GitHub Actions': SiGithubactions,
  Figma: SiFigma,
  AWS: FiCloud,
  Astro: SiAstro,
  Contentful: SiAstro,
  Vercel: SiNextdotjs,
}

type Props = {
  categories: SkillCategory[]
}

export function TechStack({ categories }: Props) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeader
            eyebrow="Stack"
            title={
              <>
                Tools I{' '}
                <span className="font-serif-display italic text-foreground/90">
                  reach for
                </span>{' '}
                every day.
              </>
            }
            description="Categorized by where they sit in the stack — all chosen for reliability and team ergonomics."
          />
        </ScrollReveal>

        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.id} delay={0.06 * i}>
              <SpotlightCard className="h-full p-6 sm:p-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                  {cat.title}
                </h3>
                <ul className="mt-6 grid grid-cols-2 gap-3">
                  {cat.items.map((item) => {
                    const Icon = iconMap[item.name] ?? SiReact
                    return (
                      <li
                        key={item.name}
                        className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground transition-colors duration-200 hover:border-border-strong"
                      >
                        <Icon className="h-4 w-4 shrink-0 text-foreground/70" aria-hidden />
                        <span className="truncate">{item.name}</span>
                      </li>
                    )
                  })}
                </ul>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
