import { useCallback, useState } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'tis-theme'

const readTheme = (): Theme =>
  document.documentElement.classList.contains('dark') ? 'dark' : 'light'

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // Storage can be unavailable (private mode); the theme still applies for this visit.
  }
}

/**
 * The initial theme is set before paint by the inline script in index.html,
 * so this hook just reads it from <html>. Toggling uses the View Transitions API
 * to grow the new theme as a circle from the click point; browsers without it
 * (or users preferring reduced motion) get the CSS colour cross-fade instead.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readTheme)

  const toggleTheme = useCallback(
    (origin?: { x: number; y: number }) => {
      const next: Theme = theme === 'dark' ? 'light' : 'dark'
      const commit = () => {
        applyTheme(next)
        setTheme(next)
      }

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (!origin || reduceMotion || typeof document.startViewTransition !== 'function') {
        commit()
        return
      }

      const { x, y } = origin
      const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
      const transition = document.startViewTransition(commit)

      transition.ready.then(() => {
        document.documentElement.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          { duration: 550, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', pseudoElement: '::view-transition-new(root)' },
        )
      })
    },
    [theme],
  )

  return { theme, toggleTheme }
}
