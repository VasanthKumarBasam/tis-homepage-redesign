import { AnimatePresence, motion } from 'motion/react'
import { useEffect } from 'react'
import { ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { contact, navLinks } from '@/data/site'
import { easeOutExpo } from '@/lib/motion'

type MobileNavProps = { open: boolean; onClose: () => void }

export function MobileNav({ open, onClose }: MobileNavProps) {
  // Lock page scroll and close on Escape while the menu is open.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.nav
          id="mobile-nav"
          aria-label="Mobile"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: easeOutExpo }}
          className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-line bg-surface lg:hidden"
        >
          <Container className="flex flex-col gap-8 py-8">
            <ul className="flex flex-col">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3, ease: easeOutExpo }}
                >
                  <a
                    href={link.href}
                    onClick={onClose}
                    className="block border-b border-line py-4 font-display text-2xl font-semibold"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="flex flex-col gap-3">
              <ButtonLink href={contact.applyUrl} external>
                Apply now
              </ButtonLink>
              <ButtonLink href={`tel:${contact.helpline}`} variant="outline">
                Call {contact.helplineDisplay}
              </ButtonLink>
            </div>
          </Container>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
