import { FiArrowRight, FiDownload } from 'react-icons/fi'
import { Container } from '../components/Container'
import { Button } from '../components/Button'
import { DotGrid, SplitHeroTitle } from '../components/reactbits'
import { motion } from 'framer-motion'
import { heroTags, logoRow, profile } from '../data/site'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--hero-fade)] to-transparent" />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-16">
          <div className="space-y-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted decoration-foreground/20">
              {profile.role}
            </p>
            <SplitHeroTitle
              lead={profile.heroHeadline.lead}
              emphasis={profile.heroHeadline.emphasis}
              tail={profile.heroHeadline.tail}
            />
            <p className="max-w-xl text-base leading-relaxed text-muted/90 sm:text-lg">
              {profile.tagline}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#projects" variant="primary">
                View projects
                <FiArrowRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button href={profile.resumeUrl} variant="ghost">
                <FiDownload className="h-4 w-4" aria-hidden />
                Download my resume
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-[var(--shadow-portrait)]">
              <DotGrid className="opacity-50" gap={20} />
              <img
                src={profile.portraitSrc}
                alt={`${profile.name} ${profile.surname}`}
                width={480}
                height={480}
                className="relative z-10 h-full w-full object-cover"
                loading="eager"
              />
            </div>
            {heroTags.map((tag) => (
              <span
                key={tag.label}
                className={`absolute z-20 hidden rounded-full border border-border-strong bg-[var(--nav-scrolled)] px-3 py-1.5 text-xs text-foreground shadow-lg backdrop-blur-md sm:inline-block ${tag.position}`}
              >
                {tag.label}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-10 sm:mt-20">
          <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.25em] text-muted">
            Trusted by leading teams
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-50 grayscale">
            {logoRow.map((name) => (
              <span
                key={name}
                className="text-sm font-semibold tracking-tight text-foreground"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
