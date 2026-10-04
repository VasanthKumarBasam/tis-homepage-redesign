import { Menu, Phone, X } from 'lucide-react'
import { useCallback, useState } from 'react'
import { ThemeToggle } from '@/components/animation/ThemeToggle'
import { ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { contact, navLinks } from '@/data/site'
import { useScrolledPast } from '@/hooks/useScrolledPast'
import { Logo } from './Logo'
import { MobileNav } from './MobileNav'

const underline =
  'relative py-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-marigold after:transition-transform after:duration-300 hover:after:scale-x-100'

export function Navbar() {
  const scrolled = useScrolledPast(24)
  const [menuOpen, setMenuOpen] = useState(false)
  const solid = scrolled || menuOpen
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        solid ? 'bg-surface/90 shadow-[0_1px_0_var(--line)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <Container className="flex h-18 items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[15px] font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={underline}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${contact.helpline}`}
            className="hidden items-center gap-2 px-2 text-sm font-semibold xl:inline-flex"
          >
            <Phone className="size-4" aria-hidden />
            {contact.helplineDisplay}
          </a>
          <ThemeToggle />
          {/* Visibility lives on a wrapper so it can't fight the button's own display class. */}
          <div className="hidden md:block">
            <ButtonLink href={contact.applyUrl} external>
              Apply now
            </ButtonLink>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="grid size-11 place-items-center rounded-full border border-line lg:hidden"
          >
            {menuOpen ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </Container>

      <MobileNav open={menuOpen} onClose={closeMenu} />
    </header>
  )
}
