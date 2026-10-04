import { Mail, MapPin, Phone } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { contact, footerLinks, socialLinks } from '@/data/site'
import { tisAsset } from '@/lib/asset'

// Evaluated once per page load, not on every render.
const CURRENT_YEAR = new Date().getFullYear()

const linkStyle = 'text-white/75 transition-colors hover:text-marigold'

export function Footer() {
  return (
    <footer className="bg-navy-deep pt-16 pb-28 text-white lg:pb-10">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <img
              src={tisAsset('footer-logo.230b79ff.png')}
              alt="Tulas International School"
              width={180}
              height={60}
              loading="lazy"
              className="h-14 w-auto"
            />
            <p className="mt-5 max-w-sm leading-relaxed text-white/75">
              Tulas International School was established in 2012 under the aegis of Rishabh Educational
              Trust to impart education through seamless opportunities.
            </p>
          </div>

          <address className="flex flex-col gap-4 not-italic">
            <h2 className="font-display text-lg font-semibold">Contact us</h2>
            <a href={contact.mapUrl} target="_blank" rel="noopener noreferrer" className={`flex gap-3 ${linkStyle}`}>
              <MapPin className="mt-0.5 size-5 shrink-0" aria-hidden />
              {contact.address}
            </a>
            <a href={`tel:${contact.helpline}`} className={`flex gap-3 ${linkStyle}`}>
              <Phone className="mt-0.5 size-5 shrink-0" aria-hidden />
              Admission helpline {contact.helplineDisplay}
            </a>
            <p className="flex gap-3 text-white/75">
              <Phone className="mt-0.5 size-5 shrink-0" aria-hidden />
              <span>
                Landline{' '}
                {contact.landlines.map((n, i) => (
                  <span key={n}>
                    {i > 0 && ', '}
                    <a href={`tel:${n}`} className={linkStyle}>
                      {n}
                    </a>
                  </span>
                ))}
              </span>
            </p>
            <a href={`mailto:${contact.email}`} className={`flex gap-3 ${linkStyle}`}>
              <Mail className="mt-0.5 size-5 shrink-0" aria-hidden />
              {contact.email}
            </a>
          </address>

          <nav aria-label="Footer">
            <h2 className="font-display text-lg font-semibold">Quick links</h2>
            <ul className="mt-4 grid grid-cols-1 gap-2.5 text-sm sm:grid-cols-2 lg:grid-cols-1">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkStyle}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/15 pt-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {CURRENT_YEAR} Tulas International School, Dehradun. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Social media">
            {socialLinks.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className={linkStyle}>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}
