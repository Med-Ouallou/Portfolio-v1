import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { AnimatePresence, motion } from 'framer-motion'
import { PillNav } from '../components/reactbits'
import { ThemeToggle } from '../components/ThemeToggle'
import { Button } from '../components/Button'
import { Hero } from '../sections/Hero'
import { About } from '../sections/About'
import { Projects } from '../sections/Projects'
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
} from '../data/site'

export function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <DotGrid fixed />
      <BackToTop whatsapp={profile.whatsapp} />
      <PillNav
        logoText="MED"
        items={navItems}
        baseColor="var(--foreground)"
        pillColor="rgba(40, 33, 33, 0.08)"
        pillTextColor="var(--foreground)"
        hoveredPillTextColor="var(--surface)"
        className="hidden md:flex"
      >
        <div className="pill-nav-right ml-auto hidden md:flex items-center gap-2 sm:gap-3">
          <span className="hidden items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1.5 text-xs text-muted lg:inline-flex">
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

      {/* Mobile Header (replaces PillNav on small screens) */}
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-border/50 px-4 py-3 backdrop-blur-md md:hidden  ">
        <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-sm font-bold text-surface">
          MED
        </a>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-card-hover"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-40 border-b border-border bg-surface/95 px-4 py-6 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-4 text-center">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium uppercase tracking-wider text-foreground hover:bg-foreground/10"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      <main className="pt-20 md:pt-0">
        <Hero />
        <About />
        <TechStack categories={skillCategories} />
        <Projects projects={projects.slice(0, 4)} />
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
