import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FiArrowLeft, FiArrowUpRight, FiGithub, FiUser, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '../components/Container'
import { ScrollReveal, SpotlightCard } from '../components/reactbits'
import { DotGrid } from '../components/reactbits/DotGrid'
import { ThemeToggle } from '../components/ThemeToggle'
import { projects } from '../data/site'

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const project = projects.find((p) => p.id === id)
  const [activeScreenshot, setActiveScreenshot] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6">
        <DotGrid fixed />
        <h1 className="text-4xl font-medium text-foreground">Project not found</h1>
        <p className="text-muted">The project you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-surface transition-transform hover:scale-[1.02]"
        >
          <FiArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>
      </div>
    )
  }

  const currentIdx = projects.findIndex((p) => p.id === id)
  const prevProject = currentIdx > 0 ? projects[currentIdx - 1] : null
  const nextProject = currentIdx < projects.length - 1 ? projects[currentIdx + 1] : null

  return (
    <>
      <DotGrid fixed />

      {/* Top bar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-transparent backdrop-blur-md bg-[var(--nav-scrolled)]">
        <Container className="flex h-16 items-center justify-between sm:h-[4.5rem]">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <FiArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Back to portfolio</span>
            <span className="sm:hidden">Back</span>
          </button>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-surface transition-transform hover:scale-[1.02]"
              >
                View live
                <FiArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </Container>
      </header>

      <main className="pt-24 pb-20">
        {/* Hero section */}
        <Container>
          <ScrollReveal>
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border-strong bg-foreground px-3 py-1 text-xs font-medium text-surface"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>

              <p className="max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">
                {project.longDescription}
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-muted">
                <span className="inline-flex items-center gap-2">
                  <FiUser className="h-4 w-4" aria-hidden />
                  {project.role}
                </span>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                  >
                    <FiGithub className="h-4 w-4" aria-hidden />
                    Source code
                  </a>
                )}
              </div>
            </div>
          </ScrollReveal>
        </Container>

        {/* Screenshot gallery */}
        <div className="mt-12 sm:mt-16">
          <Container>
            <ScrollReveal delay={0.1}>
              
                <div className="relative overflow-hidden rounded-3xl bg-card">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeScreenshot}
                      src={project.screenshots[activeScreenshot]}
                      alt={`${project.title} screenshot ${activeScreenshot + 1}`}
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="aspect-[16/9] w-full object-cover"
                    />
                  </AnimatePresence>

                  {/* Navigation arrows */}
                  {project.screenshots.length > 1 && (
                    <>
                      <button
                        onClick={() =>
                          setActiveScreenshot((prev) =>
                            prev === 0 ? project.screenshots.length - 1 : prev - 1,
                          )
                        }
                        className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition-all hover:bg-black/70 sm:left-5 sm:h-12 sm:w-12"
                        aria-label="Previous screenshot"
                      >
                        <FiChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() =>
                          setActiveScreenshot((prev) =>
                            prev === project.screenshots.length - 1 ? 0 : prev + 1,
                          )
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition-all hover:bg-black/70 sm:right-5 sm:h-12 sm:w-12"
                        aria-label="Next screenshot"
                      >
                        <FiChevronRight className="h-5 w-5" />
                      </button>
                    </>
                  )}

                  {/* Dots indicator */}
                  {project.screenshots.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                      {project.screenshots.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveScreenshot(i)}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            i === activeScreenshot
                              ? 'w-6 bg-white'
                              : 'w-2 bg-white/40 hover:bg-white/60'
                          }`}
                          aria-label={`Go to screenshot ${i + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              
            </ScrollReveal>
          </Container>
        </div>

        {/* Thumbnail strip */}
        {project.screenshots.length > 1 && (
          <Container>
            <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
              {project.screenshots.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveScreenshot(i)}
                  className={`shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-200 ${
                    i === activeScreenshot
                      ? 'border-foreground/60 opacity-100'
                      : 'border-transparent opacity-50 hover:opacity-80'
                  }`}
                >
                  <img
                    src={src}
                    alt={`Thumbnail ${i + 1}`}
                    className="h-16 w-24 object-cover sm:h-20 sm:w-32"
                  />
                </button>
              ))}
            </div>
          </Container>
        )}

        {/* Content grid */}
        <Container>
          <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_340px] sm:mt-20">
            {/* Features */}
            <ScrollReveal delay={0.05}>
              <SpotlightCard className="h-full p-6 sm:p-8">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
                  Key Features
                </h2>
                <ul className="mt-6 space-y-4">
                  {project.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.08 * i, duration: 0.4 }}
                      className="flex items-start gap-3 text-sm leading-relaxed text-foreground sm:text-base"
                    >
                      <span>•</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </SpotlightCard>
            </ScrollReveal>

            {/* Sidebar */}
            <div className="flex flex-col gap-6">
              <ScrollReveal delay={0.1}>
                <SpotlightCard className="p-6 sm:p-8">
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
                    Project Info
                  </h2>
                  <dl className="mt-6 space-y-4">
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wider text-muted/70">
                        Role
                      </dt>
                      <dd className="mt-1 text-sm text-foreground">{project.role}</dd>
                    </div>
                    <div className="border-t border-border pt-4">
                      <dt className="text-xs font-medium uppercase tracking-wider text-muted/70">
                        Stack
                      </dt>
                      <dd className="mt-2 flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-lg border border-border bg-card px-2.5 py-1 text-xs text-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </dd>
                    </div>
                  </dl>
                  <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-surface transition-transform hover:scale-[1.02]"
                      >
                        View live
                        <FiArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
                      >
                        <FiGithub className="h-4 w-4" />
                        Source code
                      </a>
                    )}
                  </div>
                </SpotlightCard>
              </ScrollReveal>
            </div>
          </div>

          {/* Challenges */}
          <ScrollReveal delay={0.15}>
            <div className="mt-8">
              <SpotlightCard className="p-6 sm:p-8">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
                  Challenges & Solutions
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-foreground/90 sm:text-base">
                  {project.challenges}
                </p>
              </SpotlightCard>
            </div>
          </ScrollReveal>

          {/* Project navigation */}
          <ScrollReveal delay={0.2}>
            <div className="mt-16 grid gap-4 sm:grid-cols-2 sm:mt-20">
              {prevProject ? (
                <Link
                  to={`/projects/${prevProject.id}`}
                  className="group rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:border-border-strong hover:bg-card-hover"
                >
                  <span className="text-xs font-medium uppercase tracking-wider text-muted">
                    ← Previous project
                  </span>
                  <h3 className="mt-2 text-lg font-medium text-foreground transition-colors group-hover:text-foreground/90">
                    {prevProject.title}
                  </h3>
                </Link>
              ) : (
                <div />
              )}
              {nextProject ? (
                <Link
                  to={`/projects/${nextProject.id}`}
                  className="group rounded-2xl border border-border bg-card p-6 text-right transition-all duration-200 hover:border-border-strong hover:bg-card-hover"
                >
                  <span className="text-xs font-medium uppercase tracking-wider text-muted">
                    Next project →
                  </span>
                  <h3 className="mt-2 text-lg font-medium text-foreground transition-colors group-hover:text-foreground/90">
                    {nextProject.title}
                  </h3>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </ScrollReveal>

          {/* Back to all */}
          <div className="mt-12 flex justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-foreground transition-transform hover:scale-[1.02]"
            >
              <FiArrowLeft className="h-4 w-4" />
              All projects
            </Link>
          </div>
        </Container>
      </main>
    </>
  )
}
