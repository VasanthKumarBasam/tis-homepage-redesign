export type ButtonVariant = 'primary' | 'outline'

const base =
  'inline-flex min-h-12 whitespace-nowrap items-center justify-center gap-2 rounded-full px-6 text-base font-semibold transition-[background-color,border-color,color,transform] duration-200 active:scale-[0.97]'

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-marigold text-navy hover:bg-[#ffc824]',
  outline: 'border-2 border-fg/20 text-fg hover:border-fg',
}

/** Shared CTA classes, used by both <ButtonLink> and real <button>s (form submit). */
export const buttonStyles = (variant: ButtonVariant = 'primary', className = '') =>
  `${base} ${variants[variant]} ${className}`
