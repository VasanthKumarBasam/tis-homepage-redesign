import type { ReactNode } from 'react'

type SectionHeaderProps = {
  id: string
  title: ReactNode
  intro?: ReactNode
  tone?: 'default' | 'onDark'
  className?: string
}

/** Section h2 + optional intro; `id` is used by the section's aria-labelledby. */
export function SectionHeader({ id, title, intro, tone = 'default', className = '' }: SectionHeaderProps) {
  const introColor = tone === 'onDark' ? 'text-white/75' : 'text-muted'
  return (
    <div className={`max-w-2xl ${className}`}>
      <h2 id={id} className="font-display text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-5xl">
        {title}
      </h2>
      {intro && <p className={`mt-4 text-lg leading-relaxed ${introColor}`}>{intro}</p>}
    </div>
  )
}
