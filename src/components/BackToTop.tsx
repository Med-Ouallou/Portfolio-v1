import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { WhatsAppButton } from './WhatsAppButton'

type Props = {
  whatsapp?: string
}

/**
 * Returns user to the top of the page.
 * Professional UX enhancement for long scrolling portfolios.
 */
export function BackToTop({ whatsapp }: Props = {}) {
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
    <>
      {whatsapp && <WhatsAppButton phone={whatsapp} />}
      <AnimatePresence>
        {visible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-20 right-4 z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-border-strong bg-black text-white shadow-2xl backdrop-blur-md transition-shadow hover:shadow-black/20 dark:bg-white dark:text-black sm:bottom-24 sm:right-8 sm:h-14 sm:w-14"
            aria-label="Back to top"
          >
            <FiArrowUp className="h-6 w-6 sm:h-7 sm:w-7" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
