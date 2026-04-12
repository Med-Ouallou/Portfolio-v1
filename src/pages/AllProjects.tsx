import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { FiArrowLeft, FiArrowUpRight } from 'react-icons/fi'
import { Container } from '../components/Container'
import { ScrollReveal, SpotlightCard, TiltedCard } from '../components/reactbits'
import { DotGrid } from '../components/reactbits/DotGrid'
import { ThemeToggle } from '../components/ThemeToggle'
import { projects } from '../data/site'

export function AllProjects() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <DotGrid fixed />

      {/* Top bar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-transparent backdrop-blur-md bg-[var(--nav-scrolled)]">
        <Container className="flex h-16 items-center justify-between sm:h-[4.5rem]">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <FiArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Back to home</span>
            <span className="sm:hidden">Back</span>
          </Link>
          <div className="flex items-center gap-3">
            <ThemeToggle />
          </div>
        </Container>
      </header>

      <main className="pt-24 pb-20 sm:pt-32">
        <Container>
          <ScrollReveal>
            <div className="mb-12 sm:mb-16">
              <h1 className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
                All Projects
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
                A complete archive of my past work, side projects, and experiments.
              </p>
            </div>
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
        </Container>
      </main>
    </>
  )
}
