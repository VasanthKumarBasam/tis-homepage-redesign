import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { revealItem, revealViewport } from '@/lib/motion'

type RevealProps = { children: ReactNode; className?: string }

/** Single-block scroll reveal. For lists, use revealGroup/revealItem variants directly. */
export function Reveal({ children, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={revealItem}
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
    >
      {children}
    </motion.div>
  )
}
