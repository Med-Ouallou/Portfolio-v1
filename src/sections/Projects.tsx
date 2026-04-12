import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Container } from '../components/Container'
import { SectionHeader } from '../components/SectionHeader'
import {
  ScrollReveal,
  SpotlightCard,
  TiltedCard,
} from '../components/reactbits'
import type { Project } from '../data/site'

type Props = {
  projects: Project[]
}

export function Projects({ projects }: Props) {
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeader
            eyebrow="Projects"
            title={
              <>
                Featured{' '}
                <span className="font-serif-display italic text-foreground/90">
                  project
                </span>{' '}
                showcase.
              </>
            }
            description="A selection of recent work spanning dashboards, internal tools, and marketing experiences."
          />
        </ScrollReveal>

        <div className="flex flex-col gap-12 sm:gap-16">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={0.05 * (index % 3)}>
              <Link
                to={`/projects/${project.id}`}
                className="block group/card"
              >
                <SpotlightCard className="flush overflow-hidden border border-border !bg-elevated transition-[border-color] duration-300 group-hover/card:border-border-strong">
                  <div className="grid gap-0 lg:grid-cols-2">
                    <div className="flex flex-col justify-center gap-6 p-6 sm:p-8 lg:p-10 lg:order-2">
                      <div>
                        <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                          {project.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-border-strong bg-foreground px-3 py-1 text-xs text-surface"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap items-center gap-4">
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover/card:text-foreground/80">
                          View details
                          <FiArrowUpRight
                            className="h-4 w-4 transition-transform duration-200 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5"
                            aria-hidden
                          />
                        </span>
                      </div>
                    </div>

                    <div className="relative border-t border-border bg-card lg:border-t-0 lg:border-r lg:order-1">
                      <div className="p-4 sm:p-6 lg:p-8">
                        <div className="group relative aspect-[16/10] w-full min-h-[220px]">
                          <TiltedCard
                            imageSrc={project.image}
                            altText=""
                            containerHeight="100%"
                            containerWidth="100%"
                            imageHeight="100%"
                            imageWidth="100%"
                            showMobileWarning={false}
                            showTooltip={false}
                            scaleOnHover={1.02}
                            rotateAmplitude={10}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center sm:mt-16">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] bg-foreground text-surface shadow-lg shadow-black/20 dark:shadow-black/30"
          >
            See all projects
            <FiArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  )
}
