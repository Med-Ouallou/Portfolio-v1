import { Suspense, lazy } from 'react'
import { Nav } from '../components/Nav'
import { Hero } from '../sections/Hero'
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

const About = lazy(() =>
  import('../sections/About').then((m) => ({ default: m.About })),
)
const Projects = lazy(() =>
  import('../sections/Projects').then((m) => ({ default: m.Projects })),
)
const Testimonials = lazy(() =>
  import('../sections/Testimonials').then((m) => ({
    default: m.Testimonials,
  })),
)
const TechStack = lazy(() =>
  import('../sections/TechStack').then((m) => ({ default: m.TechStack })),
)
const Experience = lazy(() =>
  import('../sections/Experience').then((m) => ({ default: m.Experience })),
)
const Contact = lazy(() =>
  import('../sections/Contact').then((m) => ({ default: m.Contact })),
)
const Footer = lazy(() =>
  import('../sections/Footer').then((m) => ({ default: m.Footer })),
)

function SectionFallback() {
  return (
    <div
      className="flex min-h-[120px] items-center justify-center text-sm text-muted"
      aria-busy="true"
    >
      Loading…
    </div>
  )
}

export function Home() {
  return (
    <>
      <DotGrid fixed />
      <BackToTop />
      <Nav items={navItems} />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
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
        </Suspense>
      </main>
    </>
  )
}
