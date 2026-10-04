import type { Variants } from 'motion/react'

/** Shared easing + variants so every reveal on the page moves with the same rhythm. */
export const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1]

export const revealViewport = { once: true, amount: 0.2 } as const

export const revealGroup: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOutExpo } },
}
