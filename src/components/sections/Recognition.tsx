import { motion } from 'motion/react'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { rankings } from '@/data/content'
import { revealGroup, revealItem, revealViewport } from '@/lib/motion'

export function Recognition() {
  return (
    <section id="recognition" aria-labelledby="recognition-title" className="bg-navy py-20 text-white sm:py-28">
      <Container>
        <SectionHeader
          id="recognition-title"
          tone="onDark"
          title="Awards & rankings"
          intro="We believe in celebrating the hard work and perseverance of the best!"
        />

        <motion.ol
          className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/15 sm:grid-cols-2 lg:grid-cols-4"
          variants={revealGroup}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          {rankings.map((r) => (
            <motion.li key={`${r.rank}-${r.scope}`} variants={revealItem} className="flex flex-col bg-navy p-8">
              <p className="font-display text-7xl leading-none font-extrabold text-marigold">{r.rank}</p>
              <p className="mt-4 font-display text-2xl font-bold">{r.scope}</p>
              <p className="mt-2 text-white/75">{r.detail}</p>
              <p className="mt-auto pt-6 text-sm font-semibold text-white/60">by {r.source}</p>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </section>
  )
}
