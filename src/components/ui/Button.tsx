import type { AnchorHTMLAttributes } from 'react'
import { buttonStyles, type ButtonVariant } from './buttonStyles'

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: ButtonVariant; external?: boolean }

/** CTA rendered as a link — most CTAs on this page navigate somewhere. */
export function ButtonLink({ variant = 'primary', external, className, ...props }: ButtonLinkProps) {
  return (
    <a
      {...props}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      className={buttonStyles(variant, className)}
    />
  )
}
