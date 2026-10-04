import { AnimatePresence, motion } from 'motion/react'
import { CircleCheck, Mail, MapPin, Phone } from 'lucide-react'
import { useState, type ChangeEvent, type FormEvent } from 'react'
import { ButtonLink } from '@/components/ui/Button'
import { buttonStyles } from '@/components/ui/buttonStyles'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { classOptions, stateOptions } from '@/data/content'
import { contact } from '@/data/site'
import { easeOutExpo } from '@/lib/motion'
import { emptyEnquiry, validateEnquiry, type EnquiryErrors, type EnquiryValues } from '@/lib/validation'

const fieldBase =
  'mt-2 block min-h-12 w-full rounded-xl border bg-bg px-4 text-base text-fg transition-colors focus:border-navy focus:outline-none dark:focus:border-marigold'

const fieldClass = (hasError: boolean) => `${fieldBase} ${hasError ? 'border-red-600 dark:border-red-400' : 'border-line'}`

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} className="mt-1.5 text-sm font-medium text-red-700 dark:text-red-300">
      {message}
    </p>
  )
}

export function Enquiry() {
  const [values, setValues] = useState<EnquiryValues>(emptyEnquiry)
  const [errors, setErrors] = useState<EnquiryErrors>({})
  const [submittedName, setSubmittedName] = useState<string | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const next =
      type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : name === 'phone'
          ? value.replace(/\D/g, '').slice(0, 10)
          : value
    setValues((v) => ({ ...v, [name]: next }))
    // Clear a field's error as soon as the user edits it.
    setErrors((errs) => (errs[name as keyof EnquiryValues] ? { ...errs, [name]: undefined } : errs))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const found = validateEnquiry(values)
    setErrors(found)
    const firstInvalid = Object.keys(found)[0]
    if (firstInvalid) {
      document.getElementById(`enquiry-${firstInvalid}`)?.focus()
      return
    }
    // Integration point: POST `values` to the admissions CRM here.
    setSubmittedName(values.parentName.trim())
    setValues(emptyEnquiry)
  }

  const describedBy = (field: keyof EnquiryValues) => (errors[field] ? `enquiry-${field}-error` : undefined)

  return (
    <section id="enquire" aria-labelledby="enquire-title" className="bg-navy py-20 text-white sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader
            id="enquire-title"
            tone="onDark"
            title="Start your child’s journey at TIS"
            intro="Admissions are open for Class 4 to 12. Share a few details and our admissions team will call you back."
          />
          <ul className="mt-10 flex flex-col gap-5 text-white/85">
            <li>
              <a href={`tel:${contact.helpline}`} className="flex items-center gap-3 font-semibold hover:text-marigold">
                <Phone className="size-5 shrink-0 text-marigold" aria-hidden />
                Admission helpline {contact.helplineDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 hover:text-marigold">
                <Mail className="size-5 shrink-0 text-marigold" aria-hidden />
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={contact.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 hover:text-marigold"
              >
                <MapPin className="mt-0.5 size-5 shrink-0 text-marigold" aria-hidden />
                {contact.address}
              </a>
            </li>
          </ul>
        </div>

        <div className="rounded-[2rem] bg-surface p-6 text-fg sm:p-10 lg:col-span-7">
          <AnimatePresence mode="wait" initial={false}>
            {submittedName ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: easeOutExpo }}
                className="flex min-h-96 flex-col items-start justify-center gap-5"
                role="status"
              >
                <CircleCheck className="size-14 text-pine dark:text-marigold" aria-hidden />
                <p className="font-display text-3xl font-bold">Thank you, {submittedName}.</p>
                <p className="max-w-md text-lg text-muted">
                  Your enquiry has been received. Our admissions team will call you shortly. You can also start the
                  application online now.
                </p>
                <div className="flex flex-wrap gap-3">
                  <ButtonLink href={contact.applyUrl} external>
                    Apply now
                  </ButtonLink>
                  <button type="button" onClick={() => setSubmittedName(null)} className={buttonStyles('outline')}>
                    Send another enquiry
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                noValidate
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid gap-5 sm:grid-cols-2"
              >
                <div className="sm:col-span-2">
                  <label htmlFor="enquiry-parentName" className="font-semibold">
                    Parent’s name
                  </label>
                  <input
                    id="enquiry-parentName"
                    name="parentName"
                    autoComplete="name"
                    value={values.parentName}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.parentName)}
                    aria-describedby={describedBy('parentName')}
                    className={fieldClass(Boolean(errors.parentName))}
                  />
                  <FieldError id="enquiry-parentName-error" message={errors.parentName} />
                </div>

                <div>
                  <label htmlFor="enquiry-phone" className="font-semibold">
                    Mobile number
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute top-1/2 left-4 mt-1 -translate-y-1/2 text-muted">
                      +91
                    </span>
                    <input
                      id="enquiry-phone"
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      value={values.phone}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={describedBy('phone')}
                      className={`${fieldClass(Boolean(errors.phone))} pl-14`}
                    />
                  </div>
                  <FieldError id="enquiry-phone-error" message={errors.phone} />
                </div>

                <div>
                  <label htmlFor="enquiry-email" className="font-semibold">
                    Email
                  </label>
                  <input
                    id="enquiry-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={describedBy('email')}
                    className={fieldClass(Boolean(errors.email))}
                  />
                  <FieldError id="enquiry-email-error" message={errors.email} />
                </div>

                <div>
                  <label htmlFor="enquiry-studentClass" className="font-semibold">
                    Applying for
                  </label>
                  <select
                    id="enquiry-studentClass"
                    name="studentClass"
                    value={values.studentClass}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.studentClass)}
                    aria-describedby={describedBy('studentClass')}
                    className={fieldClass(Boolean(errors.studentClass))}
                  >
                    <option value="">Select class</option>
                    {classOptions.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                  <FieldError id="enquiry-studentClass-error" message={errors.studentClass} />
                </div>

                <div>
                  <label htmlFor="enquiry-state" className="font-semibold">
                    State
                  </label>
                  <select
                    id="enquiry-state"
                    name="state"
                    value={values.state}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.state)}
                    aria-describedby={describedBy('state')}
                    className={fieldClass(Boolean(errors.state))}
                  >
                    <option value="">Select state</option>
                    {stateOptions.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                  <FieldError id="enquiry-state-error" message={errors.state} />
                </div>

                <div className="sm:col-span-2">
                  <label className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                    <input
                      id="enquiry-consent"
                      name="consent"
                      type="checkbox"
                      checked={values.consent}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.consent)}
                      aria-describedby={describedBy('consent')}
                      className="mt-0.5 size-5 shrink-0 accent-navy dark:accent-marigold"
                    />
                    I agree to receive information regarding my submitted application from Tulas International School,
                    Dehradun.
                  </label>
                  <FieldError id="enquiry-consent-error" message={errors.consent} />
                </div>

                <button type="submit" className={buttonStyles('primary', 'sm:col-span-2 sm:justify-self-start sm:px-10')}>
                  Send enquiry
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  )
}
