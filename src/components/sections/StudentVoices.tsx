import { Reveal } from '@/components/animation/Reveal'
import { Container } from '@/components/ui/Container'
import { studentVoices } from '@/data/content'

export function StudentVoices() {
  return (
    <section aria-label="Student life at Tulas" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-20 sm:gap-28">
        {studentVoices.map((voice, i) => (
          <Reveal key={voice.quote}>
            <figure className={`grid items-center gap-10 md:grid-cols-12 ${i % 2 ? 'md:[&>*:first-child]:order-2' : ''}`}>
              <div className="relative isolate mx-auto aspect-[4/5] w-full max-w-sm md:col-span-5">
                <div aria-hidden="true" className="absolute inset-x-4 bottom-0 -z-10 aspect-square rounded-full bg-marigold/80" />
                <img
                  src={voice.photo}
                  alt=""
                  width={420}
                  height={520}
                  loading="lazy"
                  className="absolute inset-0 size-full object-contain object-bottom"
                />
              </div>
              <div className="md:col-span-7">
                <blockquote className="font-display text-3xl leading-tight font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
                  “{voice.quote}”
                </blockquote>
                <figcaption className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{voice.body}</figcaption>
              </div>
            </figure>
          </Reveal>
        ))}
      </Container>
    </section>
  )
}
