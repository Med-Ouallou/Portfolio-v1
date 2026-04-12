import { useState, type FormEvent } from 'react'
import { FiSend } from 'react-icons/fi'
import { Container } from '../components/Container'
import { SectionHeader } from '../components/SectionHeader'
import { Button } from '../components/Button'
import { ScrollReveal, SpotlightCard } from '../components/reactbits'
import type { SocialLink } from '../data/site'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'

type Props = {
  email: string
  socials: SocialLink[]
}

const socialIcon = (icon: SocialLink['icon']) => {
  switch (icon) {
    case 'github':
      return FaGithub
    case 'linkedin':
      return FaLinkedin
    case 'instagram':
      return FaInstagram
    case 'email':
      return FaEnvelope
    default:
      return FaGithub
  }
}

export function Contact({socials }: Props) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle',
  )

  const formAction =
    import.meta.env.VITE_FORMSPREE_ID != null &&
    import.meta.env.VITE_FORMSPREE_ID !== ''
      ? `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`
      : undefined

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    if (!formAction) {
      e.preventDefault()
      setStatus('sent')
      return
    }
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch(formAction, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeader
            eyebrow="Contact"
            title={
              <>
                Let’s build{' '}
                <span className="font-serif-display italic text-foreground/90">
                  something sharp
                </span>
                .
              </>
            }
            description={`Tell me about your product, timeline, and stack. I typically reply within two business days.`}
          />
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <ScrollReveal>
            <SpotlightCard className="p-6 sm:p-8">
              <form
                onSubmit={onSubmit}
                action={formAction}
                method={formAction ? 'POST' : undefined}
                className="space-y-5"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-xs font-medium uppercase tracking-wider text-muted">
                    Name
                    <input
                      name="name"
                      required
                      autoComplete="name"
                      className="mt-2 w-full rounded-xl border border-border-strong bg-input px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/35 focus:border-border-strong"
                      placeholder="Alex Rivera"
                    />
                  </label>
                  <label className="block text-xs font-medium uppercase tracking-wider text-muted">
                    Email
                    <input
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="mt-2 w-full rounded-xl border border-border-strong bg-input px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/35 focus:border-border-strong"
                      placeholder="you@company.com"
                    />
                  </label>
                </div>
                <label className="block text-xs font-medium uppercase tracking-wider text-muted">
                  Message
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full resize-y rounded-xl border border-border-strong bg-input px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/35 focus:border-border-strong"
                    placeholder="Project goals, budget range, links…"
                  />
                </label>
                {formAction ? (
                  <input type="hidden" name="_subject" value="Portfolio inquiry" />
                ) : null}
                <div className="flex flex-wrap items-center gap-3">
                  <Button type="submit" variant="primary" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending…' : 'Send message'}
                    <FiSend className="h-4 w-4" aria-hidden />
                  </Button>
                  {status === 'sent' ? (
                    <span className="text-sm text-muted">Thanks — message sent.</span>
                  ) : null}
                  {status === 'error' ? (
                    <span className="text-sm text-red-600 dark:text-red-300">
                      Something went wrong. Try again or email directly.
                    </span>
                  ) : null}
                </div>
              </form>
            </SpotlightCard>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="space-y-6 rounded-2xl border border-border bg-card p-6 sm:p-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                  Social
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {socials.map((s) => {
                    const Icon = socialIcon(s.icon)
                    return (
                      <li key={s.href}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-foreground transition-all duration-200 hover:scale-105 hover:border-border-strong hover:bg-foreground/10"
                          aria-label={s.label}
                        >
                          <Icon className="h-4 w-4" />
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="border-t border-border pt-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                  Availability
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Open to full-time roles and selective contract work.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}
