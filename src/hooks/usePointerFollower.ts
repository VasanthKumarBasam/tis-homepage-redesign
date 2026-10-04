import { useMotionValue } from 'motion/react'
import { useEffect, useState } from 'react'

const INTERACTIVE = 'a, button, [role="tab"], input, select, textarea, label, [data-cursor="hover"]'

/**
 * Tracks the pointer in motion values (no React re-render per mousemove) and
 * exposes two booleans that change rarely: whether the pointer is over an
 * interactive element, and whether it is inside the window at all.
 */
export function usePointerFollower() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setIsVisible(true)
    }
    const handleOver = (e: PointerEvent) => {
      const target = e.target instanceof Element ? e.target : null
      setIsHovering(Boolean(target?.closest(INTERACTIVE)))
    }
    const handleLeave = () => setIsVisible(false)

    window.addEventListener('pointermove', handleMove, { passive: true })
    document.addEventListener('pointerover', handleOver, { passive: true })
    document.documentElement.addEventListener('pointerleave', handleLeave)

    return () => {
      window.removeEventListener('pointermove', handleMove)
      document.removeEventListener('pointerover', handleOver)
      document.documentElement.removeEventListener('pointerleave', handleLeave)
    }
  }, [x, y])

  return { x, y, isHovering, isVisible }
}
