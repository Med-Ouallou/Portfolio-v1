import { FiCode, FiCpu, FiLayers } from 'react-icons/fi'
import { Container } from '../components/Container'
import { SectionHeader } from '../components/SectionHeader'
import { ScrollReveal, SpotlightCard, BorderGlow, TextType } from '../components/reactbits'
import { profile } from '../data/site'

const highlights = [
  {
    title: 'Agile & Scrum',
    body: 'I work in Agile environments using Scrum methodology, focusing on collaboration, sprints, and continuous delivery.',
    icon: FiLayers,
  },
  {
    title: 'Design Thinking',
    body: 'I approach problems with a user-centered mindset, using design thinking to analyze, prototype, and solve real-world challenges.',
    icon: FiCpu,
  },
  {
    title: 'Problem Solving',
    body: 'I enjoy breaking down complex problems and building efficient, scalable solutions with clean and maintainable code.',
    icon: FiCode,
  },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-12 lg:gap-20">
            <SectionHeader
              eyebrow="About"
              title={
                <TextType
                  text={['Welcome to my portfolio!', 'Good to see you!']}
                  typingSpeed={60}
                  pauseDuration={1500}
                  deletingSpeed={30}
                  cursorCharacter="|"
                  className="text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl"
                />
              }
              description={profile.bio}
            />
            <BorderGlow
              borderRadius={9999}
              glowRadius={40}
              colors={['#818cf8', '#c084fc', '#f472b6']}
              className="shrink-0"
            >
              <img
                src={profile.portraitSrc}
                alt={`${profile.name} ${profile.surname}`}
                className="h-32 w-32 sm:h-40 sm:w-40 lg:h-50 lg:w-50 rounded-full object-cover"
              />
            </BorderGlow>
          </div>
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
