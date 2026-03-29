import { PillNav } from '../components/reactbits'
import { ThemeToggle } from '../components/ThemeToggle'
import { Button } from '../components/Button'
import { Hero } from '../sections/Hero'
import { About } from '../sections/About'
import { Projects } from '../sections/Projects'
import { Testimonials } from '../sections/Testimonials'
import { TechStack } from '../sections/TechStack'
import { Experience } from '../sections/Experience'
import { Contact } from '../sections/Contact'
import { Footer } from '../sections/Footer'
import { BackToTop } from '../components/BackToTop'
import { DotGrid } from '../components/reactbits/DotGrid'
import {
  experience,
  navItems,
  profile,
  projects,
  skillCategories,
  socialLinks,
  testimonials,
} from '../data/site'

export function Home() {
  return (
    <>
      <DotGrid fixed />
      <BackToTop />
      <PillNav
        logoText="MA"
        items={navItems}
        baseColor="var(--foreground)"
        pillColor="rgba(255,255,255,0.08)"
        pillTextColor="var(--foreground)"
        hoveredPillTextColor="var(--surface)"
      >
        <div className="pill-nav-right">
          <span className="hidden items-center gap-2 rounded-full border border-border bg-[var(--pill-bg)] px-3 py-1.5 text-xs text-muted sm:inline-flex">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for hire
          </span>
          <ThemeToggle />
          <Button
            variant="primary"
            href="#contact"
            className="px-4 py-2 text-xs sm:px-5 sm:text-sm"
          >
            Contact me
          </Button>
        </div>
      </PillNav>
      <main>
        <Hero />
        <About />
        <Projects projects={projects} />
        <Testimonials items={testimonials} />
        <TechStack categories={skillCategories} />
        <Experience entries={experience} />
        <Contact email={profile.email} socials={socialLinks} />
        <Footer
          name={profile.name}
          surname={profile.surname}
          resumeUrl={profile.resumeUrl}
          navItems={navItems}
          socials={socialLinks}
        />
      </main>
    </>
  )
}
