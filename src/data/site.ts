export const contact = {
  helpline: '+91-9837983791',
  helplineDisplay: '+91 98379 83791',
  landlines: ['0135-2699444', '0135-2699666'],
  email: 'info@tis.edu.in',
  address: 'Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun-248011 (Uttarakhand)',
  mapUrl: 'https://maps.app.goo.gl/maBF8syXueQkw31E6',
  applyUrl: 'https://admission.tis.edu.in',
  virtualTourUrl: 'https://tis.edu.in/virtual-tour/',
} as const

export const navLinks = [
  { label: 'About TIS', href: '#about' },
  { label: 'Sports', href: '#sports' },
  { label: 'Recognition', href: '#recognition' },
  { label: 'Visitors', href: '#visitors' },
  { label: 'Parents', href: '#parents' },
  { label: 'Admission', href: '#enquire' },
] as const

const SITE = 'https://tis.edu.in'

export const footerLinks = [
  { label: 'FAQ', href: `${SITE}/faq/` },
  { label: 'Calendar', href: `${SITE}/MandatoryPDF/TIS_CALENDAR_2024__PDF.pdf` },
  { label: 'Brochure', href: `${SITE}/MandatoryPDF/TIS_BROCHURE.pdf` },
  { label: 'Privacy Policy', href: `${SITE}/privacy-policy/` },
  { label: 'Terms & Conditions', href: `${SITE}/terms-conditions/` },
  { label: 'Disclaimer', href: `${SITE}/disclaimer/` },
  { label: 'Disciplinary Policy', href: `${SITE}/MandatoryPDF/DisciplinaryPolicy.pdf` },
  { label: 'Mobile Phone Policy', href: `${SITE}/MandatoryPDF/MobilePhonePolicy.pdf` },
  { label: 'Child Welfare & Safety Policy', href: `${SITE}/MandatoryPDF/childWelfarePolicy.pdf` },
  { label: 'Fedena Login', href: 'https://tis.fedena.com/' },
] as const

export const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/tulasinternationalschool/' },
  { label: 'Instagram', href: 'https://www.instagram.com/tulasinternationalschool/' },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/school/tulas-international-school/' },
  { label: 'X (Twitter)', href: 'https://twitter.com/tulas_intschool' },
] as const
