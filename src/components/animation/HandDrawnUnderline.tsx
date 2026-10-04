import { motion } from 'motion/react'

/** The TIS "yellow line" doodle, drawn in once on page load. */
export function HandDrawnUnderline({ delay = 0.6 }: { delay?: number }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 300 24"
      preserveAspectRatio="none"
      className="absolute -bottom-2 left-0 h-[0.28em] w-full overflow-visible"
    >
      <motion.path
        d="M4 15 C 60 5, 130 3, 190 9 S 280 19, 296 7"
        fill="none"
        stroke="var(--color-marigold)"
        strokeWidth="7"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.9, delay, ease: 'easeInOut' }}
      />
    </svg>
  )
}
