import { AnimatePresence, motion } from 'motion/react'
import { Phone } from 'lucide-react'
import { ButtonLink } from '@/components/ui/Button'
import { contact } from '@/data/site'
import { useScrolledPast } from '@/hooks/useScrolledPast'

/** Thumb-reach admissions bar for phones/tablets, shown once the hero is out of view. */
export function MobileCtaBar() {
  const visible = useScrolledPast(640)

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', stiffness: 320, damping: 32 }}
          className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-3 border-t border-line bg-surface/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden"
        >
          <ButtonLink href={`tel:${contact.helpline}`} variant="outline">
            <Phone className="size-4" aria-hidden />
            Call us
          </ButtonLink>
          <ButtonLink href={contact.applyUrl} external>
            Apply now
          </ButtonLink>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
