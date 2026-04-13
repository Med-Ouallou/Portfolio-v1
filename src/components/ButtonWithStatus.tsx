import type { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { MotionProps } from 'framer-motion'

type Variant = 'primary' | 'ghost' | 'outline'
type Status = 'idle' | 'sending' | 'sent' | 'error'

type Props = MotionProps & {
  children: ReactNode
  variant?: Variant
  status?: Status
  type?: 'button' | 'submit' | 'reset'
  href?: string
  className?: string
  disabled?: boolean
  onClick?: () => void
}

const base =
  'relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/30'

const variants: Record<Variant, string> = {
  primary:
    'bg-foreground text-surface shadow-lg shadow-black/20 dark:shadow-black/30',
  ghost:
    'border border-border-strong bg-surface text-foreground hover:bg-black/60 dark:hover:bg-black/60 light:hover:bg-white/72 hover:backdrop-blur-md hover:border-foreground/20',
  outline:
    'border border-border bg-surface text-foreground hover:bg-black/60 dark:hover:bg-black/60 light:hover:bg-white/72 hover:backdrop-blur-md hover:border-foreground/20',
}

const statusStyles: Record<Status, string> = {
  idle: '',
  sending: 'cursor-wait',
  sent: '!bg-green-600 text-white',
  error: '!bg-red-600 text-white',
}

// Spinner for sending state
const Spinner = () => (
  <motion.svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray="31.4 31.4"
    />
  </motion.svg>
)

// Check icon for sent state
const CheckIcon = () => (
  <motion.svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
  >
    <path
      d="M5 13l4 4L19 7"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
)

// X icon for error state
const XIcon = () => (
  <motion.svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
  >
    <path
      d="M6 18L18 6M6 6l12 12"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
)

export function ButtonWithStatus({
  children,
  variant = 'primary',
  status = 'idle',
  className = '',
  href,
  type = 'button',
  disabled,
  onClick,
  ...rest
}: Props) {
  const cls = `${base} ${variants[variant]} ${statusStyles[status]} ${className}`

  const content = (
    <>
      <AnimatePresence mode="wait">
        {status === 'sending' ? (
          <motion.span
            key="sending"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2"
          >
            <Spinner />
            Sending…
          </motion.span>
        ) : status === 'sent' ? (
          <motion.span
            key="sent"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2"
          >
            <CheckIcon />
            Sent!
          </motion.span>
        ) : status === 'error' ? (
          <motion.span
            key="error"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2"
          >
            <XIcon />
            Failed. Retry
          </motion.span>
        ) : (
          <motion.span
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2"
          >
            {children}
          </motion.span>
        )}
      </AnimatePresence>
    </>
  )

  if (href) {
    return <a href={href} className={cls}>{content}</a>
  }

  return (
    <motion.button
      type={type}
      className={cls}
      disabled={disabled || status === 'sending'}
      whileTap={status === 'idle' ? { scale: 0.98 } : undefined}
      onClick={onClick}
      {...rest}
    >
      {content}
    </motion.button>
  )
}
