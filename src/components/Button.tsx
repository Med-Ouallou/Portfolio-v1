import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'ghost' | 'outline'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: Variant
  asChild?: boolean
  href?: string
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/30'

const variants: Record<Variant, string> = {
  primary:
    'bg-foreground text-surface shadow-lg shadow-black/20 dark:shadow-black/30',
  ghost:
    'border border-border-strong bg-surface text-foreground hover:bg-[var(--nav-scrolled)] hover:backdrop-blur-md hover:border-foreground/20',
  outline:
    'border border-border bg-surface text-foreground hover:bg-[var(--nav-scrolled)] hover:backdrop-blur-md hover:border-foreground/20',
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  href,
  type = 'button',
  ...rest
}: Props) {
  const cls = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={cls} {...rest}>
      {children}
    </button>
  )
}
