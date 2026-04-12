/**
 * React Bits PillNav — adapted from
 * https://github.com/DavidHDev/react-bits/blob/main/src/content/Components/PillNav/PillNav.jsx
 *
 * Removed react-router-dom dependency. Uses hash links for section nav.
 */
import { useEffect, useRef, type ReactNode } from 'react'
import { gsap } from 'gsap'
import './PillNav.css'

type PillNavItem = {
  href: string
  label: string
  ariaLabel?: string
}

type PillNavProps = {
  logo?: string
  logoAlt?: string
  logoText?: string
  items: PillNavItem[]
  activeHref?: string
  className?: string
  ease?: string
  baseColor?: string
  pillColor?: string
  hoveredPillTextColor?: string
  pillTextColor?: string
  children?: ReactNode
}

export function PillNav({
  logo,
  logoAlt = 'Logo',
  logoText,
  items,
  activeHref = '',
  className = '',
  ease = 'power3.out',
  baseColor = 'var(--foreground)',
  pillColor = 'var(--card)',
  hoveredPillTextColor = 'var(--surface)',
  pillTextColor,
  children,
}: PillNavProps) {
  const resolvedPillTextColor = pillTextColor ?? baseColor
  const circleRefs = useRef<(HTMLSpanElement | null)[]>([])
  const tlRefs = useRef<gsap.core.Timeline[]>([])
  const activeTweenRefs = useRef<gsap.core.Tween[]>([])
  const logoImgRef = useRef<HTMLImageElement>(null)
  const logoTweenRef = useRef<gsap.core.Tween | null>(null)
  const navItemsRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle) => {
        if (!circle?.parentElement) return

        const pill = circle.parentElement
        const rect = pill.getBoundingClientRect()
        const w = rect.width
        const h = rect.height
        const R = ((w * w) / 4 + h * h) / (2 * h)
        const D = Math.ceil(2 * R) + 2
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1
        const originY = D - delta

        circle.style.width = `${D}px`
        circle.style.height = `${D}px`
        circle.style.bottom = `-${delta}px`

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        })

        const label = pill.querySelector('.pill-label') as HTMLElement | null
        const white = pill.querySelector('.pill-label-hover') as HTMLElement | null

        if (label) gsap.set(label, { y: 0 })
        if (white) gsap.set(white, { y: h + 12, opacity: 0 })

        const index = circleRefs.current.indexOf(circle)
        if (index === -1) return

        tlRefs.current[index]?.kill()
        const tl = gsap.timeline({ paused: true })

        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: 'auto' }, 0)

        if (label) {
          tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: 'auto' }, 0)
        }

        if (white) {
          gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 })
          tl.to(white, { y: 0, opacity: 1, duration: 2, ease, overwrite: 'auto' }, 0)
        }

        tlRefs.current[index] = tl
      })
    }

    layout()

    const onResize = () => layout()
    window.addEventListener('resize', onResize)

    if (document.fonts?.ready) {
      document.fonts.ready.then(layout).catch(() => {})
    }

    if (logoRef.current) {
      gsap.set(logoRef.current, { scale: 0 })
      gsap.to(logoRef.current, { scale: 1, duration: 0.6, ease })
    }

    if (navItemsRef.current) {
      gsap.set(navItemsRef.current, { width: 0, overflow: 'hidden' })
      gsap.to(navItemsRef.current, { width: 'auto', duration: 0.6, ease })
    }

    return () => window.removeEventListener('resize', onResize)
  }, [items, ease])

  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i]
    if (!tl) return
    activeTweenRefs.current[i]?.kill()
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.5,
      ease,
      overwrite: 'auto',
    })
  }

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i]
    if (!tl) return
    activeTweenRefs.current[i]?.kill()
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.4,
      ease,
      overwrite: 'auto',
    })
  }

  const handleLogoEnter = () => {
    const img = logoImgRef.current
    if (!img) return
    logoTweenRef.current?.kill()
    gsap.set(img, { rotate: 0 })
    logoTweenRef.current = gsap.to(img, {
      rotate: 360,
      duration: 0.2,
      ease,
      overwrite: 'auto',
    })
  }

  const cssVars = {
    '--base': baseColor,
    '--pill-bg': pillColor,
    '--hover-text': hoveredPillTextColor,
    '--pill-text': resolvedPillTextColor,
  } as React.CSSProperties

  return (
    <div className={`pill-nav-container ${className}`} style={cssVars}>
      <nav className="pill-nav" aria-label="Primary">
        {logo ? (
          <a
            className="pill-logo"
            href="#"
            aria-label="Home"
            onMouseEnter={handleLogoEnter}
            ref={logoRef}
          >
            <img src={logo} alt={logoAlt} ref={logoImgRef} />
          </a>
        ) : logoText ? (
          <a
            className="pill-logo pill-logo--text"
            href="#"
            aria-label="Home"
            onMouseEnter={handleLogoEnter}
            ref={logoRef}
          >
            {logoText}
          </a>
        ) : null}

        <div className="pill-nav-items" ref={navItemsRef}>
          <ul className="pill-list" role="menubar">
            {items.map((item, i) => (
              <li key={item.href || `item-${i}`} role="none">
                <a
                  role="menuitem"
                  href={item.href}
                  className={`pill${activeHref === item.href ? ' is-active' : ''}`}
                  aria-label={item.ariaLabel || item.label}
                  onMouseEnter={() => handleEnter(i)}
                  onMouseLeave={() => handleLeave(i)}
                >
                  <span
                    className="hover-circle"
                    aria-hidden="true"
                    ref={(el) => {
                      circleRefs.current[i] = el
                    }}
                  />
                  <span className="label-stack">
                    <span className="pill-label">{item.label}</span>
                    <span className="pill-label-hover" aria-hidden="true">
                      {item.label}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {children}
      </nav>
    </div>
  )
}
