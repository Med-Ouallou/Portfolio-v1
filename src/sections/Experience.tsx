import { Container } from '../components/Container'
import { SectionHeader } from '../components/SectionHeader'
import { ScrollReveal } from '../components/reactbits'
import type { ExperienceEntry } from '../data/site'

type Props = {
  entries: ExperienceEntry[]
}

export function Experience({ entries }: Props) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeader
            eyebrow="Experience"
            title={
              <>
                Path so{' '}
                <span className="font-serif-display italic text-foreground/90">far</span>.
              </>
            }
            description="Roles and milestones that shaped how I build for users and teams."
          />
        </ScrollReveal>

        <div className="relative mx-auto max-w-3xl">
          <div
            className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--gradient-line-from)] via-[var(--gradient-line-via)] to-transparent sm:left-[15px]"
            aria-hidden
          />
          <ul className="space-y-10 sm:space-y-12">
            {entries.map((entry, i) => (
              <ScrollReveal key={entry.id} delay={0.05 * i}>
                <li className="relative pl-10 sm:pl-12">
                  <span
                    className="absolute left-0 top-1.5 flex h-3 w-3 rounded-full border border-[var(--timeline-dot-border)] bg-[var(--timeline-dot-bg)] sm:top-2 sm:h-3.5 sm:w-3.5"
                    aria-hidden
                  />
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-lg font-semibold text-foreground">
                      {entry.title}
                    </h3>
                    <span className="text-xs font-medium uppercase tracking-wider text-muted sm:text-sm">
                      {entry.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-foreground/70">
                    {entry.organization}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {entry.description}
                  </p>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
