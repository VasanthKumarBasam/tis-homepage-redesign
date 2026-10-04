import { Compass } from 'lucide-react'
import { Reveal } from '@/components/animation/Reveal'
import { ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { contact } from '@/data/site'
import { tisAsset } from '@/lib/asset'

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-surface py-20 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionHeader id="about-title" title="Boarding and day school excellence" />
          <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-muted">
            <p>
              We provide world-class education, modern facilities, and a nurturing environment for students to
              thrive academically, socially, and culturally.
            </p>
            <p>Join TIS to be part of a community that encourages leadership, innovation, and lifelong learning.</p>
            <p>
              Explore our programs, campus life, achievements, and why TIS is the preferred choice for parents
              across India.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <figure className="relative overflow-hidden rounded-[2rem]">
            <img
              src={tisAsset('Image 1.0a814859.webp')}
              alt="Students on the Tulas International School campus in Dehradun"
              width={720}
              height={540}
              loading="lazy"
              className="aspect-[4/3] w-full bg-line object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-4 bg-gradient-to-t from-navy-deep/95 via-navy-deep/70 to-transparent p-6 pt-24 text-white sm:flex-row sm:items-end sm:justify-between sm:p-8 sm:pt-28">
              <p className="max-w-xs font-display text-2xl leading-tight font-bold">
                Walk the 22-acre campus from home
              </p>
              <ButtonLink href={contact.virtualTourUrl} external className="shrink-0">
                <Compass className="size-5" aria-hidden />
                Take the virtual tour
              </ButtonLink>
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </section>
  )
}
