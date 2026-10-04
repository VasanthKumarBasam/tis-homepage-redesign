import { motion } from 'motion/react'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { sports } from '@/data/content'
import { revealGroup, revealItem } from '@/lib/motion'

export function Sports() {
  return (
    <section id="sports" aria-labelledby="sports-title" className="bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeader
          id="sports-title"
          title="Sports? At Tulas it’s the foundation"
          intro="It’s not just a facility. 16+ sports curated to bring joy and discipline to your life."
        />

        <motion.ul
          className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8"
          variants={revealGroup}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {sports.map((sport) => (
            <motion.li key={sport.name} variants={revealItem}>
              <div className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-line bg-bg px-3 py-6 text-center transition-colors duration-300 hover:border-marigold hover:bg-marigold-soft dark:hover:bg-navy">
                <img
                  src={sport.icon}
                  alt=""
                  width={64}
                  height={64}
                  loading="lazy"
                  className="size-14 object-contain transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110"
                />
                <span className="text-sm font-semibold group-hover:text-navy dark:group-hover:text-white">{sport.name}</span>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  )
}
