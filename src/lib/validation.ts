export type EnquiryValues = {
  parentName: string
  phone: string
  email: string
  studentClass: string
  state: string
  consent: boolean
}

export type EnquiryErrors = Partial<Record<keyof EnquiryValues, string>>

export const emptyEnquiry: EnquiryValues = {
  parentName: '',
  phone: '',
  email: '',
  studentClass: '',
  state: '',
  consent: false,
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const INDIAN_MOBILE_RE = /^[6-9]\d{9}$/

/** Pure validator: returns one message per invalid field (empty object = valid). */
export function validateEnquiry(v: EnquiryValues): EnquiryErrors {
  const errors: EnquiryErrors = {}
  if (v.parentName.trim().length < 2) errors.parentName = 'Enter the parent’s full name.'
  if (!INDIAN_MOBILE_RE.test(v.phone)) errors.phone = 'Enter a 10-digit mobile number starting with 6–9.'
  if (!EMAIL_RE.test(v.email.trim())) errors.email = 'Enter an email address like name@example.com.'
  if (!v.studentClass) errors.studentClass = 'Choose the class you’re applying for.'
  if (!v.state) errors.state = 'Choose your state.'
  if (!v.consent) errors.consent = 'Tick the box so our admissions team can contact you.'
  return errors
}
