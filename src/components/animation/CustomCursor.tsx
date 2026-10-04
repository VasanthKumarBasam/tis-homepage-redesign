import { motion, useSpring } from 'motion/react'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { usePointerFollower } from '@/hooks/usePointerFollower'

const SPRING = { stiffness: 450, damping: 38, mass: 0.5 }

function CursorRing() {
  const { x, y, isHovering, isVisible } = usePointerFollower()
  const springX = useSpring(x, SPRING)
  const springY = useSpring(y, SPRING)

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[100] size-9 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white mix-blend-difference"
      style={{ x: springX, y: springY }}
      animate={{ scale: isHovering ? 1.7 : 1, opacity: isVisible ? 1 : 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
    />
  )
}

/**
 * Only mounts (and only attaches pointer listeners) on fine pointers with
 * motion allowed, so touch devices and reduced-motion users get the native cursor only.
 */
export function CustomCursor() {
  const enabled = useMediaQuery('(pointer: fine) and (prefers-reduced-motion: no-preference)')
  return enabled ? <CursorRing /> : null
}
