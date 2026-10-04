import { AnimatePresence, motion, type PanInfo, type Variants } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { parentReviews } from '@/data/content'
import { easeOutExpo } from '@/lib/motion'

const SWIPE_THRESHOLD = 80

const slide: Variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 64 : -64, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.4, ease: easeOutExpo } },
  exit: (dir: number) => ({ x: dir > 0 ? -64 : 64, opacity: 0, transition: { duration: 0.25 } }),
}

const navButton =
  'grid size-12 place-items-center rounded-full border border-line bg-surface transition-colors hover:border-fg/40'

export function ParentReviews() {
  // [index, direction] kept together so the exit animation always knows which way to slide.
  const [[index, direction], setPage] = useState<[number, number]>([0, 0])
  const review = parentReviews[index]
  const count = parentReviews.length

  const paginate = (dir: number) => setPage(([i]) => [(i + dir + count) % count, dir])

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD) paginate(1)
    else if (info.offset.x > SWIPE_THRESHOLD) paginate(-1)
  }

  return (
    <section id="parents" aria-labelledby="parents-title" className="bg-surface py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader id="parents-title" title="From the parents" />
          <p className="mt-6 text-xl leading-relaxed text-muted">
            “We have seen a remarkable improvement in our child’s confidence and skills since joining Tulas. The
            teachers here are genuinely dedicated to bringing out the best in every student, nurturing their
            strengths and helping them grow in all aspects of life.”
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-[2rem] bg-navy p-8 text-white sm:p-12" aria-live="polite">
            <p className="text-sm font-semibold text-marigold">
              Google review {index + 1} of {count}
            </p>
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.figure
                key={index}
                custom={direction}
                variants={slide}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                className="mt-6 min-h-64 cursor-grab touch-pan-y active:cursor-grabbing sm:min-h-56"
              >
                <blockquote className="font-display text-2xl leading-snug font-semibold sm:text-3xl">
                  “{review.text}”
                </blockquote>
                <figcaption className="mt-8">
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-white/70">{review.relation}</p>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex gap-1">
              {parentReviews.map((r, i) => (
                <button
                  key={r.name}
                  type="button"
                  aria-label={`Show review from ${r.name}`}
                  aria-current={i === index}
                  onClick={() => setPage([i, i > index ? 1 : -1])}
                  className="grid size-6 place-items-center"
                >
                  <span
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === index ? 'w-6 bg-marigold' : 'w-2 bg-line'
                    }`}
                  />
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button type="button" onClick={() => paginate(-1)} aria-label="Previous review" className={navButton}>
                <ChevronLeft className="size-5" aria-hidden />
              </button>
              <button type="button" onClick={() => paginate(1)} aria-label="Next review" className={navButton}>
                <ChevronRight className="size-5" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
