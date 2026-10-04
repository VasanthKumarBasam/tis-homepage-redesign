import { motion } from 'motion/react'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { campusFacts } from '@/data/content'
import { revealGroup, revealItem, revealViewport } from '@/lib/motion'

export function CampusFacts() {
  return (
    <section aria-labelledby="secret-title" className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader
            id="secret-title"
            title="What’s the secret to making school awesome?"
            intro="It’s all about making learning feel like an adventure—where curiosity leads, creativity thrives, and every day brings something new to discover. When students are inspired, they don’t just learn—they grow, explore, and shape their own futures."
          />
          <p className="mt-6 font-display text-2xl font-bold">There, we cracked it!</p>
        </div>

        <motion.ul
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7"
          variants={revealGroup}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          {campusFacts.map((fact) => (
            <motion.li
              key={fact.label}
              variants={revealItem}
              className="flex items-center gap-5 rounded-3xl border border-line bg-surface p-6 sm:flex-col sm:items-start sm:p-8"
            >
              <img src={fact.icon} alt="" width={56} height={56} loading="lazy" className="size-14 object-contain" />
              <div>
                <p className="font-display text-5xl leading-none font-extrabold tracking-tight sm:text-6xl">
                  {fact.value}
                </p>
                <p className="mt-2 font-medium text-muted">{fact.label}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  )
}
