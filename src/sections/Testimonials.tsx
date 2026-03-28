import { Container } from '../components/Container'
import { SectionHeader } from '../components/SectionHeader'
import { ScrollReveal, SpotlightCard } from '../components/reactbits'
import type { Testimonial } from '../data/site'

type Props = {
  items: Testimonial[]
}

export function Testimonials({ items }: Props) {
  return (
    <section id="journal" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeader
            eyebrow="Testimonials"
            title={
              <>
                Past{' '}
                <span className="font-serif-display italic text-foreground/90">
                  praise
                </span>
                .
              </>
            }
            description="Notes from collaborators and leaders I've shipped alongside."
          />
        </ScrollReveal>

        <div className="columns-1 gap-4 sm:columns-2 lg:gap-6">
          {items.map((t, i) => (
            <ScrollReveal key={t.id} delay={0.04 * (i % 4)} className="mb-4 break-inside-avoid lg:mb-6">
              <SpotlightCard className="p-6 sm:p-8">
                <blockquote className="text-base leading-relaxed text-white sm:text-lg">
                  “{t.quote}”
                </blockquote>
                <footer className="mt-6 flex items-center gap-3 border-t border-border pt-6">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--avatar-gradient-from)] to-[var(--avatar-gradient-to)] text-sm font-semibold text-foreground"
                    aria-hidden
                  >
                    {t.name
                      .split(' ')
                      .map((p) => p[0])
                      .join('')
                      .slice(0, 2)}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">{t.name}</div>
                    <div className="text-xs text-muted">{t.role}</div>
                  </div>
                </footer>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
