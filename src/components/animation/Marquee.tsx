import type { ReactNode } from 'react'

type MarqueeProps<T> = {
  items: readonly T[]
  getKey: (item: T) => string
  renderItem: (item: T) => ReactNode
  label: string
}

/**
 * Pure-CSS infinite strip (transform-only keyframes, GPU friendly).
 * The list is rendered twice and shifted by -50%; the copy is hidden from
 * assistive tech. Pauses on hover; reduced-motion users get a static row.
 */
export function Marquee<T>({ items, getKey, renderItem, label }: MarqueeProps<T>) {
  const row = items.map((item) => <li key={getKey(item)}>{renderItem(item)}</li>)

  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        <ul aria-label={label} className="flex gap-4 pr-4">
          {row}
        </ul>
        <ul aria-hidden="true" className="flex gap-4 pr-4">
          {row}
        </ul>
      </div>
    </div>
  )
}
