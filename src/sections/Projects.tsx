import { FiArrowUpRight } from 'react-icons/fi'
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
              <SpotlightCard className="flush overflow-hidden border border-border !bg-transparent">
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
                          className="rounded-full border border-border-strong px-3 py-1 text-xs text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
                        >
                          View live
                          <FiArrowUpRight
                            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            aria-hidden
                          />
                        </a>
                      ) : null}
                      {project.caseStudyUrl ? (
                        <a
                          href={project.caseStudyUrl}
                          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                        >
                          Case study
                          <FiArrowUpRight className="h-4 w-4" aria-hidden />
                        </a>
                      ) : null}
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
                          displayOverlayContent={Boolean(project.liveUrl)}
                          overlayContent={
                            project.liveUrl ? (
                              <div className="relative h-full w-full">
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--overlay-image)] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                <a
                                  href={project.liveUrl}
                                  className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                >
                                  <span className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-surface shadow-lg">
                                    View live
                                  </span>
                                </a>
                              </div>
                            ) : null
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
