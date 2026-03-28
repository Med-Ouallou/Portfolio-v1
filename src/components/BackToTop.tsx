import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Returns user to the top of the page.
 * Professional UX enhancement for long scrolling portfolios.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[60] flex h-10 w-10 items-center justify-center rounded-full border border-border-strong bg-[var(--nav-scrolled)] text-foreground shadow-2xl backdrop-blur-md transition-shadow hover:shadow-black/20 dark:hover:shadow-white/5"
          aria-label="Back to top"
        >
          <FiArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
