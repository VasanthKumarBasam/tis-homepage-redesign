import { Marquee } from '@/components/animation/Marquee'
import { Container } from '@/components/ui/Container'
import { partnerLogos } from '@/data/content'

const renderLogo = (src: string) => (
  <div className="grid h-20 w-40 place-items-center rounded-2xl bg-white p-3 ring-1 ring-line">
    <img src={src} alt="" width={140} height={64} loading="lazy" className="max-h-full w-auto object-contain" />
  </div>
)

export function Partners() {
  return (
    <section aria-labelledby="partners-title" className="py-16 sm:py-20">
      <Container>
        <h2 id="partners-title" className="font-display text-2xl font-bold sm:text-3xl">
          12+ international collaborations
        </h2>
      </Container>
      <div className="mt-8">
        <Marquee items={partnerLogos} getKey={(src) => src} renderItem={renderLogo} label="Partner institutions" />
      </div>
    </section>
  )
}
