import { useMotionValueEvent, useScroll } from 'motion/react'
import { useState } from 'react'

/**
 * True once the page is scrolled beyond `threshold` px.
 * Reads scroll through a motion value, so React state only updates when the
 * boolean actually flips — not on every scroll frame.
 */
export function useScrolledPast(threshold: number) {
  const { scrollY } = useScroll()
  const [past, setPast] = useState(false)

  useMotionValueEvent(scrollY, 'change', (y) => {
    const next = y > threshold
    setPast((prev) => (prev === next ? prev : next))
  })

  return past
}
