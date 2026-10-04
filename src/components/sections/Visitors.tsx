import { AnimatePresence, motion } from 'motion/react'
import { useRef, useState, type KeyboardEvent } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { visitorGroups, type VisitorGroupId } from '@/data/content'
import { easeOutExpo } from '@/lib/motion'

export function Visitors() {
  const [activeId, setActiveId] = useState<VisitorGroupId>(visitorGroups[0].id)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const active = visitorGroups.find((g) => g.id === activeId) ?? visitorGroups[0]

  // WAI-ARIA tabs pattern: arrow keys move between tabs.
  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    const step = e.key === 'ArrowRight' ? 1 : -1
    const next = (index + step + visitorGroups.length) % visitorGroups.length
    setActiveId(visitorGroups[next].id)
    tabRefs.current[next]?.focus()
  }

  return (
    <section id="visitors" aria-labelledby="visitors-title" className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader id="visitors-title" title="Influential personalities on campus" />

          <div role="tablist" aria-label="Visitor categories" className="flex w-fit rounded-full border border-line bg-surface p-1">
            {visitorGroups.map((group, i) => {
              const selected = group.id === activeId
              return (
                <button
                  key={group.id}
                  ref={(el) => {
                    tabRefs.current[i] = el
                  }}
                  role="tab"
                  type="button"
                  id={`tab-${group.id}`}
                  aria-selected={selected}
                  aria-controls="visitors-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveId(group.id)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  className={`relative min-h-11 rounded-full px-4 text-sm font-semibold transition-colors sm:px-5 ${
                    selected ? 'text-navy' : 'text-muted hover:text-fg'
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="visitor-tab-pill"
                      className="absolute inset-0 rounded-full bg-marigold"
                      transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                    />
                  )}
                  <span className="relative">{group.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div id="visitors-panel" role="tabpanel" aria-labelledby={`tab-${active.id}`} className="mt-12">
          <AnimatePresence mode="wait">
            <motion.ul
              key={active.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35, ease: easeOutExpo }}
              className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0"
            >
              {active.people.map((person) => (
                <li key={person.name} className="w-64 shrink-0 snap-start lg:w-auto">
                  <figure className="group h-full overflow-hidden rounded-3xl border border-line bg-surface">
                    <div className="overflow-hidden">
                      <img
                        src={person.photo}
                        alt={person.name}
                        width={320}
                        height={360}
                        loading="lazy"
                        className="aspect-[8/9] w-full bg-line object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <figcaption className="p-5">
                      <p className="font-display text-lg leading-snug font-bold">{person.name}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{person.role}</p>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  )
}
