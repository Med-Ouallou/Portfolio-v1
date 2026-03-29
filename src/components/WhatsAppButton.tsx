import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

type Props = {
  phone: string
}

export function WhatsAppButton({ phone }: Props) {
  const whatsappUrl = `https://wa.me/${phone}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-4 z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-green-500/50 bg-black text-green-500 shadow-2xl backdrop-blur-md transition-shadow hover:shadow-green-500/20 whatsapp-pulse dark:bg-white sm:bottom-8 sm:right-8 sm:h-14 sm:w-14"
    >
      <FaWhatsapp className="h-6 w-6 sm:h-7 sm:w-7" />
    </motion.a>
  )
}
