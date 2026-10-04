import { motion, type Variants } from 'motion/react'
import { Phone } from 'lucide-react'
import { HandDrawnUnderline } from '@/components/animation/HandDrawnUnderline'
import { ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { contact } from '@/data/site'
import { easeOutExpo } from '@/lib/motion'
import { HeroPhotoStack } from './HeroPhotoStack'

const sequence: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const rise: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOutExpo } },
}

const highlights = ['CBSE affiliated', 'Co-ed boarding & day school', 'Class 4 to 12', 'Since 2012']

/** The page's one orchestrated load moment: copy rises in sequence, the doodle draws, photos fan in. */
export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-36 lg:pb-28">
      <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <motion.div className="lg:col-span-7" variants={sequence} initial="hidden" animate="show">
          <h1 id="hero-title">
            <motion.span variants={rise} className="block text-lg font-semibold text-muted sm:text-xl">
              Welcome to Tulas International School
            </motion.span>
            <motion.span
              variants={rise}
              className="mt-3 block font-display text-[clamp(3.25rem,10vw,7.5rem)] leading-[0.92] font-extrabold tracking-[-0.03em]"
            >
              Let’s do it
            </motion.span>
            <motion.span
              variants={rise}
              className="relative inline-block font-display text-[clamp(3.25rem,10vw,7.5rem)] leading-[1.05] font-extrabold tracking-[-0.03em]"
            >
              with Tulas
              <HandDrawnUnderline delay={0.75} />
            </motion.span>
          </h1>

          <motion.p variants={rise} className="mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            TIS is one of India’s top boarding and day schools in Dehradun. Our CBSE curriculum focuses on
            academic excellence, holistic development, and preparing students to be global leaders.
          </motion.p>

          <motion.div variants={rise} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={contact.applyUrl} external>
              Apply now
            </ButtonLink>
            <ButtonLink href="#enquire" variant="outline">
              Enquire now
            </ButtonLink>
            <a
              href={`tel:${contact.helpline}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 px-2 font-semibold sm:justify-start"
            >
              <Phone className="size-4" aria-hidden />
              {contact.helplineDisplay}
            </a>
          </motion.div>

          <motion.ul variants={rise} className="mt-10 flex flex-wrap gap-2" aria-label="School at a glance">
            {highlights.map((item) => (
              <li key={item} className="rounded-full border border-line bg-surface px-4 py-1.5 text-sm font-medium">
                {item}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <div className="lg:col-span-5">
          <HeroPhotoStack />
        </div>
      </Container>
    </section>
  )
}
