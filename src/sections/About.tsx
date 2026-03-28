import { FiCode, FiCpu, FiLayers } from 'react-icons/fi'
import { Container } from '../components/Container'
import { SectionHeader } from '../components/SectionHeader'
import { ScrollReveal, SpotlightCard } from '../components/reactbits'
import { profile } from '../data/site'

const highlights = [
  {
    title: 'Systems thinking',
    body: 'From schema design to component APIs, I optimize for clarity and long-term velocity.',
    icon: FiLayers,
  },
  {
    title: 'Performance culture',
    body: 'Core Web Vitals, caching, and bundle discipline are part of every release.',
    icon: FiCpu,
  },
  {
    title: 'Product partnership',
    body: 'I translate goals into roadmaps, prototypes, and measurable outcomes.',
    icon: FiCode,
  },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeader
            eyebrow="About"
            title={
              <>
                Building products with{' '}
                <span className="font-serif-display italic text-foreground/90">
                  precision
                </span>{' '}
                and care.
              </>
            }
            description={profile.bio}
          />
        </ScrollReveal>

        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item, i) => (
            <ScrollReveal key={item.title} delay={0.05 * i}>
              <SpotlightCard className="h-full p-6 sm:p-8">
                <item.icon className="mb-4 h-6 w-6 text-foreground/80" aria-hidden />
                <h3 className="text-lg font-medium text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
