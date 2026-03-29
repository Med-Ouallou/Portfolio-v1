import type { ReactNode } from 'react'

type Props = {
  eyebrow?: string
  title: ReactNode
  description?: string
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className = '',
}: Props) {
  return (
    <div className={`mb-10 space-y-4 sm:mb-14 ${className}`}>
      {eyebrow ? (
        <span className="inline-flex rounded-full border border-border-strong bg-foreground px-3 py-1 text-xs font-medium uppercase tracking-wider text-surface">
          {eyebrow}
        </span>
      ) : null}
      <div className="max-w-3xl text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </div>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
