/**
 * Scroll-triggered reveal using Framer Motion (not the GSAP-based React Bits
 * ScrollReveal — that component only accepts plain string children).
 */
import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
} & Omit<HTMLMotionProps<'div'>, 'children'>

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  ...rest
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
