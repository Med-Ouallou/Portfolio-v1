import { FiArrowRight, FiDownload } from 'react-icons/fi'
import { Container } from '../components/Container'
import { Button } from '../components/Button'
import { SplitHeroTitle, BorderGlow, CurvedLoop } from '../components/reactbits'
import { motion } from 'framer-motion'
import { heroTags, profile } from '../data/site'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-24 lg:pt-28"
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
            <BorderGlow
              borderRadius={24}
              glowRadius={50}
              colors={['#818cf8', '#c084fc', '#f472b6']}
            >
              <div className="relative aspect-square overflow-hidden rounded-3xl bg-card">
                <img
                  src={profile.portraitSrc}
                  alt={`${profile.name} ${profile.surname}`}
                  width={480}
                  height={480}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
            </BorderGlow>
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
      </Container>

      <div className="relative z-10 mt-16 sm:mt-20">
        <CurvedLoop
          marqueeText="React ✦ TypeScript ✦ Node.js ✦ Next.js ✦ Tailwind ✦ PostgreSQL ✦ "
          speed={3}
          curveAmount={200}
          className="curved-loop-text"
        />
      </div>
    </section>
  )
}
