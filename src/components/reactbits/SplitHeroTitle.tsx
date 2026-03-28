import { motion } from 'framer-motion'

type Props = {
  lead: string
  emphasis: string
  tail: string
  className?: string
}

/**
 * Staggered headline (SplitText-style) using Framer Motion.
 */
export function SplitHeroTitle({ lead, emphasis, tail, className = '' }: Props) {
  const wordVariants = {
    hidden: { opacity: 0, y: 32 }, // More starting height
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.04 * i, // Snappier delay
        duration: 0.65, // Longer, smoother duration
        ease: [0.165, 0.84, 0.44, 1] as const, // Classic quint ease
      },
    }),
  }

  const lines: { text: string; serif: boolean }[] = [
    { text: lead, serif: false },
    { text: emphasis, serif: true },
    { text: tail, serif: false },
  ]

  let wordIndex = 0

  return (
    <h1
      className={`text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl xl:text-7xl ${className}`}
    >
      {lines.map((line, lineIdx) => (
        <span key={lineIdx} className="mb-0.5 block last:mb-0 sm:mb-1.5">
          {line.text.split(' ').map((word) => {
            const i = wordIndex++
            return (
              <motion.span
                key={`${lineIdx}-${word}`}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="show"
                className={`mr-[0.25em] inline-block last:mr-0 ${line.serif ? 'font-serif-display italic text-foreground/95' : ''}`}
              >
                {word}
              </motion.span>
            )
          })}
        </span>
      ))}
    </h1>
  )
}
