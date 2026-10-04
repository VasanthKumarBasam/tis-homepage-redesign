import { AnimatePresence, motion } from 'motion/react'
import { Moon, Sun } from 'lucide-react'
import type { MouseEvent } from 'react'
import { useTheme } from '@/hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    toggleTheme({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 })
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="relative grid size-11 place-items-center overflow-hidden rounded-full border border-line text-fg transition-colors hover:border-fg/40"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: 14, rotate: -90, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          exit={{ y: -14, rotate: 90, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="grid place-items-center"
        >
          {isDark ? <Moon className="size-5" aria-hidden /> : <Sun className="size-5" aria-hidden />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
