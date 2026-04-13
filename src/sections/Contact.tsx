import { useState } from 'react'
import { FiSend } from 'react-icons/fi'
import { Container } from '../components/Container'
import { SectionHeader } from '../components/SectionHeader'
import { ButtonWithStatus } from '../components/ButtonWithStatus'
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

export function Contact({ socials }: Props) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const formAction = "https://api.web3forms.com/submit"

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('sending')

    const form = event.currentTarget
    const formData = new FormData(form)

    //access key from .env
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY)

    try {
      const response = await fetch(formAction, {
        method: "POST",
        body: formData
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('sent')
        form.reset()
      } else {
        console.error('Web3Forms error:', data)
        setStatus('error')
      }
    } catch (err) {
      console.error('Fetch error:', err)
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
            description={`Tell me about your project, timeline, and stack.`}
          />
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          {/* FORM */}
          <ScrollReveal>
            <SpotlightCard className="p-6 sm:p-8">
              <form onSubmit={onSubmit} className="space-y-5">

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-xs font-medium uppercase text-muted">
                    Name
                    <input
                      name="name"
                      required
                      className="mt-2 w-full rounded-xl border bg-input px-4 py-3 text-sm outline-none"
                      placeholder="Your name"
                    />
                  </label>

                  <label className="block text-xs font-medium uppercase text-muted">
                    Email
                    <input
                      name="email"
                      type="email"
                      required
                      className="mt-2 w-full rounded-xl border bg-input px-4 py-3 text-sm outline-none"
                      placeholder="you@email.com"
                    />
                  </label>
                </div>

                <label className="block text-xs font-medium uppercase text-muted">
                  Message
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full rounded-xl border bg-input px-4 py-3 text-sm outline-none"
                    placeholder="Your message..."
                  />
                </label>

                {/* optional subject */}
                <input type="hidden" name="subject" value="New Portfolio Message" />

                <ButtonWithStatus
                  type="submit"
                  variant="primary"
                  status={status}
                  disabled={status === 'sending'}
                >
                  <FiSend className="h-4 w-4" />
                  Send message
                </ButtonWithStatus>

              </form>
            </SpotlightCard>
          </ScrollReveal>

          {/* SOCIAL */}
          <ScrollReveal delay={0.08}>
            <div className="space-y-6 rounded-2xl border bg-card p-6 sm:p-8">

              <div>
                <h3 className="text-sm font-semibold uppercase text-muted">
                  Social
                </h3>

                <ul className="mt-4 flex gap-2">
                  {socials.map((s) => {
                    const Icon = socialIcon(s.icon)
                    return (
                      <li key={s.href}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noreferrer"
                          className="flex h-11 w-11 items-center justify-center rounded-full border hover:scale-105"
                        >
                          <Icon className="h-4 w-4" />
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-sm font-semibold uppercase text-muted">
                  Availability
                </h3>
                <p className="mt-3 text-sm text-muted">
                  Open to freelance & full-time opportunities.
                </p>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}